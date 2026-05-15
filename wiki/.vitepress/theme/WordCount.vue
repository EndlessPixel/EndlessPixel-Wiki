<template>
  <div class="article-header-info">
    <div class="info-item">
      <svg class="icon" viewBox="0 0 24 24" width="16" height="16">
        <path fill="currentColor" d="M15.5 12h-7c-.83 0-1.5-.67-1.5-1.5v-2c0-.83.67-1.5 1.5-1.5h7c.83 0 1.5.67 1.5 1.5v2c0 .83-.67 1.5-1.5 1.5zm-7-4c-.28 0-.5.22-.5.5v2c0 .28.22.5.5.5h7c.28 0 .5-.22.5-.5v-2c0-.28-.22-.5-.5-.5h-7zm11 7h-1.5c0 1.51-1.24 2.73-2.75 2.73.42 1.25.76 2.63.76 4.27h-15c0-1.64.34-3.02.76-4.27-1.51 0-2.75-1.22-2.75-2.73h-1.5c-.28 0-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5h1.5c0-1.66 1.34-3 3-3h9c1.66 0 3 1.34 3 3h1.5c.28 0 .5.22.5.5v2c0 .28-.22.5-.5.5zm-15.75 2c.83 0 1.5.67 1.5 1.5 0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5c0-.83.67-1.5 1.5-1.5zm10.5 0c.83 0 1.5.67 1.5 1.5 0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5c0-.83.67-1.5 1.5-1.5z"/>
      </svg>
      本文共 {{ wordCount }} 字
    </div>
    <div class="divider"></div>
    <div class="info-item">
      <svg class="icon" viewBox="0 0 24 24" width="16" height="16">
        <path fill="currentColor" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10-10-4.48-10-10 4.48-10 10-10zm0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8zm.5-13h-1v5l4.25 2.5.75-1.23-3.5-2.08v-4.19z"/>
      </svg>
      预计阅读 {{ readTime }} 分钟
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vitepress'
import { computed, ref, watch } from 'vue'

const route = useRoute()
const wordCount = ref(0)

const countWords = () => {
  const text = document.querySelector('.vp-doc')?.textContent || ''
  wordCount.value = text.replace(/\s+/g, '').length
}

watch(() => route.path, countWords, { immediate: true })
const readTime = computed(() => Math.max(1, Math.ceil(wordCount.value / 200)))
</script>

<style scoped>
.article-header-info {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 8px 14px;
  background: rgba(245, 245, 247, 0.9);
  border-radius: 12px;
  margin-bottom: 16px;
  color: var(--vp-c-text-2);
  font-size: 14px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.info-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

.icon {
  opacity: 0.8;
}

.divider {
  width: 1px;
  height: 14px;
  background: rgba(0, 0, 0, 0.1);
}

html.dark .article-header-info {
  background: rgba(30, 30, 32, 0.9);
  border-color: rgba(255, 255, 255, 0.08);
}

html.dark .divider {
  background: rgba(255, 255, 255, 0.12);
}
</style>