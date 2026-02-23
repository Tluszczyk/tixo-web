import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import GameView from '@/views/GameView.vue'
import HowToPlayView from '@/views/HowToPlayView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/how-to-play',
      name: 'how-to-play',
      component: HowToPlayView,
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

export default router
