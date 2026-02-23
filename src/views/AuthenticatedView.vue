<script setup lang="ts">

import { auth } from '@/api/authentication'
import { onMounted } from 'vue'
import router from '@/router'

onMounted(async () => {
  const ok = await auth.authenticate();
  if(!ok) {
    await router.push('/login');
  }
})

</script>

<template>
  <slot />
</template>
