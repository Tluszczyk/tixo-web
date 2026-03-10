<script setup lang="ts">
import BoardCell from './BoardCell.vue'

defineProps<{
  tileIndex: number
  tileArr: string[]
  size: 'sm' | 'md' | 'lg'
  isSelected: (cellIndex: number) => boolean
  isHighlighted: (cellIndex: number) => boolean
  isRecommended: (cellIndex: number) => boolean
  isAvailable: (cellIndex: number) => boolean
  isTargetHighlight: boolean
  isTileActive: boolean
  tileWinner: string
  readonly: boolean
  getAbsoluteIndex: (tileIndex: number, cellIndex: number) => number
}>()

const emit = defineEmits<{
  (e: 'cell-click', absoluteIndex: number): void
  (e: 'cell-mouseenter', tileIndex: number, cellIndex: number): void
  (e: 'cell-mouseleave'): void
}>()
</script>

<template>
  <div
    class="small-board transition-all duration-200 rounded-lg lg:rounded-2xl relative overflow-hidden aspect-square grid grid-cols-3 grid-rows-3 gap-0.5 lg:gap-1 p-0.5 lg:p-1.5"
    :class="[
      isTargetHighlight
        ? 'target-highlight ring-4 ring-yellow-400/80 z-30'
        : isTileActive
          ? 'active ring-2 ring-indigo-500/50'
          : 'opacity-80',
      tileWinner === 'X'
        ? 'won-x'
        : tileWinner === 'O'
          ? 'won-o'
          : (tileWinner === 'D' || tileWinner === 'TIE')
            ? 'won-draw'
            : 'glass',
    ]"
  >
    <BoardCell
      v-for="(cell, j) in tileArr"
      :key="j"
      :cell="cell"
      :cell-index="j"
      :tile-index="tileIndex"
      :absolute-index="getAbsoluteIndex(tileIndex, j)"
      :size="size"
      :is-selected="isSelected(j)"
      :is-highlighted="isHighlighted(j)"
      :is-recommended="isRecommended(j)"
      :is-available="isAvailable(j)"
      :readonly="readonly"
      @click="emit('cell-click', $event)"
      @mouseenter="emit('cell-mouseenter', tileIndex, j)"
      @mouseleave="emit('cell-mouseleave')"
    />
  </div>
</template>

<style scoped>
.small-board {
  background: var(--tile-bg);
  border: 1px solid var(--tile-border);
  /* border-radius: 1rem; */
}
.small-board.active {
  background: rgba(99, 102, 241, 0.05);
  border-color: rgba(99, 102, 241, 0.4);
  box-shadow: 0 10px 30px -5px var(--shadow-color);
  z-index: 20;
}
.small-board.won-x {
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.3);
}
.small-board.won-o {
  background: rgba(59, 130, 246, 0.1);
  border-color: rgba(59, 130, 246, 0.3);
}
.small-board.won-draw {
  background: var(--tile-bg);
  border-color: var(--tile-border);
}

.target-highlight {
  box-shadow:
    0 0 30px rgba(250, 204, 21, 0.4),
    inset 0 0 20px rgba(250, 204, 21, 0.2) !important;
  border-color: rgba(250, 204, 21, 0.8) !important;
  background: rgba(250, 204, 21, 0.08) !important;
  z-index: 40 !important;
}
</style>
