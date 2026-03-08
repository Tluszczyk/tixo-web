<script setup lang="ts">
import { GameStatus } from '~/api/dto/GameStatus'
import type { User } from '~/api/users'
import type { Game } from '~/api/dto/Game'

defineProps<{
  game: Game | null
  xPlayer: User | null
  oPlayer: User | null
  isPlayerInGame: boolean
  isMyTurn: boolean
  isAITurn: boolean
  currentPlayer: string
  selectedCell: number | null
  selectedHistoryIndex: number | null
  joining: boolean
  abandoning: boolean
}>()

const emit = defineEmits<{
  (e: 'clear-history'): void
  (e: 'clear-selection'): void
  (e: 'submit-move'): void
  (e: 'join-match'): void
  (e: 'abandon-click'): void
}>()
</script>

<template>
  <div class="w-full h-full flex flex-col gap-4 animate-in fade-in slide-in-from-right-8 duration-1000">
    <!-- Header / Status Card -->
    <div class="glass p-5 rounded-[1.5rem] border-glass-border space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex flex-col">
          <span class="text-[8px] font-black uppercase tracking-[0.3em] text-app-text-muted opacity-40">Operational Status</span>
          <h3 class="text-base font-black text-app-text uppercase italic tracking-tight">
            {{ 
              game?.status === GameStatus.IN_PROGRESS 
                ? (isAITurn ? 'AI Computing' : (isMyTurn ? 'Your Turn' : 'Opponent Turn'))
                : (game?.status === GameStatus.WAITING_FOR_OPPONENT ? 'Awaiting Host' : 'Session Terminated')
            }}
          </h3>
        </div>
        <div class="w-10 h-10 rounded-xl glass flex items-center justify-center border-indigo-500/20 text-indigo-500 shadow-xl">
          <i v-if="isAITurn || game?.status === GameStatus.WAITING_FOR_OPPONENT" class="pi pi-spin pi-spinner text-sm"></i>
          <i v-else-if="isMyTurn" class="pi pi-bolt text-sm"></i>
          <i v-else class="pi pi-hourglass text-sm"></i>
        </div>
      </div>

      <!-- Turn Indicator -->
      <div v-if="game?.status === GameStatus.IN_PROGRESS" class="flex items-center gap-4 p-3 bg-void/50 rounded-xl border border-glass-border/50">
        <div :class="['text-3xl font-black w-12 h-12 flex items-center justify-center rounded-lg bg-app-text/5', currentPlayer === 'X' ? 'marker-x' : 'marker-o']">
          {{ currentPlayer }}
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-[8px] font-black uppercase tracking-widest text-app-text-muted opacity-40 mb-0.5">Current Operator</p>
          <p class="text-xs font-bold text-app-text truncate">
            {{ currentPlayer === 'X' ? (xPlayer?.name || 'X Player') : (oPlayer?.name || 'O Player') }}
          </p>
        </div>
      </div>
    </div>

    <!-- Actions Area -->
    <div class="flex-1 flex flex-col gap-4">
      <!-- Primary Action: Submit Move -->
      <Transition
        enter-active-class="transition duration-500 ease-out"
        enter-from-class="transform translate-y-4 opacity-0 scale-95"
        enter-to-class="transform translate-y-0 opacity-100 scale-100"
        leave-active-class="transition duration-300 ease-in"
        leave-from-class="transform translate-y-0 opacity-100 scale-100"
        leave-to-class="transform translate-y-4 opacity-0 scale-95"
      >
        <div v-if="selectedCell !== null && isMyTurn" class="glass p-5 rounded-[1.5rem] border-indigo-500/30 bg-indigo-500/[0.02] flex flex-col gap-4">
          <div class="text-center">
            <p class="text-[9px] font-black uppercase tracking-[0.3em] text-indigo-400 mb-1">Tactical Confirmation</p>
            <p class="text-app-text-muted text-[10px] font-medium leading-tight">Execute maneuver at selected coordinates.</p>
          </div>
          
          <div class="flex flex-col gap-2">
            <button
              @click="emit('submit-move')"
              class="w-full py-3.5 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-indigo-500 transition-all shadow-2xl shadow-indigo-500/20 active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <i class="pi pi-check-circle"></i>
              Confirm Move
            </button>
            <button
              @click="emit('clear-selection')"
              class="w-full py-3 glass border-glass-border text-app-text-muted text-[9px] font-black uppercase tracking-widest rounded-lg hover:bg-glass-white transition-all active:scale-[0.98]"
            >
              Abort
            </button>
          </div>
        </div>

        <div v-else-if="selectedHistoryIndex !== null" class="glass p-6 rounded-[1.5rem] border-amber-500/20 bg-amber-500/[0.02] flex flex-col gap-4 text-center">
          <div class="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center mx-auto">
            <i class="pi pi-history"></i>
          </div>
          <div class="space-y-1">
            <p class="text-[9px] font-black uppercase tracking-[0.3em] text-amber-500">History Mode</p>
            <p class="text-lg font-black text-app-text italic">Move {{ selectedHistoryIndex + 1 }}</p>
          </div>
          <button
            @click="emit('clear-history')"
            class="w-full py-3 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[9px] font-black uppercase tracking-widest rounded-lg hover:bg-amber-500/20 transition-all"
          >
            Return to Active
          </button>
        </div>

        <div v-else-if="game?.status === GameStatus.WAITING_FOR_OPPONENT && !isPlayerInGame" class="glass p-6 rounded-[1.5rem] border-indigo-500/20 flex flex-col gap-4 text-center">
          <div class="w-12 h-12 rounded-xl glass border-indigo-500/10 flex items-center justify-center text-indigo-500/40 mx-auto">
            <i class="pi pi-plus text-xl"></i>
          </div>
          <div class="space-y-1">
            <h4 class="text-base font-black text-app-text uppercase italic">Join Operation</h4>
            <p class="text-[8px] font-black uppercase tracking-widest text-app-text-muted opacity-40">Authorize to engage</p>
          </div>
          <button
            @click="emit('join-match')"
            :disabled="joining"
            class="w-full py-4 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-indigo-500 transition-all shadow-2xl active:scale-95 disabled:opacity-50"
          >
            <i v-if="joining" class="pi pi-spin pi-spinner mr-2"></i>
            Authorize
          </button>
        </div>
      </Transition>

      <!-- Secondary Actions: Abandon/Cancel -->
      <div v-if="isPlayerInGame && (game?.status === GameStatus.IN_PROGRESS || game?.status === GameStatus.WAITING_FOR_OPPONENT)" class="mt-2">
        <div class="glass p-4 rounded-2xl border-glass-border flex items-center justify-between group hover:border-red-500/30 transition-all duration-500">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-lg bg-red-500/5 border border-red-500/10 flex items-center justify-center text-red-500/40 group-hover:bg-red-500/10 group-hover:text-red-500 transition-all">
              <i class="pi pi-flag text-[10px]"></i>
            </div>
            <div>
              <p class="text-[8px] font-black uppercase tracking-[0.2em] text-app-text-muted opacity-40 leading-none mb-1">Termination</p>
              <p class="text-[9px] font-bold text-app-text group-hover:text-red-400 transition-colors leading-none">Resignation</p>
            </div>
          </div>
          <button
            @click="emit('abandon-click')"
            :disabled="abandoning"
            class="px-3 py-1.5 text-[8px] font-black uppercase tracking-widest text-red-400/60 hover:text-red-400 transition-all"
          >
            {{ (game?.moveHistory || []).length < 2 ? 'Cancel' : 'Abandon' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
