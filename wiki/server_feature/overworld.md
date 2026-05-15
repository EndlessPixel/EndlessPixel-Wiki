<style>
/* ========== 主世界维度升级 强化版 专属独立样式 仅本页生效 ========== */
.overworld-page {
  max-width: 920px;
  margin: 2rem auto;
  padding: 0 18px;
  font-family: system-ui, -apple-system, sans-serif;
}

/* 主标题 强化版大地草木渐变（更浓郁、更有张力） */
.overworld-page h1 {
  text-align: center;
  font-size: 36px; /* 放大标题，提升视觉权重 */
  font-weight: 800;
  margin: 2.5rem 0 2rem;
  background: linear-gradient(120deg, #b45309, #15803d); /* 加深色调，更有史诗感 */
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 1px;
  text-shadow: 0 2px 8px rgba(21, 128, 61, 0.15); /* 新增轻微阴影，更立体 */
}

/* 二级标题 强化设计（加粗边框+厚重衬底+图标） */
.overworld-page h2 {
  font-size: 24px; /* 放大二级标题 */
  font-weight: 700;
  margin: 3rem 0 1.8rem;
  padding: 14px 20px;
  border-left: 6px solid #15803d; /* 加粗侧边条，力度拉满 */
  background: linear-gradient(90deg, rgba(21, 128, 61, 0.15), transparent); /* 加深衬底，更突出 */
  border-radius: 0 12px 12px 0;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--vp-c-text-1); /* 加深标题本身颜色 */
}

/* 二级标题图标升级（更有质感，贴合主题） */
.overworld-page h2::before {
  content: "";
  display: inline-block;
  width: 24px;
  height: 24px;
  background: linear-gradient(45deg, #b45309, #15803d);
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(180, 83, 9, 0.3); /* 图标加阴影，更立体 */
}

/* 正文卡片 强化质感（加厚边框+加深底色+阴影） */
.overworld-card {
  background: rgba(21, 128, 61, 0.08); /* 加深卡片底色，提升存在感 */
  padding: 1.8rem; /* 增加内边距，更饱满 */
  border-radius: 18px; /* 优化圆角，更精致 */
  border: 1.5px solid rgba(21, 128, 61, 0.15); /* 加粗边框，更有力度 */
  margin: 0 0 2rem;
  box-shadow: 0 4px 12px rgba(21, 128, 61, 0.08); /* 新增卡片阴影，告别扁平 */
  transition: all 0.2s ease;
}
/* 卡片hover效果，增加互动感 */
.overworld-card:hover {
  box-shadow: 0 6px 16px rgba(21, 128, 61, 0.12);
  border-color: rgba(21, 128, 61, 0.2);
}

/* 正文段落 强化可读性（加粗字体+调整行高） */
.overworld-card p {
  line-height: 1.9;
  font-size: 16.5px; /* 放大字体，更清晰 */
  color: var(--vp-c-text-2);
  margin: 0;
  font-weight: 450; /* 轻微加粗，提升文字力度 */
}

/* 强调文字 强化高亮（更浓郁色调+轻微阴影） */
.overworld-page strong {
  color: #b45309;
  font-weight: 700; /* 加粗强调，更突出 */
  text-shadow: 0 1px 3px rgba(180, 83, 9, 0.1);
}

/* 自定义分割线 强化版（更粗+更浓郁渐变） */
.overworld-page hr {
  border: none;
  height: 1.5px; /* 加粗分割线 */
  background: linear-gradient(to right, transparent, #15803d60, #b4530950, transparent); /* 加深渐变，更有存在感 */
  margin: 3.5rem 0;
}

/* 深色模式 强化地狱氛围（加深底色+边框） */
html.dark .overworld-card {
  background: rgba(21, 128, 61, 0.15);
  border-color: rgba(21, 128, 61, 0.25);
  box-shadow: 0 4px 12px rgba(21, 128, 61, 0.15);
}
html.dark .overworld-card:hover {
  box-shadow: 0 6px 16px rgba(21, 128, 61, 0.2);
}
</style>

<div class="overworld-page">

# 主世界维度升级

## 🏰 多样化建筑结构
<div class="overworld-card">
主世界迎来全面的建筑结构扩展更新，新增大量风格迥异且设计精良的特色建筑，涵盖庄严宏伟的中世纪城堡、温馨质朴的乡村小屋、充满未知的神秘塔楼等多种类型。这些建筑不仅外观极具辨识度，内部还暗藏丰富的探索内容，比如城堡里的隐藏宝箱、塔楼中的机关谜题、乡村小屋的NPC互动任务等，为玩家的主世界探索之旅增添了更多惊喜与挑战。每一座建筑都经过细节打磨，无论是城堡的石质城墙、小屋的木质围栏，还是塔楼的尖顶设计，都力求还原对应的风格特色，让玩家在探索时能感受到满满的沉浸感。
</div>

## 🌄 环境融合设计
<div class="overworld-card">
所有新增建筑结构都遵循自然环境适配的生成原则，经过精心布局与规划，确保与主世界原有的生物群落完美融合，毫无违和感。在雪山之巅，会矗立着被冰雪覆盖的石质城堡，与皑皑白雪相映成趣；在丛林深处，藤蔓缠绕的神秘塔楼隐匿其中，与茂密植被融为一体；在平原地带，错落有致的乡村小屋散落分布，与金黄的麦田、碧绿的草地构成和谐的田园风光。不同的建筑结构拥有专属的生成逻辑，会根据所在生物群落的气候、地形特点调整外观细节与内部布局，让每一次探索都能发现与环境相得益彰的独特建筑。
</div>

::: warning
需要特别注意，由于数据包更改，对维度进行了大规模重置，请不要相信种子查找网站上的结构信息，他们不一定真实存在。
:::

</div>