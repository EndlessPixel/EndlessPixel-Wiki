### AI 客服

<Badge type="warning" text="POST" /> `https://www.endlesspixel.cn/api/ai/chat`

请求类型：`application/json` | 响应类型：`text/event-stream`

## 一、请求体结构

### 1. 首轮对话（无历史上下文）
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

### 2. 多轮上下文对话
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

### 3. 指定模型（可选）
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

## 二、流式响应解析规则 + 精简真实分片示例

### 响应格式规则
1. 每一行以 `data: ` 开头；
2. `choices[0].delta.content` 是增量文字，需要不断拼接；
3. `finish_reason: stop` = AI回答生成完毕；
4. 末尾固定 `data: [DONE]` 代表整条请求彻底结束；
5. 最后一块携带 `usage` 统计token消耗。

### 真实分片示例（截取开头+结尾，省去海量重复中间块）
```json:line-numbers
data: {"id":"chatcmpl-8bb3505431ff5eb0","object":"chat.completion.chunk","created":1781421878,"model":"qwen/qwen3-next-80b-a3b-instruct","choices":[{"index":0,"delta":{"role":"assistant","content":""}}]}

data: {"id":"chatcmpl-8bb3505431ff5eb0","object":"chat.completion.chunk","created":1781421878,"model":"qwen/qwen3-next-80b-a3b-instruct","choices":[{"index":0,"delta":{"content":"加入 EndlessPixel 服务器非常简单"}}]}

// 中间大量delta分片省略，逻辑完全一致，持续拼接content即可

data: {"id":"chatcmpl-8bb3505431ff5eb0","object":"chat.completion.chunk","created":1781421878,"model":"qwen/qwen3-next-80b-a3b-instruct","choices":[{"index":0,"delta":{"content":"一盏灯。"},"finish_reason":"stop"}]}

data: {"id":"chatcmpl-8bb3505431ff5eb0","object":"chat.completion.chunk","created":1781421878,"model":"qwen/qwen3-next-80b-a3b-instruct","choices":[],"usage":{"prompt_tokens":2579,"total_tokens":2985,"completion_tokens":406}}

data: [DONE]
```

### Token 消耗统计说明
最后一条包含 `usage` 字段的数据块提供本次请求的Token统计：
- `prompt_tokens`: 输入提示消耗的Token数
- `completion_tokens`: 输出回复消耗的Token数  
- `total_tokens`: 总消耗Token数

## 三、错误对照表

| 错误分类 | 触发条件 | 返回提示文本 |
|---------|---------|-------------|
| IP限流 | 单IP 60秒内请求＞10次 | 请求过于频繁，请稍后再试 |
| 入参格式错误 | messages缺失、非数组结构 | 请求格式错误 |
| 服务文件异常 | system.txt读取失败 | 服务初始化失败，请联系管理员 |
| 配置缺失 | 环境变量API_KEY为空 | 服务配置错误 |
| 网络连接失败 | 上游接口DNS/连接失败 | 网络连接失败，请检查网络 |
| 上游状态码 401/403 | 认证失败 | 认证失败，请联系管理员 |
| 上游状态码 429 | 上游服务限流 | 上游服务限流，请稍后再试 |
| 上游状态码 500+ | 上游服务故障 | 上游服务繁忙，请稍后再试 |
| 其他上游状态码 | 其他HTTP错误 | 上游服务暂时不可用 (状态码xxx) |
| 超时/主动取消 | 120s超时、前端关闭页面 | 请求被取消或超时 |
| 模型参数无效 | 传入不支持的模型ID | 无效的模型参数 |
| 未知内部异常 | 捕获其他未归类报错 | 服务异常，请稍后再试 |

## 四、可用模型列表

<Badge type="tip" text="GET" /> `https://www.endlesspixel.cn/api/ai/models`

获取当前可用的所有模型列表，返回格式遵循 OpenAI API 规范。

### 响应示例
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

### 模型使用建议
⚠️ **并非所有模型都适合用于对话回复**，建议优先选择以下类型的模型：
- 包含 `instruct`、`chat` 等关键词的模型
- 主流厂商的通用对话模型（如 Qwen、DeepSeek、Gemini 等）
- 参数规模适中的模型（7B-80B 通常效果较好）
- 模型来自第三方供应商，不保障模型质量和可用性，请自行评估。

随意选择代码模型、嵌入模型、安全检测模型等专用模型可能导致回复质量不佳。

## 五、前端集成示例

### 发送请求（指定模型）
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
        const content = data.choices?.[0]?.delta?.content;
        if (content) {
            // 拼接回复内容
            console.log('Received chunk:', content);
        }
        
        // 处理 token 统计（最后一条消息）
        if (data.usage) {
            console.log('Token usage:', data.usage);
        }
    },
    onerror(error) {
        console.error('Stream error:', error);
    }
});
```

### 获取模型列表
```javascript
const response = await fetch('/api/ai/models');
const { data: models } = await response.json();
console.log('Available models:', models);
```

## 六、注意事项

1. **流式响应处理**：需要持续拼接 `delta.content` 直到收到 `finish_reason: stop`
2. **Token统计**：只在最后一条消息中包含 `usage` 字段
3. **请求超时**：后端设置了120秒超时限制
4. **模型选择**：不指定 `model` 字段时使用服务端默认模型
5. **限流保护**：单IP每分钟最多10次请求，超过后会返回错误提示