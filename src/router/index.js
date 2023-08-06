import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/first-and-follow',
      name: 'first-and-follow',
      component: () => import('@/views/First-And-Follow.vue')
    },
    {
      path: '/eliminate-left-recursion',
      name: 'eliminate-left-recursion',
      component: () => import('@/views/Eliminate-Left-Recursion.vue')
    }
  ]
})

export default router
