<template>
  <div class="article-header-info">
    <span>本文共 {{ wordCount }} 字 | 预计阅读 {{ readTime }} 分钟</span>
  </div>
</template>

<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import { computed, onMounted, watch, ref } from 'vue'

const { page } = useData()
const route = useRoute()
const wordCount = ref(0)

const countWords = () => {
  // 等待页面渲染完成后，获取文章内容
  const contentEl = document.querySelector('.vp-doc')
  if (contentEl) {
    // 去除所有 HTML 标签和空白字符，再统计长度
    const text = contentEl.innerText || ''
    wordCount.value = text.replace(/\s+/g, '').length
  }
}

onMounted(() => {
  // 首次加载时统计
  countWords()
})

// 路由切换时重新统计
watch(() => route.path, () => {
  // 等待 DOM 更新完成
  setTimeout(countWords, 0)
})

// 阅读时间（中文按 500 字/分钟计算）
const readTime = computed(() => {
  const time = Math.ceil(wordCount.value / 500)
  return time < 1 ? 1 : time
})
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