# 领地

::: info
此文档中`<参数>`表示必须输入的参数，`[参数]`表示可选参数。

以下所有/dominion命令都可以使用简写/dom代替
:::
::: tip
如果你是想要图形化操作，请前往[领地管理](/dominion)页面，这里仅介绍核心指令。
:::

### 📋 主菜单指令

/dominion menu `[page]`
这条指令是领地插件的核心入口，输入后可直接打开可视化的领地管理主菜单界面。指令后的`[page]`参数用于翻页，当菜单内功能选项较多时，输入/dominion menu 2即可查看第二页的功能。主菜单整合了领地创建、管理、成员设置等所有核心功能，无需记忆复杂的指令参数，通过点击操作就能完成大部分领地相关配置，尤其适合新手玩家快速上手领地系统。

### 🏗️ 创建与删除指令

1. `/dominion create <name> dominion auto_create <name>`（创建领地）

这两条指令用于创建全新领地，核心区别在于领地范围的划定方式。/dominion create `<name>`需要玩家手动划定领地的对角坐标，确定领地的具体边界后才能完成创建；/dominion auto_create `<name>`则是自动创建模式，系统会以玩家当前所在位置为中心，按照服务器默认的尺寸生成领地，无需手动划界，操作更快捷。两条指令后的`<name>`参数均为必填项，用于设置领地的名称，且名称不可与服务器内现有领地重复。

2. `/dominion create_sub <name> <dominion_name> dominion auto_create_sub <name> <dominion_name>`（创建子领地）

这组指令用于在已有领地的范围内创建子领地，适用于领地分区管理的场景。/dominion create_sub `<name>` `<dominion_name>`需要手动在`<dominion_name>`指定的主领地内划定子领地边界，`<name>`为子领地命名；/dominion auto_create_sub `<name>` `<dominion_name>`则自动在主领地内生成子领地，无需手动划界。子领地继承主领地的部分基础设置，同时可单独配置专属规则，方便玩家对领地进行精细化管理。

3. `/dominion delete <dominion_name> [force]`（删除领地）

该指令用于删除指定名称的领地，`<dominion_name>`需准确填写要删除的领地名称。指令后的`[force]`为可选参数，当领地内存在建筑、物品等资产，或有其他成员关联时，直接删除会提示失败，添加`[force]`参数可强制删除该领地及所有关联内容。需要注意的是，领地删除后无法恢复，执行前需确认是否备份好领地内的重要物品。

### ⚙️ 领地管理指令

1. `/dominion resize <name> <expand|contract> <size> [direction]`（调整领地大小）

这是领地边界的调整指令，`<name>`为要调整的领地名称，`<expand|contract>`是调整类型——expand为扩大领地，contract为缩小领地，`<size>`是调整的具体尺寸数值。`[direction]`为可选参数，用于指定调整的方向（如north、south等），若不填写则默认以领地中心为基准向四周均匀调整。调整领地大小时需确保扩展区域未被其他玩家的领地占用，否则会提示调整失败。

2. `/dominion set_env <name> <flag> <true|false>`（设置环境标志）

该指令用于配置领地内的环境规则，`<name>`为领地名称，`<flag>`是具体的环境规则标识（如是否允许下雨、是否开启昼夜更替等），`<true|false>`用于开启或关闭该规则。例如输入/dominion set_env myland weather false，即可关闭名为myland的领地内的天气变化，保持领地环境稳定。

3. `/dominion set_guest <name> <flag> <true|false>`（设置访客标志）

这条指令用于管理访客在领地内的行为权限，`<name>`为领地名称，`<flag>`为具体的权限标识（如是否允许访客破坏方块、是否允许拾取物品等），`<true|false>`用于开启或关闭该权限。通过配置访客标志，可有效防止陌生玩家进入领地后随意破坏，保障领地内的资产安全。

4. `/dominion set_map_color <name> <color>`（设置地图颜色）

该指令用于设置领地在服务器地图上的显示颜色，`<name>`为领地名称，`<color>`为颜色参数，可输入具体的颜色名称（如red、blue）或颜色代码。设置专属的地图颜色后，玩家可在大地图上快速识别自己的领地范围，也能区分不同的领地分区。

5. `/dominion set_tp <name>`（设置传送点）

这条指令用于为指定领地设置专属传送点，`<name>`为领地名称。使用时玩家需站在领地内想要设置为传送点的位置，输入指令后即可完成设置。后续玩家可通过/dominion tp `<name>`指令直接传送到该位置，方便快速往返领地。

6. `/dominion set_msg <name> <enter|leave> <message>`（设置消息）

该指令用于配置玩家进出领地时的提示消息，`<name>`为领地名称，`<enter|leave>`用于选择是进入消息还是离开消息，`<message>`为具体的提示内容（支持部分特殊符号和颜色代码）。例如输入/dominion set_msg myland enter 欢迎来到我的领地！，其他玩家进入该领地时就会收到对应的欢迎提示。

7. `/dominion rename <name> <newName>`（重命名领地）

这条指令用于修改领地的名称，`<name>`为领地原名称，`<newName>`为新的领地名称。新名称需符合服务器的命名规则，且不能与现有领地名称重复。重命名后，领地的所有关联设置（如权限、成员、传送点等）均保持不变，仅名称发生变更。

8. `/dominion give <name> <player> [force]`（转让领地）

