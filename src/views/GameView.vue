<script setup lang="ts">
import {ref, onMounted, computed} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { games } from '@/api/games'
import type { Game } from '@/api/dto/Game'
import { GameStatus } from '@/api/dto/GameStatus'
import Board from '@/components/Board.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import AuthenticatedView from '@/views/AuthenticatedView.vue'
import {functions} from "@/api/appwriteClient.ts";

const route = useRoute()
const router = useRouter()
const game = ref<Game | null>(null)
const loading = ref(true)
const selectedCell = ref<number | null>(null)

const fetchGame = async () => {
  loading.value = true
  const gameId = route.params.id as string
  try {
    const data = await games.getGame(gameId)
    if (data) {
      game.value = data
    } else {
      console.error('Game not found')
    }
  } catch (error) {
    console.error('Failed to fetch game:', error)
  } finally {
    loading.value = false
  }
}

const currentPlayer = computed(() => {
  if (!game.value) return 'X'
  // Using nexPlayerId to determine whose turn it is
  if (game.value.nexPlayerId === game.value.oPlayerId) return 'O'
  return 'X'
})

const displayBoard = computed(() => {
  if (!game.value) return '.'.repeat(81)
  if (selectedCell.value === null) return game.value.board

  const b = game.value.board.split('')
  // Ensure the board string is correctly padded if short
  while (b.length < 81) b.push('.')

  b[selectedCell.value] = currentPlayer.value
  return b.join('')
})

const handleCellClick = (index: number) => {
  if (game.value?.status !== GameStatus.IN_PROGRESS) return

  if (selectedCell.value === index) {
    selectedCell.value = null
  } else {
    const cellValue = game.value.board[index]
    // Accept both dot and space as empty for robustness
    if (cellValue === '.' || cellValue === ' ' || !cellValue) {
      selectedCell.value = index
    }
  }
}

const submitMove = () => {
  if (selectedCell.value === null) return
  console.log('Submitting move for cell:', selectedCell.value);

  // TODO: implement submitting move
}

const getStatusColor = (status: GameStatus) => {
  switch (status) {
    case GameStatus.IN_PROGRESS: return 'bg-green-500/10 text-green-500 border-green-500/20'
    case GameStatus.FINISHED: return 'bg-blue-500/10 text-blue-500 border-blue-500/20'
    case GameStatus.WAITING_FOR_OPPONENT: return 'bg-amber-500/10 text-amber-500 border-amber-500/20'
    default: return 'bg-slate-500/10 text-slate-500 border-slate-500/20'
  }
}

const formatStatus = (status: GameStatus) => {
  if (status === GameStatus.IN_PROGRESS) return 'LIVE MATCH'
  return status.replace(/_/g, ' ')
}

onMounted(fetchGame)

const goBack = () => {
  router.back()
}
</script>

