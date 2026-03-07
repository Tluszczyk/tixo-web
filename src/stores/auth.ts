import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { auth } from '@/api/authentication'
import type { Models } from 'appwrite'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<Models.User<Models.Preferences> | null>(null)
  const isLoginModalOpen = ref(false)
  const redirectAfterLogin = ref<string | null>(null)

  const isLoggedIn = computed(() => !!user.value)

  async function checkAuth() {
    try {
      const currentUser = await auth.getCurrentUser()
      user.value = currentUser
      return !!currentUser
    } catch {
      user.value = null
      return false
    }
  }

  function openLoginModal(redirect?: string) {
    redirectAfterLogin.value = redirect || null
    isLoginModalOpen.value = true
  }

  function closeLoginModal() {
    isLoginModalOpen.value = false
    redirectAfterLogin.value = null
  }

  async function logout() {
    await auth.logout()
    user.value = null
  }

  return {
    user,
    isLoggedIn,
    isLoginModalOpen,
    redirectAfterLogin,
    checkAuth,
    openLoginModal,
    closeLoginModal,
    logout
  }
})
