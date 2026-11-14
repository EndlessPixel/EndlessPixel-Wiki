### AI 客服

<Badge type="warning" text="POST" /> `https://www.endlesspixel.cn/api/ai/chat`

请求类型：`application/json` | 响应类型：`text/event-stream`

#### 一、请求体结构

##### 1. 首轮对话（无历史上下文）
```json:line-numbers
{
    "messages": [
        {
            "role":"user",
            "content":"Hi",
            "timestamp":1780211036459,
            "senderName":"用户"
        }
    ]
}
```

##### 2. 多轮上下文对话
```json:line-numbers
{
    "messages": [
        {
            "role":"user",
            "content":"你好",
            "timestamp":1780211036459,
            "senderName":"用户"
        },
        {
            "role":"assistant",
            "content":"你好，我是EPBot，有什么问题吗？",
            "timestamp":1781337011425,
            "senderName":"EPBot"
        },
        {
            "role":"user",
            "content":"我需要帮助",
            "timestamp":1781337011425,
            "senderName":"用户"
        }
    ]
}
```

##### 3. 指定模型（可选）
```json:line-numbers
{
    "messages": [...],
    "model": "qwen/qwen3-next-80b-a3b-instruct"
}
```

##### 4. 关闭深度思考（可选）
```json:line-numbers
{
    "messages": [...],
    "deepThinking": false
}
```

##### 5. 自定义采样参数（可选）
```json:line-numbers
{
    "messages": [...],
    "temperature": 0.6,
    "top_p": 0.9,
    "presence_penalty": 0.3,
    "frequency_penalty": 0.2
}
```

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| messages | array | ✅ | 对话历史数组 |
| messages[].role | string | ✅ | 身份标识：`user` 用户提问 / `assistant` AI回复 |
| messages[].content | string | ✅ | 对话文本内容 |
| messages[].timestamp | number | ✅ | 毫秒级Unix时间戳 |
| messages[].senderName | string | ✅ | 前端展示昵称，固定填`用户`/`EPBot` |
| model | string | ❌ | 指定使用的模型ID，不传则使用默认模型 |
| deepThinking | boolean | ❌ | 是否启用深度思考，默认 `true`。传 `false` 时不注入思考提示词，模型直接给出正式回复，响应中不再包含思考过程 |
| temperature | number | ❌ | 采样温度，范围 `0~2`，默认 `0.2`。越高越发散，越低越确定 |
| top_p | number | ❌ | 核采样阈值，范围 `0~1`，默认 `0.7` |
| presence_penalty | number | ❌ | 存在惩罚，范围 `-2~2`，默认 `0.5`。正值降低重复话题的概率 |
| frequency_penalty | number | ❌ | 频率惩罚，范围 `-2~2`，默认 `0.3`。正值降低重复用词的概率 |

::: warning
四个采样参数一旦传入就必须合法：超出范围或不是数字会返回 `400` 错误，不会静默回退到默认值。不传则使用上表默认值。
:::

#### 二、流式响应解析规则 + 精简真实分片示例

##### 响应格式规则

服务端会把上游 OpenAI 兼容接口的增量**转换**为自有事件后下发，客户端实际只会收到三类事件，外加一个结束标记：

| 事件 | 载荷示例 | 说明 |
|------|---------|------|
| 文本增量 | `{"type":"text-delta","delta":"加入 EndlessPixel"}` | 持续拼接 `delta` 即为回复正文 |
| 用量统计 | `{"type":"usage","usage":{"promptTokens":2579,"completionTokens":406,"totalTokens":2985}}` | 流末发送一次 |
| 错误 | `{"type":"error","errorText":"上游服务返回 521：...","serverSide":true,"error":{"kind":"upstream_status","message":"...","status":521}}` | 出错时下发，随后以 `[DONE]` 结束 |
| 结束标记 | `[DONE]` | 整条请求彻底结束 |

每一行仍以 `data: ` 开头。

