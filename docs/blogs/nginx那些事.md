# nginx那些事

## Linux （Ubuntu）

### 下载

   ```bash
    # 查看更新apt-get软件包
    sudo apt-get update

    # apt-get下载nginx， 会自动编译安装
    # 默认安装目录是 /usr/sbin/nginx
    # 配置文件目录是 /etc/nginx
    # 关键配置文件是 /etc/nginx/nginx.conf
    sudo apt-get install nginx
   ```

### 启停相关指令

   ```bash
    # 启动|关闭|重启|热加载（只修改配置文件，不中断情况下热加载）nginx
    sudo systemctl start|stop|restart|reload nginx

    # 默认情况下Nginx会随这服务器启动而启动，可以手动进行禁止|启动
    sudo systemctl disable|enable nginx

    # 每次修改完配置文件之后，检查是否有错误
    sudo systemctl -t

    # 删除nginx进程来停止nginx的运行
    sudo killall nginx

    # 通过查看Nginx进程判断nginx是否启动,用ps -ef列出进程列表，然后通过grep过滤判断nginx是否启动。
    ps -ef | grep nginx

    # 直接查看nginx进程id，有返回pid号说明nginx启动了
    ps -C nginx -o pid
   ```

### 卸载问题（基于上述安装方式进行卸载的）

   ```bash
    # 停止nginx服务
    sudo systemctl stop nginx

    # 删除nginx， -purge包括配置文件
    sudo apt-get --purge remove nginx

    # 自动移除全部不使用的软件包
    sudo apt-get autoremove

    # 列出包含nginx名字的软件
    dpkg --get-selections|grep nginx 

    # 并依次上述删除对应软件（主要是nginx, nginx-common, nginx-core）
    sudo apt-get --purge remove nginx
    sudo apt-get --purge remove nginx-common
    sudo apt-get --purge remove nginx-core

    # 确认卸载是否完成
    dpkg --get-selections|grep nginx # nginx, nginx-common, nginx-core这些信息都不会有

    which nginx # 不显示任何东西
   ```

### 防火墙问题

   防火墙是用来监视和过滤进出网络流量的工具。它通过定义一系列安全规则来决定是否允许或者屏蔽指定的流量。

   Ubuntu自带的防火墙配置工具（默认安装的）称之为 `UFW（Uncomplicated Firewall）`。UFW是一个用来`管理iptables防火规则的前端工具`（访问友好），其核心目的是为了让管理iptables更简单。

   `sudo ufw status verbose` 指令查看UFW的开启状态，默认是`inactive`（不活动）。

   默认情况下，UFW 阻塞了所有进来的连接，但允许所有出去的连接。这意味着任何人无法访问你的服务器，除非你`打开端口`。运行在服务器上的应用和服务可以访问外面的世界。

   `sudo ufw status` 查看使用防火墙之后的状态(同上)。

   `sudo ufw enable|disable` 开启/关闭防火墙 (默认设置是’disable’)。

   `sudo ufw reset` 重置UFW。

   `sudo ufw allow(delete allow) xxx` 开启(禁用)xx端口。

   `sudo ufw app list` 查看有如下配置方案:

   ```bash
    hll@hll-VirtualBox:/etc/nginx$ sudo ufw app list
    可用应用程序：
    CUPS
    Nginx Full
    Nginx HTTP
    Nginx HTTPS
   ```

- Nginx Full：开端口 80 正常，未加密的网络流量；端口 443 TLS / SSL 加密的流量
  
- Nginx HTTP：仅打开端口 80 正常，未加密
  
- Nginx HTTPS：仅打开端口 443 TLS / SSL 加密

`sudo ufw app info 'Nginx Full'` 用来查看 `Nginx Full` 的具体配置信息。

`sudo ufw allow 'Nginx Full'` 给nginx开启 `Nginx Full` 配置方案。
