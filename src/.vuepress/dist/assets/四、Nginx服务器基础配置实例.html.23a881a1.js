import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as i,a as s}from"./app.9b10ba0a.js";const l="/assets/1587129309340.565ccfcf.png",d="/assets/1587129766585.0d89e176.png",v="/assets/1587129777898.9d208382.png",r="/assets/1587290246228.2ce4e962.png",a="/assets/1587129805309.7e8eac15.png",c="/assets/1587129817226.865b5103.png",m={},t=s(`<p>前面我们已经对Nginx服务器默认配置文件的结构和涉及的基本指令做了详细的阐述。通过这些指令的合理配置，我们就可以让一台Nginx服务器正常工作，并且提供基本的web服务器功能。</p><p>接下来我们将通过一个比较完整和最简单的基础配置实例，来巩固下前面所学习的指令及其配置。</p><p>需求如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>（1）有如下访问：
    http://192.168.200.133:8081/server1/location1
        访问的是：index_sr1_location1.html
    http://192.168.200.133:8081/server1/location2
        访问的是：index_sr1_location2.html
    http://192.168.200.133:8082/server2/location1
        访问的是：index_sr2_location1.html
    http://192.168.200.133:8082/server2/location2
        访问的是：index_sr2_location2.html
（2）如果访问的资源不存在，
    返回自定义的404页面
（3）将/server1和/server2的配置使用不同的配置文件分割
    将文件放到/home/www/conf.d目录下，然后使用include进行合并
（4）为/server1和/server2各自创建一个访问日志文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>准备相关文件，目录如下：</p><p><img src="`+l+`" alt="1587129309340"></p><p>配置的内容如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>##全局块 begin##
#配置允许运行Nginx工作进程的用户和用户组
user www;
#配置运行Nginx进程生成的worker进程数
worker_processes 2;
#配置Nginx服务器运行对错误日志存放的路径
error_log logs/error.log;
#配置Nginx服务器允许时记录Nginx的master进程的PID文件路径和名称
pid logs/nginx.pid;
#配置Nginx服务是否以守护进程方法启动
#daemon on;
##全局块 end##

##events块 begin##
events{
    #设置Nginx网络连接序列化
    accept_mutex on;
    #设置Nginx的worker进程是否可以同时接收多个请求
    multi_accept on;
    #设置Nginx的worker进程最大的连接数
    worker_connections 1024;
    #设置Nginx使用的事件驱动模型
    use epoll;
}
##events块 end##
##http块 start##
http{
    #定义MIME-Type
    include mime.types;
    default_type application/octet-stream;
    #配置允许使用sendfile方式运输
    sendfile on;
    #配置连接超时时间
    keepalive_timeout 65;
    #配置请求处理日志格式
    log_format server1 &#39;===&gt;server1 access log&#39;;
    log_format server2 &#39;===&gt;server2 access log&#39;;
    ##server块 开始##
    include /home/www/conf.d/*.conf;
    ##server块 结束##
}
##http块 end##
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>server1.conf</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server{
        #配置监听端口和主机名称
        listen 8081;
        server_name localhost;
        #配置请求处理日志存放路径
        access_log /home/www/myweb/server1/logs/access.log server1;
        #配置错误页面
        error_page 404 /404.html;
        #配置处理/server1/location1请求的location
        location /server1/location1{
            root /home/www/myweb;
            index index_sr1_location1.html;
        }
        #配置处理/server1/location2请求的location
        location /server1/location2{
            root /home/www/myweb;
            index index_sr1_location2.html;
        }
        #配置错误页面转向
        location = /404.html {
            root /home/www/myweb;
            index 404.html;
        }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>server2.conf</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server{
        #配置监听端口和主机名称
        listen 8082;
        server_name localhost;
        #配置请求处理日志存放路径
        access_log /home/www/myweb/server2/logs/access.log server2;
        #配置错误页面,对404.html做了定向配置
        error_page 404 /404.html;
        #配置处理/server1/location1请求的location
        location /server2/location1{
            root /home/www/myweb;
            index index_sr2_location1.html;
        }
        #配置处理/server2/location2请求的location
        location /server2/location2{
            root /home/www/myweb;
            index index_sr2_location2.html;
        }
        #配置错误页面转向
        location = /404.html {
            root /home/www/myweb;
            index 404.html;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问测试：</p><p><img src="`+d+'" alt="1587129766585"></p><p><img src="'+v+'" alt="1587129777898"></p><p><img src="'+r+'" alt="1587290246228"></p><p><img src="'+a+'" alt="1587129805309"></p><p><img src="'+c+'" alt="1587129817226"></p>',18),o=[t];function u(b,p){return n(),i("div",null,o)}const x=e(m,[["render",u],["__file","四、Nginx服务器基础配置实例.html.vue"]]);export{x as default};
