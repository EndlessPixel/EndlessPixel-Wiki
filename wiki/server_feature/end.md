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
<p>原版末地在击败末影龙后便鲜有新的探索内容，空旷的虚空与孤立的主岛很快就会失去新鲜感。本次更新通过 Nullscape 地形重制与 Explorify 结构拓展，将末地从"通关即弃"的终点，改造成一片拥有多层地形、独立地标与叙事碎片的长期探索区域。</p>

## 🌌 Nullscape 末地维度升级
<div class="end-page">
<p>末地维度做了重构，把高度提升到 <strong>384 格</strong>，用 1.18 的地形生成机制替代了原本单调的浮空岛格局，变成多种外星地貌。</p>

<p>更新后的末地以<strong>破碎群岛、漂浮山谷、结晶山峰</strong>等大体量地形为主：</p>
<ul>
<li><strong>破碎群岛</strong>：岛屿布满悬空岩块与裂隙，地面破碎、落差极大，行走时需要时刻注意脚下，避免失足坠入虚空。</li>
<li><strong>漂浮山谷</strong>：山谷间覆盖透明结晶植被，整体环境相对开阔，但浮空平台之间的跳跃同样危险。</li>
<li><strong>结晶山峰</strong>：由紫晶与黑曜石构成的尖塔状地形，海拔较高，山顶会刷新稀有资源与特殊生物，是高风险高回报的区域。</li>
</ul>

<p>不同区域的环境与危险程度差异明显：部分区域会出现<strong>末地风暴</strong>，也有区域会生成<strong>专属的敌对变异生物</strong>。探索时需要根据地形类型调整装备与战术，不能再沿用原版末地"搭桥直线走"的老思路。</p>
</div>

<hr />

## 🏴 Explorify 船难 · 末地新结构
<div class="end-page">
<p>船难是末地新增的探索结构，散落在破碎岛屿与漂浮山谷边缘的<strong>星际残骸</strong>，和周围的外星地貌形成明显反差。</p>

<p>船难外观是<strong>废弃的科幻风格</strong>——锈蚀外壳、破损船舱、外露机械部件，还原了飞船坠毁后的破败感。内部为多层空间结构，藏有末地稀缺的补给物资与高科技道具，还散落着记录船难原因的<strong>日志</strong>。</p>

<p>船舱内狭窄的通道与隐藏隔间会成为<strong>末影螨、潜影贝</strong>等生物的巢穴，探索时需要同时兼顾收集资源与应对战斗。船难既是末地重要的战利品来源，也通过日志文本为末地补充了背景故事。</p>
</div>

<hr />

## 🌔 末地遗迹拓展：新增多元远古建筑
<div class="end-page">
<p>末地原本空旷单调，这次的拓展包补上了空白——新增来自异时空的末地远古遗迹，每处遗迹都有<strong>专属战利品表</strong>。</p>

<h3>📜 核心特色</h3>
<ul>
<li><strong>20+ 自定义建筑</strong>：风格各异的远古遗迹会在末地随机生成，彼此独立又能连成遗迹群落。</li>
<li><strong>专属战利品</strong>：每座遗迹的宝箱里有末地稀有物资，从强化附魔道具到维度限定材料，探索风险越高回报越高。</li>
</ul>
</div>

::: warning
需要特别注意，由于数据包更改，对维度进行了大规模重置，请不要相信种子查找网站上的结构信息，他们不一定真实存在。
:::
</div>
