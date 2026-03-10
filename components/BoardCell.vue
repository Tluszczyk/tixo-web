<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  cell: string
  cellIndex: number
  tileIndex: number
  absoluteIndex: number
  size: 'sm' | 'md' | 'lg'
  isSelected: boolean
  isHighlighted: boolean
  isRecommended: boolean
  isAvailable: boolean
  readonly: boolean
}>()

const emit = defineEmits<{
  (e: 'click', absoluteIndex: number): void
  (e: 'mouseenter', tileIndex: number, cellIndex: number): void
  (e: 'mouseleave'): void
}>()

const cellClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-[8px] lg:text-[10px]'
    case 'md':
      return 'text-lg lg:text-xl'
    default:
      return 'text-lg lg:text-3xl'
  }
})

const onClick = () => {
  if (props.readonly) return
  emit('click', props.absoluteIndex)
}
</script>

<template>
  <div
    @click="onClick"
    @mouseenter="emit('mouseenter', tileIndex, cellIndex)"
    @mouseleave="emit('mouseleave')"
    class="flex items-center justify-center aspect-square rounded-md lg:rounded-lg bg-cell-bg border border-cell-border font-black transition-all cursor-pointer select-none active:scale-90 overflow-hidden outline-none touch-manipulation relative"
    style="-webkit-tap-highlight-color: transparent"
    :class="[
      cellClasses,
      {
        'bg-indigo-500/30 border-indigo-500/50 ring-2 ring-indigo-500/40 scale-95':
          isSelected,
        'historical-move-highlight z-20 scale-110': isHighlighted,
        'recommended-move-highlight z-20 scale-110': isRecommended,
        'available-cell hover:bg-yellow-500/20 hover:border-yellow-500/60 hover:ring-2 hover:ring-yellow-500/30':
          isAvailable,
        'hover:bg-app-text/10 hover:border-app-text/20': !isAvailable && !readonly,
      },
    ]"
  >
    <span v-if="cell === 'X'" class="marker-x leading-none flex items-center justify-center">X</span>
    <span v-else-if="cell === 'O'" class="marker-o leading-none flex items-center justify-center">O</span>
  </div>
</template>

<style scoped>
.available-cell {
  border-color: rgba(234, 179, 8, 0.3) !important;
  background: rgba(234, 179, 8, 0.05) !important;
  box-shadow: inset 0 0 10px rgba(234, 179, 8, 0.1);
}
.available-cell:hover {
  background: rgba(234, 179, 8, 0.15) !important;
  border-color: rgba(234, 179, 8, 0.5) !important;
}

.historical-move-highlight {
  background: #fbbf24 !important;
  border-color: #f59e0b !important;
  box-shadow: 0 0 20px rgba(251, 191, 36, 0.6) !important;
  color: #000 !important;
}

.recommended-move-highlight {
  background: #6366f1 !important;
  border-color: #4f46e5 !important;
  box-shadow: 0 0 20px rgba(99, 102, 241, 0.6) !important;
  color: #fff !important;
}
</style>
