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
  <div class="w-full h-full bg-void/50 grid grid-cols-3 grid-rows-3 gap-[3px] p-[3px]">
    <div v-for="(winner, i) in winners" :key="i" 
         class="flex items-center justify-center relative transition-all duration-500 rounded-sm"
         :class="[
           winner === 'X' ? 'bg-red-500/20 border border-red-500/20' : 
           winner === 'O' ? 'bg-blue-500/20 border border-blue-500/20' : 
           'bg-white/[0.05] border border-white/[0.05]'
         ]">
      <span v-if="winner === 'X'" class="text-xs font-black marker-x">X</span>
      <span v-else-if="winner === 'O'" class="text-xs font-black marker-o">O</span>
      <div v-else class="w-1 h-1 rounded-full bg-white/10"></div>
    </div>
  </div>
</template>
