<script setup lang="ts">
import BaseButton from '~/components/Common/BaseButton.vue'
import { ref, watch } from 'vue'
import { GameStatus } from '~/api/dto/GameStatus'

const props = defineProps<{
  visible: boolean
  initialFilters: FilterState
  currentUserId?: string
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'apply', filters: FilterState): void
}>()

export interface FilterState {
  playerId: string
  creatorId: string
  myGamesOnly: boolean
  statuses: string[]
  isOnDevice: boolean | null
  dateRange: 'all' | 'today' | 'week' | 'month'
  sortBy: 'createdAt' | 'updatedAt'
  sortOrder: 'asc' | 'desc'
}

const filters = ref<FilterState>({ ...props.initialFilters })

watch(
  () => props.initialFilters,
  (newVal) => {
    filters.value = { ...newVal }
  },
  { deep: true },
)

const toggleStatus = (status: string) => {
  const index = filters.value.statuses.indexOf(status)
  if (index === -1) {
    filters.value.statuses.push(status)
  } else {
    filters.value.statuses.splice(index, 1)
  }
}

const applyFilters = () => {
  emit('apply', filters.value)
  emit('close')
}

const resetFilters = () => {
  filters.value = {
    playerId: '',
    creatorId: '',
    myGamesOnly: false,
    statuses: [],
    isOnDevice: null,
    dateRange: 'all',
    sortBy: 'createdAt',
    sortOrder: 'desc',
  }
}
</script>

