<script setup>
import { computed } from 'vue'

const props = defineProps({
  blogs: {
    type: Array,
  },
})

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// Computed property to sort blogs by createdAt
const sortedBlogs = computed(() => {
  return [...props.blogs].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
})
</script>

<template>
  <div class="blog-container">
    <div class="blog-list">
      <article v-for="blog in sortedBlogs" :key="blog.id" class="blog-item">
        <router-link :to="`/blog/${blog.slug}`" class="blog-title">
          {{ blog.title }}
        </router-link>
        <time :datetime="blog.createdAt" class="blog-date">
          {{ formatDate(blog.createdAt) }}
        </time>
      </article>
    </div>
  </div>
</template>

<style scoped>
.blog-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.blog-list {
  max-width: 800px;
  width: 90%;
  margin: 2rem auto;
  background-color: #fff;
  border-radius: 8px;
  padding: 2rem;
}

.blog-item {
  padding: 1.5rem 0;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.blog-item:last-child {
  border-bottom: none;
}

.blog-title {
  font-size: 1.2rem;
  color: #0790f2;
  text-decoration: none;
  font-weight: 500;
}

.blog-title:hover {
  color: #666;
}

.blog-date {
  color: #666;
  font-size: 0.9rem;
}
</style>
