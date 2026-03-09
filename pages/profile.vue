<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

definePageMeta({
  middleware: 'auth',
  layout: false
})

import GameListItem from '~/components/GameList/GameListItem.vue'
import { auth, type RatingRecord } from '~/api/authentication'
import { games } from '~/api/games'
import type { Game } from '~/api/dto/Game'
import type { Models } from 'appwrite'

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

useSeoMeta({
  title: 'Commander Profile',
  description: 'View your tactical records, victory statistics, and match chronicles in Tixo.',
  ogTitle: 'Commander Profile | Tixo',
  ogDescription: 'View your tactical records, victory statistics, and match chronicles in Tixo.'
})

const router = useRouter()
const currentUser = ref<Models.User<Models.Preferences> | null>(null)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const userDetails = ref<any>(null)
const userGames = ref<Game[]>([])
const totalGames = ref(0)
const ratingHistory = ref<RatingRecord[]>([])
const loading = ref(true)

const currentPage = ref(1)
const itemsPerPage = 10

const stats = computed(() => {
  if (!currentUser.value) return { total: 0, wins: 0, losses: 0, ties: 0 }
  // Note: Local stats calculation only works for the current page.
  // In a real app, these should come from the backend.
  let wins = 0,
    losses = 0,
    ties = 0

  userGames.value.forEach((g) => {
    if (g.status === 'FINISHED') {
      if (g.winner === 'D' || g.winner === 'TIE') ties++
      else {
        const mySymbol = g.xPlayerId === currentUser.value?.$id ? 'X' : 'O'
        if (g.winner === mySymbol) wins++
        else losses++
      }
    }
  })

  return { total: totalGames.value, wins, losses, ties }
})

const chartOptions = computed(() => {
  const data = ratingHistory.value.map(r => [new Date(r.$createdAt).getTime(), Math.round(r.rating)])
  
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

const handleLogout = async () => {
  const success = await auth.logout()
  if (success) {
    router.push('/login')
  }
}

const fetchUserGames = async () => {
  if (!currentUser.value) return
  try {
    const response = await games.listGames(
      itemsPerPage,
      (currentPage.value - 1) * itemsPerPage,
      { playerId: currentUser.value.$id }
    )
    userGames.value = response.games
    totalGames.value = response.total
  } catch (e) {
    console.error('Failed to fetch user games', e)
  }
}

const handlePageChange = async (newPage: number) => {
  currentPage.value = newPage
  await fetchUserGames()
}

onMounted(async () => {
  loading.value = true
  try {
    const user = await auth.getCurrentUser()
    currentUser.value = user
    
    if (user) {
      const [details, history] = await Promise.all([
        auth.getUserDetails(),
        auth.getRatingHistory(user.$id)
      ])
      userDetails.value = details
      ratingHistory.value = history
      await fetchUserGames()

      // If no history yet, push the current (initial) rating
      if (history.length === 0 && details?.rating) {
        ratingHistory.value.push({
          $id: 'initial',
          $createdAt: user.registration,
          rating: details.rating,
          userId: user.$id,
          ratingDeviation: 350,
          volatility: 0.06,
          $databaseId: '',
          $tableId: '',
          $sequence: 0,
          $updatedAt: user.registration,
          $permissions: []
        })
      }
    }
  } catch (e) {
    console.error('Failed to load profile data', e)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <NuxtLayout name="default">
    <template #header-left>
      <div class="flex items-center gap-4">
        <div class="text-2xl font-black tracking-tighter uppercase italic">
          Profile<span class="text-indigo-500">.</span>
        </div>
      </div>
    </template>

    <div v-if="loading" class="flex flex-col items-center justify-center min-h-[60vh]">
      <i class="pi pi-spin pi-spinner text-4xl text-indigo-500 mb-4"></i>
      <p class="text-app-text-muted opacity-40 font-bold uppercase tracking-widest text-[10px]">Syncing Data</p>
    </div>

    <div v-else class="animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <UserDashboard
        :user="currentUser"
        :user-details="userDetails"
        :user-games="userGames"
        :total-games="totalGames"
        :rating-history="ratingHistory"
        :is-own-profile="true"
        :current-page="currentPage"
        :items-per-page="itemsPerPage"
        @logout="handleLogout"
        @page-change="handlePageChange"
      />
    </div>
  </NuxtLayout>
</template>

<style scoped></style>
