import type { Models } from 'appwrite'

export interface Notification extends Models.DefaultRow {
  receiverId: string
  message: string
  redirectPath: string
  isOpened: boolean
  type?: string
}