⚠️ 事件名是 **`text-delta`**，不是 OpenAI 的 `choices[0].delta.content` ——
服务端已做转换，不存在把上游原始分片直接透传的情况。

##### 真实分片示例（截取开头+结尾，省去海量重复中间块）
```json:line-numbers
data: {"type":"text-delta","delta":"加入 EndlessPixel 服务器非常简单"}

// 中间大量 text-delta 分片省略，逻辑完全一致，持续拼接 delta 即可

data: {"type":"text-delta","delta":"一盏灯。"}

data: {"type":"usage","usage":{"promptTokens":2579,"completionTokens":406,"totalTokens":2985}}

data: [DONE]
```

##### Token 消耗统计说明
`usage` 事件提供本次请求的Token统计：
- `promptTokens`: 输入提示消耗的Token数
- `completionTokens`: 输出回复消耗的Token数
- `totalTokens`: 总消耗Token数

若上游未回传 usage，该事件不会出现，`[DONE]` 会直接跟在最后一个 `text-delta` 之后。

##### serverSide 字段

错误事件的 `serverSide` 表示「这次失败是否属于服务端问题」：

| 取值 | 含义 | 官方前端行为 |
|------|------|-------------|
| `true` | 服务端侧故障（配置缺失、上游 5xx、连接失败等） | 展示「链路自检」 |
| `false` | 请求侧问题（IP 限流、参数错误、上游 401/403/429） | **不展示** —— 不是服务器的锅 |
| 缺省 | 按服务端问题处理（判定用 `serverSide !== false`） | 展示 |

客户端判断依据是「是否等于 `false`」，所以**字段缺失等同于服务端问题**。

##### 结构化错误字段

错误信息**不做措辞包装**：上游返回了什么就报什么，便于直接定位问题。

```json:line-numbers
{
    "type": "error",
    "errorText": "上游服务返回 521：Web server is returning an unknown error",
    "serverSide": true,
    "error": {
        "kind": "upstream_status",
        "message": "上游服务返回 521：Web server is returning an unknown error",
        "status": 521,
        "code": "upstream_error",
        "detail": "{\"error\":{\"message\":\"Web server is returning an unknown error\"}}",
        "model": "grok-4.7"
    }
}
```

| 字段 | 说明 |
|------|------|
| `kind` | 错误类别，取值见下表 |
| `message` | 原始错误描述，与 `errorText` 一致 |
| `status` | 上游 HTTP 状态码，仅 `upstream_status` 出现 |
| `code` | 上游返回体里的错误码 |
| `detail` | 上游原始响应体（截断到 500 字符） |
| `model` | 本次请求使用的模型 |

`kind` 的取值：

| kind | 含义 |
|------|------|
| `rate_limited` | 单 IP 请求超频 |
| `bad_request` | 请求体格式错误（`messages` 缺失或不是数组） |
| `invalid_params` | 采样参数越界 |
| `invalid_model` | 模型 ID 非法 |
| `config` | 服务端配置缺失（`API_KEY` 未设置、系统提示词读取失败） |
| `upstream_unreachable` | 连不上上游 |
| `upstream_timeout` | 上游响应头超时 |
| `upstream_status` | 上游返回了非 2xx |
| `upstream_stream` | 上游流式传输中途断开 |
| `internal` | 服务端内部异常 |

> **脱敏**：凭证类内容（`API_KEY`、`Bearer` token、`sk-` 开头的 key）会被替换成 `***`，
> 其余内容原样保留 —— 不再整条改写成「服务繁忙」之类的固定文案。

#### 三、错误对照表

表中的 `serverSide` 即错误事件里携带的字段，决定官方前端是否展示「链路自检」（详见第四节）。

