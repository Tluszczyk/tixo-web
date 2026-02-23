<script setup lang="ts">
import { useRouter } from 'vue-router'
import GameThumbnail from '@/components/GameList/GameThumbnail.vue'
import GameInfo from '@/components/GameList/GameInfo.vue'
import type { Game } from '@/api/dto/Game'

const props = defineProps<{
  game: Game
}>()

const router = useRouter()

const openGame = () => {
  router.push(`/game/${props.game.$id}`)
}
</script>

<template>
  <div @click="openGame" class="group flex flex-row h-32 w-full bg-slate-900/40 rounded-xl border border-slate-800 hover:border-blue-500/30 hover:bg-slate-900/60 transition-all duration-300 shadow-sm cursor-pointer overflow-hidden p-2">
    <div class="h-full aspect-square shrink-0">
      <GameThumbnail :board="game.board" :tile-winners="game.tileWinners" />
    </div>

    <div class="h-full grow min-w-0">
      <GameInfo :game="game" />
    </div>
  </div>
</template>
