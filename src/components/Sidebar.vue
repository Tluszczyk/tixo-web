<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()
const isExpanded = ref(window.innerWidth < 1024)

const updateDefaultExpanded = () => {
  if (window.innerWidth < 1024) {
    isExpanded.value = true
  } else {
    isExpanded.value = false
  }
}

onMounted(() => {
  window.addEventListener('resize', updateDefaultExpanded)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateDefaultExpanded)
})

const handleMouseEnter = () => {
  if (window.innerWidth >= 1024) {
    isExpanded.value = true
  }
}

const handleMouseLeave = () => {
  if (window.innerWidth >= 1024) {
    isExpanded.value = false
  }
}

onMounted(async () => {
  if (!authStore.user) {
    await authStore.checkAuth()
  }
})

const menuItems = [
  { label: 'Match', icon: 'pi pi-compass', route: '/', requiresAuth: false },
  { label: 'Operational', icon: 'pi pi-server', route: '/dashboard', requiresAuth: true },
  { label: 'Tactics', icon: 'pi pi-book', route: '/how-to-play', requiresAuth: false },
  { label: 'Users', icon: 'pi pi-users', route: '/users', requiresAuth: false },
  { label: 'Profile', icon: 'pi pi-user', route: '/profile', requiresAuth: true },
]

const secondaryItems = [
  { label: 'Settings', icon: 'pi pi-cog', route: '/settings' },
  { label: 'Privacy Policy', icon: 'pi pi-shield', route: '/privacy' },
]

const navigateTo = (routePath: string) => {
  router.push(routePath)
}

const handleLogout = async () => {
  if (isGuest.value) {
    authStore.openLoginModal(route.fullPath)
  } else {
    await authStore.logout()
    await router.push('/')
  }
}

const isGuest = computed(() => !authStore.isLoggedIn)
</script>

