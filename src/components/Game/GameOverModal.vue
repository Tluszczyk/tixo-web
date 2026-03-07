<script setup lang="ts">
import { useRouter } from 'vue-router'

defineProps<{
  show: boolean
  matchResult: string
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'create-new'): void
}>()

const router = useRouter()
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="show"
      class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-void/90 backdrop-blur-md"
    >
      <div
        class="relative w-full max-w-lg glass border-glass-border rounded-3xl p-8 shadow-2xl overflow-hidden group"
      >
        <!-- Modal Background Decorations -->
        <div
          class="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/20 blur-3xl rounded-full"
        ></div>
        <div
          class="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-600/20 blur-3xl rounded-full"
        ></div>

        <!-- Close Button -->
        <button
          @click="emit('close')"
          class="absolute top-4 right-4 p-1.5 text-app-text-muted hover:text-app-text hover:bg-glass-white rounded-lg transition-all z-10"
        >
          <i class="pi pi-times text-sm"></i>
        </button>

        <div class="relative z-10 flex flex-col items-center text-center">
          <!-- Icon Container -->
          <div
            :class="[
              'w-24 h-24 rounded-3xl flex items-center justify-center mb-6 shadow-2xl',
              matchResult === 'WIN'
                ? 'bg-green-500 shadow-green-500/20'
                : matchResult === 'LOSS'
                  ? 'bg-red-500 shadow-red-500/20'
                  : matchResult === 'CANCELLED'
                    ? 'bg-slate-500 shadow-slate-500/20'
                    : 'bg-blue-500 shadow-blue-500/20',
            ]"
          >
            <i
              :class="[
                'text-5xl text-white',
                matchResult === 'WIN'
                  ? 'pi pi-trophy'
                  : matchResult === 'LOSS'
                    ? 'pi pi-times-circle'
                    : matchResult === 'CANCELLED'
                      ? 'pi pi-ban'
                      : 'pi pi-arrows-h',
              ]"
            ></i>
          </div>

          <h2 class="text-4xl font-black text-app-text mb-2 tracking-tight">
            {{
              matchResult === 'WIN'
                ? 'YOU WON!'
                : matchResult === 'LOSS'
                  ? 'YOU LOST!'
                  : matchResult === 'CANCELLED'
                    ? 'MATCH CANCELLED'
                    : "IT'S A DRAW!"
            }}
          </h2>
          <p class="text-app-text-muted opacity-60 font-medium mb-10 max-w-[280px]">
            {{
              matchResult === 'WIN'
                ? 'Exceptional performance! You have conquered the grid.'
                : matchResult === 'LOSS'
                  ? 'A valiant effort! Analyze the moves and try again.'
                  : matchResult === 'CANCELLED'
                    ? 'The match was ended before enough moves were made to determine a winner.'
                    : 'A perfectly balanced match. Neither side would yield.'
            }}
          </p>

          <!-- Actions -->
          <div class="w-full space-y-3">
            <button
              @click="emit('create-new')"
              class="w-full py-4 bg-app-text text-void font-black rounded-2xl hover:opacity-90 transition-all flex items-center justify-center space-x-3 shadow-xl active:scale-95"
            >
              <i class="pi pi-plus-circle font-bold"></i>
              <span>Create New Game</span>
            </button>
            <button
              @click="emit('close')"
              class="w-full py-4 bg-glass-white text-app-text font-bold rounded-2xl hover:bg-indigo-500/20 transition-all flex items-center justify-center space-x-3 active:scale-95 border border-glass-border"
            >
              <i class="pi pi-eye"></i>
              <span>View Board</span>
            </button>
            <button
              @click="router.push('/')"
              class="w-full py-4 bg-glass-white text-app-text-muted font-bold rounded-2xl hover:bg-glass-white hover:text-app-text transition-all active:scale-95 border border-glass-border"
            >
              Back to Main Page
            </button>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
