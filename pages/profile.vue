<script setup lang="ts">
import { ref, onMounted } from 'vue'

definePageMeta({
  middleware: 'auth',
  layout: false
})

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
        /* eslint-disable @typescript-eslint/no-explicit-any */
        ratingHistory.value.push({
          $id: 'initial',
          $createdAt: user.registration, // Changed from userData.registration
          rating: details.rating, // Changed from userData.rating
          userId: user.$id, // Changed from userData.$id
          ratingDeviation: 350,
          volatility: 0.06,
          $databaseId: '',
          $tableId: '',
          $sequence: 0,
          $updatedAt: user.registration, // Changed from userData.registration
          $permissions: []
        } as any)
        /* eslint-enable @typescript-eslint/no-explicit-any */
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
