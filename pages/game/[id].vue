<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'

definePageMeta({
  layout: false
})

import { games } from '~/api/games'
import { useAuthStore } from '~/stores/auth'
import { users, type User } from '~/api/users'
import type { Game } from '~/api/dto/Game'
import { GameStatus } from '~/api/dto/GameStatus'
import Board from '~/components/Board.vue'
import CreateGameDialog from '~/components/CreateGameDialog.vue'
import GameAnalyticsDashboard from '~/components/GameAnalytics/GameAnalyticsDashboard.vue'
import { Player, AI_MODELS, getBestMove } from '~/utils/engine'
import {
  coordToIndex,
  check3x3Winner,
  getSmallBoard,
  rebuildGameState,
  isCellAvailable,
} from '~/utils/gameLogic'

// Extracted Sub-Components
import MatchTimeline from '~/components/Game/MatchTimeline.vue'
import GameStatusHUD from '~/components/Game/GameStatusHUD.vue'
import GameOverModal from '~/components/Game/GameOverModal.vue'
import AbandonMatchModal from '~/components/Game/AbandonMatchModal.vue'
import GameHeader from '~/components/Game/GameHeader.vue'
import TacticalDashboard from '~/components/Game/TacticalDashboard.vue'

const authStore = useAuthStore()
const route = useRoute()
const router = useRouter()

useSeoMeta({
  title: () => `Active Match #${route.params.id}`,
  description: () => `Live battle in progress for Match #${route.params.id} on Tixo. Precision tactics and fractal Tic-Tac-Toe strategies.`,
  ogTitle: () => `Active Match #${route.params.id} | Tixo`,
  ogDescription: () => `Live battle in progress for Match #${route.params.id} on Tixo. Precision tactics and fractal Tic-Tac-Toe strategies.`
})

type RealtimeSubscription = {
  close: () => Promise<void>
}

import type { Models } from 'appwrite'

interface GameAnalytics extends Models.Row {
  gameId: string
  winProbabilityX: number[]
  moveTimestamps: string[]
  moveQualities: string[]
  recommendations: string[]
  boardCaptureTurns: number[]
  freeMoves: number[]
}

type GameWithAnalytics = Game & { analytics?: GameAnalytics }

const game = ref<GameWithAnalytics | null>(null)
const xPlayer = ref<User | null>(null)
const oPlayer = ref<User | null>(null)
const loading = ref(true)
const joining = ref(false)
const selectedCell = ref<number | null>(null)
const selectedHistoryIndex = ref<number | null>(null)
const showGameOverModal = ref(false)
const showAbandonModal = ref(false)
const showCreateGameDialog = ref(false)
const abandoning = ref(false)

const isAnalyzing = ref(false)
const showAnalytics = ref(false)

const triggerAnalysis = async () => {
  if (!game.value || (game.value.status !== GameStatus.FINISHED && game.value.status !== GameStatus.CANCELLED)) return
  if (!authStore.isLoggedIn) {
    authStore.openLoginModal(route.fullPath)
    return
  }
  showAnalytics.value = true
  isAnalyzing.value = true
  try {
    const success = await games.analyzeGame(game.value.$id)
    if (success) {
      const updatedGame = (await games.getGame(game.value.$id)) as GameWithAnalytics | null
      if (updatedGame) {
        game.value = updatedGame
        // Fetch analytics to have recommendations available for the board
        const { tablesDB } = await import('~/api/appwriteClient')
        const { Query } = await import('appwrite')
        const response = await tablesDB.listRows<GameAnalytics>({
          databaseId: 'tixo',
          tableId: 'game-analytics',
          queries: [Query.equal('gameId', game.value.$id)],
        })
        if (response.total > 0) {
          game.value.analytics = response.rows[0]
        }
      }
    }
  } catch (error) {
    console.error('Analysis failed:', error)
  } finally {
    isAnalyzing.value = false
  }
}

let subscription: RealtimeSubscription | null = null

const handleAbandon = async () => {
  if (!game.value || abandoning.value) return
  abandoning.value = true
  try {
    const result = await games.abandonGame(game.value.$id)
    if (result?.success) {
      showAbandonModal.value = false
      await fetchGame()
      showGameOverModal.value = true
    }
  } catch (error) {
    console.error('Failed to abandon game:', error)
  } finally {
    abandoning.value = false
  }
}

