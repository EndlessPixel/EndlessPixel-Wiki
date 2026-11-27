---
title: MasterCutter 大师切割机
---

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

# MasterCutter 大师切割机

<div class="cutter-card">
<strong>服务器内置功能，无需你额外安装任何数据包/模组！</strong>
原版切石机功能十分有限，在本服，我们通过 MasterCutter 拓展了切石机能力，新增500+条加工配方。
不管你是建筑玩家、生存玩家，都能解决大量原版里麻烦、浪费资源的痛点，进服直接拿切石机就能使用。
</div>

## 📖 这个功能在服务器里能帮你做什么
<div class="cutter-card">
在服务器里，资源获取、建造改造都很耗精力。大师切割机就是给大家减负的工具：
<ul>
<li>不用反复多次合成：原木直接加工成楼梯、栅栏、门等建筑部件，省去原木→木板→成品的繁琐步骤</li>
<li>方块外观自由切换：抛光方块、苔质方块可以切回基础方块，改建筑风格不用重新挖矿</li>
<li>多余建材回收利用：做多、放错位置的楼梯、门、活板门可以放回切石机拆解回原料，资源不浪费</li>
<li>部分方块逆向拆解：成品方块拆回基础素材，比如紫水晶块拆成紫水晶碎片，方便你按需调配材料</li>
<li>石头、深板岩直接切出圆石衍生物，跳过烧制，节省燃料和时间</li>
</ul>
所有配方直接在切石机界面内预览，不需要记忆复杂合成表。
</div>

### 🪓 木材切割
<div class="cutter-card">
服务器里大规模造建筑最消耗时间。原木、木头、菌柄、菌核（去皮变种也支持）可以直接放入切石机，一次性产出按钮、门、栅栏、栅栏门、木板、压力板、告示牌、台阶、楼梯、活板门。
竹块同样支持切割，产出比例相比原木减半（栅栏门产出不变）；木板、竹板、竹马赛克也可以继续切割拆分。
</div>

### 🔮 强化石块、铜材加工
<div class="cutter-card">
石头、深板岩可以直接切割为圆石、深板岩圆石及其衍生方块；
苔石砖、苔圆石砖可以还原成普通版本；
抛光台阶、楼梯、墙都能切回未抛光形态；
铜块、切制铜块（全部氧化、封蜡状态）拥有更高效率的加工配方，可以直接产出铜栏杆、锁链、铜门、避雷针。
</div>

### ♻ 建材回收
<div class="cutter-card">
建造翻车、备料做多了不用直接丢掉！
木制品、石质建材、铜制构件、铁门、铁活板门，都可以放进切石机回收，变回基础方块、台阶、按钮、栅栏、压力板等材料，适合服务器长期建造、改造项目。
</div>

### 🔨 逆向拆解
<div class="cutter-card">
适合你材料配比不对的时候使用：
紫水晶块 → 紫水晶碎片、海晶石砖 → 海晶石碎片、石英块 → 下界石英、砂岩 → 沙子、红砖块 → 红砖、花盆 → 红砖、空桶 → 铁锭、矿车 → 铁锭、漏斗 → 铁锭、炼药锅 → 铁锭。
告示牌、悬挂告示牌、各类铁轨同样支持拆解回收。
> ⚠ 注意：拆解遵循固定配方比例，不会超额产出资源。
</div>

### 🕸 其他便捷加工
<div class="cutter-card">
蘑菇块、菌块支持像原木一样去皮；
蜘蛛网、白色羊毛可以切割出线；
铁块放入切石机可直接加工为铁栅栏、铁门、铁活板门，同样支持逆向拆解。
</div>

### 🔬 实验配方
<div class="cutter-card">
部分实验性配方需要服务器开启对应实验开关才生效，例如凝灰岩方块系列互转配方、额外铜材加工配方。
</div>

## 💡 服务器游玩小贴士
<div class="cutter-card">
<ul>
<li>功能全服原生自带，拿出切石机即可使用，客户端无需打任何mod</li>
<li>回收、拆解不是无限刷资源，严格按照配方比例产出，不会破坏服务器经济平衡</li>
<li>适合主城建造、生存基地改造、批量制作装饰方块，大幅降低建造负担</li>
<li>如果你不想使用这个功能，完全可以无视，继续使用原版合成方式游玩</li>
</ul>
</div>

</div>
