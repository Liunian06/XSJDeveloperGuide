# 开发你的第一个小手机页面

现在环境已经搭建完成，让我们开始开发第一个小手机页面吧！

## 使用 AI 辅助开发

你可以使用 AI 助手（如 Claude、ChatGPT 等）来帮助你快速开发。尝试以下提示词：

```
用户正在编写一个 AI-Native 产品的开发教程。该 AI 产品在行业内一般被称为"小手机"，核心产品逻辑是在浏览器中通过 HTML、JavaScript 和 CSS 开发 PWA 应用，实现一个虚拟操作系统的完整体验。系统内包含微信、通讯录等常见软件形态，但所有应用均不连接真实平台环境，而是基于用户自定义人设构建高拟真的 AI Roleplay 闭环，以提升长期陪伴体验与沉浸感。

现在我需要你开发这个应用的主屏幕，类似IOS系统的主界面，需要设计进入这个应用的加载界面，锁屏界面，和主屏幕，首次进入时，需要引导用户设置密码（6位数字密码），同时主屏幕上需要有时间和天气的小组件，以及常见的app占位，例如聊天和设置
所有UI均需要适配深色模式和浅色模式，并自动跟随系统切换，品牌色为 #07C160
现在开始开发
```

## 演示视频

以下是使用上述提示词开发的完整演示：

::: tip 模型说明
本演示使用的是 **Claude Sonnet 4.5** 模型。如果你的模型无法复现相同的结果，可以尝试切换到此模型，或使用更强的模型（如 **Claude Opus 4.6**）进行开发。
:::

<video controls width="100%" poster="https://raw.githubusercontent.com/Liunian06/XSJDeveloperGuide/main/media/%E5%88%9D%E6%AD%A5%E6%A1%86%E6%9E%B6%E6%90%AD%E5%BB%BA/%E5%88%9D%E6%AD%A5%E6%A1%86%E6%9E%B6%E6%90%AD%E5%BB%BA-%E5%B0%81%E9%9D%A2.jpg" style="border-radius: 8px; margin: 20px 0;">
  <source src="https://raw.githubusercontent.com/Liunian06/XSJDeveloperGuide/main/media/%E5%88%9D%E6%AD%A5%E6%A1%86%E6%9E%B6%E6%90%AD%E5%BB%BA/%E5%88%9D%E6%AD%A5%E6%A1%86%E6%9E%B6%E6%90%AD%E5%BB%BA.mp4" type="video/mp4">
  你的浏览器不支持视频播放。
</video>

## 预览你的成果

1. 将 AI 生成的代码保存到项目目录中（例如创建一个 `index.html` 文件）
2. 在 VS Code 中右键点击 `index.html` 文件
3. 选择 "Open with Live Server"
4. 浏览器会自动打开并显示你的小手机页面

## 调试与优化

在预览过程中，你可以：

- 打开浏览器的开发者工具（F12）查看控制台输出
- 使用开发者工具的移动设备模拟器测试不同屏幕尺寸
- 测试深色/浅色模式切换效果
- 检查响应式布局是否正常

## 下一步

完成第一个页面后，你可以继续开发：

- 微信聊天界面
- 通讯录页面
- 设置页面
- 其他应用页面

每个页面都可以使用类似的 AI 辅助开发流程，逐步完善你的小手机应用。
