<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Sidebar from '@/components/Sidebar.vue'
import { auth } from '@/api/authentication'
import { notifications } from '@/api/notifications'
import { realtime } from '@/api/appwriteClient'
import type { Notification } from '@/api/dto/Notification'
import type { RealtimeResponseEvent } from 'appwrite'

const isSidebarOpen = ref(false)
const showNotifications = ref(false)
const route = useRoute()
const router = useRouter()

const userName = ref('Player')
const notificationList = ref<Notification[]>([])
const newNotification = ref<Notification | null>(null)
const popUpTimeout = ref<ReturnType<typeof setTimeout> | null>(null)

type RealtimeSubscription = {
  close: () => Promise<void>
}
let subscription: RealtimeSubscription | null = null

const unreadCount = computed(() => notificationList.value.filter(n => !n.isOpened).length)

const fetchNotifications = async () => {
  try {
    notificationList.value = await notifications.listNotifications()
  } catch (e) {
    console.error('Failed to fetch notifications', e)
  }
}

const handleNotificationClick = async (notif: Notification) => {
  showNotifications.value = false
  newNotification.value = null
  if (notif.redirectPath) {
    await router.push(notif.redirectPath)
  }
}

const showPopUp = (notif: Notification) => {
  clearPopUpTimer()
  newNotification.value = notif
  startPopUpTimer()
}

const clearPopUpTimer = () => {
  if (popUpTimeout.value) {
    clearTimeout(popUpTimeout.value)
    popUpTimeout.value = null
  }
}

const startPopUpTimer = () => {
  if (popUpTimeout.value) return
  popUpTimeout.value = setTimeout(() => {
    newNotification.value = null
    popUpTimeout.value = null
  }, 10000)
}

// Close sidebar on route change (mobile)
watch(() => route.path, () => {
  isSidebarOpen.value = false
})

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const handleProfileClick = () => {
  router.push('/profile')
}

onMounted(async () => {
  try {
    const user = await auth.getCurrentUser()
    if (user) {
      userName.value = user.name || 'Player'
      await fetchNotifications()



      subscription = await realtime.subscribe(
        ['databases.tixo.collections.in-app-notifications.documents'],
        (response: any) => {
           if (response.events.some((e: string) => e.includes('.create'))) {
             notificationList.value.unshift(response.payload)
             if (notificationList.value.length > 10) notificationList.value.pop()
             if (response.payload.type === 'GAME_REQUESTED') {
               showPopUp(response.payload)
             }
           } else if (response.events.some((e: string) => e.includes('.update'))) {
             const idx = notificationList.value.findIndex(n => n.$id === response.payload.$id)
             if (idx !== -1) notificationList.value[idx] = response.payload
           }
        }
      )
    }
  } catch (e) {
    console.error('Failed to fetch user or subscribe', e)
  }
})

onUnmounted(async () => {
  if (subscription) await subscription.close()
})
</script>

