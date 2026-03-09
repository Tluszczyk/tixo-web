<script setup lang="ts">
import BaseButton from '~/components/Common/BaseButton.vue'
import { ref } from 'vue'

import { auth, LoginStatus } from '~/api/authentication'
import { useAuthStore } from '~/stores/auth'

const authStore = useAuthStore()
const router = useRouter()

const email = ref('')
const password = ref('')
const name = ref('')
const isRegister = ref(false)
const loading = ref(false)
const error = ref<string | null>(null)

const isLocalhost = ref(false)

onMounted(() => {
  if (typeof window !== 'undefined') {
    isLocalhost.value = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  }
})

const handleAuth = async () => {
  loading.value = true
  error.value = null
  try {
    const result = isRegister.value
      ? await auth.register(email.value, password.value, name.value)
      : await auth.login(email.value, password.value)

    const { status, message } = result

    if (status === LoginStatus.OK) {
      await authStore.checkAuth()
      const redirect = authStore.redirectAfterLogin
      authStore.closeLoginModal()
      if (redirect) {
        router.push(redirect)
      }
    } else if (status === LoginStatus.INVALID_CREDENTIALS) {
      error.value = `Invalid Protocol Credentials: ${message}`
    } else if (status === LoginStatus.USER_ALREADY_EXISTS) {
      error.value = `Identity Conflict: ${message}`
    } else if (status === LoginStatus.USER_BLOCKED) {
      error.value = `Access Denied: ${message}`
    } else if (status === LoginStatus.RATE_LIMIT_EXCEEDED) {
      error.value = `Service Overload: ${message}`
    } else if (status === LoginStatus.INVALID_FORMAT) {
      error.value = `Data Format Violation: ${message}`
    } else {
      error.value = `System Error: ${message || 'Authentication Protocol Failure'}`
    }
  } catch (e) {
    console.error('Authentication error:', e)
    error.value = 'Failed to connect to authentication service'
  } finally {
    loading.value = false
  }
}

const handleGoogleLogin = async () => {
  if (isLocalhost.value) return
  loading.value = true
  error.value = null
  try {
    const redirect = authStore.redirectAfterLogin || '/'
    await auth.loginWithGoogle(redirect)
  } catch (e) {
    console.error('Google login error:', e)
    error.value = 'Failed to initiate Google login'
    loading.value = false
  }
}

const loginAnonymously = async () => {
  loading.value = true
  error.value = null
  try {
    const result = await auth.loginAnonymously()
    if (result.status === LoginStatus.OK) {
      await authStore.checkAuth()
      const redirect = authStore.redirectAfterLogin
      authStore.closeLoginModal()
      if (redirect) {
        router.push(redirect)
      }
    } else {
      error.value = `Guest Protocol Failure: ${result.message}`
    }
  } catch (e) {
    console.error('Anonymous login error:', e)
    error.value = 'Connection failure'
  } finally {
    loading.value = false
  }
}

