module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '笔记',
      description: '好记性不如烂笔头！'
    }
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'Blogs', link: '/tools/使用nvm管理node' },
      { text: 'GitHub', link: 'https://github.com/hll001' },
      { text: '默认主题配置', link: 'https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5' }
    ],
    sidebar: {
      '/tools/': ['使用nvm管理node', 'nginx那些事', '使用hexo建立本地博客'],
      '/': ['']
    }
  }
}
