import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '老婆宝的教程',
  description: 'SillyTavern酒馆学习使用过程中的最佳实践！',
  base: '/',
  themeConfig: {
    logo: '/logo.png', // 暂时保留，虽然截图中是文字logo "lph" 风格的，可能需要自定义CSS或svg
    nav: [
      { text: '主页', link: '/' },
      { text: '小酒窝论坛', link: '/about-forum' },
      { text: '支持一下', link: '/support' }
    ],
    sidebar: [
      {
        text: '前言',
        items: [
          { text: 'Read me', link: '/readme' },
          { text: '小酒窝论坛', link: '/about-forum' },
          { text: '开源声明', link: '/license' }
        ]
      },
      {
        text: '安装部署',
        items: [
          { text: '部署方式对比', link: '/deploy/comparison' },
          { text: '安卓本地酒馆部署', link: '/deploy/android' },
          { text: 'VPS云酒馆部署', link: '/deploy/vps' },
          { text: 'Windows电脑本地部署', link: '/deploy/windows' },
          { text: 'Mac电脑本地部署', link: '/deploy/mac' }
        ]
      },
      {
        text: 'API相关教程',
        items: [
          { text: '关于API', link: '/api/about' },
          { text: 'gcli2api-Zeabur版', link: '/api/gcli2api-zeabur' },
          { text: 'gcli2api-VPS版', link: '/api/gcli2api-vps' },
          { text: 'Build反代教程指路', link: '/api/build-reverse-proxy' }
        ]
      },
      {
        text: '使用教程',
        items: [
          { text: '酒馆新手使用教程', link: '/guide/beginner' },
          { text: '酒馆相关知识科普', link: '/guide/knowledge' },
          { text: '酒馆推荐设置项', link: '/guide/settings' },
          { text: '怎么寻找预设、角色卡等资源', link: '/guide/resources' },
          { text: '预设相关教程', link: '/guide/preset' },
          { text: '正则相关教程', link: '/guide/regex' },
          { text: '酒馆美化相关教程', link: '/guide/theme' }
        ]
      }
    ],
    socialLinks: [], // 截图中似乎没有社交链接
    footer: {
      message: '本站点由 老婆宝 搭建',
      copyright: 'Copyright © laopobao.备案号： 粤ICP备2025449399号-1'
    },
    search: {
      provider: 'local'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '当前页大纲'
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
