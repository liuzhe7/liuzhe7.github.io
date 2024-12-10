<template>
  <div id="comments"></div>
</template>

<script setup>
import 'gitment/style/default.css'
import Gitment from 'gitment'
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

const gitment = new Gitment({
  // id: props.id, // optional
  owner: props.owner,
  repo: props.repo,
  oauth: {
    client_id: props.client_id,
    client_secret: props.client_secret,
  },
  // ...
  // For more available options, check out the documentation below
})
onMounted(() => {
  gitment.render('comments')
})
</script>
