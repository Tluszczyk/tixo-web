<script setup lang="ts">
import { computed } from 'vue'
import GameListItem from '~/components/GameList/GameListItem.vue'
import type { User } from '~/api/users'
import type { Models } from 'appwrite'
import type { Game } from '~/api/dto/Game'
import type { RatingRecord } from '~/api/authentication'

import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
} from 'echarts/components'
import VChart from 'vue-echarts'

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
])

const props = defineProps<{
  user: Models.User<Models.Preferences> | User | null
  userDetails: User | null
  userGames: Game[]
  totalGames: number
  ratingHistory: RatingRecord[]
  isOwnProfile?: boolean
  currentPage?: number
  itemsPerPage?: number
}>()

const emit = defineEmits<{
  (e: 'logout'): void
  (e: 'pageChange', page: number): void
}>()

const stats = computed(() => {
  if (!props.user) return { total: 0, wins: 0, losses: 0, ties: 0 }
  const myGames = props.userGames.filter((g) => g.status === 'FINISHED')
  let wins = 0,
    losses = 0,
    ties = 0

  myGames.forEach((g) => {
    if (g.winner === 'D' || g.winner === 'TIE') ties++
    else {
      const mySymbol = g.xPlayerId === props.user?.$id ? 'X' : 'O'
      if (g.winner === mySymbol) wins++
      else losses++
    }
  })

  return { total: props.totalGames, wins, losses, ties }
})

const chartOptions = computed(() => {
  const data = props.ratingHistory.map(r => [new Date(r.$createdAt).getTime(), Math.round(r.rating)])
  
  return {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(10, 12, 16, 0.9)',
      borderColor: 'rgba(255, 255, 255, 0.1)',
      borderWidth: 1,
      padding: [12, 16],
      textStyle: {
        color: '#f1f5f9',
        fontSize: 12,
        fontWeight: 'bold'
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      formatter: (params: any) => {
        const date = new Date(params[0].value[0]).toLocaleDateString()
        const rating = params[0].value[1]
        return `
          <div class="space-y-1">
            <p class="text-[10px] uppercase tracking-widest text-slate-400 opacity-60">${date}</p>
            <p class="text-sm font-black text-indigo-400">${rating} <span class="text-[10px] text-slate-500">GLICKO-2</span></p>
          </div>
        `
      }
    },
    grid: {
      left: '0%',
      right: '4%',
      bottom: '0%',
      top: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'time',
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      axisLabel: {
        color: 'rgba(148, 163, 184, 0.4)',
        fontSize: 10,
        fontWeight: 'bold',
        padding: [10, 0, 0, 0]
      }
    },
    yAxis: {
      type: 'value',
      scale: true,
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.05)',
          type: 'dashed'
        }
      },
      axisLabel: {
        color: 'rgba(148, 163, 184, 0.4)',
        fontSize: 10,
        fontWeight: 'bold'
      }
    },
    series: [
      {
        data: data,
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          color: '#6366f1',
          borderWidth: 3,
          borderColor: '#0a0c10'
        },
        lineStyle: {
          width: 4,
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 1, y2: 0,
            colorStops: [
              { offset: 0, color: '#6366f1' },
              { offset: 1, color: '#3b82f6' }
            ]
          }
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [
              { offset: 0, color: 'rgba(99, 102, 241, 0.15)' },
              { offset: 1, color: 'rgba(99, 102, 241, 0)' }
            ]
          }
        },
        animationDuration: 2000,
        animationEasing: 'cubicOut'
      }
    ]
  }
})
</script>

