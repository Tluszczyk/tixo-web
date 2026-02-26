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
  <div class="h-full flex flex-col justify-between p-2">
    <div class="flex items-start justify-between">
      <div class="flex flex-col gap-1">
        <h3 class="text-sm font-black text-white uppercase tracking-tighter group-hover:text-indigo-400 transition-colors">
          {{ game.status === GameStatus.FINISHED ? 'Concluded' : game.status === GameStatus.CANCELLED ? 'Void' : game.status === GameStatus.WAITING_FOR_OPPONENT ? 'Pending' : 'Live Match' }}
        </h3>
        <p class="text-[9px] font-black uppercase tracking-[0.2em] text-white/20">
            {{ game.isOnDevice ? 'Local' : 'Network' }} // {{ formatStatus(game.status) }}
        </p>
      </div>

      <div v-if="game.isOnDevice" class="px-2 py-0.5 rounded-full border border-amber-500/20 bg-amber-500/5 text-[8px] font-black tracking-widest text-amber-500 uppercase">
        Local
      </div>
      <div v-else-if="game.status === GameStatus.IN_PROGRESS" class="px-2 py-0.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-[8px] font-black tracking-widest text-indigo-500 uppercase">
        Live
      </div>
    </div>

    <div class="flex items-center gap-4 py-2">
      <div class="flex items-center gap-2">
        <span class="text-[10px] font-black marker-x opacity-60">X</span>
        <span class="text-[10px] mono text-white/40 truncate max-w-[60px]">{{ game.xPlayerId ? game.xPlayerId.substring(0, 6) : '...' }}</span>
      </div>

      <div class="text-white/10 text-[10px] mono">vs</div>

      <div class="flex items-center gap-2">
        <span class="text-[10px] font-black marker-o opacity-60">O</span>
        <span class="text-[10px] mono text-white/40 truncate max-w-[60px]">{{ game.oPlayerId ? game.oPlayerId.substring(0, 6) : '...' }}</span>
      </div>
    </div>

    <div class="flex items-center justify-between mt-auto pt-2 border-t border-white/[0.03]">
        <div class="flex items-center gap-2">
           <span class="text-[9px] mono text-white/20 uppercase font-bold">
             {{ formatTime(game.$createdAt) }}
           </span>
        </div>

        <button class="text-[9px] font-black uppercase tracking-[0.2em] text-indigo-500 group-hover:text-white transition-colors flex items-center gap-1">
           <span>{{ game.status === GameStatus.IN_PROGRESS ? 'Engage' : 'View' }}</span>
           <i class="pi pi-arrow-right text-[8px] transition-transform group-hover:translate-x-0.5"></i>
        </button>
    </div>
  </div>
</template>
