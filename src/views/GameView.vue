<script setup lang="ts">
import {ref, onMounted, onUnmounted, computed, watch} from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { client } from "@/api/appwriteClient"
import { games } from '@/api/games'
import { auth } from '@/api/authentication'
import type { Game } from '@/api/dto/Game'
import { GameStatus } from '@/api/dto/GameStatus'
import Board from '@/components/Board.vue'
import CreateGameDialog from '@/components/CreateGameDialog.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import AuthenticatedView from '@/views/AuthenticatedView.vue'
import type { Models } from 'appwrite'

const route = useRoute()
const router = useRouter()
const game = ref<Game | null>(null)
const currentUser = ref<Models.User<Models.Preferences> | null>(null)
const loading = ref(true)
const joining = ref(false)
const selectedCell = ref<number | null>(null)
const selectedHistoryIndex = ref<number | null>(null)
const showGameOverModal = ref(false)
const showAbandonModal = ref(false)
const showCreateGameDialog = ref(false)
const abandoning = ref(false)
let unsubscribe: (() => void) | null = null

const handleAbandon = async () => {
  if (!game.value || abandoning.value) return
  abandoning.value = true
  try {
    const success = await games.abandonGame(game.value.$id)
    if (success) {
      showAbandonModal.value = false
      await fetchGame()
    }
  } catch (error) {
    console.error('Failed to abandon game:', error)
  } finally {
    abandoning.value = false
  }
}

const coordToIndex = (coord: string) => {
  const col = coord.charCodeAt(0) - 65;
  const row = parseInt(coord.substring(1)) - 1;
  return row * 9 + col;
};

const getSmallBoard = (board: string, sbIdx: number): string => {
  const sbRow = Math.floor(sbIdx / 3);
  const sbCol = sbIdx % 3;
  let res = "";
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      const row = sbRow * 3 + r;
      const col = sbCol * 3 + c;
      res += board[row * 9 + col];
    }
  }
  return res;
}

const check3x3Winner = (board: string): string | null => {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (const pattern of winPatterns) {
    if (board[pattern[0]] !== "." && board[pattern[0]] === board[pattern[1]] && board[pattern[0]] === board[pattern[2]]) {
      return board[pattern[0]];
    }
  }
  if (!board.includes(".")) return "D";
  return null;
}

const historicalState = computed(() => {
  if (selectedHistoryIndex.value === null || !game.value) return null;

  const moves = game.value.moveHistory || [];
  const limit = selectedHistoryIndex.value + 1;
  const boardArray = ".".repeat(81).split("");
  const tileWinnersArray = ".".repeat(9).split("");

  // On-device starts with X (idx 0), Regular starts with O (idx 0)
  const startsWithX = game.value.isOnDevice;

  for (let i = 0; i < limit; i++) {
    const symbol = startsWithX
      ? (i % 2 === 0 ? "X" : "O")
      : (i % 2 === 0 ? "O" : "X");

    const pos = coordToIndex(moves[i]);
    boardArray[pos] = symbol;

    const sbIdx = Math.floor(Math.floor(pos / 9) / 3) * 3 + Math.floor((pos % 9) / 3);
    const sb = getSmallBoard(boardArray.join(""), sbIdx);
    const winner = check3x3Winner(sb);
    if (winner && tileWinnersArray[sbIdx] === ".") {
      tileWinnersArray[sbIdx] = winner;
    }
  }

  return {
    board: boardArray.join(""),
    tileWinners: tileWinnersArray.join("")
  };
});

const indexToCoord = (index: number) => {
  const x = index % 9;
  const y = Math.floor(index / 9);
  const col = String.fromCharCode(65 + x);
  const row = y + 1;
  return `${col}${row}`;
};

