<script setup lang="ts">
// Simple redirect to /dashboard
definePageMeta({
  middleware: [
    function () {
      return navigateTo('/dashboard')
    }
  ]
})
</script>

<template>
  <div></div>
</template>
