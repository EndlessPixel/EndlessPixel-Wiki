<style>
/* ========== 末地维度升级 专属独立样式 仅当前页面生效 ========== */
.end-page {
  max-width: 920px;
  margin: 2rem auto;
  padding: 0 18px;
  font-family: system-ui, -apple-system, sans-serif;
}

/* 主标题 深空星紫渐变 */
.end-page h1 {
  text-align: center;
  font-size: 34px;
  font-weight: 800;
  margin: 2rem 0;
  background: linear-gradient(120deg, #7c3aed, #22d3ee);
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 1px;
}

/* 二级标题 星空侧边条 + 磨砂背景 */
.end-page h2 {
  font-size: 22px;
  font-weight: 700;
  margin: 2.5rem 0 1.2rem;
  padding: 12px 16px;
  border-left: 5px solid #7c3aed;
  background: linear-gradient(90deg, rgba(124,58,237,0.1), transparent);
  border-radius: 0 10px 10px 0;
}

/* 三级标题 */
.end-page h3 {
  font-size: 19px;
  margin: 1.8rem 0 1rem;
  padding-left: 14px;
  color: #a78bfa;
  border-left: 3px solid #22d3ee;
}

/* 正文段落 舒适行高 */
.end-page p {
  line-height: 1.85;
  font-size: 16px;
  color: var(--vp-c-text-2);
  margin: 1rem 0;
}

/* 无序列表 深空卡片容器 */
.end-page ul {
  background: rgba(124,58,237,0.06);
  padding: 1.2rem 1.6rem;
  border-radius: 14px;
  margin: 1.2rem 0;
  border: 1px solid rgba(124,58,237,0.12);
}
.end-page ul li {
  margin: 0.7rem 0;
  line-height: 1.75;
}

/* 强调文字 星蓝高亮 */
.end-page strong {
  color: #22d3ee;
  font-weight: 600;
}

/* 自定义分割线 星空渐变 */
.end-page hr {
  border: none;
  height: 1px;
  background: linear-gradient(to right, transparent, #7c3aed60, #22d3ee40, transparent);
  margin: 3rem 0;
}

/* 适配 VitePress 警告块 美化 */
.end-page .vp-warning {
  border-radius: 12px !important;
  border-left: 4px solid #f59e0b !important;
  padding: 1rem 1.4rem !important;
  margin: 1.5rem 0 !important;
}

/* 深色模式适配 */
html.dark .end-page ul {
  background: rgba(124,58,237,0.1);
}
</style>

<div class="end-page">

# 末地维度升级

## 🌌 Nullscape末地维度升级
末地维度做了重构，把高度提升到 384 格，用 1.18 的地形生成机制替代了原本单调的浮空岛格局，变成多种外星地貌。

更新后的末地以破碎群岛、漂浮山谷、结晶山峰等大体量地形为主。破碎岛屿布满悬空岩块和裂隙，行走时要注意坠落；漂浮山谷覆盖着透明结晶植被；结晶山峰由紫晶和黑曜石构成，山顶会刷新稀有资源和特殊生物。

不同区域的环境和危险程度不一样，部分区域会出现末地风暴，也有区域会生成专属的敌对变异生物。

## 🏴 Explorify船难·末地新结构
船难是末地新增的探索结构，散落在破碎岛屿和漂浮山谷边缘的星际残骸，和外星地貌形成明显反差。

船难外观是废弃的科幻风格，锈蚀外壳、破损船舱、外露机械部件，还原了坠毁后的破败感。内部有多层空间，藏有末地稀缺的补给物资和高科技道具，还有记录船难原因的日志；狭窄通道和隐藏隔间会成为末影螨、潜影贝等生物的巢穴，探索时要兼顾收集资源和应对战斗。

船难既是末地的重要战利品来源，也通过日志给末地补充了背景故事。

## 🌔 末地遗迹拓展：新增多元远古建筑
末地原本空旷单调，这次的拓展包补上了空白——新增来自异时空的末地远古遗迹，每处遗迹都有专属战利品表。

### 📜 核心特色
- 20+ 自定义建筑：风格各异的远古遗迹会在末地随机生成，彼此独立又能连成遗迹群落。
- 专属战利品：每座遗迹的宝箱里有末地稀有物资，从强化附魔道具到维度限定材料，探索风险越高回报越高。

::: warning
需要特别注意，由于数据包更改，对维度进行了大规模重置，请不要相信种子查找网站上的结构信息，他们不一定真实存在。
:::

</div>