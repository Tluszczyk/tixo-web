<script setup lang="ts">
import { useThemeStore } from '~/stores/theme'

const themeStore = useThemeStore()
</script>

<template>
  <div class="absolute top-0 left-0 flex flex-col w-full h-full justify-center items-center bg-void transition-colors duration-300">
    <button
      @click="themeStore.toggleTheme"
      class="fixed top-8 right-8 w-10 h-10 rounded-xl glass border-glass-border flex items-center justify-center text-app-text-muted hover:text-app-text hover:border-indigo-500/30 transition-all z-50 shadow-2xl"
      title="Toggle Theme"
    >
      <i
        class="pi"
        :class="themeStore.theme === 'dark' ? 'pi-sun' : 'pi-moon'"
      ></i>
    </button>
    <slot />
  </div>
</template>
