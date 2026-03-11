import { defineNuxtPlugin } from '#app'
import { client } from '~/api/appwriteClient'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  
  const endpoint = config.public.appwriteEndpoint || 'https://api.tixo-game.com/v1'
  const projectId = config.public.appwriteProjectId || 'tixo'

  client
    .setEndpoint(endpoint)
    .setProject(projectId)

  // On client-side, Appwrite SDK handles cookies automatically if endpoint is same domain or with CORS/Credentials.
  // On server-side (SSR), we might need to manually pass cookies if we want SSR auth.
  if (import.meta.server) {
    const event = useRequestEvent()
    const cookie = event?.node.req.headers.cookie
    if (cookie) {
      // client.setHeaders({ cookie }) // Note: Web SDK doesn't always support setHeaders for cookies easily in SSR
    }
  }

  return {
    provide: {
      appwrite: client
    }
  }
})
