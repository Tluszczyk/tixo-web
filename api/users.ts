import { functions } from '~/api/appwriteClient'
import { ExecutionMethod } from 'appwrite'
import { ref } from 'vue'

export interface User {
  $id: string
  name: string
  email: string
  registration: string
  status: boolean
  labels: string[]
  rating?: number
  prefs?: {
    isBot: boolean
    modelName: string
    depth: number
    errorRate: number
  }
}

const userCache = ref<Record<string, User>>({})
const pendingRequests = new Map<string, Promise<User | null>>()

class UserService {
  async listUsers(search?: string, limit: number = 25, offset: number = 0): Promise<{ users: User[]; total: number }> {
    let xpath = search ? `/users/list?id=${encodeURIComponent(search)}` : '/users/list'
    xpath += xpath.includes('?') ? `&limit=${limit}&offset=${offset}` : `?limit=${limit}&offset=${offset}`

    const execution = await functions.createExecution({
      functionId: 'app-handler',
      xpath: xpath,
      method: ExecutionMethod.GET,
    })

    if (execution.status === 'completed') {
      try {
        const response = JSON.parse(execution.responseBody)
        const userList = response.users || []
        // Update cache
        userList.forEach((u: User) => {
          userCache.value[u.$id] = u
        })
        return { users: userList, total: response.total || userList.length }
      } catch (e) {
        console.error('Failed to parse listUsers response', e)
        return { users: [], total: 0 }
      }
    }
    return { users: [], total: 0 }
  }

  async fetchUsersByIds(ids: string[]): Promise<User[]> {
    if (ids.length === 0) return []

    // Filter out IDs already in cache
    const missingIds = ids.filter((id) => !userCache.value[id])
    if (missingIds.length === 0) {
      return ids.map((id) => userCache.value[id]).filter((u): u is User => !!u)
    }

    const execution = await functions.createExecution({
      functionId: 'app-handler',
      xpath: '/users/list',
      method: ExecutionMethod.POST,
      body: JSON.stringify({ ids: missingIds }),
    })

    if (execution.status === 'completed') {
      try {
        const response = JSON.parse(execution.responseBody)
        const userList = response.users || []
        // Update cache
        userList.forEach((u: User) => {
          userCache.value[u.$id] = u
        })
        return ids.map((id) => userCache.value[id]).filter((u): u is User => !!u)
      } catch (e) {
        console.error('Failed to parse fetchUsersByIds response', e)
        return []
      }
    }
    return []
  }

  async listBots(): Promise<User[]> {
    const execution = await functions.createExecution({
      functionId: 'app-handler',
      xpath: '/users/bots',
      method: ExecutionMethod.GET,
    })

    if (execution.status === 'completed') {
      try {
        const response = JSON.parse(execution.responseBody)
        const bots = response.bots || []
        // Update cache
        bots.forEach((u: User) => {
          userCache.value[u.$id] = u
        })
        return bots
      } catch (e) {
        console.error('Failed to parse listBots response', e)
        return []
      }
    }
    return []
  }

  async getUser(userId: string): Promise<User | null> {
    if (userCache.value[userId]) return userCache.value[userId]

    // If there is already a pending request for this user, wait for it
    if (pendingRequests.has(userId)) {
      return pendingRequests.get(userId)!
    }

    const requestPromise = (async () => {
      try {
        const execution = await functions.createExecution({
          functionId: 'app-handler',
          xpath: `/users/details?id=${userId}`,
          method: ExecutionMethod.GET,
          body: JSON.stringify({ id: userId }),
        })

        if (execution.status === 'completed') {
          const response = JSON.parse(execution.responseBody)
          if (response.user) {
            userCache.value[userId] = response.user
            return response.user
          }
        }
        return null
      } catch (e) {
        console.error('Failed to fetch user details', e)
        return null
      } finally {
        pendingRequests.delete(userId)
      }
    })()

    pendingRequests.set(userId, requestPromise)
    return requestPromise
  }

  getUserFromCache(userId: string): User | null {
    return userCache.value[userId] || null
  }
}

export const users = new UserService()
