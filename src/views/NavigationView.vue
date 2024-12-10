<script setup>
import NavigationBar from '@/components/NavigationBar.vue'

const nav = [
  { name: 'Home', path: '/' },
  { name: 'Blog', path: '/blog' },
  { name: 'Comment', path: 'comment' },
]
</script>

<template>
  <NavigationBar :nav-items="nav" logo="favicon.ico" />
</template>
