import { createRouter, createHashWebHistory } from 'vue-router'

const router = createRouter({
  history: createHashWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'aboutMe',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/BlogNavigationView.vue'),
    },
    {
      path: '/blog/:slug',
      name: 'blogPost',
      component: () => import('@/views/BlogView.vue'),
    },
  ],
})

export default router
