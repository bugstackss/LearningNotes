import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as i,a as s}from"./app.9b10ba0a.js";const n="/assets/1581846370052.be084cf5.png",d="/assets/1589729000713.5405e769.png",r="/assets/1581847577947.ee48b6f0.png",a="/assets/1589729479920.9c2a7b10.png",l="/assets/1581883378672.9c259571.png",v="/assets/1589908851340.021a01b2.png",c="/assets/1581879638569.dc57b67a.png",p={},o=s('<h3 id="nginx反向代理概述" tabindex="-1"><a class="header-anchor" href="#nginx反向代理概述" aria-hidden="true">#</a> Nginx反向代理概述</h3><p>关于正向代理和反向代理，我们在前面的章节已经通过一张图给大家详细的介绍过了，简而言之就是正向代理代理的对象是客户端，反向代理代理的是服务端，这是两者之间最大的区别。</p><p>Nginx即可以实现正向代理，也可以实现反向代理。</p><p>我们先来通过一个小案例演示下Nginx正向代理的简单应用。</p><p>先提需求：</p><p><img src="'+n+`" alt=""></p><p>(1)服务端的设置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http {
  log_format main &#39;client send request=&gt;clientIp=$remote_addr serverIp=&gt;$host&#39;;
    server{
        listen 80;
        server_name    localhost;
        access_log logs/access.log main;
        location {
            root html;
            index index.html index.htm;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2)使用客户端访问服务端，打开日志查看结果</p><p><img src="`+d+`" alt="1589729000713"></p><p>(3)代理服务器设置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {

        listen  82;
        resolver 8.8.8.8;
        location /{
                proxy_pass http://$host$request_uri;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4)查看代理服务器的IP(192.168.200.146)和Nginx配置监听的端口(82)</p><p>(5)在客户端配置代理服务器</p><p><img src="`+r+'" alt=""></p><p>(6)设置完成后，再次通过浏览器访问服务端</p><p><img src="'+a+`" alt="1589729479920"></p><p>通过对比，上下两次的日志记录，会发现虽然我们是客户端访问服务端，但是如何使用了代理，那么服务端能看到的只是代理发送过去的请求，这样的化，就使用Nginx实现了正向代理的设置。</p><p>但是Nginx正向代理，在实际的应用中不是特别多，所以我们简单了解下，接下来我们继续学习Nginx的反向代理，这是Nginx比较重要的一个功能。</p><h3 id="nginx反向代理的配置语法" tabindex="-1"><a class="header-anchor" href="#nginx反向代理的配置语法" aria-hidden="true">#</a> Nginx反向代理的配置语法</h3><p>Nginx反向代理模块的指令是由<code>ngx_http_proxy_module</code>模块进行解析，该模块在安装Nginx的时候已经自己加装到Nginx中了，接下来我们把反向代理中的常用指令一一介绍下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>proxy_pass
proxy_set_header
proxy_redirect
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="proxy-pass" tabindex="-1"><a class="header-anchor" href="#proxy-pass" aria-hidden="true">#</a> proxy_pass</h4><p>该指令用来设置被代理服务器地址，可以是主机名称、IP地址加端口号形式。</p><table><thead><tr><th>语法</th><th>proxy_pass URL;</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>location</td></tr></tbody></table><p>URL:为要设置的被代理服务器地址，包含传输协议(<code>http</code>,<code>https://</code>)、主机名称或IP地址加端口号、URI等要素。</p><p>举例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>proxy_pass http://www.baidu.com;
location /server{}
proxy_pass http://192.168.200.146;
    http://192.168.200.146/server/index.html
proxy_pass http://192.168.200.146/;
    http://192.168.200.146/index.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大家在编写proxy_pass的时候，后面的值要不要加&quot;/&quot;?</p><p>接下来通过例子来说明刚才我们提到的问题：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen 80;
    server_name localhost;
    location /{
        #proxy_pass http://192.168.200.146;
        proxy_pass http://192.168.200.146/;
    }
}
当客户端访问 http://localhost/index.html,效果是一样的
server{
    listen 80;
    server_name localhost;
    location /server{
        #proxy_pass http://192.168.200.146;
        proxy_pass http://192.168.200.146/;
    }
}
当客户端访问 http://localhost/server/index.html
这个时候，第一个proxy_pass就变成了http://localhost/server/index.html
第二个proxy_pass就变成了http://localhost/index.html效果就不一样了。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="proxy-set-header" tabindex="-1"><a class="header-anchor" href="#proxy-set-header" aria-hidden="true">#</a> proxy_set_header</h4><p>该指令可以更改Nginx服务器接收到的客户端请求的请求头信息，然后将新的请求头发送给代理的服务器</p><table><thead><tr><th>语法</th><th>proxy_set_header field value;</th></tr></thead><tbody><tr><td>默认值</td><td>proxy_set_header Host $proxy_host;<br>proxy_set_header Connection close;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><p>需要注意的是，如果想要看到结果，必须在被代理的服务器上来获取添加的头信息。</p><p>被代理服务器： [192.168.200.146]</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
        listen  8080;
        server_name localhost;
        default_type text/plain;
        return 200 $http_username;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代理服务器: [192.168.200.133]</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
        listen  8080;
        server_name localhost;
        location /server {
                proxy_pass http://192.168.200.146:8080/;
                proxy_set_header username TOM;
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问测试</p><h4 id="proxy-redirect" tabindex="-1"><a class="header-anchor" href="#proxy-redirect" aria-hidden="true">#</a> proxy_redirect</h4><p>该指令是用来重置头信息中的&quot;Location&quot;和&quot;Refresh&quot;的值。</p><table><thead><tr><th>语法</th><th>proxy_redirect redirect replacement;<br>proxy_redirect default;<br>proxy_redirect off;</th></tr></thead><tbody><tr><td>默认值</td><td>proxy_redirect default;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><p>》为什么要用该指令?</p><p>服务端[192.168.200.146]</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen  8081;
    server_name localhost;
    if (!-f $request_filename){
        return 302 http://192.168.200.146;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代理服务端[192.168.200.133]</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen  8081;
    server_name localhost;
    location / {
        proxy_pass http://192.168.200.146:8081/;
        proxy_redirect http://192.168.200.146 http://192.168.200.133;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>》该指令的几组选项</p><p>proxy_redirect redirect replacement;</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>redirect:目标,Location的值
replacement:要替换的值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>proxy_redirect default;</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>default;
将location块的uri变量作为replacement,
将proxy_pass变量作为redirect进行替换
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>proxy_redirect off;</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>关闭proxy_redirect的功能
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="nginx反向代理实战" tabindex="-1"><a class="header-anchor" href="#nginx反向代理实战" aria-hidden="true">#</a> Nginx反向代理实战</h3><p><img src="`+l+`" alt="1581883378672"></p><p>服务器1,2,3存在两种情况</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>第一种情况: 三台服务器的内容不一样。
第二种情况: 三台服务器的内容是一样。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>如果服务器1、服务器2和服务器3的内容不一样，那我们可以根据用户请求来分发到不同的服务器。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>代理服务器
server {
        listen          8082;
        server_name     localhost;
        location /server1 {
                proxy_pass http://192.168.200.146:9001/;
        }
        location /server2 {
                proxy_pass http://192.168.200.146:9002/;
        }
        location /server3 {
                proxy_pass http://192.168.200.146:9003/;
        }
}

服务端
server1
server {
        listen          9001;
        server_name     localhost;
        default_type text/html;
        return 200 &#39;&lt;h1&gt;192.168.200.146:9001&lt;/h1&gt;&#39;
}
server2
server {
        listen          9002;
        server_name     localhost;
        default_type text/html;
        return 200 &#39;&lt;h1&gt;192.168.200.146:9002&lt;/h1&gt;&#39;
}
server3
server {
        listen          9003;
        server_name     localhost;
        default_type text/html;
        return 200 &#39;&lt;h1&gt;192.168.200.146:9003&lt;/h1&gt;&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>如果服务器1、服务器2和服务器3的内容是一样的，该如何处理?</li></ol><h3 id="nginx的安全控制" tabindex="-1"><a class="header-anchor" href="#nginx的安全控制" aria-hidden="true">#</a> Nginx的安全控制</h3><p>关于web服务器的安全是比较大的一个话题，里面所涉及的内容很多，Nginx反向代理是如何来提升web服务器的安全呢？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>安全隔离
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>什么是安全隔离?</p><p>通过代理分开了客户端到应用程序服务器端的连接，实现了安全措施。在反向代理之前设置防火墙，仅留一个入口供代理服务器访问。</p><p><img src="`+v+`" alt="1589908851340"></p><h4 id="如何使用ssl对流量进行加密" tabindex="-1"><a class="header-anchor" href="#如何使用ssl对流量进行加密" aria-hidden="true">#</a> 如何使用SSL对流量进行加密</h4><p>翻译成大家能熟悉的说法就是将我们常用的http请求转变成https请求，那么这两个之间的区别简单的来说两个都是HTTP协议，只不过https是身披SSL外壳的http.</p><p>HTTPS是一种通过计算机网络进行安全通信的传输协议。它经由HTTP进行通信，利用SSL/TLS建立全通信，加密数据包，确保数据的安全性。</p><p>SSL(Secure Sockets Layer)安全套接层</p><p>TLS(Transport Layer Security)传输层安全</p><p>上述这两个是为网络通信提供安全及数据完整性的一种安全协议，TLS和SSL在传输层和应用层对网络连接进行加密。</p><p>总结来说为什么要使用https:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http协议是明文传输数据，存在安全问题，而https是加密传输，相当于http+ssl，并且可以防止流量劫持。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Nginx要想使用SSL，需要满足一个条件即需要添加一个模块<code>--with-http_ssl_module</code>,而该模块在编译的过程中又需要OpenSSL的支持，这个我们之前已经准备好了。</p><h5 id="nginx添加ssl的支持" tabindex="-1"><a class="header-anchor" href="#nginx添加ssl的支持" aria-hidden="true">#</a> nginx添加SSL的支持</h5><p>（1）完成 <code>--with-http_ssl_module</code>模块的增量添加</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>》将原有/usr/local/nginx/sbin/nginx进行备份
》拷贝nginx之前的配置信息
》在nginx的安装源码进行配置指定对应模块  ./configure --with-http_ssl_module
》通过make模板进行编译
》将objs下面的nginx移动到/usr/local/nginx/sbin下
》在源码目录下执行  make upgrade进行升级，这个可以实现不停机添加新模块的功能
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="nginx的ssl相关指令" tabindex="-1"><a class="header-anchor" href="#nginx的ssl相关指令" aria-hidden="true">#</a> Nginx的SSL相关指令</h5><p>因为刚才我们介绍过该模块的指令都是通过ngx_http_ssl_module模块来解析的。</p><p>》ssl:该指令用来在指定的服务器开启HTTPS,可以使用 listen 443 ssl,后面这种方式更通用些。</p><table><thead><tr><th>语法</th><th>ssl on | off;</th></tr></thead><tbody><tr><td>默认值</td><td>ssl off;</td></tr><tr><td>位置</td><td>http、server</td></tr></tbody></table><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server{
    listen 443 ssl;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>》ssl_certificate:为当前这个虚拟主机指定一个带有PEM格式证书的证书。</p><table><thead><tr><th>语法</th><th>ssl_certificate file;</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>http、server</td></tr></tbody></table><p>》ssl_certificate_key:该指令用来指定PEM secret key文件的路径</p><table><thead><tr><th>语法</th><th>ssl_ceritificate_key file;</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>http、server</td></tr></tbody></table><p>》ssl_session_cache:该指令用来配置用于SSL会话的缓存</p><table><thead><tr><th>语法</th><th>ssl_sesion_cache off|none|[builtin[:size]] [shared:name:size]</th></tr></thead><tbody><tr><td>默认值</td><td>ssl_session_cache none;</td></tr><tr><td>位置</td><td>http、server</td></tr></tbody></table><p>off:禁用会话缓存，客户端不得重复使用会话</p><p>none:禁止使用会话缓存，客户端可以重复使用，但是并没有在缓存中存储会话参数</p><p>builtin:内置OpenSSL缓存，仅在一个工作进程中使用。</p><p>shared:所有工作进程之间共享缓存，缓存的相关信息用name和size来指定</p><p>》ssl_session_timeout：开启SSL会话功能后，设置客户端能够反复使用储存在缓存中的会话参数时间。</p><table><thead><tr><th>语法</th><th>ssl_session_timeout time;</th></tr></thead><tbody><tr><td>默认值</td><td>ssl_session_timeout 5m;</td></tr><tr><td>位置</td><td>http、server</td></tr></tbody></table><p>》ssl_ciphers:指出允许的密码，密码指定为OpenSSL支持的格式</p><table><thead><tr><th>语法</th><th>ssl_ciphers ciphers;</th></tr></thead><tbody><tr><td>默认值</td><td>ssl_ciphers HIGH:!aNULL:!MD5;</td></tr><tr><td>位置</td><td>http、server</td></tr></tbody></table><p>可以使用<code>openssl ciphers</code>查看openssl支持的格式。</p><p>》ssl_prefer_server_ciphers：该指令指定是否服务器密码优先客户端密码</p><table><thead><tr><th>语法</th><th>ssl_perfer_server_ciphers on|off;</th></tr></thead><tbody><tr><td>默认值</td><td>ssl_perfer_server_ciphers off;</td></tr><tr><td>位置</td><td>http、server</td></tr></tbody></table><h5 id="生成证书" tabindex="-1"><a class="header-anchor" href="#生成证书" aria-hidden="true">#</a> 生成证书</h5><p>方式一：使用阿里云/腾讯云等第三方服务进行购买。</p><p>方式二:使用openssl生成证书</p><p>先要确认当前系统是否有安装openssl</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>openssl version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装下面的命令进行生成</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir /root/cert
cd /root/cert
openssl genrsa -des3 -out server.key 1024
openssl req -new -key server.key -out server.csr
cp server.key server.key.org
openssl rsa -in server.key.org -out server.key
openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="开启ssl实例" tabindex="-1"><a class="header-anchor" href="#开启ssl实例" aria-hidden="true">#</a> 开启SSL实例</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen       443 ssl;
    server_name  localhost;

    ssl_certificate      server.cert;
    ssl_certificate_key  server.key;

    ssl_session_cache    shared:SSL:1m;
    ssl_session_timeout  5m;

    ssl_ciphers  HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers  on;

    location / {
        root   html;
        index  index.html index.htm;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（4）验证</p><h3 id="反向代理系统调优" tabindex="-1"><a class="header-anchor" href="#反向代理系统调优" aria-hidden="true">#</a> 反向代理系统调优</h3><p>反向代理值Buffer和Cache</p><p>Buffer翻译过来是&quot;缓冲&quot;，Cache翻译过来是&quot;缓存&quot;。</p><p><img src="`+c+`" alt="1581879638569"></p><p>总结下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>相同点:
两种方式都是用来提供IO吞吐效率，都是用来提升Nginx代理的性能。
不同点:
缓冲主要用来解决不同设备之间数据传递速度不一致导致的性能低的问题，缓冲中的数据一旦此次操作完成后，就可以删除。
缓存主要是备份，将被代理服务器的数据缓存一份到代理服务器，这样的话，客户端再次获取相同数据的时候，就只需要从代理服务器上获取，效率较高，缓存中的数据可以重复使用，只有满足特定条件才会删除.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（1）Proxy Buffer相关指令</p><p>》proxy_buffering :该指令用来开启或者关闭代理服务器的缓冲区；</p><table><thead><tr><th>语法</th><th>proxy_buffering on|off;</th></tr></thead><tbody><tr><td>默认值</td><td>proxy_buffering on;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><p>》proxy_buffers:该指令用来指定单个连接从代理服务器读取响应的缓存区的个数和大小。</p><table><thead><tr><th>语法</th><th>proxy_buffers number size;</th></tr></thead><tbody><tr><td>默认值</td><td>proxy_buffers 8 4k | 8K;(与系统平台有关)</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><p>number:缓冲区的个数</p><p>size:每个缓冲区的大小，缓冲区的总大小就是number*size</p><p>》proxy_buffer_size:该指令用来设置从被代理服务器获取的第一部分响应数据的大小。保持与proxy_buffers中的size一致即可，当然也可以更小。</p><table><thead><tr><th>语法</th><th>proxy_buffer_size size;</th></tr></thead><tbody><tr><td>默认值</td><td>proxy_buffer_size 4k | 8k;(与系统平台有关)</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><p>》proxy_busy_buffers_size：该指令用来限制同时处于BUSY状态的缓冲总大小。</p><table><thead><tr><th>语法</th><th>proxy_busy_buffers_size size;</th></tr></thead><tbody><tr><td>默认值</td><td>proxy_busy_buffers_size 8k|16K;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><p>》proxy_temp_path:当缓冲区存满后，仍未被Nginx服务器完全接受，响应数据就会被临时存放在磁盘文件上，该指令设置文件路径</p><table><thead><tr><th>语法</th><th>proxy_temp_path path;</th></tr></thead><tbody><tr><td>默认值</td><td>proxy_temp_path proxy_temp;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><p>注意path最多设置三层。</p><p>》proxy_temp_file_write_size：该指令用来设置磁盘上缓冲文件的大小。</p><table><thead><tr><th>语法</th><th>proxy_temp_file_write_size size;</th></tr></thead><tbody><tr><td>默认值</td><td>proxy_temp_file_write_size 8K|16K;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><p>通用网站的配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>proxy_buffering on;
proxy_buffer_size 4 32k;
proxy_busy_buffers_size 64k;
proxy_temp_file_write_size 64k;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据项目的具体内容进行相应的调节。</p>`,137),u=[o];function h(b,m){return t(),i("div",null,u)}const g=e(p,[["render",h],["__file","十、Nginx反向代理.html.vue"]]);export{g as default};
