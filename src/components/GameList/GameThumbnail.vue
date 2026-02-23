<script setup lang="ts">
import Board from '@/components/Board.vue'

defineProps<{
  board?: string
  tileWinners?: string
}>()
</script>

<template>
  <div class="h-full aspect-square bg-slate-800 rounded-lg overflow-hidden border border-slate-700/50 shadow-inner group-hover:border-blue-500/30 transition-colors relative">
    <Board :board="board" :tile-winners="tileWinners" size="sm" readonly class="border-none bg-transparent shadow-none" />
  </div>
</template>
