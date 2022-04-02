# 使用nvm管理node

## 安装nvm

- mac下我们可以通过homebrew来直接安装，在终端下输入 `brew install nvm`。指令执行后，终端输入 `brew -v` 确定输出版本号之后表示homebrew安装完成。

- 终端输入 `brew install nvm` 安装nvm。指令执行后，终端输入 `nvm -v` 确认输出nvm版本号表示安装成功。

> 配置的电脑终端是zsh，具体如何配置点击[参考](https://zhuanlan.zhihu.com/p/365838868)
> homebrew问题参考[官网](https://brew.sh/index_zh-cn)

## nvm管理node

1. 终端输入 `arch -x86_64 zsh` 使终端进入Rosetta 2模式。之后终端输入 `nvm install xx(特定版本号)` 来进行下载特定版本的node。

2. 终端输入 `arch -arm64 zsh` 退出Rosetta 2模式。

3. 终端输入 `nvm list` 查看已经通过nvm下载的所有node版本。一般 `->` 指向就是我们当前使用node版本。

4. 更换node版本也很简单。直接终端输入 `nvm use xx(对应node版本)` 即可完成node版本的切换。（切换的版本一定要通过`nvm install`下载好，否则会切换失败）
