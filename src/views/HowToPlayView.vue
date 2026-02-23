<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import DashboardLayout from '@/layouts/DashboardLayout.vue'
import Board from '@/components/Board.vue'

const router = useRouter()

interface TutorialStep {
  title: string
  description: string
  board: string
  tileWinners: string
  highlightedCell: number | null
  highlightedTile: number | null
  note: string | null
}

const steps: TutorialStep[] = [
  {
    title: 'The Board',
    description: `Ultimate Tic-Tac-Toe is played on a 3x3 grid of 9 smaller Tic-Tac-Toe boards. That's 81 squares in total!`,
    board: '.'.repeat(81),
    tileWinners: '.'.repeat(9),
    highlightedCell: null,
    highlightedTile: null,
    note: null
  },
  {
    title: 'Your First Move',
    description: `The first player (X) can place their mark anywhere on the board. Let's say they pick the center-right square of the top-left board.`,
    board: '.....X...'.padEnd(81, '.'),
    tileWinners: '.'.repeat(9),
    highlightedCell: 5,
    highlightedTile: null,
    note: null
  },
  {
    title: 'The Movement Rule',
    description: `Here's the twist: whichever square you pick in a small board, your opponent must play in the corresponding small board on the big grid. Since X played in the center-right square, O must now play somewhere in the center-right small board.`,
    board: '.....X...'.padEnd(81, '.'),
    tileWinners: '.'.repeat(9),
    highlightedCell: 5,
    highlightedTile: 5,
    note: null
  },
  {
    title: 'Winning a Local Board',
    description: `When you get three in a row in a small board, you win that board! It then counts as a giant X or O for the main game.`,
    board: ('XXX......' + '.'.repeat(72)),
    tileWinners: 'X........',
    highlightedCell: null,
    highlightedTile: null,
    note: null
  },
  {
    title: 'Winning the Game',
    description: `To win the overall game, you need to win three small boards in a row, column, or diagonal on the large 3x3 grid.`,
    board: ('XXX......'.repeat(3) + '.'.repeat(54)),
    tileWinners: 'XXX......',
    highlightedCell: null,
    highlightedTile: null,
    note: null
  },
  {
    title: 'The Free Choice',
    description: `If you are sent to a board that is already won or completely full, you get a "Free Choice" and can play in any available square on any board!`,
    board: ('XXX......' + '.'.repeat(72)),
    tileWinners: 'X........',
    highlightedCell: null,
    highlightedTile: null,
    note: `Strategy Tip: Sometimes it's better to send your opponent to a board where they can't do much, or even to a board you've already won to give them a free choice if you have a better move elsewhere!`
  }
]

const currentStep = ref(0)
const step = computed(() => steps[currentStep.value] as TutorialStep)

const nextStep = () => {
  if (currentStep.value < steps.length - 1) {
    currentStep.value++
  }
}

const prevStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}
</script>

<template>
  <DashboardLayout>
    <template #header-left>
      <div class="flex items-center space-x-4">
        <button @click="router.push('/')" class="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors">
          <i class="pi pi-arrow-left"></i>
        </button>
        <div class="flex items-center space-x-2">
          <i class="pi pi-book text-blue-500 text-xl"></i>
          <span class="text-xl font-bold text-slate-100 tracking-tight">How to Play</span>
        </div>
      </div>
    </template>

    <div class="max-w-6xl mx-auto py-8 px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" v-if="step">
        <!-- Visual Side -->
        <div class="relative group">
          <div class="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-2xl rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <div class="relative">
            <Board 
              :board="step.board" 
              :tile-winners="step.tileWinners" 
              :selected-cell="step.highlightedCell"
              readonly 
            />
            
            <!-- Tile Highlight Overlay (for Step 3) -->
            <div v-if="step.highlightedTile !== null" 
                 class="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-3 p-4 pointer-events-none">
              <div v-for="i in 9" :key="i"
                   :class="[
                     'rounded-xl border-4 transition-all duration-500',
                     step.highlightedTile === (i-1) ? 'border-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.4)] animate-pulse' : 'border-transparent'
                   ]">
              </div>
            </div>
          </div>
        </div>

        <!-- Text Side -->
        <div class="space-y-8">
          <div class="space-y-4">
            <div class="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
              Step {{ currentStep + 1 }} of {{ steps.length }}
            </div>
            <h2 class="text-4xl font-extrabold text-white tracking-tight">
              {{ step.title }}
            </h2>
            <p class="text-xl text-slate-400 leading-relaxed">
              {{ step.description }}
            </p>
            <div v-if="step.note" class="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl">
              <p class="text-indigo-300 text-sm italic">
                <i class="pi pi-info-circle mr-2"></i>
                {{ step.note }}
              </p>
            </div>
          </div>

          <div class="flex items-center space-x-4">
            <button 
              @click="prevStep" 
              :disabled="currentStep === 0"
              class="flex-1 px-6 py-4 rounded-2xl bg-slate-800 border border-slate-700 text-slate-200 font-bold hover:bg-slate-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Back
            </button>
            <button 
              @click="nextStep" 
              v-if="currentStep < steps.length - 1"
              class="flex-[2] px-6 py-4 rounded-2xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/20 active:scale-[0.98]"
            >
              Next Step
            </button>
            <button 
              @click="router.push('/')" 
              v-else
              class="flex-[2] px-6 py-4 rounded-2xl bg-green-600 text-white font-bold hover:bg-green-500 transition-all shadow-xl shadow-green-900/20 active:scale-[0.98]"
            >
              Got it, let's play!
            </button>
          </div>

          <!-- Progress Dots -->
          <div class="flex justify-center space-x-2">
            <div 
              v-for="(_, i) in steps" 
              :key="i"
              class="w-2 h-2 rounded-full transition-all duration-300"
              :class="i === currentStep ? 'w-8 bg-blue-500' : 'bg-slate-700'"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<style scoped>
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
