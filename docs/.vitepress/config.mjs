import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '流年的小手机开发教程',
  description: 'XSJ Developer Guide',
  base: '/',
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' }
    ],
    sidebar: [],
    socialLinks: []
  }
})
