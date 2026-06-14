### AI 客服

<Badge type="warning" text="POST" /> `https://www.epmc.top/api/ai/chat`

请求类型：`application/json`

响应类型：`text/event-stream`

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

| 字段 | 说明 |
|------|------|
| role | 身份标识：`user` 用户提问 / `assistant` AI回复 |
| content | 对话文本内容 |
| timestamp | 毫秒级Unix时间戳 |
| senderName | 前端展示昵称，固定填`用户`/`EPBot` |

## 二、流式响应解析规则 + 精简真实分片示例
### 响应格式规则
1. 每一行以 `data: ` 开头；
2. `delta.content` 是增量文字，需要不断拼接；
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

## 三、错误对照表
<table>
  <thead>
    <tr>
      <th colspan="3">异常场景与返回文案</th>
    </tr>
    <tr>
      <th>错误分类</th>
      <th>触发条件</th>
      <th>返回提示文本</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>IP限流</td>
      <td>单IP60秒内请求＞10次</td>
      <td>请求过于频繁，请稍后再试</td>
    </tr>
    <tr>
      <td>入参格式错误</td>
      <td>messages缺失、非数组结构</td>
      <td>请求格式错误</td>
    </tr>
    <tr>
      <td>服务文件异常</td>
      <td>system.txt读取失败</td>
      <td>服务初始化失败，请联系管理员</td>
    </tr>
    <tr>
      <td>配置缺失</td>
      <td>环境变量API_KEY为空</td>
      <td>服务配置错误</td>
    </tr>
    <tr>
      <td>网络连接失败</td>
      <td>上游接口DNS/连接失败</td>
      <td>网络连接失败，请检查网络</td>
    </tr>
    <tr>
      <td rowspan="4">上游状态码异常</td>
      <td>401 / 403</td>
      <td>认证失败，请联系管理员</td>
    </tr>
    <tr>
      <td>429</td>
      <td>上游服务限流，请稍后再试</td>
    </tr>
    <tr>
      <td>500及以上服务故障</td>
      <td>上游服务繁忙，请稍后再试</td>
    </tr>
    <tr>
      <td>其他状态码</td>
      <td>上游服务暂时不可用 (状态码xxx)</td>
    </tr>
    <tr>
      <td>超时/主动取消</td>
      <td>120s超时、前端关闭页面断开连接</td>
      <td>请求被取消或超时</td>
    </tr>
    <tr>
      <td>未知内部异常</td>
      <td>捕获其他未归类报错</td>
      <td>服务异常，请稍后再试</td>
    </tr>
  </tbody>
</table>