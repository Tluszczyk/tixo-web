<script setup lang="ts">
// Simple redirect to /dashboard
definePageMeta({
  middleware: [
    function () {
      return navigateTo('/dashboard')
    }
  ]
})

useSeoMeta({
  title: 'Tixo - Ultimate Tic-Tac-Toe',
  description: 'Experience the depth of classic Tic-Tac-Toe reimagined as a fractal battle for board supremacy. Precision, logic, and cold-blooded tactics.'
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'VideoGame',
        'name': 'Tixo',
        'description': 'Experience the depth of classic Tic-Tac-Toe reimagined as a fractal battle for board supremacy. Precision, logic, and cold-blooded tactics.',
        'genre': 'Strategy Board Game',
        'applicationCategory': 'GameApplication',
        'operatingSystem': 'Web Browser',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'USD'
        }
      })
    }
  ]
})
</script>

<template>
  <div></div>
</template>
