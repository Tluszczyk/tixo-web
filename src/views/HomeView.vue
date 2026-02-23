<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import GameList from '@/components/GameList/GameList.vue'
import Board from '@/components/Board.vue'
import CreateGameDialog from '@/components/CreateGameDialog.vue'
import AuthenticatedView from '@/views/AuthenticatedView.vue'
import { games } from '@/api/games'
import type {Game} from "@/api/dto/Game.ts";

const router = useRouter()
const showCreateDialog = ref(false)
const featuredBoard = ref('X.O...X..'.repeat(9))
const featuredWinners = ref('X.O......')
const latestGameId = ref<string | null>(null)

onMounted(async () => {
  try {
    const allGames = await games.listGames()
    if (allGames.length > 0) {
      const active = allGames[0] ?? null;
      latestGameId.value = active?.$id ?? null;
      featuredBoard.value = active?.board ?? ".........".repeat(9);
      featuredWinners.value = active?.tileWinners ?? ".........";
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
        <div class="flex items-center space-x-2">
          <i class="pi pi-compass text-blue-500 text-xl animate-pulse"></i>
          <span class="text-xl font-bold text-slate-100 tracking-tight">Game Browser</span>
        </div>
      </template>

      <template #header-right>
        <button class="relative w-10 h-10 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
          <i class="pi pi-bell text-xl"></i>
          <span class="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full"></span>
        </button>
      </template>

      <div class="space-y-12 pb-12">
        <!-- Hero Section with Board -->
        <section class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <div class="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
               <span class="relative flex h-2 w-2">
                 <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                 <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
               </span>
               <span>Featured Match</span>
            </div>
            <h1 class="text-5xl font-extrabold text-white leading-tight tracking-tighter">
              The Ultimate Strategy <br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Tic-Tac-Tactics.</span>
            </h1>
            <p class="text-lg text-slate-400 max-w-lg leading-relaxed">
              Experience the depth of classic Tic-Tac-Toe reimagined. Think three moves ahead in this fractal battle for board supremacy.
            </p>
            <div class="flex items-center space-x-4 pt-4">
              <button @click="showCreateDialog = true" class="px-8 py-4 rounded-2xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/20 active:scale-[0.98]">
                 {{ latestGameId ? 'Jump into Match' : 'Play Quick Game' }}
              </button>
              <button @click="router.push('/how-to-play')" class="px-8 py-4 rounded-2xl bg-slate-800 border border-slate-700 text-slate-200 font-bold hover:bg-slate-700 transition-all active:scale-[0.98]">
                 How to Play
              </button>
            </div>
          </div>

          <div class="flex justify-center lg:justify-end cursor-pointer" @click="goToFeatured">
             <Board :board="featuredBoard" :tile-winners="featuredWinners" readonly />
          </div>
        </section>

        <!-- Game List Section -->
        <section>
          <GameList />
        </section>
      </div>

      <CreateGameDialog :visible="showCreateDialog" @close="showCreateDialog = false" />
    </DashboardLayout>
  </AuthenticatedView>
</template>

<style lang="css">
</style>
