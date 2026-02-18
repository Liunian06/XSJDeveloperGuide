import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Small Phone 开发者指南',
  description: 'Developing AI-Native Applications for Small Phone',
  base: '/XSJDeveloperGuide/',
  themeConfig: {
    logo: '/logo.png', // 假设有这个文件，或者之后添加
    nav: [
      { text: '指南', link: '/intro' },
      { text: 'API 参考', link: '/api/' },
      { text: '关于', link: '/about' }
    ],
    sidebar: [
      {
        text: '简介',
        items: [
          { text: '前言', link: '/intro' },
          { text: '项目愿景', link: '/vision' }
        ]
      },
      {
        text: '快速上手',
        items: [
          { text: '环境搭建', link: '/guide/env-setup' },
          { text: '安装部署', link: '/guide/installation' },
          { text: '初次运行', link: '/guide/getting-started' },
          { text: '使用教程', link: '/guide/tutorial' },
          { text: 'API 快速入门', link: '/guide/api-quickstart' }
        ]
      },
      {
        text: '核心架构',
        items: [
          { text: 'C++ 核心', link: '/core/cpp-core' },
          { text: '跨平台 UI', link: '/core/ui-layer' }
        ]
      },
      {
        text: 'API 参考',
        items: [
          { text: '概览', link: '/api/' }
        ]
      },
      {
        text: '贡献与社区',
        items: [
          { text: '关于', link: '/about' },
          { text: '贡献指南', link: '/contributing' },
          { text: '行为准则', link: '/code-of-conduct' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-org/small-phone' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2026 Small Phone Team'
    },
    search: {
      provider: 'local'
    },
    // 添加上一页/下一页文本配置，适配中文
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})
