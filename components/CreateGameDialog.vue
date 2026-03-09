<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import BaseButton from '~/components/Common/BaseButton.vue'

import { games } from '~/api/games'
import { users, type User } from '~/api/users'

const props = defineProps<{
  visible: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const router = useRouter()
const selectedSymbol = ref<'X' | 'O'>('X')
const gameMode = ref<'ONLINE' | 'LOCAL' | 'AI'>('ONLINE')
const selectedModel = ref<'M1' | 'M2' | 'M3' | 'M4' | 'M5'>('M3')
const requestedOpponentId = ref('')
const loading = ref(false)
const error = ref<string | null>(null)

const bots = ref<User[]>([])
const selectedBotId = ref<string | null>(null)
const loadingBots = ref(false)
const isValidatingUser = ref(false)
const isUserVerified = ref(false)

const canCreate = computed(() => {
  if (loading.value || isValidatingUser.value) return false
  if (gameMode.value === 'AI') {
    return !!selectedBotId.value && !loadingBots.value
  }
  if (gameMode.value === 'ONLINE') {
    return requestedOpponentId.value.trim().length > 0 && isUserVerified.value
  }
  return true
})

const fetchBots = async () => {
  loadingBots.value = true
  try {
    bots.value = await users.listBots()
    const firstBot = bots.value[0]
    if (firstBot) {
      selectedBotId.value = firstBot.$id
    }
  } catch (e) {
    console.error('Failed to fetch bots:', e)
  } finally {
    loadingBots.value = false
  }
}

watch(
  () => props.visible,
  (newVal) => {
    if (newVal && gameMode.value === 'AI') {
      fetchBots()
    }
  },
)

watch(gameMode, (newMode) => {
  if (newMode === 'AI' && props.visible && bots.value.length === 0) {
    fetchBots()
  }
})

let validationTimeout: ReturnType<typeof setTimeout> | null = null
watch(requestedOpponentId, (newId) => {
  if (gameMode.value !== 'ONLINE') return
  
  isUserVerified.value = false
  error.value = null
  
  if (validationTimeout) clearTimeout(validationTimeout)
  
  const id = newId.trim()
  if (!id) return

  isValidatingUser.value = true
  validationTimeout = setTimeout(async () => {
    try {
      const user = await users.getUser(id)
      if (user) {
        isUserVerified.value = true
      } else {
        error.value = 'Target user not found.'
      }
    } catch {
      error.value = 'Failed to verify user.'
    } finally {
      isValidatingUser.value = false
    }
  }, 500)
})

const handleCreate = async () => {
  loading.value = true
  error.value = null
  try {
    const isOnDevice = gameMode.value === 'LOCAL'
    let opponentId = gameMode.value === 'ONLINE' ? requestedOpponentId.value.trim() || null : null

    if (gameMode.value === 'AI') {
      if (selectedBotId.value) {
        opponentId = selectedBotId.value
      } else {
        // Fallback to old behavior if no bots fetched
        // If user chose X, AI is O. If user chose O, AI is X.
        opponentId =
          selectedSymbol.value === 'X'
            ? `AI_O_${selectedModel.value}`
            : `AI_X_${selectedModel.value}`
      }
    }

    const gameId = await games.createGame(selectedSymbol.value, isOnDevice, opponentId)
    if (gameId) {
      emit('close')
      await router.push(`/game/${gameId}`)
    } else {
      error.value = 'Failed to create game. Please try again.'
    }
  } catch (e) {
    console.error('Create game error:', e)
    error.value = 'An unexpected error occurred.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div v-if="visible" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
    <!-- Overlay -->
    <div @click="emit('close')" class="absolute inset-0 bg-void/80 backdrop-blur-md"></div>

    <!-- Dialog -->
    <div
      class="relative w-full max-w-md glass border-glass-border rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in duration-300"
    >
      <div class="p-8 space-y-8">
        <div class="text-center space-y-2">
          <h3 class="text-3xl font-black text-app-text tracking-tight">New Match</h3>
          <p class="text-app-text-muted opacity-60">Choose your side to begin the battle.</p>
        </div>

        <!-- Symbol Selection -->
        <div class="grid grid-cols-2 gap-4">
          <BaseButton
            @click="selectedSymbol = 'X'"
            :variant="selectedSymbol === 'X' ? 'primary' : 'secondary'"
            class="group relative aspect-square !rounded-2xl !border-2 flex flex-col items-center justify-center transition-all duration-300"
            :class="selectedSymbol === 'X' ? '!border-red-500 !bg-red-500/10' : ''"
          >
            <span
              class="text-6xl font-black mb-2 transition-transform group-hover:scale-110"
              :class="selectedSymbol === 'X' ? 'text-red-500' : 'text-app-text-muted opacity-20'"
              >X</span
            >
            <span
              class="text-[10px] font-black uppercase tracking-[0.2em]"
              :class="selectedSymbol === 'X' ? 'text-red-400' : 'text-app-text-muted opacity-40'"
              >Player 1</span
            >

            <div
              v-if="selectedSymbol === 'X'"
              class="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-in zoom-in"
            >
              <i class="pi pi-check text-[10px] text-white font-bold"></i>
            </div>
          </BaseButton>

          <BaseButton
            @click="selectedSymbol = 'O'"
            :variant="selectedSymbol === 'O' ? 'primary' : 'secondary'"
            class="group relative aspect-square !rounded-2xl !border-2 flex flex-col items-center justify-center transition-all duration-300"
            :class="selectedSymbol === 'O' ? '!border-blue-500 !bg-blue-500/10' : ''"
          >
            <span
              class="text-6xl font-black mb-2 transition-transform group-hover:scale-110"
              :class="selectedSymbol === 'O' ? 'text-blue-500' : 'text-app-text-muted opacity-20'"
              >O</span
            >
            <span
              class="text-[10px] font-black uppercase tracking-[0.2em]"
              :class="selectedSymbol === 'O' ? 'text-blue-400' : 'text-app-text-muted opacity-40'"
              >Player 2</span
            >

            <div
              v-if="selectedSymbol === 'O'"
              class="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-in zoom-in"
            >
              <i class="pi pi-check text-[10px] text-white font-bold"></i>
            </div>
          </BaseButton>
        </div>

        <!-- Game Mode Selection -->
        <div class="space-y-3">
          <label class="text-[10px] font-black uppercase tracking-[0.2em] text-app-text-muted opacity-40 block"
            >Game Mode</label
          >
          <div class="grid grid-cols-1 gap-3">
            <BaseButton
              @click="gameMode = 'ONLINE'"
              variant="secondary"
              class="!flex !items-center !space-x-4 !p-4 !rounded-2xl !border-2 !transition-all !duration-300 !text-left !h-auto"
              :class="gameMode === 'ONLINE' ? '!border-blue-500/50 !bg-blue-500/10' : ''"
            >
              <div
                class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                :class="
                  gameMode === 'ONLINE'
                    ? 'bg-blue-500/20 text-blue-500'
                    : 'bg-app-text/10 text-app-text-muted opacity-40'
                "
              >
                <i class="pi pi-globe text-xl"></i>
              </div>
              <div class="flex-1">
                <p
                  class="font-black text-[10px] uppercase tracking-[0.2em]"
                  :class="gameMode === 'ONLINE' ? 'text-blue-500' : 'text-app-text'"
                >
                  Online Multiplayer
                </p>
                <p class="text-[9px] uppercase font-black tracking-widest text-app-text-muted opacity-40">Play against someone else</p>
              </div>
            </BaseButton>

            <BaseButton
              @click="gameMode = 'AI'"
              variant="secondary"
              class="!flex !items-center !space-x-4 !p-4 !rounded-2xl !border-2 !transition-all !duration-300 !text-left !h-auto"
              :class="gameMode === 'AI' ? '!border-purple-500/50 !bg-purple-500/10' : ''"
            >
              <div
                class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                :class="
                  gameMode === 'AI'
                    ? 'bg-purple-500/20 text-purple-500'
                    : 'bg-app-text/10 text-app-text-muted opacity-40'
                "
              >
                <i class="pi pi-android text-xl"></i>
              </div>
              <div class="flex-1">
                <p
                  class="font-black text-[10px] uppercase tracking-[0.2em]"
                  :class="gameMode === 'AI' ? 'text-purple-500' : 'text-app-text'"
                >
                  Play vs AI
                </p>
                <p class="text-[9px] uppercase font-black tracking-widest text-app-text-muted opacity-40">Challenge the model</p>
              </div>
            </BaseButton>

            <BaseButton
              @click="gameMode = 'LOCAL'"
              variant="secondary"
              class="!flex !items-center !space-x-4 !p-4 !rounded-2xl !border-2 !transition-all !duration-300 !text-left !h-auto"
              :class="gameMode === 'LOCAL' ? '!border-amber-500/50 !bg-amber-500/10' : ''"
            >
              <div
                class="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                :class="
                  gameMode === 'LOCAL'
                    ? 'bg-amber-500/20 text-amber-500'
                    : 'bg-app-text/10 text-app-text-muted opacity-40'
                "
              >
                <i class="pi pi-mobile text-xl"></i>
              </div>
              <div class="flex-1">
                <p
                  class="font-black text-[10px] uppercase tracking-[0.2em]"
                  :class="gameMode === 'LOCAL' ? 'text-amber-500' : 'text-app-text'"
                >
                  Pass & Play
                </p>
                <p class="text-[9px] uppercase font-black tracking-widest text-app-text-muted opacity-40">Two players, one device</p>
              </div>
            </BaseButton>
          </div>
        </div>

        <!-- AI Bot Selection -->
        <div v-if="gameMode === 'AI'" class="space-y-3">
          <label class="text-[10px] font-black uppercase tracking-[0.2em] text-app-text-muted opacity-40 block"
            >Select Opponent AI</label
          >
          <div v-if="loadingBots" class="flex justify-center py-4">
            <i class="pi pi-spin pi-spinner text-purple-500"></i>
          </div>
          <div
            v-else-if="bots.length > 0"
            class="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar"
          >
            <BaseButton
              v-for="bot in bots"
              :key="bot.$id"
              @click="selectedBotId = bot.$id"
              variant="secondary"
              class="!w-full !flex !items-center !justify-between !p-3 !rounded-xl !border-2 !transition-all !duration-300 !text-left !h-auto"
              :class="selectedBotId === bot.$id ? '!border-purple-500/50 !bg-purple-500/10' : ''"
            >
              <div class="flex items-center space-x-3">
                <div
                  class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  :class="
                    selectedBotId === bot.$id
                      ? 'bg-purple-500/20 text-purple-500'
                      : 'bg-app-text/10 text-app-text-muted opacity-40'
                  "
                >
                  <i class="pi pi-android text-sm"></i>
                </div>
                <div>
                  <p
                    class="font-black text-[10px] uppercase tracking-widest"
                    :class="selectedBotId === bot.$id ? 'text-purple-400' : 'text-app-text'"
                  >
                    {{ bot.name }}
                  </p>
                  <p class="text-[8px] uppercase font-black text-app-text-muted opacity-40">
                    {{ bot.prefs?.modelName?.toLowerCase() || 'Heuristic' }} AI
                  </p>
                </div>
              </div>
              <div class="text-right">
                <p class="text-[10px] font-black text-purple-500">{{ bot.rating || 1500 }}</p>
                <p class="text-[8px] text-app-text-muted opacity-40 uppercase tracking-tighter">Rating</p>
              </div>
            </BaseButton>
          </div>
          <div v-else class="text-center py-4 text-app-text-muted opacity-40 text-xs">No AI bots available.</div>
        </div>

        <!-- Opponent Selection -->
        <div v-if="gameMode === 'ONLINE'" class="space-y-3">
          <label class="text-[10px] font-black uppercase tracking-[0.2em] text-app-text-muted opacity-40 block"
            >Invite Opponent</label
          >
          <div class="relative group">
            <i
              class="pi pi-user absolute left-4 top-1/2 -translate-y-1/2 text-app-text-muted opacity-40 group-focus-within:text-blue-500 transition-colors"
            ></i>
            <input
              v-model="requestedOpponentId"
              type="text"
              placeholder="Enter User ID"
              class="w-full bg-void border-2 border-glass-border rounded-2xl py-4 pl-12 pr-12 text-app-text text-sm font-bold placeholder:text-app-text-muted opacity-10 focus:opacity-100 focus:border-blue-500 outline-none transition-all"
              :class="{ 'border-green-500/50': isUserVerified, 'border-red-500/50': error && requestedOpponentId }"
            />
            <div class="absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
              <i v-if="isValidatingUser" class="pi pi-spin pi-spinner text-blue-500 text-xs"></i>
              <i v-else-if="isUserVerified" class="pi pi-check-circle text-green-500 text-xs"></i>
              <i v-else-if="error && requestedOpponentId" class="pi pi-times-circle text-red-500 text-xs"></i>
            </div>
          </div>
          <p class="text-[9px] text-app-text-muted opacity-40 font-medium">
            Authorized personnel only. Enter a valid User ID to initiate connection.
          </p>
        </div>

        <div
          v-if="error"
          class="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center"
        >
          {{ error }}
        </div>

        <div class="flex flex-col space-y-3">
          <BaseButton
            @click="handleCreate"
            :disabled="!canCreate"
            variant="primary"
            size="lg"
            block
            :loading="loading || isValidatingUser"
          >
            <span>{{ 
              loading ? 'Creating Match...' : 
              isValidatingUser ? 'Verifying User...' :
              (gameMode === 'AI' && !selectedBotId) ? 'Select AI Opponent' :
              (gameMode === 'ONLINE' && !requestedOpponentId.trim()) ? 'Enter Opponent ID' :
              (gameMode === 'ONLINE' && !isUserVerified) ? 'Invalid Opponent' :
              'Create Match' 
            }}</span>
          </BaseButton>

          <BaseButton
            @click="emit('close')"
            :disabled="loading"
            variant="secondary"
            size="lg"
            block
          >
            Cancel
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
