<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import GameList from '@/components/GameList/GameList.vue'
import Board from '@/components/Board.vue'
import CreateGameDialog from '@/components/CreateGameDialog.vue'
import AuthenticatedView from '@/views/AuthenticatedView.vue'
import { games } from '@/api/games'
import { auth } from '@/api/authentication'
import { GameStatus } from '@/api/dto/GameStatus'

const router = useRouter()
const showCreateDialog = ref(false)
const featuredBoard = ref('.........'.repeat(9))
const featuredWinners = ref('.........')
const featuredAvailableMoves = ref('')
const featuredCurrentPlayer = ref<'X' | 'O'>('X')
const latestGameId = ref<string | null>(null)
const isMyTurn = ref(false)

onMounted(async () => {
  try {
    const [allGames, currentUser] = await Promise.all([
      games.listGames(),
      auth.getCurrentUser()
    ])
    
    if (allGames.length > 0) {
      // 1. Game that awaits your move
      let featured = allGames.find(g => 
        g.status === GameStatus.IN_PROGRESS && 
        currentUser && 
        g.nextPlayerId === currentUser.$id
      )

      if (featured) {
        isMyTurn.value = true
      } else {
        isMyTurn.value = false
        // 2. Most recently updated active game
        const activeGames = allGames.filter(g => 
          g.status === GameStatus.IN_PROGRESS || 
          g.status === GameStatus.WAITING_FOR_OPPONENT
        )
        if (activeGames.length > 0) {
          activeGames.sort((a, b) => new Date(b.$updatedAt).getTime() - new Date(a.$updatedAt).getTime())
          featured = activeGames[0]
        }
      }

      if (featured) {
        latestGameId.value = featured.$id
        featuredBoard.value = featured.board
        featuredWinners.value = featured.tileWinners
        featuredAvailableMoves.value = featured.availableMoves || ''
        featuredCurrentPlayer.value = featured.nextPlayerId === featured.oPlayerId ? 'O' : 'X'
      }
    }
  } catch (e) {
    console.error('Failed to load featured game', e)
  }
})

const goToFeatured = () => {
  if (latestGameId.value) {
    router.push(`/game/${latestGameId.value}`)
  }
}
</script>

<template>
  <AuthenticatedView>
    <DashboardLayout>
      <template #header-left>
        <div class="flex items-center gap-4">
          <div class="text-2xl font-black tracking-tighter uppercase italic">Browser<span class="text-indigo-500">.</span></div>
        </div>
      </template>

      <div class="space-y-20 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <!-- Hero Section -->
        <section class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-8">
            <div class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]">
               <span class="relative flex h-2 w-2">
                 <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                 <span class="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
               </span>
               <span>Live Operational Status</span>
            </div>
            
            <div class="space-y-2">
                <h1 class="text-6xl font-black text-white leading-[0.9] tracking-tighter uppercase italic">
                  Tactical <br/>
                  <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500">Superiority.</span>
                </h1>
                <p class="text-sm font-bold uppercase tracking-[0.3em] text-white/20 pt-4">Ultimate Strategy Redefined</p>
            </div>

            <p class="text-white/40 text-sm leading-relaxed max-w-md font-medium">
              Experience the depth of classic Tic-Tac-Toe reimagined as a fractal battle for board supremacy. Precision, logic, and cold-blooded tactics.
            </p>

            <div class="flex items-center gap-6 pt-4">
              <button @click="showCreateDialog = true" class="px-10 py-4 bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-slate-200 transition-all shadow-2xl shadow-white/5 active:scale-95">
                 Initiate Match
              </button>
              <button @click="router.push('/how-to-play')" class="px-10 py-4 glass border-white/[0.05] text-white/60 text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-white/5 transition-all">
                 Intel
              </button>
            </div>
          </div>

          <div class="flex justify-center lg:justify-end w-full">
             <div class="relative w-full max-w-[min(90vw,65vh)] lg:max-w-[70vh] cursor-pointer group" @click="goToFeatured">
                <!-- Decorative Glow -->
                <div class="absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full group-hover:bg-indigo-500/20 transition-all duration-1000"></div>
                
                <Board 
                  :board="featuredBoard" 
                  :tile-winners="featuredWinners" 
                  :available-moves="isMyTurn ? featuredAvailableMoves : ''"
                  :current-player="featuredCurrentPlayer"
                  :readonly="!isMyTurn"
                  size="lg" 
                />
             </div>
          </div>
        </section>

        <!-- Game List Section -->
        <section class="space-y-10">
          <div class="flex items-center gap-4">
              <h3 class="text-2xl font-black text-white tracking-tight uppercase italic text-white/80">Operational Field<span class="text-indigo-500">.</span></h3>
              <div class="h-[1px] flex-1 bg-white/5"></div>
          </div>
          <GameList />
        </section>
      </div>

      <CreateGameDialog :visible="showCreateDialog" @close="showCreateDialog = false" />
    </DashboardLayout>
  </AuthenticatedView>
</template>
