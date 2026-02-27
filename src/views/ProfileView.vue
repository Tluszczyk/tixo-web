<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import AuthenticatedView from '@/views/AuthenticatedView.vue'
import GameListItem from '@/components/GameList/GameListItem.vue'
import { auth } from '@/api/authentication'
import { games } from '@/api/games'
import type { Game } from '@/api/dto/Game'
import type { Models } from 'appwrite'

const router = useRouter()
const currentUser = ref<Models.User<Models.Preferences> | null>(null)
const userDetails = ref<any>(null)
const allGames = ref<Game[]>([])
const loading = ref(true)

const userGames = computed(() => {
  if (!currentUser.value) return []
  return allGames.value.filter(g =>
    g.xPlayerId === currentUser.value?.$id ||
    g.oPlayerId === currentUser.value?.$id ||
    g.creatorId === currentUser.value?.$id
  ).sort((a, b) => new Date(b.$createdAt).getTime() - new Date(a.$createdAt).getTime())
})

const stats = computed(() => {
  if (!currentUser.value) return { total: 0, wins: 0, losses: 0, ties: 0 }
  const myGames = userGames.value.filter(g => g.status === 'FINISHED')
  let wins = 0, losses = 0, ties = 0

  myGames.forEach(g => {
    if (g.winner === 'D' || g.winner === 'TIE') ties++
    else {
      const mySymbol = g.xPlayerId === currentUser.value?.$id ? 'X' : 'O'
      if (g.winner === mySymbol) wins++
      else losses++
    }
  })

  return { total: userGames.value.length, wins, losses, ties }
})

const handleLogout = async () => {
  const success = await auth.logout()
  if (success) {
    router.push('/login')
  }
}

