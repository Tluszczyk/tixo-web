import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "auth" | "dashboard-redirect"
declare module 'nuxt/app' {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}