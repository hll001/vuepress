# pyenv介绍&m1中node-sass兼容问题解决方案

## pyenv介绍

`pyenv是一个forked自ruby社区的简单、低调、遵循UNIX哲学的Python环境管理工具, 它可以轻松切换全局解释器版本, 同时结合vitualenv插件可以方便的管理对应的包源.`

## 安装

`这个指令会安装其他相关依赖，没必要等全部下载完；下载完pyenv后直接停止就可以了`

```bash
brew install pyenv
```

添加zsh变量

`vim ~/.zshrc`，打开zsh配置项最后部分追加以下内容。

```bash
# pyenv's config
export PATH="$HOME/.pyenv/bin:$PATH"
eval "$(pyenv init -)"
```

`source ~/.zshrc`，最后一定要执行前面命令编译下该配置项。确定是是否安装完成；输入`pyenv --version`测试一下

## pyenv常见指令

``` bash
# 查看当前版本
pyenv version

# 查看所有版本
pyenv versions

# 查看所有可安装的版本
pyenv install --list

# 安装指定版本
pyenv install 3.6.5
# 安装新版本后rehash一下
pyenv rehash

# 删除指定版本
pyenv uninstall 3.5.2

# 指定全局版本
pyenv global 3.6.5

# 指定多个全局版本, 3版本优先
pyenv global 3.6.5 2.7.14

# 实际上当你切换版本后, 相应的pip和包仓库都是会自动切换过去的
```

## m1中node-sass兼容问题

### 原因

- mi芯片中arm64对node-sass包存在兼容问题；我应该将编译换成换成x86的（m1机器中，有x86模拟器；需要手动开启使用Rosetta启动）。
  
  1. 修改zsh终端启动方式改为`使用Rosetta启动`；访达-程序-Itemr2-显示简介-勾选使用Rosetta启动
  2. 修改vscode中终端启动方式为x86环境；在`setting.json`中添加一下内容`"terminal.integrated.defaultProfile.osx": "x86 zsh"`；这个好像全局配置的，需要手动给每个新开页面配置（code-首选项-配置文件(默认)-显示配置文件内容-选择setting.json）

- node版本和node-sass版本存在兼容问题。
  
  具体参考[node-sass](https://github.com/sass/node-sass)
