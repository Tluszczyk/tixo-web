<script setup lang="ts">
import BaseButton from '~/components/Common/BaseButton.vue'
import { GameStatus } from '~/api/dto/GameStatus'

defineProps<{
  gameStatus: GameStatus
  isPlayerInGame: boolean
  isMyTurn: boolean
  isAITurn: boolean
  currentPlayer: string
  selectedCell: number | null
  selectedHistoryIndex: number | null
  joining: boolean
  abandoning: boolean
  moveHistoryCount: number
}>()

const emit = defineEmits<{
  (e: 'clear-history'): void
  (e: 'clear-selection'): void
  (e: 'submit-move'): void
  (e: 'join-match'): void
  (e: 'abandon-match'): void
}>()
</script>

<template>
  <div class="flex flex-col items-center gap-6 w-full">
    <div class="flex items-center justify-center h-24 w-full relative">
      <Transition
        mode="out-in"
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform translate-y-2 opacity-0"
        enter-to-class="transform translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform translate-y-0 opacity-100"
        leave-to-class="transform -translate-y-2 opacity-0"
      >
        <div v-if="selectedHistoryIndex !== null" class="flex flex-col items-center">
          <span class="text-[10px] uppercase font-black tracking-[0.3em] text-app-text-muted opacity-60 mb-2"
            >History View</span
          >
          <div class="flex items-center gap-6">
            <span class="text-2xl font-black text-app-text">Move {{ selectedHistoryIndex + 1 }}</span>
            <div class="h-8 w-[1px] bg-glass-border"></div>
            <BaseButton
              @click="emit('clear-history')"
              variant="ghost"
              size="sm"
              class="lg:hidden text-app-text-muted opacity-40 hover:opacity-100"
            >
              Return to Live
            </BaseButton>
          </div>
        </div>

        <div v-else-if="selectedCell !== null" class="flex items-center gap-6">
          <BaseButton
            @click="emit('clear-selection')"
            variant="ghost"
            size="sm"
            class="lg:hidden text-app-text-muted opacity-40 hover:opacity-100"
          >
            Cancel
          </BaseButton>
          <BaseButton
            @click="emit('submit-move')"
            variant="primary"
            size="lg"
            class="lg:hidden px-12"
          >
            Submit Move
          </BaseButton>
        </div>

        <div v-else-if="gameStatus === GameStatus.IN_PROGRESS" class="flex items-center gap-12">
          <div class="flex flex-col items-center">
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
        </div>

        <div
          v-else-if="gameStatus === GameStatus.WAITING_FOR_OPPONENT"
          class="flex flex-col items-center"
        >
          <BaseButton
            v-if="!isPlayerInGame"
            @click="emit('join-match')"
            :disabled="joining"
            :loading="joining"
            variant="primary"
            size="lg"
            class="px-12"
          >
            Join Match
          </BaseButton>
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

    <!-- Mobile Abandon/Cancel Action -->
    <div 
      v-if="isPlayerInGame && (gameStatus === GameStatus.IN_PROGRESS || gameStatus === GameStatus.WAITING_FOR_OPPONENT) && selectedHistoryIndex === null"
      class="lg:hidden flex justify-center w-full"
    >
      <BaseButton
        @click="emit('abandon-match')"
        :disabled="abandoning"
        variant="ghost"
        size="sm"
        class="text-red-500/60 hover:text-red-500"
        icon-left="pi pi-flag-fill"
      >
        {{ moveHistoryCount < 2 ? 'Cancel Operation' : 'Request Resignation' }}
      </BaseButton>
    </div>
  </div>
</template>