该指令用于将领地的所有权转让给其他玩家，`<name>`为领地名称，`<player>`为目标玩家的昵称。若目标玩家已有多个领地，达到服务器上限时，直接转让会提示失败，添加`[force]`参数可强制完成转让。领地转让后，原所有者将失去该领地的所有管理权限，目标玩家成为新的所有者。

### 👥 成员管理指令

1. `/dominion member_add <name> <player>`（添加成员）

这条指令用于向指定领地添加成员，`<name>`为领地名称，`<player>`为要添加的玩家昵称。成员添加成功后，会获得该领地的基础访问权限，后续可通过权限配置指令为其开放更多操作权限（如建造、使用箱子等）。

2. `/dominion member_remove <name> <member>`（移除成员）

该指令用于将指定成员移出领地，`<name>`为领地名称，`<member>`为要移除的成员昵称。成员被移除后，将失去该领地的所有权限，无法再进入领地或使用领地内的设施（除非重新被添加为成员）。

3. `/dominion member_set_pri <name> <member> <flag> <true|false>`（设置成员权限）

这是精细化的成员权限配置指令，`<name>`为领地名称，`<member>`为目标成员昵称，`<flag>`为具体的权限标识（如build、use、destroy等），`<true|false>`用于开启或关闭该权限。例如输入/dominion member_set_pri myland Steve build true，即可赋予玩家Steve在myland领地内的建造权限。

### 🔐 权限组管理指令

1. `/dominion group_create <name> <group>`（创建权限组）

该指令用于在指定领地内创建权限组，`<name>`为领地名称，`<group>`为权限组的名称（如admin、builder、visitor等）。创建权限组后，可批量为组内成员配置相同的权限，避免重复的单人权限设置，大幅提升领地权限管理的效率。

2. `/dominion group_set_flag <name> <group> <flag> <true|false>`（设置权限组标志）

这条指令用于为权限组配置统一的权限，`<name>`为领地名称，`<group>`为权限组名称，`<flag>`为具体权限标识，`<true|false>`用于开启或关闭该权限。权限组的权限设置会覆盖成员的个人权限，适用于批量管理同类成员的操作权限。

3. `/dominion group_add_member <name> <group> <member>`（添加组成员）

该指令用于将指定成员加入权限组，`<name>`为领地名称，`<group>`为目标权限组名称，`<member>`为要添加的玩家昵称。成员加入权限组后，会自动获得该组的所有权限，无需再单独配置单人权限。

4. `/dominion group_remove_member <name> <group> <member>`（移除组成员）

这条指令用于将成员移出指定权限组，`<name>`为领地名称，`<group>`为权限组名称，`<member>`为要移除的成员昵称。成员被移出后，将失去该权限组的所有权限，恢复为仅拥有个人基础权限的状态。

5. `/dominion group_rename <name> <group> <new_group>`（重命名权限组）

该指令用于修改领地内权限组的名称，`<name>`为领地名称，`<group>`为权限组原名称，`<new_group>`为新的权限组名称。重命名后，权限组的成员和权限配置均保持不变，仅名称发生变更。

6. `/dominion group_delete <name> <group>`（删除权限组）

这条指令用于删除领地内指定的权限组，`<name>`为领地名称，`<group>`为要删除的权限组名称。权限组删除后，组内成员不会被移出领地，仅会失去该权限组赋予的所有权限，恢复为基础成员状态。

### 📄 模板管理与杂项指令

1. `/dominion member_apply_template <name> <member> <template>`（应用权限模板）

该指令用于为指定成员快速应用预设的权限模板，`<name>`为领地名称，`<member>`为目标成员昵称，`<template>`为模板名称。权限模板整合了一系列常用权限配置，应用后成员会自动获得模板内的所有权限，无需逐一手动配置，适合批量为成员配置标准化权限。

2. `/dominion template_create <template>`（创建权限模板）

这条指令用于创建全局的权限模板，`<template>`为模板名称。创建后可通过/dominion template_set_flag指令为模板配置具体权限，该模板可被所有领地重复使用，避免不同领地间重复配置相同的权限规则。

3. `/dominion template_delete <template>`（删除权限模板）

该指令用于删除已创建的权限模板，`<template>`为要删除的模板名称。模板删除后，已应用该模板的领地成员权限不会受到影响，仅该模板无法再被新的领地或成员使用。

4. `/dominion template_set_flag <template> <flag> <true|false>`（设置模板标志）

这条指令用于为权限模板配置具体权限，`<template>`为模板名称，`<flag>`为权限标识，`<true|false>`用于开启或关闭该权限。配置完成后，该模板可被所有领地调用，实现权限配置的标准化和高效化。

5. `/dominion title_use <title_id>`（使用称号）

该指令用于激活领地系统的专属称号，`<title_id>`为称号的唯一标识ID。称号需通过完成领地相关的成就（如创建多个领地、管理大量成员等）获取，激活后会在玩家昵称旁显示对应的称号标识，是玩家领地管理能力的象征。

6. `/dominion tp <name>`（传送到领地）

这条指令用于快速传送到指定领地的传送点，`<name>`为领地名称。使用前需确保该领地已通过/dominion set_tp指令设置过传送点，否则会提示传送失败。该指令支持跨区域快速往返，是玩家日常管理领地的便捷工具。

::: warning
所有命令区分大小写，请正确输入。遇到问题可联系管理员帮助。
:::