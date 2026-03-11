import { Client, Account, TablesDB, Functions, Realtime, ID } from 'appwrite'

// In Nuxt, we might want these to be singletons but safe for SSR.
// However, since we are in a migration, I'll try to keep them as exports but initialized lazily if needed,
// or just initialize them normally if they don't break the build.
// Standard Appwrite Client is generally safe to instantiate on server, but won't have cookies unless set.

export const client = new Client()

// Default fallback, will be overridden by ~/plugins/appwrite.ts using runtimeConfig
const endpoint = import.meta.env.VITE_APPWRITE_API_URL || 'https://api.tixo-game.com/v1'
const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID || 'tixo'

client
  .setEndpoint(endpoint)
  .setProject(projectId)

export const account = new Account(client)
export const tablesDB = new TablesDB(client)
export const functions = new Functions(client)
// Realtime should only be used on client
export const realtime = typeof window !== 'undefined' ? new Realtime(client) : ({} as Realtime)

export { ID }