const closeModal = () => {
  authStore.closeLoginModal()
}
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="authStore.isLoginModalOpen"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-void/80 backdrop-blur-md px-4"
        @click.self="closeModal"
      >
        <div class="w-full max-w-md relative animate-in zoom-in duration-300">
          <!-- Close Button -->
          <BaseButton
            size="sm"
            variant="ghost"
            class="absolute -top-12 right-0 w-10 h-10 rounded-full z-10"
            @click="closeModal"
          >
            <i class="pi pi-times hover:rotate-90 transition-transform"></i>
          </BaseButton>

          <div class="space-y-8">
            <!-- Logo/Branding -->
            <div class="text-center space-y-4">
              <div
                class="inline-flex items-center gap-3 px-4 py-1 rounded-full glass border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4"
              >
                Security Protocol Active
              </div>
              <h1 class="text-5xl font-black text-app-text tracking-tighter uppercase italic leading-none">
                Tixo<span class="text-indigo-500">.</span>
              </h1>
            </div>

            <!-- Login Card -->
            <div
              class="glass border-glass-border rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden group"
            >
              <div
                class="absolute -top-24 -right-24 w-48 h-48 bg-indigo-600/10 blur-3xl rounded-full transition-all duration-1000 group-hover:bg-indigo-600/20"
              ></div>

              <form @submit.prevent="handleAuth" class="space-y-6 relative z-10">
                <div v-if="isRegister" class="space-y-2">
                  <label class="text-[10px] font-black uppercase tracking-[0.2em] text-app-text-muted opacity-30 ml-4"
                    >Name</label
                  >
                  <input
                    v-model="name"
                    type="text"
                    required
                    placeholder="Operator Name"
                    class="w-full px-6 py-4 rounded-2xl glass border-glass-border text-app-text placeholder:text-app-text-muted opacity-10 focus:opacity-100 focus:outline-none focus:border-indigo-500/50 transition-all text-sm mono"
                  />
                </div>

                <div class="space-y-2">
                  <label class="text-[10px] font-black uppercase tracking-[0.2em] text-app-text-muted opacity-30 ml-4"
                    >Identifier</label
                  >
                  <input
                    v-model="email"
                    type="email"
                    required
                    placeholder="operator@tixo.net"
                    class="w-full px-6 py-4 rounded-2xl glass border-glass-border text-app-text placeholder:text-app-text-muted opacity-10 focus:opacity-100 focus:outline-none focus:border-indigo-500/50 transition-all text-sm mono"
                  />
                </div>

                <div class="space-y-2">
                  <label class="text-[10px] font-black uppercase tracking-[0.2em] text-app-text-muted opacity-30 ml-4"
                    >Access Key</label
                  >
                  <input
                    v-model="password"
                    type="password"
                    required
                    placeholder="••••••••"
                    class="w-full px-6 py-4 rounded-2xl glass border-glass-border text-app-text placeholder:text-app-text-muted opacity-10 focus:opacity-100 focus:outline-none focus:border-indigo-500/50 transition-all text-sm mono"
                  />
                </div>

                <div
                  v-if="error"
                  class="p-4 rounded-xl bg-red-500/5 border border-red-500/20 text-red-400 text-[10px] font-black uppercase tracking-widest text-center animate-shake"
                >
                  {{ error }}
                </div>

                <BaseButton
                  type="submit"
                  :disabled="loading"
                  size="lg"
                  variant="primary"
                  block
                  :loading="loading"
                >
                  {{ isRegister ? 'Commission Account' : 'Authorize' }}
                </BaseButton>

                <div class="text-center">
                  <BaseButton
                    type="button"
                    variant="ghost"
                    size="sm"
                    @click="isRegister = !isRegister"
                    class="text-app-text-muted opacity-20 hover:opacity-40 transition-all font-black uppercase tracking-[0.2em] !bg-transparent"
                  >
                    {{ isRegister ? 'Already commissioned? Access Protocol' : 'New operator? Request Commission' }}
                  </BaseButton>
                </div>
              </form>

              <div class="relative z-10 mt-8 space-y-6">
                <div class="flex items-center gap-4">
                  <div class="h-[1px] flex-1 bg-glass-border"></div>
                  <span class="text-[9px] font-black uppercase tracking-[0.3em] text-app-text-muted opacity-10"
                    >External Access</span
                  >
                  <div class="h-[1px] flex-1 bg-glass-border"></div>
                </div>

                <BaseButton
                  variant="secondary"
                  size="md"
                  block
                  :disabled="loading || isLocalhost"
                  :loading="loading"
                  icon-left="pi pi-google"
                  @click="handleGoogleLogin"
                  :class="[
                    'transition-all',
                    isLocalhost
                      ? 'opacity-20 grayscale cursor-not-allowed pointer-events-none'
                      : 'text-app-text-muted opacity-40 hover:opacity-100 hover:text-app-text',
                  ]"
                >
                  <span>{{ isLocalhost ? 'Google (Cloud Only)' : 'Google Protocol' }}</span>
                </BaseButton>

                <BaseButton
                  variant="secondary"
                  size="md"
                  block
                  :disabled="loading"
                  :loading="loading"
                  icon-left="pi pi-user-plus"
                  @click="loginAnonymously"
                  class="text-app-text-muted opacity-40 hover:opacity-100 hover:text-app-text"
                >
                  <span>Guest Protocol</span>
                </BaseButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-4px);
  }
  75% {
    transform: translateX(4px);
  }
}
.animate-shake {
  animation: shake 0.2s ease-in-out 0s 2;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
