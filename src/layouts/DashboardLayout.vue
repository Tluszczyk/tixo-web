<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Sidebar from '@/components/Sidebar.vue'
import { auth } from '@/api/authentication'

const isSidebarOpen = ref(false)
const route = useRoute()
const router = useRouter()

const userName = ref('Player')

// Close sidebar on route change (mobile)
watch(() => route.path, () => {
  isSidebarOpen.value = false
})

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const handleProfileClick = () => {
  router.push('/profile')
}

onMounted(async () => {
  try {
    const user = await auth.getCurrentUser()
    if (user) {
      userName.value = user.name || 'Player'
    }
  } catch (e) {
    console.error('Failed to fetch user', e)
  }
})
</script>

<template>
  <div class="flex h-screen w-screen overflow-hidden bg-void relative noise">
    <!-- Mobile Sidebar Overlay -->
    <div v-if="isSidebarOpen" 
         @click="isSidebarOpen = false"
         class="fixed inset-0 bg-void/80 backdrop-blur-sm z-40 lg:hidden"></div>

    <!-- Sidebar Container -->
    <div :class="[
      'fixed inset-y-0 left-0 z-50 transform lg:relative lg:translate-x-0 transition-transform duration-500 ease-in-out',
      isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
    ]">
      <Sidebar />
    </div>

    <div class="flex-1 flex flex-col min-w-0 overflow-hidden relative">
      <header class="h-20 flex items-center justify-between px-6 lg:px-12 border-b border-white/[0.05] bg-void/50 backdrop-blur-md shrink-0 z-20">
        <div class="flex items-center gap-6">
          <!-- Hamburger Button -->
          <button @click="toggleSidebar" class="lg:hidden p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-all">
            <i class="pi" :class="isSidebarOpen ? 'pi-times' : 'pi-bars'"></i>
          </button>
          
          <slot name="header-left" />
        </div>
        
        <div class="flex items-center gap-6 lg:gap-12">
          <slot name="header-right" />
          
          <div @click="handleProfileClick" class="flex items-center gap-3 cursor-pointer group">
            <div class="text-right hidden sm:block">
              <p class="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Profile</p>
              <p class="text-xs font-bold text-slate-100 group-hover:text-blue-400 transition-colors">{{ userName }}</p>
            </div>
            <div class="w-10 h-10 rounded-full glass flex items-center justify-center border-white/5 group-hover:border-blue-500/30 transition-all">
              <i class="pi pi-user text-slate-400 text-sm group-hover:text-white"></i>
            </div>
          </div>
        </div>
      </header>

      <main class="flex-1 overflow-y-auto custom-scrollbar relative">
        <!-- Radial Background -->
        <div class="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.03)_0%,_transparent_70%)]"></div>
        
        <div class="max-w-7xl mx-auto p-6 lg:p-12 relative z-10">
          <slot />
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #334155;
  border-radius: 3px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #475569;
}
</style>