const historicalState = computed(() => {
  if (selectedHistoryIndex.value === null || !game.value) return null

  const moves = game.value.moveHistory || []
  const limit = selectedHistoryIndex.value + 1
  const boardArray = '.'.repeat(81).split('')
  const tileWinnersArray = '.'.repeat(9).split('')

  for (let i = 0; i < limit; i++) {
    const move = moves[i]
    if (!move) continue

    const symbol = i % 2 === 0 ? 'X' : 'O'

    const pos = coordToIndex(move)
    boardArray[pos] = symbol

    const sbIdx = Math.floor(Math.floor(pos / 9) / 3) * 3 + Math.floor((pos % 9) / 3)
    const sb = getSmallBoard(boardArray.join(''), sbIdx)
    const winner = check3x3Winner(sb)
    if (winner && tileWinnersArray[sbIdx] === '.') {
      tileWinnersArray[sbIdx] = winner
    }
  }

  return {
    board: boardArray.join(''),
    tileWinners: tileWinnersArray.join(''),
  }
})

const highlightedHistoryCell = computed(() => {
  if (selectedHistoryIndex.value === null || !game.value || !game.value.moveHistory) return null
  const move = game.value.moveHistory[selectedHistoryIndex.value]
  return move ? coordToIndex(move) : null
})

const recommendedHistoryCell = computed(() => {
  // If we have an analytics record and a turn is selected, find the recommendation for THAT turn
  const analyticsData = game.value?.analytics
  if (selectedHistoryIndex.value === null || !analyticsData || !analyticsData.recommendations) return null
  
  const rec = analyticsData.recommendations[selectedHistoryIndex.value]
  return rec ? coordToIndex(rec) : null
})

const fetchPlayers = async () => {
  if (game.value?.xPlayerId) {
    xPlayer.value = await users.getUser(game.value.xPlayerId)
  }
  if (game.value?.oPlayerId) {
    oPlayer.value = await users.getUser(game.value.oPlayerId)
  }
}

const fetchGame = async () => {
  loading.value = true
  const gameId = route.params.id as string
  try {
    if (!authStore.user) {
      await authStore.checkAuth()
    }
    
    if (!gameId) {
      loading.value = false
      return
    }

    const gameData = await games.getGame(gameId)

    if (gameData) {
      game.value = gameData as GameWithAnalytics
      await fetchPlayers()

      const isFinished = gameData.status === GameStatus.FINISHED || gameData.status === GameStatus.CANCELLED
      const isAnalyzing = gameData.analysisStatus === 'ANALYSIS_COMPLETE' || gameData.analysisStatus === 'ANALYSIS_IN_PROCESS'
      
      if (isFinished && isAnalyzing) {
        showAnalytics.value = true
        // Fetch analytics to have recommendations available for the board
        const { tablesDB } = await import('~/api/appwriteClient')
        const { Query } = await import('appwrite')
        const response = await tablesDB.listRows<GameAnalytics>({
          databaseId: 'tixo',
          tableId: 'game-analytics',
          queries: [Query.equal('gameId', gameData.$id)],
        })
        if (response.total > 0 && game.value) {
          game.value.analytics = response.rows[0]
        }
      }
    } else {
      console.error('Game not found')
    }
  } catch (error) {
    console.error('Failed to fetch game or user:', error)
  } finally {
    loading.value = false
  }
}

const isGuest = computed(() => {
  return !authStore.isLoggedIn
})

const handleGameEnd = async () => {
  if (!game.value) return
  
  if (isGuest.value) {
    try {
      const { tablesDB } = await import('~/api/appwriteClient')
      const { Query } = await import('appwrite')
      
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response = await tablesDB.listRows<any>({
        databaseId: 'tixo',
        tableId: 'game-analytics',
        queries: [Query.equal('gameId', game.value.$id)],
      })

      if (response.total > 0) {
        if (typeof window !== 'undefined') localStorage.setItem('guestGameData', JSON.stringify(response.rows[0]))
      }
    } catch (e) {
      console.error('Failed to save guest game data', e)
    }
  }
}

