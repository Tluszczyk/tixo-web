<script setup lang="ts">
import { computed } from "vue"

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

const containerSizeClasses = computed(() => {
  switch (props.size) {
    case "sm": return "max-w-[120px]"
    case "md": return "max-w-[450px]"
    default: return "max-w-[650px]"
  }
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
  const moves = props.availableMoves

  if (moves.startsWith("ALL_AVAILABLE_EXCEPT:")) {
    const except = moves.split(":")[1].split(",").filter(Boolean)
    return !except.includes(coord)
  } else if (moves.startsWith("AVAILABLE_IN_TILE:")) {
    const parts = moves.split(":")
    const tileCoord = parts[1]
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
    case "sm": return "text-[8px]"
    case "md": return "text-lg h-10"
    default: return "text-2xl h-14"
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
</script>

<template>
  <div :class="['board-container w-full relative group', containerSizeClasses]">
    <div class="main-grid glass rounded-[2rem] shadow-2xl relative z-10 transition-transform duration-700 grid grid-cols-3 grid-rows-3 gap-4 p-4 lg:p-6">
      <div v-for="(tileArr, i) in deserializedBoard" :key="i" 
           class="small-board transition-all duration-500 relative overflow-hidden aspect-square grid grid-cols-3 grid-rows-3 gap-1 p-1.5"
           :class="[
             isTileActive(i) ? 'active ring-1 ring-indigo-500/30' : 'opacity-40 grayscale-[0.5]',
             deserializedTileWinners[i] === 'X' ? 'won-x' : 
             deserializedTileWinners[i] === 'O' ? 'won-o' : 
             deserializedTileWinners[i] === 'D' ? 'won-draw' : 'glass'
           ]">
        
        <div v-for="(cell, j) in tileArr" :key="j" 
             @click="onCellClick(i, j)"
             class="flex items-center justify-center rounded-lg bg-white/[0.02] border border-white/[0.03] font-black transition-all hover:bg-white/[0.08] hover:border-white/[0.1] cursor-pointer"
             :class="[
               cellClasses,
               { 
                 'bg-indigo-500/20 border-indigo-500/40 ring-1 ring-indigo-500/20 scale-95': selectedCell === getAbsoluteIndex(i, j),
                 'available-cell': isCellAvailable(i, j)
               }
             ]">
          <span v-if="cell === 'X'" class="marker-x">X</span>
          <span v-else-if="cell === 'O'" class="marker-o">O</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.board-container {
    perspective: 1500px;
}
.small-board {
    background: rgba(255, 255, 255, 0.01);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 1rem;
}
.small-board.active {
    background: rgba(99, 102, 241, 0.03);
    border-color: rgba(99, 102, 241, 0.2);
    transform: translateZ(30px);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    z-index: 30;
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
</style>
