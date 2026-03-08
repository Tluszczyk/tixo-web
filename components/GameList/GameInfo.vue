<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import type { Game } from '~/api/dto/Game'
import { GameStatus } from '~/api/dto/GameStatus'
import { users, type User } from '~/api/users'

const props = defineProps<{
  game: Game
}>()

const xPlayer = ref<User | null>(null)
const oPlayer = ref<User | null>(null)

const fetchPlayers = async () => {
  if (props.game.xPlayerId) {
    xPlayer.value = await users.getUser(props.game.xPlayerId)
  }
  if (props.game.oPlayerId) {
    oPlayer.value = await users.getUser(props.game.oPlayerId)
  }
}

onMounted(fetchPlayers)
watch(() => props.game, fetchPlayers)

const formatTime = (dateStr: string) => {
  const date = new Date(dateStr)
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

const formatStatus = (status: GameStatus) => {
  return status.replace(/_/g, ' ')
}
</script>

<template>
  <div class="h-full flex flex-col justify-between py-0.5 sm:py-1">
    <div class="flex items-start justify-between gap-2">
      <div class="flex flex-col gap-0.5 sm:gap-1.5 min-w-0">
        <h3
          class="text-sm sm:text-lg font-black text-app-text uppercase tracking-tight group-hover:text-indigo-400 transition-colors leading-none truncate"
        >
          {{
            game.status === GameStatus.FINISHED
              ? 'Concluded'
              : game.status === GameStatus.CANCELLED
                ? 'Void'
                : game.status === GameStatus.WAITING_FOR_OPPONENT
                  ? 'Pending'
                  : 'Live Match'
          }}
        </h3>
        <p
          class="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.1em] sm:tracking-[0.2em] text-app-text-muted opacity-40 group-hover:text-app-text-muted opacity-60 transition-colors truncate"
        >
          {{ game.isOnDevice ? 'Local Network' : 'Global Server' }} //
          {{ formatStatus(game.status) }}
        </p>
      </div>

      <div
        v-if="game.isOnDevice"
        class="shrink-0 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-amber-500/40 bg-amber-500/10 text-[8px] sm:text-[9px] font-black tracking-widest text-amber-400 uppercase shadow-[0_0_10px_rgba(251,191,36,0.15)]"
      >
        Local
      </div>
      <div
        v-else-if="game.status === GameStatus.IN_PROGRESS"
        class="shrink-0 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-indigo-500/40 bg-indigo-500/10 text-[8px] sm:text-[9px] font-black tracking-widest text-indigo-400 uppercase shadow-[0_0_10px_rgba(129,140,248,0.15)]"
      >
        Live
      </div>
    </div>

    <div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-1.5 sm:py-3 min-w-0">
      <div class="flex items-center gap-2 sm:gap-3 min-w-0">
        <div
          class="w-6 h-6 sm:w-8 sm:h-8 shrink-0 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center"
        >
          <span class="text-xs sm:text-sm font-black marker-x">X</span>
        </div>
        <div class="flex flex-col min-w-0">
          <div class="flex items-center gap-1.5 sm:gap-2 mb-0.5">
            <span
              class="text-[8px] sm:text-[9px] font-bold text-app-text-muted opacity-30 uppercase tracking-widest leading-none"
              >P X</span
            >
            <span
              v-if="xPlayer?.rating"
              class="text-[8px] sm:text-[9px] font-black text-indigo-400 mono px-1 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 leading-none"
              >{{ xPlayer.rating }}</span
            >
          </div>
          <span
            class="text-[10px] sm:text-xs mono text-app-text-muted opacity-70 font-bold truncate max-w-[80px] sm:max-w-[100px]"
            >{{ xPlayer?.name || (game.xPlayerId ? game.xPlayerId.substring(0, 12) : '...') }}</span
          >
        </div>
      </div>

      <div class="hidden sm:block text-app-text-muted opacity-20 text-xs mono font-black">VS</div>

      <div class="flex items-center gap-2 sm:gap-3 min-w-0">
        <div
          class="w-6 h-6 sm:w-8 sm:h-8 shrink-0 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center"
        >
          <span class="text-xs sm:text-sm font-black marker-o">O</span>
        </div>
        <div class="flex flex-col min-w-0">
          <div class="flex items-center gap-1.5 sm:gap-2 mb-0.5">
            <span
              class="text-[8px] sm:text-[9px] font-bold text-app-text-muted opacity-30 uppercase tracking-widest leading-none"
              >P O</span
            >
            <span
              v-if="oPlayer?.rating"
              class="text-[8px] sm:text-[9px] font-black text-indigo-400 mono px-1 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 leading-none"
              >{{ oPlayer.rating }}</span
            >
          </div>
          <span
            class="text-[10px] sm:text-xs mono text-app-text-muted opacity-70 font-bold truncate max-w-[80px] sm:max-w-[100px]"
            >{{ oPlayer?.name || (game.oPlayerId ? game.oPlayerId.substring(0, 12) : '...') }}</span
          >
        </div>
      </div>
    </div>

    <div
      class="flex items-center justify-between mt-auto pt-2 sm:pt-3 border-t border-glass-border gap-2"
    >
      <div class="flex items-center gap-1.5 sm:gap-2 min-w-0">
        <i class="pi pi-clock text-[9px] sm:text-[10px] text-app-text-muted opacity-30 shrink-0"></i>
        <span class="text-[8px] sm:text-[10px] mono text-app-text-muted opacity-40 uppercase font-black truncate">
          {{ formatTime(game.$createdAt) }}
        </span>
      </div>

      <button
        class="shrink-0 px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-glass-white border border-glass-border text-[8px] sm:text-[10px] font-black uppercase tracking-[0.1em] sm:tracking-[0.2em] text-app-text-muted opacity-60 group-hover:bg-indigo-500 group-hover:text-white group-hover:border-indigo-400 group-hover:opacity-100 transition-all flex items-center gap-1.5 sm:gap-2"
      >
        <span>{{ game.status === GameStatus.IN_PROGRESS ? 'Engage' : 'Inspect' }}</span>
        <i
          class="pi pi-arrow-right text-[8px] sm:text-[10px] transition-transform group-hover:translate-x-1"
        ></i>
      </button>
    </div>
  </div>
</template>