<template>
  <div class="space-y-12 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
    <!-- Profile Header/Stats -->
    <section class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div
        class="lg:col-span-1 glass border-glass-border rounded-4xl p-10 flex flex-col items-center text-center space-y-8"
      >
        <div
          class="w-32 h-32 rounded-[2.5rem] glass flex items-center justify-center border-indigo-500/30 shadow-2xl shadow-indigo-500/10"
        >
          <i class="pi pi-user text-5xl text-indigo-500"></i>
        </div>

        <div class="space-y-2">
          <h2 class="text-3xl font-black text-app-text tracking-tight leading-none">
            {{ user?.name || 'Player' }}
          </h2>
          <p class="text-app-text-muted opacity-30 text-xs font-bold uppercase tracking-[0.2em]">
            {{ user?.email }}
          </p>
        </div>

        <div class="w-full space-y-3">
          <div
            class="flex items-center justify-between p-4 rounded-2xl glass border-indigo-500/10 bg-indigo-500/5"
          >
            <span class="text-[10px] font-black text-indigo-400 uppercase tracking-widest"
              >Glicko-2 Rating</span
            >
            <span class="text-xl font-black text-app-text mono">{{
              userDetails?.rating || 1500
            }}</span>
          </div>
          <div
            class="flex items-center justify-between p-4 rounded-2xl glass border-glass-border"
          >
            <span class="text-[10px] font-black text-app-text-muted opacity-20 uppercase tracking-widest"
              >Joined</span
            >
            <span class="text-xs font-bold text-app-text-muted opacity-60">{{
              new Date(user?.registration || '').toLocaleDateString()
            }}</span>
          </div>
          <div
            class="flex items-center justify-between p-4 rounded-2xl glass border-glass-border"
          >
            <span class="text-[10px] font-black text-app-text-muted opacity-20 uppercase tracking-widest"
              >ID</span
            >
            <span class="text-[10px] mono text-app-text-muted opacity-30 truncate ml-4">{{
              user?.$id
            }}</span>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <CommonBaseButton
            v-if="isOwnProfile"
            @click="emit('logout')"
            variant="danger"
            size="sm"
            class="!px-6"
            icon-left="pi pi-power-off"
          >
            Disconnect
          </CommonBaseButton>
        </div>
      </div>

      <div class="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div
          class="col-span-2 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[2rem] p-10 text-white relative overflow-hidden group shadow-2xl shadow-indigo-500/20"
        >
          <div
            class="absolute -right-8 -bottom-8 text-white opacity-10 text-9xl rotate-12 group-hover:scale-110 transition-transform duration-1000"
          >
            <i class="pi pi-bolt"></i>
          </div>
          <h4
            class="text-[11px] font-black uppercase tracking-[0.3em] mb-4 relative z-10 text-white opacity-60"
          >
            Total Encounters
          </h4>
          <p class="text-7xl font-black relative z-10 tracking-tighter">{{ stats.total }}</p>
          <div class="mt-8 flex items-center gap-2 relative z-10">
            <div class="h-1 w-12 bg-white rounded-full"></div>
            <span class="text-[10px] font-black uppercase tracking-widest text-white opacity-40"
              >Active Records</span
            >
          </div>
        </div>

        <div
          class="glass border-glass-border rounded-[2rem] p-8 flex flex-col justify-between group hover:border-green-500/30 transition-all duration-500"
        >
          <div
            class="w-12 h-12 rounded-2xl glass border-green-500/20 flex items-center justify-center text-green-500 mb-4 group-hover:scale-110 transition-transform"
          >
            <i class="pi pi-trophy text-xl"></i>
          </div>
          <div>
            <p class="text-4xl font-black text-app-text tracking-tighter">{{ stats.wins }}</p>
            <p class="text-[10px] font-black text-app-text-muted opacity-20 uppercase tracking-[0.2em]">
              Victories
            </p>
          </div>
        </div>

        <div
          class="glass border-glass-border rounded-[2rem] p-8 flex flex-col justify-between group hover:border-indigo-500/30 transition-all duration-500"
        >
          <div
            class="w-12 h-12 rounded-2xl glass border-indigo-500/20 flex items-center justify-center text-indigo-500 mb-4 group-hover:scale-110 transition-transform"
          >
            <i class="pi pi-minus text-xl"></i>
          </div>
          <div>
            <p class="text-4xl font-black text-app-text tracking-tighter">{{ stats.ties }}</p>
            <p class="text-[10px] font-black text-app-text-muted opacity-20 uppercase tracking-[0.2em]">
              Draws
            </p>
          </div>
        </div>

        <div
          class="glass border-glass-border rounded-[2rem] p-8 flex flex-col justify-between group hover:border-red-500/30 transition-all duration-500"
        >
          <div
            class="w-12 h-12 rounded-2xl glass border-red-500/20 flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 transition-transform"
          >
            <i class="pi pi-times text-xl"></i>
          </div>
          <div>
            <p class="text-4xl font-black text-app-text tracking-tighter">{{ stats.losses }}</p>
            <p class="text-[10px] font-black text-app-text-muted opacity-20 uppercase tracking-[0.2em]">
              Defeats
            </p>
          </div>
        </div>

        <div
          class="col-span-2 md:col-span-4 glass border-glass-border rounded-[2.5rem] p-10 flex flex-col space-y-8 overflow-hidden relative group"
        >
          <div class="flex items-center justify-between relative z-10">
            <div class="flex items-center gap-6">
              <div
                class="w-16 h-16 rounded-2xl glass border-indigo-500/20 flex items-center justify-center text-indigo-500 shadow-2xl shadow-indigo-500/10"
              >
                <i class="pi pi-chart-line text-2xl"></i>
              </div>
              <div>
                <h4 class="text-2xl font-black text-app-text tracking-tight">Rating History</h4>
                <p class="text-[10px] font-black uppercase tracking-[0.2em] text-app-text-muted opacity-20 mt-1">
                  Glicko-2 performance over time
                </p>
              </div>
            </div>
            <div class="text-right">
              <p class="text-3xl font-black text-indigo-400 tracking-tighter">{{ userDetails?.rating || 1500 }}</p>
              <p class="text-[8px] font-black uppercase tracking-[0.2em] text-app-text-muted opacity-20">Latest Record</p>
            </div>
          </div>
          
          <div class="h-64 w-full relative z-10">
            <VChart class="w-full h-full" :option="chartOptions" autoresize />
          </div>
        </div>
      </div>
    </section>

    <!-- Game History -->
    <section class="space-y-8">
      <div class="flex items-center justify-between px-2">
        <div class="flex items-center gap-4">
          <h3 class="text-2xl font-black text-app-text tracking-tight uppercase italic">
            Chronicles<span class="text-indigo-500">.</span>
          </h3>
          <div class="h-4 w-[1px] bg-glass-border"></div>
          <span class="text-[10px] font-black uppercase tracking-[0.3em] text-app-text-muted opacity-20"
            >{{ userGames.length }} Matches</span
          >
        </div>
      </div>

      <div
        v-if="userGames.length === 0"
        class="glass border-glass-border rounded-[2.5rem] p-20 flex flex-col items-center text-center space-y-6"
      >
        <div
          class="w-24 h-24 rounded-full glass border-glass-border flex items-center justify-center text-app-text-muted opacity-10"
        >
          <i class="pi pi-table text-5xl"></i>
        </div>
        <div class="space-y-2">
          <h4 class="text-xl font-black text-app-text">The board is silent.</h4>
          <p
            class="text-app-text-muted opacity-20 text-[10px] font-black uppercase tracking-[0.2em] max-w-xs leading-relaxed"
          >
            Tactical history is waiting to be written.
          </p>
        </div>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GameListItem
          v-for="game in userGames"
          :key="game.$id"
          :game="game"
          :current-user="user"
        />
      </div>

      <!-- Chronicles Pagination -->
      <div v-if="totalGames > (itemsPerPage || 10)" class="flex items-center justify-between px-2 pt-8 border-t border-glass-border">
        <div class="text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40">
          Showing records {{ ((currentPage || 1) - 1) * (itemsPerPage || 10) + 1 }} - {{ Math.min((currentPage || 1) * (itemsPerPage || 10), totalGames) }} of {{ totalGames }}
        </div>
        <div class="flex items-center gap-2">
          <CommonBaseButton
            @click="emit('pageChange', (currentPage || 1) - 1)"
            :disabled="(currentPage || 1) === 1"
            variant="secondary"
            size="sm"
            class="w-10 h-10 !p-0"
            icon-left="pi pi-chevron-left"
          />
          <div class="px-4 py-2 rounded-lg bg-void border border-glass-border text-[10px] font-black text-app-text mono">
            {{ currentPage || 1 }} / {{ Math.ceil(totalGames / (itemsPerPage || 10)) }}
          </div>
          <CommonBaseButton
            @click="emit('pageChange', (currentPage || 1) + 1)"
            :disabled="(currentPage || 1) >= Math.ceil(totalGames / (itemsPerPage || 10))"
            variant="secondary"
            size="sm"
            class="w-10 h-10 !p-0"
            icon-left="pi pi-chevron-right"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.glass {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
</style>
