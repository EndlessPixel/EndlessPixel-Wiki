### 愚人节整蛊接口

<Badge type="tip" text="GET" /> `https://www.endlesspixel.cn/api/fool`

<br>

<Badge type="warning" text="POST" /> `https://www.endlesspixel.cn/api/fool`

::: tip
**这是一个纯整蛊娱乐接口**，固定返回 **HTTP 418 I'm a teapot** 状态码，用于愚人节趣味互动，**无任何实际业务功能**。

每次请求都会随机生成不同文案、心情、错误、推荐仓库，几乎不会重复。
:::

#### 查询参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| seed | number | ❌ | 随机种子，相同种子返回相同整蛊内容（用于调试） |
| mood | string | ❌ | 强制指定茶壶心情（可选：`happy`/`grumpy`/`chaotic`/`sleepy`） |

---

## 一、GET 请求

获取完整整蛊信息 + 随机推荐 EndlessPixel GitHub 仓库 + 临时随机记录。

### 返回示例

**请求成功，返回茶壶整蛊数据** <Badge type="tip" text="418" />

```json:line-numbers
{
  // HTTP 状态码（固定 418）
  "code": 418,
  // 整蛊主消息
  "message": "I'm a teapot 🫖 — can't brew coffee, only EndlessPixel's projects!",
  // 茶壶心情状态（随机）
  "teapot_mood": "chaotic",
  // 虚假错误信息
  "fake_error": "TeapotError: Teapot stuck in infinite tea loop 🔁 (April Fools' Fake Error)",
  // 愚人节标志（固定 true）
  "april_fools": true,
  // 服务器时间（ISO 8601 格式）
  "time": "2026-04-10T12:34:56.789Z",
  // 茶壶的需求
  "teapot_demand": "Buy the teapot a biscuit 🍪",
  // 茶壶的建议
  "teapot_advice": "If code breaks, blame the teapot — it works every time 😜",
  // 虚假 API 状态
  "fake_api_status": "Prank engine: ONLINE 🤖",
  // 虚假技术支持
  "fake_support": "Teapot Tech Support: Call ☎️ 1-800-TEAPOT (fake number) — we'll ignore you (April Fools)",
  // 整蛊表情包
  "prank_emojis": "🫖🥔✨",
  // 整蛊强度百分比
  "prank_strength": "78%",
  // 茶壶液位百分比
  "tea_level": "63%",
  // 广告/推荐信息
  "ad": {
    // 广告标语
    "slogan": "Secret Repo Drop: Only teapot insiders get this 🤫",
    // 随机推荐的仓库列表（数量随机 3-7 个）
    "picks": [
      "PotatoMC [April Fools: Minecraft runs on potato + teapot power 🥔🫖]: https://github.com/EndlessPixel/PotatoMC",
      "EP-XPcheckin [April Fools: Checkin gives tea XP instead of points ☕️]: https://github.com/EndlessPixel/EP-XPcheckin",
      "EndlessPixel-Wiki [April Fools: Wiki pages are all tea facts 🫖]: https://github.com/EndlessPixel/EndlessPixel-Wiki",
      "Chat-Box [April Fools: Talks way too much 🗣️]: https://github.com/EndlessPixel/Chat-Box"
    ],
    // 整蛊免责声明
    "prank_disclaimer": "Disclaimer: This teapot is not responsible for any repo pranks (April Fools' Day 2026 🎉)",
    // 茶壶评分
    "teapot_rating": "5/5 cups of tea ☕️",
    // 愚人节挑战
    "april_fools_challenge": "Find all tea emojis in this response 👀",
    // 虚假下载量
    "fake_downloads": "12345 (fake) downloads 📥",
    // 仓库随机种子
    "repo_shuffle_seed": 123456
  },
  // 虚假请求ID
  "fake_request_id": "TEAPOT-123456-APRILFOOLS-X7Z9",
  // 虚假加载时间
  "fake_load_time": "2.45s (fake) ⏱️",
  // 临时随机记录
  "temp_record": {
    // 临时记录ID
    "record_id": "TEMP-8S2KF93Z",
    // 记录类型
    "record_type": "tea_brewing_record",
    // 执行动作
    "action": "brewed fresh virtual tea",
    // 附加说明
    "extra_note": "tea level: 97%",
    // 随机种子
    "random_seed": 12345678
  }
}
```

---

## 二、POST 请求

在 GET 所有返回字段基础上，额外增加 POST 专属整蛊字段。

### 返回示例

**请求成功，返回 POST 专属整蛊数据** <Badge type="tip" text="418" />

