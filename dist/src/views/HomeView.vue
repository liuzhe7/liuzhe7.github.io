<script setup>
import UserAvatar from '@/components/UserAvatar.vue'
import CardLink from '@/components/CardLink.vue'

const cards = [
  {
    id: 1,
    img: '/src/assets/bilibili.png',
    title: 'bilibili',
    link: 'https://space.bilibili.com/319717159/',
  },
  {
    id: 2,
    img: '/src/assets/github.png',
    title: 'github',
    link: 'https://github.com/liuzhe7',
  },
  {
    id: 3,
    img: '/src/assets/redbook.png',
    title: 'red book',
    link: 'https://www.xiaohongshu.com/user/profile/5c21f0f7000000000700be21',
  },
  {
    id: 4,
    img: '/src/assets/instagram.png',
    title: 'instagram',
    link: 'https://www.instagram.com/liuzhe719/profilecard/?igsh=cDNmcmMwZnllcjhw',
  },
  {
    id: 5,
    img: '/src/assets/gmail.png',
    title: 'gmail',
    link: 'zhixizhixizhixi@gmail.com',
  },
  {
    id: 6,
    img: '/src/assets/wechat.png',
    title: 'wechat',
    link: 'weixin://contacts/profile/Jeodncjwodkjdirjemcm',
  },
]
</script>

<template>
  <div class="home-view">
    <div class="avatar-container">
      <UserAvatar
        name="Zhe Liu"
        src="/src/assets/image.png"
        alt="avatar"
        description="Passionate Senior Frontend Developer with expertise in Vue.js, Nuxt, and TypeScript. Leading development teams at major tech companies for over 5 years. Specialized in building scalable web applications, optimizing performance, and implementing responsive designs. Regular speaker at tech conferences and contributor to open-source projects. Currently focused on microfront-end architecture and modern web development practices."
        status="online"
      />
    </div>
    <div class="card-link-container">
      <CardLink :cards="cards" />
    </div>
  </div>
</template>

<style scoped>
.home-view {
  box-sizing: border-box;
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 5rem;
  padding: 1rem;
  align-items: center;
  background-color: bisque;
}
</style>
