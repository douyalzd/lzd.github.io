---
title: vsCode-PHP环境配置-windows
author:
  nick: lzd
  github_name: douyalzd
img: 'http://qiniu.luzhidong.cn/static/images/cover/002.jpg'
top: false
mathjax: false
summary: 'vsCode-PHP环境配置-windows，在网上搜了蛮多, 全面说明的vscode配置php环境的很少，第一次次接触php这个文章很适合PHP新手'
categories: php
tags:
  - php
  - vsCode
abbrlink: 7de543a2
date: 2020-05-22 11:36:17
---


## 安装Wampserver
1. Wampserver[点击下载](https://sourceforge.net/projects/wampserver/)集成了Apache、mysql、php(多个版本的)等环境  
{% qnimg 016.jpg %}

2. 安装Wampserver，直接下一步就可以了 
{% qnimg 021.jpg %}  
这里可以选择要安装的应用，下面的是我选择，因为我本地已经安装了mysql所以我没有勾选mysql，如果你没有安装的话建议你勾选上mysql5.7，然后直接下一步就可以了   
{% qnimg 022.jpg %}  


3. 安装完成后，直接打开Wampserver, 任务栏的图标由红变绿说明已经启动成功，鼠标右键打开下图可以看到Apache启动的服务默认监听端口是80端口，如果你发现没启动成功很有可能就是你的电脑80端口已经被占用  
{% qnimg 017.jpg %}
浏览器直接输入localhost，看到下图说明已经安装并启动成功了  
{% qnimg 020.jpg %}

4. 如果你的端口被占用可以这样修改，指着Wampserver图标点击鼠标左键可以看到下图  
{% qnimg 018.png %}  
{% qnimg 019.jpg %}
**注：修改完后重新启动服务，浏览器打开localhost:8089看是否能访问**

到这里Wampserver就安装完了

## Wampserver配置PHP环境
1. 这里我用这个php项目做测试[CRMEB](https://github.com/crmeb/CRMEB)，我们先把项目clone下来，把项目复制复制到www目录  
怎么知道www目录在哪呢，看下图直接点击就可以进入该目录  
{% qnimg 023.jpg %}  

复制的项目的目录结构如下  
{% qnimg 024.jpg %}  

到这里已经成功一半的，下一步吧Apache默认打开目录指定到这个项目目录 
{% qnimg 025.jpg %}  
点击上图指定的，打开文档把路径修改如下就可以了  **注：修改完后要重启Apache服务才能生效**  
{% qnimg 026.jpg %}  
我们打开浏览，输入localhost就可以看到我们项目的页面了  
{% qnimg 027.jpg %}  

## vscode调试PHP项目
1. vscode打开刚才我复制到www目录的项目  
{% qnimg 028.jpg %}  

2. vscode安装`PHP Debug`和`PHP IntelliSense`  
{% qnimg 029.jpg %}  
并给他们配置php安装路径
{% qnimg 030.jpg %}  

3. 然后我去看看Wampserver的想php-xdebug是否已经启用  
{% qnimg 031.jpg %}  
{% qnimg 032.jpg %}  
{% qnimg 033.jpg %}  
如果上面的几个勾是时好的，就没问题

4. 回到我们的vscode，创建调试文件，如下图  
{% qnimg 034.jpg %}  
{% qnimg 035.jpg %}  
上面可以不做任何改动，这里说下`"port": 9000`参数，为什么是9000  
我们去下面目录创建一个phpinfo文件，如下图：
{% qnimg 036.jpg %}  
然后在浏览器打开`localhost/phpInfo.php`找到`xdebug.remote_port`  
这里的数字和上面的创建调试文件对应就可以了  
{% qnimg 037.jpg %}  

5. 我这里用登录接口做调试，点击登录我的开发工具就可以捕获到断点了
{% qnimg 038.jpg %}  

6. 如果你的没有自动获取不到断点，那还需要改下Apache配置文件，点击打开下面文件，滚动条拉到最底部或者搜索【xdebug】
{% qnimg 039.jpg %}  
配置`xdebug.remote_autostart = On`  
{% qnimg 040.jpg %}  

## Xdebug配置  
> 如果Wampserve没有自带php-xdebug的话才需要进行改步骤   

复制phpinfo整个网页内容,粘贴到[https://xdebug.org/wizard](https://xdebug.org/wizard)确定Xdebug版本  
{% qnimg 041.jpg %}  
点击按钮生成PHP版本对应的XDebug安装文件和说明  
{% qnimg 042.jpg %}  
{% qnimg 043.jpg %}  
相信你能懂上面说的，去配置下就可以了，然后检查xdebug是否安装成，怎么检查上面已经有说到  

**有其他问题可以在下面留言，看到了我会回复你的**