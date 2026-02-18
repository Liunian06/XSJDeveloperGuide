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
