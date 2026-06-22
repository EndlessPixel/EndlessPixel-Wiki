### 查询EndlessPixel服务器在线状态

<Badge type="tip" text="GET" /> `https://www.endlesspixel.cn/api/mcserver/epmc`

::: tip
此接口返回结果与 [api.mcsrvstat.us](https://api.mcsrvstat.us/) 相同，请按照官方文档进行解析。
:::

#### 响应说明

**成功获取服务器状态** <Badge type="tip" text="200" />

返回格式与 mcsrvstat.us 保持一致，包含服务器在线状态、玩家数量、Motd 等信息。

| 字段 | 类型 | 说明 |
|------|------|------|
| ip | string | 服务器IP地址 |
| port | number | 服务器端口 |
| online | boolean | 服务器是否在线 |
| players | object | 玩家信息（包含 online、max、list） |
| version | string | 服务器版本 |
| motd | object | 服务器 Motd 信息 |

---

### 查询EndlessPixel服务器ping值

<Badge type="tip" text="GET" /> `https://www.endlesspixel.cn/api/ping/epmc`

测试 EndlessPixel 服务器的网络延迟，返回实时 ping 统计数据。

#### 返回示例

**Ping 操作成功，返回延迟统计数据** <Badge type="tip" text="200" />

```json:line-numbers
{
  // 目标主机域名
  "host": "mc.endlesspixel.cn",
  // 目标主机IP地址
  "ip": "142.250.191.78",
  // 服务器地理位置
  "location": "美国",
  // 最小延迟(ms)
  "min": 0.89,
  // 平均延迟(ms)
  "avg": 1.25,
  // 最大延迟(ms)
  "max": 2.1
}
```

**请求失败，目标不可达** <Badge type="danger" text="400" />

可能的原因：
- 无法解析主机：域名/IP地址无效

```json:line-numbers
{
  "code": "INVALID_PARAMETER",
  "message": "无法解析主机 '无效的主机名'，请检查输入是否正确。"
}
```

- Ping 超时：目标主机无法访问或被防火墙拦截

```json:line-numbers
{
  "code": "INVALID_PARAMETER",
  "message": "对主机 'mc.endlesspixel.cn' 的 Ping 请求超时，目标可能不可达或防火墙已拦截。"
}
```

**服务繁忙，触发限流** <Badge type="danger" text="429" />

```json:line-numbers
{
  "code": "SERVICE_BUSY",
  "message": "Ping 服务正忙，请稍后再试。"
}
```

---

### 查询EndlessPixel官方网站状态信息

<Badge type="tip" text="GET" /> `https://www.endlesspixel.cn/api/webstatus`

检测 EndlessPixel 官方网站的可访问性。

#### 查询参数

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| url | string | ❌ | 目标URL，默认为 EndlessPixel 官网 |

#### 返回示例

**网站可正常访问** <Badge type="tip" text="200" />

```json:line-numbers
{
  // 目标URL实际返回的HTTP状态码
  "status": 200,
  // 目标URL地址
  "url": "https://www.endlesspixel.com"
}
```

**网站不可达或请求失败** <Badge type="tip" text="200" />

当 DNS 解析失败、连接超时等情况时，status 返回 0。

```json:line-numbers
{
  // 目标不可达时固定为 0
  "status": 0,
  "url": "https://www.endlesspixel.com"
}
```

**请求参数无效** <Badge type="danger" text="400" />

```json:line-numbers
{
  "code": "INVALID_ARGUMENT",
  "message": "Missing or invalid 'url' parameter."
}
```

**请求URL失败** <Badge type="danger" text="502" />

```json:line-numbers
{
  "code": "REQUEST_FAILED",
  "message": "Failed to request the URL. It might be down or unreachable."
}
```

---

### 查询无尽像素官方QQ群信息

<Badge type="tip" text="GET" /> `https://www.endlesspixel.cn/api/qq/groupinfo`

获取 EndlessPixel 官方 QQ 群的详细信息，包括群名称、成员数、群主、加群链接等。

#### 返回示例

**成功响应，返回QQ群的详细信息** <Badge type="tip" text="200" />

```json:line-numbers
{
  // 群号
  "group_id": "870594910",
  // 群名称
  "group_name": "无尽像素 - EndlessPixel | 1.21.11原版纯净生存 | 冲刺！MC 26.1.2",
  // 群头像URL（标准尺寸 100x100）
  "avatar_url": "https://p.qlogo.cn/gh/870594910/870594910/640",
  // 群描述/简介
  "description": "",
  // 群标签
  "tag": "",
  // 加群链接（扫码或点击加群）
  "join_url": "http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=EDJsazmQ6OneCND7g522pbtg1XM1xg8B",
  // 最后更新时间（ISO 8601 格式）
  "last_updated": "2026-04-09T19:08:41.992441324+08:00",
  // 当前成员数
  "member_count": 263,
  // 最大成员数
  "max_member_count": 500,
  // 活跃成员数（部分群有此数据）
  "active_member_num": null,
  // 群主QQ号
  "owner_uin": "3785267350",
  // 群主UID
  "owner_uid": "u_6B016teRQPoIo-AkOCezkQ",
  // 建群时间戳（Unix时间戳）
  "create_time": 1726422752,
  // 建群时间格式化字符串
  "create_time_str": "2024-09-16 01:52:32",
  // 群等级（0-10）
  "group_grade": 3,
  // 群公告/简介
  "group_memo": "",
  // 认证类型（0=未认证，1=已认证）
  "cert_type": 0,
  // 认证说明文本
  "cert_text": ""
}
```

---

### 查询EndlessPixel服务器玩家游戏截图列表

<Badge type="tip" text="GET" /> `https://www.endlesspixel.cn/api/player/screenshot/list`

获取 EndlessPixel 服务器全部玩家上传的游戏截图元数据列表，包含图片地址、上传玩家、拍摄时间、分辨率、文件大小、SHA256 校验值等完整信息。

#### 返回示例

**成功响应，返回截图数组** <Badge type="tip" text="200" />

```json:line-numbers
[
  {
    // 截图文件相对路径（拼接域名可访问原图）
    "path": "assets/huge_2026-02-17_16.34.17.png",
    // 上传玩家游戏名称
    "player": "system_mini",
    // 截图拍摄时间
    "date": "2026-02-17 16:34:17",
    // 图片分辨率（宽x高）
    "resolution": "3840x2160",
    // 图片文件大小（带单位）
    "size": "18.0MB",
    // 文件 SHA256 哈希校验值（用于去重和完整性验证）
    "sha256": "6F2CDF5A52D3152551CC1553E904C443CA3457C1D05E8ACF9FAFA55654E49CAD"
  }
]
```

#### 错误响应

**服务内部错误** <Badge type="danger" text="500" />

```json:line-numbers
{
  "code": "INTERNAL_ERROR",
  "message": "获取截图列表失败，请稍后重试"
}
```

---

## 通用错误码说明

| HTTP状态码 | 错误码 | 说明 |
|-----------|--------|------|
| 400 | INVALID_PARAMETER | 请求参数无效 |
| 400 | INVALID_ARGUMENT | 参数缺失或格式错误 |
| 429 | SERVICE_BUSY | 服务繁忙，触发限流 |
| 500 | INTERNAL_ERROR | 服务器内部错误 |
| 502 | REQUEST_FAILED | 上游请求失败 |