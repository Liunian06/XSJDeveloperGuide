import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '流年的小手机开发教程',
  description: 'XSJ Developer Guide',
  base: '/XSJDeveloperGuide/',
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '开发指南', link: '/guide/env-setup' },
      { text: 'API 参考', link: '/api/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: [
      {
        text: '入门',
        collapsed: false,
        items: [
          { text: '前言', link: '/intro' },
          { text: '项目愿景', link: '/vision' }
        ]
      },
      {
        text: '开发指南',
        collapsed: false,
        items: [
          { text: '环境搭建', link: '/guide/env-setup' },
          { text: '安装部署', link: '/guide/installation' },
          { text: '初次运行', link: '/guide/getting-started' },
          { text: 'API 快速入门', link: '/guide/api-quickstart' },
          { text: '使用教程', link: '/guide/tutorial' }
        ]
      },
      {
        text: '核心架构',
        collapsed: false,
        items: [
          { text: 'C++ 核心架构', link: '/core/cpp-core' },
          { text: 'UI 层架构', link: '/core/ui-layer' }
        ]
      },
      {
        text: 'API 参考',
        collapsed: false,
        items: [
          { text: 'API 文档', link: '/api/' }
        ]
      },
      {
        text: '社区',
        collapsed: false,
        items: [
          { text: '关于项目', link: '/about' },
          { text: '关于小酒窝论坛', link: '/about-forum' },
          { text: '贡献指南', link: '/contributing' },
          { text: '行为准则', link: '/code-of-conduct' }
        ]
      }
    ],

    socialLinks: [],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            displayDetails: '显示详细列表',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    outline: {
      label: '页面导航',
      level: [2, 3]
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    lastUpdated: {
      text: '最后更新于'
    }
  }
})