```json:line-numbers
{
  // ========== 通用字段（与 GET 相同）==========
  "code": 418,
  "message": "I'm a teapot 🫖 — can't brew coffee, only EndlessPixel's projects!",
  "teapot_mood": "chaotic",
  "fake_error": "TeapotError: Teapot stuck in infinite tea loop 🔁",
  "april_fools": true,
  "time": "2026-04-10T12:34:56.789Z",
  "teapot_demand": "Buy the teapot a biscuit 🍪",
  "teapot_advice": "If code breaks, blame the teapot — it works every time 😜",
  "fake_api_status": "Prank engine: ONLINE 🤖",
  "fake_support": "Teapot Tech Support: Call ☎️ 1-800-TEAPOT (fake number)",
  "prank_emojis": "🫖🥔✨",
  "prank_strength": "78%",
  "tea_level": "63%",
  "ad": { ... },
  "fake_request_id": "TEAPOT-123456-APRILFOOLS-X7Z9",
  "fake_load_time": "2.45s (fake) ⏱️",

  // ========== POST 专属字段 ==========
  // POST 整蛊消息
  "post_prank": "Your POST data was brewed into tea — here's some repos to sip on ☕️",
  // 虚假解决方案
  "fake_fix": "Solution: Star 5 repos and the teapot will return your data ⭐️",
  // 虚假POST处理信息
  "fake_post_processing": "POST data brewed into premium tea 🍵",
  // 虚假数据保存信息
  "fake_data_saved": "Data saved to teapot storage (876KB fake) 💾",
  // 虚假响应延迟
  "fake_response_delay": "13ms (we were making tea) ⏳",
  // 临时记录（POST 专属类型）
  "temp_record": {
    "record_id": "TEMP-7A2DB91C",
    "record_type": "repo_hijack_note",
    "action": "rejected serious API request",
    "extra_note": "mood updated automatically",
    "random_seed": 87654321
  }
}
```

---

## 三、请求示例

### cURL

**GET 请求**
```bash
curl -X GET "https://www.endlesspixel.cn/api/fool"
```

**GET 请求（指定参数）**
```bash
curl -X GET "https://www.endlesspixel.cn/api/fool?seed=12345&mood=happy"
```

**POST 请求**
```bash
curl -X POST "https://www.endlesspixel.cn/api/fool" \
  -H "Content-Type: application/json" \
  -d '{"anything": "tea please"}'
```

### JavaScript (fetch)

```javascript
// GET 请求
const getPrank = async () => {
  const response = await fetch('https://www.endlesspixel.cn/api/fool');
  const data = await response.json();
  console.log('HTTP Status:', response.status); // 418
  console.log('Teapot says:', data.message);
};

// POST 请求
const postPrank = async () => {
  const response = await fetch('https://www.endlesspixel.cn/api/fool', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ serious: 'business' })
  });
  const data = await response.json();
  console.log('POST prank:', data.post_prank);
};
```

---

## 四、响应字段详解

| 字段 | 类型 | 说明 |
|------|------|------|
| code | number | 固定为 418（I'm a teapot） |
| message | string | 整蛊主消息，随机生成 |
| teapot_mood | string | 茶壶心情：`happy`/`grumpy`/`chaotic`/`sleepy` |
| fake_error | string | 虚假错误信息，模仿真实报错格式 |
| april_fools | boolean | 愚人节标志，固定为 `true` |
| time | string | ISO 8601 格式服务器时间 |
| teapot_demand | string | 茶壶的需求（随机） |
| teapot_advice | string | 茶壶的建议（随机） |
| fake_api_status | string | 虚假 API 状态信息 |
| fake_support | string | 虚假技术支持信息 |
| prank_emojis | string | 整蛊相关表情包 |
| prank_strength | string | 整蛊强度百分比（随机 40%-100%） |
| tea_level | string | 茶壶液位百分比（随机） |
| ad | object | 广告/推荐信息对象 |
| ad.slogan | string | 广告标语 |
| ad.picks | array | 随机推荐的 GitHub 仓库列表（3-7 个） |
| ad.prank_disclaimer | string | 整蛊免责声明 |
| ad.teapot_rating | string | 茶壶评分（随机） |
| ad.april_fools_challenge | string | 愚人节挑战信息 |
| ad.fake_downloads | string | 虚假下载量 |
| ad.repo_shuffle_seed | number | 仓库随机种子 |
| fake_request_id | string | 虚假请求ID |
| fake_load_time | string | 虚假加载时间 |
| temp_record | object | 临时随机记录 |
| temp_record.record_id | string | 临时记录ID |
| temp_record.record_type | string | 记录类型 |
| temp_record.action | string | 执行的动作 |
| temp_record.extra_note | string | 附加说明 |
| temp_record.random_seed | number | 随机种子 |

### POST 专属字段

| 字段 | 类型 | 说明 |
|------|------|------|
| post_prank | string | POST 请求专属整蛊消息 |
| fake_fix | string | 虚假解决方案 |
| fake_post_processing | string | 虚假 POST 处理信息 |
| fake_data_saved | string | 虚假数据保存信息 |
| fake_response_delay | string | 虚假响应延迟 |

---

## 五、注意事项

1. **纯娱乐用途**：本接口仅供愚人节趣味互动，**无任何实际业务功能**
2. **固定状态码**：无论请求成功与否，均返回 **HTTP 418 I'm a teapot**
3. **内容随机**：每次请求返回的内容均不同，几乎不会重复
4. **支持参数**：可通过 `seed` 参数固定随机内容，便于调试
5. **POST 无校验**：POST 请求不校验请求体内容，任意数据均可发送
6. **无副作用**：接口不写入任何数据，不修改任何状态