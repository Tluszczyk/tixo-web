<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { Query } from 'appwrite'
import { tablesDB } from '@/api/appwriteClient'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart, BarChart, ScatterChart } from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  MarkPointComponent,
  MarkLineComponent,
  MarkAreaComponent,
  DataZoomComponent,
} from 'echarts/components'
import BaseAnalyticsChart from './BaseAnalyticsChart.vue'
import { useThemeStore } from '@/stores/theme'

// Register ECharts modules
use([
  CanvasRenderer,
  LineChart,
  BarChart,
  ScatterChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  MarkPointComponent,
  MarkLineComponent,
  MarkAreaComponent,
  DataZoomComponent,
])

const props = defineProps<{
  gameId: string
  winner?: string
  selectedTurn?: number | null
}>()

const emit = defineEmits(['turn-select'])
const themeStore = useThemeStore()

interface GameAnalytics {
  gameId: string
  winProbabilityX: number[]
  moveTimestamps: string[]
  moveQualities: string[]
  boardCaptureTurns: number[]
  freeMoves: number[]
}

const analytics = ref<GameAnalytics | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)

// Helper to calculate time spent per move from timestamps
const timeSpentPerMove = computed(() => {
  if (!analytics.value || !analytics.value.moveTimestamps) return []
  const ts = analytics.value.moveTimestamps.map((t) => new Date(t).getTime())
  const durations: number[] = []
  for (let i = 0; i < ts.length; i++) {
    if (i === 0) {
      durations.push(2000)
    } else {
      const current = ts[i]
      const previous = ts[i - 1]
      if (current !== undefined && previous !== undefined) {
        durations.push(current - previous)
      } else {
        durations.push(0)
      }
    }
  }
  return durations
})

const formatDuration = (ms: number) => {
  if (ms < 1000) return `${ms}ms`
  return `${(ms / 1000).toFixed(1)}s`
}

const fetchAnalytics = async () => {
  loading.value = true
  error.value = null
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response = await tablesDB.listRows<any>({
      databaseId: 'tixo',
      tableId: 'game-analytics',
      queries: [Query.equal('gameId', props.gameId)],
    })

    if (response.total > 0) {
      analytics.value = response.rows[0]
    } else {
      error.value = 'No analytics data found for this game.'
    }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error('Fetch error:', err)
    error.value = 'Failed to load analysis.'
  } finally {
    loading.value = false
  }
}

onMounted(fetchAnalytics)
watch(() => props.gameId, fetchAnalytics)

const tooltipConfig = computed(() => ({
  trigger: 'axis',
  backgroundColor: themeStore.theme === 'dark' ? 'rgba(0,0,0,0.8)' : 'rgba(255,255,255,0.8)',
  borderColor: themeStore.theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
  textStyle: { color: themeStore.theme === 'dark' ? '#fff' : '#000', fontSize: 10, fontFamily: 'monospace' },
  axisPointer: { type: 'line', lineStyle: { color: 'rgba(99, 102, 241, 0.3)', width: 2 } },
}))

