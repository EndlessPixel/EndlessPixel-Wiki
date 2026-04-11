# 福利

::: info
文档中 `<参数>` 为必填参数，`[参数]` 为可选参数。所有指令**区分大小写**，输入时请确保准确。
:::

## 每日签到 <Badge type="tip" text="自研功能" />

:::tip
本签到插件为服务器独立开发功能，若遇到异常或 Bug，欢迎前往 GitHub 反馈问题，帮助我们持续优化：
[https://github.com/EndlessPixel/EP-XPcheckin/issues](sslocal://flow/file_open?url=https%3A%2F%2Fgithub.com%2FEndlessPixel%2FEP-XPcheckin%2Fissues&flow_extra=eyJsaW5rX3R5cGUiOiJjb2RlX2ludGVycHJldGVyIn0=)
:::

🎯 `/checkin`
每日一次免费签到，可获得大量随机经验奖励。
连续签到天数越多，经验加成越高，最高可获得巨额十位数经验。

📌 额外指令
- `/checkin info` — 查看个人签到记录、连续天数与总经验统计
- `/checkin on` — 开启登录签到提醒
- `/checkin off` — 关闭登录签到提醒

## CDK 兑换系统 <Badge type="danger" text="功能异常" />

:::warning
当前 CDK 兑换模块存在故障，**暂无法正常使用**，修复完成后将另行通知。
:::

🎁 `/cdk use <兑换码>`
服务器官方福利兑换入口，用于领取礼包、道具、经验、限时权限等奖励。

使用说明：
- 输入完整且准确的 CDK 码（区分大小写），例如 `/cdk use 20260102`
- 系统自动校验：有效期、使用状态、发放来源
- 校验通过后，奖励将自动发放至背包或账户
- 单个 CDK 通常仅限使用一次，不可重复兑换

失败可能原因：
- 兑换码不存在或输入错误
- 兑换码已过期
- 兑换码已被使用
- 兑换码达到最大使用次数

::: info
**如何获取CDK兑换码？**
加入服务器官方**Discord**频道，在**#endlesspixel-cdk**频道获取。每隔一段时间都会发放一次。
:::

::: warning
所有命令区分大小写，请正确输入。遇到问题可联系管理员帮助。
:::