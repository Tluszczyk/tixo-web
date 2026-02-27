import { functions } from '@/api/appwriteClient'
import { HandleAppwriteErrors } from './utils/decorators'
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
}

const userCache = ref<Record<string, User>>({})

class UserService {
  @HandleAppwriteErrors({}, [])
  async listUsers(search?: string): Promise<User[]> {
    const xpath = search ? `/list?id=${encodeURIComponent(search)}` : '/list'
    const execution = await functions.createExecution({
      functionId: 'users-handler',
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
        return userList
      } catch (e) {
        console.error('Failed to parse listUsers response', e)
        return []
      }
    }
    return []
  }

  @HandleAppwriteErrors({}, null)
  async getUser(userId: string): Promise<User | null> {
    if (userCache.value[userId]) return userCache.value[userId]

    const execution = await functions.createExecution({
      functionId: 'users-handler',
      xpath: `/details?id=${userId}`,
      method: ExecutionMethod.GET,
      body: JSON.stringify({ id: userId })
    })

    if (execution.status === 'completed') {
      try {
        const response = JSON.parse(execution.responseBody)
        if (response.user) {
          userCache.value[userId] = response.user
          return response.user
        }
      } catch (e) {
        console.error('Failed to parse getUser response', e)
      }
    }
    return null
  }

  getUserFromCache(userId: string): User | null {
    return userCache.value[userId] || null
  }
}

export const users = new UserService()
