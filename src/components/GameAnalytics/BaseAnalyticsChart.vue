<script setup lang="ts">
import { ref, watch, onMounted, computed } from 'vue'
import VChart from 'vue-echarts'

const props = defineProps<{
  option: any
  loading?: boolean
  selectedTurn?: number | null
}>()

const emit = defineEmits(['turn-select'])

const chartRef = ref<any>(null)

/**
 * Enhanced option with automatic selection highlighting.
 */
const computedOption = computed(() => {
  if (!props.option) return props.option
  
  const opt = { ...props.option }
  if (opt.series && Array.isArray(opt.series) && opt.series.length > 0) {
    const series = [...opt.series]
    
    // Apply the selection highlight to the series to ensure it is rendered
    // If we have multiple series, adding it to all can help visibility
    for (let i = 0; i < series.length; i++) {
      const s = { ...series[i] }
      
      // Ensure markArea exists
      const existingMarkArea = s.markArea || { silent: true, data: [] }
      const markAreaData = [...(existingMarkArea.data || [])]
      
      if (props.selectedTurn !== null && props.selectedTurn !== undefined) {
        const turnLabel = (props.selectedTurn + 1).toString()
        
        // Full-column greyish highlight
        markAreaData.push([
          { 
            xAxis: turnLabel,
            itemStyle: { 
              color: 'rgba(255, 255, 255, 0.12)',
              visualMap: false 
            } 
          },
          { xAxis: turnLabel }
        ])
      }

      s.markArea = { ...existingMarkArea, data: markAreaData, z: 100 }
      series[i] = s
    }
    
    opt.series = series
  }

  return opt
})

/**
 * Initializes axis-based click logic using ECharts zr (underlying canvas engine).
 * This ensures that clicking anywhere in a move's vertical column triggers selection.
 */
const initInteraction = () => {
  const chartInstance = chartRef.value?.chart
  if (!chartInstance) return

  const zr = chartInstance.getZr()
  zr.off('click')
  zr.on('click', (params: any) => {
    // Only handle left clicks for mouse. Touch events typically don't have a 'button' property.
    if (params.event.button !== undefined && params.event.button !== 0) return

    const pointInPixel = [params.offsetX, params.offsetY]
    
    try {
      if (chartInstance.containPixel('grid', pointInPixel)) {
        const pointInGrid = chartInstance.convertFromPixel('grid', pointInPixel)
        const xIndex = Math.round(pointInGrid[0])
        
        const option = chartInstance.getOption()
        const dataLen = (option.series as any[])[0]?.data?.length || 0
        
        if (xIndex >= 0 && xIndex < dataLen) {
          emit('turn-select', xIndex)
        }
      }
    } catch {
      // Ignore
    }
  })
}

// Synchronize external selection with internal chart tooltips/highlights
const syncActions = () => {
  const chart = chartRef.value?.chart
  if (!chart) return

  const turn = props.selectedTurn
  if (turn === null || turn === undefined) {
    chart.dispatchAction({ type: 'hideTip' })
    chart.dispatchAction({ type: 'downplay', seriesIndex: 0 })
  } else {
    // Show tooltip
    chart.dispatchAction({
      type: 'showTip',
      seriesIndex: 0,
      dataIndex: turn,
    })
    // Highlight the series element
    chart.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: turn,
    })
  }
}

// Watch both option and selectedTurn to ensure actions are reapplied
watch([() => props.selectedTurn, () => props.option], () => {
  setTimeout(syncActions, 100)
}, { deep: true })

onMounted(() => {
  setTimeout(initInteraction, 1000)
})

// Expose the instance for parent components if needed
defineExpose({
  getChart: () => chartRef.value?.chart
})
</script>

<template>
  <VChart 
    ref="chartRef" 
    :option="computedOption" 
    :loading="loading" 
    autoresize 
    class="w-full h-full"
  />
</template>

<style scoped>
/* Ensure the chart container takes up full parent space */
.w-full { width: 100%; }
.h-full { height: 100%; }
</style>
