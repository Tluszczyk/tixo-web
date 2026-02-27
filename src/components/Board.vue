<script setup lang="ts">
import { computed, ref } from "vue"

const props = defineProps<{
  board?: string
  tileWinners?: string
  size?: "sm" | "md" | "lg"
  selectedCell?: number | null
  currentPlayer?: "X" | "O"
  readonly?: boolean
  availableMoves?: string
}>()

const emit = defineEmits<{
  (e: "cell-click", index: number): void
}>()

const hoveredX = ref<number | null>(null)
const hoveredY = ref<number | null>(null)

const handleCellMouseEnter = (tileIndex: number, cellIndex: number) => {
  const absIdx = getAbsoluteIndex(tileIndex, cellIndex)
  hoveredX.value = absIdx % 9
  hoveredY.value = Math.floor(absIdx / 9)
}

const handleCellMouseLeave = () => {
  hoveredX.value = null
  hoveredY.value = null
}

const containerSizeClasses = computed(() => {
  switch (props.size) {
    case "sm": return "max-w-[180px]"
    case "md": return "max-w-[500px]"
    default: return "max-w-[min(90vw,75vh)] w-full"
  }
})

const targetTileIndex = computed(() => {
  if (props.selectedCell === null || props.selectedCell === undefined) return null
  const x = props.selectedCell % 9
  const y = Math.floor(props.selectedCell / 9)
  const cx = x % 3
  const cy = y % 3
  return cy * 3 + cx
})

const isTileActive = (tileIndex: number) => {
  if (props.readonly) return true 
  if (!props.availableMoves) return true
  
  const tx = (tileIndex % 3) * 3
  const ty = Math.floor(tileIndex / 3) * 3
  const tileCoord = `${String.fromCharCode(65 + tx)}${ty + 1}`
  
  if (props.availableMoves.startsWith("AVAILABLE_IN_TILE:")) {
    return props.availableMoves.includes(tileCoord)
  }
  return true
}

const isCellAvailable = (tileIndex: number, cellIndex: number) => {
  if (props.readonly) return false
  if (!props.availableMoves) return true
  const index = getAbsoluteIndex(tileIndex, cellIndex)
  if (props.board && props.board[index] !== ".") return false
  
  const x = index % 9
  const y = Math.floor(index / 9)
  const col = String.fromCharCode(65 + x)
  const row = y + 1
  const coord = `${col}${row}`
  const moves = props.availableMoves || ""

  if (moves.startsWith("ALL_AVAILABLE_EXCEPT:")) {
    const parts = moves.split(":")
    const except = parts[1] ? parts[1].split(",").filter(Boolean) : []
    return !except.includes(coord)
  } else if (moves.startsWith("AVAILABLE_IN_TILE:")) {
    const parts = moves.split(":")
    const tileCoord = parts[1]
    if (!tileCoord) return true
    const except = parts[3] ? parts[3].split(",").filter(Boolean) : []
    const tx = tileCoord.charCodeAt(0) - 65
    const ty = parseInt(tileCoord.substring(1)) - 1
    const isInTile = x >= tx && x < tx + 3 && y >= ty && y < ty + 3
    return isInTile && !except.includes(coord)
  }
  return true
}

const deserializedBoard = computed(() => {
  let b = props.board || ".".repeat(81)
  if (b.length < 81) b = b.padEnd(81, ".")
  
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
  let tw = props.tileWinners || ".".repeat(9)
  if (tw.length < 9) tw = tw.padEnd(9, ".")
  return tw.split("")
})

const cellClasses = computed(() => {
  switch (props.size) {
    case "sm": return "text-[8px] lg:text-[10px]"
    case "md": return "text-lg lg:text-xl"
    default: return "text-lg lg:text-3xl"
  }
})

const getAbsoluteIndex = (tileIndex: number, cellIndex: number) => {
  const tx = tileIndex % 3
  const ty = Math.floor(tileIndex / 3)
  const cx = cellIndex % 3
  const cy = Math.floor(cellIndex / 3)
  const x = tx * 3 + cx
  const y = ty * 3 + cy
  return y * 9 + x
}

const onCellClick = (tileIndex: number, cellIndex: number) => {
  if (props.readonly) return
  const absoluteIndex = getAbsoluteIndex(tileIndex, cellIndex)
  emit("cell-click", absoluteIndex)
}

const horizontalLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
const verticalLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
</script>