const joinMatch = async () => {
  if (!game.value || joining.value) return
  if (!authStore.isLoggedIn) {
    authStore.openLoginModal(route.fullPath)
    return
  }
  joining.value = true
  try {
    const success = await games.joinGame(game.value.$id)
    if (success) {
      await fetchGame()
    }
  } catch (error) {
    console.error('Failed to join game:', error)
  } finally {
    joining.value = false
  }
}

const isPlayerInGame = computed(() => {
  if (!game.value || !authStore.user) return false
  if (game.value.isOnDevice) return game.value.creatorId === authStore.user.$id
  return (
    game.value.xPlayerId === authStore.user.$id || game.value.oPlayerId === authStore.user.$id
  )
})

const isMyTurn = computed(() => {
  if (!game.value || !authStore.user || game.value.status !== GameStatus.IN_PROGRESS)
    return false
  if (isAITurn.value) return false
  if (game.value.isOnDevice) return game.value.creatorId === authStore.user.$id
  return game.value.nextPlayerId === authStore.user.$id
})

const currentPlayer = computed(() => {
  if (!game.value) return 'X'
  return (game.value.moveHistory?.length || 0) % 2 === 0 ? 'X' : 'O'
})

const isAITurn = computed(() => {
  if (!game.value || game.value.status !== GameStatus.IN_PROGRESS) return false
  if (!game.value.isOnDevice) return false

  const historyLen = game.value.moveHistory?.length || 0
  if (game.value.requestedOpponentId?.startsWith('AI_O') && historyLen % 2 !== 0) return true
  if (game.value.requestedOpponentId?.startsWith('AI_X') && historyLen % 2 === 0) return true
  return false
})

const isAILoading = ref(false)

const makeAIMove = async () => {
  if (!game.value || !isAITurn.value || isAILoading.value) return
  isAILoading.value = true

  await new Promise((r) => setTimeout(r, 500))

  const state = rebuildGameState(game.value.moveHistory || [])
  const isX = game.value.requestedOpponentId?.startsWith('AI_X')
  const aiPlayer = isX ? Player.X : Player.O

  const modelMatch = game.value.requestedOpponentId?.match(/AI_[XO]_(M[1-5])/)
  const modelName: string = modelMatch?.[1] || 'M5'
  const model = AI_MODELS[modelName] || AI_MODELS['M5']
  if (!model) return

  await new Promise((r) => setTimeout(r, 50))

  const bestMove = getBestMove(state, model.depth, model.weights, aiPlayer, model.errorRate)

  if (bestMove !== -1) {
    const sbIdx = Math.floor(bestMove / 9)
    const cellIdx = bestMove % 9
    const x = (sbIdx % 3) * 3 + (cellIdx % 3)
    const y = Math.floor(sbIdx / 3) * 3 + Math.floor(cellIdx / 3)
    const result = await games.submitMove(game.value.$id, x, y)
    await fetchGame()
    if (result?.status === GameStatus.FINISHED || result?.status === GameStatus.CANCELLED) {
      showGameOverModal.value = true
      await handleGameEnd()
    }
  }
  isAILoading.value = false
}

watch(
  isAITurn,
  (turn) => {
    if (turn) {
      makeAIMove()
    }
  },
  { immediate: true },
)

const displayBoard = computed(() => {
  if (!game.value) return '.'.repeat(81)
  if (selectedCell.value === null) return game.value.board

  const b = game.value.board.split('')
  while (b.length < 81) b.push('.')

  b[selectedCell.value] = currentPlayer.value
  return b.join('')
})

const handleCellClick = (index: number) => {
  if (game.value?.status !== GameStatus.IN_PROGRESS) return
  if (isGuest.value) {
    authStore.openLoginModal(route.fullPath)
    return
  }
  if (!isPlayerInGame.value) return
  if (!isMyTurn.value) return

  if (selectedCell.value === index) {
    selectedCell.value = null
  } else {
    if (isCellAvailable(index, game.value.board, game.value.availableMoves)) {
      selectedCell.value = index
    }
  }
}

const submitMove = () => {
  if (selectedCell.value === null) return
  if (!isPlayerInGame.value || !isMyTurn.value) return

  const x = selectedCell.value % 9
  const y = Math.floor(selectedCell.value / 9)
  games.submitMove(game.value?.$id ?? '', x, y).then((result) => {
    if (result?.success) {
      selectedCell.value = null
      fetchGame().then(() => {
        if (result.status === GameStatus.FINISHED || result.status === GameStatus.CANCELLED) {
          showGameOverModal.value = true
          handleGameEnd()
        }
      })
    }
  }).catch((error) => {
    console.error('Failed to submit move:', error)
  })
}

