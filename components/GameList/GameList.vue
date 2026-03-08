<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import GameListItem from '~/components/GameList/GameListItem.vue'
import CreateGameDialog from '~/components/CreateGameDialog.vue'
import GameFilterDialog, { type FilterState } from '~/components/GameList/GameFilterDialog.vue'
import { games } from '~/api/games'
import { useAuthStore } from '~/stores/auth'
import { users } from '~/api/users'
import type { Game } from '~/api/dto/Game'
import { GameStatus } from '~/api/dto/GameStatus'

const authStore = useAuthStore()
const allGames = ref<Game[]>([])
const loading = ref(true)
const showCreateDialog = ref(false)
const showFilterDialog = ref(false)

const filters = ref<FilterState>({
  playerId: '',
  creatorId: '',
  myGamesOnly: false,
  statuses: [],
  isOnDevice: null,
  dateRange: 'all',
  sortBy: 'createdAt',
  sortOrder: 'desc',
})

const fetchGames = async () => {
  loading.value = true
  try {
    if (!authStore.user) {
      await authStore.checkAuth()
    }
    const gamesList = await games.listGames()
    allGames.value = gamesList

    // Pre-fetch all unique player details in one batch
    const playerIds = new Set<string>()
    gamesList.forEach((g) => {
      if (g.xPlayerId) playerIds.add(g.xPlayerId)
      if (g.oPlayerId) playerIds.add(g.oPlayerId)
    })

    if (playerIds.size > 0) {
      // This will populate the userCache in UserService
      await users.fetchUsersByIds(Array.from(playerIds))
    }
  } catch (error) {
    console.error('Failed to fetch games:', error)
  } finally {
    loading.value = false
  }
}

onMounted(fetchGames)

const filteredGames = computed(() => {
  let result = [...allGames.value]

  // Filter by Player ID
  if (filters.value.playerId) {
    result = result.filter(
      (g) =>
        g.xPlayerId?.includes(filters.value.playerId) ||
        g.oPlayerId?.includes(filters.value.playerId),
    )
  }

  // Filter by Creator ID
  if (filters.value.creatorId) {
    result = result.filter((g) => g.creatorId?.includes(filters.value.creatorId))
  }

  // My Games
  if (filters.value.myGamesOnly && authStore.user) {
    const uid = authStore.user.$id
    result = result.filter((g) => g.xPlayerId === uid || g.oPlayerId === uid || g.creatorId === uid)
  }

  // Statuses
  if (filters.value.statuses.length > 0) {
    result = result.filter((g) => filters.value.statuses.includes(g.status))
  }

  // On Device
  if (filters.value.isOnDevice !== null) {
    result = result.filter((g) => g.isOnDevice === filters.value.isOnDevice)
  }

  // Date Range
  if (filters.value.dateRange !== 'all') {
    const now = new Date()
    const cutoff = new Date()
    if (filters.value.dateRange === 'today') cutoff.setHours(now.getHours() - 24)
    else if (filters.value.dateRange === 'week') cutoff.setDate(now.getDate() - 7)
    else if (filters.value.dateRange === 'month') cutoff.setMonth(now.getMonth() - 1)

    result = result.filter((g) => new Date(g.$createdAt).getTime() >= cutoff.getTime())
  }

  // Sorting
  result.sort((a, b) => {
    const key = filters.value.sortBy === 'createdAt' ? '$createdAt' : '$updatedAt'
    const valA = new Date(a[key] as string).getTime()
    const valB = new Date(b[key] as string).getTime()
    return filters.value.sortOrder === 'desc' ? valB - valA : valA - valB
  })

  return result
})

const activeGames = computed(() => {
  return filteredGames.value.filter(
    (g) => g.status === GameStatus.IN_PROGRESS || g.status === GameStatus.WAITING_FOR_OPPONENT,
  )
})

const recentMatches = computed(() => {
  return filteredGames.value.filter(
    (g) => g.status === GameStatus.FINISHED || g.status === GameStatus.CANCELLED,
  )
})

const handleApplyFilters = (newFilters: FilterState) => {
  filters.value = newFilters
}

const handleInitiate = () => {
  if (authStore.isLoggedIn) {
    showCreateDialog.value = true
  } else {
    authStore.openLoginModal('/')
  }
}
</script>

