<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import GameThumbnail from '@/components/GameList/GameThumbnail.vue'
import GameInfo from '@/components/GameList/GameInfo.vue'
import type { Game } from '@/api/dto/Game'
import type { Models } from 'appwrite'
import { GameStatus } from '@/api/dto/GameStatus'

const props = defineProps<{
  game: Game
  currentUser: Models.User<Models.Preferences> | null
}>()

const router = useRouter()

const isMyTurn = computed(() => {
  if (!props.game || !props.currentUser || props.game.status !== GameStatus.IN_PROGRESS)
    return false
  
  // For on-device games, the creator is always the active player if it's in progress
  if (props.game.isOnDevice) return props.game.creatorId === props.currentUser.$id
  
  // For regular games, check nextPlayerId
  return props.game.nextPlayerId === props.currentUser.$id
})

const openGame = () => {
  router.push(`/game/${props.game.$id}`)
}
</script>

<template>
  <div @click="openGame" 
       :class="[
         'group flex flex-row h-48 w-full glass rounded-3xl transition-all duration-500 cursor-pointer overflow-hidden p-4 gap-6 hover:shadow-2xl active:scale-[0.98]',
         isMyTurn 
           ? 'border-yellow-500/50 bg-yellow-500/[0.05] hover:border-yellow-500/80 hover:bg-yellow-500/[0.1] hover:shadow-yellow-500/10' 
           : 'border-white/[0.1] hover:border-indigo-500/50 hover:bg-white/[0.08] hover:shadow-indigo-500/10'
       ]">
    <div class="h-full aspect-square shrink-0 rounded-2xl overflow-hidden glass border-white/[0.05] shadow-inner p-1">
      <GameThumbnail :board="game.board" :tile-winners="game.tileWinners" />
    </div>

    <div class="h-full grow min-w-0">
      <GameInfo :game="game" />
    </div>
  </div>
</template>
