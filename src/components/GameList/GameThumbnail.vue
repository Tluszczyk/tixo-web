<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  board: string
  tileWinners: string
}>()

const winners = computed(() => {
  let tw = props.tileWinners || '.........'
  return tw.split('')
})
</script>

<template>
  <div class="w-full h-full bg-void grid grid-cols-3 grid-rows-3 gap-[2px] p-[2px]">
    <div v-for="(winner, i) in winners" :key="i" 
         class="flex items-center justify-center relative transition-all duration-500"
         :class="[
           winner === 'X' ? 'bg-red-500/10' : 
           winner === 'O' ? 'bg-blue-500/10' : 
           'bg-white/[0.02]'
         ]">
      <span v-if="winner === 'X'" class="text-[10px] font-black marker-x opacity-60">X</span>
      <span v-else-if="winner === 'O'" class="text-[10px] font-black marker-o opacity-60">O</span>
      <div v-else class="w-0.5 h-0.5 rounded-full bg-white/5"></div>
    </div>
  </div>
</template>