const isCellAvailable = (index: number) => {
  if (!game.value || !game.value.availableMoves) return true;
  if (game.value.board[index] !== ".") return false;
  const coord = indexToCoord(index);
  const moves = game.value.availableMoves ?? "";
  if (moves.startsWith("ALL_AVAILABLE_EXCEPT:")) {
    const except = moves.split(":")[1].split(",");
    return !except.includes(coord);
  } else if (moves.startsWith("AVAILABLE_IN_TILE:")) {
    const parts = moves.split(":");
    const tileCoord = parts[1];
    const except = parts[3] ? parts[3].split(",") : [];
    const tx = tileCoord.charCodeAt(0) - 65;
    const ty = parseInt(tileCoord.substring(1)) - 1;
    const cx = index % 9;
    const cy = Math.floor(index / 9);
    const isInTile = cx >= tx && cx < tx + 3 && cy >= ty && cy < ty + 3;
    return isInTile && !except.includes(coord);
  }
  return true;
};

const fetchGame = async () => {
  loading.value = true
  const gameId = route.params.id as string
  try {
    const [gameData, userData] = await Promise.all([
      games.getGame(gameId),
      auth.getCurrentUser()
    ])

    if (gameData) {
      game.value = gameData
    } else {
      console.error('Game not found')
    }

    currentUser.value = userData
  } catch (error) {
    console.error('Failed to fetch game or user:', error)
  } finally {
    loading.value = false
  }
}

const joinMatch = async () => {
  if (!game.value || joining.value) return
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
  if (!game.value || !currentUser.value) return false
  if (game.value.isOnDevice) return game.value.creatorId === currentUser.value.$id
  return game.value.xPlayerId === currentUser.value.$id || game.value.oPlayerId === currentUser.value.$id
})

const isMyTurn = computed(() => {
  if (!game.value || !currentUser.value || game.value.status !== GameStatus.IN_PROGRESS) return false
  if (game.value.isOnDevice) return game.value.creatorId === currentUser.value.$id
  return game.value.nextPlayerId === currentUser.value.$id
})

