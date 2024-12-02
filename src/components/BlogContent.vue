<script setup>
import { marked } from 'marked'
import { computed } from 'vue'

const props = defineProps({
  markdownContent: {
    type: String,
    required: true,
  },
})

const htmlContent = computed(() => {
  return marked(props.markdownContent)
})
</script>

<template>
  <div class="blog-content" v-html="htmlContent"></div>
</template>

<style scoped>
.blog-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.6;
}

/* Add some basic styling for markdown elements */
:deep(h1) {
  font-size: 2em;
  margin-bottom: 0.5em;
}
:deep(h2) {
  font-size: 1.5em;
  margin-bottom: 0.5em;
}
:deep(p) {
  margin-bottom: 1em;
}
:deep(code) {
  background-color: #f4f4f4;
  padding: 0.2em 0.4em;
  border-radius: 3px;
}
:deep(pre) {
  background-color: #f4f4f4;
  padding: 1em;
  border-radius: 5px;
  overflow-x: auto;
}
:deep(a) {
  color: #42b883;
  text-decoration: none;
}
:deep(ul),
:deep(ol) {
  margin-bottom: 1em;
  padding-left: 2em;
}
</style>
