<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth, LoginStatus } from '@/api/authentication'
import CenterLayout from '@/layouts/CenterLayout.vue'

const router = useRouter()
const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref<string | null>(null)

const handleLogin = async () => {
  loading.value = true
  error.value = null
  try {
    const status = await auth.login(email.value, password.value)
    if (status === LoginStatus.OK) {
      router.push('/')
    } else if (status === LoginStatus.INVALID_CREDENTIALS) {
      error.value = 'Invalid email or password'
    } else {
      error.value = 'An unexpected error occurred'
    }
  } catch (e) {
    console.error('Login error:', e)
    error.value = 'Failed to connect to authentication service'
  } finally {
    loading.value = false
  }
}

const loginAnonymously = async () => {
  loading.value = true
  error.value = null
  try {
    const status = await auth.loginAnonymously()
    if (status === LoginStatus.OK) {
      router.push('/')
    } else {
      error.value = 'Anonymous login failed'
    }
  } catch (e) {
    console.error('Anonymous login error:', e)
    error.value = 'Connection failure'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <CenterLayout>
    <div class="w-full max-w-md space-y-12 animate-in fade-in zoom-in duration-1000 noise">
      <!-- Logo/Branding -->
      <div class="text-center space-y-4">
        <div class="inline-flex items-center gap-3 px-4 py-1 rounded-full glass border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
            Security Protocol Active
        </div>
        <h1 class="text-6xl font-black text-white tracking-tighter uppercase italic leading-none">
          Tixo<span class="text-indigo-500">.</span>
        </h1>
        <p class="text-white/20 text-[10px] font-black uppercase tracking-[0.4em]">Tactical Intelligence System</p>
      </div>

      <!-- Login Card -->
      <div class="glass border-white/[0.05] rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden group">
        <div class="absolute -top-24 -right-24 w-48 h-48 bg-indigo-600/10 blur-3xl rounded-full transition-all duration-1000 group-hover:bg-indigo-600/20"></div>
        
        <form @submit.prevent="handleLogin" class="space-y-6 relative z-10">
          <div class="space-y-2">
            <label class="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-4">Identifier</label>
            <input 
              v-model="email"
              type="email" 
              required
              placeholder="operator@tixo.net"
              class="w-full px-6 py-4 rounded-2xl glass border-white/[0.05] text-white placeholder:text-white/10 focus:outline-none focus:border-indigo-500/50 transition-all text-sm mono"
            />
          </div>

          <div class="space-y-2">
            <label class="text-[10px] font-black uppercase tracking-[0.2em] text-white/30 ml-4">Access Key</label>
            <input 
              v-model="password"
              type="password" 
              required
              placeholder="••••••••"
              class="w-full px-6 py-4 rounded-2xl glass border-white/[0.05] text-white placeholder:text-white/10 focus:outline-none focus:border-indigo-500/50 transition-all text-sm mono"
            />
          </div>

          <div v-if="error" class="p-4 rounded-xl bg-red-500/5 border border-red-500/20 text-red-400 text-[10px] font-black uppercase tracking-widest text-center animate-shake">
            {{ error }}
          </div>

          <button 
            type="submit"
            :disabled="loading"
            class="w-full py-5 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-slate-200 transition-all shadow-xl shadow-white/5 disabled:opacity-50 active:scale-[0.98] flex items-center justify-center gap-3"
          >
            <i v-if="loading" class="pi pi-spin pi-spinner"></i>
            <span>{{ loading ? 'Authorizing...' : 'Authorize' }}</span>
          </button>
        </form>

        <div class="relative z-10 mt-8 space-y-6">
          <div class="flex items-center gap-4">
            <div class="h-[1px] flex-1 bg-white/5"></div>
            <span class="text-[9px] font-black uppercase tracking-[0.3em] text-white/10">External Access</span>
            <div class="h-[1px] flex-1 bg-white/5"></div>
          </div>

          <button 
            @click="loginAnonymously"
            :disabled="loading"
            class="w-full py-4 rounded-2xl glass border-white/[0.05] text-white/40 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white/5 hover:text-white transition-all flex items-center justify-center gap-3"
          >
            <i class="pi pi-user-plus"></i>
            <span>Guest Protocol</span>
          </button>
        </div>
      </div>

      <p class="text-center text-[9px] font-bold text-white/10 uppercase tracking-[0.3em]">
        &copy; 2026 Tixo Operations // All Rights Reserved
      </p>
    </div>
  </CenterLayout>
</template>

<style scoped>
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  75% { transform: translateX(4px); }
}
.animate-shake {
  animation: shake 0.2s ease-in-out 0s 2;
}
</style>
