<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { games } from '@/api/games'

const props = defineProps<{
  visible: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const router = useRouter()
const selectedSymbol = ref<'X' | 'O'>('X')
const loading = ref(false)
const error = ref<string | null>(null)

const handleCreate = async () => {
  loading.value = true
  error.value = null
  try {
    const gameId = await games.createGame(selectedSymbol.value)
    if (gameId) {
      emit('close')
      router.push(`/game/${gameId}`)
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
