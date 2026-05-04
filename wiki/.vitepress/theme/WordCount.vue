<template>
  <div class="article-header-info">
    <span>本文共 {{ wordCount }} 字 | 预计阅读 {{ readTime }} 分钟</span>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vitepress'
import { computed, ref, watch } from 'vue'

const route = useRoute()
const wordCount = ref(0)

// 统计字数
const countWords = () => {
  const text = document.querySelector('.vp-doc')?.textContent || ''
  wordCount.value = text.replace(/\s+/g, '').length
}

// 路由切换时统计
watch(() => route.path, countWords, { immediate: true })

// 阅读时间
const readTime = computed(() => Math.max(1, Math.ceil(wordCount.value / 200)))
</script>

<style scoped>
.article-header-info {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  color: var(--vp-c-text-2);
  font-size: 14px;
}
</style>