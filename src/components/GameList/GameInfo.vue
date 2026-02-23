<script setup lang="ts">
import type { Game } from '@/api/dto/Game'
import { GameStatus } from '@/api/dto/GameStatus'

defineProps<{
  game: Game
}>()

const formatTime = (dateStr: string) => {
  const date = new Date(dateStr)
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

const formatStatus = (status: GameStatus) => {
  return status.replace(/_/g, ' ')
}
</script>

<template>
  <div class="h-full flex flex-col justify-between p-4 bg-slate-800/20 group-hover:bg-slate-800/40 transition-colors">
    <div class="flex items-start justify-between">
      <div class="flex flex-col">
        <h3 class="text-base font-semibold text-slate-100 group-hover:text-blue-400 transition-colors">
          {{ game.status === GameStatus.FINISHED ? 'Game Over' : game.status === GameStatus.WAITING_FOR_OPPONENT ? 'Waiting' : 'Live Match' }}
        </h3>
        <p class="text-xs text-slate-500 font-medium">Standard • {{ formatStatus(game.status) }}</p>
      </div>

      <div v-if="game.status === GameStatus.IN_PROGRESS" class="px-2 py-1 rounded bg-blue-900/40 border border-blue-500/30 text-[10px] font-bold tracking-wider text-blue-400 uppercase">
        Live
      </div>
      <div v-else class="px-2 py-1 rounded bg-slate-900 border border-slate-700 text-[10px] font-bold tracking-wider text-slate-400 uppercase">
        {{ formatStatus(game.status) }}
      </div>
    </div>

    <div class="flex items-center space-x-6 mt-2">
      <div class="flex items-center space-x-2">
        <div class="w-6 h-6 rounded-full bg-red-600/20 flex items-center justify-center text-[10px] font-bold text-red-400 border border-red-500/20">X</div>
        <span class="text-sm text-slate-300 truncate max-w-[80px]">{{ game.xPlayerId ? game.xPlayerId.substring(0, 8) : 'Pending' }}</span>
      </div>

      <div class="text-slate-600 text-xs">vs</div>

      <div class="flex items-center space-x-2">
        <div class="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center text-[10px] font-bold text-blue-400 border border-blue-500/20">O</div>
        <span class="text-sm text-slate-300 font-medium truncate max-w-[80px]">{{ game.oPlayerId ? game.oPlayerId.substring(0, 8) : 'Waiting...' }}</span>
      </div>
    </div>

    <div class="flex items-center justify-between mt-auto pt-2 border-t border-slate-700/30">
        <div class="flex items-center space-x-1">
           <i class="pi pi-clock text-[10px] text-slate-500"></i>
           <span class="text-[10px] text-slate-500 font-medium tracking-tight">
             {{ formatTime(game.$createdAt) }}
           </span>
        </div>

        <button class="text-xs font-semibold text-blue-500 hover:text-blue-400 flex items-center space-x-1 group/btn">
           <span>{{ game.status === GameStatus.IN_PROGRESS ? 'Watch' : game.status === GameStatus.WAITING_FOR_OPPONENT ? 'Join' : 'View' }}</span>
           <i class="pi pi-chevron-right text-[8px] transform group-hover/btn:translate-x-0.5 transition-transform"></i>
        </button>
    </div>
  </div>
</template>
