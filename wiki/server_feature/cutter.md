<style>
/* ========== 大师切割机 专属独立样式 仅本页生效 ========== */
.cutter-page {
  max-width: 920px;
  margin: 2rem auto;
  padding: 0 18px;
  font-family: system-ui, -apple-system, sans-serif;
}

/* 主标题 机械金属渐变 */
.cutter-page h1 {
  text-align: center;
  font-size: 36px;
  font-weight: 800;
  margin: 2.5rem 0 2rem;
  background: linear-gradient(120deg, #3b82f6, #64748b);
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 1px;
  text-shadow: 0 2px 8px rgba(59,130,246,0.15);
}

/* 二级标题 工业侧边粗条 + 渐变衬底 */
.cutter-page h2 {
  font-size: 24px;
  font-weight: 700;
  margin: 3rem 0 1.5rem;
  padding: 14px 20px;
  border-left: 6px solid #3b82f6;
  background: linear-gradient(90deg, rgba(59,130,246,0.12), transparent);
  border-radius: 0 12px 12px 0;
  color: var(--vp-c-text-1);
}

/* 三级标题 机械细蓝边 */
.cutter-page h3 {
  font-size: 20px;
  margin: 2rem 0 1.2rem;
  padding-left: 16px;
  border-left: 4px solid #64748b;
  color: #3b82f6;
  font-weight: 600;
}

/* 正文立体卡片 工业磨砂质感 */
.cutter-card {
  background: rgba(59,130,246,0.06);
  padding: 1.8rem;
  border-radius: 18px;
  border: 1.5px solid rgba(59,130,246,0.15);
  margin-bottom: 2rem;
  box-shadow: 0 4px 14px rgba(59,130,246,0.08);
  transition: all 0.25s ease;
}
.cutter-card:hover {
  box-shadow: 0 6px 20px rgba(59,130,246,0.12);
  border-color: rgba(59,130,246,0.2);
}

/* 正文段落 */
.cutter-card p {
  line-height: 1.9;
  font-size: 16.5px;
  color: var(--vp-c-text-2);
  margin: 0;
}

/* 有序列表 模块化机械卡片 */
.cutter-page ol {
  display: grid;
  gap: 12px;
  padding-left: 0;
  margin: 1.5rem 0;
  list-style: none;
  counter-reset: cutNum;
}
.cutter-page ol li {
  counter-increment: cutNum;
  position: relative;
  padding: 16px 18px 16px 50px;
  background: rgba(59,130,246,0.05);
  border-radius: 14px;
  border: 1px solid rgba(59,130,246,0.12);
  line-height: 1.8;
}
/* 圆形机械序号标 */
.cutter-page ol li::before {
  content: counter(cutNum);
  position: absolute;
  left: 16px;
  top: 16px;
  width: 26px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  background: linear-gradient(135deg, #3b82f6, #64748b);
  color: #fff;
  font-weight: bold;
  border-radius: 50%;
  font-size: 14px;
  box-shadow: 0 2px 6px rgba(59,130,246,0.2);
}

/* 高亮文字 机械蓝 */
.cutter-page strong {
  color: #3b82f6;
  font-weight: 700;
}

/* 工业渐变分割线 */
.cutter-page hr {
  border: none;
  height: 1.5px;
  background: linear-gradient(to right, transparent, #3b82f650, #64748b40, transparent);
  margin: 3.5rem 0;
}

/* 深色模式适配加深机械感 */
html.dark .cutter-card,
html.dark .cutter-page ol li {
  background: rgba(59,130,246,0.12);
  border-color: rgba(59,130,246,0.22);
  box-shadow: 0 4px 14px rgba(59,130,246,0.15);
}
</style>

<div class="cutter-page">

# 大师切割机

## ⚡ 500+ 新增配方，颠覆传统制造逻辑
<div class="cutter-card">
大师切割机是服务器推出的革命性加工系统，一口气新增 **500 余种专属配方与实用功能**，彻底打破原版合成的步骤限制与资源浪费问题。
无论是基础的木材加工、石块处理，还是高阶的物品拆解、形态转换，都能通过这一系统高效完成，大幅降低资源消耗，提升生存与建造效率，为玩家带来全新的制作体验。
</div>

## 🪓 四大核心功能，重塑资源加工流程
<ol>
<li><strong>木材精加工</strong><br>
省去「原木→木板→制品」的繁琐流程，可将原木直接放入切割机，一键生成台阶、楼梯、栅栏等各类木制品。无需额外材料，一步到位，特别适合大规模建造时的快速预处理。</li>

<li><strong>基石精准加工</strong><br>
搭载专属切割逻辑，可对圆石、石头、花岗岩等基石类方块进行高精度加工，批量生成建筑部件与装饰方块，避免手工加工的误差与资源浪费。</li>

<li><strong>智能回收分解</strong><br>
针对楼梯、门、活板门等衍生物设计专属回收方案，放入切割机即可快速分解为基础原材料，实现资源循环利用，不再担心多余建筑部件浪费。</li>

<li><strong>逆向制作拆解</strong><br>
支持按原版配方比例逆向拆解物品，例如将附魔台拆分为黑曜石与书本、熔炉拆解为圆石，完美解决“误合成”问题，大幅降低前期试错成本。</li>
</ol>

## 🔧 四大高级特性，解锁更多制造可能
<ol>
<li><strong>形态自由转换</strong><br>
实现同一种方块不同形态间的自由切换，无需额外材料。例如抛光花岗岩 ↔ 台阶、石英块 ↔ 石英柱等，让建筑搭配更灵活。</li>

<li><strong>特殊材料优化</strong><br>
针对深板岩、普通石头等方块优化加工路径，可直接切割为圆石及各类衍生物，跳过烧炼步骤，节省大量燃料与时间。</li>

<li><strong>铁艺高效加工</strong><br>
优化铁类方块的制作与拆解，支持铁块直接切割为铁栅栏、铁门等部件，也可逆向拆解回收，兼容原版玩法同时更便捷。</li>

<li><strong>原版无缝兼容</strong><br>
所有功能与原版合成系统深度整合，操作逻辑贴近工作台，无需学习复杂新机制，上手即用，体验升级不违和。</li>
</ol>

</div>