<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { games } from '@/api/games'

defineProps<{
  visible: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const router = useRouter()
const selectedSymbol = ref<'X' | 'O'>('X')
const gameMode = ref<'ONLINE' | 'LOCAL' | 'AI'>('ONLINE')
const selectedModel = ref<'M1' | 'M2' | 'M3' | 'M4' | 'M5'>('M3')
const requestedOpponentId = ref('')
const loading = ref(false)
const error = ref<string | null>(null)

const handleCreate = async () => {
  loading.value = true
  error.value = null
  try {
    const isOnDevice = gameMode.value === 'LOCAL' || gameMode.value === 'AI'
    let opponentId = gameMode.value === 'ONLINE' ? requestedOpponentId.value.trim() || null : null

    if (gameMode.value === 'AI') {
      // If user chose X, AI is O. If user chose O, AI is X.
      opponentId = selectedSymbol.value === 'X' ? `AI_O_${selectedModel.value}` : `AI_X_${selectedModel.value}`
    }

    const gameId = await games.createGame(
      selectedSymbol.value,
      isOnDevice,
      opponentId
    )
    if (gameId) {
      emit('close')
      await router.push(`/game/${gameId}`)
    } else {
      error.value = 'Failed to create game. Please try again.'
    }
  } catch (e) {
    console.error('Create game error:', e)
    error.value = 'An unexpected error occurred.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div v-if="visible" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
    <!-- Overlay -->
    <div @click="emit('close')" class="absolute inset-0 bg-slate-950/80 backdrop-blur-md"></div>

    <!-- Dialog -->
    <div class="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in duration-300">
      <div class="p-8 space-y-8">
        <div class="text-center space-y-2">
          <h3 class="text-3xl font-black text-white tracking-tight">New Match</h3>
          <p class="text-slate-400">Choose your side to begin the battle.</p>
        </div>

        <!-- Symbol Selection -->
        <div class="grid grid-cols-2 gap-4">
          <button
            @click="selectedSymbol = 'X'"
            :class="[
              'group relative aspect-square rounded-2xl border-2 flex flex-col items-center justify-center transition-all duration-300',
              selectedSymbol === 'X' ? 'border-red-500 bg-red-500/10' : 'border-slate-800 bg-slate-900 hover:border-slate-700'
            ]"
          >
            <span class="text-6xl font-black mb-2 transition-transform group-hover:scale-110" :class="selectedSymbol === 'X' ? 'text-red-500' : 'text-slate-700'">X</span>
            <span class="text-xs font-bold uppercase tracking-widest" :class="selectedSymbol === 'X' ? 'text-red-400' : 'text-slate-500'">Player 1</span>

            <div v-if="selectedSymbol === 'X'" class="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-in zoom-in">
              <i class="pi pi-check text-[10px] text-white font-bold"></i>
            </div>
          </button>

          <button
            @click="selectedSymbol = 'O'"
            :class="[
              'group relative aspect-square rounded-2xl border-2 flex flex-col items-center justify-center transition-all duration-300',
              selectedSymbol === 'O' ? 'border-blue-500 bg-blue-500/10' : 'border-slate-800 bg-slate-900 hover:border-slate-700'
            ]"
          >
            <span class="text-6xl font-black mb-2 transition-transform group-hover:scale-110" :class="selectedSymbol === 'O' ? 'text-blue-500' : 'text-slate-700'">O</span>
            <span class="text-xs font-bold uppercase tracking-widest" :class="selectedSymbol === 'O' ? 'text-blue-400' : 'text-slate-500'">Player 2</span>

            <div v-if="selectedSymbol === 'O'" class="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-in zoom-in">
              <i class="pi pi-check text-[10px] text-white font-bold"></i>
            </div>
          </button>
        </div>

        <!-- Game Mode Selection -->
        <div class="space-y-3">
          <label class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 block">Game Mode</label>
          <div class="grid grid-cols-1 gap-3">
            <button
              @click="gameMode = 'ONLINE'"
              class="flex items-center space-x-4 p-4 rounded-2xl border-2 transition-all duration-300 text-left"
              :class="gameMode === 'ONLINE' ? 'border-blue-500/50 bg-blue-500/10' : 'border-slate-800 bg-slate-900 hover:border-slate-700'"
            >
              <div class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" :class="gameMode === 'ONLINE' ? 'bg-blue-500/20 text-blue-500' : 'bg-slate-800 text-slate-500'">
                <i class="pi pi-globe text-xl"></i>
              </div>
              <div>
                <p class="font-bold text-sm" :class="gameMode === 'ONLINE' ? 'text-blue-500' : 'text-slate-300'">Online Multiplayer</p>
                <p class="text-xs text-slate-500">Play against someone else</p>
              </div>
            </button>

            <button
              @click="gameMode = 'AI'"
              class="flex items-center space-x-4 p-4 rounded-2xl border-2 transition-all duration-300 text-left"
              :class="gameMode === 'AI' ? 'border-purple-500/50 bg-purple-500/10' : 'border-slate-800 bg-slate-900 hover:border-slate-700'"
            >
              <div class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" :class="gameMode === 'AI' ? 'bg-purple-500/20 text-purple-500' : 'bg-slate-800 text-slate-500'">
                <i class="pi pi-android text-xl"></i>
              </div>
              <div>
                <p class="font-bold text-sm" :class="gameMode === 'AI' ? 'text-purple-500' : 'text-slate-300'">Play vs AI</p>
                <p class="text-xs text-slate-500">Challenge the model</p>
              </div>
            </button>

            <button
              @click="gameMode = 'LOCAL'"
              class="flex items-center space-x-4 p-4 rounded-2xl border-2 transition-all duration-300 text-left"
              :class="gameMode === 'LOCAL' ? 'border-amber-500/50 bg-amber-500/10' : 'border-slate-800 bg-slate-900 hover:border-slate-700'"
            >
              <div class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" :class="gameMode === 'LOCAL' ? 'bg-amber-500/20 text-amber-500' : 'bg-slate-800 text-slate-500'">
                <i class="pi pi-mobile text-xl"></i>
              </div>
              <div>
                <p class="font-bold text-sm" :class="gameMode === 'LOCAL' ? 'text-amber-500' : 'text-slate-300'">Pass & Play</p>
                <p class="text-xs text-slate-500">Two players, one device</p>
              </div>
            </button>
          </div>
        </div>

        <!-- AI Model Selection -->
        <div v-if="gameMode === 'AI'" class="space-y-3">
          <label class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 block">AI Difficulty</label>
          <div class="grid grid-cols-5 gap-2">
            <button
              v-for="model in ['M1', 'M2', 'M3', 'M4', 'M5']"
              :key="model"
              @click="selectedModel = model as 'M1' | 'M2' | 'M3' | 'M4' | 'M5'"
              class="py-3 rounded-xl border-2 text-sm font-bold transition-all duration-300"
              :class="selectedModel === model ? 'border-purple-500 bg-purple-500/10 text-purple-400' : 'border-slate-800 bg-slate-900 text-slate-500 hover:border-slate-700'"
            >
              {{ model }}
            </button>
          </div>
          <p class="text-[9px] text-slate-600 font-medium text-center">
            <span v-if="selectedModel === 'M1'">Beginner - Makes many mistakes</span>
            <span v-if="selectedModel === 'M2'">Easy - Occasionally makes mistakes</span>
            <span v-if="selectedModel === 'M3'">Medium - A balanced challenge</span>
            <span v-if="selectedModel === 'M4'">Hard - Tough opponent</span>
            <span v-if="selectedModel === 'M5'">Expert - Plays optimally</span>
          </p>
        </div>

        <!-- Opponent Selection -->
        <div v-if="gameMode === 'ONLINE'" class="space-y-3">
          <label class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 block">Invite Opponent (Optional)</label>
          <div class="relative group">
            <i class="pi pi-user absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 group-focus-within:text-blue-500 transition-colors"></i>
            <input
              v-model="requestedOpponentId"
              type="text"
              placeholder="Enter User ID"
              class="w-full bg-slate-950 border-2 border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-white text-sm font-bold placeholder:text-slate-700 focus:border-blue-500 outline-none transition-all"
            />
          </div>
          <p class="text-[9px] text-slate-600 font-medium">Only the specified user will be able to join this match.</p>
        </div>

        <div v-if="error" class="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
          {{ error }}
        </div>

        <div class="flex flex-col space-y-3">
          <button
            @click="handleCreate"
            :disabled="loading"
            class="w-full py-4 rounded-2xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/20 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center space-x-2"
          >
            <i v-if="loading" class="pi pi-spin pi-spinner"></i>
            <span>{{ loading ? 'Creating Match...' : 'Create Match' }}</span>
          </button>

          <button
            @click="emit('close')"
            :disabled="loading"
            class="w-full py-4 rounded-2xl bg-slate-800 border border-slate-700 text-slate-400 font-bold hover:bg-slate-700 hover:text-white transition-all active:scale-[0.98]"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
