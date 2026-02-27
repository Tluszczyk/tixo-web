<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { users, type User } from '@/api/users'
import { games } from '@/api/games'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import AuthenticatedView from '@/views/AuthenticatedView.vue'

const router = useRouter()
const userList = ref<User[]>([])
const searchId = ref('')
const isLoading = ref(false)
const requestingGame = ref<string | null>(null)

const fetchUsers = async () => {
  isLoading.value = true
  try {
    userList.value = await users.listUsers(searchId.value)
  } catch (error) {
    console.error('Failed to fetch users:', error)
  } finally {
    isLoading.value = false
  }
}

const requestGame = async (targetUserId: string) => {
  if (requestingGame.value) return
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
  fetchUsers()
}
</script>

<template>
  <AuthenticatedView>
    <DashboardLayout>
      <template #header-left>
        <div class="flex items-center gap-4">
          <div class="text-2xl font-black tracking-tighter uppercase italic">
            Personnel<span class="text-indigo-500">.</span>
          </div>
        </div>
      </template>

      <div class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <!-- Filter Section -->
        <section class="glass p-6 rounded-2xl border-white/5 space-y-4">
          <div class="flex items-center gap-3 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]">
            <i class="pi pi-search text-xs"></i>
            <span>Identification Filter</span>
          </div>
          <div class="flex gap-4">
            <div class="relative group flex-1">
              <input
                v-model="searchId"
                type="text"
                placeholder="Search by User ID..."
                class="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 transition-all text-sm font-medium group-hover:border-white/20"
                @keyup.enter="onSearch"
              />
              <div
                v-if="isLoading"
                class="absolute right-4 top-1/2 -translate-y-1/2"
              >
                <i class="pi pi-spin pi-spinner text-indigo-500"></i>
              </div>
            </div>
            <button
              @click="onSearch"
              class="px-8 py-3 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-slate-200 transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
              :disabled="isLoading"
            >
              Query
            </button>
          </div>
        </section>

        <!-- Users Table -->
        <section class="glass rounded-2xl border-white/5 overflow-hidden">
          <div class="overflow-x-auto">
            <table class="w-full border-collapse">
              <thead>
                <tr class="text-left border-b border-white/5 bg-white/2">
                  <th class="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-white/40">ID</th>
                  <th class="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-white/40">Name</th>
                  <th class="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-white/40">Rating</th>
                  <th class="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-white/40">Email</th>
                  <th class="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-white/40">Registered</th>
                  <th class="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-white/40">Status</th>
                  <th class="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-white/40 text-right">Operations</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-white/5">
                <tr
                  v-for="user in userList"
                  :key="user.$id"
                  class="hover:bg-white/2 transition-colors group"
                >
                  <td class="px-6 py-4">
                    <span class="text-xs font-mono text-indigo-400/80 group-hover:text-indigo-400 transition-colors">
                      {{ user.$id }}
                    </span>
                  </td>
                  <td class="px-6 py-4">
                    <span class="text-sm font-bold text-white/80 group-hover:text-white transition-colors">
                      {{ user.name || 'Anonymous' }}
                    </span>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex items-center gap-2">
                      <div class="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]"></div>
                      <span class="text-sm font-black text-indigo-400 mono">
                        {{ user.rating || 1500 }}
                      </span>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <span class="text-xs text-white/40">
                      {{ user.email }}
                    </span>
                  </td>
                  <td class="px-6 py-4">
                    <span class="text-xs text-white/40">
                      {{ new Date(user.registration).toLocaleDateString() }}
                    </span>
                  </td>
                  <td class="px-6 py-4">
                    <span
                      :class="[
                        'inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest',
                        user.status ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
                      ]"
                    >
                      {{ user.status ? 'Active' : 'Disabled' }}
                    </span>
                  </td>
                  <td class="px-6 py-4 text-right h-full">
                    <div class="flex justify-end items-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        @click="requestGame(user.$id)"
                        :disabled="!!requestingGame"
                        class="px-4 py-2 bg-indigo-500 text-white text-[9px] font-black uppercase tracking-[0.2em] rounded-lg hover:bg-indigo-400 transition-all flex items-center gap-2"
                      >
                        <i v-if="requestingGame === user.$id" class="pi pi-spin pi-spinner"></i>
                        <i v-else class="pi pi-bolt"></i>
                        Request Match
                      </button>
                    </div>
                  </td>
                </tr>
                <tr v-if="userList.length === 0 && !isLoading">
                  <td colspan="6" class="px-6 py-12 text-center">
                    <div class="flex flex-col items-center gap-2 text-white/20">
                      <i class="pi pi-users text-3xl mb-2"></i>
                      <span class="text-xs font-black uppercase tracking-widest">No Personnel Found</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </DashboardLayout>
  </AuthenticatedView>
</template>

<style scoped>
.glass {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
</style>
