<style>
/* ========== 特殊交互功能 专属独立样式 仅本页生效 ========== */
.funcmode-page {
  max-width: 920px;
  margin: 2rem auto;
  padding: 0 18px;
  font-family: system-ui, -apple-system, sans-serif;
}

/* 主标题 清新柔和渐变 */
.funcmode-page h1 {
  text-align: center;
  font-size: 36px;
  font-weight: 800;
  margin: 2.5rem 0 2rem;
  background: linear-gradient(120deg, #06b6d4, #10b981);
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 1px;
  text-shadow: 0 2px 8px rgba(6,182,212,0.12);
}

/* 二级标题 粗侧边栏 + 柔和渐变衬底 */
.funcmode-page h2 {
  font-size: 24px;
  font-weight: 700;
  margin: 3rem 0 1.5rem;
  padding: 14px 20px;
  border-left: 6px #06b6d4 solid;
  background: linear-gradient(90deg, rgba(6,182,212,0.1), transparent);
  border-radius: 0 12px 12px 0;
  color: var(--vp-c-text-1);
}

/* 三级标题 */
.funcmode-page h3 {
  font-size: 20px;
  margin: 2rem 0 1.2rem;
  padding-left: 16px;
  border-left: 4px #10b981 solid;
  color: #06b6d4;
  font-weight: 600;
}

/* 功能卡片 柔和磨砂立体 */
.funcmode-card {
  background: rgba(6,182,212,0.05);
  padding: 1.8rem;
  border-radius: 18px;
  border: 1.5px solid rgba(6,182,212,0.12);
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(6,182,212,0.06);
  transition: 0.25s ease;
}
.funcmode-card:hover {
  box-shadow: 0 6px 18px rgba(6,182,212,0.1);
  border-color: rgba(6,182,212,0.18);
}

.funcmode-card p {
  line-height: 1.9;
  font-size: 16.5px;
  color: var(--vp-c-text-2);
  margin: 0;
}

/* 分组列表卡片 */
.funcmode-list-wrap {
  background: rgba(16,185,129,0.05);
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid rgba(16,185,129,0.12);
  margin: 1.2rem 0;
}
.funcmode-list-wrap h4 {
  margin: 0 0 1rem;
  font-size: 17px;
  color: #06b6d4;
  font-weight: 600;
}
.funcmode-list-wrap ul {
  margin: 0;
  padding-left: 1.4rem;
}
.funcmode-list-wrap li {
  margin: 0.5rem 0;
  line-height: 1.75;
  font-size: 16px;
}

/* 强调文字 */
.funcmode-page strong {
  color: #10b981;
  font-weight: 700;
}

/* 分割线 */
.funcmode-page hr {
  border: none;
  height: 1.5px;
  background: linear-gradient(to right, transparent, #06b6d450, #10b98140, transparent);
  margin: 3.5rem 0;
}

/* 警告框主题适配 */
.funcmode-page .vp-warning {
  border-radius: 12px !important;
  border-left: 4px #f59e0b !important;
}

/* 深色模式适配 */
html.dark .funcmode-card,
html.dark .funcmode-list-wrap {
  background: rgba(6,182,212,0.1);
  border-color: rgba(6,182,212,0.2);
}
</style>

<div class="funcmode-page">

# 特殊交互功能

## 🪑 坐下功能
<div class="funcmode-card">
这是服务器的趣味社交辅助功能，操作方式简单易懂：玩家需处于手持空手的状态，对准下半砖或楼梯方块点击鼠标右键，角色即可自动摆出优雅的坐下姿势，模拟真实的休息场景，为玩家间的聊天互动增添沉浸感。若想结束坐下状态，无需额外点击其他方块，只需再次按下键盘上的Shift键，角色就会自然站起，恢复正常的行动状态。该功能无使用次数和冷却时间限制，可随时随地在符合条件的方块上使用。
</div>

## ⛏️ 连锁挖掘
<div class="funcmode-card">
这是提升资源采集效率的实用功能，专为矿工玩家优化设计。使用时需先进入蹲下状态，手持对应矿石的挖掘工具（如挖铁矿用铁镐、挖钻石用钻石镐），对准目标矿石点击左键，即可一次性挖掘最多 64 个同一矿脉内的相同类型矿石。功能还做了便捷性优化：按下Shift键进行开采时，系统会自动识别并破坏当前矿脉中所有相连的同类矿石，无需逐一点击挖掘，大幅节省矿物收集的时间，让挖矿体验更高效、更顺畅。
</div>

### 🔧 连锁挖掘支持列表

#### 镐子
<div class="funcmode-list-wrap">
- 所有原版矿石、荧石
- 下界石英矿、下界金矿石、远古残骸
- 冰、蓝冰、浮冰`需要精准采集`
- 黑曜石、哭泣黑曜石`需要钻石镐或下界合金镐`
- 岩浆块
</div>

#### 斧子
<div class="funcmode-list-wrap">
- 所有原木、绯红菌柄、诡异菌柄
- 蘑菇块、蘑菇柄
- 红树林根、红树林原木
</div>

#### 铲子
<div class="funcmode-list-wrap">
- 粘土、雪块、灵魂沙、灵魂土
- 砾石
</div>

#### 锄头
<div class="funcmode-list-wrap">
- 小麦、土豆、胡萝卜、甜菜根
- 西瓜、南瓜
- 下界疣
- 幽匿系列方块：幽匿块、幽匿感测体、幽匿催发体、幽匿尖啸体、幽匿脉络`需要精准采集`
</div>

## 🌾 农田防踩踏
<div class="funcmode-card">
这是服务器为农业玩法打造的贴心保护功能，彻底解决玩家的种田后顾之忧。在默认的游戏规则中，玩家踩在耕好的农田上，农田会退化为普通泥土，导致农作物生长中断；而开启该功能后，农田被踩踏后不会发生退化，始终保持耕地状态，精心种植的小麦、胡萝卜、土豆等农作物能稳定生长。该设计让农业管理更轻松，玩家无需担心因走位失误、怪物冲撞等意外情况破坏农田生态系统，可专注于农作物的培育和收获。
</div>

::: warning
以下内容不一定正确实装，我们仅确认安装了这些数据包，但实际上内容有没有生效，我们并不知道，因为暂无玩家进行测试
:::

## 📘 附魔台透明方块兼容
<div class="funcmode-card">
本服务器支持在附魔台周围放置以下透明/装饰方块，且不会降低附魔力等级，方便玩家打造个性化附魔台外观：
- 所有告示牌
- 所有旗帜
- 所有床位
- 所有按钮
- 所有篝火
- 所有蜡烛
- 所有大锅
- 所有珊瑚植物
- 所有作物
- 所有门
- 所有围栏门
- 所有围栏
- 所有花盆
- 所有花朵
- 所有树叶
- 所有压力板
- 所有轨道
- 所有活板门
- 所有树苗
- 所有压力板
- 所有楼梯
- 所有地毯
- 所有玻璃
- 所有玻璃窗
- 蛋糕
- 磨石
- 切石机
- 铁砧
</div>

## 🔥 冶炼原矿块
<div class="funcmode-card">
支持在高炉或熔炉中冶炼原矿块。这些物品所需的冶炼时间为单件物品的9倍，核心优势是节省背包与箱子存储空间，而非缩短冶炼耗时，适合批量处理矿物的玩家使用。
</div>

</div>