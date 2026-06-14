### 愚人节整蛊接口
<Badge type="tip" text="GET" /> `https://www.epmc.top/api/fool`

<br>

<Badge type="warning" text="POST" /> `https://www.epmc.top/api/fool`

::: tip
**这是一个纯整蛊娱乐接口**，固定返回 **HTTP 418 I'm a teapot** 状态码，用于愚人节趣味互动，**无任何实际业务功能**。
每次请求都会随机生成不同文案、心情、错误、推荐仓库，几乎不会重复。
:::

#### 返回示例：
**请求成功，返回茶壶整蛊数据** <Badge type="tip" text="418" />

##### 1. GET 请求
返回**完整整蛊信息** + **随机推荐 7 个 EndlessPixel GitHub 仓库** + **临时随机记录**

```json:line-numbers
{
  "code": 418,
  "message": "I'm a teapot 🫖 — can't brew coffee, only EndlessPixel's projects!",
  "teapot_mood": "chaotic",
  "fake_error": "TeapotError: Teapot stuck in infinite tea loop 🔁 (April Fools' Fake Error)",
  "april_fools": true,
  "time": "2026-04-10T12:34:56.789Z",
  "teapot_demand": "Buy the teapot a biscuit 🍪",
  "teapot_advice": "If code breaks, blame the teapot — it works every time 😜",
  "fake_api_status": "Prank engine: ONLINE 🤖",
  "fake_support": "Teapot Tech Support: Call ☎️ 1-800-TEAPOT (fake number) — we'll ignore you (April Fools)",
  "prank_emojis": "🫖🥔✨",
  "prank_strength": "78%",
  "tea_level": "63%",
  "ad": {
    "slogan": "Secret Repo Drop: Only teapot insiders get this 🤫",
    "picks": [
      "PotatoMC [April Fools: Minecraft runs on potato + teapot power 🥔🫖]: https://github.com/EndlessPixel/PotatoMC",
      "EP-XPcheckin [April Fools: Checkin gives tea XP instead of points ☕️]: https://github.com/EndlessPixel/EP-XPcheckin",
      "EndlessPixel-Wiki [April Fools: Wiki pages are all tea facts 🫖]: https://github.com/EndlessPixel/EndlessPixel-Wiki",
      "Chat-Box [April Fools: Talks way too much 🗣️]: https://github.com/EndlessPixel/Chat-Box"
    ],
    "prank_disclaimer": "Disclaimer: This teapot is not responsible for any repo pranks (April Fools' Day 2026 🎉)",
    "teapot_rating": "5/5 cups of tea ☕️",
    "april_fools_challenge": "Find all tea emojis in this response 👀",
    "fake_downloads": "12345 (fake) downloads 📥",
    "repo_shuffle_seed": 123456
  },
  "fake_request_id": "TEAPOT-123456-APRILFOOLS-X7Z9",
  "fake_load_time": "2.45s (fake) ⏱️",
  "temp_record": {
    "record_id": "TEMP-8S2KF93Z",
    "record_type": "tea_brewing_record",
    "action": "brewed fresh virtual tea",
    "extra_note": "tea level: 97%",
    "random_seed": 12345678
  }
}
```

##### 2. POST 请求
在 GET 所有字段基础上，**额外增加 POST 专属整蛊字段**：

```json:line-numbers
{
  // ... 通用字段同上 ...

  "post_prank": "Your POST data was brewed into tea — here's some repos to sip on ☕️",
  "fake_fix": "Solution: Star 5 repos and the teapot will return your data ⭐️",
  "fake_post_processing": "POST data brewed into premium tea 🍵",
  "fake_data_saved": "Data saved to teapot storage (876KB fake) 💾",
  "fake_response_delay": "13ms (we were making tea) ⏳",
  "temp_record": {
    "record_id": "TEMP-7A2DB91C",
    "record_type": "repo_hijack_note",
    "action": "rejected serious API request",
    "extra_note": "mood updated automatically",
    "random_seed": 87654321
  }
}
```