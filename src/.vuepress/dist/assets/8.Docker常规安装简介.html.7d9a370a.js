import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as n,a as s}from"./app.9b10ba0a.js";const l="/assets/2023-05-18-21-44-33-image.07080b88.png",d="/assets/2023-05-18-21-45-38-image.fd6f6ae5.png",a="/assets/2023-05-18-21-45-56-image.ca8f6e8c.png",v="/assets/2023-05-18-21-46-34-image.67ba0212.png",r="/assets/2023-05-18-21-48-44-image.fcc6a6af.png",c="/assets/2023-05-18-21-49-25-image.45506815.png",t="/assets/2023-05-18-21-50-05-image.8c76fef3.png",u="/assets/2023-05-18-21-50-56-image.62090f23.png",m="/assets/2023-05-18-21-51-25-image.c8136df0.png",b="/assets/2023-05-18-21-52-59-image.6b28f425.png",o="/assets/2023-05-18-22-34-11-image.4d7e8059.png",h="/assets/2023-05-18-22-34-00-image.be15da6f.png",p="/assets/2023-05-18-22-34-45-image.5569ff11.png",f="/assets/2023-05-18-22-35-28-image.5c39dfd0.png",g="/assets/2023-05-18-22-35-57-image.34e5e423.png",y="/assets/2023-05-18-22-36-41-image.dc655dcc.png",w="/assets/2023-05-18-22-37-12-image.bb95a4a8.png",k="/assets/2023-05-18-22-37-55-image.444d2f14.png",R="/assets/2023-05-18-22-39-52-image.1ab8734f.png",x="/assets/2023-05-18-22-40-47-image.59724714.png",T="/assets/2023-05-18-22-41-32-image.a3459f61.png",q="/assets/2023-05-18-22-41-39-image.c4329b32.png",I="/assets/2023-05-18-22-42-07-image.c789f2e4.png",_="/assets/2023-05-18-22-42-14-image.bbeddd25.png",S="/assets/2023-05-18-22-42-44-image.2fbbead2.png",A="/assets/2023-05-18-22-44-33-image.43040a63.png",E="/assets/2023-05-18-22-45-02-image.f7791d2b.png",O="/assets/2023-05-18-22-47-46-image.0511d174.png",N="/assets/2023-05-18-22-48-35-image.b230a256.png",L="/assets/2023-05-18-22-50-16-image.b784bd18.png",z="/assets/2023-05-18-22-50-32-image.d365c45a.png",C="/assets/2023-05-18-22-52-37-image.9844a555.png",F="/assets/2023-05-18-22-53-07-image.6bf78f75.png",B="/assets/2023-05-18-22-53-54-image.0db8ff08.png",D="/assets/2023-05-18-22-54-27-image.32272fbf.png",U="/assets/2023-05-18-22-55-11-image.2f328b73.png",P={},M=s(`<h2 id="一、总体步骤" tabindex="-1"><a class="header-anchor" href="#一、总体步骤" aria-hidden="true">#</a> 一、总体步骤</h2><ul><li><p>搜索镜像</p></li><li><p>拉取镜像</p></li><li><p>查看镜像</p></li><li><p>启动镜像：服务端口映射</p></li><li><p>停止镜像</p></li><li><p>移除镜像</p></li></ul><h2 id="二、安装tomcat" tabindex="-1"><a class="header-anchor" href="#二、安装tomcat" aria-hidden="true">#</a> 二、安装Tomcat</h2><ol><li>docker hub上面查找Tomcat镜像</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> search tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+l+`" alt=""></p><ol start="2"><li>从docker hub上拉取tomcat镜像到本地</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+d+'" alt=""></p><p><img src="'+a+'" alt=""></p><ol start="3"><li>docker ./images查看是否拉取到的tomcat</li></ol><p><img src="'+v+`" alt=""></p><ol start="4"><li>使用tomcat镜像创建容器实例（也叫运行镜像）</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080 tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>参数OPTIONS:</p><p>-P大写，随机分配端口</p><p>-p小写，主机端口:docker容器端口</p><p>i：交互</p><p>t：终端</p><p>d：后台</p></blockquote><p><img src="`+r+'" alt=""></p><ol start="5"><li>访问猫首页</li></ol><blockquote><p>问题</p></blockquote><p><img src="'+c+'" alt=""></p><blockquote><p>解决</p></blockquote><ul><li>可能没有映射端口或者没有关闭防火墙</li></ul><p><img src="'+t+'" alt=""></p><ul><li>把webapps.dist目录换成webapps</li></ul><p>先成功启动tomcat</p><p><img src="'+u+'" alt=""></p><p>查看webapps文件夹查看为空</p><p><img src="'+m+`" alt=""></p><ol start="6"><li>免修订版说明</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull billygoo/tomcat8-jdk8


<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">8080</span>:8080 <span class="token parameter variable">--name</span> mytomcat8 billygoo/tomcat8-jdk8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+b+'" alt=""></p><h2 id="三、安装mysql" tabindex="-1"><a class="header-anchor" href="#三、安装mysql" aria-hidden="true">#</a> 三、安装mysql</h2><p>docker hub上面查找mysql镜像</p><p><img src="'+o+'" alt=""></p><p>从docker hub上（阿里云加速器）拉取mysql镜像到本地标签为5.7</p><p><img src="'+h+'" alt=""></p><p>使用mysql5.7镜像创建容器（也叫运行镜像）</p><blockquote><p>命令出处，哪里来的？</p></blockquote><p><img src="'+p+'" alt=""></p><blockquote><p>简单版</p></blockquote><p><strong>使用mysql镜像</strong></p><table><thead><tr><th>docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7</th></tr></thead><tbody><tr><td>docker ps</td></tr><tr><td>docker exec -it 容器ID /bin/bash</td></tr><tr><td>mysql -uroot -p</td></tr></tbody></table><p><img src="'+f+'" alt=""></p><p><strong>建库建表插入数据</strong></p><p><img src="'+g+'" alt=""></p><p>外部win10/Mac连接运行在docker上的mysql容器实例服务</p><p><img src="'+y+'" alt=""></p><p><strong>问题</strong></p><p>插入中文数据试试</p><p><img src="'+w+`" alt=""></p><p>为什么报错？</p><p>docker默认字符集编码隐患</p><p>docker里面的mysql容器实例查看，内容如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code> <span class="token keyword">SHOW</span> VARIABLES <span class="token operator">LIKE</span> <span class="token string">&#39;character%&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+k+`" alt=""></p><p>删除容器后，里面的mysql数据如何办？</p><p>容器实例一删除，你还有什么？删容器到跑路……？</p><blockquote><p>实战版</p></blockquote><ol><li>新建mysql容器示例</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">3306</span>:3306 <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">-v</span> /zzyyuse/mysql/log:/var/log/mysql <span class="token parameter variable">-v</span> /zzyyuse/mysql/data:/var/lib/mysql <span class="token parameter variable">-v</span> /zzyyuse/mysql/conf:/etc/mysql/conf.d <span class="token parameter variable">-e</span> <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span><span class="token number">123456</span>  <span class="token parameter variable">--name</span> mysql mysql:5.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+R+`" alt=""></p><ol start="2"><li>新建my.cnf</li></ol><p>通过容器卷同步给mysql容器示例</p><div class="language-my.cnf line-numbers-mode" data-ext="my.cnf"><pre class="language-my.cnf"><code>[client]
default_character_set=utf8
[mysqld]
collation_server = utf8_general_ci
character_set_server = utf8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+x+'" alt=""></p><ol start="3"><li>重新启动mysql容器实例再重新进入并查看字符集编码</li></ol><p><img src="'+T+'" alt=""></p><p><img src="'+q+'" alt=""></p><ol start="4"><li>再新建库新建表在插入中文测试</li></ol><p><img src="'+I+'" alt=""></p><p><img src="'+_+'" alt=""></p><ol start="5"><li>结论</li></ol><p>之前的DB  无效</p><p>修改字符集操作+重启mysql容器实例</p><p>之后的DB  有效，需要新建</p><p>结论：<strong>docker安装完MySQL并run出容器后，建议请先修改完字符集编码后再新建mysql库-表-插数据</strong></p><p><img src="'+S+'" alt=""></p><p>假如将当前容器实例删除，再重新来一次，之前建的db01实例还有吗？trytry</p><h2 id="四、安装redis" tabindex="-1"><a class="header-anchor" href="#四、安装redis" aria-hidden="true">#</a> 四、安装Redis</h2><ol><li>从Docker hub上（阿里云加速器）拉取redis镜像到本地标签为6.0.8</li></ol><p><img src="'+A+`" alt=""></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull redis:6.0.8

<span class="token function">docker</span> ./images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>入门命令</li></ol><p><img src="`+E+`" alt=""></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 redis:6.0.8

<span class="token comment"># 进入redis容器</span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> 镜像ID /bin/bash

redis-cli 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><code>命令提示：容器卷记得加入 --privileged=true</code></li></ol><p>Docker挂载主机目录Docker访问出现cannot open directory .: Permission denied</p><p>解决办法：在挂载目录后多加一个--privileged=true参数即可</p><ol start="4"><li>在CentOS宿主机下新建目录/app/redis</li></ol><p><img src="`+O+`" alt=""></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token number">1</span> 建目录

  <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /app/redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>将一个redis.conf文件末班拷贝进/app/redis目录下</li></ol><p><img src="`+N+`" alt=""></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token number">2</span> 拷贝配置文件

<span class="token comment"># 将准备好的redis.conf文件放进/app/redis目录下</span>
<span class="token function">cp</span> /myredis/redis.conf /app/redis/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>/app/redis目录下修改redis.conf文件</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">3</span> /app/redis目录下修改redis.conf文件

  <span class="token number">3.1</span> 开启redis验证    可选

    requirepass <span class="token number">123</span>

  <span class="token number">3.2</span> 允许redis外地连接  必须

     注释掉 <span class="token comment"># bind 127.0.0.1</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+L+`" alt=""></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token number">3.3</span>   daemonize no

     将daemonize yes注释起来或者 daemonize no设置，因为该配置和docker run中-d参数冲突，会导致容器一直启动失败
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+z+`" alt=""></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">3.4</span> 开启redis数据持久化  appendonly <span class="token function">yes</span>  可选
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认出厂的原始redis.conf</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code># Redis configuration file example.

#

# Note that in order to read the configuration file, Redis must be

# started with the file path as first argument:

#

# ./redis-server /path/to/redis.conf

 

# Note on units: when memory size is needed, it is possible to specify

# it in the usual form of 1k 5GB 4M and so forth:

#

# 1k =&gt; 1000 bytes

# 1kb =&gt; 1024 bytes

# 1m =&gt; 1000000 bytes

# 1mb =&gt; 1024*1024 bytes

# 1g =&gt; 1000000000 bytes

# 1gb =&gt; 1024*1024*1024 bytes

#

# units are case insensitive so 1GB 1Gb 1gB are all the same.

 

################################## INCLUDES ###################################

 

# Include one or more other config files here.  This is useful if you

# have a standard template that goes to all Redis servers but also need

# to customize a few per-server settings.  Include files can include

# other files, so use this wisely.

#

# Notice option &quot;include&quot; won&#39;t be rewritten by command &quot;CONFIG REWRITE&quot;

# from admin or Redis Sentinel. Since Redis always uses the last processed

# line as value of a configuration directive, you&#39;d better put includes

# at the beginning of this file to avoid overwriting config change at runtime.

#

# If instead you are interested in using includes to override configuration

# options, it is better to use include as the last line.

#

# include /path/to/local.conf

# include /path/to/other.conf

 

################################## MODULES #####################################

 

# Load modules at startup. If the server is not able to load modules

# it will abort. It is possible to use multiple loadmodule directives.

#

# loadmodule /path/to/my_module.so

# loadmodule /path/to/other_module.so

 

################################## NETWORK #####################################

 

# By default, if no &quot;bind&quot; configuration directive is specified, Redis listens

# for connections from all the network interfaces available on the server.

# It is possible to listen to just one or multiple selected interfaces using

# the &quot;bind&quot; configuration directive, followed by one or more IP addresses.

#

# Examples:

#

# bind 192.168.1.100 10.0.0.1

# bind 127.0.0.1 ::1

#

# ~~~ WARNING ~~~ If the computer running Redis is directly exposed to the

# internet, binding to all the interfaces is dangerous and will expose the

# instance to everybody on the internet. So by default we uncomment the

# following bind directive, that will force Redis to listen only into

# the IPv4 loopback interface address (this means Redis will be able to

# accept connections only from clients running into the same computer it

# is running).

#

# IF YOU ARE SURE YOU WANT YOUR INSTANCE TO LISTEN TO ALL THE INTERFACES

# JUST COMMENT THE FOLLOWING LINE.

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

#bind 127.0.0.1

 

# Protected mode is a layer of security protection, in order to avoid that

# Redis instances left open on the internet are accessed and exploited.

#

# When protected mode is on and if:

#

# 1) The server is not binding explicitly to a set of addresses using the

#    &quot;bind&quot; directive.

# 2) No password is configured.

#

# The server only accepts connections from clients connecting from the

# IPv4 and IPv6 loopback addresses 127.0.0.1 and ::1, and from Unix domain

# sockets.

#

# By default protected mode is enabled. You should disable it only if

# you are sure you want clients from other hosts to connect to Redis

# even if no authentication is configured, nor a specific set of interfaces

# are explicitly listed using the &quot;bind&quot; directive.

protected-mode no

 

# Accept connections on the specified port, default is 6379 (IANA #815344).

# If port 0 is specified Redis will not listen on a TCP socket.

port 6379

 

# TCP listen() backlog.

#

# In high requests-per-second environments you need an high backlog in order

# to avoid slow clients connections issues. Note that the Linux kernel

# will silently truncate it to the value of /proc/sys/net/core/somaxconn so

# make sure to raise both the value of somaxconn and tcp_max_syn_backlog

# in order to get the desired effect.

tcp-backlog 511

 

# Unix socket.

#

# Specify the path for the Unix socket that will be used to listen for

# incoming connections. There is no default, so Redis will not listen

# on a unix socket when not specified.

#

# unixsocket /tmp/redis.sock

# unixsocketperm 700

 

# Close the connection after a client is idle for N seconds (0 to disable)

timeout 0

 

# TCP keepalive.

#

# If non-zero, use SO_KEEPALIVE to send TCP ACKs to clients in absence

# of communication. This is useful for two reasons:

#

# 1) Detect dead peers.

# 2) Take the connection alive from the point of view of network

#    equipment in the middle.

#

# On Linux, the specified value (in seconds) is the period used to send ACKs.

# Note that to close the connection the double of the time is needed.

# On other kernels the period depends on the kernel configuration.

#

# A reasonable value for this option is 300 seconds, which is the new

# Redis default starting with Redis 3.2.1.

tcp-keepalive 300

 

################################# GENERAL #####################################

 

# By default Redis does not run as a daemon. Use &#39;yes&#39; if you need it.

# Note that Redis will write a pid file in /var/run/redis.pid when daemonized.

daemonize no

 

# If you run Redis from upstart or systemd, Redis can interact with your

# supervision tree. Options:

#   supervised no      - no supervision interaction

#   supervised upstart - signal upstart by putting Redis into SIGSTOP mode

#   supervised systemd - signal systemd by writing READY=1 to $NOTIFY_SOCKET

#   supervised auto    - detect upstart or systemd method based on

#                        UPSTART_JOB or NOTIFY_SOCKET environment variables

# Note: these supervision methods only signal &quot;process is ready.&quot;

#       They do not enable continuous liveness pings back to your supervisor.

supervised no

 

# If a pid file is specified, Redis writes it where specified at startup

# and removes it at exit.

#

# When the server runs non daemonized, no pid file is created if none is

# specified in the configuration. When the server is daemonized, the pid file

# is used even if not specified, defaulting to &quot;/var/run/redis.pid&quot;.

#

# Creating a pid file is best effort: if Redis is not able to create it

# nothing bad happens, the server will start and run normally.

pidfile /var/run/redis_6379.pid

 

# Specify the server verbosity level.

# This can be one of:

# debug (a lot of information, useful for development/testing)

# verbose (many rarely useful info, but not a mess like the debug level)

# notice (moderately verbose, what you want in production probably)

# warning (only very important / critical messages are logged)

loglevel notice

 

# Specify the log file name. Also the empty string can be used to force

# Redis to log on the standard output. Note that if you use standard

# output for logging but daemonize, logs will be sent to /dev/null

logfile &quot;&quot;

 

# To enable logging to the system logger, just set &#39;syslog-enabled&#39; to yes,

# and optionally update the other syslog parameters to suit your needs.

# syslog-enabled no

 

# Specify the syslog identity.

# syslog-ident redis

 

# Specify the syslog facility. Must be USER or between LOCAL0-LOCAL7.

# syslog-facility local0

 

# Set the number of databases. The default database is DB 0, you can select

# a different one on a per-connection basis using SELECT &lt;dbid&gt; where

# dbid is a number between 0 and &#39;databases&#39;-1

databases 16

 

# By default Redis shows an ASCII art logo only when started to log to the

# standard output and if the standard output is a TTY. Basically this means

# that normally a logo is displayed only in interactive sessions.

#

# However it is possible to force the pre-4.0 behavior and always show a

# ASCII art logo in startup logs by setting the following option to yes.

always-show-logo yes

 

################################ SNAPSHOTTING  ################################

#

# Save the DB on disk:

#

#   save &lt;seconds&gt; &lt;changes&gt;

#

#   Will save the DB if both the given number of seconds and the given

#   number of write operations against the DB occurred.

#

#   In the example below the behaviour will be to save:

#   after 900 sec (15 min) if at least 1 key changed

#   after 300 sec (5 min) if at least 10 keys changed

#   after 60 sec if at least 10000 keys changed

#

#   Note: you can disable saving completely by commenting out all &quot;save&quot; lines.

#

#   It is also possible to remove all the previously configured save

#   points by adding a save directive with a single empty string argument

#   like in the following example:

#

#   save &quot;&quot;

 

save 900 1

save 300 10

save 60 10000

 

# By default Redis will stop accepting writes if RDB snapshots are enabled

# (at least one save point) and the latest background save failed.

# This will make the user aware (in a hard way) that data is not persisting

# on disk properly, otherwise chances are that no one will notice and some

# disaster will happen.

#

# If the background saving process will start working again Redis will

# automatically allow writes again.

#

# However if you have setup your proper monitoring of the Redis server

# and persistence, you may want to disable this feature so that Redis will

# continue to work as usual even if there are problems with disk,

# permissions, and so forth.

stop-writes-on-bgsave-error yes

 

# Compress string objects using LZF when dump .rdb databases?

# For default that&#39;s set to &#39;yes&#39; as it&#39;s almost always a win.

# If you want to save some CPU in the saving child set it to &#39;no&#39; but

# the dataset will likely be bigger if you have compressible values or keys.

rdbcompression yes

 

# Since version 5 of RDB a CRC64 checksum is placed at the end of the file.

# This makes the format more resistant to corruption but there is a performance

# hit to pay (around 10%) when saving and loading RDB files, so you can disable it

# for maximum performances.

#

# RDB files created with checksum disabled have a checksum of zero that will

# tell the loading code to skip the check.

rdbchecksum yes

 

# The filename where to dump the DB

dbfilename dump.rdb

 

# The working directory.

#

# The DB will be written inside this directory, with the filename specified

# above using the &#39;dbfilename&#39; configuration directive.

#

# The Append Only File will also be created inside this directory.

#

# Note that you must specify a directory here, not a file name.

dir ./

 

################################# REPLICATION #################################

 

# Master-Replica replication. Use replicaof to make a Redis instance a copy of

# another Redis server. A few things to understand ASAP about Redis replication.

#

#   +------------------+      +---------------+

#   |      Master      | ---&gt; |    Replica    |

#   | (receive writes) |      |  (exact copy) |

#   +------------------+      +---------------+

#

# 1) Redis replication is asynchronous, but you can configure a master to

#    stop accepting writes if it appears to be not connected with at least

#    a given number of replicas.

# 2) Redis replicas are able to perform a partial resynchronization with the

#    master if the replication link is lost for a relatively small amount of

#    time. You may want to configure the replication backlog size (see the next

#    sections of this file) with a sensible value depending on your needs.

# 3) Replication is automatic and does not need user intervention. After a

#    network partition replicas automatically try to reconnect to masters

#    and resynchronize with them.

#

# replicaof &lt;masterip&gt; &lt;masterport&gt;

 

# If the master is password protected (using the &quot;requirepass&quot; configuration

# directive below) it is possible to tell the replica to authenticate before

# starting the replication synchronization process, otherwise the master will

# refuse the replica request.

#

# masterauth &lt;master-password&gt;

 

# When a replica loses its connection with the master, or when the replication

# is still in progress, the replica can act in two different ways:

#

# 1) if replica-serve-stale-data is set to &#39;yes&#39; (the default) the replica will

#    still reply to client requests, possibly with out of date data, or the

#    data set may just be empty if this is the first synchronization.

#

# 2) if replica-serve-stale-data is set to &#39;no&#39; the replica will reply with

#    an error &quot;SYNC with master in progress&quot; to all the kind of commands

#    but to INFO, replicaOF, AUTH, PING, SHUTDOWN, REPLCONF, ROLE, CONFIG,

#    SUBSCRIBE, UNSUBSCRIBE, PSUBSCRIBE, PUNSUBSCRIBE, PUBLISH, PUBSUB,

#    COMMAND, POST, HOST: and LATENCY.

#

replica-serve-stale-data yes

 

# You can configure a replica instance to accept writes or not. Writing against

# a replica instance may be useful to store some ephemeral data (because data

# written on a replica will be easily deleted after resync with the master) but

# may also cause problems if clients are writing to it because of a

# misconfiguration.

#

# Since Redis 2.6 by default replicas are read-only.

#

# Note: read only replicas are not designed to be exposed to untrusted clients

# on the internet. It&#39;s just a protection layer against misuse of the instance.

# Still a read only replica exports by default all the administrative commands

# such as CONFIG, DEBUG, and so forth. To a limited extent you can improve

# security of read only replicas using &#39;rename-command&#39; to shadow all the

# administrative / dangerous commands.

replica-read-only yes

 

# Replication SYNC strategy: disk or socket.

#

# -------------------------------------------------------

# WARNING: DISKLESS REPLICATION IS EXPERIMENTAL CURRENTLY

# -------------------------------------------------------

#

# New replicas and reconnecting replicas that are not able to continue the replication

# process just receiving differences, need to do what is called a &quot;full

# synchronization&quot;. An RDB file is transmitted from the master to the replicas.

# The transmission can happen in two different ways:

#

# 1) Disk-backed: The Redis master creates a new process that writes the RDB

#                 file on disk. Later the file is transferred by the parent

#                 process to the replicas incrementally.

# 2) Diskless: The Redis master creates a new process that directly writes the

#              RDB file to replica sockets, without touching the disk at all.

#

# With disk-backed replication, while the RDB file is generated, more replicas

# can be queued and served with the RDB file as soon as the current child producing

# the RDB file finishes its work. With diskless replication instead once

# the transfer starts, new replicas arriving will be queued and a new transfer

# will start when the current one terminates.

#

# When diskless replication is used, the master waits a configurable amount of

# time (in seconds) before starting the transfer in the hope that multiple replicas

# will arrive and the transfer can be parallelized.

#

# With slow disks and fast (large bandwidth) networks, diskless replication

# works better.

repl-diskless-sync no

 

# When diskless replication is enabled, it is possible to configure the delay

# the server waits in order to spawn the child that transfers the RDB via socket

# to the replicas.

#

# This is important since once the transfer starts, it is not possible to serve

# new replicas arriving, that will be queued for the next RDB transfer, so the server

# waits a delay in order to let more replicas arrive.

#

# The delay is specified in seconds, and by default is 5 seconds. To disable

# it entirely just set it to 0 seconds and the transfer will start ASAP.

repl-diskless-sync-delay 5

 

# Replicas send PINGs to server in a predefined interval. It&#39;s possible to change

# this interval with the repl_ping_replica_period option. The default value is 10

# seconds.

#

# repl-ping-replica-period 10

 

# The following option sets the replication timeout for:

#

# 1) Bulk transfer I/O during SYNC, from the point of view of replica.

# 2) Master timeout from the point of view of replicas (data, pings).

# 3) Replica timeout from the point of view of masters (REPLCONF ACK pings).

#

# It is important to make sure that this value is greater than the value

# specified for repl-ping-replica-period otherwise a timeout will be detected

# every time there is low traffic between the master and the replica.

#

# repl-timeout 60

 

# Disable TCP_NODELAY on the replica socket after SYNC?

#

# If you select &quot;yes&quot; Redis will use a smaller number of TCP packets and

# less bandwidth to send data to replicas. But this can add a delay for

# the data to appear on the replica side, up to 40 milliseconds with

# Linux kernels using a default configuration.

#

# If you select &quot;no&quot; the delay for data to appear on the replica side will

# be reduced but more bandwidth will be used for replication.

#

# By default we optimize for low latency, but in very high traffic conditions

# or when the master and replicas are many hops away, turning this to &quot;yes&quot; may

# be a good idea.

repl-disable-tcp-nodelay no

 

# Set the replication backlog size. The backlog is a buffer that accumulates

# replica data when replicas are disconnected for some time, so that when a replica

# wants to reconnect again, often a full resync is not needed, but a partial

# resync is enough, just passing the portion of data the replica missed while

# disconnected.

#

# The bigger the replication backlog, the longer the time the replica can be

# disconnected and later be able to perform a partial resynchronization.

#

# The backlog is only allocated once there is at least a replica connected.

#

# repl-backlog-size 1mb

 

# After a master has no longer connected replicas for some time, the backlog

# will be freed. The following option configures the amount of seconds that

# need to elapse, starting from the time the last replica disconnected, for

# the backlog buffer to be freed.

#

# Note that replicas never free the backlog for timeout, since they may be

# promoted to masters later, and should be able to correctly &quot;partially

# resynchronize&quot; with the replicas: hence they should always accumulate backlog.

#

# A value of 0 means to never release the backlog.

#

# repl-backlog-ttl 3600

 

# The replica priority is an integer number published by Redis in the INFO output.

# It is used by Redis Sentinel in order to select a replica to promote into a

# master if the master is no longer working correctly.

#

# A replica with a low priority number is considered better for promotion, so

# for instance if there are three replicas with priority 10, 100, 25 Sentinel will

# pick the one with priority 10, that is the lowest.

#

# However a special priority of 0 marks the replica as not able to perform the

# role of master, so a replica with priority of 0 will never be selected by

# Redis Sentinel for promotion.

#

# By default the priority is 100.

replica-priority 100

 

# It is possible for a master to stop accepting writes if there are less than

# N replicas connected, having a lag less or equal than M seconds.

#

# The N replicas need to be in &quot;online&quot; state.

#

# The lag in seconds, that must be &lt;= the specified value, is calculated from

# the last ping received from the replica, that is usually sent every second.

#

# This option does not GUARANTEE that N replicas will accept the write, but

# will limit the window of exposure for lost writes in case not enough replicas

# are available, to the specified number of seconds.

#

# For example to require at least 3 replicas with a lag &lt;= 10 seconds use:

#

# min-replicas-to-write 3

# min-replicas-max-lag 10

#

# Setting one or the other to 0 disables the feature.

#

# By default min-replicas-to-write is set to 0 (feature disabled) and

# min-replicas-max-lag is set to 10.

 

# A Redis master is able to list the address and port of the attached

# replicas in different ways. For example the &quot;INFO replication&quot; section

# offers this information, which is used, among other tools, by

# Redis Sentinel in order to discover replica instances.

# Another place where this info is available is in the output of the

# &quot;ROLE&quot; command of a master.

#

# The listed IP and address normally reported by a replica is obtained

# in the following way:

#

#   IP: The address is auto detected by checking the peer address

#   of the socket used by the replica to connect with the master.

#

#   Port: The port is communicated by the replica during the replication

#   handshake, and is normally the port that the replica is using to

#   listen for connections.

#

# However when port forwarding or Network Address Translation (NAT) is

# used, the replica may be actually reachable via different IP and port

# pairs. The following two options can be used by a replica in order to

# report to its master a specific set of IP and port, so that both INFO

# and ROLE will report those values.

#

# There is no need to use both the options if you need to override just

# the port or the IP address.

#

# replica-announce-ip 5.5.5.5

# replica-announce-port 1234

 

################################## SECURITY ###################################

 

# Require clients to issue AUTH &lt;PASSWORD&gt; before processing any other

# commands.  This might be useful in environments in which you do not trust

# others with access to the host running redis-server.

#

# This should stay commented out for backward compatibility and because most

# people do not need auth (e.g. they run their own servers).

#

# Warning: since Redis is pretty fast an outside user can try up to

# 150k passwords per second against a good box. This means that you should

# use a very strong password otherwise it will be very easy to break.

#

# requirepass foobared

 

# Command renaming.

#

# It is possible to change the name of dangerous commands in a shared

# environment. For instance the CONFIG command may be renamed into something

# hard to guess so that it will still be available for internal-use tools

# but not available for general clients.

#

# Example:

#

# rename-command CONFIG b840fc02d524045429941cc15f59e41cb7be6c52

#

# It is also possible to completely kill a command by renaming it into

# an empty string:

#

# rename-command CONFIG &quot;&quot;

#

# Please note that changing the name of commands that are logged into the

# AOF file or transmitted to replicas may cause problems.

 

################################### CLIENTS ####################################

 

# Set the max number of connected clients at the same time. By default

# this limit is set to 10000 clients, however if the Redis server is not

# able to configure the process file limit to allow for the specified limit

# the max number of allowed clients is set to the current file limit

# minus 32 (as Redis reserves a few file descriptors for internal uses).

#

# Once the limit is reached Redis will close all the new connections sending

# an error &#39;max number of clients reached&#39;.

#

# maxclients 10000

 

############################## MEMORY MANAGEMENT ################################

 

# Set a memory usage limit to the specified amount of bytes.

# When the memory limit is reached Redis will try to remove keys

# according to the eviction policy selected (see maxmemory-policy).

#

# If Redis can&#39;t remove keys according to the policy, or if the policy is

# set to &#39;noeviction&#39;, Redis will start to reply with errors to commands

# that would use more memory, like SET, LPUSH, and so on, and will continue

# to reply to read-only commands like GET.

#

# This option is usually useful when using Redis as an LRU or LFU cache, or to

# set a hard memory limit for an instance (using the &#39;noeviction&#39; policy).

#

# WARNING: If you have replicas attached to an instance with maxmemory on,

# the size of the output buffers needed to feed the replicas are subtracted

# from the used memory count, so that network problems / resyncs will

# not trigger a loop where keys are evicted, and in turn the output

# buffer of replicas is full with DELs of keys evicted triggering the deletion

# of more keys, and so forth until the database is completely emptied.

#

# In short... if you have replicas attached it is suggested that you set a lower

# limit for maxmemory so that there is some free RAM on the system for replica

# output buffers (but this is not needed if the policy is &#39;noeviction&#39;).

#

# maxmemory &lt;bytes&gt;

 

# MAXMEMORY POLICY: how Redis will select what to remove when maxmemory

# is reached. You can select among five behaviors:

#

# volatile-lru -&gt; Evict using approximated LRU among the keys with an expire set.

# allkeys-lru -&gt; Evict any key using approximated LRU.

# volatile-lfu -&gt; Evict using approximated LFU among the keys with an expire set.

# allkeys-lfu -&gt; Evict any key using approximated LFU.

# volatile-random -&gt; Remove a random key among the ones with an expire set.

# allkeys-random -&gt; Remove a random key, any key.

# volatile-ttl -&gt; Remove the key with the nearest expire time (minor TTL)

# noeviction -&gt; Don&#39;t evict anything, just return an error on write operations.

#

# LRU means Least Recently Used

# LFU means Least Frequently Used

#

# Both LRU, LFU and volatile-ttl are implemented using approximated

# randomized algorithms.

#

# Note: with any of the above policies, Redis will return an error on write

#       operations, when there are no suitable keys for eviction.

#

#       At the date of writing these commands are: set setnx setex append

#       incr decr rpush lpush rpushx lpushx linsert lset rpoplpush sadd

#       sinter sinterstore sunion sunionstore sdiff sdiffstore zadd zincrby

#       zunionstore zinterstore hset hsetnx hmset hincrby incrby decrby

#       getset mset msetnx exec sort

#

# The default is:

#

# maxmemory-policy noeviction

 

# LRU, LFU and minimal TTL algorithms are not precise algorithms but approximated

# algorithms (in order to save memory), so you can tune it for speed or

# accuracy. For default Redis will check five keys and pick the one that was

# used less recently, you can change the sample size using the following

# configuration directive.

#

# The default of 5 produces good enough results. 10 Approximates very closely

# true LRU but costs more CPU. 3 is faster but not very accurate.

#

# maxmemory-samples 5

 

# Starting from Redis 5, by default a replica will ignore its maxmemory setting

# (unless it is promoted to master after a failover or manually). It means

# that the eviction of keys will be just handled by the master, sending the

# DEL commands to the replica as keys evict in the master side.

#

# This behavior ensures that masters and replicas stay consistent, and is usually

# what you want, however if your replica is writable, or you want the replica to have

# a different memory setting, and you are sure all the writes performed to the

# replica are idempotent, then you may change this default (but be sure to understand

# what you are doing).

#

# Note that since the replica by default does not evict, it may end using more

# memory than the one set via maxmemory (there are certain buffers that may

# be larger on the replica, or data structures may sometimes take more memory and so

# forth). So make sure you monitor your replicas and make sure they have enough

# memory to never hit a real out-of-memory condition before the master hits

# the configured maxmemory setting.

#

# replica-ignore-maxmemory yes

 

############################# LAZY FREEING ####################################

 

# Redis has two primitives to delete keys. One is called DEL and is a blocking

# deletion of the object. It means that the server stops processing new commands

# in order to reclaim all the memory associated with an object in a synchronous

# way. If the key deleted is associated with a small object, the time needed

# in order to execute the DEL command is very small and comparable to most other

# O(1) or O(log_N) commands in Redis. However if the key is associated with an

# aggregated value containing millions of elements, the server can block for

# a long time (even seconds) in order to complete the operation.

#

# For the above reasons Redis also offers non blocking deletion primitives

# such as UNLINK (non blocking DEL) and the ASYNC option of FLUSHALL and

# FLUSHDB commands, in order to reclaim memory in background. Those commands

# are executed in constant time. Another thread will incrementally free the

# object in the background as fast as possible.

#

# DEL, UNLINK and ASYNC option of FLUSHALL and FLUSHDB are user-controlled.

# It&#39;s up to the design of the application to understand when it is a good

# idea to use one or the other. However the Redis server sometimes has to

# delete keys or flush the whole database as a side effect of other operations.

# Specifically Redis deletes objects independently of a user call in the

# following scenarios:

#

# 1) On eviction, because of the maxmemory and maxmemory policy configurations,

#    in order to make room for new data, without going over the specified

#    memory limit.

# 2) Because of expire: when a key with an associated time to live (see the

#    EXPIRE command) must be deleted from memory.

# 3) Because of a side effect of a command that stores data on a key that may

#    already exist. For example the RENAME command may delete the old key

#    content when it is replaced with another one. Similarly SUNIONSTORE

#    or SORT with STORE option may delete existing keys. The SET command

#    itself removes any old content of the specified key in order to replace

#    it with the specified string.

# 4) During replication, when a replica performs a full resynchronization with

#    its master, the content of the whole database is removed in order to

#    load the RDB file just transferred.

#

# In all the above cases the default is to delete objects in a blocking way,

# like if DEL was called. However you can configure each case specifically

# in order to instead release memory in a non-blocking way like if UNLINK

# was called, using the following configuration directives:

 

lazyfree-lazy-eviction no

lazyfree-lazy-expire no

lazyfree-lazy-server-del no

replica-lazy-flush no

 

############################## APPEND ONLY MODE ###############################

 

# By default Redis asynchronously dumps the dataset on disk. This mode is

# good enough in many applications, but an issue with the Redis process or

# a power outage may result into a few minutes of writes lost (depending on

# the configured save points).

#

# The Append Only File is an alternative persistence mode that provides

# much better durability. For instance using the default data fsync policy

# (see later in the config file) Redis can lose just one second of writes in a

# dramatic event like a server power outage, or a single write if something

# wrong with the Redis process itself happens, but the operating system is

# still running correctly.

#

# AOF and RDB persistence can be enabled at the same time without problems.

# If the AOF is enabled on startup Redis will load the AOF, that is the file

# with the better durability guarantees.

#

# Please check http://redis.io/topics/persistence for more information.

 

appendonly no

 

# The name of the append only file (default: &quot;appendonly.aof&quot;)

 

appendfilename &quot;appendonly.aof&quot;

 

# The fsync() call tells the Operating System to actually write data on disk

# instead of waiting for more data in the output buffer. Some OS will really flush

# data on disk, some other OS will just try to do it ASAP.

#

# Redis supports three different modes:

#

# no: don&#39;t fsync, just let the OS flush the data when it wants. Faster.

# always: fsync after every write to the append only log. Slow, Safest.

# everysec: fsync only one time every second. Compromise.

#

# The default is &quot;everysec&quot;, as that&#39;s usually the right compromise between

# speed and data safety. It&#39;s up to you to understand if you can relax this to

# &quot;no&quot; that will let the operating system flush the output buffer when

# it wants, for better performances (but if you can live with the idea of

# some data loss consider the default persistence mode that&#39;s snapshotting),

# or on the contrary, use &quot;always&quot; that&#39;s very slow but a bit safer than

# everysec.

#

# More details please check the following article:

# http://antirez.com/post/redis-persistence-demystified.html

#

# If unsure, use &quot;everysec&quot;.

 

# appendfsync always

appendfsync everysec

# appendfsync no

 

# When the AOF fsync policy is set to always or everysec, and a background

# saving process (a background save or AOF log background rewriting) is

# performing a lot of I/O against the disk, in some Linux configurations

# Redis may block too long on the fsync() call. Note that there is no fix for

# this currently, as even performing fsync in a different thread will block

# our synchronous write(2) call.

#

# In order to mitigate this problem it&#39;s possible to use the following option

# that will prevent fsync() from being called in the main process while a

# BGSAVE or BGREWRITEAOF is in progress.

#

# This means that while another child is saving, the durability of Redis is

# the same as &quot;appendfsync none&quot;. In practical terms, this means that it is

# possible to lose up to 30 seconds of log in the worst scenario (with the

# default Linux settings).

#

# If you have latency problems turn this to &quot;yes&quot;. Otherwise leave it as

# &quot;no&quot; that is the safest pick from the point of view of durability.

 

no-appendfsync-on-rewrite no

 

# Automatic rewrite of the append only file.

# Redis is able to automatically rewrite the log file implicitly calling

# BGREWRITEAOF when the AOF log size grows by the specified percentage.

#

# This is how it works: Redis remembers the size of the AOF file after the

# latest rewrite (if no rewrite has happened since the restart, the size of

# the AOF at startup is used).

#

# This base size is compared to the current size. If the current size is

# bigger than the specified percentage, the rewrite is triggered. Also

# you need to specify a minimal size for the AOF file to be rewritten, this

# is useful to avoid rewriting the AOF file even if the percentage increase

# is reached but it is still pretty small.

#

# Specify a percentage of zero in order to disable the automatic AOF

# rewrite feature.

 

auto-aof-rewrite-percentage 100

auto-aof-rewrite-min-size 64mb

 

# An AOF file may be found to be truncated at the end during the Redis

# startup process, when the AOF data gets loaded back into memory.

# This may happen when the system where Redis is running

# crashes, especially when an ext4 filesystem is mounted without the

# data=ordered option (however this can&#39;t happen when Redis itself

# crashes or aborts but the operating system still works correctly).

#

# Redis can either exit with an error when this happens, or load as much

# data as possible (the default now) and start if the AOF file is found

# to be truncated at the end. The following option controls this behavior.

#

# If aof-load-truncated is set to yes, a truncated AOF file is loaded and

# the Redis server starts emitting a log to inform the user of the event.

# Otherwise if the option is set to no, the server aborts with an error

# and refuses to start. When the option is set to no, the user requires

# to fix the AOF file using the &quot;redis-check-aof&quot; utility before to restart

# the server.

#

# Note that if the AOF file will be found to be corrupted in the middle

# the server will still exit with an error. This option only applies when

# Redis will try to read more data from the AOF file but not enough bytes

# will be found.

aof-load-truncated yes

 

# When rewriting the AOF file, Redis is able to use an RDB preamble in the

# AOF file for faster rewrites and recoveries. When this option is turned

# on the rewritten AOF file is composed of two different stanzas:

#

#   [RDB file][AOF tail]

#

# When loading Redis recognizes that the AOF file starts with the &quot;REDIS&quot;

# string and loads the prefixed RDB file, and continues loading the AOF

# tail.

aof-use-rdb-preamble yes

 

################################ LUA SCRIPTING  ###############################

 

# Max execution time of a Lua script in milliseconds.

#

# If the maximum execution time is reached Redis will log that a script is

# still in execution after the maximum allowed time and will start to

# reply to queries with an error.

#

# When a long running script exceeds the maximum execution time only the

# SCRIPT KILL and SHUTDOWN NOSAVE commands are available. The first can be

# used to stop a script that did not yet called write commands. The second

# is the only way to shut down the server in the case a write command was

# already issued by the script but the user doesn&#39;t want to wait for the natural

# termination of the script.

#

# Set it to 0 or a negative value for unlimited execution without warnings.

lua-time-limit 5000

 

################################ REDIS CLUSTER  ###############################

 

# Normal Redis instances can&#39;t be part of a Redis Cluster; only nodes that are

# started as cluster nodes can. In order to start a Redis instance as a

# cluster node enable the cluster support uncommenting the following:

#

# cluster-enabled yes

 

# Every cluster node has a cluster configuration file. This file is not

# intended to be edited by hand. It is created and updated by Redis nodes.

# Every Redis Cluster node requires a different cluster configuration file.

# Make sure that instances running in the same system do not have

# overlapping cluster configuration file names.

#

# cluster-config-file nodes-6379.conf

 

# Cluster node timeout is the amount of milliseconds a node must be unreachable

# for it to be considered in failure state.

# Most other internal time limits are multiple of the node timeout.

#

# cluster-node-timeout 15000

 

# A replica of a failing master will avoid to start a failover if its data

# looks too old.

#

# There is no simple way for a replica to actually have an exact measure of

# its &quot;data age&quot;, so the following two checks are performed:

#

# 1) If there are multiple replicas able to failover, they exchange messages

#    in order to try to give an advantage to the replica with the best

#    replication offset (more data from the master processed).

#    Replicas will try to get their rank by offset, and apply to the start

#    of the failover a delay proportional to their rank.

#

# 2) Every single replica computes the time of the last interaction with

#    its master. This can be the last ping or command received (if the master

#    is still in the &quot;connected&quot; state), or the time that elapsed since the

#    disconnection with the master (if the replication link is currently down).

#    If the last interaction is too old, the replica will not try to failover

#    at all.

#

# The point &quot;2&quot; can be tuned by user. Specifically a replica will not perform

# the failover if, since the last interaction with the master, the time

# elapsed is greater than:

#

#   (node-timeout * replica-validity-factor) + repl-ping-replica-period

#

# So for example if node-timeout is 30 seconds, and the replica-validity-factor

# is 10, and assuming a default repl-ping-replica-period of 10 seconds, the

# replica will not try to failover if it was not able to talk with the master

# for longer than 310 seconds.

#

# A large replica-validity-factor may allow replicas with too old data to failover

# a master, while a too small value may prevent the cluster from being able to

# elect a replica at all.

#

# For maximum availability, it is possible to set the replica-validity-factor

# to a value of 0, which means, that replicas will always try to failover the

# master regardless of the last time they interacted with the master.

# (However they&#39;ll always try to apply a delay proportional to their

# offset rank).

#

# Zero is the only value able to guarantee that when all the partitions heal

# the cluster will always be able to continue.

#

# cluster-replica-validity-factor 10

 

# Cluster replicas are able to migrate to orphaned masters, that are masters

# that are left without working replicas. This improves the cluster ability

# to resist to failures as otherwise an orphaned master can&#39;t be failed over

# in case of failure if it has no working replicas.

#

# Replicas migrate to orphaned masters only if there are still at least a

# given number of other working replicas for their old master. This number

# is the &quot;migration barrier&quot;. A migration barrier of 1 means that a replica

# will migrate only if there is at least 1 other working replica for its master

# and so forth. It usually reflects the number of replicas you want for every

# master in your cluster.

#

# Default is 1 (replicas migrate only if their masters remain with at least

# one replica). To disable migration just set it to a very large value.

# A value of 0 can be set but is useful only for debugging and dangerous

# in production.

#

# cluster-migration-barrier 1

 

# By default Redis Cluster nodes stop accepting queries if they detect there

# is at least an hash slot uncovered (no available node is serving it).

# This way if the cluster is partially down (for example a range of hash slots

# are no longer covered) all the cluster becomes, eventually, unavailable.

# It automatically returns available as soon as all the slots are covered again.

#

# However sometimes you want the subset of the cluster which is working,

# to continue to accept queries for the part of the key space that is still

# covered. In order to do so, just set the cluster-require-full-coverage

# option to no.

#

# cluster-require-full-coverage yes

 

# This option, when set to yes, prevents replicas from trying to failover its

# master during master failures. However the master can still perform a

# manual failover, if forced to do so.

#

# This is useful in different scenarios, especially in the case of multiple

# data center operations, where we want one side to never be promoted if not

# in the case of a total DC failure.

#

# cluster-replica-no-failover no

 

# In order to setup your cluster make sure to read the documentation

# available at http://redis.io web site.

 

########################## CLUSTER DOCKER/NAT support  ########################

 

# In certain deployments, Redis Cluster nodes address discovery fails, because

# addresses are NAT-ted or because ports are forwarded (the typical case is

# Docker and other containers).

#

# In order to make Redis Cluster working in such environments, a static

# configuration where each node knows its public address is needed. The

# following two options are used for this scope, and are:

#

# * cluster-announce-ip

# * cluster-announce-port

# * cluster-announce-bus-port

#

# Each instruct the node about its address, client port, and cluster message

# bus port. The information is then published in the header of the bus packets

# so that other nodes will be able to correctly map the address of the node

# publishing the information.

#

# If the above options are not used, the normal Redis Cluster auto-detection

# will be used instead.

#

# Note that when remapped, the bus port may not be at the fixed offset of

# clients port + 10000, so you can specify any port and bus-port depending

# on how they get remapped. If the bus-port is not set, a fixed offset of

# 10000 will be used as usually.

#

# Example:

#

# cluster-announce-ip 10.1.1.5

# cluster-announce-port 6379

# cluster-announce-bus-port 6380

 

################################## SLOW LOG ###################################

 

# The Redis Slow Log is a system to log queries that exceeded a specified

# execution time. The execution time does not include the I/O operations

# like talking with the client, sending the reply and so forth,

# but just the time needed to actually execute the command (this is the only

# stage of command execution where the thread is blocked and can not serve

# other requests in the meantime).

#

# You can configure the slow log with two parameters: one tells Redis

# what is the execution time, in microseconds, to exceed in order for the

# command to get logged, and the other parameter is the length of the

# slow log. When a new command is logged the oldest one is removed from the

# queue of logged commands.

 

# The following time is expressed in microseconds, so 1000000 is equivalent

# to one second. Note that a negative number disables the slow log, while

# a value of zero forces the logging of every command.

slowlog-log-slower-than 10000

 

# There is no limit to this length. Just be aware that it will consume memory.

# You can reclaim memory used by the slow log with SLOWLOG RESET.

slowlog-max-len 128

 

################################ LATENCY MONITOR ##############################

 

# The Redis latency monitoring subsystem samples different operations

# at runtime in order to collect data related to possible sources of

# latency of a Redis instance.

#

# Via the LATENCY command this information is available to the user that can

# print graphs and obtain reports.

#

# The system only logs operations that were performed in a time equal or

# greater than the amount of milliseconds specified via the

# latency-monitor-threshold configuration directive. When its value is set

# to zero, the latency monitor is turned off.

#

# By default latency monitoring is disabled since it is mostly not needed

# if you don&#39;t have latency issues, and collecting data has a performance

# impact, that while very small, can be measured under big load. Latency

# monitoring can easily be enabled at runtime using the command

# &quot;CONFIG SET latency-monitor-threshold &lt;milliseconds&gt;&quot; if needed.

latency-monitor-threshold 0

 

############################# EVENT NOTIFICATION ##############################

 

# Redis can notify Pub/Sub clients about events happening in the key space.

# This feature is documented at http://redis.io/topics/notifications

#

# For instance if keyspace events notification is enabled, and a client

# performs a DEL operation on key &quot;foo&quot; stored in the Database 0, two

# messages will be published via Pub/Sub:

#

# PUBLISH __keyspace@0__:foo del

# PUBLISH __keyevent@0__:del foo

#

# It is possible to select the events that Redis will notify among a set

# of classes. Every class is identified by a single character:

#

#  K     Keyspace events, published with __keyspace@&lt;db&gt;__ prefix.

#  E     Keyevent events, published with __keyevent@&lt;db&gt;__ prefix.

#  g     Generic commands (non-type specific) like DEL, EXPIRE, RENAME, ...

#  $     String commands

#  l     List commands

#  s     Set commands

#  h     Hash commands

#  z     Sorted set commands

#  x     Expired events (events generated every time a key expires)

#  e     Evicted events (events generated when a key is evicted for maxmemory)

#  A     Alias for g$lshzxe, so that the &quot;AKE&quot; string means all the events.

#

#  The &quot;notify-keyspace-events&quot; takes as argument a string that is composed

#  of zero or multiple characters. The empty string means that notifications

#  are disabled.

#

#  Example: to enable list and generic events, from the point of view of the

#           event name, use:

#

#  notify-keyspace-events Elg

#

#  Example 2: to get the stream of the expired keys subscribing to channel

#             name __keyevent@0__:expired use:

#

  notify-keyspace-events Ex

#

#  By default all notifications are disabled because most users don&#39;t need

#  this feature and the feature has some overhead. Note that if you don&#39;t

#  specify at least one of K or E, no events will be delivered.

#notify-keyspace-events &quot;&quot;

 

############################### ADVANCED CONFIG ###############################

 

# Hashes are encoded using a memory efficient data structure when they have a

# small number of entries, and the biggest entry does not exceed a given

# threshold. These thresholds can be configured using the following directives.

hash-max-ziplist-entries 512

hash-max-ziplist-value 64

 

# Lists are also encoded in a special way to save a lot of space.

# The number of entries allowed per internal list node can be specified

# as a fixed maximum size or a maximum number of elements.

# For a fixed maximum size, use -5 through -1, meaning:

# -5: max size: 64 Kb  &lt;-- not recommended for normal workloads

# -4: max size: 32 Kb  &lt;-- not recommended

# -3: max size: 16 Kb  &lt;-- probably not recommended

# -2: max size: 8 Kb   &lt;-- good

# -1: max size: 4 Kb   &lt;-- good

# Positive numbers mean store up to _exactly_ that number of elements

# per list node.

# The highest performing option is usually -2 (8 Kb size) or -1 (4 Kb size),

# but if your use case is unique, adjust the settings as necessary.

list-max-ziplist-size -2

 

# Lists may also be compressed.

# Compress depth is the number of quicklist ziplist nodes from *each* side of

# the list to *exclude* from compression.  The head and tail of the list

# are always uncompressed for fast push/pop operations.  Settings are:

# 0: disable all list compression

# 1: depth 1 means &quot;don&#39;t start compressing until after 1 node into the list,

#    going from either the head or tail&quot;

#    So: [head]-&gt;node-&gt;node-&gt;...-&gt;node-&gt;[tail]

#    [head], [tail] will always be uncompressed; inner nodes will compress.

# 2: [head]-&gt;[next]-&gt;node-&gt;node-&gt;...-&gt;node-&gt;[prev]-&gt;[tail]

#    2 here means: don&#39;t compress head or head-&gt;next or tail-&gt;prev or tail,

#    but compress all nodes between them.

# 3: [head]-&gt;[next]-&gt;[next]-&gt;node-&gt;node-&gt;...-&gt;node-&gt;[prev]-&gt;[prev]-&gt;[tail]

# etc.

list-compress-depth 0

 

# Sets have a special encoding in just one case: when a set is composed

# of just strings that happen to be integers in radix 10 in the range

# of 64 bit signed integers.

# The following configuration setting sets the limit in the size of the

# set in order to use this special memory saving encoding.

set-max-intset-entries 512

 

# Similarly to hashes and lists, sorted sets are also specially encoded in

# order to save a lot of space. This encoding is only used when the length and

# elements of a sorted set are below the following limits:

zset-max-ziplist-entries 128

zset-max-ziplist-value 64

 

# HyperLogLog sparse representation bytes limit. The limit includes the

# 16 bytes header. When an HyperLogLog using the sparse representation crosses

# this limit, it is converted into the dense representation.

#

# A value greater than 16000 is totally useless, since at that point the

# dense representation is more memory efficient.

#

# The suggested value is ~ 3000 in order to have the benefits of

# the space efficient encoding without slowing down too much PFADD,

# which is O(N) with the sparse encoding. The value can be raised to

# ~ 10000 when CPU is not a concern, but space is, and the data set is

# composed of many HyperLogLogs with cardinality in the 0 - 15000 range.

hll-sparse-max-bytes 3000

 

# Streams macro node max size / items. The stream data structure is a radix

# tree of big nodes that encode multiple items inside. Using this configuration

# it is possible to configure how big a single node can be in bytes, and the

# maximum number of items it may contain before switching to a new node when

# appending new stream entries. If any of the following settings are set to

# zero, the limit is ignored, so for instance it is possible to set just a

# max entires limit by setting max-bytes to 0 and max-entries to the desired

# value.

stream-node-max-bytes 4096

stream-node-max-entries 100

 

# Active rehashing uses 1 millisecond every 100 milliseconds of CPU time in

# order to help rehashing the main Redis hash table (the one mapping top-level

# keys to values). The hash table implementation Redis uses (see dict.c)

# performs a lazy rehashing: the more operation you run into a hash table

# that is rehashing, the more rehashing &quot;steps&quot; are performed, so if the

# server is idle the rehashing is never complete and some more memory is used

# by the hash table.

#

# The default is to use this millisecond 10 times every second in order to

# actively rehash the main dictionaries, freeing memory when possible.

#

# If unsure:

# use &quot;activerehashing no&quot; if you have hard latency requirements and it is

# not a good thing in your environment that Redis can reply from time to time

# to queries with 2 milliseconds delay.

#

# use &quot;activerehashing yes&quot; if you don&#39;t have such hard requirements but

# want to free memory asap when possible.

activerehashing yes

 

# The client output buffer limits can be used to force disconnection of clients

# that are not reading data from the server fast enough for some reason (a

# common reason is that a Pub/Sub client can&#39;t consume messages as fast as the

# publisher can produce them).

#

# The limit can be set differently for the three different classes of clients:

#

# normal -&gt; normal clients including MONITOR clients

# replica  -&gt; replica clients

# pubsub -&gt; clients subscribed to at least one pubsub channel or pattern

#

# The syntax of every client-output-buffer-limit directive is the following:

#

# client-output-buffer-limit &lt;class&gt; &lt;hard limit&gt; &lt;soft limit&gt; &lt;soft seconds&gt;

#

# A client is immediately disconnected once the hard limit is reached, or if

# the soft limit is reached and remains reached for the specified number of

# seconds (continuously).

# So for instance if the hard limit is 32 megabytes and the soft limit is

# 16 megabytes / 10 seconds, the client will get disconnected immediately

# if the size of the output buffers reach 32 megabytes, but will also get

# disconnected if the client reaches 16 megabytes and continuously overcomes

# the limit for 10 seconds.

#

# By default normal clients are not limited because they don&#39;t receive data

# without asking (in a push way), but just after a request, so only

# asynchronous clients may create a scenario where data is requested faster

# than it can read.

#

# Instead there is a default limit for pubsub and replica clients, since

# subscribers and replicas receive data in a push fashion.

#

# Both the hard or the soft limit can be disabled by setting them to zero.

client-output-buffer-limit normal 0 0 0

client-output-buffer-limit replica 256mb 64mb 60

client-output-buffer-limit pubsub 32mb 8mb 60

 

# Client query buffers accumulate new commands. They are limited to a fixed

# amount by default in order to avoid that a protocol desynchronization (for

# instance due to a bug in the client) will lead to unbound memory usage in

# the query buffer. However you can configure it here if you have very special

# needs, such us huge multi/exec requests or alike.

#

# client-query-buffer-limit 1gb

 

# In the Redis protocol, bulk requests, that are, elements representing single

# strings, are normally limited ot 512 mb. However you can change this limit

# here.

#

# proto-max-bulk-len 512mb

 

# Redis calls an internal function to perform many background tasks, like

# closing connections of clients in timeout, purging expired keys that are

# never requested, and so forth.

#

# Not all tasks are performed with the same frequency, but Redis checks for

# tasks to perform according to the specified &quot;hz&quot; value.

#

# By default &quot;hz&quot; is set to 10. Raising the value will use more CPU when

# Redis is idle, but at the same time will make Redis more responsive when

# there are many keys expiring at the same time, and timeouts may be

# handled with more precision.

#

# The range is between 1 and 500, however a value over 100 is usually not

# a good idea. Most users should use the default of 10 and raise this up to

# 100 only in environments where very low latency is required.

hz 10

 

# Normally it is useful to have an HZ value which is proportional to the

# number of clients connected. This is useful in order, for instance, to

# avoid too many clients are processed for each background task invocation

# in order to avoid latency spikes.

#

# Since the default HZ value by default is conservatively set to 10, Redis

# offers, and enables by default, the ability to use an adaptive HZ value

# which will temporary raise when there are many connected clients.

#

# When dynamic HZ is enabled, the actual configured HZ will be used as

# as a baseline, but multiples of the configured HZ value will be actually

# used as needed once more clients are connected. In this way an idle

# instance will use very little CPU time while a busy instance will be

# more responsive.

dynamic-hz yes

 

# When a child rewrites the AOF file, if the following option is enabled

# the file will be fsync-ed every 32 MB of data generated. This is useful

# in order to commit the file to the disk more incrementally and avoid

# big latency spikes.

aof-rewrite-incremental-fsync yes

 

# When redis saves RDB file, if the following option is enabled

# the file will be fsync-ed every 32 MB of data generated. This is useful

# in order to commit the file to the disk more incrementally and avoid

# big latency spikes.

rdb-save-incremental-fsync yes

 

# Redis LFU eviction (see maxmemory setting) can be tuned. However it is a good

# idea to start with the default settings and only change them after investigating

# how to improve the performances and how the keys LFU change over time, which

# is possible to inspect via the OBJECT FREQ command.

#

# There are two tunable parameters in the Redis LFU implementation: the

# counter logarithm factor and the counter decay time. It is important to

# understand what the two parameters mean before changing them.

#

# The LFU counter is just 8 bits per key, it&#39;s maximum value is 255, so Redis

# uses a probabilistic increment with logarithmic behavior. Given the value

# of the old counter, when a key is accessed, the counter is incremented in

# this way:

#

# 1. A random number R between 0 and 1 is extracted.

# 2. A probability P is calculated as 1/(old_value*lfu_log_factor+1).

# 3. The counter is incremented only if R &lt; P.

#

# The default lfu-log-factor is 10. This is a table of how the frequency

# counter changes with a different number of accesses with different

# logarithmic factors:

#

# +--------+------------+------------+------------+------------+------------+

# | factor | 100 hits   | 1000 hits  | 100K hits  | 1M hits    | 10M hits   |

# +--------+------------+------------+------------+------------+------------+

# | 0      | 104        | 255        | 255        | 255        | 255        |

# +--------+------------+------------+------------+------------+------------+

# | 1      | 18         | 49         | 255        | 255        | 255        |

# +--------+------------+------------+------------+------------+------------+

# | 10     | 10         | 18         | 142        | 255        | 255        |

# +--------+------------+------------+------------+------------+------------+

# | 100    | 8          | 11         | 49         | 143        | 255        |

# +--------+------------+------------+------------+------------+------------+

#

# NOTE: The above table was obtained by running the following commands:

#

#   redis-benchmark -n 1000000 incr foo

#   redis-cli object freq foo

#

# NOTE 2: The counter initial value is 5 in order to give new objects a chance

# to accumulate hits.

#

# The counter decay time is the time, in minutes, that must elapse in order

# for the key counter to be divided by two (or decremented if it has a value

# less &lt;= 10).

#

# The default value for the lfu-decay-time is 1. A Special value of 0 means to

# decay the counter every time it happens to be scanned.

#

# lfu-log-factor 10

# lfu-decay-time 1

 

########################### ACTIVE DEFRAGMENTATION #######################

#

# WARNING THIS FEATURE IS EXPERIMENTAL. However it was stress tested

# even in production and manually tested by multiple engineers for some

# time.

#

# What is active defragmentation?

# -------------------------------

#

# Active (online) defragmentation allows a Redis server to compact the

# spaces left between small allocations and deallocations of data in memory,

# thus allowing to reclaim back memory.

#

# Fragmentation is a natural process that happens with every allocator (but

# less so with Jemalloc, fortunately) and certain workloads. Normally a server

# restart is needed in order to lower the fragmentation, or at least to flush

# away all the data and create it again. However thanks to this feature

# implemented by Oran Agra for Redis 4.0 this process can happen at runtime

# in an &quot;hot&quot; way, while the server is running.

#

# Basically when the fragmentation is over a certain level (see the

# configuration options below) Redis will start to create new copies of the

# values in contiguous memory regions by exploiting certain specific Jemalloc

# features (in order to understand if an allocation is causing fragmentation

# and to allocate it in a better place), and at the same time, will release the

# old copies of the data. This process, repeated incrementally for all the keys

# will cause the fragmentation to drop back to normal values.

#

# Important things to understand:

#

# 1. This feature is disabled by default, and only works if you compiled Redis

#    to use the copy of Jemalloc we ship with the source code of Redis.

#    This is the default with Linux builds.

#

# 2. You never need to enable this feature if you don&#39;t have fragmentation

#    issues.

#

# 3. Once you experience fragmentation, you can enable this feature when

#    needed with the command &quot;CONFIG SET activedefrag yes&quot;.

#

# The configuration parameters are able to fine tune the behavior of the

# defragmentation process. If you are not sure about what they mean it is

# a good idea to leave the defaults untouched.

 

# Enabled active defragmentation

# activedefrag yes

 

# Minimum amount of fragmentation waste to start active defrag

# active-defrag-ignore-bytes 100mb

 

# Minimum percentage of fragmentation to start active defrag

# active-defrag-threshold-lower 10

 

# Maximum percentage of fragmentation at which we use maximum effort

# active-defrag-threshold-upper 100

 

# Minimal effort for defrag in CPU percentage

# active-defrag-cycle-min 5

 

# Maximal effort for defrag in CPU percentage

# active-defrag-cycle-max 75

 

# Maximum number of set/hash/zset/list fields that will be processed from

# the main dictionary scan

# active-defrag-max-scan-fields 1000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>使用redis6.0.8镜像创建容器（也叫运行容器）</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run  <span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 <span class="token parameter variable">--name</span> myr3 <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token parameter variable">-v</span> /app/redis/redis.conf:/etc/redis/redis.conf <span class="token parameter variable">-v</span> /app/redis/data:/data <span class="token parameter variable">-d</span> redis:6.0.8 redis-server /etc/redis/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+C+'" alt=""></p><ol start="8"><li>测试redis-cli连接上来</li></ol><p><img src="'+F+`" alt=""></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> 运行着Rediis服务的容器ID redis-cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="9"><li>请证明docker启动使用了我们自己指定的配置文件</li></ol><p>修改前</p><p><img src="`+B+'" alt=""></p><p>我们用的配置文件，数据库默认是16个</p><p>修改后</p><p><img src="'+D+'" alt=""></p><p>宿主机的修改会同步给docker容器里面的配置。</p><p>注意：<strong>重启服务</strong></p><ol start="10"><li>测试redis-cli连接上来第2次</li></ol><p><img src="'+U+'" alt=""></p><h2 id="五、安装nginx" tabindex="-1"><a class="header-anchor" href="#五、安装nginx" aria-hidden="true">#</a> 五、安装Nginx</h2><p>见高级篇Portainer</p>',119),H=[M];function W(G,j){return e(),n("div",null,H)}const V=i(P,[["render",W],["__file","8.Docker常规安装简介.html.vue"]]);export{V as default};
