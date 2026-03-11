import { fileURLToPath } from 'url'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  ssr: true,
  app: {
    baseURL: '/',
    buildAssetsDir: '/_nuxt/',
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  devServer: {
  },
  modules: [
    '@pinia/nuxt',
    '@primevue/nuxt-module',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],
  nitro: {
    static: true,
    prerender: {
      crawlLinks: true,
      failOnError: false,
      routes: ['/sitemap.xml']
    },
  },
  routeRules: {
    // Dynamic game and analysis pages should be client-side only in SSG
    '/game/**': { ssr: false },
    '/analysis/**': { ssr: false },
    '/users/**': { ssr: false },
    // Auth-protected pages are better as SPA to avoid flashing of protected content
    '/dashboard': { ssr: false },
    '/profile': { ssr: false },
  },
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || 'https://tixo-game.com',
    name: 'Tixo - Ultimate Tic-Tac-Toe',
  },
  sitemap: {
    enabled: true,
  },
  robots: {
    enabled: true,
    allow: ['/'],
    robotsTxt: false
  },
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
  build: {
    transpile: ['appwrite'],
  },
  sourcemap: { server: false, client: false },
  vite: {
    build: {
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('echarts')) {
              return 'echarts'
            }
            if (id.includes('primevue')) {
              return 'primevue'
            }
          }
        }
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    plugins: [tailwindcss() as any],
    esbuild: {
      target: 'es2020',
    },
  },
  srcDir: '.',
  runtimeConfig: {
    public: {
      appwriteEndpoint: process.env.VITE_APPWRITE_API_URL,
      appwriteProjectId: process.env.VITE_APPWRITE_PROJECT_ID,
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://tixo-game.com'
    }
  },
  alias: {
    '~': fileURLToPath(new URL('./', import.meta.url)),
    '@': fileURLToPath(new URL('./', import.meta.url))
  }
})
