# 上传图片到玩家图册

> 如果你要查看玩家图册，请前往[https://www.endlesspixel.cn/gallery](https://www.endlesspixel.cn/gallery)查看玩家上传的图片。
>
> 如果你是要获取玩家图册的数据，请前往[查询EndlessPixel服务器玩家游戏截图列表 API](/dev/api#查询endlesspixel服务器玩家游戏截图列表)
>
> 这里仅介绍如何上传图片到玩家图册。

## 上传方法

### GitHub Web
1. 注册 **GitHub** 账号
> 此处不介绍，请自行参阅[https://docs.github.com/zh/get-started/start-your-journey/creating-an-account-on-github](https://docs.github.com/zh/get-started/start-your-journey/creating-an-account-on-github)。

2. fork **EndlessPixel/EndlessPixel-Player-Image** 仓库到你的 **GitHub** 账号下。
    1. 访问[https://github.com/EndlessPixel/EndlessPixel-Player-Image/fork](https://github.com/EndlessPixel/EndlessPixel-Player-Image/fork)
    2. 如果你需要修改仓库名称，请在 fork 页面下修改**Repository name**项。
    3. 点击**Create fork**按钮。

3. 上传图片到assets目录下。
    1. 访问你 fork 的仓库页面。
    2. 点击**assets**目录。
    3. 将鼠标悬浮在Add file按钮上，然后点击**Upload files**按钮。
    4. 选择你要上传的图片文件。
    5. 等待图片上传完成。
    6. 填写**Commit message**，例如：`Add {your_image_name}`。（可选）
    7. 点击**Commit changes**按钮。

4. 编辑图片的元数据信息。
    1. 访问你 fork 的仓库页面。
    2. 点击**assets.json**文件。
    3. 在文件assets.json中添加以下内容：
    ```json:line-numbers
    {
      "path": "https://raw.githubusercontent.com/EndlessPixel/EndlessPixel-Player-Image/main/assets/{your_image_name}",
      "player": "{your_player_name}",
      "date": "{your_shoot_date}",
      "resolution": "{your_image_resolution}",
      "size": "{your_image_size}",
      "sha256": "{your_image_sha256_hash}"
    }
    ```
    **示例**
    ```json:line-numbers
    {
      "path": "https://raw.githubusercontent.com/EndlessPixel/EndlessPixel-Player-Image/main/assets/huge_2026-02-17_16.34.17.png",
      "player": "system_mini",
      "date": "2026-02-17 16:34:17",
      "resolution": "3840x2160",
      "size": "18.0MB",
      "sha256": "6F2CDF5A52D3152551CC1553E904C443CA3457C1D05E8ACF9FAFA55654E49CAD"
    },
    ```
    4. 填写**Commit message**，例如：`Add {your_image_name}`。（可选）
    5. 点击**Commit changes**按钮。

5. 创建一个Pull Request，将你 fork 的仓库合并到 **EndlessPixel/EndlessPixel-Player-Image** 仓库。
    1. 访问你 fork 的仓库页面。
    2. 看向**Pull requests**提示框，他将显示：
    > This branch is 2 commits ahead of EndlessPixel/EndlessPixel-Player-Image:main.
    3. 点击**Contribute**按钮，在悬浮窗中点击**Create pull request**按钮。
    4. 填写Pull Request的标题和描述。
    例如：
    > Title: Add {your_image_name}
    > Description: Add {your_image_name} to the gallery.
    5. 点击**Create pull request**按钮。

6. 等待 **EndlessPixel** 团队审核你的 Pull Request。

### Git CLI
> 第 1，2 步与 GitHub Web 相同，这里就不重复介绍了。

3. 克隆你 fork 的仓库到本地。
```bash
git clone https://github.com/{your_github_username}/{your_fork_name}.git
```
如果你安装了GitHub CLI，也可以使用以下命令：
```bash
gh repo clone {your_github_username}/{your_fork_name}
```
> 下载安装Git CLI，你可以前往[https://git-scm.com/downloads](https://git-scm.com/downloads)下载安装。
>
> 下载安装GitHub CLI，你可以前往[https://cli.github.com/](https://cli.github.com/)下载安装。

4. 进入你 fork 的仓库目录。
```bash:line-numbers
cd {your_fork_name}
```

5. 将你的图片文件复制到assets目录下。
```bash:line-numbers
cp {your_image_file_path} assets/
```

6. 编辑assets.json文件，添加你的图片的元数据信息。
    1. 打开assets.json文件，其具体内容在前文已经介绍过了，这里就不重复介绍了。
    2. 添加你的图片的元数据信息。
    3. 保存文件。

7. 提交你的变更。
```bash:line-numbers
git add assets/{your_image_name}
git commit -m "Add {your_image_name}"
```

8. 推送你的变更到远程仓库。
```bash:line-numbers
git push
```

> 第 9，10 步与 GitHub Web 的第 5，6 步相同，这里就不重复介绍了。

## 其他教程

### 我无法访问GitHub怎么办？
1. 这是国内网络问题，可以不停的刷新，有概率可以进去。
2. 使用加速器工具 比如 Steam++ Steamcommunity 302 等，在加速规则中选择 GitHub 也可以访问。

### 如何计算sha256哈希值？
#### Windows
1. 使用Windows CMD计算sha256哈希值。
```batch:line-numbers
certutil -hashfile {your_image_file_path} sha256
```
2. 使用Windows PowerShell计算sha256哈希值。
```powershell:line-numbers
Get-FileHash -Path {your_image_file_path} -Algorithm SHA256
```

#### Linux/MacOS
使用Linux bash计算sha256哈希值。
```bash:line-numbers
sha256sum {your_image_file_path}
```

#### VSCode
安装Get File Checksum扩展，在编辑器右键你的图片文件，选择**Get File Checksum**，在展开的菜单中选择**SHA256**，点击**Get Checksum**按钮，即可查看图片的sha256哈希值，将其复制到剪贴板，删除前面的0x，即可得到你所需要的结果。

### 如何查看图片的元数据信息？
#### Windows

1. 在文件资源管理器中打开图片文件，点击**属性**按钮，即可查看图片的元数据信息。

2. 如果你是Windows无桌面环境，比如Windows Server，可以使用以下命令：
```powershell:line-numbers
Get-ItemProperty -Path {your_image_file_path} -Name * | Select-Object -Property Name, Value
```

#### Linux/MacOS

1. Linux
    1. Linux有桌面环境，可以在文件资源管理器中打开图片文件，点击**属性**按钮，即可查看图片的元数据信息。

    2. 如果你是Linux无桌面环境，比如Ubuntu Server，可以使用以下命令：
    ```bash:line-numbers
    exiftool {your_image_file_path}
    ```

2. MacOS
    1. 在Finder中右键点击图片文件，选择**显示信息**，即可查看图片的元数据信息。

### 为什么我在同步更改时会显示502错误？
这通常是由于 GitHub 服务器临时故障导致的。你可以稍后重试，或者联系 GitHub 支持。

### 为什么会提示我无权向次仓库提交更改？
你可能克隆了 **EndlessPixel/EndlessPixel-Player-Image** 仓库，而不是你 fork 的仓库，因此没有权限提交更改到 **EndlessPixel/EndlessPixel-Player-Image** 仓库。

### 我不想用这么麻烦的方法，是否有其他方法？
有，你可以使用以下方法：

直接把你要上传的图片通过QQ发送给 **system_mini**，并提供你的玩家名和拍照时间，**system_mini** 看到后会帮你上传图片到玩家图册。

请注意辨别 **system_mini** 的QQ号 **1343352337** `大号`和 **3319182533** `小号`，避免冒充人员。

此服务完全免费，不涉及任何费用，如果他让你支付费用，请忽略，并核对QQ号。