### OAuth第三方身份验证

::: warning
本文章讲述了一个已被弃用的功能
:::

**调用 EndlessPixel 的身份验证接口，通过 OAuth 2.0 实现第三方用户身份校验。**

::: tip
本文档指导第三方网站 / 应用接入 EndlessPixel 联合身份认证系统。  
接入过程分为两个阶段：**应用注册**（一次性）和 **登录集成**（每次登录）。
:::

## 一、注册 OAuth 应用

### 1.1 创建应用

1. 登录 EndlessPixel 官网，进入账号主页
2. 点击用户名 → **「开发者选项」** → **OAuth APP**（`/profile/dev/oauth_app`）
3. 点击 **「新建应用」**，填写应用名称和网站域名

### 1.2 域名归属验证

1. 点击 **「开始验证域名」**，下载 `EndlessPixelOAuth.xml`
2. 将文件放置于网站**静态文件根目录**，确保可通过公网 HTTPS 访问：

   ```
   https://example.com/EndlessPixelOAuth.xml
   ```

::: warning
- 必须使用 **HTTPS**
- 文件内容**不得修改**
- 文件需**长期可访问**（EndlessPixel 会定期复检）
:::

3. 返回页面点击 **「验证」**，通过后状态更新为「已验证」

### 1.3 获取应用凭证

| 凭证 | 说明 | 安全级别 |
|----|----|----|
| `client_id` | 应用唯一标识 | 公开 |
| `client_secret` | 用于服务端换取令牌 | **绝密** |

::: warning 🔒
`client_secret` **仅展示一次**，之后不可再查看。请立即妥善保存，泄露后可在管理页面「重置密钥」。
:::

### 1.4 配置回调地址

在应用管理页面设置 `redirect_uri`：

- 必须 **HTTPS**
- 必须与验证通过的域名一致
- 建议专用路由：`https://example.com/auth/endlesspixel/callback`

---

## 二、接入登录系统

### 2.1 流程总览

```
用户点击"EndlessPixel 登录"
  → 你的后端生成 state，302 跳转到 EndlessPixel 授权页
  → 用户授权后，EndlessPixel 回调 redirect_uri?code=xxx&state=yyy
  → 你的后端校验 state → 用 code 换 access_token → 建立本地登录态
  → 302 跳转到业务页面
```

### 2.2 步骤一：生成 state + 发起授权请求

**`state` 由你的系统生成**（非 EndlessPixel 下发），用于防 CSRF 和绑定登录会话。

| 要求 | 说明 |
|----|----|
| 随机源 | CSPRNG（如 Python `secrets`、Node `crypto.randomBytes`） |
| 长度 | ≥ 32 字节 |
| 绑定 | 存入当前 Session |
| 有效期 | ≤ 10 分钟 |
| 一次性 | 使用后立即销毁 |

**构造授权地址**：

<Badge type="tip" text="GET" /> `https://www.endlesspixel.cn/oauth/authorize`

```
?response_type=code
&client_id={你的 client_id}
&redirect_uri={你的回调地址}
&state={你生成的 state}
&scope=profile
```

| 参数 | 必填 | 说明 |
|----|----|----|
| `response_type` | ✅ | 固定 `code` |
| `client_id` | ✅ | 应用注册获取 |
| `redirect_uri` | ✅ | 必须与注册值**完全一致** |
| `state` | ✅ | 本次生成的随机字符串 |
| `scope` | ⚠️ | 可选，如 `profile`、`email` |

### 2.3 步骤二：处理回调

EndlessPixel 回调：

```http
GET /auth/endlesspixel/callback?code=xxx&state=yyy
```

#### (1) 校验 state（⚠️ 最关键的安全步骤）

```python
received_state = request.query.get("state")
expected_state = session.pop("oauth_state", None)

if not received_state or not expected_state:
    abort(400, "state 缺失或已过期")
if received_state != expected_state:
    abort(400, "state 不匹配，疑似 CSRF 攻击")
if now() > session.pop("oauth_state_expire"):
    abort(400, "state 已过期")
# ✅ 校验通过
```

#### (2) 用 code 换取 access_token

<Badge type="warning" text="POST" /> `https://www.endlesspixel.cn/oauth/token`

**请求体**（application/x-www-form-urlencoded）：