onMounted(fetchGame)

watch(() => route.params.id, (newId) => {
  if (newId) {
    fetchGame()
    // Re-subscribe if needed
    if (subscription) subscription.close()
    import('~/api/appwriteClient').then(({ realtime }) => {
      realtime.subscribe(
        [`databases.tixo.collections.games.documents.${newId}`],
        (response) => {
          if (response.events.some((e) => e.includes('.update') || e.includes('.patch'))) {
            const oldStatus = game.value?.status
            const newGame = response.payload as Game
            game.value = newGame as GameWithAnalytics
            fetchPlayers()

            if (
              (newGame.status === GameStatus.FINISHED || newGame.status === GameStatus.CANCELLED) &&
              oldStatus &&
              oldStatus !== GameStatus.FINISHED &&
              oldStatus !== GameStatus.CANCELLED
            ) {
              showGameOverModal.value = true
            }
          }
        },
      ).then(s => subscription = s)
    })
  }
})

onMounted(async () => {
  const gameId = route.params.id as string
  if (!gameId) return
  
  const { realtime } = await import('~/api/appwriteClient')
  subscription = await realtime.subscribe(
    [`databases.tixo.collections.games.documents.${gameId}`],
    (response) => {
      if (response.events.some((e) => e.includes('.update') || e.includes('.patch'))) {
        const oldStatus = game.value?.status
        const newGame = response.payload as Game
        game.value = newGame as GameWithAnalytics
        fetchPlayers()

        if (
          (newGame.status === GameStatus.FINISHED || newGame.status === GameStatus.CANCELLED) &&
          oldStatus &&
          oldStatus !== GameStatus.FINISHED &&
          oldStatus !== GameStatus.CANCELLED
        ) {
          showGameOverModal.value = true
        }
      }
    },
  )
})

const matchResult = computed(() => {
  if (!game.value || !authStore.user) return ''
  if (game.value.status === GameStatus.CANCELLED) return 'CANCELLED'
  if (game.value.winner === 'None') return ''
  if (game.value.winner === 'D') return 'DRAW'
  const userSymbol = game.value.xPlayerId === authStore.user.$id ? 'X' : 'O'
  return game.value.winner === userSymbol ? 'WIN' : 'LOSS'
})

onUnmounted(async () => {
  if (subscription) await subscription.close()
})

const goBack = () => {
  router.back()
}
</script>