<template>
  <div class="flex h-screen w-screen overflow-hidden bg-void relative noise" @click="showNotifications = false">
    <!-- Mobile Sidebar Overlay -->
    <div v-if="isSidebarOpen"
         @click="isSidebarOpen = false"
         class="fixed inset-0 bg-void/80 backdrop-blur-sm z-40 lg:hidden"></div>

    <!-- Sidebar Container -->
    <div :class="[
      'fixed inset-y-0 left-0 z-50 transform lg:relative lg:translate-x-0 transition-transform duration-500 ease-in-out',
      isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
    ]">
      <Sidebar />
    </div>

    <div class="flex-1 flex flex-col min-w-0 overflow-hidden relative">
      <header class="h-20 flex items-center justify-between px-6 lg:px-12 border-b border-white/[0.05] bg-void/50 backdrop-blur-md shrink-0 z-20">
        <div class="flex items-center gap-6">
          <!-- Hamburger Button -->
          <button @click.stop="toggleSidebar" class="lg:hidden p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/5 transition-all">
            <i class="pi" :class="isSidebarOpen ? 'pi-times' : 'pi-bars'"></i>
          </button>

          <slot name="header-left" />
        </div>

        <div class="flex items-center gap-6 lg:gap-12">
          <slot name="header-right" />

          <div class="flex items-center gap-6">
            <!-- Notifications -->
            <div class="relative">
              <button
                @click.stop="showNotifications = !showNotifications"
                class="w-10 h-10 rounded-xl glass border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/30 transition-all relative"
              >
                <i class="pi pi-bell text-sm"></i>
                <div v-if="unreadCount > 0" class="absolute -top-1 -right-1 w-4 h-4 bg-indigo-500 rounded-full border-2 border-void flex items-center justify-center">
                   <span class="text-[8px] font-black text-white">{{ unreadCount }}</span>
                </div>
              </button>

              <!-- Notifications Dropdown -->
              <Transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="transform -translate-y-2 opacity-0 scale-95"
                enter-to-class="transform translate-y-0 opacity-100 scale-100"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="transform translate-y-0 opacity-100 scale-100"
                leave-to-class="transform -translate-y-2 opacity-0 scale-95"
              >
                <div v-if="showNotifications"
                     @click.stop
                     class="absolute right-0 mt-4 w-96 bg-void/95 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden z-[100]">
                  <div class="p-6 border-b border-white/[0.05] flex items-center justify-between">
                     <span class="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500">Communications</span>
                     <span class="text-[9px] font-bold text-white/20 uppercase mono">{{ notificationList.length }} TOTAL</span>
                  </div>

                  <div class="max-h-96 overflow-y-auto custom-scrollbar">
                    <div v-for="notif in notificationList"
                         :key="notif.$id"
                         @click="handleNotificationClick(notif)"
                         class="p-6 hover:bg-white/[0.03] transition-all cursor-pointer border-b border-white/[0.02] last:border-0 relative group">
                       <div v-if="!notif.isOpened" class="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-10 bg-indigo-500 rounded-full shadow-[0_0_12px_#6366f1]"></div>
                       <p class="text-[13px] leading-relaxed mb-1.5" :class="notif.isOpened ? 'text-white/40 font-medium' : 'text-white/90 font-black'">{{ notif.message }}</p>
                       <span class="text-[10px] font-bold uppercase tracking-[0.1em] text-white/20">{{ new Date(notif.$createdAt).toLocaleTimeString() }}</span>
                    </div>

                    <div v-if="notificationList.length === 0" class="p-12 text-center flex flex-col items-center gap-3">
                       <i class="pi pi-bell-slash text-2xl text-white/5"></i>
                       <span class="text-[10px] font-black uppercase tracking-widest text-white/10">No Communications</span>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>

            <div @click="handleProfileClick" class="flex items-center gap-3 cursor-pointer group">
              <div class="text-right hidden sm:block">
                <p class="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Profile</p>
                <p class="text-xs font-bold text-slate-100 group-hover:text-blue-400 transition-colors">{{ userName }}</p>
              </div>
              <div class="w-10 h-10 rounded-full glass flex items-center justify-center border-white/5 group-hover:border-blue-500/30 transition-all">
                <i class="pi pi-user text-slate-400 text-sm group-hover:text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main class="flex-1 overflow-y-auto custom-scrollbar relative">
        <!-- Radial Background -->
        <div class="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.03)_0%,_transparent_70%)]"></div>

        <div class="w-full mx-auto p-4 lg:p-8 relative z-10 h-full">
          <slot />
        </div>
      </main>

      <!-- Global Notification Pop-up -->
      <Transition
        enter-active-class="transition duration-500 ease-out"
        enter-from-class="transform translate-x-full opacity-0"
        enter-to-class="transform translate-x-0 opacity-100"
        leave-active-class="transition duration-300 ease-in"
        leave-from-class="transform translate-x-0 opacity-100"
        leave-to-class="transform translate-x-full opacity-0"
      >
        <div v-if="newNotification" 
             @mouseenter="clearPopUpTimer"
             @mouseleave="startPopUpTimer"
             class="fixed bottom-8 right-8 z-[200]">
           <div class="bg-void/95 backdrop-blur-3xl border border-indigo-500/30 p-8 rounded-[2.5rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] max-w-md flex items-center gap-8">
              <div class="h-16 w-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                 <i class="pi pi-bolt text-xl animate-pulse"></i>
              </div>
              <div class="flex-1 space-y-2">
                 <p class="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em]">Incoming Transmission</p>
                 <p class="text-sm font-bold text-white leading-relaxed">{{ newNotification.message }}</p>
                 <div class="flex items-center gap-4 pt-3">
                    <button @click="newNotification = null" class="text-[10px] font-black text-white/30 hover:text-white uppercase tracking-[0.2em] transition-colors">Ignore</button>
                    <button @click="handleNotificationClick(newNotification)" class="px-6 py-2.5 bg-indigo-500 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-indigo-400 shadow-lg shadow-indigo-500/20 transition-all">View</button>
                 </div>
              </div>
           </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #334155;
  border-radius: 3px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #475569;
}
</style>
