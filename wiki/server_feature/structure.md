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
<p>我们对大部分原版结构做了建筑模型重做，在保留原版核心游戏体验、功能逻辑不变的前提下，优化建筑布局、细节装饰与空间层次感。</p>
<p>本次更新<strong>仅替换原版建筑外观模型</strong>，结构生成坐标、生物生成规则、宝箱战利品完全沿用原版设定。你仍然可以通过 ChunkBase 等种子查询网站，在自己的世界里精准定位村庄、掠夺者前哨站、丛林金字塔、沼泽小屋、末地城和沙漠金字塔等结构。</p>
<p>重要说明：本次更新不会新增任何村民职业，村庄交易体系、村民行为保持原版不变，不会破坏生存玩法平衡。</p>
<ul>
<li>平原村</li>
<li>萨凡纳村</li>
<li>沙漠村</li>
<li>大河村</li>
<li>雪村</li>
<li>掠夺者前哨站</li>
</ul>
</div>

## 部分替换的建筑
<div class="structure-card">
<p>下面列出的建筑同样沿用原版生成逻辑，支持 ChunkBase 等种子网站坐标查询定位。所有列出的原版建筑都已经替换为全新自定义模型，内部空间、房间布局、装饰细节全面翻新，带来焕然一新的探索观感。</p>
<ul>
<li>末地城</li>
<li>沼泽小屋</li>
<li>丛林金字塔</li>
<li>沙漠金字塔</li>
</ul>
</div>

## 结构更新特点
<div class="structure-card">
<ul>
<li><strong>坐标兼容</strong>：世界种子与结构坐标完全兼容原版，旧存档加载不会出现结构错位、消失问题；</li>
<li><strong>功能不变</strong>：刷怪笼、宝箱、生成生物、战利品表全部保持原版，不会额外增加强力物资；</li>
<li><strong>纯外观翻新</strong>：只修改建筑方块布局，不新增方块、不新增实体，兼容性极强；</li>
<li><strong>新旧存档通用</strong>：无论是新建世界，还是已游玩一段时间的旧存档，新生成区块都会加载新版建筑；已生成完毕的区块不会自动替换，需要探索未加载的新区块才能看到新结构；</li>
<li><strong>无额外模组依赖</strong>：结构替换功能独立，不需要前置模组即可正常生效。</li>
</ul>
</div>

## 常见疑问
<div class="structure-card">
<h3>Q：旧存档里面已经加载过的村庄会自动变成新建筑吗？</h3>
<p>A：不会。MC区块加载机制决定，已经生成加载完成的区块不会自动重写建筑。想要看到新版结构，需要前往该世界尚未加载的新区块进行探索。</p>

<h3>Q：宝箱里的物品会不会被改动？</h3>
<p>A：不会。宝箱战利品完全保留原版战利品表，不会增加或者减少物品，不会破坏生存平衡。</p>

<h3>Q：会不会影响掠夺事件、村庄袭击？</h3>
<p>A：不会，村庄、前哨站相关的袭击机制、掠夺者生成逻辑完全原版，不改动任何战斗事件。</p>
</div>
</div>
