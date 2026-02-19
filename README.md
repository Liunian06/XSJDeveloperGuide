# XSJ Developer Guide

这是一个基于 VitePress 的开发者指南项目。

## 本地开发

1. 安装依赖：
   ```bash
   npm install
   ```

2. 启动开发服务器：
   ```bash
   npm run docs:dev
   ```

3. 构建：
   ```bash
   npm run docs:build
   ```

## 部署设置（重要）

本项目配置了 GitHub Actions 自动部署。为了让部署成功，你需要在 GitHub 仓库中进行一次性设置：

1. 进入 GitHub 仓库的 **Settings** (设置) 页面。
2. 点击左侧菜单的 **Pages**。
3. 在 **Build and deployment** 部分：
   - **Source** 选择 **GitHub Actions**。
4. 无需其他保存操作，设置会自动生效。
5. 设置完成后，你可以去 **Actions** 页面，点击左侧的 "Deploy VitePress site to Pages"，然后点击右上角的 **Re-run jobs**，或者等待下一次代码提交。

> 错误说明：如果你在 Actions 中看到 `Error: HttpError: Resource not accessible by integration`，通常就是因为没有将 Source 设置为 GitHub Actions。

## 开源协议

本教程采用 **CC BY-NC-SA 4.0**（创作共用 署名-非商业性使用-相同方式共享 4.0 国际许可协议）。

现在起，你可自由分享、转载本教程，但需遵守以下约定：

### 禁止商业化

任何途径的分享 / 转载，均不得用于盈利性行为（包括但不限于：付费专栏、付费课程、印刷售卖、引流变现 等）。

### 非公开传播（免署名）

若仅用于私下分享（如发给同学、朋友，无公开传播属性），可自由分发使用，无需强制署名。

### 公开平台传播（需简单署名）

若在社群、社区、小红书、微博、博客、论坛等公开平台发布 / 转载，需保留明确归属。

### ⚠️ 核心禁忌

无论任何场景，均不得篡改、抹去本教程的原创作者信息，不得声称本教程为自身创作。

**体面分享，互相尊重～**