| 错误分类 | `kind` | 触发条件 | `errorText`（原样返回，不再包装） | serverSide |
|---------|--------|---------|------------------------------|-----------|
| IP限流 | `rate_limited` | 单IP 60秒内请求＞10次 | 请求过于频繁，请稍后再试 | `false` |
| 入参格式错误 | `bad_request` | messages缺失、非数组结构 | 请求格式错误 | `false` |
| 采样参数越界 | `invalid_params` | 采样参数超出范围 | 无效的采样参数：temperature(0~2) / … | `false` |
| 模型参数无效 | `invalid_model` | 传入不支持的模型ID | 无效的模型参数 | `false` |
| 服务文件异常 | `config` | system.md 读取失败 | 系统提示词加载失败：<原始错误> | `true` |
| 配置缺失 | `config` | 环境变量API_KEY为空 | 服务配置错误：环境变量 API_KEY 未设置 | `true` |
| 网络连接失败 | `upstream_unreachable` | 上游接口DNS/连接失败 | 连接上游失败: <原始错误> | `true` |
| 上游响应头超时 | `upstream_timeout` | 上游 60 秒内未返回响应头 | 上游 60000ms 内未返回响应头: <地址> | `true` |
| 上游状态码 401/403 | `upstream_status` | 认证失败 | 上游服务返回 401：<上游原始信息> | `true` |
| 上游状态码 429 | `upstream_status` | 上游服务限流 | 上游服务返回 429：<上游原始信息> | `false` |
| 上游状态码 500+ | `upstream_status` | 上游服务故障 | 上游服务返回 5xx：<上游原始信息> | `true` |
| 其他上游状态码 | `upstream_status` | 其他HTTP错误 | 上游服务返回 <状态码>：<上游原始信息> | 4xx（408 除外）为 `false`，其余 `true` |
| 流传输中断 | `upstream_stream` | 上游流式传输中途断开 | 上游流式传输中断：<原始错误> | `true` |
| 未知内部异常 | `internal` | 捕获其他未归类报错 | 服务内部错误：<原始错误> | `true` |

判定规则：4xx 属请求侧或策略侧（参数、认证、限流），**唯独 408（上游响应超时）算服务侧**。
其中 401/403 是例外：密钥由服务端统一管理，属于服务端配置问题，因此仍算服务侧（会展示链路自检）。

#### 四、链路自检

<Badge type="tip" text="GET" /> `https://www.endlesspixel.cn/api/ai/health`

AI 对话失败、且**属于服务端问题**（`serverSide !== false`）时，官方前端会在失败消息下方展示一条链路自检，标明断在哪一层：

```
链路自检  浏览器 ✔  网站后端 ✔  代理服务器 ✔  上游服务 ❌
```

##### 返回示例
```json:line-numbers
{
    "layers": [
        { "id": "browser",  "label": "浏览器",     "ok": true  },
        { "id": "backend",  "label": "网站后端",   "ok": true  },
        { "id": "proxy",    "label": "代理服务器", "ok": true  },
        { "id": "upstream", "label": "上游服务",   "ok": false }
    ]
}
```

##### 各层判定方式

| 层 | id | 判定 |
|----|----|------|
| 浏览器 | `browser` | 恒 `true` —— 能把失败消息渲染出来就说明它在 |
| 网站后端 | `backend` | 恒 `true` —— 能拿到本接口的响应就说明它在 |
| 代理服务器 | `proxy` | `GET ${AI_EDGE_BASE_URL}/ping`，非 2xx 即 `false` |
| 上游服务 | `upstream` | **不单独探测**，恒 `false` |

上游不探测的原因：能走到自检这一步，说明本次对话已经失败了 ——
代理服务器不通，上游必然不可达；它通的时候，错误只可能出在上游。
所以自检永远只标记一个断点，它之后的层连带 ❌。

`AI_EDGE_BASE_URL` 是服务端环境变量，不对外公开。

##### 实现说明
- 探测在**服务端**完成，前端只负责展示，因此不受 CORS 限制，也不会被浏览器拦截而误判 ❌。
- 单次探测超时 3 秒。
- 官方前端对结果有 30 秒缓存，同一次故障里的多条失败消息不会重复请求。
- 本接口只负责「探测并如实回报」，是否展示由客户端根据失败原因决定。

