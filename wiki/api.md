# EndlessPixel API开放文档 <Badge type="warning" text="beta" />
::: tip
API开放文档是服务器提供的API接口文档，用于开发人员调用服务器的功能和查询服务器的状态。
:::

## API接口
<Badge type="tip" text="GET" /> `https://www.epmc.top/api/mcserver/epmc`
查询EndlessPixel服务器在线状态
::: tip
此接口返回结果与[api.mcsrvstat.us](https://api.mcsrvstat.us/)相同，请按照[api.mcsrvstat.us](https://api.mcsrvstat.us/)的解析返回说明文档进行解析，此处不提供解析说明。
:::

---

<Badge type="tip" text="GET" /> `https://www.epmc.top/api/fool` **or**
<Badge type="warning" text="POST" /> `https://www.epmc.top/api/fool`

::: tip
**这是一个纯整蛊娱乐接口**，固定返回 **HTTP 418 I'm a teapot** 状态码，用于愚人节趣味互动，**无任何实际业务功能**。
每次请求都会随机生成不同文案、心情、错误、推荐仓库，几乎不会重复。
:::

### 返回示例：
**请求成功，返回茶壶整蛊数据** <Badge type="tip" text="418" />

#### 1. GET 请求
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

#### 2. POST 请求
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

---

<Badge type="tip" text="GET" /> `https://www.epmc.top/api/hardware-info`

查询EndlessPixel服务器硬件信息
### 返回示例：
**获取硬件时序数据成功** <Badge type="tip" text="200" />
```json:line-numbers
{
  "cpu": {
    "model": "Intel(R) Xeon(R) Gold 6148 CPU @ 2.40GHz",  // CPU型号
    "cores": 40,  // 逻辑核心数
    "physical_cores": 40  // 物理核心数
  },
  "memory": {
    "total": 64,  // 总内存大小，单位：GB
    "model": "DDR5 ECC"  // 内存硬件型号
  },
  "disks": [  // 磁盘分区列表
    {
      "device": "C:\\",  // 磁盘设备路径
      "mountpoint": "C:\\",  // 磁盘挂载点
      "fstype": "NTFS",  // 文件系统类型
      "total": 149.46,  // 磁盘总容量，单位：GB
      "used": 109.49,  // 磁盘已使用容量，单位：GB
      "usage_percent": 73.3  // 磁盘使用率，单位：%
    }
  ],
  "gpu": {
    "model": "Unknown",  // GPU型号
    "available": false  // GPU是否可用
  },
  "network": [  // 网络适配器列表
    {
      "name": "以太网",  // 网卡名称
      "addresses": [  // 网卡IP地址列表
        "192.168.1.106"
      ]
    }
  ]
}
```

---

<Badge type="tip" text="GET" /> `https://www.epmc.top/api/real-time-data`

查询EndlessPixel服务器硬件实时数据
### 返回示例：
**获取服务器硬件实时数据成功** <Badge type="tip" text="200" />
```json:line-numbers
{
  // CPU使用率时序数据 [时间戳, 使用率(%)]
  "cpu_usage": [
    [1775660597.0, 3.7],
    [1775660599.0, 3.5],
    [1775660600.0, 3.3],
    // ... 更多历史时序数据
  ],
  // 内存使用率时序数据 [时间戳, 使用率(%)]
  "mem_usage": [
    [1775660597.0, 70.9],
    [1775660599.0, 70.9],
    [1775660600.0, 70.9],
    // ...
  ],
  // GPU使用率时序数据 [时间戳, 使用率(%)]
  "gpu_usage": [
    [1775660597.0, 0],
    [1775660599.0, 0],
    // ...
  ],
  // 网络上传速度时序 [时间戳, 速度(MB/s)]
  "net_upload_speed": [
    [1775660597.0, 0.3],
    [1775660599.0, 0.29],
    // ...
  ],
  // 网络下载速度时序 [时间戳, 速度(MB/s)]
  "net_download_speed": [
    [1775660597.0, 0.13],
    [1775660599.0, 0.16],
    // ...
  ],
  // 系统负载时序 [时间戳, 负载值]
  "system_load": [
    [1775660597.0, 0.0],
    // ...
  ],
  // 进程数量时序 [时间戳, 进程数]
  "process_count": [
    [1775660597.0, 359],
    // ...
  ],
  // CPU温度时序数据
  "cpu_temperature": [],
  // 各CPU核心实时使用率(%)
  "cpu_core_usage": [
    5.0, 0.0, 3.0, 5.9, 3.0, 0.0, 0.0, 7.9,
    // ... 更多核心使用率
  ],
  // 系统启动时间戳
  "boot_time": 1775226359.9641707,
  // 电池信息（无则为空）
  "battery_info": {},
  // 当前数据时间戳
  "timestamp": 1775660718.215077
}
```

---

<Badge type="tip" text="GET" /> `https://www.epmc.top/api/ping/epmc`

查询EndlessPixel服务器ping值
### 返回示例：
**Ping 操作成功！返回延迟统计数据。** <Badge type="tip" text="200" />
```json:line-numbers
{
  // 平均延迟(ms)
  "avg": 1.25,
  "host": "cn.bing.com",
  "ip": "142.250.191.78",
  "location": "美国",
  // 最大延迟(ms)
  "max": 2.1,
  // 最小延迟(ms)
  "min": 0.89
}
```

请求失败，参数无效或目标不可达。前端可直接展示 message 字段。 <Badge type="danger" text="400" />
 **可能的原因**:
 - 无法解析主机: host 参数是一个无效的域名或IP地址。
   ```json:line-numbers
   {
       "code": "INVALID_PARAMETER",
       "message": "无法解析主机 '无效的主机名'，请检查输入是否正确。"
   }
   ```
 - Ping 超时: 目标主机无法访问或被防火墙拦截。
   ```json:line-numbers
   {
    "code": "INVALID_PARAMETER",
    "message": "对主机 '目标主机' 的 Ping 请求超时，目标可能不可达或防火墙已拦截。"
   }
   ```

服务繁忙。当服务器 Ping 请求过多时，会触发限流。前端可直接展示 message 字段。 <Badge type="danger" text="429" />
```json:line-numbers
{
    "code": "SERVICE_BUSY",
    "message": "Ping 服务正忙，请稍后再试。"
}
```

---

<Badge type="tip" text="GET" /> `https://www.epmc.top/api/webstatus`

查询EndlessPixel官方网站状态信息

**检查完成！根据目标URL的可达性返回不同结果。** <Badge type="tip" text="200" /> <Badge type="info" text="0" />

当目标 URL 可访问时，`status` 为目标返回的 HTTP 状态码（如 `200`）。
```json:line-numbers
{
  // 目标URL实际返回的HTTP状态码。
  "status": 200,
  "url": "https://www.google.com"
}
```

当目标 URL 不可达或请求失败（如 DNS 失败、超时、连接失败）时，`status` 为 `0`。
```json:line-numbers
{
  // 目标不可达或请求失败时固定为 0。
  "status": 0,
  "url": "https://example.invalid"
}
```

请求参数无效。请检查 url 参数是否提供且格式正确。 <Badge type="danger" text="400" />
```json:line-numbers
{
  "code": "INVALID_ARGUMENT",
  "details": {},
  "message": "Missing or invalid 'url' parameter."
}
```

请求URL失败（例如，DNS解析失败、连接超时）。 <Badge type="danger" text="502" />
```json:line-numbers
{
  "code": "REQUEST_FAILED",
  "details": {},
  "message": "Failed to request the URL. It might be down or unreachable."
}
```

---

<Badge type="tip" text="GET" /> `https://www.epmc.top/api/qq/groupinfo`

查询无尽像素官方 QQ 群的信息

**成功响应，返回QQ群的详细信息** <Badge type="tip" text="200" />
```json:line-numbers
{
  // 群号
  "group_id": "870594910",
  // 群名称
  "group_name": "无尽像素 - EndlessPixel | 1.21.11原版纯净生存 | 冲刺！MC 26.1.2",
  // 群头像URL（标准尺寸100x100）
  "avatar_url": "https://p.qlogo.cn/gh/870594910/870594910/640",
  // 群描述/简介
  "description": "",
  // 群标签
  "tag": "",
  // 加群链接（QR码URL）
  "join_url": "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=EDJsazmQ6OneCND7g522pbtg1XM1xg8B&authKey=k9ZYDFe%2Fm1WMnbxeydUTL5fSTQkwDjn02xR1ehMB%2F8P7kE8trc%2Bnex97zJ9G2w1T&noverify=0&group_code=870594910",
  // 最后更新时间（ISO 8601格式）
  "last_updated": "2026-04-09T19:08:41.992441324+08:00",
  // 当前成员数
  "member_count": 263,
  // 最大成员数
  "max_member_count": 500,
  // 活跃成员数（可选，部分群有此数据）
  "active_member_num": null,
  // 群主QQ号（可选）
  "owner_uin": "3785267350",
  // 群主UID（可选）
  "owner_uid": "u_6B016teRQPoIo-AkOCezkQ",
  // 建群时间戳（Unix时间戳，可选）
  "create_time": 1726422752,
  // 建群时间格式化字符串（可选）
  "create_time_str": "2024-09-16 01:52:32",
  // 群等级（可选）
  "group_grade": 3,
  // 群公告/简介（可选）
  "group_memo": "",
  // 认证类型（0=未认证，可选）
  "cert_type": 0,
  // 认证说明文本（可选）
  "cert_text": ""
}
```

