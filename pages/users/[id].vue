<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BaseButton from '~/components/Common/BaseButton.vue'
import { users, type User } from '~/api/users'
import { games } from '~/api/games'
import { auth, type RatingRecord } from '~/api/authentication'
import type { Game } from '~/api/dto/Game'
import UserDashboard from '~/components/User/UserDashboard.vue'

definePageMeta({
  layout: false
})

const route = useRoute()
const userId = route.params.id as string

const user = ref<User | null>(null)
const userGames = ref<Game[]>([])
const ratingHistory = ref<RatingRecord[]>([])
const loading = ref(true)

const currentPage = ref(1)
const totalGames = ref(0)
const itemsPerPage = 10

useSeoMeta({
  title: () => user.value ? `${user.value.name}'s Dashboard` : 'User Dashboard',
  description: () => user.value ? `View tactical records and match chronicles of ${user.value.name} on Tixo.` : 'View tactical records and match chronicles on Tixo.'
})

const fetchUserGames = async () => {
  if (!user.value) return
  try {
    const response = await games.listGames(
      itemsPerPage,
      (currentPage.value - 1) * itemsPerPage,
      { playerId: userId }
    )
    userGames.value = response.games
    totalGames.value = response.total
  } catch (e) {
    console.error('Failed to fetch user games', e)
  }
}

onMounted(async () => {
  loading.value = true
  try {
    const [userData, history] = await Promise.all([
      users.getUser(userId),
      auth.getRatingHistory(userId)
    ])

    if (userData) {
      user.value = userData
      ratingHistory.value = history
      await fetchUserGames()

      // If no history yet, push the initial rating if available
      if (history.length === 0 && userData.rating) {
        /* eslint-disable @typescript-eslint/no-explicit-any */
        ratingHistory.value.push({
          $id: 'initial',
          $createdAt: userData.registration,
          rating: userData.rating,
          userId: userData.$id,
          ratingDeviation: 350,
          volatility: 0.06,
          $databaseId: '',
          $tableId: '',
          $sequence: 0,
          $updatedAt: userData.registration,
          $permissions: []
        } as any)
        /* eslint-enable @typescript-eslint/no-explicit-any */
      }
    }
  } catch (e) {
    console.error('Failed to load user dashboard', e)
  } finally {
    loading.value = false
  }
})

const handlePageChange = async (newPage: number) => {
  currentPage.value = newPage
  await fetchUserGames()
}

const goBack = () => {
  window.history.back()
}
</script>

<template>
  <NuxtLayout name="default">
    <template #header-left>
      <div class="flex items-center space-x-4">
        <BaseButton
          @click="goBack"
          variant="ghost"
          size="sm"
          class="!w-10 !h-10 !p-0 text-app-text-muted hover:text-app-text transition-colors"
        >
          <i class="pi pi-arrow-left"></i>
        </BaseButton>
        <div class="text-2xl font-black tracking-tighter uppercase italic">
          Intelligence<span class="text-indigo-500">.</span>
        </div>
      </div>
    </template>

    <div v-if="loading" class="flex flex-col items-center justify-center min-h-[60vh]">
      <i class="pi pi-spin pi-spinner text-4xl text-indigo-500 mb-4"></i>
      <p class="text-app-text-muted opacity-40 font-bold uppercase tracking-widest text-[10px]">Syncing Data</p>
    </div>

    <div v-else-if="!user" class="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <i class="pi pi-exclamation-triangle text-4xl text-amber-500 mb-4"></i>
      <h2 class="text-2xl font-bold text-app-text mb-2">User Not Found</h2>
      <p class="text-app-text-muted opacity-40 mb-6">The intelligence record for this ID does not exist.</p>
      <BaseButton
        @click="goBack"
        variant="secondary"
        size="md"
      >
        Go Back
      </BaseButton>
    </div>

    <UserDashboard
      v-else
      :user="user"
      :user-details="user"
      :user-games="userGames"
      :total-games="totalGames"
      :rating-history="ratingHistory"
      :is-own-profile="false"
      :current-page="currentPage"
      :items-per-page="itemsPerPage"
      @page-change="handlePageChange"
    />
  </NuxtLayout>
</template>

<style scoped></style>
