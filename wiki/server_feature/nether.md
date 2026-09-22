<style>
/* ========== 下界维度升级 专属独立样式 仅本页生效 ========== */
.nether-page {
max-width: 920px;
margin: 2rem auto;
padding: 0 18px;
font-family: system-ui, -apple-system, sans-serif;
}
/* 主标题 岩浆暗红渐变 */
.nether-page h1 {
text-align: center;
font-size: 34px;
font-weight: 800;
margin: 2rem 0;
background: linear-gradient(120deg, #dc2626, #f97316);
-webkit-background-clip: text;
color: transparent;
letter-spacing: 1px;
}
/* 二级标题 熔岩侧边栏 + 渐变衬底 */
.nether-page h2 {
font-size: 22px;
font-weight: 700;
margin: 2.5rem 0 1.2rem;
padding: 12px 16px;
border-left: 5px solid #dc2626;
background: linear-gradient(90deg, rgba(220,38,38,0.1), transparent);
border-radius: 0 10px 10px 0;
}
/* 三级标题 地狱小红边 */
.nether-page h3 {
font-size: 19px;
margin: 1.8rem 0 1rem;
padding-left: 14px;
color: #f97316;
border-left: 3px solid #dc2626;
}
/* 正文段落 */
.nether-page p {
line-height: 1.85;
font-size: 16px;
color: var(--vp-c-text-2);
margin: 0;
}
/* 下界磨砂卡片 地狱暗色质感 */
.nether-card {
background: rgba(220,38,38,0.06);
padding: 1.5rem;
border-radius: 14px;
border: 1px solid rgba(220,38,38,0.12);
margin-bottom: 1.4rem;
}
/* 无序列表美化 */
.nether-page ul {
background: rgba(220,38,38,0.05);
padding: 1.2rem 1.6rem;
border-radius: 14px;
border: 1px solid rgba(220,38,38,0.1);
margin: 1rem 0;
}
.nether-page ul li {
margin: 0.6rem 0;
line-height: 1.75;
}
/* 高亮文字 岩浆橙红 */
.nether-page strong {
color: #f97316;
font-weight: 600;
}
/* 自定义下界分割线 熔岩渐变 */
.nether-page hr {
border: none;
height: 1px;
background: linear-gradient(to right, transparent, #dc262650, #f9731640, transparent);
margin: 3rem 0;
}
/* 警告框专属适配 */
.nether-page .vp-warning {
border-radius: 12px !important;
border-left: 4px solid #f97316 !important;
}
/* 深色模式加深地狱氛围 */
html.dark .nether-card,
html.dark .nether-page ul {
background: rgba(220,38,38,0.12);
border-color: rgba(220,38,38,0.18);
}
</style>
<div class="nether-page">
# 下界维度升级
<p>原版下界单调的地貌与有限的探索内容将彻底改写。我们重构下界全部生物群系，新增巨型地标建筑，调整生物刷新规则，让这片炙热的地狱维度充满挑战与丰厚的宝藏，给你的下界探险带来全新体验。</p>

## 🌋 生物群落深度优化
<div class="nether-card">

### 下界荒原重构
下界荒原做了生态改版，不再是单调的“下界沙漠”，而是洞穴式的敌对生态。区域内新增了大量下界尖刺结构，石笋与钟乳石交错分布，配合黑石岩层和岩浆湖。进入这片区域要面对更密集的敌对生物，还要注意地形造成的坠落风险。
荒原深处还有大面积地下熔岩裂隙，岩浆从岩壁不断流淌，行走时需要小心脚下，一不小心就会坠入高温岩浆之中。这里也是获取黑石、下界岩与玄武岩的绝佳采集区域。

</div>
<div class="nether-card">

### 森林生态增强
猩红森林与扭曲森林做了细节升级，新增散落的黑石岩石群、风化的真菌茎残骸，以及新型蔓延生长的巨大真菌。群内植被密度也有所提升，真菌分布更规律，资源点和探索路线比之前更多。
猩红森林充斥着猪灵与疣猪兽，适合收集猪灵交易物资；扭曲森林环境相对安静，是获取诡异菌、荧光菌的安全区域，但也潜藏着恶魂在高空伺机发动攻击。

</div>
<div class="nether-card">

### 灵魂沙谷 & 玄武岩三角洲改版
- **灵魂沙谷**：扩大峡谷纵深，地表遍布灵魂土与灵魂火，大量灵魂火炬自然生成。大量凋灵骷髅、恶魂在此刷新，适合收集凋灵骷髅头颅。谷地内还埋藏着废弃猪灵营地，能找到少量战利品。
- **玄武岩三角洲**：火山喷发风格地貌，大量巨型玄武岩柱耸立，岩浆喷泉随处可见。岩浆怪生成概率提高，适合刷取岩浆膏，地形崎岖，移动难度较高。

</div>

<hr />

## 🏰 史诗级新结构
<div class="nether-card">

### 猩红塔与扭曲塔
猩红塔与扭曲塔是下界天际线的标志性建筑，高度接近 100 格，分别矗立在对应的森林群落中。
- 探索奖励：塔内每层都有专属战利品箱，含下界稀有资源、附魔装备和功能性道具，塔顶宝箱可能开出服务器限定奖励；塔里还有特殊生物生成点，击败后可获得专属材料。
- 垂直交通：塔内用螺旋阶梯和悬挂平台连接各层，可以当作下界不同高度之间的“电梯”快速移动。
- 环境适配：两座塔的风格和所在森林匹配，猩红塔呼应猩红森林的色调，扭曲塔呼应扭曲森林的地貌。

> 探索提示：塔内空间狭窄，怪物刷新密集，建议携带盾牌、远程武器与大量防火药水再进行挑战。

</div>
<div class="nether-card">

### 废弃猪灵堡垒营地
散布在下界各个群系中的小型据点，曾是猪灵的临时驻扎地。营地由黑石与菌岩搭建，有储物帐篷、锻造台与熔炉。可以在这里搜刮猪灵遗留的黄金、唱片和锻造模板。
营地内会刷新残留猪灵与疣猪兽，如果你穿戴黄金护甲，猪灵不会主动攻击你，可以安静搜刮物资。

</div>
<div class="nether-card">

### 熔岩裂隙遗迹
深埋在岩浆湖下方的古老遗迹，由耐热的玄武岩与黑石构筑。遗迹内部通道被岩浆隔断，需要搭建通道或者使用抗火装备深入。宝箱内有概率产出下界合金升级模板、大量远古残骸碎片。遗迹内部有大量岩浆怪守护，探索风险极高。

</div>

::: warning
需要特别注意，由于数据包更改，对维度进行了大规模重置，请不要相信种子查找网站上的结构信息，他们不一定真实存在。
:::

## 📜 探险建议
<div class="nether-card">

下界处处危机四伏，远航前建议备好防火药水、盾牌、黄金护甲、足够的方块搭建通道。
猩红塔、熔岩裂隙遗迹等高价值结构难度较高，推荐组队探索。旧存档已经加载的区块不会自动更新地貌，前往未加载的新区块，才能看到全新下界内容。

</div>
</div>