<template>
  <AuthenticatedView>
    <DashboardLayout>
      <template #header-left>
        <div class="flex items-center space-x-4">
          <button @click="goBack" class="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors">
            <i class="pi pi-arrow-left"></i>
          </button>
          <div v-if="game" class="flex flex-col">
            <span class="text-sm font-bold text-slate-100">
              {{ game.xPlayerId ? game.xPlayerId.substring(0,15) : 'Pending' }} vs {{ game.oPlayerId ? game.oPlayerId.substring(0,15) : 'Waiting...' }}
            </span>
            <div class="flex items-center mt-0.5">
               <span :class="getStatusColor(game.status)" class="text-[9px] px-1.5 py-0.5 rounded-md border font-black tracking-widest uppercase">
                 {{ formatStatus(game.status) }}
               </span>
            </div>
          </div>
        </div>
      </template>

      <div v-if="loading" class="flex flex-col items-center justify-center min-h-[60vh]">
        <i class="pi pi-spin pi-spinner text-4xl text-blue-500 mb-4"></i>
        <p class="text-slate-400 animate-pulse">Loading game state...</p>
      </div>

      <div v-else-if="!game" class="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <i class="pi pi-exclamation-triangle text-4xl text-amber-500 mb-4"></i>
        <h2 class="text-2xl font-bold text-white mb-2">Game Not Found</h2>
        <p class="text-slate-400 mb-6">The game you're looking for doesn't exist or has been removed.</p>
        <button @click="goBack" class="px-6 py-2 rounded-xl bg-slate-800 text-white font-bold hover:bg-slate-700 transition-all">
          Go Back
        </button>
      </div>

      <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12">
        <!-- Main Board Area -->
        <div class="lg:col-span-2 space-y-8">
          <div class="flex flex-col items-center space-y-8">
            <Board
              :board="displayBoard"
              :tile-winners="game.tileWinners"
              :selected-cell="selectedCell"
              :current-player="currentPlayer"
              @cell-click="handleCellClick"
            />

            <!-- Action Area -->
            <div class="h-16 flex items-center justify-center w-full">
              <Transition
                enter-active-class="transition duration-300 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-200 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <div v-if="selectedCell !== null" class="flex items-center space-x-4">
                  <button @click="selectedCell = null" class="px-4 py-3 text-slate-400 hover:text-white font-bold transition-colors">
                    Cancel
                  </button>
                  <button @click="submitMove" class="px-10 py-3 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-xl shadow-lg shadow-blue-900/40 border border-blue-400/20 transition-all flex items-center space-x-3 group">
                    <span>Submit Move</span>
                    <i class="pi pi-arrow-right group-hover:translate-x-1 transition-transform"></i>
                  </button>
                </div>
                <div v-else-if="game.status === GameStatus.IN_PROGRESS" class="text-slate-500 font-medium flex items-center space-x-2 italic">
                   <i class="pi pi-info-circle text-xs"></i>
                   <span>Select an empty cell to make your move</span>
                </div>
                <div v-else-if="game.status === GameStatus.WAITING_FOR_OPPONENT" class="flex flex-col items-center space-y-3">
                   <div class="text-amber-500 font-medium flex items-center space-x-2 animate-pulse">
                      <i class="pi pi-user-plus text-xs"></i>
                      <span>Waiting for an opponent to join...</span>
                   </div>
                   <button class="px-8 py-2 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-lg transition-colors text-sm">
                      Join Match
                   </button>
                </div>
              </Transition>
            </div>
          </div>

          <div class="bg-slate-900/50 rounded-2xl border border-slate-800 p-6">
            <h3 class="text-lg font-bold text-slate-100 mb-4 flex items-center space-x-2">
               <i class="pi pi-info-circle text-blue-500"></i>
               <span>Match Details</span>
            </h3>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
               <div class="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50">
                  <p class="text-[10px] text-slate-500 font-bold uppercase mb-1">Turn</p>
                  <div class="flex items-center space-x-2">
                    <span :class="currentPlayer === 'X' ? 'text-red-500' : 'text-blue-500'" class="font-black">{{ currentPlayer }}</span>
                    <span class="text-xs text-slate-300">{{ currentPlayer === 'X' ? (game.xPlayerId || 'Player X') : (game.oPlayerId || 'Player O') }}</span>
                  </div>
               </div>
               <div class="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50">
                  <p class="text-[10px] text-slate-500 font-bold uppercase mb-1">Winner</p>
                  <p class="text-sm text-slate-200">{{ game.winnerId ? (game.winnerId || 'Player') : 'None' }}</p>
               </div>
               <div class="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50">
                  <p class="text-[10px] text-slate-500 font-bold uppercase mb-1">Moves</p>
                  <p class="text-sm text-slate-200">{{ game.moveHistory?.length || 0 }}</p>
               </div>
               <div class="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50">
                  <p class="text-[10px] text-slate-500 font-bold uppercase mb-1">Created</p>
                  <p class="text-sm text-slate-200">{{ new Date(game.$createdAt).toLocaleDateString() }}</p>
               </div>
            </div>
          </div>
        </div>

        <!-- Sidebar / Move History -->
        <div class="space-y-6">
          <div class="bg-slate-900/50 rounded-2xl border border-slate-800 flex flex-col h-[500px]">
             <div class="p-4 border-b border-slate-800 flex items-center justify-between">
                <h3 class="font-bold text-slate-100">Move History</h3>
                <span class="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-bold text-slate-400">{{ game.moveHistory?.length || 0 }}</span>
             </div>
             <div class="flex-1 overflow-y-auto p-4 custom-scrollbar">
                <div v-if="!game.moveHistory || game.moveHistory.length === 0" class="flex flex-col items-center justify-center h-full opacity-30">
                   <i class="pi pi-list text-3xl mb-2"></i>
                   <p class="text-xs">No moves yet</p>
                </div>
                <div v-else class="space-y-2">
                   <div v-for="(move, idx) in game.moveHistory" :key="idx"
                        class="flex items-center justify-between p-2 rounded-lg bg-slate-800/30 border border-slate-700/30 hover:bg-slate-800/60 transition-colors">
                      <div class="flex items-center space-x-3">
                         <span class="text-[10px] font-bold text-slate-600 w-4">{{ idx + 1 }}</span>
                         <span class="text-sm font-medium text-slate-300">{{ move }}</span>
                      </div>
                      <span :class="idx % 2 === 0 ? 'text-red-500' : 'text-blue-500'" class="text-[10px] font-black">
                        {{ idx % 2 === 0 ? 'X' : 'O' }}
                      </span>
                   </div>
                </div>
             </div>
          </div>

          <div class="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 shadow-xl shadow-blue-900/20 text-white relative overflow-hidden group">
             <div class="absolute -right-4 -bottom-4 text-white/10 text-8xl rotate-12 transition-transform group-hover:scale-110 duration-700">
                <i class="pi pi-trophy"></i>
             </div>
             <h4 class="text-lg font-black mb-1 relative z-10">Match Info</h4>
             <p class="text-blue-100 text-xs mb-4 relative z-10 opacity-80">You are spectating this match.</p>
             <button class="w-full py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold transition-all relative z-10 backdrop-blur-md">
                Share Match
             </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  </AuthenticatedView>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #334155;
  border-radius: 2px;
}
</style>
