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
// Removed: const allGames = ref<Game[]>([])
const loading = ref(true)
const showCreateDialog = ref(false)
const showFilterDialog = ref(false)

const archivesPage = ref(1)
const totalArchives = ref(0)
const itemsPerPage = 10

const activeGamesList = ref<Game[]>([])
const archivesList = ref<Game[]>([])

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

    // Prepare filters for server-side
    const baseFilters = {
      playerId: filters.value.playerId,
      creatorId: filters.value.creatorId,
      isOnDevice: filters.value.isOnDevice === null ? undefined : filters.value.isOnDevice,
    }

    // Fetch Active Games (No pagination for active usually, or just high limit)
    const activeResponse = await games.listGames(50, 0, {
      ...baseFilters,
      status: undefined, // We'll filter status here for performance or use OR if backend supported
    })
    
    // Split into active and archived
    activeGamesList.value = activeResponse.games.filter(
      (g) => g.status === GameStatus.IN_PROGRESS || g.status === GameStatus.WAITING_FOR_OPPONENT
    )

    // Fetch Paginated Archives
    const archiveResponse = await games.listGames(
      itemsPerPage,
      (archivesPage.value - 1) * itemsPerPage,
      {
        ...baseFilters,
        status: GameStatus.FINISHED, // Simplified: fetch finished. We can improve this to fetch both archived statuses.
      }
    )
    archivesList.value = archiveResponse.games
    totalArchives.value = archiveResponse.total

    // Pre-fetch player details
    const playerIds = new Set<string>()
    ;[...activeGamesList.value, ...archivesList.value].forEach((g) => {
      if (g.xPlayerId) playerIds.add(g.xPlayerId)
      if (g.oPlayerId) playerIds.add(g.oPlayerId)
    })

    if (playerIds.size > 0) {
      await users.fetchUsersByIds(Array.from(playerIds))
    }
  } catch (error) {
    console.error('Failed to fetch games:', error)
  } finally {
    loading.value = false
  }
}

const totalArchivePages = computed(() => Math.ceil(totalArchives.value / itemsPerPage))

const nextArchivePage = () => {
  if (archivesPage.value < totalArchivePages.value) {
    archivesPage.value++
    fetchGames()
  }
}

const prevArchivePage = () => {
  if (archivesPage.value > 1) {
    archivesPage.value--
    fetchGames()
  }
}

onMounted(fetchGames)

const activeGames = computed(() => activeGamesList.value)
const recentMatches = computed(() => archivesList.value)

const handleApplyFilters = (newFilters: FilterState) => {
  filters.value = newFilters
  archivesPage.value = 1
  fetchGames()
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
        <CommonBaseButton
          @click="fetchGames"
          variant="secondary"
          size="sm"
          class="w-12 h-12 lg:w-10 lg:h-10 !rounded-xl"
          :loading="loading"
          title="Synchronize"
        >
          <i class="pi pi-refresh text-sm lg:text-xs"></i>
        </CommonBaseButton>
        <CommonBaseButton
          @click="showFilterDialog = true"
          :variant="showFilterDialog ? 'primary' : 'secondary'"
          size="md"
          class="flex-1 md:flex-none px-4 lg:px-6 !tracking-widest"
          icon-left="pi pi-filter"
        >
          Parameters
        </CommonBaseButton>
        <CommonBaseButton
          @click="handleInitiate"
          variant="primary"
          size="md"
          class="flex-1 md:flex-none px-4 lg:px-8"
          icon-left="pi pi-plus"
        >
          Initialize
        </CommonBaseButton>
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
      <CommonBaseButton
        @click="handleInitiate"
        variant="ghost"
        size="sm"
        class="mt-6 !text-indigo-500 hover:!text-app-text"
      >
        Initiate New Protocol
      </CommonBaseButton>
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
        class="space-y-8"
      >
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-8 opacity-60 grayscale-[0.5] hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <GameListItem
            v-for="game in recentMatches"
            :key="game.$id"
            :game="game"
            :current-user="authStore.user"
          />
        </div>

        <!-- Archive Pagination -->
        <div v-if="totalArchivePages > 1" class="flex items-center justify-between px-2 pt-8 border-t border-glass-border">
          <div class="text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40">
            Scanning archives {{ (archivesPage - 1) * itemsPerPage + 1 }} - {{ Math.min(archivesPage * itemsPerPage, totalArchives) }} of {{ totalArchives }}
          </div>
          <div class="flex items-center gap-2">
            <CommonBaseButton
              @click="prevArchivePage"
              :disabled="archivesPage === 1 || loading"
              variant="secondary"
              size="sm"
              class="w-10 h-10 !p-0"
              icon-left="pi pi-chevron-left"
            />
            <div class="px-4 py-2 rounded-lg bg-void border border-glass-border text-[10px] font-black text-app-text mono">
              {{ archivesPage }} / {{ totalArchivePages }}
            </div>
            <CommonBaseButton
              @click="nextArchivePage"
              :disabled="archivesPage === totalArchivePages || loading"
              variant="secondary"
              size="sm"
              class="w-10 h-10 !p-0"
              icon-left="pi pi-chevron-right"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
