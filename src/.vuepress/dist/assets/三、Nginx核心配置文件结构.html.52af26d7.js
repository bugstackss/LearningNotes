import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as e,a}from"./app.9b10ba0a.js";const s="/assets/1586597350943.4687ad4c.png",i="/assets/1581563242526.644eb16d.png",d="/assets/1581566971955.da61339a.png",l={},p=a(`<p>从前面的内容学习中，我们知道Nginx的核心配置文件默认是放在<code>/usr/local/nginx/conf/nginx.conf</code>，这一节，我们就来学习下nginx.conf的内容和基本配置方法。</p><p>读取Nginx自带的Nginx配置文件，我们将其中的注释部分【学习一个技术点就是在Nginx的配置文件中可以使用<code>#</code>来注释】删除掉后，就剩下下面内容:</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>worker_processes  1;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;

    server {
        listen       80;
        server_name  localhost;
        location / {
            root   html;
            index  index.html index.htm;
        }
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>指令名    指令值;  #全局块，主要设置Nginx服务器整体运行的配置指令

 #events块,主要设置,Nginx服务器与用户的网络连接,这一部分对Nginx服务器的性能影响较大
events {     
    指令名    指令值;
}
#http块，是Nginx服务器配置中的重要部分，代理、缓存、日志记录、第三方模块配置...             
http {        
    指令名    指令值;
    server { #server块，是Nginx配置和虚拟主机相关的内容
        指令名    指令值;
        location / { 
        #location块，基于Nginx服务器接收请求字符串与location后面的值进行匹配，对特定请求进行处理
            指令名    指令值;
        }
    }
    ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单小结下:</p><p>nginx.conf配置文件中默认有三大块：全局块、events块、http块</p><p>http块中可以配置多个server块，每个server块又可以配置多个location块。</p><h3 id="全局块" tabindex="-1"><a class="header-anchor" href="#全局块" aria-hidden="true">#</a> 全局块</h3><h4 id="user指令" tabindex="-1"><a class="header-anchor" href="#user指令" aria-hidden="true">#</a> user指令</h4><p>（1）user:用于配置运行Nginx服务器的worker进程的用户和用户组。</p><table><thead><tr><th>语法</th><th>user user [group]</th></tr></thead><tbody><tr><td>默认值</td><td>nobody</td></tr><tr><td>位置</td><td>全局块</td></tr></tbody></table><p>该属性也可以在编译的时候指定，语法如下<code>./configure --user=user --group=group</code>,如果两个地方都进行了设置，最终生效的是配置文件中的配置。</p><p>该指令的使用步骤:</p><p>(1)设置一个用户信息&quot;www&quot;</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>user www;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在/usr/local/nginx/sbin目录下,使用./nginx -t测试报错：</p><p><img src="`+s+`" alt="1586597350943"></p><p>(2) 创建一个用户</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>useradd www
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(3)修改user属性</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>user www
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(4)创建<code>/root/html/index.html</code>页面，添加如下内容</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Welcome to nginx!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">body</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 35em<span class="token punctuation">;</span>
        <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
        <span class="token property">font-family</span><span class="token punctuation">:</span> Tahoma<span class="token punctuation">,</span> Verdana<span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Welcome to nginx!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>If you see this page, the nginx web server is successfully installed and
working. Further configuration is required.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>For online documentation and support please refer to
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://nginx.org/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>nginx.org<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
Commercial support is available at
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://nginx.com/<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>nginx.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">&gt;</span></span>Thank you for using nginx.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span><span class="token punctuation">&gt;</span></span>I am WWW<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(5)修改nginx.conf</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location / {
    root   /root/html;
    index  index.html index.htm;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(5)测试启动访问</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>页面会报403拒绝访问的错误
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(6)分析原因</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>因为当前用户没有访问/root/html目录的权限
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(7)将文件创建到 <code>/home/www/html/index.html</code>,修改配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location / {
    root   /home/www/html;
    index  index.html index.htm;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(8)再次测试启动访问</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>能正常访问。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>综上所述，使用user指令可以指定启动运行工作进程的用户及用户组，这样对于系统的权限访问控制的更加精细，也更加安全。</p><h4 id="work-process指令" tabindex="-1"><a class="header-anchor" href="#work-process指令" aria-hidden="true">#</a> work process指令</h4><p>master_process:用来指定是否开启工作进程。</p><table><thead><tr><th>语法</th><th>master_process on|off;</th></tr></thead><tbody><tr><td>默认值</td><td>master_process on;</td></tr><tr><td>位置</td><td>全局块</td></tr></tbody></table><p>worker_processes:用于配置Nginx生成工作进程的数量，这个是Nginx服务器实现并发处理服务的关键所在。理论上来说workder process的值越大，可以支持的并发处理量也越多，但事实上这个值的设定是需要受到来自服务器自身的限制，建议将该值和服务器CPU的内核数保存一致。</p><table><thead><tr><th>语法</th><th>worker_processes num/auto;</th></tr></thead><tbody><tr><td>默认值</td><td>1</td></tr><tr><td>位置</td><td>全局块</td></tr></tbody></table><p>如果将worker_processes设置成2，则会看到如下内容:</p><p><img src="`+i+'" alt="1581563242526"></p><h4 id="其他指令" tabindex="-1"><a class="header-anchor" href="#其他指令" aria-hidden="true">#</a> 其他指令</h4><p>daemon：设定Nginx是否以守护进程的方式启动。</p><p>守护式进程是linux后台执行的一种服务进程，特点是独立于控制终端，不会随着终端关闭而停止。</p><table><thead><tr><th>语法</th><th>daemon on|off;</th></tr></thead><tbody><tr><td>默认值</td><td>daemon on;</td></tr><tr><td>位置</td><td>全局块</td></tr></tbody></table><p>pid:用来配置Nginx当前master进程的进程号ID存储的文件路径。</p><table><thead><tr><th>语法</th><th>pid file;</th></tr></thead><tbody><tr><td>默认值</td><td>默认为:/usr/local/nginx/logs/nginx.pid</td></tr><tr><td>位置</td><td>全局块</td></tr></tbody></table><p>该属性可以通过<code>./configure --pid-path=PATH</code>来指定</p><p>error_log:用来配置Nginx的错误日志存放路径</p><table><thead><tr><th>语法</th><th>error_log file [日志级别];</th></tr></thead><tbody><tr><td>默认值</td><td>error_log logs/error.log error;</td></tr><tr><td>位置</td><td>全局块、http、server、location</td></tr></tbody></table><p>该属性可以通过<code>./configure --error-log-path=PATH</code>来指定</p><p>其中日志级别的值有：debug|info|notice|warn|error|crit|alert|emerg，翻译过来为试|信息|通知|警告|错误|临界|警报|紧急，这块建议大家设置的时候不要设置成info以下的等级，因为会带来大量的磁盘I/O消耗，影响Nginx的性能。</p><p>（5）include:用来引入其他配置文件，使Nginx的配置更加灵活</p><table><thead><tr><th>语法</th><th>include file;</th></tr></thead><tbody><tr><td>默认值</td><td>无</td></tr><tr><td>位置</td><td>any</td></tr></tbody></table><h3 id="events块" tabindex="-1"><a class="header-anchor" href="#events块" aria-hidden="true">#</a> events块</h3><p>（1）accept_mutex:用来设置Nginx网络连接序列化</p><table><thead><tr><th>语法</th><th>accept_mutex on|off;</th></tr></thead><tbody><tr><td>默认值</td><td>accept_mutex on;</td></tr><tr><td>位置</td><td>events</td></tr></tbody></table><p>这个配置主要可以用来解决常说的&quot;惊群&quot;问题。大致意思是在某一个时刻，客户端发来一个请求连接，Nginx后台是以多进程的工作模式，也就是说有多个worker进程会被同时唤醒，但是最终只会有一个进程可以获取到连接，如果每次唤醒的进程数目太多，就会影响Nginx的整体性能。如果将上述值设置为on(开启状态)，将会对多个Nginx进程接收连接进行序列号，一个个来唤醒接收，就防止了多个进程对连接的争抢。</p><p><img src="'+d+`" alt="1581566971955"></p><p>（2）multi_accept:用来设置是否允许同时接收多个网络连接</p><table><thead><tr><th>语法</th><th>multi_accept on|off;</th></tr></thead><tbody><tr><td>默认值</td><td>multi_accept off;</td></tr><tr><td>位置</td><td>events</td></tr></tbody></table><p>如果multi_accept被禁止了，nginx一个工作进程只能同时接受一个新的连接。否则，一个工作进程可以同时接受所有的新连接</p><p>（3）worker_connections：用来配置单个worker进程最大的连接数</p><table><thead><tr><th>语法</th><th>worker_connections number;</th></tr></thead><tbody><tr><td>默认值</td><td>worker_commections 512;</td></tr><tr><td>位置</td><td>events</td></tr></tbody></table><p>这里的连接数不仅仅包括和前端用户建立的连接数，而是包括所有可能的连接数。另外，number值不能大于操作系统支持打开的最大文件句柄数量。</p><p>（4）use:用来设置Nginx服务器选择哪种事件驱动来处理网络消息。</p><table><thead><tr><th>语法</th><th>use method;</th></tr></thead><tbody><tr><td>默认值</td><td>根据操作系统定</td></tr><tr><td>位置</td><td>events</td></tr></tbody></table><p>注意：此处所选择事件处理模型是Nginx优化部分的一个重要内容，method的可选值有select/poll/epoll/kqueue等，之前在准备centos环境的时候，我们强调过要使用linux内核在2.6以上，就是为了能使用epoll函数来优化Nginx。</p><p>另外这些值的选择，我们也可以在编译的时候使用</p><p><code>--with-select_module</code>、<code>--without-select_module</code>、</p><p><code> --with-poll_module</code>、<code> --without-poll_module</code>来设置是否需要将对应的事件驱动模块编译到Nginx的内核。</p><h4 id="events指令配置实例" tabindex="-1"><a class="header-anchor" href="#events指令配置实例" aria-hidden="true">#</a> events指令配置实例</h4><p>打开Nginx的配置文件 nginx.conf,添加如下配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>events{
    accept_mutex on;
    multi_accept on;
    worker_commections 1024;
    use epoll;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动测试</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./nginx -t
./nginx -s reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="http块" tabindex="-1"><a class="header-anchor" href="#http块" aria-hidden="true">#</a> http块</h3><h4 id="定义mime-type" tabindex="-1"><a class="header-anchor" href="#定义mime-type" aria-hidden="true">#</a> 定义MIME-Type</h4><p>我们都知道浏览器中可以显示的内容有HTML、XML、GIF等种类繁多的文件、媒体等资源，浏览器为了区分这些资源，就需要使用MIME Type。所以说MIME Type是网络资源的媒体类型。Nginx作为web服务器，也需要能够识别前端请求的资源类型。</p><p>在Nginx的配置文件中，默认有两行配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>include mime.types;
default_type application/octet-stream;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>（1）default_type:用来配置Nginx响应前端请求默认的MIME类型。</p><table><thead><tr><th>语法</th><th>default_type mime-type;</th></tr></thead><tbody><tr><td>默认值</td><td>default_type text/plain；</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><p>在default_type之前还有一句<code>include mime.types</code>,include之前我们已经介绍过，相当于把mime.types文件中MIMT类型与相关类型文件的文件后缀名的对应关系加入到当前的配置文件中。</p><p>举例来说明：</p><p>有些时候请求某些接口的时候需要返回指定的文本字符串或者json字符串，如果逻辑非常简单或者干脆是固定的字符串，那么可以使用nginx快速实现，这样就不用编写程序响应请求了，可以减少服务器资源占用并且响应性能非常快。</p><p>如何实现:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location /get_text {
    #这里也可以设置成text/plain
    default_type text/html;
    return 200 &quot;This is nginx&#39;s text&quot;;
}
location /get_json{
    default_type application/json;
    return 200 &#39;{&quot;name&quot;:&quot;TOM&quot;,&quot;age&quot;:18}&#39;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自定义服务日志" tabindex="-1"><a class="header-anchor" href="#自定义服务日志" aria-hidden="true">#</a> 自定义服务日志</h4><p>Nginx中日志的类型分access.log、error.log。</p><p>access.log:用来记录用户所有的访问请求。</p><p>error.log:记录nginx本身运行时的错误信息，不会记录用户的访问请求。</p><p>Nginx服务器支持对服务日志的格式、大小、输出等进行设置，需要使用到两个指令，分别是access_log和log_format指令。</p><p>（1）access_log:用来设置用户访问日志的相关属性。</p><table><thead><tr><th>语法</th><th>access_log path[format[buffer=size]]</th></tr></thead><tbody><tr><td>默认值</td><td>access_log logs/access.log combined;</td></tr><tr><td>位置</td><td><code>http</code>, <code>server</code>, <code>location</code></td></tr></tbody></table><p>（2）log_format:用来指定日志的输出格式。</p><table><thead><tr><th>语法</th><th>log_format name [escape=default|json|none] string....;</th></tr></thead><tbody><tr><td>默认值</td><td>log_format combined &quot;...&quot;;</td></tr><tr><td>位置</td><td>http</td></tr></tbody></table><h4 id="其他配置指令" tabindex="-1"><a class="header-anchor" href="#其他配置指令" aria-hidden="true">#</a> 其他配置指令</h4><p>（1）sendfile:用来设置Nginx服务器是否使用sendfile()传输文件，该属性可以大大提高Nginx处理静态资源的性能</p><table><thead><tr><th>语法</th><th>sendfile on|off；</th></tr></thead><tbody><tr><td>默认值</td><td>sendfile off;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><p>（2）keepalive_timeout:用来设置长连接的超时时间。</p><p>》为什么要使用keepalive？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>我们都知道HTTP是一种无状态协议，客户端向服务端发送一个TCP请求，服务端响应完毕后断开连接。
如何客户端向服务端发送多个请求，每个请求都需要重新创建一次连接，效率相对来说比较多，使用keepalive模式，可以告诉服务器端在处理完一个请求后保持这个TCP连接的打开状态，若接收到来自这个客户端的其他请求，服务端就会利用这个未被关闭的连接，而不需要重新创建一个新连接，提升效率，但是这个连接也不能一直保持，这样的话，连接如果过多，也会是服务端的性能下降，这个时候就需要我们进行设置其的超时时间。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>语法</th><th>keepalive_timeout time;</th></tr></thead><tbody><tr><td>默认值</td><td>keepalive_timeout 75s;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><p>（3）keepalive_requests:用来设置一个keep-alive连接使用的次数。</p><table><thead><tr><th>语法</th><th>keepalive_requests number;</th></tr></thead><tbody><tr><td>默认值</td><td>keepalive_requests 100;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><h3 id="server块和location块" tabindex="-1"><a class="header-anchor" href="#server块和location块" aria-hidden="true">#</a> server块和location块</h3><p>server块和location块都是我们要重点讲解和学习的内容，因为我们后面会对Nginx的功能进行详细讲解，所以这块内容就放到静态资源部署的地方给大家详细说明。</p><p>本节我们主要来认识下Nginx默认给的nginx.conf中的相关内容，以及server块与location块在使用的时候需要注意的一些内容。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    server {
        listen       80;
        server_name  localhost;
        location / {
            root   html;
            index  index.html index.htm;
        }

        error_page   500 502 503 504 404  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,110),o=[p];function c(r,u){return t(),e("div",null,o)}const g=n(l,[["render",c],["__file","三、Nginx核心配置文件结构.html.vue"]]);export{g as default};