#### 五、可用模型列表

<Badge type="tip" text="GET" /> `https://www.endlesspixel.cn/api/ai/models`

获取当前可用的所有模型列表，返回格式遵循 OpenAI API 规范。

#### 返回示例
```json:line-numbers
{
    "data": [
        {
            "id": "qwen/qwen3-next-80b-a3b-instruct",
            "object": "model",
            "created": 1626777600,
            "owned_by": "custom"
        },
        {
            "id": "deepseek-chat",
            "object": "model",
            "created": 1626777600,
            "owned_by": "deepseek"
        }
    ],
    "object": "list",
    "success": true
}
```

##### 模型使用建议
⚠️ **并非所有模型都适合用于对话回复**，建议优先选择以下类型的模型：
- 包含 `instruct`、`chat` 等关键词的模型
- 主流厂商的通用对话模型（如 Qwen、DeepSeek、Gemini 等）
- 参数规模适中的模型（7B-80B 通常效果较好）
- 模型来自第三方供应商，不保障模型质量和可用性，请自行评估。

随意选择代码模型、嵌入模型、安全检测模型等专用模型可能导致回复质量不佳。

#### 六、前端集成示例

##### 发送请求（指定模型）
```javascript
const controller = new AbortController();

await fetchEventSource('/api/ai/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        messages: [
            { role: 'user', content: '你好', timestamp: Date.now(), senderName: '用户' }
        ],
        model: 'qwen/qwen3-next-80b-a3b-instruct'  // 可选
    }),
    signal: controller.signal,
    onopen(response) {
        if (!response.ok) throw new Error('Request failed');
    },
    onmessage(event) {
        if (event.data === '[DONE]') return;

        const data = JSON.parse(event.data);

        // 处理增量内容
        if (data.type === 'text-delta' && data.delta) {
            // 拼接回复内容
            console.log('Received chunk:', data.delta);
        }

        // 处理 token 统计（流末发送一次）
        if (data.type === 'usage') {
            console.log('Token usage:', data.usage);
        }

        // 处理错误：serverSide 为 false 属请求侧问题，不必展示链路自检
        if (data.type === 'error') {
            console.error('AI error:', data.errorText, 'serverSide:', data.serverSide);
            // error 为结构化错误详情：kind / message / status / code / detail / model
            console.error('detail:', data.error);
        }
    },
    onerror(error) {
        console.error('Stream error:', error);
    }
});
```

##### 获取模型列表
```javascript
const response = await fetch('/api/ai/models');
const { data: models } = await response.json();
console.log('Available models:', models);
```

#### 七、注意事项

1. **流式响应处理**：需要持续拼接 `text-delta` 事件的 `delta`，直到收到 `[DONE]`
2. **Token统计**：只在流末的 `usage` 事件中提供；上游未回传时该事件不出现
3. **请求超时**：后端要求上游在 60 秒内返回响应头（`UPSTREAM_HEADER_TIMEOUT_MS`），超时即中断请求
4. **模型选择**：不指定 `model` 字段时使用服务端默认模型
5. **限流保护**：单IP每分钟最多10次请求，超过后会返回错误提示
6. **失败归因**：错误事件的 `serverSide` 为 `false` 时属于请求侧问题，
   不要当作服务器故障报修；`true` 或字段缺省时再考虑走官方反馈渠道
7. **深度思考**：默认开启，可在请求体传 `deepThinking: false` 关闭；
   关闭后模型不再输出 `<thinking>` 块，响应里也不会有思考过程
8. **错误信息不再包装**：`errorText` 与 `error.message` 直接给出原始原因，
   需要区分具体失败点时请读 `error.kind` / `status` / `code`，不要按文案做字符串匹配
8. **采样参数**：`temperature` / `top_p` / `presence_penalty` / `frequency_penalty` 均可选，
   不传用默认值；传入的数值必须在各自范围内，否则返回 `400`