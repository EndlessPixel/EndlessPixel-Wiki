### 查询 Minecraft 方块中文翻译

<Badge type="tip" text="GET" /> `https://www.endlesspixel.cn/api/mclang/blocks`

获取 Minecraft 26.2 方块（`block.minecraft.<id>`）到中文名的映射表。数据来源于 Mojang 官方 `zh_cn.json` 语言文件。

<Badge type="tip" text="GET" /> `https://www.endlesspixel.cn/api/mclang/blocks?id=block.minecraft.acacia_button`

通过 `id` 查询单个方块的翻译。

#### 返回示例

**获取方块翻译表成功** <Badge type="tip" text="200" />

返回完整的键值对映射对象，`key` 为语言文件键名，`value` 为中文名。

```json:line-numbers
{
  // 金合欢木按钮
  "block.minecraft.acacia_button": "金合欢木按钮",
  // 金合欢木门
  "block.minecraft.acacia_door": "金合欢木门",
  // 远古残骸
  "block.minecraft.ancient_debris": "远古残骸"
}
```

**查询单个方块翻译** <Badge type="tip" text="200" />

```json:line-numbers
{
  // 语言文件键名
  "id": "block.minecraft.acacia_button",
  // 中文名
  "name": "金合欢木按钮"
}
```

**未找到指定方块** <Badge type="danger" text="404" />

```json:line-numbers
{
  // 错误提示
  "error": "not found",
  // 请求的键名
  "id": "block.minecraft.not_exist"
}
```

---

### 查询 Minecraft 物品中文翻译

<Badge type="tip" text="GET" /> `https://www.endlesspixel.cn/api/mclang/items`

获取 Minecraft 26.2 物品（`item.minecraft.<id>`）到中文名的映射表。

<Badge type="tip" text="GET" /> `https://www.endlesspixel.cn/api/mclang/items?id=item.minecraft.apple`

通过 `id` 查询单个物品的翻译。

#### 返回示例

**获取物品翻译表成功** <Badge type="tip" text="200" />

```json:line-numbers
{
  // 苹果
  "item.minecraft.apple": "苹果",
  // 金合欢木船
  "item.minecraft.acacia_boat": "金合欢木船",
  // 箭
  "item.minecraft.arrow": "箭"
}
```

**查询单个物品翻译** <Badge type="tip" text="200" />

```json:line-numbers
{
  // 语言文件键名
  "id": "item.minecraft.apple",
  // 中文名
  "name": "苹果"
}
```

**未找到指定物品** <Badge type="danger" text="404" />

```json:line-numbers
{
  "error": "not found",
  "id": "item.minecraft.not_exist"
}
```

---

### 查询 Minecraft 实体中文翻译

<Badge type="tip" text="GET" /> `https://www.endlesspixel.cn/api/mclang/entities`

获取 Minecraft 26.2 实体（`entity.minecraft.<id>`）到中文名的映射表。

<Badge type="tip" text="GET" /> `https://www.endlesspixel.cn/api/mclang/entities?id=entity.minecraft.creaking`

通过 `id` 查询单个实体的翻译。

#### 返回示例

**获取实体翻译表成功** <Badge type="tip" text="200" />

```json:line-numbers
{
  // 苦力怕
  "entity.minecraft.creeper": "苦力怕",
  // 嘎枝
  "entity.minecraft.creaking": "嘎枝",
  // 旋风人
  "entity.minecraft.breeze": "旋风人"
}
```

**查询单个实体翻译** <Badge type="tip" text="200" />

```json:line-numbers
{
  // 语言文件键名
  "id": "entity.minecraft.creaking",
  // 中文名
  "name": "嘎枝"
}
```

**未找到指定实体** <Badge type="danger" text="404" />

```json:line-numbers
{
  "error": "not found",
  "id": "entity.minecraft.not_exist"
}
```

---

### 查询 Minecraft 附魔中文翻译

<Badge type="tip" text="GET" /> `https://www.endlesspixel.cn/api/mclang/enchants`

获取 Minecraft 26.2 附魔中文翻译表，默认合并返回**官方附魔**与 **EndlessPixel 服务器自定义附魔**：

- 官方附魔键名格式：`enchantment.minecraft.<id>`
- 服务器自定义附魔键名格式：`enchantments:<id>`（如攻击速度、吸血等服务器特有附魔）

<Badge type="tip" text="GET" /> `https://www.endlesspixel.cn/api/mclang/enchants?scope=official`

仅返回官方附魔。

<Badge type="tip" text="GET" /> `https://www.endlesspixel.cn/api/mclang/enchants?scope=custom`

仅返回服务器自定义附魔。

<Badge type="tip" text="GET" /> `https://www.endlesspixel.cn/api/mclang/enchants?id=enchantments:lifesteal`

通过 `id` 查询单个附魔（自动匹配官方或自定义）。

#### 返回示例

**获取附魔翻译表成功（官方 + 自定义合并）** <Badge type="tip" text="200" />

```json:line-numbers
{
  // 官方附魔：效率
  "enchantment.minecraft.efficiency": "效率",
  // 官方附魔：火焰附加
  "enchantment.minecraft.fire_aspect": "火焰附加",
  // 服务器自定义附魔：吸血
  "enchantments:lifesteal": "吸血",
  // 服务器自定义附魔：攻击速度增加
  "enchantments:attack_speed": "攻击速度增加"
}
```

**仅查询官方附魔** <Badge type="tip" text="200" />

```json:line-numbers
{
  "enchantment.minecraft.efficiency": "效率",
  "enchantment.minecraft.fire_aspect": "火焰附加"
}
```

**仅查询服务器自定义附魔** <Badge type="tip" text="200" />

```json:line-numbers
{
  "enchantments:lifesteal": "吸血",
  "enchantments:attack_speed": "攻击速度增加"
}
```

**查询单个附魔翻译** <Badge type="tip" text="200" />

```json:line-numbers
{
  // 语言文件键名
  "id": "enchantments:lifesteal",
  // 中文名
  "name": "吸血",
  // 数据来源：official=官方附魔 / custom=服务器自定义附魔
  "source": "custom"
}
```

**未找到指定附魔** <Badge type="danger" text="404" />

```json:line-numbers
{
  "error": "not found",
  "id": "enchantment.minecraft.not_exist"
}
```

---

### 通用说明

#### 请求参数

| 参数 | 适用接口 | 说明 |
|------|----------|------|
| id | 全部 | 语言文件键名（如 `block.minecraft.acacia_button`），查询单条翻译 |
| scope | enchants | 仅附魔接口可用：`official` 官方 / `custom` 服务器自定义，不传则返回合并结果 |

#### 数据来源

- 所有翻译数据基于 **Minecraft 26.2** 版本。
- 官方数据（`blocks` / `items` / `entities` / 官方 `enchants`）来源于 Mojang 官方 `zh_cn.json` 语言文件，与游戏内显示一致。
- `enchants` 中的 `enchantments:<id>` 为 **EndlessPixel 服务器自定义附魔**，非原版内容，请勿用于其他服务器。

#### 响应字段说明（单条查询）

| 字段 | 类型 | 说明 |
|------|------|------|
| id | string | 语言文件键名 |
| name | string | 对应的中文翻译 |
| source | string | 仅附魔接口返回，标记数据来源：`official` / `custom` |

#### 错误响应

**未找到指定键名** <Badge type="danger" text="404" />

```json:line-numbers
{
  // 错误提示
  "error": "not found",
  // 请求的键名
  "id": "block.minecraft.not_exist"
}
```
