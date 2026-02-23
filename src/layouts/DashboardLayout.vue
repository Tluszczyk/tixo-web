<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Sidebar from '@/components/Sidebar.vue'

const isSidebarOpen = ref(false)
const route = useRoute()

// Close sidebar on route change (mobile)
watch(() => route.path, () => {
  isSidebarOpen.value = false
})

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
  <div class="flex h-screen w-screen overflow-hidden bg-slate-950 relative">
    <!-- Mobile Sidebar Overlay -->
    <div v-if="isSidebarOpen" 
         @click="isSidebarOpen = false"
         class="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-40 lg:hidden"></div>

    <!-- Sidebar Container -->
    <div :class="[
      'fixed inset-y-0 left-0 z-50 transform lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out',
      isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
    ]">
      <Sidebar />
    </div>

    <div class="flex-1 flex flex-col min-w-0 overflow-hidden">
      <header class="h-16 border-b border-slate-800 flex items-center justify-between px-4 lg:px-8 bg-slate-900/50 backdrop-blur-sm shrink-0">
        <div class="flex items-center space-x-3 lg:space-x-4">
          <!-- Hamburger Button -->
          <button @click="toggleSidebar" class="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
            <i class="pi" :class="isSidebarOpen ? 'pi-times' : 'pi-bars'"></i>
          </button>
          
          <slot name="header-left" />
        </div>
        <div class="flex items-center space-x-4">
          <slot name="header-right" />
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
              <i class="pi pi-user text-slate-400"></i>
            </div>
            <span class="hidden sm:inline text-sm font-medium text-slate-200">Player</span>
          </div>
        </div>
      </header>

      <main class="flex-1 overflow-y-auto p-4 lg:p-8 custom-scrollbar">
        <div class="max-w-6xl mx-auto">
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
