<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const menuItems = [
  { label: 'Match', icon: 'pi pi-compass', route: '/' },
  { label: 'Tactics', icon: 'pi pi-book', route: '/how-to-play' },
]

const navigateTo = (routePath: string) => {
  router.push(routePath)
}
</script>

<template>
  <aside class="w-24 h-full bg-[#050608] border-r border-white/[0.1] flex flex-col items-center py-8">
    <div class="mb-12 cursor-pointer group" @click="navigateTo('/')">
      <div class="text-2xl font-black tracking-tighter uppercase italic group-hover:scale-110 transition-transform text-white">
        T<span class="text-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]">.</span>
      </div>
    </div>

    <nav class="flex-1 flex flex-col gap-8">
      <button
        v-for="item in menuItems"
        :key="item.label"
        @click="navigateTo(item.route)"
        :class="[
          'relative w-14 h-14 flex items-center justify-center rounded-2xl glass transition-all group overflow-hidden',
          route.path === item.route ? 'border-indigo-500/60 bg-indigo-500/10 shadow-[0_0_15px_rgba(99,102,241,0.1)]' : 'border-white/10 hover:border-white/30 hover:bg-white/10'
        ]"
      >
        <div v-if="route.path === item.route" class="absolute inset-y-0 left-0 w-[3px] bg-indigo-500 shadow-[2px_0_10px_rgba(99,102,241,0.5)]"></div>
        <i :class="[item.icon, 'text-xl transition-all group-hover:scale-110', route.path === item.route ? 'text-indigo-400' : 'text-slate-400 group-hover:text-white']"></i>
        
        <!-- Tooltip -->
        <span class="absolute left-full ml-4 px-3 py-1.5 rounded-lg bg-indigo-600 text-[10px] font-black uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0 pointer-events-none whitespace-nowrap z-50 shadow-xl shadow-black/50">
          {{ item.label }}
        </span>
      </button>
    </nav>

    <div class="mt-auto flex flex-col items-center gap-6">
      <button @click="navigateTo('/profile')" :class="[
          'relative w-14 h-14 flex items-center justify-center rounded-2xl glass transition-all group overflow-hidden',
          route.path === '/profile' ? 'border-indigo-500/60 bg-indigo-500/10' : 'border-white/10 hover:border-indigo-500/40 hover:bg-white/10'
        ]">
        <i :class="['pi pi-user text-xl transition-all group-hover:scale-110', route.path === '/profile' ? 'text-indigo-400' : 'text-slate-400 group-hover:text-white']"></i>
        <span class="absolute left-full ml-4 px-3 py-1.5 rounded-lg bg-indigo-600 text-[10px] font-black uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0 pointer-events-none whitespace-nowrap z-50 shadow-xl shadow-black/50">
          Profile
        </span>
      </button>
      
      <div class="h-8 w-[1px] bg-white/10"></div>
      
      <div class="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)] ring-4 ring-green-500/20"></div>
    </div>
  </aside>
</template>

<style scoped>
</style>
