import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/LandingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView,
    },
     {
      path: '/sponsored-ads',
      name: 'sponsored-ads',
      component: () => import('@/views/SponsoredAds.vue'),
    },
  ],
})

export default router
