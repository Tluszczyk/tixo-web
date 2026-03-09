<script setup lang="ts">
import BaseButton from '~/components/Common/BaseButton.vue'
import { ref, onMounted, computed } from 'vue'

definePageMeta({
  layout: false
})

import { users, type User } from '~/api/users'
import { games } from '~/api/games'
import { useAuthStore } from '~/stores/auth'

useSeoMeta({
  title: 'Personnel Directory',
  description: 'Connect with other players, view their tactical ratings, and challenge them to a match of Ultimate Tic-Tac-Toe.',
  ogTitle: 'Personnel Directory | Tixo',
  ogDescription: 'Connect with other players, view their tactical ratings, and challenge them to a match of Ultimate Tic-Tac-Toe.'
})

const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()
const userList = ref<User[]>([])
const searchId = ref('')
const isLoading = ref(false)
const requestingGame = ref<string | null>(null)

const currentPage = ref(1)
const totalUsers = ref(0)
const itemsPerPage = 25

const fetchUsers = async () => {
  isLoading.value = true
  try {
    const response = await users.listUsers(searchId.value, itemsPerPage, (currentPage.value - 1) * itemsPerPage)
    userList.value = response.users
    totalUsers.value = response.total
  } catch (error) {
    console.error('Failed to fetch users:', error)
  } finally {
    isLoading.value = false
  }
}

const totalPages = computed(() => Math.ceil(totalUsers.value / itemsPerPage))

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
    fetchUsers()
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
    fetchUsers()
  }
}

const requestGame = async (targetUserId: string) => {
  if (requestingGame.value) return
  if (!authStore.isLoggedIn) {
    authStore.openLoginModal(route.fullPath)
    return
  }
  requestingGame.value = targetUserId
  try {
    const gameId = await games.createGame('X', false, targetUserId)
    if (gameId) {
      await router.push(`/game/${gameId}`)
    }
  } catch (error) {
    console.error('Failed to request game:', error)
  } finally {
    requestingGame.value = null
  }
}

onMounted(() => {
  fetchUsers()
})

const onSearch = () => {
  currentPage.value = 1
  fetchUsers()
}
</script>

<template>
  <NuxtLayout name="default">
    <template #header-left>
      <div class="flex items-center gap-4">
        <div class="text-2xl font-black tracking-tighter uppercase italic">
          Personnel<span class="text-indigo-500">.</span>
        </div>
      </div>
    </template>

    <div class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <!-- Filter Section -->
      <section class="glass p-6 rounded-2xl border-glass-border space-y-4">
        <div
          class="flex items-center gap-3 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]"
        >
          <i class="pi pi-search text-xs"></i>
          <span>Identification Filter</span>
        </div>
        <div class="flex gap-4">
          <div class="relative group flex-1">
            <input
              v-model="searchId"
              type="text"
              placeholder="Search by User ID..."
              class="w-full bg-void border border-glass-border rounded-xl px-4 py-3 text-app-text placeholder:text-app-text-muted opacity-20 focus:opacity-100 focus:outline-none focus:border-indigo-500/50 transition-all text-sm font-medium"
              @keyup.enter="onSearch"
            />
            <div v-if="isLoading" class="absolute right-4 top-1/2 -translate-y-1/2">
              <i class="pi pi-spin pi-spinner text-indigo-500"></i>
            </div>
          </div>
          <BaseButton
            @click="onSearch"
            variant="primary"
            size="md"
            :loading="isLoading"
            :disabled="isLoading"
          >
            Query
          </BaseButton>
</div>
      </section>

      <!-- Users Table -->
      <section class="glass rounded-2xl border-glass-border overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full border-collapse">
            <thead>
              <tr class="text-left border-b border-glass-border bg-app-text/5">
                <th
                  class="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40"
                >
                  ID
                </th>
                <th
                  class="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40"
                >
                  Name
                </th>
                <th
                  class="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40"
                >
                  Rating
                </th>
                <th
                  class="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40"
                >
                  Email
                </th>
                <th
                  class="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40"
                >
                  Registered
                </th>
                <th
                  class="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40"
                >
                  Status
                </th>
                <th
                  class="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40 text-right"
                >
                  Operations
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-glass-border">
              <tr
                v-for="user in userList"
                :key="user.$id"
                class="hover:bg-app-text/5 transition-colors group"
              >
                <td class="px-6 py-4">
                  <NuxtLink
                    :to="`/users/${user.$id}`"
                    class="text-xs font-mono text-indigo-400/80 hover:text-indigo-400 transition-colors"
                  >
                    {{ user.$id }}
                  </NuxtLink>
                </td>
                <td class="px-6 py-4">
                  <NuxtLink
                    :to="`/users/${user.$id}`"
                    class="text-sm font-bold text-app-text hover:text-indigo-400 transition-colors"
                  >
                    {{ user.name || 'Anonymous' }}
                  </NuxtLink>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-2">
                    <div
                      class="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]"
                    ></div>
                    <span class="text-sm font-black text-indigo-400 mono">
                      {{ user.rating || 1500 }}
                    </span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span class="text-xs text-app-text-muted opacity-40">
                    {{ user.email }}
                  </span>
                </td>
                <td class="px-6 py-4">
                  <span class="text-xs text-app-text-muted opacity-40">
                    {{ new Date(user.registration).toLocaleDateString() }}
                  </span>
                </td>
                <td class="px-6 py-4">
                  <span
                    :class="[
                      'inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest',
                      user.status
                        ? 'bg-green-500/10 text-green-500'
                        : 'bg-red-500/10 text-red-500',
                    ]"
                  >
                    {{ user.status ? 'Active' : 'Disabled' }}
                  </span>
                </td>
                <td class="px-6 py-4 text-right h-full">
                  <div
                    class="flex justify-end items-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <BaseButton
                      @click="requestGame(user.$id)"
                      :disabled="!!requestingGame"
                      :loading="requestingGame === user.$id"
                      variant="primary"
                      size="sm"
                      icon-left="pi pi-bolt"
                      class="px-4"
                    >
                      Request Match
                    </BaseButton>
                  </div>
                </td>
              </tr>
              <tr v-if="userList.length === 0 && !isLoading">
                <td colspan="6" class="px-6 py-12 text-center">
                  <div class="flex flex-col items-center gap-2 text-app-text-muted opacity-20">
                    <i class="pi pi-users text-3xl mb-2"></i>
                    <span class="text-xs font-black uppercase tracking-widest"
                      >No Personnel Found</span
                    >
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination Controls -->
        <div v-if="totalPages > 1" class="px-6 py-4 bg-app-text/5 border-t border-glass-border flex items-center justify-between">
          <div class="text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40">
            Scanning records {{ (currentPage - 1) * itemsPerPage + 1 }} - {{ Math.min(currentPage * itemsPerPage, totalUsers) }} OF {{ totalUsers }}
          </div>
          <div class="flex items-center gap-2">
            <BaseButton
              @click="prevPage"
              :disabled="currentPage === 1 || isLoading"
              variant="secondary"
              size="sm"
              class="w-10 h-10"
              icon-left="pi pi-chevron-left"
            />
            <div class="px-4 py-2 rounded-lg bg-void border border-glass-border text-[10px] font-black text-app-text mono">
              {{ currentPage }} / {{ totalPages }}
            </div>
            <BaseButton
              @click="nextPage"
              :disabled="currentPage === totalPages || isLoading"
              variant="secondary"
              size="sm"
              class="w-10 h-10"
              icon-left="pi pi-chevron-right"
            />
          </div>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.glass {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
</style>
