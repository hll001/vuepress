# 使用hexo建立本地博客

## 全局安装hexo

不建议使用官网的中提供的方法，那样安装完成后执行hexo的相关命令会有问题。推荐直接终端输入一下指令：

```bash
sudo npm install --unsafe-perm --verbose -g hexo
```

>这里注意下node的版本，本人是使用的v15.14.0版本

## 建站

> 声明：本人建立的博客项目名称为blog
> 项目存放位置是desktop

### 建立博客项目

在桌面打开终端依次输入一下指令：

```bash
hexo inti blog

cd blog

npm install
```

以上命令都已经执行完成后表示我们已经新建了一个博客。我们可以项目中启动终端，输入 `hexo server` 来本地启动我们博客，浏览器访问生成的链接即可。项目中的各个文件说明我就不做过多赘述了，具体内容参考[官网](https://hexo.io/zh-cn/docs/setup)

### 博客主题

个人感觉hexo默认的博客主题好丑啊，直接替换掉吧。本人使用的是next主题很简洁，大家不嫌弃的话也可以使用这个主题。
hexo中有[主题库](https://hexo.io/themes/)，大家可以进入自行下载。hexo的主题库内容都是从GitHub中过来的，如果有人不会安全上网的话可以去[码云](https://gitee.com/explore)上搜索看看有的话直接拉下来放在**项目的themes文件夹**，之后修改项目中 _config.yuml 中的 **theme** 为对应主题名称即可。

next主题具体配置给大家几个参考链接进行配置吧：

- [hexo的next主题个性化教程:打造炫酷网站](https://www.jianshu.com/p/f054333ac9e6)

- [next配置文档](https://theme-next.iissnan.com/getting-started.html#third-party-services)

### 写博客文章

> 下述内容都是按照我自己习惯来写文章的。

本人喜欢用vsCode来写markdown的文章，上述项目我都是导入到vsCode中进行编辑处理的。并且vsCode自带的终端很好用，默认是mac自带的bash，可以手动选择为zsh。

1. 终端输入 `hexo n "博客文章名称"` 即新建了一个文章草稿（默认新建是文章，将博客项目中 _config.yuml **中的default_layout**从**post**修改为**draft** 即可）。默认草稿中的文章是不是在博客站中展示的，所有你可以不用担心你的草稿在博客网站上被查看到。

2. 一般我都会在草稿中将博客文章内容写好之后再通过 `hexo publish "博客文章名称"` 将改文章进行发布。（本质就是从 _drafts 文件夹移入到_posts 文件夹中）

3. `hexo deploy` 可以直接发布我们博客（要通过配置_config.yml中deploy信息）。

通过步骤1，2之后能很好的控制我的博客中文章内容不出错。这个方法很不错希望大家可以借鉴。