<template>
  <NuxtLayout name="default">
    <template #header-left>
      <GameHeader :game="game" :x-player="xPlayer" :o-player="oPlayer" @back="goBack" />
    </template>

    <div v-if="loading" class="flex flex-col items-center justify-center min-h-[60vh]">
      <i class="pi pi-spin pi-spinner text-4xl text-blue-500 mb-4"></i>
      <p class="text-app-text-muted opacity-40 animate-pulse">Loading game state...</p>
    </div>

    <div
      v-else-if="!game"
      class="flex flex-col items-center justify-center min-h-[60vh] text-center"
    >
      <i class="pi pi-exclamation-triangle text-4xl text-amber-500 mb-4"></i>
      <h2 class="text-2xl font-bold text-app-text mb-2">Game Not Found</h2>
      <p class="text-app-text-muted opacity-40 mb-6">
        The game you're looking for doesn't exist or has been removed.
      </p>
      <button
        @click="goBack"
        class="px-6 py-2 rounded-xl bg-glass-white text-app-text font-bold hover:bg-indigo-500/20 transition-all border border-glass-border"
      >
        Go Back
      </button>
    </div>

    <div v-else class="flex flex-col pb-12 h-full min-h-[calc(100vh-120px)] overflow-x-hidden px-4">
      <div 
        class="grid grid-cols-1 gap-12 transition-all duration-1000 ease-in-out w-full"
        :class="(game.status === GameStatus.FINISHED || game.status === GameStatus.CANCELLED || isPlayerInGame)
          ? 'lg:grid-cols-[140px_1fr_var(--right-panel-width)]' 
          : 'lg:grid-cols-[140px_1fr] lg:max-w-7xl mx-auto'"
        :style="{ '--right-panel-width': (showAnalytics || isGuest) ? '800px' : '400px' }"
      >
        <!-- Match Timeline Sidebar -->
        <MatchTimeline 
          class="order-2 lg:order-1"
          :move-history="game.moveHistory || []"
          :selected-history-index="selectedHistoryIndex"
          :is-on-device="game.isOnDevice"
          @select-move="selectedHistoryIndex = $event"
        />

        <!-- Main Board Area -->
        <div 
          class="order-1 lg:order-2 flex flex-col items-center justify-center py-4 lg:py-0 min-h-[75vh] transition-all duration-1000 ease-in-out w-full"
        >
          <div class="flex flex-col items-center justify-center space-y-8 lg:space-y-16 w-full">
            <Board
              :available-moves="selectedHistoryIndex !== null ? '' : game?.availableMoves"
              :board="selectedHistoryIndex !== null ? historicalState?.board : displayBoard"
              :tile-winners="
                selectedHistoryIndex !== null ? historicalState?.tileWinners : game.tileWinners
              "
              :selected-cell="selectedCell"
              :highlighted-cell="highlightedHistoryCell"
              :recommended-cell="recommendedHistoryCell"
              :current-player="currentPlayer"
              :readonly="selectedHistoryIndex !== null || game.status !== GameStatus.IN_PROGRESS"
              @cell-click="handleCellClick"
            />

            <GameStatusHUD 
              :game-status="game.status"
              :is-player-in-game="isPlayerInGame"
              :is-my-turn="isMyTurn"
              :is-a-i-turn="isAITurn"
              :current-player="currentPlayer"
              :selected-cell="selectedCell"
              :selected-history-index="selectedHistoryIndex"
              :joining="joining"
              :abandoning="abandoning"
              :move-history-count="(game?.moveHistory || []).length"
              @clear-history="selectedHistoryIndex = null"
              @clear-selection="selectedCell = null"
              @submit-move="submitMove"
              @join-match="joinMatch"
              @abandon-match="showAbandonModal = true"
            />

            <!-- Desktop Footer -->
            <div class="hidden lg:flex flex-col items-center gap-1 opacity-20 hover:opacity-100 transition-opacity pt-12 border-t border-glass-border w-full">
               <span class="text-[8px] font-black uppercase tracking-[0.4em] text-app-text-muted opacity-20">Game Session Key</span>
               <span class="text-[9px] mono text-app-text-muted opacity-30">{{ game.$id }}</span>
            </div>
          </div>
        </div>

        <!-- Mobile Game Info (visible below HUD and MatchTimeline on mobile) -->
        <div v-if="game" class="lg:hidden order-3 space-y-6 pb-12">
          <div class="h-[1px] w-full bg-glass-border"></div>
          
          <div class="glass p-6 rounded-[2rem] border-glass-border space-y-4">
             <div class="flex items-center gap-3 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]">
               <i class="pi pi-info-circle"></i>
               <span>Match Intelligence</span>
             </div>

             <div class="flex flex-col gap-4">
                <!-- X Player -->
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-lg glass flex items-center justify-center marker-x font-black">X</div>
                    <div>
                      <p class="text-xs font-bold text-app-text">
                        {{ game.requestedOpponentId?.startsWith('AI_X') ? 'Tixo AI' : xPlayer?.name || 'Pending' }}
                      </p>
                      <p v-if="xPlayer?.rating && !game.requestedOpponentId?.startsWith('AI_X')" class="text-[9px] mono text-indigo-400 font-black">Rating: {{ xPlayer.rating }}</p>
                    </div>
                  </div>
                  <span v-if="currentPlayer === 'X' && game.status === GameStatus.IN_PROGRESS" class="w-2 h-2 rounded-full bg-red-400 animate-pulse"></span>
                </div>

                <div class="flex items-center justify-center">
                  <span class="text-[9px] font-black text-app-text-muted opacity-20 uppercase tracking-[0.3em]">VS</span>
                </div>

                <!-- O Player -->
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-lg glass flex items-center justify-center marker-o font-black">O</div>
                    <div>
                      <p class="text-xs font-bold text-app-text">
                        {{ game.requestedOpponentId?.startsWith('AI_O') ? 'Tixo AI' : (game.isOnDevice && !game.requestedOpponentId?.startsWith('AI_X') ? (oPlayer?.name || 'Local Player') : (oPlayer?.name || 'Waiting...')) }}
                      </p>
                      <p v-if="oPlayer?.rating && !game.requestedOpponentId?.startsWith('AI_O')" class="text-[9px] mono text-indigo-400 font-black">Rating: {{ oPlayer.rating }}</p>
                    </div>
                  </div>
                  <span v-if="currentPlayer === 'O' && game.status === GameStatus.IN_PROGRESS" class="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                </div>
             </div>

             <div class="pt-4 border-t border-glass-border/30 flex items-center justify-between">
                <span class="text-[9px] font-black uppercase tracking-widest text-app-text-muted opacity-40">Status</span>
                <span 
                  :class="[
                    'text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded border',
                    game.status === GameStatus.IN_PROGRESS ? 'text-green-500 border-green-500/20 bg-green-500/5' :
                    game.status === GameStatus.FINISHED ? 'text-blue-500 border-blue-500/20 bg-blue-500/5' :
                    game.status === GameStatus.CANCELLED ? 'text-red-500 border-red-500/20 bg-red-500/5' :
                    'text-amber-500 border-amber-500/20 bg-amber-500/5'
                  ]"
                >
                  {{ game.status.replace(/_/g, ' ') }}
                </span>
             </div>
          </div>
          
          <!-- Footer moved here on mobile -->
          <div class="flex flex-col items-center gap-1 opacity-20 pt-6">
             <span class="text-[8px] font-black uppercase tracking-[0.4em] text-app-text-muted">Game Session Key</span>
             <span class="text-[9px] mono text-app-text-muted">{{ game.$id }}</span>
          </div>
        </div>

        <!-- Right Side Panel (Actions/Analytics) -->
        <div 
          v-if="game.status === GameStatus.FINISHED || game.status === GameStatus.CANCELLED || isPlayerInGame"
          class="hidden lg:flex flex-col shrink-0 transition-all duration-1000 ease-out p-4 relative items-center justify-center lg:order-3"
          :style="{ 
            width: (showAnalytics || isGuest) ? '800px' : '400px', 
            opacity: 1, 
            transform: 'translateX(0)' 
          }"
        >
          <!-- Active Game Actions (Tactical Dashboard) -->
          <div v-if="game.status !== GameStatus.FINISHED && game.status !== GameStatus.CANCELLED" class="w-full h-full">
            <TacticalDashboard
              :game="game"
              :x-player="xPlayer"
              :o-player="oPlayer"
              :is-player-in-game="isPlayerInGame"
              :is-my-turn="isMyTurn"
              :is-a-i-turn="isAITurn"
              :current-player="currentPlayer"
              :selected-cell="selectedCell"
              :selected-history-index="selectedHistoryIndex"
              :joining="joining"
              :abandoning="abandoning"
              @clear-history="selectedHistoryIndex = null"
              @clear-selection="selectedCell = null"
              @submit-move="submitMove"
              @join-match="joinMatch"
              @abandon-click="showAbandonModal = true"
            />
          </div>

          <!-- Post-Game Analytics -->
          <template v-else>
            <!-- Guest Lock Overlay -->
            <div 
              v-if="isGuest"
              class="absolute inset-0 z-50 flex items-center justify-center p-8 bg-void/20 backdrop-blur-sm"
            >
              <div class="glass p-12 rounded-[3rem] border-indigo-500/30 flex flex-col items-center text-center space-y-8 shadow-2xl">
                <div class="w-20 h-20 rounded-3xl glass flex items-center justify-center border-indigo-500/20 text-indigo-500">
                  <i class="pi pi-lock text-3xl"></i>
                </div>
                <div class="space-y-2">
                  <h4 class="text-2xl font-black text-app-text uppercase italic">Intelligence Locked</h4>
                  <p class="text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40">Log in to unlock full move analysis</p>
                </div>
                <button
                  @click="authStore.openLoginModal(route.fullPath)"
                  class="px-10 py-4 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-indigo-500 transition-all shadow-2xl active:scale-[0.98]"
                >
                  Authorize to Unlock
                </button>
              </div>
            </div>

            <!-- Request Analysis Button -->
            <div v-if="!showAnalytics && !isGuest" class="w-full flex justify-center">
               <button
                @click="triggerAnalysis"
                class="group relative flex flex-col items-center gap-6 p-8 rounded-[2.5rem] glass border-glass-border hover:border-indigo-500/30 transition-all duration-700 hover:scale-105 w-full max-w-sm"
              >
                <div class="w-20 h-20 rounded-2xl glass flex items-center justify-center border-indigo-500/20 text-indigo-500 shadow-2xl shadow-indigo-500/10 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                  <i class="pi pi-bolt text-4xl"></i>
                </div>
                <div class="space-y-2 text-center">
                  <h4 class="text-lg font-black text-app-text uppercase italic tracking-tight">Tactical Synthesis</h4>
                  <p class="text-[9px] font-black uppercase tracking-[0.2em] text-app-text-muted opacity-20 group-hover:opacity-40 transition-opacity">Unlock deep move evaluations</p>
                </div>
              </button>
            </div>

            <!-- The Dashboard -->
            <div v-else class="h-full w-full" :class="{ 'blur-md': isGuest }">
              <Transition
                enter-active-class="transition duration-1000 ease-out"
                enter-from-class="opacity-0 translate-x-20"
                enter-to-class="opacity-100 translate-x-0"
              >
                <GameAnalyticsDashboard 
                  v-if="showAnalytics || isGuest"
                  :game-id="game.$id" 
                  :winner="game.winner" 
                  :selected-turn="selectedHistoryIndex"
                  :analysis-status="game.analysisStatus"
                  @turn-select="selectedHistoryIndex = $event"
                  @trigger-analysis="triggerAnalysis"
                />
              </Transition>
            </div>
          </template>
        </div>
      </div>

      <!-- Mobile Analytics Area (Bottom) -->

      <Transition
        enter-active-class="transition duration-1000 ease-out"
        enter-from-class="opacity-0 translate-y-20"
        enter-to-class="opacity-100 translate-y-0"
      >
        <div v-if="(game.status === GameStatus.FINISHED || game.status === GameStatus.CANCELLED) && game" class="lg:hidden mt-8 px-4 pb-12 relative">
          <h3 class="text-xl font-black text-app-text uppercase italic mb-6">
            Tactical Analysis<span class="text-indigo-500">.</span>
          </h3>

          <div 
            v-if="isGuest"
            class="absolute inset-0 z-50 flex items-center justify-center p-8 bg-void/20 backdrop-blur-sm"
          >
            <div class="glass p-8 rounded-[2rem] border-indigo-500/30 flex flex-col items-center text-center space-y-6 shadow-2xl">
              <p class="text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40">Log in to unlock full move analysis</p>
              <button
                @click="authStore.openLoginModal(route.fullPath)"
                class="px-8 py-3 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-indigo-500 transition-all shadow-2xl"
              >
                Authorize to Unlock
              </button>
            </div>
          </div>

          <div v-if="!showAnalytics && !isGuest" class="py-12 flex flex-col items-center justify-center glass rounded-3xl border border-glass-border space-y-6 shadow-2xl">
            <p class="text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-20">
              Tactical data is available for review
            </p>
            <button
              @click="triggerAnalysis"
              class="px-10 py-4 bg-indigo-600 text-white text-xs font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-indigo-500 transition-all shadow-2xl"
            >
              Request Analysis
            </button>
          </div>

          <div v-else :class="{ 'blur-md pointer-events-none': isGuest }">
                              <GameAnalyticsDashboard 
                                :game-id="game.$id" 
                                :winner="game.winner" 
                                :selected-turn="selectedHistoryIndex"
                                :analysis-status="game.analysisStatus"
                                @turn-select="selectedHistoryIndex = $event"
                                @trigger-analysis="triggerAnalysis"
                              />            </div>
        </div>
      </Transition>
    </div>

    <AbandonMatchModal
      :show="showAbandonModal"
      :game="game"
      :abandoning="abandoning"
      @close="showAbandonModal = false"
      @confirm="handleAbandon"
    />

    <GameOverModal
      :show="showGameOverModal"
      :match-result="matchResult"
      @close="showGameOverModal = false"
      @create-new="
        showCreateGameDialog = true;
        showGameOverModal = false;
      "
    />

    <CreateGameDialog :visible="showCreateGameDialog" @close="showCreateGameDialog = false" />
  </NuxtLayout>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  display: none;
}
.custom-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