<template>
  <div :class="['board-container w-full relative group mx-auto pt-8 lg:pt-14 pl-8 lg:pl-14', containerSizeClasses]">
    <div class="relative">
      <!-- Top Labels (A-I) -->
      <div class="absolute -top-6 lg:-top-12 left-0 right-0 grid grid-cols-3 gap-2 lg:gap-4 px-2 lg:px-6 pointer-events-none h-6 lg:h-12">
        <div v-for="t in 3" :key="t" class="grid grid-cols-3 gap-0.5 lg:gap-1 px-0.5 lg:px-1.5">
          <span v-for="c in 3" :key="c" 
                :class="[
                  'text-[10px] lg:text-base font-black font-mono text-center uppercase flex items-end justify-center pb-1 transition-all duration-200',
                  hoveredX === (t-1)*3 + (c-1) ? 'text-indigo-400 scale-125' : 'text-white/30'
                ]">
            {{ horizontalLabels[(t-1)*3 + (c-1)] }}
          </span>
        </div>
      </div>

      <!-- Left Labels (1-9) -->
      <div class="absolute -left-6 lg:-left-12 top-0 bottom-0 grid grid-rows-3 gap-2 lg:gap-4 py-2 lg:py-6 pointer-events-none w-6 lg:w-12">
        <div v-for="t in 3" :key="t" class="grid grid-rows-3 gap-0.5 lg:gap-1 py-0.5 lg:py-1.5">
          <span v-for="c in 3" :key="c" 
                :class="[
                  'text-[10px] lg:text-base font-black font-mono flex items-center justify-end pr-1 transition-all duration-200',
                  hoveredY === (t-1)*3 + (c-1) ? 'text-indigo-400 scale-125' : 'text-white/30'
                ]">
            {{ verticalLabels[(t-1)*3 + (c-1)] }}
          </span>
        </div>
      </div>

      <div class="main-grid aspect-square glass rounded-[1.5rem] lg:rounded-[2rem] shadow-2xl relative z-10 grid grid-cols-3 grid-rows-3 gap-2 lg:gap-4 p-2 lg:p-6 transition-all duration-300">
        <div v-for="(tileArr, i) in deserializedBoard" :key="i" 
             class="small-board transition-all duration-200 relative overflow-hidden aspect-square grid grid-cols-3 grid-rows-3 gap-0.5 lg:gap-1 p-0.5 lg:p-1.5"
             :class="[
               i === targetTileIndex ? 'target-highlight ring-4 ring-yellow-400/80 z-30' : 
               isTileActive(i) ? 'active ring-2 ring-indigo-500/50' : 'opacity-80',
               deserializedTileWinners[i] === 'X' ? 'won-x' : 
               deserializedTileWinners[i] === 'O' ? 'won-o' : 
               deserializedTileWinners[i] === 'D' ? 'won-draw' : 'glass'
             ]">
          
          <div v-for="(cell, j) in tileArr" :key="j" 
               @click="onCellClick(i, j)"
               @mouseenter="handleCellMouseEnter(i, j)"
               @mouseleave="handleCellMouseLeave"
               class="flex items-center justify-center aspect-square rounded-md lg:rounded-lg bg-white/[0.03] border border-white/[0.05] font-black transition-all cursor-pointer select-none active:scale-90 overflow-hidden outline-none touch-manipulation"
               style="-webkit-tap-highlight-color: transparent;"
               :class="[
                 cellClasses,
                 { 
                   'bg-indigo-500/30 border-indigo-500/50 ring-2 ring-indigo-500/40 scale-95': selectedCell === getAbsoluteIndex(i, j),
                   'available-cell hover:bg-yellow-500/20 hover:border-yellow-500/60 hover:ring-2 hover:ring-yellow-500/30': isCellAvailable(i, j),
                   'hover:bg-white/10 hover:border-white/20': !isCellAvailable(i, j) && !readonly
                 }
               ]">
            <span v-if="cell === 'X'" class="marker-x leading-none flex items-center justify-center">X</span>
            <span v-else-if="cell === 'O'" class="marker-o leading-none flex items-center justify-center">O</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.board-container {
    /* Perspective removed to fix hit-test misalignment */
}
.small-board {
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
}
.small-board.active {
    background: rgba(99, 102, 241, 0.05);
    border-color: rgba(99, 102, 241, 0.4);
    box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.3);
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
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.1);
}

.available-cell {
    border-color: rgba(234, 179, 8, 0.3) !important;
    background: rgba(234, 179, 8, 0.05) !important;
    box-shadow: inset 0 0 10px rgba(234, 179, 8, 0.1);
}
.available-cell:hover {
    background: rgba(234, 179, 8, 0.15) !important;
    border-color: rgba(234, 179, 8, 0.5) !important;
}

.target-highlight {
    box-shadow: 0 0 30px rgba(250, 204, 21, 0.4), inset 0 0 20px rgba(250, 204, 21, 0.2) !important;
    border-color: rgba(250, 204, 21, 0.8) !important;
    background: rgba(250, 204, 21, 0.08) !important;
    z-index: 40 !important;
}
</style>
