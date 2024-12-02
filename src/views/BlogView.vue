<script setup>
import MyBlog from '@/components/BlogContent.vue'
// read form file
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const markdownContent = ref('')
const route = useRoute()
const fileName = '/blogs/' + route.params.slug + '.md'

onMounted(async () => {
  try {
    const response = await fetch(fileName)
    markdownContent.value = await response.text()
    console.log(fileName)
  } catch (error) {
    console.error('Error loading markdown file:', error)
    markdownContent.value = 'Error loading content'
  }
})
</script>

<template>
  <MyBlog :markdownContent="markdownContent" />
</template>

<style scoped></style>
