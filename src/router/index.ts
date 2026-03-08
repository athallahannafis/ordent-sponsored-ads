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
      component: () => import('@/views/SponsoredAdsView.vue'),
    },
    {
      path: '/articles',
      name: 'articles',
      component: () => import('@/views/ArticlesView.vue'),
    }
  ],
})

export default router
