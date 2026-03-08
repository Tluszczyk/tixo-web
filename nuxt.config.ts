import { fileURLToPath } from 'url'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@primevue/nuxt-module'
  ],
  primevue: {
    options: {
      theme: {
        preset: 'Aura',
        options: {
          prefix: 'p',
          darkModeSelector: '.dark',
          cssLayer: false,
        },
      },
    }
  },
  css: [
    'primeicons/primeicons.css',
    '~/assets/index.css'
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  nitro: {
    preset: 'node-server'
  },
  srcDir: '.',
  runtimeConfig: {
    public: {
      appwriteEndpoint: process.env.VITE_APPWRITE_API_URL,
      appwriteProjectId: process.env.VITE_APPWRITE_PROJECT_ID
    }
  },
  alias: {
    '~': fileURLToPath(new URL('./', import.meta.url)),
    '@': fileURLToPath(new URL('./', import.meta.url))
  }
})