```
grant_type=authorization_code
&code={收到的授权码}
&redirect_uri={回调地址}
&client_id={client_id}
&client_secret={client_secret}
```

**请求成功** <Badge type="tip" text="200" />

```json
{
  "access_token": "ep_at_xxxxxx",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "ep_rt_xxxxxx",
  "scope": "profile"
}
```

| 字段 | 类型 | 说明 |
|------|------|------|
| `access_token` | string | 访问令牌 |
| `token_type` | string | 固定 `Bearer` |
| `expires_in` | number | 有效期（秒） |
| `refresh_token` | string | 刷新令牌 |
| `scope` | string | 实际授予的权限范围 |

::: warning
此请求必须由**服务端发起**，`client_secret` 绝不进前端代码或 URL。
:::

#### (3) 建立本地登录态

```python
user = find_or_create_user(
    provider="endlesspixel",
    provider_uid=userinfo["sub"],
    username=userinfo["username"],
    display_name=userinfo["display_name"],
    email=userinfo["email"]
)
session["user_id"] = user.id
redirect("/dashboard")
```

---

## 三、刷新与撤销

### 3.1 刷新令牌

当 `access_token` 过期，使用 `refresh_token` 获取新令牌。

<Badge type="warning" text="POST" /> `https://www.endlesspixel.cn/oauth/token`

```
grant_type=refresh_token
&refresh_token={refresh_token}
&client_id={client_id}
&client_secret={client_secret}
```

**请求成功** <Badge type="tip" text="200" />

```json
{
  "access_token": "ep_at_new_xxxxxx",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "ep_rt_new_xxxxxx",
  "scope": "profile"
}
```

### 3.2 撤销授权

<Badge type="warning" text="POST" /> `https://www.endlesspixel.cn/oauth/revoke`

```
token={access_token 或 refresh_token}
&client_id={client_id}
&client_secret={client_secret}
```

**请求成功** <Badge type="tip" text="200" />

```json
{ "status": "revoked" }
```

---

## 四、安全设计

### 4.1 核心原则

| 安全目标 | 实现方式 |
|----|----|
| 域名归属 | 静态 XML 文件验证（注册阶段） |
| 防 CSRF | `state` 参数绑定会话（登录阶段） |
| 防 code 重放 | `code` 一次性使用 |
| 防凭据泄露 | `client_secret` / `access_token` 仅服务端持有 |
| 防开放重定向 | 回调地址白名单 + 跳转目标存 Session |

### 4.2 `state` 设计哲学

> `state` 由客户端生成，基于「**高熵随机 + 会话绑定 + 一次性使用**」的组合防护，在工程意义上可视为不可伪造。

### 4.3 敏感信息处理规范

| 信息 | 可出现在 URL | 可出现在前端 |
|----|----|----|
| `client_secret` | ❌ | ❌ |
| `access_token` | ❌ | ❌ |
| `refresh_token` | ❌ | ❌ |
| `state` | ✅（仅 OAuth 跳转链路） | ❌ |
| `code` | ✅（OAuth 规范强制，一次性） | ✅（立即被后端消费） |

---

## 五、错误处理

### 5.1 授权回调错误

EndlessPixel 可能在回调中返回错误：

```http
GET /callback?error=access_denied&error_description=用户拒绝了授权请求&state=yyy
```

| `error` 值 | 含义 | 处理方式 |
|----|----|----|
| `access_denied` | 用户拒绝授权 | 引导重新登录 |
| `invalid_request` | 参数缺失或格式错误 | 检查请求构造 |
| `unauthorized_client` | 应用未验证或已禁用 | 检查应用状态 |
| `invalid_scope` | 权限范围不被允许 | 调整 `scope` |
| `server_error` | EndlessPixel 服务端异常 | 重试或稍后再试 |

### 5.2 令牌接口错误

**请求失败** <Badge type="danger" text="400" />

```json
{ "error": "invalid_grant", "error_description": "授权码无效或已过期" }
```

| `error` 值 | 含义 | 处理方式 |
|----|----|----|
| `invalid_grant` | code 无效/过期/已使用 | 重新发起登录 |
| `invalid_client` | client_id/secret 错误 | 检查凭证 |
| `invalid_redirect_uri` | 回调地址不匹配 | 检查配置 |