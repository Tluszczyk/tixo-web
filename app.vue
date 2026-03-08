<script setup lang="ts">
import { useThemeStore } from '~/stores/theme'
import LoginModal from '~/components/LoginModal.vue'

useThemeStore()
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <LoginModal />
  </NuxtLayout>
</template>
