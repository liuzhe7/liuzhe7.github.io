import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
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
