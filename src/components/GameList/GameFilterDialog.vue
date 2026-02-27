<script setup lang="ts">
import { ref, watch } from 'vue'
import { GameStatus } from '@/api/dto/GameStatus'

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

watch(() => props.initialFilters, (newVal) => {
  filters.value = { ...newVal }
}, { deep: true })

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
    sortOrder: 'desc'
  }
}
</script>

<template>
  <div v-if="visible" class="fixed inset-0 z-[150] flex items-center justify-center p-4">
    <div @click="emit('close')" class="absolute inset-0 bg-void/90 backdrop-blur-md"></div>

    <div class="relative w-full max-w-2xl glass border-white/[0.05] rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in duration-300">
      <div class="p-8 lg:p-12 space-y-10">
        <div class="flex items-center justify-between">
          <div class="space-y-1">
            <h3 class="text-3xl font-black text-white uppercase italic">Filters<span class="text-indigo-500">.</span></h3>
            <p class="text-xs font-black uppercase tracking-[0.2em] text-white/20">Refine Operational Data</p>
          </div>
          <button @click="resetFilters" class="text-xs font-black uppercase tracking-widest text-indigo-500 hover:text-white transition-colors">Reset All</button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Player ID -->
          <div class="space-y-3">
            <label class="text-xs font-black uppercase tracking-widest text-white/30 ml-2">Player Identifier</label>
            <input v-model="filters.playerId" type="text" placeholder="User ID..." 
                   class="w-full px-6 py-4 rounded-2xl glass border-white/5 text-sm text-white placeholder:text-white/10 focus:outline-none focus:border-indigo-500/30 transition-all mono" />
          </div>

          <!-- Creator ID -->
          <div class="space-y-3">
            <label class="text-xs font-black uppercase tracking-widest text-white/30 ml-2">Creator Identifier</label>
            <input v-model="filters.creatorId" type="text" placeholder="Creator ID..." 
                   class="w-full px-6 py-4 rounded-2xl glass border-white/5 text-sm text-white placeholder:text-white/10 focus:outline-none focus:border-indigo-500/30 transition-all mono" />
          </div>

          <!-- Statuses (Multi-select) -->
          <div class="space-y-3 md:col-span-2">
            <label class="text-xs font-black uppercase tracking-widest text-white/30 ml-2">Operational Statuses</label>
            <div class="flex flex-wrap gap-2">
              <button 
                v-for="status in Object.values(GameStatus)" 
                :key="status"
                @click="toggleStatus(status)"
                :class="[
                  'px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border',
                  filters.statuses.includes(status) 
                    ? 'bg-indigo-500 border-indigo-400 text-white shadow-lg shadow-indigo-500/20' 
                    : 'glass border-white/5 text-white/30 hover:border-white/20'
                ]"
              >
                {{ status.replace(/_/g, ' ') }}
              </button>
            </div>
          </div>

          <!-- Date Range -->
          <div class="space-y-3">
            <label class="text-xs font-black uppercase tracking-widest text-white/30 ml-2">Temporal Window</label>
            <div class="relative">
              <select v-model="filters.dateRange" class="w-full px-6 py-4 rounded-2xl glass border-white/5 text-sm text-white bg-void focus:outline-none focus:border-indigo-500/30 transition-all appearance-none cursor-pointer">
                <option value="all">All Time</option>
                <option value="today">Last 24 Hours</option>
                <option value="week">Last 7 Days</option>
                <option value="month">Last 30 Days</option>
              </select>
              <div class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
                <i class="pi pi-chevron-down"></i>
              </div>
            </div>
          </div>

          <!-- On Device Toggle -->
          <div class="space-y-3">
            <label class="text-xs font-black uppercase tracking-widest text-white/30 ml-2">Local Protocol</label>
            <div class="flex p-1.5 rounded-2xl glass border-white/5 h-[60px]">
                <button @click="filters.isOnDevice = filters.isOnDevice === true ? null : true" 
                        :class="['flex-1 rounded-xl text-[10px] font-black uppercase transition-all', filters.isOnDevice === true ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20' : 'text-white/20 hover:text-white/40']">Local</button>
                <button @click="filters.isOnDevice = filters.isOnDevice === false ? null : false" 
                        :class="['flex-1 rounded-xl text-[10px] font-black uppercase transition-all', filters.isOnDevice === false ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/20' : 'text-white/20 hover:text-white/40']">Remote</button>
            </div>
          </div>

          <!-- My Games Toggle -->
          <div v-if="currentUserId" @click="filters.myGamesOnly = !filters.myGamesOnly" 
               class="flex items-center justify-between px-6 py-4 rounded-2xl glass border-white/5 cursor-pointer hover:bg-white/[0.02] transition-all h-[68px] mt-auto">
            <span class="text-xs font-black uppercase tracking-widest text-white/30">My Engagements</span>
            <div :class="['w-10 h-5 rounded-full relative transition-all duration-300', filters.myGamesOnly ? 'bg-indigo-500' : 'bg-white/10']">
                <div :class="['absolute top-1 w-3 h-3 bg-white rounded-full transition-all duration-300 shadow-sm', filters.myGamesOnly ? 'left-6' : 'left-1']"></div>
            </div>
          </div>
        </div>

        <!-- Sorting -->
        <div class="space-y-4 pt-6 border-t border-white/[0.03]">
            <label class="text-xs font-black uppercase tracking-widest text-white/30 ml-2">Sequencing</label>
            <div class="grid grid-cols-2 gap-6">
                <div class="flex p-1.5 rounded-2xl glass border-white/5">
                    <button @click="filters.sortBy = 'createdAt'" :class="['flex-1 py-3 rounded-xl text-[10px] font-black uppercase transition-all', filters.sortBy === 'createdAt' ? 'bg-white/10 text-white' : 'text-white/20 hover:text-white/40']">Created</button>
                    <button @click="filters.sortBy = 'updatedAt'" :class="['flex-1 py-3 rounded-xl text-[10px] font-black uppercase transition-all', filters.sortBy === 'updatedAt' ? 'bg-white/10 text-white' : 'text-white/20 hover:text-white/40']">Updated</button>
                </div>
                <div class="flex p-1.5 rounded-2xl glass border-white/5">
                    <button @click="filters.sortOrder = 'desc'" :class="['flex-1 py-3 rounded-xl text-[10px] font-black uppercase transition-all', filters.sortOrder === 'desc' ? 'bg-white/10 text-white' : 'text-white/20 hover:text-white/40']">Desc</button>
                    <button @click="filters.sortOrder = 'asc'" :class="['flex-1 py-3 rounded-xl text-[10px] font-black uppercase transition-all', filters.sortOrder === 'asc' ? 'bg-white/10 text-white' : 'text-white/20 hover:text-white/40']">Asc</button>
                </div>
            </div>
        </div>

        <div class="flex gap-6 pt-6">
          <button @click="emit('close')" class="flex-1 py-5 rounded-2xl glass border-white/[0.05] text-xs font-black uppercase tracking-widest text-white/40 hover:bg-white/5 transition-all">Cancel</button>
          <button @click="applyFilters" class="flex-[2] py-5 rounded-2xl bg-white text-black text-xs font-black uppercase tracking-[0.2em] shadow-2xl shadow-white/5 hover:bg-slate-200 transition-all">Apply Parameters</button>
        </div>
      </div>
    </div>
  </div>
</template>
