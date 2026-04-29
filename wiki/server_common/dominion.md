# 领地

::: info
文档中 `<参数>` 为必填参数，`[参数]` 为可选参数。所有指令**区分大小写**，输入时请确保准确。
:::

## 📋 主菜单

- `/dominion menu [page]` — 打开可视化管理主界面，支持翻页（如 `/dom menu 2`）。

## 🏗️ 创建与删除

- `/dominion create <name>` — 手动选择两个对角点创建领地。
- `/dominion auto_create <name>` — 以玩家当前位置为中心自动生成默认大小的领地。
- `/dominion create_sub <name> <dominion_name>` — 在指定主领地内手动划定子领地边界。
- `/dominion auto_create_sub <name> <dominion_name>` — 在主领地内自动生成默认位置的子领地。
- `/dominion delete <name> [force]` — 删除领地。若领地内有资产或成员，需加 `force` 强制删除（不可恢复）。

## ⚙️ 领地管理

- `/dominion resize <name> <expand|contract> <size> [direction]` — 扩大或缩小领地边界。`direction` 可选 `north`、`south`、`east`、`west`、`up`、`down`，不填则向四周均匀调整。
- `/dominion set_env <name> <flag> <true|false>` — 设置环境规则。常用 `flag`：`weather`（天气）、`time`（昼夜更替）。
- `/dominion set_guest <name> <flag> <true|false>` — 设置访客（非成员）的权限。常用 `flag`：`build`（建造）、`use`（使用容器/门）、`destroy`（破坏）。
- `/dominion set_map_color <name> <color>` — 修改领地在动态地图上的显示颜色，如 `red`、`#00FF00`。
- `/dominion set_tp <name>` — 将玩家当前位置设为领地的传送点（需站在领地内）。
- `/dominion set_msg <name> <enter|leave> <message>` — 配置进出领地时的提示消息，支持颜色代码 `&a` 等。
- `/dominion rename <name> <newName>` — 修改领地名称（不可与已有领地重名）。
- `/dominion give <name> <player> [force]` — 将领地所有权转让给其他玩家。若对方领地数量已达上限，可加 `force` 强制转让。

## 👥 成员管理

- `/dominion member_add <name> <player>` — 将玩家添加为领地成员（默认拥有基础访问权限）。
- `/dominion member_remove <name> <member>` — 将成员移出领地，移出后失去所有权限。
- `/dominion member_set_pri <name> <member> <flag> <true|false>` — 单独设置某成员的具体权限。`flag` 同访客标志（如 `build`、`use`）。

## 🔐 权限组管理

- `/dominion group_create <name> <group>` — 在领地内创建权限组（如 `admin`、`builder`）。
- `/dominion group_set_flag <name> <group> <flag> <true|false>` — 为整个权限组设置统一权限，会覆盖组内成员的个人设置。
- `/dominion group_add_member <name> <group> <member>` — 将成员加入权限组，自动获得该组所有权限。
- `/dominion group_remove_member <name> <group> <member>` — 将成员移出权限组，失去该组赋予的权限。
- `/dominion group_rename <name> <group> <new_group>` — 重命名权限组，组内成员和权限保持不变。
- `/dominion group_delete <name> <group>` — 删除权限组，组内成员仅保留基础成员权限。

## 📄 模板与杂项

- `/dominion member_apply_template <name> <member> <template>` — 为成员快速应用预设的权限模板，一次性赋予一组权限。
- `/dominion template_create <template>` — 创建一个新的全局权限模板（可被任何领地重复使用）。
- `/dominion template_delete <template>` — 删除指定的权限模板（已应用的领地不受影响）。
- `/dominion template_set_flag <template> <flag> <true|false>` — 为权限模板设置具体的权限规则。
- `/dominion title_use <title_id>` — 激活已解锁的领地称号，称号通过成就或活动获得。
- `/dominion tp <name>` — 传送至指定领地的传送点（需提前用 `set_tp` 设置）。

::: warning
所有命令区分大小写，请正确输入。遇到问题可联系管理员帮助。
:::