<script setup lang="ts">
import { useThemeStore } from '~/stores/theme'
import LoginModal from '~/components/LoginModal.vue'

useThemeStore()

const config = useRuntimeConfig()
const route = useRoute()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Tixo - Ultimate Tic-Tac-Toe` : 'Tixo - Ultimate Tic-Tac-Toe'
  },
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'canonical',
      href: () => `${config.public.siteUrl}${route.path}`
    }
  ],
  script: [
    {
      async: true,
      src: 'https://www.googletagmanager.com/gtag/js?id=G-Y7EWYYGQ6H',
    },
    {
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-Y7EWYYGQ6H');
      `,
      type: 'text/javascript'
    }
  ]
})

useSeoMeta({
  ogTitle: 'Tixo - Ultimate Tic-Tac-Toe',
  description: 'Experience the depth of classic Tic-Tac-Toe reimagined as a fractal battle for board supremacy. Precision, logic, and cold-blooded tactics.',
  ogDescription: 'Experience the depth of classic Tic-Tac-Toe reimagined as a fractal battle for board supremacy. Precision, logic, and cold-blooded tactics.',
  ogImage: `${config.public.siteUrl}/og-image.png`,
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Tixo - Ultimate Tic-Tac-Toe',
  twitterDescription: 'Experience the depth of classic Tic-Tac-Toe reimagined as a fractal battle for board supremacy.',
  twitterImage: `${config.public.siteUrl}/og-image.png`
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
    <LoginModal />
  </NuxtLayout>
</template>
