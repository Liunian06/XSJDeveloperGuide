import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Small Phone 开发者指南',
  description: 'Building the next-gen AI-Native Application for Small Phone',
  base: '/XSJDeveloperGuide/',
  themeConfig: {
    logo: '/logo.png', // We might need to add a logo later, but good to have the config
    nav: [
      { text: '指南', link: '/intro' },
      { text: 'API 参考', link: '/api/' },
      { text: '关于', link: '/about' }
    ],
    sidebar: [
      {
        text: '简介',
        items: [
          { text: '什么是 Small Phone?', link: '/intro' },
          { text: '项目愿景', link: '/vision' }
        ]
      },
      {
        text: '开发入门',
        items: [
          { text: '环境搭建', link: '/guide/env-setup' },
          { text: '快速开始', link: '/guide/getting-started' }
        ]
      },
      {
        text: '核心架构',
        items: [
          { text: 'C++ 核心', link: '/core/cpp-core' },
          { text: '跨平台 UI', link: '/core/ui-layer' }
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
    }
  }
})