<template>
  <div v-if="visible" class="fixed inset-0 z-[150] flex items-center justify-center p-4">
    <div @click="emit('close')" class="absolute inset-0 bg-void/90 backdrop-blur-md"></div>

    <div
      class="relative w-full max-w-2xl glass border-glass-border rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in duration-300"
    >
      <div class="p-8 lg:p-12 space-y-10">
        <div class="flex items-center justify-between">
          <div class="space-y-1">
            <h3 class="text-3xl font-black text-app-text uppercase italic">
              Filters<span class="text-indigo-500">.</span>
            </h3>
            <p class="text-xs font-black uppercase tracking-[0.2em] text-app-text-muted opacity-20">
              Refine Operational Data
            </p>
          </div>
          <BaseButton
            size="sm"
            variant="ghost"
            @click="resetFilters"
            class="text-indigo-500 hover:text-app-text"
          >
            Reset All
          </BaseButton>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Player ID -->
          <div class="space-y-3">
            <label class="text-xs font-black uppercase tracking-widest text-app-text-muted opacity-30 ml-2"
              >Player Identifier</label
            >
            <input
              v-model="filters.playerId"
              type="text"
              placeholder="User ID..."
              class="w-full px-6 py-4 rounded-2xl glass border-glass-border text-sm text-app-text placeholder:text-app-text-muted opacity-10 focus:opacity-100 focus:outline-none focus:border-indigo-500/30 transition-all mono"
            />
          </div>

          <!-- Creator ID -->
          <div class="space-y-3">
            <label class="text-xs font-black uppercase tracking-widest text-app-text-muted opacity-30 ml-2"
              >Creator Identifier</label
            >
            <input
              v-model="filters.creatorId"
              type="text"
              placeholder="Creator ID..."
              class="w-full px-6 py-4 rounded-2xl glass border-glass-border text-sm text-app-text placeholder:text-app-text-muted opacity-10 focus:opacity-100 focus:outline-none focus:border-indigo-500/30 transition-all mono"
            />
          </div>

          <!-- Statuses (Multi-select) -->
          <div class="space-y-3 md:col-span-2">
            <label class="text-xs font-black uppercase tracking-widest text-app-text-muted opacity-30 ml-2"
              >Operational Statuses</label
            >
            <div class="flex flex-wrap gap-2">
              <BaseButton
                v-for="status in Object.values(GameStatus)"
                :key="status"
                @click="toggleStatus(status)"
                :variant="filters.statuses.includes(status) ? 'primary' : 'secondary'"
                size="sm"
                class="!px-4 !py-2 !rounded-xl !text-[10px] !tracking-widest transition-all"
              >
                {{ status.replace(/_/g, ' ') }}
              </BaseButton>
            </div>
          </div>

          <!-- Date Range -->
          <div class="space-y-3">
            <label class="text-xs font-black uppercase tracking-widest text-app-text-muted opacity-30 ml-2"
              >Temporal Window</label
            >
            <div class="relative">
              <select
                v-model="filters.dateRange"
                class="w-full px-6 py-4 rounded-2xl glass border-glass-border text-sm text-app-text bg-void focus:outline-none focus:border-indigo-500/30 transition-all appearance-none cursor-pointer"
              >
                <option value="all">All Time</option>
                <option value="today">Last 24 Hours</option>
                <option value="week">Last 7 Days</option>
                <option value="month">Last 30 Days</option>
              </select>
              <div
                class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-app-text-muted opacity-20"
              >
                <i class="pi pi-chevron-down"></i>
              </div>
            </div>
          </div>

          <!-- On Device Toggle -->
          <div class="space-y-3">
            <label class="text-xs font-black uppercase tracking-widest text-app-text-muted opacity-30 ml-2"
              >Local Protocol</label
            >
            <div class="flex p-1.5 rounded-2xl glass border-glass-border h-[60px]">
              <BaseButton
                @click="filters.isOnDevice = filters.isOnDevice === true ? null : true"
                :variant="filters.isOnDevice === true ? 'primary' : 'ghost'"
                size="sm"
                class="flex-1 !h-full !rounded-xl !text-[10px] !font-black !uppercase"
              >
                Local
              </BaseButton>
              <BaseButton
                @click="filters.isOnDevice = filters.isOnDevice === false ? null : false"
                :variant="filters.isOnDevice === false ? 'primary' : 'ghost'"
                size="sm"
                class="flex-1 !h-full !rounded-xl !text-[10px] !font-black !uppercase"
              >
                Remote
              </BaseButton>
            </div>
          </div>

          <!-- My Games Toggle -->
          <div
            v-if="currentUserId"
            @click="filters.myGamesOnly = !filters.myGamesOnly"
            class="flex items-center justify-between px-6 py-4 rounded-2xl glass border-glass-border cursor-pointer hover:bg-glass-white transition-all h-[68px] mt-auto"
          >
            <span class="text-xs font-black uppercase tracking-widest text-app-text-muted opacity-30"
              >My Engagements</span
            >
            <div
              :class="[
                'w-10 h-5 rounded-full relative transition-all duration-300',
                filters.myGamesOnly ? 'bg-indigo-500' : 'bg-app-text/10',
              ]"
            >
              <div
                :class="[
                  'absolute top-1 w-3 h-3 bg-white rounded-full transition-all duration-300 shadow-sm',
                  filters.myGamesOnly ? 'left-6' : 'left-1',
                ]"
              ></div>
            </div>
          </div>
        </div>

        <!-- Sorting -->
        <div class="space-y-4 pt-6 border-t border-glass-border">
          <label class="text-xs font-black uppercase tracking-widest text-app-text-muted opacity-30 ml-2"
            >Sequencing</label
          >
          <div class="grid grid-cols-2 gap-6">
            <div class="flex p-1.5 rounded-2xl glass border-glass-border">
              <BaseButton
                @click="filters.sortBy = 'createdAt'"
                :variant="filters.sortBy === 'createdAt' ? 'secondary' : 'ghost'"
                size="sm"
                class="flex-1 !h-full !rounded-xl !text-[10px] !font-black !uppercase"
              >
                Created
              </BaseButton>
              <BaseButton
                @click="filters.sortBy = 'updatedAt'"
                :variant="filters.sortBy === 'updatedAt' ? 'secondary' : 'ghost'"
                size="sm"
                class="flex-1 !h-full !rounded-xl !text-[10px] !font-black !uppercase"
              >
                Updated
              </BaseButton>
            </div>
            <div class="flex p-1.5 rounded-2xl glass border-glass-border">
              <BaseButton
                @click="filters.sortOrder = 'desc'"
                :variant="filters.sortOrder === 'desc' ? 'secondary' : 'ghost'"
                size="sm"
                class="flex-1 !h-full !rounded-xl !text-[10px] !font-black !uppercase"
              >
                Desc
              </BaseButton>
              <BaseButton
                @click="filters.sortOrder = 'asc'"
                :variant="filters.sortOrder === 'asc' ? 'secondary' : 'ghost'"
                size="sm"
                class="flex-1 !h-full !rounded-xl !text-[10px] !font-black !uppercase"
              >
                Asc
              </BaseButton>
            </div>
          </div>
        </div>

        <div class="flex gap-6 pt-6">
          <BaseButton
            @click="emit('close')"
            variant="secondary"
            size="lg"
            class="flex-1"
          >
            Cancel
          </BaseButton>
          <BaseButton
            @click="applyFilters"
            variant="primary"
            size="lg"
            class="flex-[2]"
          >
            Apply Parameters
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
