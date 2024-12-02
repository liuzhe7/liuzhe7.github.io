<script setup>
import BlogNavigation from '@/components/BlogNavigation.vue'

// 获取所有 md 文件
const blogModules = import.meta.glob('/public/blogs/*.md')

const blogs = []
// 遍历并提取文件信息
for (const path in blogModules) {
  const filename = path.split('/').pop().replace('.md', '')
  // Extract title and date from filename (format: title_2020-04-12)
  const [title, createdAt] = filename.split('_')
  if (!createdAt) {
    console.warn(`File ${filename} does not follow the naming convention title_YYYY-MM-DD`)
    continue
  }
  blogs.push({
    title: title,
    slug: filename,
    createdAt: createdAt,
  })
}
</script>

<template>
  <BlogNavigation :blogs="blogs" />
</template>
