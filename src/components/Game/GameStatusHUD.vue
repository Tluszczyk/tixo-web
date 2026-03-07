<script setup lang="ts">
import { GameStatus } from '@/api/dto/GameStatus'

defineProps<{
  gameStatus: GameStatus
  isPlayerInGame: boolean
  isMyTurn: boolean
  isAITurn: boolean
  currentPlayer: string
  selectedCell: number | null
  selectedHistoryIndex: number | null
  joining: boolean
}>()

const emit = defineEmits<{
  (e: 'clear-history'): void
  (e: 'clear-selection'): void
  (e: 'submit-move'): void
  (e: 'join-match'): void
}>()
</script>

<template>
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
        <span class="text-[10px] uppercase font-black tracking-[0.3em] text-app-text-muted opacity-60 mb-2"
          >History View</span
        >
        <div class="flex items-center gap-6">
          <span class="text-2xl font-black text-app-text">Move {{ selectedHistoryIndex + 1 }}</span>
          <div class="h-8 w-[1px] bg-glass-border"></div>
          <button
            @click="emit('clear-history')"
            class="text-xs font-bold uppercase tracking-widest text-app-text-muted opacity-40 hover:text-app-text transition-colors"
          >
            Return to Live
          </button>
        </div>
      </div>

      <div v-else-if="selectedCell !== null" class="flex items-center gap-6">
        <button
          @click="emit('clear-selection')"
          class="text-xs font-bold uppercase tracking-widest text-app-text-muted opacity-40 hover:text-app-text transition-colors"
        >
          Cancel
        </button>
        <button
          @click="emit('submit-move')"
          class="px-12 py-4 bg-app-text text-void text-xs font-black uppercase tracking-[0.2em] rounded-xl hover:opacity-90 transition-all shadow-2xl active:scale-95"
        >
          Submit Move
        </button>
      </div>

      <div v-else-if="gameStatus === GameStatus.IN_PROGRESS" class="flex flex-col items-center">
        <span class="text-[10px] uppercase font-black tracking-[0.3em] text-app-text-muted opacity-20 mb-2">
          {{ isAITurn ? 'AI is thinking...' : isMyTurn ? 'Your Turn' : 'Opponent Turn' }}
        </span>
        <div class="flex items-center gap-6">
          <span :class="['text-4xl font-black', currentPlayer === 'X' ? 'marker-x' : 'marker-o']">
            {{ currentPlayer }}
          </span>
          <div class="h-8 w-[1px] bg-glass-border"></div>
          <span class="text-xl font-light mono text-app-text-muted opacity-40 italic flex items-center">
            <i v-if="isAITurn" class="pi pi-spin pi-spinner mr-3 text-purple-500"></i>
            {{ isAITurn ? 'Computing...' : 'Waiting...' }}
          </span>
        </div>
      </div>

      <div
        v-else-if="gameStatus === GameStatus.WAITING_FOR_OPPONENT"
        class="flex flex-col items-center"
      >
        <button
          v-if="!isPlayerInGame"
          @click="emit('join-match')"
          :disabled="joining"
          class="px-12 py-4 bg-indigo-600 text-white text-xs font-black uppercase tracking-[0.2em] rounded-xl hover:bg-indigo-500 transition-all shadow-2xl shadow-indigo-500/20 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <i v-if="joining" class="pi pi-spin pi-spinner mr-2"></i>
          Join Match
        </button>
        <div v-else class="flex flex-col items-center">
          <span class="text-[10px] uppercase font-black tracking-[0.3em] text-app-text-muted opacity-20 mb-2"
            >Match Status</span
          >
          <div class="flex items-center gap-6">
            <i class="pi pi-spin pi-spinner text-indigo-500"></i>
            <span class="text-xl font-light mono text-app-text-muted opacity-40 italic"
              >Waiting for opponent...</span
            >
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>
