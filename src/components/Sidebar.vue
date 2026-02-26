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
  <aside class="w-24 h-full bg-void border-r border-white/[0.05] flex flex-col items-center py-8">
    <div class="mb-12 cursor-pointer group" @click="navigateTo('/')">
      <div class="text-xl font-black tracking-tighter uppercase italic group-hover:scale-105 transition-transform">
        T<span class="text-indigo-500">.</span>
      </div>
    </div>

    <nav class="flex-1 flex flex-col gap-8">
      <button
        v-for="item in menuItems"
        :key="item.label"
        @click="navigateTo(item.route)"
        :class="[
          'relative w-12 h-12 flex items-center justify-center rounded-2xl glass transition-all group overflow-hidden',
          route.path === item.route ? 'border-indigo-500/40 bg-indigo-500/5' : 'border-white/5 hover:border-white/10 hover:bg-white/5'
        ]"
      >
        <div v-if="route.path === item.route" class="absolute inset-y-0 left-0 w-[2px] bg-indigo-500"></div>
        <i :class="[item.icon, 'text-lg transition-all group-hover:scale-110', route.path === item.route ? 'text-indigo-500' : 'text-slate-500 group-hover:text-white']"></i>
        
        <!-- Tooltip -->
        <span class="absolute left-full ml-4 px-2 py-1 rounded bg-slate-800 text-[10px] font-bold uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
          {{ item.label }}
        </span>
      </button>
    </nav>

    <div class="mt-auto flex flex-col gap-6">
      <button @click="navigateTo('/profile')" :class="[
          'relative w-12 h-12 flex items-center justify-center rounded-2xl glass transition-all group overflow-hidden',
          route.path === '/profile' ? 'border-indigo-500/40 bg-indigo-500/5' : 'border-white/5 hover:border-blue-500/30'
        ]">
        <i :class="['pi pi-user text-lg group-hover:text-white transition-all', route.path === '/profile' ? 'text-indigo-500' : 'text-slate-500']"></i>
        <span class="absolute left-full ml-4 px-2 py-1 rounded bg-slate-800 text-[10px] font-bold uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
          Profile
        </span>
      </button>
      
      <div class="h-8 w-[1px] bg-white/5 mx-auto"></div>
      
      <div class="w-2 h-2 rounded-full bg-green-500/40 ring-4 ring-green-500/10"></div>
    </div>
  </aside>
</template>

<style scoped>
</style>
