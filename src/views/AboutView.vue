<script setup>
import UserAvatar from '@/components/UserAvatar.vue'
import CardLink from '@/components/CardLink.vue'

const cards = [
  {
    id: 1,
    img: '/bilibili.png',
    title: 'bilibili',
    link: 'https://space.bilibili.com/319717159/',
  },
  {
    id: 2,
    img: '/github.png',
    title: 'github',
    link: 'https://github.com/liuzhe7',
  },
  {
    id: 3,
    img: '/redbook.png',
    title: 'red book',
    link: 'https://www.xiaohongshu.com/user/profile/5c21f0f7000000000700be21',
  },
  {
    id: 4,
    img: '/instagram.png',
    title: 'instagram',
    link: 'https://www.instagram.com/liuzhe719/profilecard/?igsh=cDNmcmMwZnllcjhw',
  },
  {
    id: 5,
    img: '/gmail.png',
    title: 'gmail',
    link: 'zhixizhixizhixi@gmail.com',
  },
  {
    id: 6,
    img: '/weChat.png',
    title: 'wechat',
    link: 'weixin://contacts/profile/Jeodncjwodkjdirjemcm',
  },
  {
    id: 7,
    img: '/kmusic.png',
    title: 'kmusic',
    link: 'https://static-play.kg.qq.com/node/personal?uid=67949c86222a378f30&shareUid=67949c86222a378f30&pageId=homepage_me',
  },
]
const name = 'Zhe Liu'
const avatar = '/avatar.png'
const description =
  "I am a software developer, mainly using Golang, Python and JavaScript. I'm a badminton enthusiast and play badminton more than twice a week. I'm a fan of anime, manga and related subcultures, but not a hardcore one."
</script>

<template>
  <div class="home-view">
    <div class="avatar-container">
      <UserAvatar :name="name" :src="avatar" alt="avatar" :description="description" />
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
  height: 100%;
  flex-direction: column;
  gap: 5rem;
  padding: 1rem;
  align-items: center;
}
</style>
