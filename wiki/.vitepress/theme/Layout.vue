<template>
  <Layout>
    <!-- 改用 doc-before 插槽，会自动出现在标题下方 -->
    <template #doc-before>
      <WordCount />
    </template>
  </Layout>
</template>

<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
import WordCount from './WordCount.vue'
</script>