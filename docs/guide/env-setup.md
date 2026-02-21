# 环境搭建

本指南将帮助您搭建小手机项目的开发环境。我们将使用现代化的代码编辑器和必要的插件来提升开发体验。

## 前置说明

小手机项目是一个基于 HTML + JavaScript + PWA 的虚拟操作系统项目，因此我们需要：
- 一个强大的代码编辑器
- 本地服务器用于预览和调试
- 中文语言支持
- AI 辅助编程工具

## 步骤 1: 选择并安装代码编辑器（三选一）

以下三个编辑器功能相似，**请根据个人喜好选择其中一个安装即可**：

- **步骤 1.1**: Visual Studio Code (VSCode) - 最稳定，插件生态最丰富（老资历还是是老资历）
- **步骤 1.2**: Cursor - AI IDE的老资历，但是贵贵的，国内也不好买，水挺深
- **步骤 1.3**: Trae CN - 字节跳动的AI IDE，原生中文界面

### 步骤 1.1: 安装 Visual Studio Code (VSCode)

VSCode 是微软开发的免费开源代码编辑器，轻量且功能强大。 (俗称微软大战代码)

### 下载 VSCode

1. 访问 VSCode 官网：[https://code.visualstudio.com/](https://code.visualstudio.com/)
2. 点击页面中央的 "Download for Windows" 按钮（网站会自动识别您的操作系统）
3. 如果您使用的是 macOS 或 Linux，点击下拉箭头选择对应版本

### 安装 VSCode

**Windows 用户：**
1. 双击下载的 `.exe` 安装文件
2. 接受许可协议
3. 选择安装路径（建议使用默认路径）
4. **重要**：勾选以下选项：
   - ✅ 将"通过 Code 打开"操作添加到 Windows 资源管理器文件上下文菜单
   - ✅ 将"通过 Code 打开"操作添加到 Windows 资源管理器目录上下文菜单
   - ✅ 将 Code 注册为受支持的文件类型的编辑器
   - ✅ 添加到 PATH（重启后生效）
5. 点击"安装"并等待完成
6. 安装完成后，勾选"启动 Visual Studio Code"，点击"完成"

**macOS 用户：**
1. 打开下载的 `.dmg` 文件
2. 将 Visual Studio Code 拖拽到"应用程序"文件夹
3. 从启动台或应用程序文件夹打开 VSCode

### 步骤 1.2: 安装 Cursor

Cursor 是一个基于 VSCode 的 AI 原生代码编辑器，内置强大的 AI 编程助手。

### 下载 Cursor

1. 访问 Cursor 官网：[https://cursor.sh/](https://cursor.sh/)
2. 点击 "Download" 按钮
3. 选择适合您操作系统的版本（Windows / macOS / Linux）

### 安装 Cursor

**Windows 用户：**
1. 双击下载的安装程序
2. 按照安装向导完成安装
3. 首次启动时，Cursor 会询问是否导入 VSCode 的设置和插件，建议选择"是"

**macOS 用户：**
1. 打开下载的 `.dmg` 文件
2. 将 Cursor 拖拽到"应用程序"文件夹
3. 首次打开时可能需要在"系统偏好设置 > 安全性与隐私"中允许运行

### 配置 Cursor

首次启动 Cursor 后：
1. 登录或注册 Cursor 账号（可使用 GitHub 账号快速登录）
2. 选择您喜欢的主题（推荐 Dark+ 或 One Dark Pro）
3. 如果之前安装了 VSCode，选择导入设置

### 步骤 1.3: 安装 Trae CN

Trae CN 是 Trae 的中国地区发行版本，是一个类似 VSCode 的现代化 IDE，原生支持中文界面，提供更快的访问速度和本地化支持。

### 下载 Trae CN

1. 访问 Trae CN 官网：[https://www.trae.cn/ide/download](https://www.trae.cn/ide/download)
2. 选择适合您操作系统的版本（Windows / macOS / Linux）
3. 点击下载按钮获取安装包

### 安装 Trae CN

**Windows 用户：**
1. 双击下载的安装程序
2. 按照安装向导完成安装
3. 首次启动时，界面已经是中文，无需额外配置

**macOS 用户：**
1. 打开下载的 `.dmg` 文件
2. 将 Trae CN 拖拽到"应用程序"文件夹
3. 从启动台或应用程序文件夹打开 Trae CN

> **提示**：Trae CN 原生支持中文界面，因此使用 Trae CN 的用户无需安装中文语言包插件。

## 步骤 2: 安装必备插件

我们需要为编辑器安装核心插件。根据您选择的编辑器，插件需求略有不同：

- **VSCode / Cursor 用户**：需要安装 3 个插件（中文语言包 + Live Server + Kilo Code）
- **Trae CN 用户**：只需安装 2 个插件（Live Server + Kilo Code），因为 Trae CN 原生支持中文

### 通过插件市场安装

#### 1. 安装 Chinese (Simplified) Language Pack（仅 VSCode / Cursor 用户需要）

> **注意**：如果您使用的是 Trae CN，请跳过此步骤，直接安装 Live Server。

这个插件将编辑器界面汉化为简体中文。

1. 打开 VSCode 或 Cursor
2. 点击左侧活动栏的"扩展"图标（或按 `Ctrl+Shift+X` / `Cmd+Shift+X`）
3. 在搜索框中输入：`Chinese (Simplified)`
4. 找到 "Chinese (Simplified) (简体中文) Language Pack for Visual Studio Code"
5. 点击"Install"（安装）按钮
6. 安装完成后，右下角会弹出提示，点击"Change Language and Restart"（更改语言并重启）
7. 编辑器重启后，界面将变为简体中文

**手动切换语言：**
- 按 `Ctrl+Shift+P` / `Cmd+Shift+P` 打开命令面板
- 输入 `Configure Display Language`
- 选择 `zh-cn`
- 重启编辑器

#### 2. 安装 Live Server

Live Server 提供本地开发服务器，支持热重载，让您的修改实时显示在浏览器中。

1. 在扩展市场搜索框中输入：`Live Server`
2. 找到 "Live Server" by Ritwick Dey（图标是一个紫色的闪电）
3. 点击"安装"按钮
4. 安装完成后无需重启

**使用 Live Server：**
- 打开任意 HTML 文件
- 右键点击编辑器内容，选择"Open with Live Server"（使用 Live Server 打开）
- 或者点击右下角的"Go Live"按钮
- 浏览器会自动打开并显示页面，修改代码后会自动刷新

**配置 Live Server（可选）：**
- 按 `Ctrl+,` / `Cmd+,` 打开设置
- 搜索 `Live Server`
- 可以修改端口号（默认 5500）、自动打开浏览器等选项

#### 3. 安装 Kilo Code

Kilo Code 是一个强大的 AI 编程助手插件。

1. 在扩展市场搜索框中输入：`Kilo Code`
2. 找到 "Kilo Code" 插件
3. 点击"安装"按钮
4. 安装完成后，可能需要登录或配置 API 密钥

**配置 Kilo Code：**
- 安装完成后，左侧活动栏会出现 Kilo Code 图标
- 点击图标打开 Kilo Code 面板
- 按照提示完成登录或 API 配置
- 配置完成后即可使用 AI 辅助编程功能

**使用 Kilo Code：**
- 在代码中选中一段代码，右键选择 Kilo Code 相关选项
- 或使用快捷键调用 AI 助手
- 可以让 AI 帮助解释代码、生成代码、修复 bug 等

### 验证插件安装

1. 点击左侧"扩展"图标
2. 在搜索框上方点击"已安装"筛选器
3. 确认插件已正确安装：

**VSCode / Cursor 用户应看到 3 个插件：**
   - ✅ Chinese (Simplified) Language Pack
   - ✅ Live Server
   - ✅ Kilo Code

**Trae CN 用户应看到 2 个插件：**
   - ✅ Live Server
   - ✅ Kilo Code

## 步骤 3: 验证环境

完成以上步骤后，让我们验证开发环境是否正确配置：

### 创建测试项目

1. 创建一个新文件夹，例如 `test-project`
2. 在 VSCode 或 Cursor 中打开这个文件夹（文件 > 打开文件夹）
3. 创建一个新文件 `index.html`，输入以下内容：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>小手机开发环境测试</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }
        .container {
            text-align: center;
        }
        h1 {
            font-size: 3em;
            margin-bottom: 0.5em;
        }
        p {
            font-size: 1.2em;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎉 环境配置成功！</h1>
        <p>您的小手机开发环境已经准备就绪</p>
        <p id="time"></p>
    </div>
    <script>
        function updateTime() {
            const now = new Date();
            document.getElementById('time').textContent = 
                `当前时间：${now.toLocaleTimeString('zh-CN')}`;
        }
        updateTime();
        setInterval(updateTime, 1000);
    </script>
</body>
</html>
```

4. 右键点击编辑器，选择"Open with Live Server"
5. 浏览器应该自动打开并显示一个漂亮的页面，显示"环境配置成功！"
6. 尝试修改 HTML 中的文字，保存后浏览器应该自动刷新

### 测试 Kilo Code

1. 在编辑器中选中一段代码
2. 尝试使用 Kilo Code 的功能（如代码解释、优化建议等）
3. 如果能正常工作，说明 AI 助手配置成功

## 常见问题

### Q: 中文语言包安装后界面还是英文？

**A:** 需要手动切换语言：
1. 按 `Ctrl+Shift+P` 打开命令面板
2. 输入 `Configure Display Language`
3. 选择 `zh-cn`
4. 重启编辑器

### Q: Live Server 无法启动？

**A:** 可能的原因和解决方案：
- 端口被占用：在设置中更改 Live Server 端口号
- 防火墙阻止：允许编辑器通过防火墙
- 没有打开 HTML 文件：确保当前打开的是 HTML 文件

### Q: Kilo Code 无法使用？

**A:** 检查以下几点：
- 是否完成登录或 API 配置
- 网络连接是否正常
- 查看插件的输出日志，寻找错误信息

### Q: VSCode、Cursor 和 Trae CN 应该选择哪个？

**A:** 
- **VSCode**：更稳定，插件生态最丰富，适合传统开发，需要安装中文语言包
- **Cursor**：内置 AI 功能更强大，适合 AI 辅助开发，需要安装中文语言包
- **Trae CN**：国内优化版本，原生中文界面，访问速度快，无需安装中文语言包
- **建议**：根据个人喜好选择其中一个即可，三者都支持 Live Server 和 Kilo Code 插件

### Q: 是否必须安装 Trae CN？

**A:** 不是必须的。VSCode、Cursor 和 Trae CN 三选一即可。如果您更习惯国内软件或希望有原生中文支持，可以选择 Trae CN；如果您更喜欢国际主流工具，可以选择 VSCode 或 Cursor。

## 下一步

环境搭建完成后，您可以：
- 阅读[快速开始](./getting-started.md)了解如何创建第一个小手机应用
- 查看[教程](./tutorial.md)学习核心概念
- 探索[API 文档](../api/index.md)了解可用的功能

## 推荐的额外插件

虽然不是必需的，但以下插件可以进一步提升开发体验：

- **Prettier - Code formatter**：代码格式化工具
- **ESLint**：JavaScript 代码检查
- **Path Intellisense**：路径自动补全
- **Auto Rename Tag**：自动重命名配对的 HTML 标签
- **Color Highlight**：在代码中高亮显示颜色值
- **GitLens**：增强 Git 功能（如果使用 Git 版本控制）

安装方法与前面介绍的三个核心插件相同，在扩展市场搜索并安装即可。

---

现在您已经完成了开发环境的搭建，可以开始愉快地开发小手机项目了！🚀
