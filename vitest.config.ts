import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
    setupFiles: ['./tests/setup.ts'],
    globals: true,
    include: ['tests/**/*.spec.ts'],
    exclude: ['**/node_modules/**', '**/dist/**', '**/e2e/**', '**/.nuxt/**', '**/.output/**'],
    environmentOptions: {
      nuxt: {
        domEnvironment: 'happy-dom',
      }
    },
    testTimeout: 10000,
  },
  // Override Nuxt config for testing to disable heavy modules
  nuxt: {
    modules: ['@pinia/nuxt'],
    nitro: {
      preset: 'node'
    }
  }
})
