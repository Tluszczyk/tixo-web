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
  <div @click="openGame" class="group flex flex-row h-36 w-full glass border-white/[0.05] rounded-3xl hover:border-indigo-500/30 hover:bg-white/[0.05] transition-all duration-500 cursor-pointer overflow-hidden p-3 gap-3">
    <div class="h-full aspect-square shrink-0 rounded-2xl overflow-hidden glass border-white/[0.02]">
      <GameThumbnail :board="game.board" :tile-winners="game.tileWinners" />
    </div>

    <div class="h-full grow min-w-0">
      <GameInfo :game="game" />
    </div>
  </div>
</template>
