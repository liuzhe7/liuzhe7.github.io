<template>
  <div id="gitalk-container"></div>
</template>

<script setup>
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'
import { onMounted } from 'vue'

const props = defineProps({
  id: {
    type: String,
  },
  owner: {
    type: String,
    Required: true,
  },
  repo: {
    type: String,
    Required: true,
  },
  client_id: {
    type: String,
    Required: true,
  },
  client_secret: {
    type: String,
    Required: true,
  },
})

const gitalk = new Gitalk({
  clientID: props.client_id,
  clientSecret: props.client_secret,
  repo: props.repo, // The repository of store comments,
  owner: props.owner,
  admin: ['GitHub repo owner and collaborators, only these guys can initialize github issues'],
  id: location.pathname, // Ensure uniqueness and length less than 50
  distractionFreeMode: false, // Facebook-like distraction free mode
  language: 'en',
})

onMounted(() => {
  gitalk.render('gitalk-container')
})
</script>
