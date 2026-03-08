<script setup lang="ts">
import { GameStatus } from '~/api/dto/GameStatus'
import type { Game } from '~/api/dto/Game'
import type { User } from '~/api/users'

defineProps<{
  game: Game | null
  xPlayer: User | null
  oPlayer: User | null
}>()

const emit = defineEmits<{
  (e: 'back'): void
}>()

const getStatusColor = (status: GameStatus) => {
  switch (status) {
    case GameStatus.IN_PROGRESS:
      return 'bg-green-500/10 text-green-500 border-green-500/20'
    case GameStatus.FINISHED:
      return 'bg-blue-500/10 text-blue-500 border-blue-500/20'
    case GameStatus.WAITING_FOR_OPPONENT:
      return 'bg-amber-500/10 text-amber-500 border-amber-500/20'
    case GameStatus.CANCELLED:
      return 'bg-red-500/10 text-red-500 border-red-500/20'
    default:
      return 'bg-slate-500/10 text-slate-500 border-slate-500/20'
  }
}

const formatStatus = (status: GameStatus) => {
  if (status === GameStatus.IN_PROGRESS) return 'LIVE MATCH'
  return status.replace(/_/g, ' ')
}
</script>

<template>
  <div class="flex items-center space-x-4">
    <button
      @click="emit('back')"
      class="p-2 rounded-lg hover:bg-glass-white text-app-text-muted hover:text-app-text transition-colors"
    >
      <i class="pi pi-arrow-left"></i>
    </button>
    <div v-if="game" class="flex flex-col">
      <div class="flex items-center gap-2">
        <span class="text-sm font-bold text-app-text flex items-center gap-1.5">
          <span class="marker-x text-xs">X</span>
          {{
            game.requestedOpponentId?.startsWith('AI_X')
              ? 'Tixo AI'
              : xPlayer?.name || (game.xPlayerId ? game.xPlayerId.substring(0, 10) : 'Pending')
          }}
          <span
            v-if="xPlayer?.rating && !game.requestedOpponentId?.startsWith('AI_X')"
            class="text-[10px] mono text-indigo-400 font-black"
            >({{ xPlayer.rating }})</span
          >
          <span class="mx-1 text-app-text-muted opacity-20 font-black text-[10px] uppercase">vs</span>
          <span class="marker-o text-xs">O</span>
          {{
            game.requestedOpponentId?.startsWith('AI_O')
              ? 'Tixo AI'
              : game.isOnDevice && !game.requestedOpponentId?.startsWith('AI_X')
                ? oPlayer?.name || 'Local Player'
                : oPlayer?.name || (game.oPlayerId ? game.oPlayerId.substring(0, 10) : 'Waiting...')
          }}
          <span
            v-if="oPlayer?.rating && !game.requestedOpponentId?.startsWith('AI_O')"
            class="text-[10px] mono text-indigo-400 font-black"
            >({{ oPlayer.rating }})</span
          >
        </span>
      </div>
      <div class="flex items-center mt-0.5 space-x-2">
        <span
          :class="getStatusColor(game.status)"
          class="text-[9px] px-1.5 py-0.5 rounded-md border font-black tracking-widest uppercase"
        >
          {{ formatStatus(game.status) }}
        </span>
        <span
          v-if="game.isOnDevice"
          class="bg-amber-500/10 text-amber-500 border-amber-500/20 text-[9px] px-1.5 py-0.5 rounded-md border font-black tracking-widest uppercase"
        >
          ON-DEVICE
        </span>
      </div>
    </div>
  </div>
</template>
