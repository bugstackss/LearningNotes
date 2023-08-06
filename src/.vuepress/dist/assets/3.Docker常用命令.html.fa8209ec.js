import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c,d as n,e as l,b as t,a as s,r as d}from"./app.9b10ba0a.js";const o="/assets/2023-05-17-22-10-52-image.a44e884a.png",r="/assets/2023-05-17-22-15-28-image.34dff6f2.png",p="/assets/2023-05-17-22-15-35-image.60768c50.png",u="/assets/2023-05-17-22-20-18-image.8ace9322.png",m="/assets/2023-05-17-22-21-36-image.e40d89a2.png",v="/assets/2023-05-17-22-25-36-image.359ede11.png",b="/assets/2023-05-17-22-36-52-image.4c6478e0.png",k="/assets/2023-05-17-22-51-23-image.69fb670b.png",h="/assets/2023-05-17-23-27-28-image.8e56eaa0.png",g="/assets/2023-05-17-23-29-02-image.121b49e5.png",f="/assets/2023-05-18-00-17-35-image.cfdcb4cc.png",x="/assets/2023-05-18-00-17-45-image.c90842b4.png",_="/assets/2023-05-18-00-19-38-image.dcc8b4f9.png",I="/assets/2023-05-18-00-20-52-image.1f308bcf.png",D="/assets/2023-05-18-00-24-46-image.b7e6d90d.png",q="/assets/2023-05-18-00-27-12-image.fd6b81d6.png",y="/assets/2023-05-18-00-28-42-image.f076a173.png",O="/assets/2023-05-17-22-28-26-image.b1f48940.png",T={},S=s(`<h2 id="一、帮助启动类命令" tabindex="-1"><a class="header-anchor" href="#一、帮助启动类命令" aria-hidden="true">#</a> 一、帮助启动类命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动docker</span>
systemctl start <span class="token function">docker</span>
<span class="token comment"># 停止docker</span>
systemctl stop <span class="token function">docker</span>
<span class="token comment"># 重启docker</span>
systemctl restart <span class="token function">docker</span>
<span class="token comment"># 查看docker状态</span>
systemctl status <span class="token function">docker</span>
<span class="token comment"># 开机启动</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
<span class="token comment"># 查看docker概要信息</span>
<span class="token function">docker</span> info
<span class="token comment"># 查看docker总体帮助文档</span>
<span class="token function">docker</span> <span class="token parameter variable">--help</span>
<span class="token comment"># 查看doker命令帮助文档</span>
<span class="token function">docker</span> 具体命令 <span class="token parameter variable">--help</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、docker镜像命令" tabindex="-1"><a class="header-anchor" href="#二、docker镜像命令" aria-hidden="true">#</a> 二、Docker镜像命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 列出本地主机上的镜像</span>
<span class="token function">docker</span> ./images 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+o+`" alt=""></p><p>各个选项说明:</p><ul><li><p>REPOSITORY：表示镜像的仓库源</p></li><li><p>TAG：镜像的标签版本号</p></li><li><p>IMAGE ID：镜像ID</p></li><li><p>CREATED：镜像创建时间</p></li><li><p>SIZE：镜像大小</p></li></ul><p>同一仓库源可以有多个 TAG版本，代表这个仓库源的不同个版本，我们使用 REPOSITORY:TAG 来定义不同的镜像。</p><p>如果你不指定一个镜像的版本标签，例如你只使用 ubuntu，docker 将默认使用 ubuntu:latest 镜像</p><blockquote><p>OPTIONS说明：</p></blockquote><hr><h1 id="当前页面内容标题" tabindex="-1"><a class="header-anchor" href="#当前页面内容标题" aria-hidden="true">#</a> 当前页面内容标题</h1><p>title:</p><h1 id="分类" tabindex="-1"><a class="header-anchor" href="#分类" aria-hidden="true">#</a> 分类</h1><p>category:</p><ul><li>docker</li></ul><h1 id="标签" tabindex="-1"><a class="header-anchor" href="#标签" aria-hidden="true">#</a> 标签</h1><p>tag:</p><ul><li>docker</li><li>云原生开发</li><li>Devops sticky: false</li></ul><h1 id="是否收藏在博客主题的文章列表中-当填入数字时-数字越大-排名越靠前。" tabindex="-1"><a class="header-anchor" href="#是否收藏在博客主题的文章列表中-当填入数字时-数字越大-排名越靠前。" aria-hidden="true">#</a> 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。</h1><p>star: false</p><h1 id="是否将该文章添加至文章列表中" tabindex="-1"><a class="header-anchor" href="#是否将该文章添加至文章列表中" aria-hidden="true">#</a> 是否将该文章添加至文章列表中</h1><p>article: true</p><h1 id="是否将该文章添加至时间线中" tabindex="-1"><a class="header-anchor" href="#是否将该文章添加至时间线中" aria-hidden="true">#</a> 是否将该文章添加至时间线中</h1><h2 id="timeline-true" tabindex="-1"><a class="header-anchor" href="#timeline-true" aria-hidden="true">#</a> timeline: true</h2><blockquote><p>-a：列出本地所有的镜像（含历史映像层）</p><p>-q：只显示镜像ID</p></blockquote><hr><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 搜索镜像</span>
<span class="token function">docker</span> search 某个XXX镜像名字
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,28),w={href:"https://hub.docker.com",target:"_blank",rel:"noopener noreferrer"},P=s(`<p><strong>命令</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> search <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> 镜像名字
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>案例</p><p><img src="`+r+'" alt=""></p><p><img src="'+p+`" alt=""></p><blockquote><p>OPTIONS说明：</p><p>--limit：只列出N个镜像，默认25个</p><p>docker search --limit 5 redis</p></blockquote><hr><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 下载镜像</span>
<span class="token function">docker</span> pull 某个XXX镜像名字

<span class="token comment"># 下载指定版本的镜像</span>
<span class="token function">docker</span> pull 镜像名字<span class="token punctuation">[</span>:TAG<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull 镜像名字
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>没有TAG就是最新版&lt;===&gt;等价于</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull 镜像名字:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例：</p><p><code>docker pull ubuntu</code></p><p><img src="`+u+`" alt=""></p><hr><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看镜像/容器/数据卷所占的空间</span>
<span class="token function">docker</span> system <span class="token function">df</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+m+`" alt=""></p><hr><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 删除镜像</span>
<span class="token function">docker</span> rmi 某个XXX镜像名字ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 删除单个</span>
<span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> 镜像ID
<span class="token comment"># 删除多个</span>
<span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> 镜像名1:TAG 镜像名2:TAG
<span class="token comment"># 删除多个</span>
<span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> ./images <span class="token parameter variable">-qa</span><span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><blockquote><p>面试题：谈谈docker虚悬镜像是什么？</p></blockquote><p><strong>是什么？</strong></p><p>仓库名、标签都是&lt; none &gt;的镜像，俗称虚悬镜像dangling image</p><p><strong>长什么样？</strong></p><p><img src="`+v+'" alt=""></p><p>后续DockerFile章节进行介绍……</p><hr><p>❓<strong>思考</strong></p><p>结合我们Git的学习心得，大家猜猜是否会有docker commit / docker push？？</p><h2 id="三、容器命令" tabindex="-1"><a class="header-anchor" href="#三、容器命令" aria-hidden="true">#</a> 三、容器命令</h2><h3 id="有镜像才能创建容器-这是根本前提-下载一个centos或者ubuntu镜像演示" tabindex="-1"><a class="header-anchor" href="#有镜像才能创建容器-这是根本前提-下载一个centos或者ubuntu镜像演示" aria-hidden="true">#</a> 有镜像才能创建容器，这是根本前提（下载一个CentOS或者ubuntu镜像演示）</h3><p><strong>说明</strong></p><p><img src="'+b+`" alt=""></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 选择自己感兴趣的</span>
<span class="token function">docker</span> pull centos
<span class="token function">docker</span> pull ubuntu
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+k+`" alt=""></p><p>这里使用ubuntu做演示！</p><h3 id="新建-启动容器" tabindex="-1"><a class="header-anchor" href="#新建-启动容器" aria-hidden="true">#</a> 新建+启动容器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span> IMAGE <span class="token punctuation">[</span>COMMAND<span class="token punctuation">]</span> <span class="token punctuation">[</span>ARG<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>OPTIONS说明：</p><p>OPTIONS说明（常用）：有些是一个减号，有些是两个减号</p><p>--name=&quot;容器新名字&quot;       为容器指定一个名称；</p><p>-d: 后台运行容器并返回容器ID，也即启动守护式容器(后台运行)；</p><p><code>-i：以交互模式运行容器，通常与 -t 同时使用；</code></p><p><code>-t：为容器重新分配一个伪输入终端，通常与 -i 同时使用；</code></p><p>也即<code>启动交互式容器(前台有伪终端，等待交互)；</code></p><p>-P: 随机端口映射，大写P</p><p>-p: 指定端口映射，小写p</p></blockquote><p><img src="`+h+'" alt=""></p><blockquote><p>启动交互式容器（前台命令行）</p></blockquote><p><img src="'+g+`" alt=""></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#使用镜像centos:latest以交互模式启动一个容器,在容器内执行/bin/bash命令。</span>

<span class="token function">docker</span> run <span class="token parameter variable">-it</span> centos /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>参数说明：</p><p>-i: 交互式操作。</p><p>-t: 终端。</p><p>centos : centos 镜像。</p><p>/bin/bash：放在镜像名后的是命令，这里我们希望有个交互式 Shell，因此用的是 /bin/bash。</p><p>要退出终端，直接输入 exit:</p></blockquote><h3 id="列出当前所有正在运行的容器" tabindex="-1"><a class="header-anchor" href="#列出当前所有正在运行的容器" aria-hidden="true">#</a> 列出当前所有<code>正在运行</code>的容器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> <span class="token punctuation">[</span>OPTIONS<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>OPTIONS说明（常用）：</p><p>-a :列出当前所有正在运行的容器+历史上运行过的</p><p>-l :显示最近创建的容器。</p><p>-n：显示最近n个创建的容器。</p><p>-q :静默模式，只显示容器编号。</p></blockquote><h3 id="退出容器" tabindex="-1"><a class="header-anchor" href="#退出容器" aria-hidden="true">#</a> 退出容器</h3><p>两种退出方式</p><ul><li><p><code>exit</code>：run进去容器，exit退出，容器停止</p></li><li><p><code>ctrl+p+q</code>：run进去容器，<code>ctrl+p+q</code>退出，容器不停止</p></li></ul><h3 id="启动已停止运行的容器" tabindex="-1"><a class="header-anchor" href="#启动已停止运行的容器" aria-hidden="true">#</a> 启动已停止运行的容器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> start 容器ID或者容器名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="重启容器" tabindex="-1"><a class="header-anchor" href="#重启容器" aria-hidden="true">#</a> 重启容器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> restart 容器ID或者容器名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="停止容器" tabindex="-1"><a class="header-anchor" href="#停止容器" aria-hidden="true">#</a> 停止容器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> stop 容器ID或者容器名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="强制停止容器" tabindex="-1"><a class="header-anchor" href="#强制停止容器" aria-hidden="true">#</a> 强制停止容器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">kill</span> 容器ID或者容器名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除已停止的容器" tabindex="-1"><a class="header-anchor" href="#删除已停止的容器" aria-hidden="true">#</a> 删除已停止的容器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 删除已停止的容器</span>
<span class="token function">docker</span> <span class="token function">rm</span> 容器ID

<span class="token comment">#一次性删除多个容器示例</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-q</span><span class="token variable">)</span></span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span> <span class="token parameter variable">-q</span> <span class="token operator">|</span><span class="token function">xargs</span> <span class="token function">docker</span> <span class="token function">rm</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="⭐️重要" tabindex="-1"><a class="header-anchor" href="#⭐️重要" aria-hidden="true">#</a> <strong>⭐️重要</strong></h3><p>1.有镜像才能创建容器，这是根本前提（下载一个Redis6.0.8镜像演示）</p><p>2.启动守护式容器（后台服务器）</p><blockquote><p>在大部分的场景下，我们希望docker的服务是在后台运行的，我们可以通过 <code>-d</code>指定容器的后台运行模式。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> 容器名

<span class="token comment">#使用镜像centos:latest以后台模式启动一个容器</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> centos
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>问题：然后<code>docker ps -a </code>进行查看, 会发现容器已经退出</p><p>很重要的要说明的一点: <code>Docker容器后台运行,就必须有一个前台进程</code>.</p><p>容器运行的命令如果不是那些<code>一直挂起的命令</code>（比如运行top，tail），就是会自动退出的。</p><p>这个是docker的机制问题,比如你的web容器,我们以nginx为例，正常情况下,我们配置启动服务只需要启动响应的service即可。例如<code>service nginx start</code></p><p>但是,这样做,nginx为后台进程模式运行,就导致docker前台没有运行的应用,这样的容器后台启动后,会立即自杀因为他觉得他没事可做了.</p><p>所以，最佳的解决方案是,<code>将你要运行的程序以前台进程的形式运行，常见就是命令行模式，表示我还有交互操作，别中断，O(∩_∩)O哈哈~</code></p><blockquote><p>redis前后台启动演示case</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 前台交互式启动</span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> redis:6.0.8

<span class="token comment"># 后台守护式启动</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> redis:6.0.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.查看容器日志</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> logs 容器ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4.查看容器内运行的进程</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">top</span> 容器ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>5.查看容器内部细节</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> inspect 容器ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>6.进入正在运行的容器并以命令行交互</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 容器ID bashShell
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+f+'" alt=""></p><p><img src="'+x+'" alt=""></p><p>重新进入<code>docker attach 容器ID</code></p><p>案例演示，用centos或者ubuntu都可以</p><p>上述两个区别</p><ul><li><code>attach</code>直接进入容器启动命令的终端，不会启动新的进程，用<code>exit</code>退出，会导致容器的停止</li></ul><p><img src="'+_+'" alt=""></p><ul><li><code>exec</code>是在容器内打开新的终端，并且可以启动新的进程，用<code>exit</code>退出，不会导致容器的停止。</li></ul><p><img src="'+I+`" alt=""></p><p>推荐大家使用docker exec命令，因为退出容器终端，不会导致容器的停止。</p><p>用之前的redis容器示例进入试试，进入redis</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 容器ID /bin/bash
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 容器ID redis-cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>一般用<code>-d</code>后台启动的程序，再用<code>exec</code>进入对应容器示例</p><p>7.从容器内拷贝文件到主机上</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 容器---&gt;主机</span>
<span class="token function">docker</span> <span class="token function">cp</span> 容器ID:容器内路径 目的主机路径
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+D+`" alt=""></p><p>公式：docker cp  容器ID:容器内路径 目的主机路径</p><p>8.导入和导出容器</p><ul><li><p>export 导出容器的内容作为一个tar归档文件[对应import命令]</p></li><li><p>import 从tar包中的内容创建一个新的文件系统再导入为镜像【对应export】</p></li><li><p>案例</p></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">export</span> 容器ID <span class="token operator">&gt;</span> 文件名.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+q+`" alt=""></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> 文件名.tar <span class="token operator">|</span> <span class="token function">docker</span> <span class="token function">import</span> -镜像用户/镜像名:镜像版本号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+y+'" alt=""></p><h2 id="四、小总结" tabindex="-1"><a class="header-anchor" href="#四、小总结" aria-hidden="true">#</a> 四、小总结</h2><p><code>常用命令</code></p><p><img src="'+O+`" alt=""></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>attach    Attach to a running container                 <span class="token comment"># 当前 shell 下 attach 连接指定运行镜像</span>

build     Build an image from a Dockerfile              <span class="token comment"># 通过 Dockerfile 定制镜像</span>

commit    Create a new image from a container changes   <span class="token comment"># 提交当前容器为新的镜像</span>

<span class="token function">cp</span>        Copy files/folders from the containers filesystem to the <span class="token function">host</span> path   <span class="token comment">#从容器中拷贝指定文件或者目录到宿主机中</span>

create    Create a new container                        <span class="token comment"># 创建一个新的容器，同 run，但不启动容器</span>

<span class="token function">diff</span>      Inspect changes on a container&#39;s filesystem   <span class="token comment"># 查看 docker 容器变化</span>

events    Get real <span class="token function">time</span> events from the server          <span class="token comment"># 从 docker 服务获取容器实时事件</span>

<span class="token builtin class-name">exec</span>      Run a <span class="token builtin class-name">command</span> <span class="token keyword">in</span> an existing container        <span class="token comment"># 在已存在的容器上运行命令</span>

<span class="token builtin class-name">export</span>    Stream the contents of a container as a <span class="token function">tar</span> archive   <span class="token comment"># 导出容器的内容流作为一个 tar 归档文件[对应 import ]</span>

<span class="token function">history</span>   Show the <span class="token function">history</span> of an image                  <span class="token comment"># 展示一个镜像形成历史</span>

./images    List ./images                                   <span class="token comment"># 列出系统当前镜像</span>

<span class="token function">import</span>    Create a new filesystem image from the contents of a tarball <span class="token comment"># 从tar包中的内容创建一个新的文件系统映像[对应export]</span>

info      Display system-wide information               <span class="token comment"># 显示系统相关信息</span>

inspect   Return low-level information on a container   <span class="token comment"># 查看容器详细信息</span>

<span class="token function">kill</span>      Kill a running container                      <span class="token comment"># kill 指定 docker 容器</span>

load      Load an image from a <span class="token function">tar</span> archive              <span class="token comment"># 从一个 tar 包中加载一个镜像[对应 save]</span>

login     Register or Login to the <span class="token function">docker</span> registry server    <span class="token comment"># 注册或者登陆一个 docker 源服务器</span>

<span class="token builtin class-name">logout</span>    Log out from a Docker registry server          <span class="token comment"># 从当前 Docker registry 退出</span>

logs      Fetch the logs of a container                 <span class="token comment"># 输出当前容器日志信息</span>

port      Lookup the public-facing port <span class="token function">which</span> is NAT-ed to PRIVATE_PORT    <span class="token comment"># 查看映射端口对应的容器内部源端口</span>

pause     Pause all processes within a container        <span class="token comment"># 暂停容器</span>

<span class="token function">ps</span>        List containers                               <span class="token comment"># 列出容器列表</span>

pull      Pull an image or a repository from the <span class="token function">docker</span> registry server   <span class="token comment"># 从docker镜像源服务器拉取指定镜像或者库镜像</span>

push      Push an image or a repository to the <span class="token function">docker</span> registry server    <span class="token comment"># 推送指定镜像或者库镜像至docker源服务器</span>

restart   Restart a running container                   <span class="token comment"># 重启运行的容器</span>

<span class="token function">rm</span>        Remove one or <span class="token function">more</span> containers                 <span class="token comment"># 移除一个或者多个容器</span>

rmi       Remove one or <span class="token function">more</span> ./images       <span class="token comment"># 移除一个或多个镜像[无容器使用该镜像才可删除，否则需删除相关容器才可继续或 -f 强制删除]</span>

run       Run a <span class="token builtin class-name">command</span> <span class="token keyword">in</span> a new container              <span class="token comment"># 创建一个新的容器并运行一个命令</span>

save      Save an image to a <span class="token function">tar</span> archive                <span class="token comment"># 保存一个镜像为一个 tar 包[对应 load]</span>

search    Search <span class="token keyword">for</span> an image on the Docker Hub         <span class="token comment"># 在 docker hub 中搜索镜像</span>

start     Start a stopped containers                    <span class="token comment"># 启动容器</span>

stop      Stop a running containers                     <span class="token comment"># 停止容器</span>

tag       Tag an image into a repository                <span class="token comment"># 给源中镜像打标签</span>

<span class="token function">top</span>       Lookup the running processes of a container   <span class="token comment"># 查看容器中运行的进程信息</span>

unpause   Unpause a paused container                    <span class="token comment"># 取消暂停容器</span>

version   Show the <span class="token function">docker</span> version information           <span class="token comment"># 查看 docker 版本号</span>

<span class="token function">wait</span>      Block <span class="token keyword">until</span> a container stops, <span class="token keyword">then</span> print its <span class="token builtin class-name">exit</span> code   <span class="token comment"># 截取容器停止时的退出状态值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,109);function R(A,N){const a=d("ExternalLinkIcon");return i(),c("div",null,[S,n("p",null,[n("a",w,[l("网站"),t(a)])]),P])}const L=e(T,[["render",R],["__file","3.Docker常用命令.html.vue"]]);export{L as default};
