# VuePress文档博客

## 为什么使用VuePress构建文档博客

- 之前使用hexo构建博客，操作太繁琐了，不喜欢。
- VuePress 由vue驱动的极简静态网站生成器，熟悉vue所以用了。
- 喜欢把学习的内容记录成静态文章，不需要花里胡哨的样式内容。
- 主题内容适配手机。

## 构建本地博客

1. 新建名为`blog目录`中`初始化项目`(该项目命名为`blog_src`，**初始化后上传到GitHub中方便后面跨平台记录**)参考vuepress官网指南中的[快速上手](https://vuepress.vuejs.org/zh/guide/getting-started.html)。为修改自己熟悉的项目启动命令，我修改的如下：

```json
{
  "name": "blog",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  },
  "devDependencies": {
    "vuepress": "^1.9.7"
  }
}
```

1. 初始化好项目之后一定要好好看下官网中介绍的VuePress项目的[目录结构](https://vuepress.vuejs.org/zh/guide/directory-structure.html)。

2. 添加`首页`，`导航栏`，`侧边栏`等主题配置，参考官网主题中[默认主题配置](https://vuepress.vuejs.org/zh/theme/default-theme-config.html)

3. 添加`图标`等好的作品配置参考——[vuepress-reco](https://github.com/vuepress-reco/vuepress-reco.github.io/blob/gh-pages-source/.vuepress/config.js)。具体项目线上效果——[vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/)

## 手动上线部署

为了方便我博客的管理，blog文件夹下有 `blog_src` (项目源文件)和 `dist` (项目打包后需要部署的文件)两个文件夹。

- 使用gitPage部署。

1. [github](https://github.com/)中新建一个仓库，名为 `xxx.github.io` (xxx为你GitHub的用户名)。

2. 在`blog目录`下，拉去新建仓库内容，并将项目名称改为`dist`。

3. 正常在 `blog_src` 中将文章写好后，确定本地访问正常。将 `blog_src` 中内容提交到GitHub中，保留源文件。

4. 对本地项目进行打包处理，将 `blog/docs/.vuepress/dist` 中内容复制进入到 `blog/dist` 中（删除 `blog/docs/.vuepress/dist` ，保证 blog/dist 中 `.git` 文件不被删除）。

5. 进入 `blog/dist` 执行一下命令将代码提交：

```git
 git add .

 git commit -m 'xxx'   //本地提交的说明

 git push -u origin master // 提交至master分支
```

代码提交后，等待gitPage自动部署。几分钟后在访问`https://xxx.github.io`即可看到内容。

## 自动化部署方案

 1. `blog_src` 项目根目录下创建deploy.sh，进行自动化部署(不用我去手动部署了)

 ```sh

 ```