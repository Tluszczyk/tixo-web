<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  board?: string
  tileWinners?: string
  size?: 'sm' | 'md' | 'lg'
  selectedCell?: number | null
  currentPlayer?: 'X' | 'O'
  readonly?: boolean
}>()

const emit = defineEmits<{
  (e: 'cell-click', index: number): void
}>()

const deserializedBoard = computed(() => {
  let b = props.board || '.'.repeat(81)
  if (b.length < 81) b = b.padEnd(81, '.')
  
  const result = []
  for (let i = 0; i < 9; i++) {
    result.push(b.substring(i * 9, (i + 1) * 9).split(''))
  }
  return result
})

const deserializedTileWinners = computed(() => {
  let tw = props.tileWinners || '.'.repeat(9)
  if (tw.length < 9) tw = tw.padEnd(9, '.')
  return tw.split('')
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm': return 'max-w-[120px] p-1 gap-1'
    case 'md': return 'max-w-[400px] p-2 gap-2'
    default: return 'max-w-[600px] p-4 gap-3'
  }
})

const cellClasses = computed(() => {
  switch (props.size) {
    case 'sm': return 'text-[10px] p-0.5'
    case 'md': return 'text-2xl p-1'
    default: return 'text-4xl p-2'
  }
})

const winnerOverlayClasses = computed(() => {
  switch (props.size) {
    case 'sm': return 'text-3xl'
    case 'md': return 'text-6xl'
    default: return 'text-9xl'
  }
})

const onCellClick = (tileIndex: number, cellIndex: number) => {
  if (props.readonly) return
  const absoluteIndex = tileIndex * 9 + cellIndex
  emit('cell-click', absoluteIndex)
}
</script>

<template>
  <div :class="['aspect-square w-full bg-slate-800 rounded-2xl shadow-2xl border border-slate-700/50 relative overflow-hidden group', sizeClasses]">
    <!-- Board Glow -->
    <div class="absolute -inset-10 bg-blue-500/5 blur-3xl rounded-full group-hover:bg-blue-500/10 transition-colors duration-1000"></div>

    <div class="grid grid-cols-3 grid-rows-3 w-full h-full relative z-10" :class="size === 'sm' ? 'gap-0.5' : (size === 'md' ? 'gap-1' : 'gap-3')">
      <div v-for="(tileArr, i) in deserializedBoard" :key="i" 
           class="relative bg-slate-900/50 rounded-xl border-2 transition-all duration-300 overflow-hidden"
           :class="[
             deserializedTileWinners[i] === 'X' ? 'border-red-500/40 bg-red-500/5' : 
             deserializedTileWinners[i] === 'O' ? 'border-blue-500/40 bg-blue-500/5' : 
             'border-slate-800/80 hover:border-slate-700',
             size === 'sm' ? 'border-1' : 'border-2'
           ]">
        
        <!-- Individual 3x3 Grid -->
        <div class="grid grid-cols-3 grid-rows-3 gap-1 w-full h-full opacity-100 transition-opacity duration-500"
             :class="[
               {'opacity-20': deserializedTileWinners[i] !== '.'},
               size === 'sm' ? 'p-0.5 gap-0.5' : (size === 'md' ? 'p-1 gap-1' : 'p-2 gap-1.5')
             ]">
          <div v-for="(cell, j) in tileArr" :key="j" 
               @click="onCellClick(i, j)"
               class="flex items-center justify-center rounded-md bg-slate-800/30 font-black transition-all hover:bg-slate-700/50 cursor-pointer"
               :class="[
                 cellClasses,
                 { 'bg-yellow-500/20 ring-2 ring-yellow-500/50 ring-inset scale-95': selectedCell === (i * 9 + j) }
               ]">
            <span v-if="cell === 'X'" class="text-red-500 drop-shadow-sm">X</span>
            <span v-else-if="cell === 'O'" class="text-blue-500 drop-shadow-sm">O</span>
          </div>
        </div>

        <!-- Tile Winner Overlay -->
        <div v-if="deserializedTileWinners[i] !== '.'" class="absolute inset-0 flex items-center justify-center font-black drop-shadow-2xl animate-in zoom-in duration-500 pointer-events-none"
             :class="winnerOverlayClasses">
           <span v-if="deserializedTileWinners[i] === 'X'" class="text-red-500 drop-shadow-[0_0_20px_rgba(239,68,68,0.6)]">X</span>
           <span v-if="deserializedTileWinners[i] === 'O'" class="text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]">O</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
