### 查询EndlessPixel服务器在线状态
<Badge type="tip" text="GET" /> `https://www.epmc.top/api/mcserver/epmc`

::: tip
此接口返回结果与[api.mcsrvstat.us](https://api.mcsrvstat.us/)相同，请按照[api.mcsrvstat.us](https://api.mcsrvstat.us/)的解析返回说明文档进行解析，此处不提供解析说明。
:::

---

### 查询EndlessPixel服务器ping值
<Badge type="tip" text="GET" /> `https://www.epmc.top/api/ping/epmc`

#### 返回示例：
**Ping 操作成功！返回延迟统计数据。** <Badge type="tip" text="200" />
```json:line-numbers
{
  // 平均延迟(ms)
  "avg": 1.25,
  // 目标主机域名
  "host": "cn.bing.com",
  // 目标主机IP地址
  "ip": "142.250.191.78",
  // 服务器位置
  "location": "美国",
  // 最大延迟(ms)
  "max": 2.1,
  // 最小延迟(ms)
  "min": 0.89
}
```

请求失败，参数无效或目标不可达。前端可直接展示 message 字段。 <Badge type="danger" text="400" />
 **可能的原因**:
 - 无法解析主机: 传入的域名/IP地址是一个无效的域名或IP地址。
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

### 查询EndlessPixel官方网站状态信息
<Badge type="tip" text="GET" /> `https://www.epmc.top/api/webstatus`

#### 返回示例：
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

### 查询无尽像素官方 QQ 群的信息
<Badge type="tip" text="GET" /> `https://www.epmc.top/api/qq/groupinfo`

#### 返回示例：
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

---

### 查询EndlessPixel服务器玩家游戏截图列表
<Badge type="tip" text="GET" /> `https://www.epmc.top/api/player/screenshot/list`

获取 EndlessPixel 服务器全部玩家游戏截图元数据列表，包含图片地址、上传玩家、时间、分辨率、大小、SHA256 校验值等完整信息。

#### 返回示例：
**成功响应，返回截图数组** <Badge type="tip" text="200" />
```json:line-numbers
[
  {
    // 截图文件路径
    "path": "assets/huge_2026-02-17_16.34.17.png",
    // 上传玩家游戏名称
    "player": "system_mini",
    // 截图拍摄时间（标准日期格式）
    "date": "2026-02-17 16:34:17",
    // 图片分辨率
    "resolution": "3840x2160",
    // 图片文件大小
    "size": "18.0MB",
    // 文件 SHA256 哈希校验值
    "sha256": "6F2CDF5A52D3152551CC1553E904C443CA3457C1D05E8ACF9FAFA55654E49CAD"
  }
]
```


