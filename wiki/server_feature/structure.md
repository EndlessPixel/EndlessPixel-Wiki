<style>
/* ========== 原版结构更新 专属独立样式 仅本页生效 ========== */
.structure-page {
  max-width: 920px;
  margin: 2rem auto;
  padding: 0 18px;
  font-family: system-ui, -apple-system, sans-serif;
}

/* 主标题 冷灰商务渐变 */
.structure-page h1 {
  text-align: center;
  font-size: 36px;
  font-weight: 800;
  margin: 2.5rem 0 2rem;
  background: linear-gradient(120deg, #475569, #64748b);
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 1px;
}

/* 二级标题 */
.structure-page h2 {
  font-size: 24px;
  font-weight: 700;
  margin: 3rem 0 1.5rem;
  padding: 14px 20px;
  border-left: 6px solid #64748b;
  background: linear-gradient(90deg, rgba(100,116,139,0.12), transparent);
  border-radius: 0 12px 12px 0;
  color: var(--vp-c-text-1);
}

/* 三级标题 */
.structure-page h3 {
  font-size: 20px;
  margin: 2rem 0 1.2rem;
  padding-left: 16px;
  border-left: 4px solid #94a3b8;
  color: #64748b;
  font-weight: 600;
}

/* 正文卡片 规整文档风 */
.structure-card {
  background: rgba(100,116,139,0.06);
  padding: 1.8rem;
  border-radius: 18px;
  border: 1.5px solid rgba(100,116,139,0.15);
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(100,116,139,0.08);
}

.structure-card p {
  line-height: 1.9;
  font-size: 16.5px;
  color: var(--vp-c-text-2);
  margin: 0 0 1rem;
}

/* 无序列表美化 */
.structure-page ul {
  background: rgba(100,116,139,0.05);
  padding: 1.4rem 1.8rem;
  border-radius: 16px;
  border: 1px solid rgba(100,116,139,0.12);
  margin: 1.2rem 0;
}
.structure-page ul li {
  margin: 0.6rem 0;
  line-height: 1.75;
  font-size: 16px;
}

/* 强调文字 */
.structure-page strong {
  color: #475569;
  font-weight: 700;
}

/* 分割线 */
.structure-page hr {
  border: none;
  height: 1.5px;
  background: linear-gradient(to right, transparent, #64748b50, transparent);
  margin: 3rem 0;
}

/* 表格全局美化 */
.structure-page table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 16px;
  overflow: hidden;
  margin: 1.5rem 0;
  box-shadow: 0 4px 14px rgba(100,116,139,0.08);
}
.structure-page th {
  background: linear-gradient(90deg, #475569, #64748b);
  color: #fff;
  padding: 14px 16px;
  text-align: left;
  font-weight: 600;
}
.structure-page td {
  padding: 12px 16px;
  background: rgba(100,116,139,0.04);
  border-bottom: 1px solid rgba(100,116,139,0.1);
}
.structure-page tr:nth-child(even) td {
  background: rgba(100,116,139,0.07);
}

/* 深色模式适配 */
html.dark .structure-card,
html.dark .structure-page ul {
  background: rgba(100,116,139,0.12);
  border-color: rgba(100,116,139,0.2);
}
html.dark .structure-page td {
  background: rgba(255,255,255,0.03);
  border-color: rgba(255,255,255,0.08);
}
html.dark .structure-page tr:nth-child(even) td {
  background: rgba(255,255,255,0.05);
}
</style>

<div class="structure-page">

# 原版结构更新

<div class="structure-card">
我们对大部分原版结构做了重做，但保留了原版的核心体验。
本次更新只替换了原版建筑模型，所以你仍然可以通过 https://www.chunkbase.com/ 等坐标查询网站，在自己的世界里精准定位村庄、掠夺者前哨站、丛林金字塔、沼泽小屋、末地城和沙漠金字塔等结构。本次更新不会新增任何村民职业。

- 平原村
- 萨凡纳村
- 沙漠村
- 大河村
- 雪村
- 掠夺者前哨站
</div>

## 部分替换的建筑
<div class="structure-card">
此类建筑同样可通过 chunkbase 等坐标网站查询定位，所有原版建筑均已替换为自定义模型。

- 末地城
- 沼泽小屋
</div>


</div>