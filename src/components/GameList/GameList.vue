<script setup lang="ts">
import {computed, onMounted, ref} from 'vue'
import GameListItem from '@/components/GameList/GameListItem.vue'
import CreateGameDialog from '@/components/CreateGameDialog.vue'
import {games} from '@/api/games'
import type {Game} from '@/api/dto/Game'
import {GameStatus} from '@/api/dto/GameStatus'

const allGames = ref<Game[]>([])
const loading = ref(true)
const showCreateDialog = ref(false)

const fetchGames = async () => {
  loading.value = true
  try {
    allGames.value = await games.listGames()
  } catch (error) {
    console.error('Failed to fetch games:', error)
  } finally {
    loading.value = false
  }
}

onMounted(fetchGames)

const activeGames = computed(() => {
  return allGames.value.filter(g => g.status === GameStatus.IN_PROGRESS || g.status === GameStatus.WAITING_FOR_OPPONENT)
})

const recentMatches = computed(() => {
  return allGames.value.filter(g => g.status === GameStatus.FINISHED)
})
</script>

<template>
  <div class="w-full h-full flex flex-col space-y-4">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-2xl font-bold text-slate-100 flex items-center space-x-3">
        <i class="pi pi-table text-blue-500"></i>
        <span>Active Games</span>
      </h2>
      <div class="flex items-center space-x-3">
        <button @click="fetchGames" class="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 transition-colors" title="Refresh">
           <i class="pi pi-refresh" :class="{'animate-spin': loading}"></i>
        </button>
        <button class="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-sm font-semibold text-slate-300 hover:bg-slate-700 transition-colors flex items-center space-x-2">
           <i class="pi pi-filter"></i>
           <span>Filter</span>
        </button>
        <button @click="showCreateDialog = true" class="px-4 py-2 rounded-lg bg-blue-600 text-sm font-bold text-white hover:bg-blue-500 transition-colors flex items-center space-x-2">
           <i class="pi pi-plus"></i>
           <span>New Game</span>
        </button>
      </div>
    </div>

    <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="i in 3" :key="i" class="h-32 w-full bg-slate-900/40 rounded-xl border border-slate-800 animate-pulse"></div>
    </div>

    <div v-else-if="activeGames.length === 0" class="py-12 flex flex-col items-center justify-center bg-slate-900/20 rounded-2xl border border-dashed border-slate-800">
      <i class="pi pi-inbox text-4xl text-slate-700 mb-4"></i>
      <p class="text-slate-500 font-medium">No active games found</p>
      <button @click="showCreateDialog = true" class="mt-4 text-blue-500 text-sm font-bold hover:underline">Start a new game</button>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       <GameListItem v-for="game in activeGames" :key="game.$id" :game="game" />
    </div>

    <CreateGameDialog :visible="showCreateDialog" @close="showCreateDialog = false" />

    <div class="mt-8 border-t border-slate-800 pt-8">
       <div class="flex items-center justify-between mb-4">
         <h2 class="text-xl font-bold text-slate-100 flex items-center space-x-3">
           <i class="pi pi-history text-indigo-500"></i>
           <span>Recent Matches</span>
         </h2>
         <button class="text-sm font-semibold text-slate-500 hover:text-blue-500 transition-colors">View All</button>
       </div>

       <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         <div v-for="i in 3" :key="i" class="h-32 w-full bg-slate-900/40 rounded-xl border border-slate-800 animate-pulse"></div>
       </div>

       <div v-else-if="recentMatches.length === 0" class="py-8 text-center text-slate-500 italic text-sm">
         No recent matches
       </div>

       <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-80">
          <GameListItem v-for="game in recentMatches" :key="game.$id" :game="game" />
       </div>
    </div>
  </div>
</template>
