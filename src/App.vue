<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useThemeStore } from '@/stores/theme'
import LoginModal from '@/components/LoginModal.vue'

useThemeStore()
</script>

<template>
  <RouterView />
  <LoginModal />
</template>

<style scoped></style>
