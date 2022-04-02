const path = require('path')
const { getDocTitles } = require('../../utils')
const rootPath = path.dirname(__dirname)
const docPath = rootPath + '/blogs' // 博客目录
const docTitles = getDocTitles(docPath) // 获取所有博客的名称

module.exports = {
  // 添加网页图标
  head: [['link', { rel: 'icon', href: '/favorite.ico' }]],
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
      { text: 'Blogs', link: '/blogs/' + docTitles[0] },
      { text: 'GitHub', link: 'https://github.com/hll001' },
      { text: '默认主题配置', link: 'https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E9%A6%96%E9%A1%B5' }
    ],
    sidebar: {
      '/blogs/': docTitles,
      '/': ['']
    }
  }
}