<template>
  <aside
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    :class="[
      'h-full bg-sidebar border-r border-glass-border flex flex-col py-8 transition-all duration-500 ease-in-out relative z-60',
      isExpanded ? 'w-64 px-6' : 'w-24 px-4 items-center',
    ]"
  >
    <div
      :class="[
        'mb-12 flex items-center transition-all duration-500',
        isExpanded ? 'justify-between w-full' : 'justify-center',
      ]"
    >
      <div
        @click="navigateTo('/')"
        class="text-2xl font-black tracking-tighter uppercase italic text-app-text flex items-center gap-2 cursor-pointer transition-all duration-500 overflow-hidden"
      >
        <span class="shrink-0"
          >T<span
            :class="[
              'transition-all duration-500',
              isExpanded ? 'opacity-0 w-0' : 'text-indigo-500 opacity-100 w-auto',
            ]"
            >.</span
          ></span
        >
        <span
          :class="[
            'overflow-hidden whitespace-nowrap transition-all duration-500',
            isExpanded ? 'opacity-100 max-w-24' : 'opacity-0 max-w-0',
            isExpanded ? 'delay-300' : '',
          ]"
        >
          IXO<span class="text-indigo-500">.</span>
        </span>
      </div>
    </div>

    <!-- Main Navigation -->
    <nav class="flex-1 flex flex-col gap-4 w-full">
      <button
        v-for="item in menuItems"
        :key="item.label"
        @click="navigateTo(item.route)"
        :class="[
          'relative flex items-center rounded-2xl glass transition-all duration-500 group overflow-hidden',
          isExpanded ? 'px-4 h-12 gap-4 w-full' : 'w-14 h-14 justify-center',
          route.path === item.route
            ? 'border-indigo-500/60 bg-indigo-500/10 shadow-[0_0_15px_rgba(99,102,241,0.1)]'
            : 'border-glass-border hover:border-indigo-500/30 hover:bg-glass-white',
          item.requiresAuth && isGuest ? 'opacity-50 grayscale-[0.5]' : ''
        ]"
      >
        <div
          v-if="route.path === item.route"
          class="absolute inset-y-0 left-0 w-0.75 bg-indigo-500 shadow-[2px_0_10px_rgba(99,102,241,0.5)]"
        ></div>
        <div class="relative">
          <i
            :class="[
              item.icon,
              'text-lg transition-all duration-500 shrink-0',
              isExpanded ? '' : 'group-hover:scale-110',
              route.path === item.route ? 'text-indigo-400' : 'text-app-text-muted group-hover:text-app-text',
            ]"
          ></i>
          <i
            v-if="item.requiresAuth && isGuest"
            class="pi pi-lock absolute -top-1 -right-1 text-[8px] text-indigo-500"
          ></i>
        </div>

        <span
          :class="[
            'text-[10px] font-black uppercase tracking-widest overflow-hidden whitespace-nowrap transition-all duration-500',
            isExpanded ? 'opacity-100 max-w-24' : 'opacity-0 max-w-0',
            isExpanded ? 'delay-300' : '',
          ]"
        >
          {{ item.label }}
        </span>

        <!-- Tooltip (only when collapsed) -->
        <span
          v-if="!isExpanded"
          class="absolute left-full ml-4 px-3 py-1.5 rounded-lg bg-indigo-600 text-[10px] font-black uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2.5 group-hover:translate-x-0 pointer-events-none whitespace-nowrap z-50 shadow-xl shadow-black/50"
        >
          {{ item.label }} {{ item.requiresAuth && isGuest ? '(Auth Required)' : '' }}
        </span>
      </button>
    </nav>

    <!-- Secondary Navigation -->
    <div class="mt-auto pt-8 border-t border-glass-border flex flex-col gap-4 w-full">
      <button
        v-for="item in secondaryItems"
        :key="item.label"
        @click="navigateTo(item.route)"
        :class="[
          'relative flex items-center rounded-2xl glass transition-all duration-500 group overflow-hidden',
          isExpanded ? 'px-4 h-10 gap-4 w-full' : 'w-14 h-10 justify-center',
          route.path === item.route
            ? 'border-indigo-500/60 bg-indigo-500/10'
            : 'border-glass-border hover:border-indigo-500/30 hover:bg-glass-white',
        ]"
      >
        <i
          :class="[
            item.icon,
            'text-sm transition-all duration-500 shrink-0',
            isExpanded ? '' : 'group-hover:scale-110',
            route.path === item.route ? 'text-indigo-400' : 'text-app-text-muted group-hover:text-app-text',
          ]"
        ></i>

        <span
          :class="[
            'text-[9px] font-bold uppercase tracking-widest overflow-hidden whitespace-nowrap transition-all duration-500',
            isExpanded ? 'opacity-100 max-w-24' : 'opacity-0 max-w-0',
            isExpanded ? 'delay-300' : '',
          ]"
        >
          {{ item.label }}
        </span>

        <!-- Tooltip -->
        <span
          v-if="!isExpanded"
          class="absolute left-full ml-4 px-3 py-1.5 rounded-lg bg-sidebar text-[10px] font-black uppercase tracking-widest text-app-text opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2.5 group-hover:translate-x-0 pointer-events-none whitespace-nowrap z-50 shadow-xl"
        >
          {{ item.label }}
        </span>
      </button>

      <!-- Logout -->
      <button
        @click="handleLogout"
        :class="[
          'relative flex items-center rounded-2xl glass transition-all duration-500 group overflow-hidden border-red-500/10 hover:bg-red-500/10 hover:border-red-500/40',
          isExpanded ? 'px-4 h-10 gap-4 w-full' : 'w-14 h-10 justify-center',
          isGuest ? 'border-indigo-500/20 hover:bg-indigo-500/10 hover:border-indigo-500/40' : ''
        ]"
      >
        <i
          v-if="!isGuest"
          class="pi pi-power-off text-sm text-red-500/60 group-hover:text-red-500 shrink-0 transition-all duration-500"
        ></i>
        <i
          v-else
          class="pi pi-sign-in text-sm text-indigo-500/60 group-hover:text-indigo-500 shrink-0 transition-all duration-500"
        ></i>
        <span
          :class="[
            'text-[9px] font-bold uppercase tracking-widest overflow-hidden whitespace-nowrap transition-all duration-500',
            isExpanded ? 'opacity-100 max-w-24' : 'opacity-0 max-w-0',
            isExpanded ? 'delay-300' : '',
            'text-app-text-muted',
            !isGuest ? 'group-hover:text-red-500' : 'group-hover:text-indigo-500'
          ]"
        >
          {{ isGuest ? 'Authorize' : 'Disconnect' }}
        </span>
      </button>
    </div>
  </aside>
</template>


<style scoped></style>
