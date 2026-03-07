<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import CenterLayout from '@/layouts/CenterLayout.vue'

const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()

onMounted(() => {
  if (authStore.isLoggedIn) {
    router.push('/')
  } else {
    // Check if there's a redirect query param
    const redirect = route.query.redirect as string
    authStore.openLoginModal(redirect)
  }
})

// If user is on this page and closes the modal without logging in, go to home
watch(
  () => authStore.isLoginModalOpen,
  (isOpen) => {
    if (!isOpen && !authStore.isLoggedIn && route.name === 'login') {
      router.push('/')
    }
  }
)

// If user somehow logs in while on this page (e.g. modal success), go to home or redirect
watch(
  () => authStore.isLoggedIn,
  (isLoggedIn) => {
    if (isLoggedIn && route.name === 'login') {
      const redirect = authStore.redirectAfterLogin || '/'
      router.push(redirect)
    }
  }
)
</script>

<template>
  <CenterLayout>
    <div class="text-center space-y-8 animate-pulse">
      <h1 class="text-4xl font-black text-app-text tracking-tighter uppercase italic opacity-20">
        Authenticating<span class="text-indigo-500">...</span>
      </h1>
      <p class="text-[10px] font-black uppercase tracking-[0.4em] text-app-text-muted opacity-10">
        Establishing Secure Connection
      </p>
    </div>
  </CenterLayout>
</template>
