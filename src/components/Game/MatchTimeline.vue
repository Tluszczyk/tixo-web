<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'

const props = defineProps<{
  moveHistory: string[]
  selectedHistoryIndex: number | null
  isOnDevice: boolean
}>()

const emit = defineEmits<{
  (e: 'select-move', index: number | null): void
}>()

const containerRef = ref<HTMLDivElement | null>(null)
const moveRefs = ref<HTMLDivElement[]>([])

const handleMoveClick = (idx: number) => {
  emit('select-move', props.selectedHistoryIndex === idx ? null : idx)
}

watch(
  () => props.selectedHistoryIndex,
  async (newIdx) => {
    if (newIdx !== null && moveRefs.value[newIdx] && containerRef.value) {
      await nextTick()
      const container = containerRef.value
      const element = moveRefs.value[newIdx]

      const containerRect = container.getBoundingClientRect()
      const elementRect = element.getBoundingClientRect()

      const top =
        container.scrollTop +
        (elementRect.top - containerRect.top) -
        container.clientHeight / 2 +
        element.clientHeight / 2
      const left =
        container.scrollLeft +
        (elementRect.left - containerRect.left) -
        container.clientWidth / 2 +
        element.clientWidth / 2

      container.scrollTo({
        top,
        left,
        behavior: 'smooth',
      })
    }
  },
)
</script>

<template>
  <aside
    class="w-full lg:w-32 flex flex-col items-center border-b lg:border-b-0 lg:border-r border-glass-border bg-glass-white lg:bg-transparent overflow-hidden shrink-0 lg:sticky lg:top-0"
  >
    <div
      class="w-full px-4 py-2 border-b border-glass-border flex items-center justify-between lg:hidden"
    >
      <span class="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em]"
        >Match Timeline</span
      >
      <span class="text-[9px] font-bold text-app-text-muted opacity-40 uppercase mono"
        >{{ moveHistory.length }} MOVES</span
      >
    </div>

    <div
      ref="containerRef"
      class="flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto custom-scrollbar w-full p-4 lg:py-6 lg:h-[75vh] relative"
    >
      <div
        v-for="(move, idx) in moveHistory"
        :key="idx"
        ref="moveRefs"
        @click="handleMoveClick(idx)"
        class="history-item flex flex-col items-center gap-2 cursor-pointer group shrink-0 min-w-[50px] lg:min-w-0"
      >
        <span
          class="text-[10px] font-black transition-colors mono"
          :class="
            selectedHistoryIndex === idx
              ? 'text-app-text'
              : 'text-app-text-muted opacity-40 group-hover:text-app-text-muted opacity-70'
          "
        >
          {{ (idx + 1).toString().padStart(2, '0') }}
        </span>

        <div
          :class="[
            'relative flex items-center justify-center transition-all duration-300 h-10 w-10 lg:w-16 lg:h-16 rounded-xl border',
            selectedHistoryIndex === idx
              ? 'bg-app-text/20 border-app-text/60 ring-4 ring-app-text/10 scale-110'
              : 'bg-glass-white border-glass-border hover:border-indigo-500/30 hover:bg-glass-white',
          ]"
        >
          <span
            :class="[
              'text-sm lg:text-lg font-black transition-all duration-300',
              isOnDevice
                ? idx % 2 === 0
                  ? 'text-red-400 marker-x'
                  : 'text-blue-400 marker-o'
                : idx % 2 === 0
                  ? 'text-blue-400 marker-o'
                  : 'text-red-400 marker-x',
              selectedHistoryIndex === idx ? 'scale-125' : 'scale-100 group-hover:scale-110',
            ]"
          >
            {{ move }}
          </span>

          <!-- Active Indicator Dot -->
          <div
            v-if="selectedHistoryIndex === idx"
            class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-app-text rounded-full shadow-[0_0_8px_var(--text-primary)]"
          ></div>
        </div>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  display: none;
}
.custom-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