const xAxisConfig = (length: number) => ({
  type: 'category',
  data: Array.from({ length }, (_, i) => (i + 1).toString()),
  axisLine: { lineStyle: { color: themeStore.theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' } },
  axisLabel: { color: themeStore.theme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)', fontSize: 8 },
})

// Chart 1: Evaluation Chart
const evalOption = computed(() => {
  if (!analytics.value) return {}

  const rawProbs = analytics.value.winProbabilityX
  const qualities = analytics.value.moveQualities
  const probabilities = rawProbs.map((p) => Math.round((p - 0.5) * 200))

  const qualityColors: Record<string, string> = {
    excellent: '#3b82f6',
    good: '#22c55e',
    inaccuracy: '#f59e0b',
    blunder: '#ef4444',
  }

  const criticalMoments = summary.value?.criticalMoments || []

  return {
    backgroundColor: 'transparent',
    tooltip: tooltipConfig.value,
    grid: { left: '5%', right: '5%', top: '5%', bottom: '5%', containLabel: true },
    xAxis: xAxisConfig(probabilities.length || rawProbs.length),
    yAxis: {
      type: 'value',
      min: -100,
      max: 100,
      splitLine: { lineStyle: { color: themeStore.theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' } },
      axisLabel: {
        formatter: (val: number) => {
          if (val === 100) return 'X'
          if (val === -100) return 'O'
          if (val === 0) return '—'
          return ''
        },
        color: (val: number) => {
          if (val === 100) return '#ef4444'
          if (val === -100) return '#3b82f6'
          return themeStore.theme === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)'
        },
        fontSize: 12,
        fontWeight: 'bold',
      },
    },
    series: [
      {
        name: 'Evaluation',
        type: 'line',
        smooth: true,
        data: probabilities,
        lineStyle: { width: 4 },
        areaStyle: { opacity: 0.15 },
        emphasis: {
          focus: 'series',
          itemStyle: { borderWidth: 2, borderColor: themeStore.theme === 'dark' ? '#fff' : '#000' },
        },
        symbol: 'none',
        markArea: {
          silent: true,
          data: [
            // Free moves highlights
            ...(analytics.value.freeMoves || []).map((turn) => [
              { xAxis: turn.toString(), itemStyle: { color: themeStore.theme === 'dark' ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)' } },
              { xAxis: turn.toString() },
            ]),
          ]
        },
        markLine: {
          silent: true,
          symbol: 'none',
          label: { show: false },
          lineStyle: { type: 'dashed', color: themeStore.theme === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)', width: 1 },
          data: (analytics.value.boardCaptureTurns || []).map((turn) => ({ xAxis: turn.toString() })),
        },
        markPoint: {
          symbol: 'pin',
          symbolSize: 30,
          data: criticalMoments.map((m) => ({
            coord: [m.turn.toString(), probabilities[m.turn - 1]],
            value: `∆${Math.round(m.delta * 100)}%`,
            itemStyle: { color: '#6366f1' },
          })),
          label: { fontSize: 8, fontWeight: 'bold', color: '#fff', offset: [0, -2] },
        },
      },
      {
        name: 'Quality',
        type: 'scatter',
        data: probabilities.map((p, i) => {
          const q = qualities[i]
          const qColor = q ? qualityColors[q] || 'transparent' : 'transparent'
          return {
            value: p,
            itemStyle: {
              color: qColor,
              opacity: q === 'excellent' || q === 'blunder' ? 1 : 0.6,
            },
          }
        }),
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        symbolSize: (val: any, params: any) => (qualities[params.dataIndex] === 'blunder' ? 12 : 6),
      },
    ],
  }
})

// Chart 2: Time Management Chart
const timeOption = computed(() => {
  if (!analytics.value) return {}

  const durations = timeSpentPerMove.value
  const turns = durations.map((_, i) => (i + 1).toString())

  return {
    backgroundColor: 'transparent',
    tooltip: {
      ...tooltipConfig.value,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      formatter: (params: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const actualParam = params.find((p: any) => p.seriesName === 'Time')
        if (!actualParam) return ''
        const turn = actualParam.dataIndex
        const d = durations[turn]
        if (d === undefined) return ''
        const player = turn % 2 === 0 ? 'X' : 'O'

        const isCapture = analytics.value?.boardCaptureTurns?.includes(turn + 1)
        const isFreeMove = analytics.value?.freeMoves?.includes(turn + 1)
        
        let eventsHtml = ''
        if (isCapture) {
          eventsHtml += `
            <div class="text-amber-400 font-black text-[9px] mt-2 flex items-center gap-1.5 uppercase tracking-wider">
              <i class="pi pi-shield text-[10px]"></i> Board Captured
            </div>`
        }
        if (isFreeMove) {
          eventsHtml += `
            <div class="text-indigo-400 font-black text-[9px] mt-1 flex items-center gap-1.5 uppercase tracking-wider">
              <i class="pi pi-bolt text-[10px]"></i> Free Move
            </div>`
        }

        return `
          <div class="p-2">
            <div class="text-[10px] text-white opacity-40 uppercase font-black mb-1">Turn ${turn + 1} (${player})</div>
            <div class="text-lg font-black text-indigo-400">${formatDuration(d)}</div>
            ${eventsHtml}
          </div>
        `
      },
    },
    grid: { left: '5%', right: '5%', top: '5%', bottom: '5%', containLabel: true },
    xAxis: {
      type: 'category',
      data: turns,
      axisLine: { lineStyle: { color: themeStore.theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' } },
      axisLabel: { 
        color: themeStore.theme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)', 
        fontSize: 8,
        interval: durations.length > 40 ? 4 : 1 
      }
    },
    yAxis: {
      type: 'value',
      splitLine: { lineStyle: { color: themeStore.theme === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)' } },
      axisLabel: { 
        color: themeStore.theme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)', 
        fontSize: 8,
        formatter: (val: number) => val >= 1000 ? `${(val/1000).toFixed(0)}s` : `${val}ms`
      },
      axisLine: { show: false }
    },
    series: [
      {
        name: 'Time',
        type: 'bar',
        data: durations.map((d, i) => ({
          value: d,
          itemStyle: {
            color:
              i === props.selectedTurn
                ? i % 2 === 0
                  ? '#f87171'
                  : '#60a5fa'
                : i % 2 === 0
                  ? 'rgba(248, 113, 113, 0.2)'
                  : 'rgba(96, 165, 250, 0.2)',
            borderRadius: [4, 4, 0, 0],
            borderWidth: i === props.selectedTurn ? 2 : 0,
            borderColor: themeStore.theme === 'dark' ? '#fff' : '#000',
          },
        })),
        emphasis: {
          itemStyle: {
            opacity: 1,
            shadowBlur: 10,
            shadowColor: 'rgba(99, 102, 241, 0.5)',
          },
        },
        barWidth: '85%',
      },
    ],
  }
})

// Metrics Calculations
const summary = computed(() => {
  if (!analytics.value) return null

  const probs = analytics.value.winProbabilityX
  const shifts = []
  for (let i = 1; i < probs.length; i++) {
    const current = probs[i]
    const previous = probs[i - 1]
    if (current !== undefined && previous !== undefined) {
      shifts.push({ turn: i + 1, delta: Math.abs(current - previous) })
    }
  }
  const criticalMoments = [...shifts].sort((a, b) => b.delta - a.delta).slice(0, 3)

  const tallies = {
    X: { excellent: 0, good: 0, inaccuracy: 0, blunder: 0 },
    O: { excellent: 0, good: 0, inaccuracy: 0, blunder: 0 },
  }

  analytics.value.moveQualities.forEach((q, i) => {
    const player = i % 2 === 0 ? 'X' : 'O'
    const quality = q as keyof typeof tallies.X
    if (quality in tallies[player]) {
      tallies[player][quality]++
    }
  })

  return { criticalMoments, tallies }
})
</script>

<template>
  <div class="flex flex-col h-full">
    <div
      v-if="loading"
      class="h-full flex flex-col items-center justify-center glass rounded-[2.5rem] border-glass-border py-20"
    >
      <i class="pi pi-spin pi-spinner text-5xl text-indigo-500 mb-6"></i>
      <p class="text-xs font-black uppercase tracking-[0.3em] text-app-text-muted opacity-20">
        Synthesizing Tactical Data
      </p>
    </div>

    <div
      v-else-if="error"
      class="h-full flex flex-col items-center justify-center glass rounded-[2.5rem] border-red-500/10 py-20"
    >
      <i class="pi pi-exclamation-triangle text-5xl text-red-500/40 mb-6"></i>
      <p class="text-xs font-black uppercase tracking-[0.3em] text-red-500/40">{{ error }}</p>
    </div>

    <div
      v-else
      class="flex flex-col h-full gap-6 sm:gap-8 animate-in fade-in slide-in-from-bottom-8 duration-1000"
    >
      <!-- Top Banner: Match Result -->
      <div
        class="glass border-glass-border rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between overflow-hidden relative gap-6"
      >
        <div class="relative z-10 text-center sm:text-left">
          <h2
            class="text-2xl sm:text-4xl font-black text-app-text uppercase italic tracking-tighter mb-1"
          >
            Match Concluded<span class="text-indigo-500">.</span>
          </h2>
          <p class="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.4em] text-app-text-muted opacity-30">
            Comprehensive Performance Analysis
          </p>
        </div>

        <div class="flex items-center gap-6 sm:gap-8 relative z-10">
          <div class="flex flex-col items-center sm:items-end">
            <span
              class="text-[9px] sm:text-[10px] font-black text-app-text-muted opacity-20 uppercase tracking-widest mb-1"
              >Victor</span
            >
            <span class="text-xl sm:text-2xl font-black text-app-text uppercase">{{
              winner === 'D' ? 'Draw' : winner === 'None' ? 'Ongoing' : `Player ${winner}`
            }}</span>
          </div>
          <div
            :class="[
              'w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-[1.5rem] flex items-center justify-center text-3xl sm:text-4xl shadow-2xl transition-transform hover:scale-110 duration-500',
              winner === 'X'
                ? 'bg-red-500 shadow-red-500/20 text-white'
                : winner === 'O'
                  ? 'bg-blue-500 shadow-blue-500/20 text-white'
                  : 'bg-glass-white border border-glass-border text-app-text-muted opacity-40',
            ]"
          >
            <span v-if="winner === 'X'" class="marker-x !text-white">X</span>
            <span v-else-if="winner === 'O'" class="marker-o !text-white">O</span>
            <i v-else class="pi pi-minus"></i>
          </div>
        </div>

        <div
          class="absolute -right-10 -bottom-10 w-40 h-40 bg-indigo-500/10 blur-[80px] rounded-full"
        ></div>
      </div>

      <!-- Main Evaluation Chart - Full Width -->
      <div
        class="glass border-glass-border rounded-3xl sm:rounded-[2.5rem] p-4 sm:p-8 h-[400px] sm:h-[600px] shadow-inner"
      >
        <BaseAnalyticsChart 
          :option="evalOption" 
          :selected-turn="selectedTurn"
          @turn-select="emit('turn-select', $event)" 
        />
      </div>

      <!-- Temporal Delta - Full Width (Adjacent to Evaluation for alignment) -->
      <div
        class="glass border-glass-border rounded-[1.5rem] sm:rounded-[2rem] p-6 h-48 sm:h-72 relative overflow-hidden"
      >
        <div
          class="absolute top-4 left-8 text-[10px] font-black uppercase tracking-[0.3em] text-app-text-muted opacity-20 z-10 flex items-center gap-2"
        >
          <i class="pi pi-clock text-indigo-500"></i>
          Temporal Delta per Move
        </div>
        <BaseAnalyticsChart 
          :option="timeOption" 
          :selected-turn="selectedTurn"
          @turn-select="emit('turn-select', $event)" 
        />
      </div>

      <!-- Tactical Breakdown - Full Width Comparison -->
      <div class="glass border-glass-border rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-8 flex flex-col shadow-2xl">
        <h4
          class="text-[10px] sm:text-xs font-black text-app-text-muted opacity-40 uppercase tracking-[0.3em] border-b border-glass-border pb-4 sm:pb-6 mb-6 sm:mb-8 flex items-center gap-3"
        >
          <i class="pi pi-chart-bar text-indigo-500"></i>
          Tactical Breakdown
        </h4>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
          <div v-for="q in (['excellent', 'good', 'inaccuracy', 'blunder'] as const)" :key="q" 
               class="p-5 rounded-2xl bg-app-text/5 border border-glass-border group hover:bg-app-text/10 transition-all duration-300">
            <span class="text-[10px] font-black uppercase tracking-tight text-app-text-muted opacity-40 group-hover:opacity-100 transition-opacity block mb-4 border-b border-glass-border pb-2">{{ q }}</span>
            
            <div class="flex items-center justify-around gap-4">
              <div class="flex flex-col items-center">
                <span class="text-[8px] font-black text-red-400 marker-x uppercase mb-1">X</span>
                <span :class="['text-2xl font-black leading-none transition-transform group-hover:scale-110 block', 
                  q === 'excellent' ? 'text-blue-400' : 
                  q === 'good' ? 'text-green-400' : 
                  q === 'inaccuracy' ? 'text-amber-400' : 
                  q === 'blunder' ? 'text-red-400' : '']">
                  {{ summary?.tallies.X[q] }}
                </span>
              </div>
              
              <div class="h-8 w-[1px] bg-glass-border"></div>

              <div class="flex flex-col items-center">
                <span class="text-[8px] font-black text-blue-400 marker-o uppercase mb-1">O</span>
                <span :class="['text-2xl font-black leading-none transition-transform group-hover:scale-110 block', 
                  q === 'excellent' ? 'text-blue-400' : 
                  q === 'good' ? 'text-green-400' : 
                  q === 'inaccuracy' ? 'text-amber-400' : 
                  q === 'blunder' ? 'text-red-400' : '']">
                  {{ summary?.tallies.O[q] }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 pt-6 border-t border-glass-border">
          <div
            class="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-indigo-500/5 border border-indigo-500/10"
          >
            <i class="pi pi-info-circle text-indigo-400 mt-0.5"></i>
            <p
              class="text-[8px] sm:text-[10px] leading-relaxed text-app-text-muted opacity-40 font-bold uppercase tracking-wide"
            >
              Critical Vectors (∆) are significant evaluation shifts identified by Tixo AI.
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center gap-1 opacity-20 pb-4">
        <span class="text-[8px] font-black text-app-text-muted uppercase tracking-[0.3em]"
          >Game Session Key</span
        >
        <span class="text-[9px] mono text-app-text-muted truncate max-w-full px-4">{{ gameId }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.glass {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
}
</style>
