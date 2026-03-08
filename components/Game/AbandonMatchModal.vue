<script setup lang="ts">
import { GameStatus } from '~/api/dto/GameStatus'
import type { Game } from '~/api/dto/Game'

defineProps<{
  show: boolean
  game: Game | null
  abandoning: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'confirm'): void
}>()
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-95"
  >
    <div
      v-if="show"
      class="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-void/80 backdrop-blur-sm"
    >
      <div
        class="relative w-full max-w-sm glass border-glass-border rounded-3xl p-6 shadow-2xl"
      >
        <div class="flex flex-col items-center text-center space-y-4">
          <div
            class="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20"
          >
            <i class="pi pi-exclamation-triangle text-2xl"></i>
          </div>
          <div>
            <h3 class="text-xl font-bold text-app-text">
              {{ (game?.moveHistory || []).length < 2 ? 'Cancel Match?' : 'Abandon Match?' }}
            </h3>
            <p class="text-sm text-app-text-muted opacity-60 mt-1">
              {{
                (game?.moveHistory || []).length < 2 ||
                game?.status === GameStatus.WAITING_FOR_OPPONENT
                  ? 'This will cancel the match.'
                  : 'This will count as a loss. Are you sure?'
              }}
            </p>
          </div>
          <div class="grid grid-cols-2 gap-3 w-full pt-2">
            <button
              @click="emit('close')"
              :disabled="abandoning"
              class="py-3 rounded-xl bg-glass-white text-app-text-muted font-bold hover:bg-glass-white hover:text-app-text transition-all border border-glass-border"
            >
              No, stay
            </button>
            <button
              @click="emit('confirm')"
              :disabled="abandoning"
              class="py-3 rounded-xl bg-red-600 text-white font-bold hover:bg-red-500 transition-all flex items-center justify-center"
            >
              <i v-if="abandoning" class="pi pi-spin pi-spinner mr-2"></i>
              <span>{{ (game?.moveHistory || []).length < 2 ? 'Cancel' : 'Abandon' }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
