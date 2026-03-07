import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import GameView from '@/views/GameView.vue'
import HowToPlayView from '@/views/HowToPlayView.vue'
import ProfileView from '@/views/ProfileView.vue'
import UsersView from '@/views/UsersView.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: HomeView,
      meta: { requiresAuth: true }
    },
    {
      path: '/analysis/:id',
      name: 'analysis',
      component: GameView,
      meta: { requiresAuth: true }
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView,
    },
    {
      path: '/how-to-play',
      name: 'how-to-play',
      component: HowToPlayView,
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/game/:id',
      name: 'game',
      component: GameView,
    },
  ],
})

router.beforeEach(async (to) => {
  const authStore = useAuthStore()

  // Always check auth on navigation to ensure store is up to date
  // but we can optimize this if needed by checking if user is already set
  if (!authStore.user) {
    await authStore.checkAuth()
  }

  if (to.meta.requiresAuth && !authStore.isLoggedIn) {
    authStore.openLoginModal(to.fullPath)
    // If we're coming from another page, stay there.
    // If it's a direct hit, go to home and open modal.
    if (!router.currentRoute.value.name) {
      return { name: 'home' }
    }
    return false
  }
})

export default router