const currentPlayer = computed(() => {
  if (!game.value) return 'X'
  // Using nextPlayerId to determine whose turn it is
  if (game.value.nextPlayerId === game.value.oPlayerId) return 'O'
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
  if (!isPlayerInGame.value) return
  if (!isMyTurn.value) return

  if (selectedCell.value === index) {
    selectedCell.value = null
  } else {
    // Accept both dot and space as empty for robustness
    if (isCellAvailable(index)) {
      selectedCell.value = index
    }
  }
}

const submitMove = () => {
  if (selectedCell.value === null) return
  if (!isPlayerInGame.value || !isMyTurn.value) return

  console.log('Submitting move for cell:', selectedCell.value);

  const x = selectedCell.value % 9; const y = Math.floor(selectedCell.value / 9); games.submitMove(game.value?.$id ?? "", x, y).then(success => { if (success) { selectedCell.value = null; fetchGame(); } });
}

const getStatusColor = (status: GameStatus) => {
  switch (status) {
    case GameStatus.IN_PROGRESS: return 'bg-green-500/10 text-green-500 border-green-500/20'
    case GameStatus.FINISHED: return 'bg-blue-500/10 text-blue-500 border-blue-500/20'
    case GameStatus.WAITING_FOR_OPPONENT: return 'bg-amber-500/10 text-amber-500 border-amber-500/20'
    case GameStatus.CANCELLED: return 'bg-red-500/10 text-red-500 border-red-500/20'
    default: return 'bg-slate-500/10 text-slate-500 border-slate-500/20'
  }
}

const formatStatus = (status: GameStatus) => {
  if (status === GameStatus.IN_PROGRESS) return 'LIVE MATCH'
  return status.replace(/_/g, ' ')
}

onMounted(fetchGame)

onMounted(() => {
  const gameId = route.params.id as string;
  unsubscribe = client.subscribe(`databases.tixo.collections.games.documents.${gameId}`, (response) => {
    if (response.events.some(e => e.includes(".update") || e.includes(".patch"))) {
      game.value = response.payload as Game;
    }
  });
});

watch(() => game.value?.status, (newStatus) => {
  if (newStatus === GameStatus.FINISHED || newStatus === GameStatus.CANCELLED) {
    showGameOverModal.value = true;
  }
});

const matchResult = computed(() => {
  if (!game.value || !currentUser.value) return "";
  if (game.value.status === GameStatus.CANCELLED) return "CANCELLED";
  if (game.value.winner === "None") return "";
  if (game.value.winner === "D") return "DRAW";
  const userSymbol = game.value.xPlayerId === currentUser.value.$id ? "X" : "O";
  return game.value.winner === userSymbol ? "WIN" : "LOSS";
});
onUnmounted(() => {
  if (unsubscribe) unsubscribe();
});

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
            <div class="flex items-center mt-0.5 space-x-2">
               <span :class="getStatusColor(game.status)" class="text-[9px] px-1.5 py-0.5 rounded-md border font-black tracking-widest uppercase">
                 {{ formatStatus(game.status) }}
               </span>
               <span v-if="game.isOnDevice" class="bg-amber-500/10 text-amber-500 border-amber-500/20 text-[9px] px-1.5 py-0.5 rounded-md border font-black tracking-widest uppercase">
                 ON-DEVICE
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

      <div v-else class="flex flex-col lg:flex-row gap-12 pb-12">
        <!-- Sidebar: Subtle Timeline (Desktop) -->
        <aside class="hidden lg:flex w-20 flex-col items-center py-4 border-r border-white/[0.05] h-fit sticky top-0">
            <div class="flex flex-col gap-6 overflow-y-auto custom-scrollbar max-h-[75vh] w-full px-2 py-4">
                <div v-for="(move, idx) in game.moveHistory" :key="idx"
                     @click="selectedHistoryIndex = (selectedHistoryIndex === idx ? null : idx)"
                     class="history-item flex flex-col items-center gap-1 cursor-pointer group shrink-0">
                    <span class="text-[9px] font-bold transition-colors mono"
                          :class="selectedHistoryIndex === idx ? 'text-indigo-500' : 'text-white/20 group-hover:text-white/40'">
                        {{ (idx + 1).toString().padStart(2, '0') }}
                    </span>
                    
                    <!-- Expanding Dot -->
                    <div :class="[
                        'relative flex items-center justify-center transition-all duration-500 ease-out h-6 w-full',
                        selectedHistoryIndex === idx ? 'scale-110' : ''
                    ]">
                        <div :class="[
                            'rounded-full transition-all duration-500 ease-out flex items-center justify-center text-[9px] font-black text-white overflow-hidden whitespace-nowrap px-0',
                            selectedHistoryIndex === idx ? 'ring-4 ring-indigo-500/20' : '',
                            // Base size vs Hover size
                            'w-2 h-2 group-hover:w-12 group-hover:h-6 group-hover:rounded-lg group-hover:px-2',
                            // Color logic (X is red, O is blue)
                            game.isOnDevice 
                              ? (idx % 2 === 0 ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.3)]' : 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.3)]')
                              : (idx % 2 === 0 ? 'bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.3)]' : 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.3)]')
                        ]">
                            <span class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{{ move }}</span>
                        </div>
                    </div>
                </div>
                <div v-if="game.moveHistory?.length > 0" class="h-12 w-[1px] bg-white/5 mx-auto shrink-0 mt-2"></div>
            </div>
        </aside>

        <!-- Main Board Area -->
        <div class="flex-1 space-y-12">
          <div class="flex flex-col items-center space-y-12">
            <Board :available-moves="selectedHistoryIndex !== null ? '' : game?.availableMoves"
              :board="selectedHistoryIndex !== null ? historicalState?.board : displayBoard"
              :tile-winners="selectedHistoryIndex !== null ? historicalState?.tileWinners : game.tileWinners"
              :selected-cell="selectedCell"
              :current-player="currentPlayer"
              :readonly="selectedHistoryIndex !== null || game.status !== GameStatus.IN_PROGRESS"
              @cell-click="handleCellClick"
            />

            <!-- Status HUD -->
            <div class="flex items-center gap-12 h-24">
              <Transition
                enter-active-class="transition duration-500 ease-out"
                enter-from-class="transform translate-y-4 opacity-0"
                enter-to-class="transform translate-y-0 opacity-100"
                leave-active-class="transition duration-300 ease-in"
                leave-from-class="transform translate-y-0 opacity-100"
                leave-to-class="transform translate-y-4 opacity-0"
              >
                <div v-if="selectedHistoryIndex !== null" class="flex flex-col items-center">
                   <span class="text-[10px] uppercase font-black tracking-[0.3em] text-indigo-500 mb-2">History View</span>
                   <div class="flex items-center gap-6">
                      <span class="text-2xl font-black text-white">Move {{ selectedHistoryIndex + 1 }}</span>
                      <div class="h-8 w-[1px] bg-white/10"></div>
                      <button @click="selectedHistoryIndex = null" class="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">Return to Live</button>
                   </div>
                </div>
                <div v-else-if="selectedCell !== null" class="flex items-center gap-6">
                  <button @click="selectedCell = null" class="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                    Cancel
                  </button>
                  <button @click="submitMove" class="px-12 py-4 bg-white text-black text-xs font-black uppercase tracking-[0.2em] rounded-xl hover:bg-slate-200 transition-all shadow-2xl shadow-white/5 active:scale-95">
                    Submit Move
                  </button>
                </div>
                <div v-else-if="game.status === GameStatus.IN_PROGRESS" class="flex flex-col items-center">
                    <span class="text-[10px] uppercase font-black tracking-[0.3em] text-white/20 mb-2">
                        {{ isMyTurn ? 'Your Turn' : 'Opponent Turn' }}
                    </span>
                    <div class="flex items-center gap-6">
                        <span :class="['text-4xl font-black', currentPlayer === 'X' ? 'marker-x' : 'marker-o']">{{ currentPlayer }}</span>
                        <div class="h-8 w-[1px] bg-white/10"></div>
                        <span class="text-xl font-light mono text-white/40 italic">Waiting...</span>
                    </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>

        <!-- Right HUD: Tactical Intel -->
        <aside class="w-full lg:w-80 flex flex-col gap-8">
            <div class="space-y-6">
                <h4 class="text-[11px] font-black uppercase tracking-[0.3em] text-indigo-500">Tactical Intel</h4>

                <div class="glass p-6 rounded-3xl space-y-6">
                    <div class="space-y-3">
                        <div class="flex justify-between items-center">
                            <span class="text-[10px] font-bold uppercase tracking-widest text-white/40">Game Status</span>
                            <span :class="['text-[10px] font-black uppercase tracking-widest', getStatusColor(game.status).split(' ')[1]]">
                                {{ formatStatus(game.status) }}
                            </span>
                        </div>
                        <div class="h-[1px] w-full bg-white/5"></div>
                    </div>

                    <div class="space-y-4">
                        <div class="flex justify-between items-center">
                            <span class="text-[10px] font-bold uppercase tracking-widest text-white/40">Board Control</span>
                            <span class="text-xs font-bold mono">--%</span>
                        </div>
                        <div class="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                            <div class="h-full bg-indigo-500 w-[0%] shadow-[0_0_10px_#6366f1] transition-all duration-1000"></div>
                        </div>
                    </div>

                    <div v-if="game.isOnDevice" class="p-3 rounded-xl bg-amber-500/5 border border-amber-500/10 text-center">
                        <p class="text-[10px] font-black text-amber-500 uppercase tracking-[0.2em]">On-Device Match</p>
                    </div>
                </div>
            </div>

            <div class="mt-auto space-y-4">
                <button v-if="isPlayerInGame && (game.status === GameStatus.IN_PROGRESS || game.status === GameStatus.WAITING_FOR_OPPONENT)"
                        @click="showAbandonModal = true"
                        class="w-full py-4 rounded-xl glass border-red-500/20 text-[10px] font-bold uppercase tracking-[0.2em] text-red-400 hover:bg-red-500/10 transition-all">
                    Abandon Match
                </button>
                <div class="glass p-4 rounded-2xl">
                    <p class="text-[9px] text-white/20 uppercase font-bold tracking-widest mb-2">Match ID</p>
                    <p class="text-[10px] mono text-white/40 truncate">{{ game.$id }}</p>
                </div>
            </div>
        </aside>
      </div>
      <!-- Abandon Confirmation Modal -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div v-if="showAbandonModal" class="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div class="relative w-full max-w-sm bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl">
            <div class="flex flex-col items-center text-center space-y-4">
              <div class="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20">
                <i class="pi pi-exclamation-triangle text-2xl"></i>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white">Abandon Match?</h3>
                <p class="text-sm text-slate-400 mt-1">
                  {{ game.status === GameStatus.WAITING_FOR_OPPONENT ? 'This will cancel the match.' : 'This will count as a loss. Are you sure?' }}
                </p>
              </div>
              <div class="grid grid-cols-2 gap-3 w-full pt-2">
                <button @click="showAbandonModal = false" :disabled="abandoning" class="py-3 rounded-xl bg-slate-800 text-slate-200 font-bold hover:bg-slate-700 transition-all">
                  Cancel
                </button>
                <button @click="handleAbandon" :disabled="abandoning" class="py-3 rounded-xl bg-red-600 text-white font-bold hover:bg-red-500 transition-all flex items-center justify-center">
                  <i v-if="abandoning" class="pi pi-spin pi-spinner mr-2"></i>
                  <span>Abandon</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>

      <!-- Game Over Modal -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="showGameOverModal" class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
          <div class="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl overflow-hidden group">
            <!-- Modal Background Decorations -->
            <div class="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/20 blur-3xl rounded-full"></div>
            <div class="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-600/20 blur-3xl rounded-full"></div>

            <!-- Close Button -->
            <button @click="showGameOverModal = false" class="absolute top-4 right-4 p-1.5 text-slate-500 hover:text-white hover:bg-slate-800 rounded-lg transition-all z-10">
              <i class="pi pi-times text-sm"></i>
            </button>

            <div class="relative z-10 flex flex-col items-center text-center">
              <!-- Icon Container -->
              <div :class="[
                'w-24 h-24 rounded-3xl flex items-center justify-center mb-6 shadow-2xl',
                matchResult === 'WIN' ? 'bg-green-500 shadow-green-500/20' :
                matchResult === 'LOSS' ? 'bg-red-500 shadow-red-500/20' :
                matchResult === 'CANCELLED' ? 'bg-slate-500 shadow-slate-500/20' : 'bg-blue-500 shadow-blue-500/20'
              ]">
                <i :class="[
                  'text-5xl text-white',
                  matchResult === 'WIN' ? 'pi pi-trophy' :
                  matchResult === 'LOSS' ? 'pi pi-times-circle' :
                  matchResult === 'CANCELLED' ? 'pi pi-ban' : 'pi pi-arrows-h'
                ]"></i>
              </div>

              <h2 class="text-4xl font-black text-white mb-2 tracking-tight">
                {{ matchResult === 'WIN' ? 'YOU WON!' :
                   matchResult === 'LOSS' ? 'YOU LOST!' :
                   matchResult === 'CANCELLED' ? 'MATCH CANCELLED' : 'IT\'S A DRAW!' }}
              </h2>
              <p class="text-slate-400 font-medium mb-10 max-w-[280px]">
                {{ matchResult === 'WIN' ? 'Exceptional performance! You have conquered the grid.' :
                   matchResult === 'LOSS' ? 'A valiant effort! Analyze the moves and try again.' :
                   matchResult === 'CANCELLED' ? 'The match was ended before enough moves were made to determine a winner.' :
                   'A perfectly balanced match. Neither side would yield.' }}
              </p>

              <!-- Actions -->
              <div class="w-full space-y-3">
                <button @click="showCreateGameDialog = true; showGameOverModal = false" class="w-full py-4 bg-white text-slate-950 font-black rounded-2xl hover:bg-slate-100 transition-all flex items-center justify-center space-x-3 shadow-xl shadow-white/5 active:scale-95">
                  <i class="pi pi-plus-circle font-bold"></i>
                  <span>Create New Game</span>
                </button>
                <button @click="showGameOverModal = false" class="w-full py-4 bg-slate-800 text-white font-bold rounded-2xl hover:bg-slate-700 transition-all flex items-center justify-center space-x-3 active:scale-95">
                  <i class="pi pi-eye"></i>
                  <span>View Board</span>
                </button>
                <button @click="router.push('/')" class="w-full py-4 bg-slate-900/50 text-slate-400 font-bold rounded-2xl hover:bg-slate-800 hover:text-white transition-all active:scale-95 border border-slate-800">
                  Back to Main Page
                </button>
              </div>
            </div>
          </div>
        </div>
      </Transition>

      <CreateGameDialog :visible="showCreateGameDialog" @close="showCreateGameDialog = false" />
    </DashboardLayout>
  </AuthenticatedView>
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
