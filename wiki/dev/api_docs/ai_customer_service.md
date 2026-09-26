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

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| messages | array | ✅ | 对话历史数组 |
| messages[].role | string | ✅ | 身份标识：`user` 用户提问 / `assistant` AI回复 |
| messages[].content | string | ✅ | 对话文本内容 |
| messages[].timestamp | number | ✅ | 毫秒级Unix时间戳 |
| messages[].senderName | string | ✅ | 前端展示昵称，固定填`用户`/`EPBot` |
| model | string | ❌ | 指定使用的模型ID，不传则使用默认模型 |

#### 二、流式响应解析规则 + 精简真实分片示例

##### 响应格式规则

服务端会把上游 OpenAI 兼容接口的增量**转换**为自有事件后下发，客户端实际只会收到三类事件，外加一个结束标记：

| 事件 | 载荷示例 | 说明 |
|------|---------|------|
| 文本增量 | `{"type":"text-delta","delta":"加入 EndlessPixel"}` | 持续拼接 `delta` 即为回复正文 |
| 用量统计 | `{"type":"usage","usage":{"promptTokens":2579,"completionTokens":406,"totalTokens":2985}}` | 流末发送一次 |
| 错误 | `{"type":"error","errorText":"上游服务繁忙，请稍后再试","serverSide":true}` | 出错时下发，随后以 `[DONE]` 结束 |
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
上游流式传输中途断开时下发的事件就属于这种情况。

#### 三、错误对照表

表中的 `serverSide` 即错误事件里携带的字段，决定官方前端是否展示「链路自检」（详见第四节）。

| 错误分类 | 触发条件 | 返回提示文本 | serverSide |
|---------|---------|-------------|-----------|
| IP限流 | 单IP 60秒内请求＞10次 | 请求过于频繁，请稍后再试 | `false` |
| 入参格式错误 | messages缺失、非数组结构 | 请求格式错误 | `false` |
| 服务文件异常 | system.txt读取失败 | 服务初始化失败，请联系管理员 | `true` |
| 配置缺失 | 环境变量API_KEY为空 | 服务配置错误 | `true` |
| 网络连接失败 | 上游接口DNS/连接失败 | 网络连接失败，请检查网络 | `true` |
| 上游状态码 401/403 | 认证失败 | 认证失败，请联系管理员 | `false` |
| 上游状态码 429 | 上游服务限流 | 上游服务限流，请稍后再试 | `false` |
| 上游状态码 500+ | 上游服务故障 | 上游服务繁忙，请稍后再试 | `true` |
| 其他上游状态码 | 其他HTTP错误 | 上游服务暂时不可用 (状态码xxx) | 4xx（408 除外）为 `false`，其余 `true` |
| 超时/主动取消 | 120s超时、前端关闭页面 | 请求被取消或超时 | `true` |
| 模型参数无效 | 传入不支持的模型ID | 无效的模型参数 | `false` |
| 流传输中断 | 上游流式传输中途断开 | 上游流式传输中断，请重试 | 缺省（视为 `true`） |
| 未知内部异常 | 捕获其他未归类报错 | 服务异常，请稍后再试 | `true` |

判定规则：4xx 属请求侧或策略侧（参数、认证、限流），**唯独 408（上游响应超时）算服务侧**。

#### 四、链路自检

<Badge type="tip" text="GET" /> `https://www.endlesspixel.cn/api/ai/health`

AI 对话失败、且**属于服务端问题**（`serverSide !== false`）时，官方前端会在失败消息下方展示一条链路自检，标明断在哪一层：

```
链路自检  浏览器 ✔  网站后端 ✔  nginx ✔  代理服务器 ✔  上游服务 ❌
```

##### 返回示例
```json:line-numbers
{
    "layers": [
        { "id": "browser",  "label": "浏览器",     "ok": true  },
        { "id": "backend",  "label": "网站后端",   "ok": true  },
        { "id": "nginx",    "label": "nginx",      "ok": true  },
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
| nginx | `nginx` | `GET ${AI_EDGE_BASE_URL}/ping-nginx`，非 2xx 即 `false` |
| 代理服务器 | `proxy` | `GET ${AI_EDGE_BASE_URL}/ping`，非 2xx 即 `false` |
| 上游服务 | `upstream` | **不单独探测**，恒 `false` |

上游不探测的原因：能走到自检这一步，说明本次对话已经失败了 ——
下面两层只要有一层不通，上游必然不可达；两层都通时，错误只可能出在上游。
所以自检永远只标记一个断点，它之后的层连带 ❌。

`AI_EDGE_BASE_URL` 是服务端环境变量，不对外公开。

##### 实现说明
- 探测在**服务端**完成，前端只负责展示，因此不受 CORS 限制，也不会被浏览器拦截而误判 ❌。
- 单次探测超时 3 秒，nginx 与代理服务器两层**并发**探测。
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
3. **请求超时**：后端设置了120秒超时限制
4. **模型选择**：不指定 `model` 字段时使用服务端默认模型
5. **限流保护**：单IP每分钟最多10次请求，超过后会返回错误提示
6. **失败归因**：错误事件的 `serverSide` 为 `false` 时属于请求侧问题，
   不要当作服务器故障报修；`true` 或字段缺省时再考虑走官方反馈渠道