import { functions, tablesDB } from '@/api/appwriteClient'
import type { Notification } from '@/api/dto/Notification'
import { HandleAppwriteErrors } from '@/api/utils/decorators'
import { Query } from 'appwrite'

class NotificationsService {
  @HandleAppwriteErrors({}, [])
  async listNotifications(): Promise<Notification[]> {
    const rowList = await tablesDB.listRows<Notification>({
      databaseId: 'tixo',
      tableId: 'in-app-notifications',
      queries: [Query.orderDesc('$createdAt'), Query.limit(10)],
    })
    return rowList.rows
  }

  @HandleAppwriteErrors({}, false)
  async markAsRead(notificationId: string): Promise<boolean> {
    const execution = await functions.createExecution({
      functionId: 'app-handler',
      body: JSON.stringify({ notificationId }),
      xpath: '/notifications/read',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (execution.status === 'completed') {
      try {
        const response = JSON.parse(execution.responseBody)
        return !!response.success
      } catch (e) {
        console.error('Failed to parse markAsRead response', e)
        return false
      }
    }
    return false
  }

  @HandleAppwriteErrors({}, false)
  async markAllAsRead(): Promise<boolean> {
    const execution = await functions.createExecution({
      functionId: 'app-handler',
      body: JSON.stringify({}),
      xpath: '/notifications/read-all',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (execution.status === 'completed') {
      try {
        const response = JSON.parse(execution.responseBody)
        return !!response.success
      } catch (e) {
        console.error('Failed to parse markAllAsRead response', e)
        return false
      }
    }
    return false
  }
}

export const notifications = new NotificationsService()
