<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  board: string
  tileWinners: string
}>()

const deserializedBoard = computed(() => {
  let b = props.board || '.'.repeat(81)
  if (b.length < 81) b = b.padEnd(81, '.')

  const tiles = []
  for (let ty = 0; ty < 3; ty++) {
    for (let tx = 0; tx < 3; tx++) {
      const tile = []
      for (let cy = 0; cy < 3; cy++) {
        for (let cx = 0; cx < 3; cx++) {
          const x = tx * 3 + cx
          const y = ty * 3 + cy
          tile.push(b[y * 9 + x])
        }
      }
      tiles.push(tile)
    }
  }
  return tiles
})

const deserializedTileWinners = computed(() => {
  let tw = props.tileWinners || '.'.repeat(9)
  if (tw.length < 9) tw = tw.padEnd(9, '.')
  return tw.split('')
})
</script>

<template>
  <div class="w-full h-full bg-void/50 grid grid-cols-3 grid-rows-3 gap-[2px] p-[2px]">
    <div
      v-for="(tile, i) in deserializedBoard"
      :key="i"
      class="grid grid-cols-3 grid-rows-3 gap-[1px] p-[1px] relative rounded-sm transition-all duration-500 overflow-hidden"
      :class="[
        deserializedTileWinners[i] === 'X'
          ? 'bg-red-500/10'
          : deserializedTileWinners[i] === 'O'
            ? 'bg-blue-500/10'
            : 'bg-white/[0.02]',
      ]"
    >
      <div
        v-for="(cell, j) in tile"
        :key="j"
        class="flex items-center justify-center aspect-square rounded-[1px]"
      >
        <div
          v-if="cell === 'X'"
          class="w-full h-full flex items-center justify-center text-[6px] font-black marker-x opacity-90"
        >
          X
        </div>
        <div
          v-else-if="cell === 'O'"
          class="w-full h-full flex items-center justify-center text-[6px] font-black marker-o opacity-90"
        >
          O
        </div>
        <div v-else class="w-[1px] h-[1px] rounded-full bg-white/10"></div>
      </div>

      <!-- Tile Winner Overlay (Subtle) -->
      <div
        v-if="deserializedTileWinners[i] !== '.'"
        class="absolute inset-0 pointer-events-none flex items-center justify-center"
      >
        <div
          class="w-full h-full border"
          :class="[
            deserializedTileWinners[i] === 'X'
              ? 'border-red-500/30 bg-red-500/5'
              : deserializedTileWinners[i] === 'O'
                ? 'border-blue-500/30 bg-blue-500/5'
                : 'border-white/20 bg-white/5',
          ]"
        ></div>
      </div>
    </div>
  </div>
</template>