onMounted(async () => {
  loading.value = true
  try {
    const [user, details, gamesList] = await Promise.all([
      auth.getCurrentUser(),
      auth.getUserDetails(),
      games.listGames()
    ])
    currentUser.value = user
    userDetails.value = details
    allGames.value = gamesList
  } catch (e) {
    console.error('Failed to load profile data', e)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <AuthenticatedView>
    <DashboardLayout>
      <template #header-left>
        <div class="flex items-center gap-4">
          <div class="text-2xl font-black tracking-tighter uppercase italic">Profile<span class="text-indigo-500">.</span></div>
        </div>
      </template>

      <div v-if="loading" class="flex flex-col items-center justify-center min-h-[60vh]">
        <i class="pi pi-spin pi-spinner text-4xl text-indigo-500 mb-4"></i>
        <p class="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Syncing Data</p>
      </div>

      <div v-else class="space-y-12 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <!-- Profile Header/Stats -->
        <section class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-1 glass border-white/5 rounded-4xl p-10 flex flex-col items-center text-center space-y-8">
            <div class="w-32 h-32 rounded-[2.5rem] glass flex items-center justify-center border-indigo-500/30 shadow-2xl shadow-indigo-500/10">
              <i class="pi pi-user text-5xl text-indigo-500"></i>
            </div>

            <div class="space-y-2">
              <h2 class="text-3xl font-black text-white tracking-tight leading-none">{{ currentUser?.name || 'Player' }}</h2>
              <p class="text-white/30 text-xs font-bold uppercase tracking-[0.2em]">{{ currentUser?.email }}</p>
            </div>

            <div class="w-full space-y-3">
               <div class="flex items-center justify-between p-4 rounded-2xl glass border-indigo-500/10 bg-indigo-500/5">
                  <span class="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Glicko-2 Rating</span>
                  <span class="text-xl font-black text-white mono">{{ userDetails?.rating || 1500 }}</span>
               </div>
               <div class="flex items-center justify-between p-4 rounded-2xl glass border-white/[0.02]">
                  <span class="text-[10px] font-black text-white/20 uppercase tracking-widest">Joined</span>
                  <span class="text-xs font-bold text-white/60">{{ new Date(currentUser?.registration || '').toLocaleDateString() }}</span>
               </div>
               <div class="flex items-center justify-between p-4 rounded-2xl glass border-white/[0.02]">
                  <span class="text-[10px] font-black text-white/20 uppercase tracking-widest">ID</span>
                  <span class="text-[10px] mono text-white/30 truncate ml-4">{{ currentUser?.$id }}</span>
               </div>
            </div>

            <button @click="handleLogout" class="w-full py-4 rounded-xl glass border-red-500/20 text-[10px] font-bold uppercase tracking-[0.2em] text-red-400 hover:bg-red-500/10 transition-all flex items-center justify-center gap-3">
                <i class="pi pi-sign-out"></i>
                <span>Resign Session</span>
            </button>
          </div>

          <div class="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-6">
             <div class="col-span-2 bg-gradient-to-br from-indigo-600 to-blue-700 rounded-[2rem] p-10 text-white relative overflow-hidden group shadow-2xl shadow-indigo-500/20">
                <div class="absolute -right-8 -bottom-8 text-white/10 text-9xl rotate-12 group-hover:scale-110 transition-transform duration-1000">
                  <i class="pi pi-bolt"></i>
                </div>
                <h4 class="text-[11px] font-black uppercase tracking-[0.3em] mb-4 relative z-10 text-white/60">Total Encounters</h4>
                <p class="text-7xl font-black relative z-10 tracking-tighter">{{ stats.total }}</p>
                <div class="mt-8 flex items-center gap-2 relative z-10">
                    <div class="h-1 w-12 bg-white rounded-full"></div>
                    <span class="text-[10px] font-black uppercase tracking-widest text-white/40">Active Records</span>
                </div>
             </div>

             <div class="glass border-white/[0.05] rounded-[2rem] p-8 flex flex-col justify-between group hover:border-green-500/30 transition-all duration-500">
                <div class="w-12 h-12 rounded-2xl glass border-green-500/20 flex items-center justify-center text-green-500 mb-4 group-hover:scale-110 transition-transform">
                  <i class="pi pi-trophy text-xl"></i>
                </div>
                <div>
                  <p class="text-4xl font-black text-white tracking-tighter">{{ stats.wins }}</p>
                  <p class="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">Victories</p>
                </div>
             </div>

             <div class="glass border-white/[0.05] rounded-[2rem] p-8 flex flex-col justify-between group hover:border-red-500/30 transition-all duration-500">
                <div class="w-12 h-12 rounded-2xl glass border-red-500/20 flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 transition-transform">
                  <i class="pi pi-times text-xl"></i>
                </div>
                <div>
                  <p class="text-4xl font-black text-white tracking-tighter">{{ stats.losses }}</p>
                  <p class="text-[10px] font-black text-white/20 uppercase tracking-[0.2em]">Defeats</p>
                </div>
             </div>

             <div class="md:col-span-4 glass border-white/[0.05] rounded-[2.5rem] p-10 flex items-center justify-between overflow-hidden relative group">
                <div class="flex items-center gap-8 relative z-10">
                   <div class="w-20 h-20 rounded-3xl glass border-indigo-500/20 flex items-center justify-center text-indigo-500 shadow-2xl shadow-indigo-500/10">
                      <i class="pi pi-percentage text-3xl"></i>
                   </div>
                   <div>
                      <h4 class="text-2xl font-black text-white tracking-tight">Tactical Precision</h4>
                      <p class="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 mt-1">Weighted Win Rate</p>
                   </div>
                </div>
                <div class="text-right relative z-10">
                   <p class="text-7xl font-black text-white tracking-tighter">{{ stats.total > 0 ? Math.round((stats.wins / (stats.wins + stats.losses || 1)) * 100) : 0 }}<span class="text-3xl text-white/20">%</span></p>
                </div>
             </div>
          </div>
        </section>

        <!-- Game History -->
        <section class="space-y-8">
          <div class="flex items-center justify-between px-2">
            <div class="flex items-center gap-4">
                <h3 class="text-2xl font-black text-white tracking-tight uppercase italic">Chronicles<span class="text-indigo-500">.</span></h3>
                <div class="h-4 w-[1px] bg-white/10"></div>
                <span class="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">{{ userGames.length }} Matches</span>
            </div>
          </div>

          <div v-if="userGames.length === 0" class="glass border-white/[0.05] rounded-[2.5rem] p-20 flex flex-col items-center text-center space-y-6">
             <div class="w-24 h-24 rounded-full glass border-white/5 flex items-center justify-center text-white/10">
                <i class="pi pi-table text-5xl"></i>
             </div>
             <div class="space-y-2">
                <h4 class="text-xl font-black text-white">The board is silent.</h4>
                <p class="text-white/20 text-[10px] font-black uppercase tracking-[0.2em] max-w-xs leading-relaxed">Your tactical history is waiting to be written.</p>
             </div>
             <button @click="router.push('/')" class="px-10 py-4 glass border-indigo-500/30 text-indigo-400 font-black uppercase tracking-[0.2em] text-[10px] rounded-xl hover:bg-indigo-500 hover:text-white transition-all">
                Initiate Match
             </button>
          </div>

          <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GameListItem v-for="game in userGames" :key="game.$id" :game="game" />
          </div>
        </section>
      </div>
    </DashboardLayout>
  </AuthenticatedView>
</template>
