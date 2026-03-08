export default defineNuxtRouteMiddleware(async (to) => {
  const authStore = useAuthStore()
  
  if (!authStore.user) {
    await authStore.checkAuth()
  }

  if (!authStore.isLoggedIn) {
    authStore.openLoginModal(to.fullPath)
    return navigateTo('/')
  }
})
