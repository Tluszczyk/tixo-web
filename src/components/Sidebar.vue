<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const menuItems = [
  { label: 'Home', icon: 'pi pi-home', route: '/' },
  { label: 'Play', icon: 'pi pi-play', route: '/' },
  { label: 'Games', icon: 'pi pi-table', route: '/' },
  { label: 'Learn', icon: 'pi pi-book', route: '/how-to-play' },
  { label: 'Settings', icon: 'pi pi-cog', route: '/' },
]

const navigateTo = (route: string) => {
  router.push(route)
}
</script>

<template>
  <aside class="w-64 h-full bg-slate-900 border-r border-slate-800 flex flex-col p-4">
    <div class="mb-8 px-4 flex items-center space-x-3" @click="navigateTo('/')">
      <div class="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">TT</div>
      <h1 class="text-xl font-bold tracking-tight text-white">tixo</h1>
    </div>

    <nav class="flex-1 space-y-1">
      <button
        v-for="item in menuItems"
        :key="item.label"
        @click="navigateTo(item.route)"
        class="w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 group hover:bg-slate-800 text-slate-400 hover:text-white"
      >
        <i :class="[item.icon, 'text-lg group-hover:text-blue-500 transition-colors']"></i>
        <span>{{ item.label }}</span>
      </button>
    </nav>

    <div class="mt-auto border-t border-slate-800 pt-4">
      <button class="w-full flex items-center space-x-3 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
        <i class="pi pi-user text-lg"></i>
        <span>My Profile</span>
      </button>
    </div>
  </aside>
</template>

<style scoped>
</style>