<template>
  <div class="w-full h-full flex flex-col space-y-8">
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 px-2">
      <div class="space-y-1">
        <h2 class="text-2xl lg:text-3xl font-black text-app-text uppercase italic">
          Active Operations<span class="text-indigo-500">.</span>
        </h2>
        <p class="text-[10px] font-black uppercase tracking-[0.2em] text-app-text-muted opacity-20">
          Live Operational Data
        </p>
      </div>
      <div class="flex items-center gap-3 w-full md:w-auto">
        <button
          @click="fetchGames"
          class="w-12 h-12 lg:w-10 lg:h-10 rounded-xl glass border-glass-border text-app-text-muted opacity-40 hover:text-app-text hover:opacity-100 hover:border-indigo-500/30 transition-all flex items-center justify-center cursor-pointer group shrink-0"
          title="Synchronize"
        >
          <i
            class="pi pi-refresh text-sm lg:text-xs group-hover:scale-110 transition-transform"
            :class="{ 'animate-spin': loading }"
          ></i>
        </button>
        <button
          @click="showFilterDialog = true"
          :class="[
            'flex-1 md:flex-none px-4 lg:px-6 py-3 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3 cursor-pointer',
            showFilterDialog
              ? 'bg-indigo-500 border-indigo-400 text-white'
              : 'glass border-glass-border text-app-text-muted opacity-40 hover:text-app-text hover:opacity-100 hover:border-indigo-500/30',
          ]"
        >
          <i class="pi pi-filter text-[10px]"></i>
          <span>Parameters</span>
        </button>
        <button
          @click="handleInitiate"
          class="flex-1 md:flex-none px-4 lg:px-8 py-3 rounded-xl bg-app-text text-void text-[10px] font-black uppercase tracking-[0.2em] hover:opacity-90 transition-all shadow-xl flex items-center justify-center gap-3 cursor-pointer"
        >
          <i class="pi pi-plus text-[10px]"></i>
          <span>Initialize</span>
        </button>
      </div>
    </div>

    <div v-if="loading" class="grid grid-cols-1 xl:grid-cols-2 gap-8">
      <div
        v-for="i in 4"
        :key="i"
        class="h-44 sm:h-48 w-full glass border-glass-border rounded-3xl animate-pulse"
      ></div>
    </div>

    <div
      v-else-if="activeGames.length === 0"
      class="py-20 flex flex-col items-center justify-center glass border-glass-border rounded-[2.5rem] border-dashed"
    >
      <div
        class="w-20 h-20 rounded-full glass border-glass-border flex items-center justify-center text-app-text-muted opacity-10 mb-6"
      >
        <i class="pi pi-inbox text-4xl"></i>
      </div>
      <p class="text-app-text-muted opacity-20 text-[10px] font-black uppercase tracking-[0.2em]">
        No Active Operations Found
      </p>
      <button
        @click="handleInitiate"
        class="mt-6 text-indigo-500 text-[10px] font-black uppercase tracking-widest hover:text-app-text transition-colors"
      >
        Initiate New Protocol
      </button>
    </div>

    <div v-else class="grid grid-cols-1 xl:grid-cols-2 gap-8">
      <GameListItem
        v-for="game in activeGames"
        :key="game.$id"
        :game="game"
        :current-user="authStore.user"
      />
    </div>

    <CreateGameDialog :visible="showCreateDialog" @close="showCreateDialog = false" />
    <GameFilterDialog
      :visible="showFilterDialog"
      :initial-filters="filters"
      :current-user-id="authStore.user?.$id"
      @close="showFilterDialog = false"
      @apply="handleApplyFilters"
    />

    <div class="mt-16 pt-16 border-t border-glass-border">
      <div class="flex items-center justify-between mb-8 px-2">
        <div class="space-y-1">
          <h2 class="text-xl font-black text-app-text uppercase italic">
            Archives<span class="text-indigo-500">.</span>
          </h2>
          <p class="text-[10px] font-black uppercase tracking-[0.2em] text-app-text-muted opacity-20">
            Historical Engagement Records
          </p>
        </div>
      </div>

      <div v-if="loading" class="grid grid-cols-1 xl:grid-cols-2 gap-8">
        <div
          v-for="i in 4"
          :key="i"
          class="h-44 sm:h-48 w-full glass border-glass-border rounded-3xl animate-pulse"
        ></div>
      </div>

      <div
        v-else-if="recentMatches.length === 0"
        class="py-12 text-center text-app-text-muted opacity-10 text-[10px] font-black uppercase tracking-widest italic"
      >
        Historical database empty
      </div>

      <div
        v-else
        class="grid grid-cols-1 xl:grid-cols-2 gap-8 opacity-60 grayscale-[0.5] hover:grayscale-0 hover:opacity-100 transition-all duration-700"
      >
        <GameListItem
          v-for="game in recentMatches"
          :key="game.$id"
          :game="game"
          :current-user="authStore.user"
        />
      </div>
    </div>
  </div>
</template>
