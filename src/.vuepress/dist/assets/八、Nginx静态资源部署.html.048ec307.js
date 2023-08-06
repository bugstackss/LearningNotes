import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as l,d as e,e as n,b as i,a,r}from"./app.9b10ba0a.js";const c="/assets/1888989497.b925c817.png",o="/assets/1587655397104.36c9a8ab.png",u="/assets/1587665814562.7aafa175.png",v="/assets/1587832596733.26afc1fe.png",p="/assets/1587361606028.385a91f1.png",m="/assets/1587932106429.cb8bec06.png",b="/assets/1587932300006.21e1e97d.png",h="/assets/1581762832290.da213354.png",g="/assets/1581766282200.d104f4c2.png",x="/assets/1588004913681.f9a5d903.png",_="/assets/1581827029973.d51bfc9f.png",f="/assets/1581769820325.f441d75d.png",w="/assets/1581769079083.bdd76894.png",E={},k=a(`<h3 id="nginx静态资源概述" tabindex="-1"><a class="header-anchor" href="#nginx静态资源概述" aria-hidden="true">#</a> Nginx静态资源概述</h3><p>上网去搜索访问资源对于我们来说并不陌生，通过浏览器发送一个HTTP请求实现从客户端发送请求到服务器端获取所需要内容后并把内容回显展示在页面的一个过程。这个时候，我们所请 求的内容就分为两种类型，一类是静态资源、一类是动态资源。</p><p>静态资源即指在服务器端真实存在并且能直接拿来展示的一些文件，比如常见的html页面、css文件、js文件、图 片、视频等资源；</p><p>动态资源即指在服务器端真实存在但是要想获取需要经过一定的业务逻辑处理，根据不同的条件展示在页面不同这 一部分内容，比如说报表数据展示、根据当前登录用户展示相关具体数据等资源；</p><p>Nginx处理静态资源的内容，我们需要考虑下面这几个问题：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>（1）静态资源的配置指令
（2）静态资源的配置优化
（3）静态资源的压缩配置指令
（4）静态资源的缓存处理
（5）静态资源的访问控制，包括跨域问题和防盗链问题
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nginx静态资源的配置指令" tabindex="-1"><a class="header-anchor" href="#nginx静态资源的配置指令" aria-hidden="true">#</a> Nginx静态资源的配置指令</h3><h4 id="listen指令" tabindex="-1"><a class="header-anchor" href="#listen指令" aria-hidden="true">#</a> listen指令</h4><p>listen:用来配置监听端口。</p><table><thead><tr><th>语法</th><th>listen address[:port] [default_server]...;<br>listen port [default_server]...;</th></tr></thead><tbody><tr><td>默认值</td><td>listen *:80 | *:8000</td></tr><tr><td>位置</td><td>server</td></tr></tbody></table><p>listen的设置比较灵活，我们通过几个例子来把常用的设置方式熟悉下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>listen 127.0.0.1:8000; // listen localhost:8000 监听指定的IP和端口
listen 127.0.0.1;    监听指定IP的所有端口
listen 8000;    监听指定端口上的连接
listen *:8000;    监听指定端口上的连接
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>default_server属性是标识符，用来将此虚拟主机设置成默认主机。所谓的默认主机指的是如果没有匹配到对应的address:port，则会默认执行的。如果不指定默认使用的是第一个server。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server{
    listen 8080;
    server_name 127.0.0.1;
    location /{
        root html;
        index index.html;
    }
}
server{
    listen 8080 default_server;
    server_name localhost;
    default_type text/plain;
    return 444 &#39;This is a error request&#39;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="server-name指令" tabindex="-1"><a class="header-anchor" href="#server-name指令" aria-hidden="true">#</a> server_name指令</h4><p>server_name：用来设置虚拟主机服务名称。</p>`,16),q={href:"http://www.baidu.com",target:"_blank",rel:"noopener noreferrer"},y={href:"http://www.jd.com",target:"_blank",rel:"noopener noreferrer"},z=a(`<table><thead><tr><th>语法</th><th>server_name name ...;<br>name可以提供多个中间用空格分隔</th></tr></thead><tbody><tr><td>默认值</td><td>server_name &quot;&quot;;</td></tr><tr><td>位置</td><td>server</td></tr></tbody></table><p>关于server_name的配置方式有三种，分别是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>精确匹配
通配符匹配
正则表达式匹配
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置方式一：精确匹配</p><p>如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen 80;
    server_name www.itcast.cn www.itheima.cn;
    ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>补充小知识点:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>hosts是一个没有扩展名的系统文件，可以用记事本等工具打开，其作用就是将一些常用的网址域名与其对应的IP地址建立一个关联“数据库”，当用户在浏览器中输入一个需要登录的网址时，系统会首先自动从hosts文件中寻找对应的IP地址，一旦找到，系统会立即打开对应网页，如果没有找到，则系统会再将网址提交DNS域名解析服务器进行IP地址的解析。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>windows:C:\\Windows\\System32\\drivers\\etc</p><p>centos：/etc/hosts</p><p>因为域名是要收取一定的费用，所以我们可以使用修改hosts文件来制作一些虚拟域名来使用。需要修改 <code>/etc/hosts</code>文件来添加</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vim /etc/hosts
127.0.0.1 www.itcast.cn
127.0.0.1 www.itheima.cn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置方式二:使用通配符配置</p><p>server_name中支持通配符&quot;*&quot;,但需要注意的是通配符不能出现在域名的中间，只能出现在首段或尾段，如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen 80;
    server_name  *.itcast.cn    www.itheima.*;
    # www.itcast.cn abc.itcast.cn www.itheima.cn www.itheima.com
    ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的配置就会报错</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen 80;
    server_name  www.*.cn www.itheima.c*
    ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置三:使用正则表达式配置</p><p>server_name中可以使用正则表达式，并且使用<code>~</code>作为正则表达式字符串的开始标记。</p><p>常见的正则表达式</p><p><img src="`+c+`" alt="images"></p><p>配置如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server{
        listen 80;
        server_name ~^www\\.(\\w+)\\.com$;
        default_type text/plain;
        return 200 $1  $2 ..;
}
注意 ~后面不能加空格，括号可以取值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="匹配执行顺序" tabindex="-1"><a class="header-anchor" href="#匹配执行顺序" aria-hidden="true">#</a> 匹配执行顺序</h5><p>由于server_name指令支持通配符和正则表达式，因此在包含多个虚拟主机的配置文件中，可能会出现一个名称被多个虚拟主机的server_name匹配成功，当遇到这种情况，当前的请求交给谁来处理呢？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server{
    listen 80;
    server_name ~^www\\.\\w+\\.com$;
    default_type text/plain;
    return 200 &#39;regex_success&#39;;
}

server{
    listen 80;
    server_name www.itheima.*;
    default_type text/plain;
    return 200 &#39;wildcard_after_success&#39;;
}

server{
    listen 80;
    server_name *.itheima.com;
    default_type text/plain;
    return 200 &#39;wildcard_before_success&#39;;
}

server{
    listen 80;
    server_name www.itheima.com;
    default_type text/plain;
    return 200 &#39;exact_success&#39;;
}

server{
    listen 80 default_server;
    server_name _;
    default_type text/plain;
    return 444 &#39;default_server not found server&#39;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结论：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>exact_success
wildcard_before_success
wildcard_after_success
regex_success
default_server not found server!!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>No1:准确匹配server_name

No2:通配符在开始时匹配server_name成功

No3:通配符在结束时匹配server_name成功

No4:正则表达式匹配server_name成功

No5:被默认的default_server处理，如果没有指定默认找第一个server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="location指令" tabindex="-1"><a class="header-anchor" href="#location指令" aria-hidden="true">#</a> location指令</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server{
    listen 80;
    server_name localhost;
    location / {

    }
    location /abc{

    }
    ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>location:用来设置请求的URI</p>`,32),A=e("table",null,[e("thead",{"css-module":"."},[e("tr",null,[e("th",null,"语法"),e("th",null,"location [ = | ~ | ~* | ^~ |@ ] uri")])]),e("tbody",null,[e("tr",null,[e("td",null,"默认值"),e("td",null,"—")]),e("tr",null,[e("td",null,"位置"),e("td",null,"server,location")])])],-1),C=a(`<p>uri变量是待匹配的请求字符串，可以不包含正则表达式，也可以包含正则表达式，那么nginx服务器在搜索匹配location的时候，是先使用不包含正则表达式进行匹配，找到一个匹配度最高的一个，然后在通过包含正则表达式的进行匹配，如果能匹配到直接访问，匹配不到，就使用刚才匹配度最高的那个location来处理请求。</p><p>属性介绍:</p><p>不带符号，要求必须以指定模式开始</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen 80;
    server_name 127.0.0.1;
    location /abc{
        default_type text/plain;
        return 200 &quot;access success&quot;;
    }
}
以下访问都是正确的
http://192.168.200.133/abc
http://192.168.200.133/abc?p1=TOM
http://192.168.200.133/abc/
http://192.168.200.133/abcdef
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>= : 用于不包含正则表达式的uri前，必须与指定的模式精确匹配</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen 80;
    server_name 127.0.0.1;
    location =/abc{
        default_type text/plain;
        return 200 &quot;access success&quot;;
    }
}
可以匹配到
http://192.168.200.133/abc
http://192.168.200.133/abc?p1=TOM
匹配不到
http://192.168.200.133/abc/
http://192.168.200.133/abcdef
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>~ ： 用于表示当前uri中包含了正则表达式，并且区分大小写 ~*: 用于表示当前uri中包含了正则表达式，并且不区分大小写</p><p>换句话说，如果uri包含了正则表达式，需要用上述两个符合来标识</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen 80;
    server_name 127.0.0.1;
    location ~^/abc\\w\${
        default_type text/plain;
        return 200 &quot;access success&quot;;
    }
}
server {
    listen 80;
    server_name 127.0.0.1;
    location ~*^/abc\\w\${
        default_type text/plain;
        return 200 &quot;access success&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>^~: 用于不包含正则表达式的uri前，功能和不加符号的一致，唯一不同的是，如果模式匹配，那么就停止搜索其他模式了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen 80;
    server_name 127.0.0.1;
    location ^~/abc{
        default_type text/plain;
        return 200 &quot;access success&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="设置请求资源的目录root-alias" tabindex="-1"><a class="header-anchor" href="#设置请求资源的目录root-alias" aria-hidden="true">#</a> 设置请求资源的目录root / alias</h4><p>root：设置请求的根目录</p><table><thead><tr><th>语法</th><th>root path;</th></tr></thead><tbody><tr><td>默认值</td><td>root html;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><p>path为Nginx服务器接收到请求以后查找资源的根目录路径。</p><p>alias：用来更改location的URI</p><table><thead><tr><th>语法</th><th>alias path;</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>location</td></tr></tbody></table><p>path为修改后的根路径。</p><p>以上两个指令都可以来指定访问资源的路径，那么这两者之间的区别是什么?</p><p>举例说明：</p><p>（1）在<code>/usr/local/nginx/html</code>目录下创建一个 images目录,并在目录下放入一张图片<code>mv.png</code>图片</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location /images {
    root /usr/local/nginx/html;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问图片的路径为:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://192.168.200.133/images/mv.png
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（2）如果把root改为alias</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location /images {
    alias /usr/local/nginx/html;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次访问上述地址，页面会出现404的错误，查看错误日志会发现是因为地址不对，所以验证了：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>root的处理结果是: root路径+location路径
/usr/local/nginx/html/images/mv.png
alias的处理结果是:使用alias路径替换location路径
/usr/local/nginx/html/images
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要在alias后面路径改为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location /images {
    alias /usr/local/nginx/html/images;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）如果location路径是以/结尾,则alias也必须是以/结尾，root没有要求</p><p>将上述配置修改为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location /images/ {
    alias /usr/local/nginx/html/images;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问就会出问题，查看错误日志还是路径不对，所以需要把alias后面加上 /</p><p>小结：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>root的处理结果是: root路径+location路径
alias的处理结果是:使用alias路径替换location路径
alias是一个目录别名的定义，root则是最上层目录的含义。
如果location路径是以/结尾,则alias也必须是以/结尾，root没有要求
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="index指令" tabindex="-1"><a class="header-anchor" href="#index指令" aria-hidden="true">#</a> index指令</h4><p>index:设置网站的默认首页</p><table><thead><tr><th>语法</th><th>index file ...;</th></tr></thead><tbody><tr><td>默认值</td><td>index index.html;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><p>index后面可以跟多个设置，如果访问的时候没有指定具体访问的资源，则会依次进行查找，找到第一个为止。</p><p>举例说明：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location / {
    root /usr/local/nginx/html;
    index index.html index.htm;
}
访问该location的时候，可以通过 http://ip:port/，地址后面如果不添加任何内容，则默认依次访问index.html和index.htm，找到第一个来进行返回
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="error-page指令" tabindex="-1"><a class="header-anchor" href="#error-page指令" aria-hidden="true">#</a> error_page指令</h4><p>error_page:设置网站的错误页面</p><table><thead><tr><th>语法</th><th>error_page code ... [=[response]] uri;</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>http、server、location......</td></tr></tbody></table><p>当出现对应的响应code后，如何来处理。</p><p>举例说明：</p><p>（1）可以指定具体跳转的地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    error_page 404 http://www.itcast.cn;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）可以指定重定向地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server{
    error_page 404 /50x.html;
    error_page 500 502 503 504 /50x.html;
    location =/50x.html{
        root html;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）使用location的@符合完成错误信息展示</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server{
    error_page 404 @jump_to_error;
    location @jump_to_error {
        default_type text/plain;
        return 404 &#39;Not Found Page...&#39;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可选项<code>=[response]</code>的作用是用来将相应代码更改为另外一个</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server{
    error_page 404 =200 /50x.html;
    location =/50x.html{
        root html;
    }
}
这样的话，当返回404找不到对应的资源的时候，在浏览器上可以看到，最终返回的状态码是200，这块需要注意下，编写error_page后面的内容，404后面需要加空格，200前面不能加空格
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="静态资源优化配置语法" tabindex="-1"><a class="header-anchor" href="#静态资源优化配置语法" aria-hidden="true">#</a> 静态资源优化配置语法</h3><p>Nginx对静态资源如何进行优化配置。这里从三个属性配置进行优化：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sendfile on;
tcp_nopush on;
tcp_nodeplay on;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（1）sendﬁle，用来开启高效的文件传输模式。</p><table><thead><tr><th>语法</th><th>sendﬁle on |oﬀ;</th></tr></thead><tbody><tr><td>默认值</td><td>sendﬁle oﬀ;</td></tr><tr><td>位置</td><td>http、server、location...</td></tr></tbody></table><p>请求静态资源的过程：客户端通过网络接口向服务端发送请求，操作系统将这些客户端的请求传递给服务器端应用程序，服务器端应用程序会处理这些请求，请求处理完成以后，操作系统还需要将处理得到的结果通过网络适配器传递回去。</p><p>如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen 80;
    server_name localhost；
    location / {
        root html;
        index index.html;
    }
}
在html目录下有一个welcome.html页面，访问地址
http://192.168.200.133/welcome.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+o+'" alt="1587655397104"></p><p><img src="'+u+'" alt="1587665814562"></p><p>（2）tcp_nopush：该指令必须在sendfile打开的状态下才会生效，主要是用来提升网络包的传输&#39;效率&#39;</p><table><thead><tr><th>语法</th><th>tcp_nopush on|off;</th></tr></thead><tbody><tr><td>默认值</td><td>tcp_nopush oﬀ;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><p>（3）tcp_nodelay：该指令必须在keep-alive连接开启的情况下才生效，来提高网络包传输的&#39;实时性&#39;</p><table><thead><tr><th>语法</th><th>tcp_nodelay on|off;</th></tr></thead><tbody><tr><td>默认值</td><td>tcp_nodelay on;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><p><img src="'+v+`" alt="1587832596733"></p><p>经过刚才的分析，&quot;tcp_nopush&quot;和”tcp_nodelay“看起来是&quot;互斥的&quot;，那么为什么要将这两个值都打开，这个大家需要知道的是在linux2.5.9以后的版本中两者是可以兼容的，三个指令都开启的好处是，sendfile可以开启高效的文件传输模式，tcp_nopush开启可以确保在发送到客户端之前数据包已经充分“填满”， 这大大减少了网络开销，并加快了文件发送的速度。 然后，当它到达最后一个可能因为没有“填满”而暂停的数据包时，Nginx会忽略tcp_nopush参数， 然后，tcp_nodelay强制套接字发送数据。由此可知，TCP_NOPUSH可以与TCP_NODELAY一起设置，它比单独配置TCP_NODELAY具有更强的性能。所以我们可以使用如下配置来优化Nginx静态资源的处理</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sendfile on;
tcp_nopush on;
tcp_nodelay on;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nginx静态资源压缩实战" tabindex="-1"><a class="header-anchor" href="#nginx静态资源压缩实战" aria-hidden="true">#</a> Nginx静态资源压缩实战</h3><p>经过上述内容的优化，我们再次思考一个问题，假如在满足上述优化的前提下，我们传送一个1M的数据和一个10M的数据那个效率高?，答案显而易见，传输内容小，速度就会快。那么问题又来了，同样的内容，如果把大小降下来，我们脑袋里面要蹦出一个词就是&quot;压缩&quot;，接下来，我们来学习Nginx的静态资源压缩模块。</p><p>在Nginx的配置文件中可以通过配置gzip来对静态资源进行压缩，相关的指令可以配置在http块、server块和location块中，Nginx可以通过</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ngx_http_gzip_module模块
ngx_http_gzip_static_module模块
ngx_http_gunzip_module模块
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对这些指令进行解析和处理。</p><p>接下来我们从以下内容进行学习</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>（1）Gzip各模块支持的配置指令
（2）Gzip压缩功能的配置
（3）Gzip和sendfile的冲突解决
（4）浏览器不支持Gzip的解决方案
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="gzip模块配置指令" tabindex="-1"><a class="header-anchor" href="#gzip模块配置指令" aria-hidden="true">#</a> Gzip模块配置指令</h4><p>接下来所学习的指令都来自ngx_http_gzip_module模块，该模块会在nginx安装的时候内置到nginx的安装环境中，也就是说我们可以直接使用这些指令。</p><ol><li>gzip指令：该指令用于开启或者关闭gzip功能</li></ol><table><thead><tr><th>语法</th><th>gzip on|off;</th></tr></thead><tbody><tr><td>默认值</td><td>gzip off;</td></tr><tr><td>位置</td><td>http、server、location...</td></tr></tbody></table><p>注意只有该指令为打开状态，下面的指令才有效果</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>http{
   gzip on;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>gzip_types指令：该指令可以根据响应页的MIME类型选择性地开启Gzip压缩功能</li></ol><table><thead><tr><th>语法</th><th>gzip_types mime-type ...;</th></tr></thead><tbody><tr><td>默认值</td><td>gzip_types text/html;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><p>所选择的值可以从mime.types文件中进行查找，也可以使用&quot;*&quot;代表所有。</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>http{
    gzip_types application/javascript;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>gzip_comp_level指令：该指令用于设置Gzip压缩程度，级别从1-9,1表示要是程度最低，要是效率最高，9刚好相反，压缩程度最高，但是效率最低最费时间。</li></ol><table><thead><tr><th>语法</th><th>gzip_comp_level level;</th></tr></thead><tbody><tr><td>默认值</td><td>gzip_comp_level 1;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>http{
    gzip_comp_level 6;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>gzip_vary指令：该指令用于设置使用Gzip进行压缩发送是否携带“Vary:Accept-Encoding”头域的响应头部。主要是告诉接收方，所发送的数据经过了Gzip压缩处理</li></ol><table><thead><tr><th>语法</th><th>gzip_vary on|off;</th></tr></thead><tbody><tr><td>默认值</td><td>gzip_vary off;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><p><img src="`+p+`" alt="1587361606028"></p><ol start="5"><li>gzip_buffers指令：该指令用于处理请求压缩的缓冲区数量和大小。</li></ol><table><thead><tr><th>语法</th><th>gzip_buffers number size;</th></tr></thead><tbody><tr><td>默认值</td><td>gzip_buffers 32 4k|16 8k;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><p>其中number:指定Nginx服务器向系统申请缓存空间个数，size指的是每个缓存空间的大小。主要实现的是申请number个每个大小为size的内存空间。这个值的设定一般会和服务器的操作系统有关，所以建议此项不设置，使用默认值即可。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gzip_buffers 4 16K;      #缓存空间大小
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6"><li>gzip_disable指令：针对不同种类客户端发起的请求，可以选择性地开启和关闭Gzip功能。</li></ol><table><thead><tr><th>语法</th><th>gzip_disable regex ...;</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><p>regex:根据客户端的浏览器标志(user-agent)来设置，支持使用正则表达式。指定的浏览器标志不使用Gzip.该指令一般是用来排除一些明显不支持Gzip的浏览器。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gzip_disable &quot;MSIE [1-6]\\.&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="7"><li>gzip_http_version指令：针对不同的HTTP协议版本，可以选择性地开启和关闭Gzip功能。</li></ol><table><thead><tr><th>语法</th><th>gzip_http_version 1.0|1.1;</th></tr></thead><tbody><tr><td>默认值</td><td>gzip_http_version 1.1;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><p>该指令是指定使用Gzip的HTTP最低版本，该指令一般采用默认值即可。</p><ol start="8"><li>gzip_min_length指令：该指令针对传输数据的大小，可以选择性地开启和关闭Gzip功能</li></ol><table><thead><tr><th>语法</th><th>gzip_min_length length;</th></tr></thead><tbody><tr><td>默认值</td><td>gzip_min_length 20;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nignx计量大小的单位：bytes[字节] / kb[千字节] / M[兆]
例如: 1024 / 10k|K / 10m|M
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Gzip压缩功能对大数据的压缩效果明显，但是如果要压缩的数据比较小的化，可能出现越压缩数据量越大的情况，因此我们需要根据响应内容的大小来决定是否使用Gzip功能，响应页面的大小可以通过头信息中的<code>Content-Length</code>来获取。但是如何使用了Chunk编码动态压缩，该指令将被忽略。建议设置为1K或以上。</p><ol start="9"><li>gzip_proxied指令：该指令设置是否对服务端返回的结果进行Gzip压缩。</li></ol><table><thead><tr><th>语法</th><th>gzip_proxied off|expired|no-cache|<br>no-store|private|no_last_modified|no_etag|auth|any;</th></tr></thead><tbody><tr><td>默认值</td><td>gzip_proxied off;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><ul><li>off - 关闭Nginx服务器对后台服务器返回结果的Gzip压缩</li><li>expired - 启用压缩，如果header头中包含 &quot;Expires&quot; 头信息</li><li>no-cache - 启用压缩，如果header头中包含 &quot;Cache-Control:no-cache&quot; 头信息</li><li>no-store - 启用压缩，如果header头中包含 &quot;Cache-Control:no-store&quot; 头信息</li><li>private - 启用压缩，如果header头中包含 &quot;Cache-Control:private&quot; 头信息</li><li>no_last_modified - 启用压缩,如果header头中不包含 &quot;Last-Modified&quot; 头信息</li><li>no_etag - 启用压缩 ,如果header头中不包含 &quot;ETag&quot; 头信息</li><li>auth - 启用压缩 , 如果header头中包含 &quot;Authorization&quot; 头信息</li><li>any - 无条件启用压缩</li></ul><h4 id="gzip压缩功能的实例配置" tabindex="-1"><a class="header-anchor" href="#gzip压缩功能的实例配置" aria-hidden="true">#</a> Gzip压缩功能的实例配置</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gzip on;                #开启gzip功能
gzip_types *;          #压缩源文件类型,根据具体的访问资源类型设定
gzip_comp_level 6;      #gzip压缩级别
gzip_min_length 1024; #进行压缩响应页面的最小长度,content-length
gzip_buffers 4 16K;      #缓存空间大小
gzip_http_version 1.1; #指定压缩响应所需要的最低HTTP请求版本
gzip_vary  on;          #往头信息中添加压缩标识
gzip_disable &quot;MSIE [1-6]\\.&quot;; #对IE6以下的版本都不进行压缩
gzip_proxied  off； #nginx作为反向代理压缩服务端返回数据的条件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些配置在很多地方可能都会用到，所以我们可以将这些内容抽取到一个配置文件中，然后通过include指令把配置文件再次加载到nginx.conf配置文件中，方法使用。</p><p>nginx_gzip.conf</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>gzip on;
gzip_types *;
gzip_comp_level 6;
gzip_min_length 1024;
gzip_buffers 4 16K;
gzip_http_version 1.1;
gzip_vary  on;
gzip_disable &quot;MSIE [1-6]\\.&quot;;
gzip_proxied  off;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>nginx.conf</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>include nginx_gzip.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="gzip和sendfile共存问题" tabindex="-1"><a class="header-anchor" href="#gzip和sendfile共存问题" aria-hidden="true">#</a> Gzip和sendfile共存问题</h4><p>前面在讲解sendfile的时候，提到过，开启sendfile以后，在读取磁盘上的静态资源文件的时候，可以减少拷贝的次数，可以不经过用户进程将静态文件通过网络设备发送出去，但是Gzip要想对资源压缩，是需要经过用户进程进行操作的。所以如何解决两个设置的共存问题。</p><p>可以使用ngx_http_gzip_static_module模块的gzip_static指令来解决。</p><h5 id="gzip-static指令" tabindex="-1"><a class="header-anchor" href="#gzip-static指令" aria-hidden="true">#</a> gzip_static指令</h5><p>gzip_static: 检查与访问资源同名的.gz文件时，response中以gzip相关的header返回.gz文件的内容。</p><table><thead><tr><th>语法</th><th><strong>gzip_static</strong> on | off | always;</th></tr></thead><tbody><tr><td>默认值</td><td>gzip_static off;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><p>添加上述命令后，会报一个错误，<code>unknown directive &quot;gzip_static&quot;</code>主要的原因是Nginx默认是没有添加ngx_http_gzip_static_module模块。如何来添加?</p><h5 id="添加模块到nginx的实现步骤" tabindex="-1"><a class="header-anchor" href="#添加模块到nginx的实现步骤" aria-hidden="true">#</a> 添加模块到Nginx的实现步骤</h5><p>(1)查询当前Nginx的配置参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nginx -V
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(2)将nginx安装目录下sbin目录中的nginx二进制文件进行更名</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /usr/local/nginx/sbin
mv nginx nginxold
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>(3) 进入Nginx的安装目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /root/nginx/core/nginx-1.16.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(4)执行make clean清空之前编译的内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>make clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(5)使用configure来配置参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./configure --with-http_gzip_static_module
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(6)使用make命令进行编译</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>make
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(7) 将objs目录下的nginx二进制执行文件移动到nginx安装目录下的sbin目录中</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mv objs/nginx /usr/local/nginx/sbin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(8)执行更新命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>make upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="gzip-static测试使用" tabindex="-1"><a class="header-anchor" href="#gzip-static测试使用" aria-hidden="true">#</a> gzip_static测试使用</h5><p>(1)直接访问<code>http://192.168.200.133/jquery.js</code></p><p><img src="`+m+`" alt="1587932106429"></p><p>(2)使用gzip命令进行压缩</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /usr/local/nginx/html
gzip jquery.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>(3)再次访问<code>http://192.168.200.133/jquery.js</code></p><p><img src="`+b+`" alt="1587932300006"></p><h3 id="静态资源的缓存处理" tabindex="-1"><a class="header-anchor" href="#静态资源的缓存处理" aria-hidden="true">#</a> 静态资源的缓存处理</h3><h4 id="什么是缓存" tabindex="-1"><a class="header-anchor" href="#什么是缓存" aria-hidden="true">#</a> 什么是缓存</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>缓存（cache），原始意义是指访问速度比一般随机存取存储器（RAM）快的一种高速存储器，通常它不像系统主存那样使用DRAM技术，而使用昂贵但较快速的SRAM技术。缓存的设置是所有现代计算机系统发挥高性能的重要因素之一。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="什么是web缓存" tabindex="-1"><a class="header-anchor" href="#什么是web缓存" aria-hidden="true">#</a> 什么是web缓存</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Web缓存是指一个Web资源（如html页面，图片，js，数据等）存在于Web服务器和客户端（浏览器）之间的副本。缓存会根据进来的请求保存输出内容的副本；当下一个请求来到的时候，如果是相同的URL，缓存会根据缓存机制决定是直接使用副本响应访问请求，还是向源服务器再次发送请求。比较常见的就是浏览器会缓存访问过网站的网页，当再次访问这个URL地址的时候，如果网页没有更新，就不会再次下载网页，而是直接使用本地缓存的网页。只有当网站明确标识资源已经更新，浏览器才会再次下载网页
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="web缓存的种类" tabindex="-1"><a class="header-anchor" href="#web缓存的种类" aria-hidden="true">#</a> web缓存的种类</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>客户端缓存
    浏览器缓存
服务端缓存
    Nginx / Redis / Memcached等
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="浏览器缓存" tabindex="-1"><a class="header-anchor" href="#浏览器缓存" aria-hidden="true">#</a> 浏览器缓存</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>是为了节约网络的资源加速浏览，浏览器在用户磁盘上对最近请求过的文档进行存储，当访问者再次请求这个页面时，浏览器就可以从本地磁盘显示文档，这样就可以加速页面的阅览.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="为什么要用浏览器缓存" tabindex="-1"><a class="header-anchor" href="#为什么要用浏览器缓存" aria-hidden="true">#</a> 为什么要用浏览器缓存</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>成本最低的一种缓存实现
减少网络带宽消耗
降低服务器压力
减少网络延迟，加快页面打开速度
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="浏览器缓存的执行流程" tabindex="-1"><a class="header-anchor" href="#浏览器缓存的执行流程" aria-hidden="true">#</a> 浏览器缓存的执行流程</h4><p>HTTP协议中和页面缓存相关的字段，我们先来认识下：</p><table><thead><tr><th>header</th><th>说明</th></tr></thead><tbody><tr><td>Expires</td><td>缓存过期的日期和时间</td></tr><tr><td>Cache-Control</td><td>设置和缓存相关的配置信息</td></tr><tr><td>Last-Modified</td><td>请求资源最后修改时间</td></tr><tr><td>ETag</td><td>请求变量的实体标签的当前值，比如文件的MD5值</td></tr></tbody></table><p><img src="`+h+`" alt=""></p><p>（1）用户首次通过浏览器发送请求到服务端获取数据，客户端是没有对应的缓存，所以需要发送request请求来获取数据；</p><p>（2）服务端接收到请求后，获取服务端的数据及服务端缓存的允许后，返回200的成功状态码并且在响应头上附上对应资源以及缓存信息；</p><p>（3）当用户再次访问相同资源的时候，客户端会在浏览器的缓存目录中查找是否存在响应的缓存文件</p><p>（4）如果没有找到对应的缓存文件，则走(2)步</p><p>（5）如果有缓存文件，接下来对缓存文件是否过期进行判断，过期的判断标准是(Expires),</p><p>（6）如果没有过期，则直接从本地缓存中返回数据进行展示</p><p>（7）如果Expires过期，接下来需要判断缓存文件是否发生过变化</p><p>（8）判断的标准有两个，一个是ETag(Entity Tag),一个是Last-Modified</p><p>（9）判断结果是未发生变化，则服务端返回304，直接从缓存文件中获取数据</p><p>（10）如果判断是发生了变化，重新从服务端获取数据，并根据缓存协商(服务端所设置的是否需要进行缓存数据的设置)来进行数据缓存。</p><h4 id="浏览器缓存相关指令" tabindex="-1"><a class="header-anchor" href="#浏览器缓存相关指令" aria-hidden="true">#</a> 浏览器缓存相关指令</h4><p>Nginx需要进行缓存相关设置，就需要用到如下的指令</p><h5 id="expires指令" tabindex="-1"><a class="header-anchor" href="#expires指令" aria-hidden="true">#</a> expires指令</h5><p>expires:该指令用来控制页面缓存的作用。可以通过该指令控制HTTP应答中的“Expires&quot;和”Cache-Control&quot;</p><table><thead><tr><th>语法</th><th>expires [modified] time<br>expires epoch|max|off;</th></tr></thead><tbody><tr><td>默认值</td><td>expires off;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><p>time:可以整数也可以是负数，指定过期时间，如果是负数，Cache-Control则为no-cache,如果为整数或0，则Cache-Control的值为max-age=time;</p><p>epoch: 指定Expires的值为&#39;1 January,1970,00:00:01 GMT&#39;(1970-01-01 00:00:00)，Cache-Control的值no-cache</p><p>max:指定Expires的值为&#39;31 December2037 23:59:59GMT&#39; (2037-12-31 23:59:59) ，Cache-Control的值为10年</p><p>off:默认不缓存。</p><h5 id="add-header指令" tabindex="-1"><a class="header-anchor" href="#add-header指令" aria-hidden="true">#</a> add_header指令</h5><p>add_header指令是用来添加指定的响应头和响应值。</p><table><thead><tr><th>语法</th><th>add_header name value [always];</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>http、server、location...</td></tr></tbody></table><p>Cache-Control作为响应头信息，可以设置如下值：</p><p>缓存响应指令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Cache-control: must-revalidate
Cache-control: no-cache
Cache-control: no-store
Cache-control: no-transform
Cache-control: public
Cache-control: private
Cache-control: proxy-revalidate
Cache-Control: max-age=&lt;seconds&gt;
Cache-control: s-maxage=&lt;seconds&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>指令</th><th>说明</th></tr></thead><tbody><tr><td>must-revalidate</td><td>可缓存但必须再向源服务器进行确认</td></tr><tr><td>no-cache</td><td>缓存前必须确认其有效性</td></tr><tr><td>no-store</td><td>不缓存请求或响应的任何内容</td></tr><tr><td>no-transform</td><td>代理不可更改媒体类型</td></tr><tr><td>public</td><td>可向任意方提供响应的缓存</td></tr><tr><td>private</td><td>仅向特定用户返回响应</td></tr><tr><td>proxy-revalidate</td><td>要求中间缓存服务器对缓存的响应有效性再进行确认</td></tr><tr><td>max-age=&lt;秒&gt;</td><td>响应最大Age值</td></tr><tr><td>s-maxage=&lt;秒&gt;</td><td>公共缓存服务器响应的最大Age值</td></tr></tbody></table><p>max-age=[秒]：</p><h3 id="nginx的跨域问题解决" tabindex="-1"><a class="header-anchor" href="#nginx的跨域问题解决" aria-hidden="true">#</a> Nginx的跨域问题解决</h3><p>这块内容，我们主要从以下方面进行解决：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>什么情况下会出现跨域问题?
实例演示跨域问题
具体的解决方案是什么?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="同源策略" tabindex="-1"><a class="header-anchor" href="#同源策略" aria-hidden="true">#</a> 同源策略</h4><p>浏览器的同源策略：是一种约定，是浏览器最核心也是最基本的安全功能，如果浏览器少了同源策略，则浏览器的正常功能可能都会受到影响。</p><p>同源: 协议、域名(IP)、端口相同即为同源</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://192.168.200.131/user/1
https://192.168.200.131/user/1
不

http://192.168.200.131/user/1
http://192.168.200.132/user/1
不

http://192.168.200.131/user/1
http://192.168.200.131:8080/user/1
不

http://www.nginx.com/user/1
http://www.nginx.org/user/1
不

http://192.168.200.131/user/1
http://192.168.200.131:8080/user/1
不

http://www.nginx.org:80/user/1
http://www.nginx.org/user/1
满足
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="跨域问题" tabindex="-1"><a class="header-anchor" href="#跨域问题" aria-hidden="true">#</a> 跨域问题</h4><p>简单描述下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>有两台服务器分别为A,B,如果从服务器A的页面发送异步请求到服务器B获取数据，如果服务器A和服务器B不满足同源策略，则就会出现跨域问题。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="跨域问题的案例演示" tabindex="-1"><a class="header-anchor" href="#跨域问题的案例演示" aria-hidden="true">#</a> 跨域问题的案例演示</h4><p>出现跨域问题会有什么效果?,接下来通过一个需求来给大家演示下：</p><p><img src="`+g+`" alt="">（1）nginx的html目录下新建一个a.html</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>跨域问题演示<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>jquery.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
            <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#btn&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                        $<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;http://192.168.200.133:8080/getUser&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                                <span class="token function">alert</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>获取数据<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）在nginx.conf配置如下内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server{
        listen  8080;
        server_name localhost;
        location /getUser{
                default_type application/json;
                return 200 &#39;{&quot;id&quot;:1,&quot;name&quot;:&quot;TOM&quot;,&quot;age&quot;:18}&#39;;
        }
}
server{
    listen     80;
    server_name localhost;
    location /{
        root html;
        index index.html;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(3)通过浏览器访问测试</p><p><img src="`+x+`" alt="1588004913681"></p><h4 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h4><p>使用add_header指令，该指令可以用来添加一些头信息</p><table><thead><tr><th>语法</th><th>add_header name value...</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><p>此处用来解决跨域问题，需要添加两个头信息，一个是<code>Access-Control-Allow-Origin</code>,<code>Access-Control-Allow-Methods</code></p><p>Access-Control-Allow-Origin: 直译过来是允许跨域访问的源地址信息，可以配置多个(多个用逗号分隔)，也可以使用<code>*</code>代表所有源</p><p>Access-Control-Allow-Methods:直译过来是允许跨域访问的请求方式，值可以为 GET POST PUT DELETE...,可以全部设置，也可以根据需要设置，多个用逗号分隔</p><p>具体配置方式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location /getUser{
    add_header Access-Control-Allow-Origin *;
    add_header Access-Control-Allow-Methods GET,POST,PUT,DELETE;
    default_type application/json;
    return 200 &#39;{&quot;id&quot;:1,&quot;name&quot;:&quot;TOM&quot;,&quot;age&quot;:18}&#39;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="静态资源防盗链" tabindex="-1"><a class="header-anchor" href="#静态资源防盗链" aria-hidden="true">#</a> 静态资源防盗链</h3><h4 id="什么是资源盗链" tabindex="-1"><a class="header-anchor" href="#什么是资源盗链" aria-hidden="true">#</a> 什么是资源盗链</h4><p>资源盗链指的是此内容不在自己服务器上，而是通过技术手段，绕过别人的限制将别人的内容放到自己页面上最终展示给用户。以此来盗取大网站的空间和流量。简而言之就是用别人的东西成就自己的网站。</p><p>效果演示</p>`,223),B={href:"https://img14.360buyimg.com/n7/jfs/t1/101062/37/2153/254169/5dcbd410E6d10ba22/4ddbd212be225fcd.jpg",target:"_blank",rel:"noopener noreferrer"},$={href:"https://pics7.baidu.com/feed/cf1b9d16fdfaaf516f7e2011a7cda1e8f11f7a1a.jpeg?token=551979a23a0995e5e5279b8fa1a48b34&s=BD385394D2E963072FD48543030030BB",target:"_blank",rel:"noopener noreferrer"},N=a('<p>我们自己准备一个页面，在页面上引入这两个图片查看效果</p><p><img src="'+_+'" alt=""></p><p>从上面的效果，可以看出来，下面的图片地址添加了防止盗链的功能，京东这边我们可以直接使用其图片。</p><h4 id="nginx防盗链的实现原理" tabindex="-1"><a class="header-anchor" href="#nginx防盗链的实现原理" aria-hidden="true">#</a> Nginx防盗链的实现原理：</h4><p>了解防盗链的原理之前，我们得先学习一个HTTP的头信息Referer,当浏览器向web服务器发送请求的时候，一般都会带上Referer,来告诉浏览器该网页是从哪个页面链接过来的。</p><p><img src="'+f+'" alt=""></p><p>后台服务器可以根据获取到的这个Referer信息来判断是否为自己信任的网站地址，如果是则放行继续访问，如果不是则可以返回403(服务端拒绝访问)的状态信息。</p><p>在本地模拟上述的服务器效果：</p><p><img src="'+w+`" alt=""></p><p>Nginx防盗链的具体实现:</p><p>valid_referers:nginx会通就过查看referer自动和valid_referers后面的内容进行匹配，如果匹配到了就将$invalid_referer变量置0，如果没有匹配到，则将$invalid_referer变量置为1，匹配的过程中不区分大小写。</p><table><thead><tr><th>语法</th><th>valid_referers none|blocked|server_names|string...</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>server、location</td></tr></tbody></table><p>none: 如果Header中的Referer为空，允许访问</p><p>blocked:在Header中的Referer不为空，但是该值被防火墙或代理进行伪装过，如不带&quot;http://&quot; 、&quot;https://&quot;等协议头的资源允许访问。</p><p>server_names:指定具体的域名或者IP</p><p>string: 可以支持正则表达式和*的字符串。如果是正则表达式，需要以<code>~</code>开头表示，例如</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location ~*\\.(png|jpg|gif){
           valid_referers none blocked www.baidu.com 192.168.200.222 *.example.com example.*  www.example.org  ~\\.google\\.;
           if ($invalid_referer){
                return 403;
           }
           root /usr/local/nginx/html;

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>遇到的问题:图片有很多，该如何批量进行防盗链？</p><h4 id="针对目录进行防盗链" tabindex="-1"><a class="header-anchor" href="#针对目录进行防盗链" aria-hidden="true">#</a> 针对目录进行防盗链</h4><p>配置如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location /images {
           valid_referers none blocked www.baidu.com 192.168.200.222 *.example.com example.*  www.example.org  ~\\.google\\.;
           if ($invalid_referer){
                return 403;
           }
           root /usr/local/nginx/html;

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样我们可以对一个目录下的所有资源进行翻到了操作。</p><p>遇到的问题：Referer的限制比较粗，比如随意加一个Referer，上面的方式是无法进行限制的。那么这个问题改如何解决？</p><p>此处我们需要用到Nginx的第三方模块<code>ngx_http_accesskey_module</code>，第三方模块如何实现盗链，如果在Nginx中使用第三方模块的功能，这些我们在后面的Nginx的模块篇再进行详细的讲解。</p><h3 id="rewrite功能配置" tabindex="-1"><a class="header-anchor" href="#rewrite功能配置" aria-hidden="true">#</a> Rewrite功能配置</h3><p>Rewrite是Nginx服务器提供的一个重要基本功能，是Web服务器产品中几乎必备的功能。主要的作用是用来实现URL的重写。</p><p>注意:Nginx服务器的Rewrite功能的实现依赖于PCRE的支持，因此在编译安装Nginx服务器之前，需要安装PCRE库。Nginx使用的是ngx_http_rewrite_module模块来解析和处理Rewrite功能的相关配置。</p><h4 id="地址重写-与-地址转发" tabindex="-1"><a class="header-anchor" href="#地址重写-与-地址转发" aria-hidden="true">#</a> &quot;地址重写&quot;与&quot;地址转发&quot;</h4><p>重写和转发的区别:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>地址重写浏览器地址会发生变化而地址转发则不变
一次地址重写会产生两次请求而一次地址转发只会产生一次请求
地址重写到的页面必须是一个完整的路径而地址转发则不需要
地址重写因为是两次请求所以request范围内属性不能传递给新页面而地址转发因为是一次请求所以可以传递值
地址转发速度快于地址重写
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="rewrite规则" tabindex="-1"><a class="header-anchor" href="#rewrite规则" aria-hidden="true">#</a> Rewrite规则</h4><h4 id="set指令" tabindex="-1"><a class="header-anchor" href="#set指令" aria-hidden="true">#</a> set指令</h4><p>该指令用来设置一个新的变量。</p><table><thead><tr><th>语法</th><th>set $variable value;</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>server、location、if</td></tr></tbody></table><p>variable:变量的名称，该变量名称要用&quot;$&quot;作为变量的第一个字符，且不能与Nginx服务器预设的全局变量同名。</p><p>value:变量的值，可以是字符串、其他变量或者变量的组合等。</p><h4 id="rewrite常用全局变量" tabindex="-1"><a class="header-anchor" href="#rewrite常用全局变量" aria-hidden="true">#</a> Rewrite常用全局变量</h4>`,37),j=e("thead",null,[e("tr",null,[e("th",null,"变量"),e("th",null,"说明")])],-1),R=e("td",null,"$args",-1),T={href:"http://192.168.200.133:8080?arg1=value1&args2=value2%E4%B8%AD%E7%9A%84%22arg1=value1&arg2=value2%22%EF%BC%8C%E5%8A%9F%E8%83%BD%E5%92%8C$query_string%E4%B8%80%E6%A0%B7",target:"_blank",rel:"noopener noreferrer"},D=e("tr",null,[e("td",null,"$http_user_agent"),e("td",null,"变量存储的是用户访问服务的代理信息(如果通过浏览器访问，记录的是浏览器的相关版本信息)")],-1),U=e("tr",null,[e("td",null,"$host"),e("td",null,"变量存储的是访问服务器的server_name值")],-1),I=e("td",null,"$document_uri",-1),P={href:"http://192.168.200.133/server?id=10&name=zhangsan%E4%B8%AD%E7%9A%84%22/server%22%EF%BC%8C%E5%8A%9F%E8%83%BD%E5%92%8C$uri%E4%B8%80%E6%A0%B7",target:"_blank",rel:"noopener noreferrer"},F=e("tr",null,[e("td",null,"$document_root"),e("td",null,"变量存储的是当前请求对应location的root值，如果未设置，默认指向Nginx自带html目录所在位置")],-1),L=e("tr",null,[e("td",null,"$content_length"),e("td",null,"变量存储的是请求头中的Content-Length的值")],-1),M=e("tr",null,[e("td",null,"$content_type"),e("td",null,"变量存储的是请求头中的Content-Type的值")],-1),G=e("tr",null,[e("td",null,"$http_cookie"),e("td",null,"变量存储的是客户端的cookie信息，可以通过add_header Set-Cookie 'cookieName=cookieValue'来添加cookie数据")],-1),S=e("tr",null,[e("td",null,"$limit_rate"),e("td",null,"变量中存储的是Nginx服务器对网络连接速率的限制，也就是Nginx配置中对limit_rate指令设置的值，默认是0，不限制。")],-1),O=e("tr",null,[e("td",null,"$remote_addr"),e("td",null,"变量中存储的是客户端的IP地址")],-1),H=e("tr",null,[e("td",null,"$remote_port"),e("td",null,"变量中存储了客户端与服务端建立连接的端口号")],-1),V=e("tr",null,[e("td",null,"$remote_user"),e("td",null,"变量中存储了客户端的用户名，需要有认证模块才能获取")],-1),K=e("tr",null,[e("td",null,"$scheme"),e("td",null,"变量中存储了访问协议")],-1),W=e("tr",null,[e("td",null,"$server_addr"),e("td",null,"变量中存储了服务端的地址")],-1),J=e("tr",null,[e("td",null,"$server_name"),e("td",null,"变量中存储了客户端请求到达的服务器的名称")],-1),Y=e("tr",null,[e("td",null,"$server_port"),e("td",null,"变量中存储了客户端请求到达服务器的端口号")],-1),Q=e("tr",null,[e("td",null,"$server_protocol"),e("td",null,'变量中存储了客户端请求协议的版本，比如"HTTP/1.1"')],-1),X=e("tr",null,[e("td",null,"$request_body_file"),e("td",null,"变量中存储了发给后端服务器的本地文件资源的名称")],-1),Z=e("tr",null,[e("td",null,"$request_method"),e("td",null,'变量中存储了客户端的请求方式，比如"GET","POST"等')],-1),ee=e("tr",null,[e("td",null,"$request_filename"),e("td",null,"变量中存储了当前请求的资源文件的路径名")],-1),ne=e("td",null,"$request_uri",-1),te={href:"http://192.168.200.133/server?id=10&name=zhangsan%E4%B8%AD%E7%9A%84%22/server?id=10&name=zhangsan%22",target:"_blank",rel:"noopener noreferrer"},ie=e("h4",{id:"if指令",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#if指令","aria-hidden":"true"},"#"),n(" if指令")],-1),ae=e("p",null,"该指令用来支持条件判断，并根据条件判断结果选择不同的Nginx配置。",-1),se=e("table",null,[e("thead",{"css-module":"."},[e("tr",null,[e("th",null,"语法"),e("th",null,"if (condition)")])]),e("tbody",null,[e("tr",null,[e("td",null,"默认值"),e("td",null,"—")]),e("tr",null,[e("td",null,"位置"),e("td",null,"server、location")])])],-1),de=a(`<p>condition为判定条件，可以支持以下写法：</p><ol><li>变量名。如果变量名对应的值为空或者是0，if都判断为false,其他条件为true。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if ($param){

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2. 使用&quot;=&quot;和&quot;!=&quot;比较变量和字符串是否相等，满足条件为true，不满足为false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if ($request_method = POST){
    return 405;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：此处和Java不太一样的地方是字符串不需要添加引号。</p><ol start="3"><li><p>使用正则表达式对变量进行匹配，匹配成功返回true，否则返回false。变量与正则表达式之间使用&quot;<sub>&quot;,&quot;</sub>*&quot;,&quot;!<sub>&quot;,&quot;!</sub>*&quot;来连接。</p><p>&quot;~&quot;代表匹配正则表达式过程中区分大小写，</p><p>&quot;~*&quot;代表匹配正则表达式过程中不区分大小写</p><p>&quot;!<sub>&quot;和&quot;!</sub>*&quot;刚好和上面取相反值，如果匹配上返回false,匹配不上返回true</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if ($http_user_agent ~ MSIE){
    #$http_user_agent的值中是否包含MSIE字符串，如果包含返回true
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：正则表达式字符串一般不需要加引号，但是如果字符串中包含&quot;}&quot;或者是&quot;;&quot;等字符时，就需要把引号加上。</p><ol start="4"><li><p>判断请求的文件是否存在使用&quot;-f&quot;和&quot;!-f&quot;,</p><p>当使用&quot;-f&quot;时，如果请求的文件存在返回true，不存在返回false。</p><p>当使用&quot;!f&quot;时，如果请求文件不存在，但该文件所在目录存在返回true,文件和目录都不存在返回false,如果文件存在返回false</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if (-f $request_filename){
    #判断请求的文件是否存在
}
if (!-f $request_filename){
    #判断请求的文件是否不存在
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li><p>判断请求的目录是否存在使用&quot;-d&quot;和&quot;!-d&quot;,</p><p>当使用&quot;-d&quot;时，如果请求的目录存在，if返回true，如果目录不存在则返回false</p><p>当使用&quot;!-d&quot;时，如果请求的目录不存在但该目录的上级目录存在则返回true，该目录和它上级目录都不存在则返回false,如果请求目录存在也返回false.</p></li><li><p>判断请求的目录或者文件是否存在使用&quot;-e&quot;和&quot;!-e&quot;</p><p>当使用&quot;-e&quot;,如果请求的目录或者文件存在时，if返回true,否则返回false.</p><p>当使用&quot;!-e&quot;,如果请求的文件和文件所在路径上的目录都不存在返回true,否则返回false</p></li><li><p>判断请求的文件是否可执行使用&quot;-x&quot;和&quot;!-x&quot;</p><p>当使用&quot;-x&quot;,如果请求的文件可执行，if返回true,否则返回false</p><p>当使用&quot;!-x&quot;,如果请求文件不可执行，返回true,否则返回false</p></li></ol><h4 id="break指令" tabindex="-1"><a class="header-anchor" href="#break指令" aria-hidden="true">#</a> break指令</h4><p>该指令用于中断当前相同作用域中的其他Nginx配置。与该指令处于同一作用域的Nginx配置中，位于它前面的指令配置生效，位于后面的指令配置无效。</p><table><thead><tr><th>语法</th><th>break;</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>server、location、if</td></tr></tbody></table><p>例子:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location /{
    if ($param){
        set $id $1;
        break;
        limit_rate 10k;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="return指令" tabindex="-1"><a class="header-anchor" href="#return指令" aria-hidden="true">#</a> return指令</h4><p>该指令用于完成对请求的处理，直接向客户端返回响应状态代码。在return后的所有Nginx配置都是无效的。</p><table><thead><tr><th>语法</th><th>return code [text];<br>return code URL;<br>return URL;</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>server、location、if</td></tr></tbody></table><p>code:为返回给客户端的HTTP状态代理。可以返回的状态代码为0~999的任意HTTP状态代理</p><p>text:为返回给客户端的响应体内容，支持变量的使用</p><p>URL:为返回给客户端的URL地址</p><h4 id="rewrite指令" tabindex="-1"><a class="header-anchor" href="#rewrite指令" aria-hidden="true">#</a> rewrite指令</h4><p>该指令通过正则表达式的使用来改变URI。可以同时存在一个或者多个指令，按照顺序依次对URL进行匹配和处理。</p><p>URL和URI的区别：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>URI:统一资源标识符
URL:统一资源定位符
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>语法</th><th>rewrite regex replacement [flag];</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>server、location、if</td></tr></tbody></table><p>regex:用来匹配URI的正则表达式</p><p>replacement:匹配成功后，用于替换URI中被截取内容的字符串。如果该字符串是以&quot;http://&quot;或者&quot;https://&quot;开头的，则不会继续向下对URI进行其他处理，而是直接返回重写后的URI给客户端。</p><p>flag:用来设置rewrite对URI的处理行为，可选值有如下：</p><ul><li>last:</li><li>break</li><li>redirect</li><li>permanent</li></ul><p><strong>rewrite 最后一项flag参数：</strong></p><table><thead><tr><th style="text-align:left;">标记符号</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">last</td><td style="text-align:left;">本条规则匹配完成后继续向下匹配新的location URI规则</td></tr><tr><td style="text-align:left;">break</td><td style="text-align:left;">本条规则匹配完成后终止，不在匹配任何规则</td></tr><tr><td style="text-align:left;">redirect</td><td style="text-align:left;">返回302临时重定向</td></tr><tr><td style="text-align:left;">permanent</td><td style="text-align:left;">返回301永久重定向</td></tr></tbody></table><h4 id="rewrite-log指令" tabindex="-1"><a class="header-anchor" href="#rewrite-log指令" aria-hidden="true">#</a> rewrite_log指令</h4><p>该指令配置是否开启URL重写日志的输出功能。</p><table><thead><tr><th>语法</th><th>rewrite_log on|off;</th></tr></thead><tbody><tr><td>默认值</td><td>rewrite_log off;</td></tr><tr><td>位置</td><td>http、server、location、if</td></tr></tbody></table><p>开启后，URL重写的相关日志将以notice级别输出到error_log指令配置的日志文件汇总。</p><h3 id="rewrite的案例" tabindex="-1"><a class="header-anchor" href="#rewrite的案例" aria-hidden="true">#</a> Rewrite的案例</h3><h4 id="域名跳转" tabindex="-1"><a class="header-anchor" href="#域名跳转" aria-hidden="true">#</a> 域名跳转</h4><p>》问题分析</p>`,41),le=e("code",null,"www.jd.com",-1),re=e("code",null,"www.360buy.com",-1),ce={href:"http://xn--www-w48dncyev1bq7fw6d70b44jz5j4kd0qj8rhqpcd0trr5az4ama9098f7p5f.360buy.com",target:"_blank",rel:"noopener noreferrer"},oe={href:"http://xn--www-0h9dlb801dguajcf733ef2c1t1a6tmysbxwf4x7h3yen6qvr1bmz3g.jd.com",target:"_blank",rel:"noopener noreferrer"},ue=e("p",null,"》环境准备",-1),ve={href:"http://www.360buy.com",target:"_blank",rel:"noopener noreferrer"},pe={href:"http://www.jd.com",target:"_blank",rel:"noopener noreferrer"},me=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vim /etc/hosts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>192.168.200.133 www.360buy.com
192.168.200.133 www.jd.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在/usr/local/nginx/html/hm目录下创建一个访问页面</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;html&gt;
    &lt;title&gt;&lt;/title&gt;
    &lt;body&gt;
        &lt;h1&gt;欢迎来到我们的网站&lt;/h1&gt;
    &lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>通过Nginx实现当访问www.访问到系统的首页</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen 80;
    server_name www.hm.com;
    location /{
        root /usr/local/nginx/html/hm;
        index index.html;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),be={href:"http://xn--Rewritewww-uk3sy9bh26b7i0mt9a.360buy.xn--comwww-rr3jj63oikt462cytej3e.jd.com",target:"_blank",rel:"noopener noreferrer"},he=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen 80;
    server_name www.360buy.com;
    rewrite ^/ http://www.jd.com permanent;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>问题描述:如何在域名跳转的过程中携带请求的URI？</p><p>修改配置信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen 80;
    server_name www.itheima.com;
    rewrite ^(.*) http://www.hm.com$1 permanent;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>问题描述:我们除了上述说的www.jd.com 、www.360buy.com其实还有我们也可以通过www.jingdong.com来访问，那么如何通过Rewrite来实现多个域名的跳转?</p><p>添加域名</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vim /etc/hosts
192.168.200.133 www.jingdong.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改配置信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server{
    listen 80;
    server_name www.360buy.com www.jingdong.com;
    rewrite ^(.*) http://www.jd.com$1 permanent;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="域名镜像" tabindex="-1"><a class="header-anchor" href="#域名镜像" aria-hidden="true">#</a> 域名镜像</h4>`,10),ge={href:"http://xn--www-zr0f.360buy.com",target:"_blank",rel:"noopener noreferrer"},xe={href:"http://www.jingdong.xn--comwww-rr3j0502ahnyazcd7uf.jd.com",target:"_blank",rel:"noopener noreferrer"},_e=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen 80;
    server_name rewrite.myweb.com;
    location ^~ /source1{
        rewrite ^/resource1(.*) http://rewrite.myweb.com/web$1 last;
    }
    location ^~ /source2{
        rewrite ^/resource2(.*) http://rewrite.myweb.com/web$1 last;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="独立域名" tabindex="-1"><a class="header-anchor" href="#独立域名" aria-hidden="true">#</a> 独立域名</h4><p>一个完整的项目包含多个模块，比如购物网站有商品商品搜索模块、商品详情模块已经购物车模块等，那么我们如何为每一个模块设置独立的域名。</p><p>需求：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://search.hm.com  访问商品搜索模块
http://item.hm.com      访问商品详情模块
http://cart.hm.com      访问商品购物车模块
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server{
    listen 80;
    server_name search.hm.com;
    rewrite ^(.*) http://www.hm.com/bbs$1 last;
}
server{
    listen 81;
    server_name item.hm.com;
    rewrite ^(.*) http://www.hm.com/item$1 last;
}
server{
    listen 82;
    server_name cart.hm.com;
    rewrite ^(.*) http://www.hm.com/cart$1 last;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="目录自动添加" tabindex="-1"><a class="header-anchor" href="#目录自动添加" aria-hidden="true">#</a> 目录自动添加&quot;/&quot;</h4><p>问题描述</p><p>通过一个例子来演示下问题:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen    80;
    server_name localhost;
    location / {
        root html;
        index index.html;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),fe={href:"http://192.168.200.xn--133-zw0f124am92a4xorjun4u",target:"_blank",rel:"noopener noreferrer"},we=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen    80;
    server_name localhost;
    location /hm {
        root html;
        index index.html;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Ee={href:"http://192.168.200.133/hm/%E6%9D%A5%E8%AE%BF%E9%97%AE,%E4%BD%86%E6%98%AF%E5%A6%82%E6%9E%9C%E5%9C%B0%E5%9D%80%E5%90%8E%E9%9D%A2%E4%B8%8D%E5%8A%A0%E6%96%9C%E6%9D%A0%EF%BC%8C%E9%A1%B5%E9%9D%A2%E5%B0%B1%E4%BC%9A%E5%87%BA%E9%97%AE%E9%A2%98%E3%80%82%E5%A6%82%E6%9E%9C%E4%B8%8D%E5%8A%A0%E6%96%9C%E6%9D%A0%EF%BC%8CNginx%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%86%85%E9%83%A8%E4%BC%9A%E8%87%AA%E5%8A%A8%E5%81%9A%E4%B8%80%E4%B8%AA301%E7%9A%84%E9%87%8D%E5%AE%9A%E5%90%91%EF%BC%8C%E9%87%8D%E5%AE%9A%E5%90%91%E7%9A%84%E5%9C%B0%E5%9D%80%E4%BC%9A%E6%9C%89%E4%B8%80%E4%B8%AA%E6%8C%87%E4%BB%A4%E5%8F%ABserver_name_in_redirect",target:"_blank",rel:"noopener noreferrer"},ke=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>如果该指令为on
    重定向的地址为:  http://server_name/目录名/;
如果该指令为off
    重定向的地址为:  http://原URL中的域名/目录名/;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),qe={href:"http://192.168.200.133/hm%E5%A6%82%E6%9E%9C%E4%B8%8D%E5%8A%A0%E6%96%9C%E6%9D%A0%EF%BC%8C%E9%82%A3%E4%B9%88%E6%8C%89%E7%85%A7%E4%B8%8A%E8%BF%B0%E8%A7%84%E5%88%99%EF%BC%8C%E5%A6%82%E6%9E%9C%E6%8C%87%E4%BB%A4server_name_in_redirect%E4%B8%BAon%EF%BC%8C%E5%88%99301%E9%87%8D%E5%AE%9A%E5%90%91%E5%9C%B0%E5%9D%80%E5%8F%98%E4%B8%BA",target:"_blank",rel:"noopener noreferrer"},ye={href:"http://localhost/hm/,%E5%A6%82%E6%9E%9C%E4%B8%BAoff%EF%BC%8C%E5%88%99301%E9%87%8D%E5%AE%9A%E5%90%91%E5%9C%B0%E5%9D%80%E5%8F%98%E4%B8%BAhttp://192.168.200.133/ht/%E3%80%82%E5%90%8E%E9%9D%A2%E8%BF%99%E4%B8%AA%E6%98%AF%E6%AD%A3%E5%B8%B8%E7%9A%84%EF%BC%8C%E5%89%8D%E9%9D%A2%E5%9C%B0%E5%9D%80%E5%B0%B1%E6%9C%89%E9%97%AE%E9%A2%98%E3%80%82",target:"_blank",rel:"noopener noreferrer"},ze=a(`<p>注意server_name_in_redirect指令在Nginx的0.8.48版本之前默认都是on，之后改成了off,所以现在我们这个版本不需要考虑这个问题，但是如果是0.8.48以前的版本并且server_name_in_redirect设置为on，我们如何通过rewrite来解决这个问题？</p><p>解决方案</p><p>我们可以使用rewrite功能为末尾没有斜杠的URL自动添加一个斜杠</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen    80;
    server_name localhost;
    server_name_in_redirect on;
    location /hm {
        if (-d $request_filename){
            rewrite ^/(.*)([^/])$ http://$host/$1$2/ permanent;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="合并目录" tabindex="-1"><a class="header-anchor" href="#合并目录" aria-hidden="true">#</a> 合并目录</h4><p>搜索引擎优化(SEO)是一种利用搜索引擎的搜索规则来提供目的网站的有关搜索引擎内排名的方式。我们在创建自己的站点时，可以通过很多中方式来有效的提供搜索引擎优化的程度。其中有一项就包含URL的目录层级一般不要超过三层，否则的话不利于搜索引擎的搜索也给客户端的输入带来了负担，但是将所有的文件放在一个目录下又会导致文件资源管理混乱并且访问文件的速度也会随着文件增多而慢下来，这两个问题是相互矛盾的，那么使用rewrite如何解决上述问题?</p><p>举例，网站中有一个资源文件的访问路径时 /server/11/22/33/44/20.html,也就是说20.html存在于第5级目录下，如果想要访问该资源文件，客户端的URL地址就要写成 <code>http://www.web.name/server/11/22/33/44/20.html</code>,</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen 80;
    server_name www.web.name;
    location /server{
        root html;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是这个是非常不利于SEO搜索引擎优化的，同时客户端也不好记.使用rewrite我们可以进行如下配置:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen 80;
    server_name www.web.name;
    location /server{
        rewrite ^/server-([0-9]+)-([0-9]+)-([0-9]+)-([0-9]+)\\.html$ /server/$1/$2/$3/$4/$5.html last;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),Ae={href:"http://www.web.name/server-11-22-33-44-20.html%E5%B0%B1%E5%8F%AF%E4%BB%A5%E8%AE%BF%E9%97%AE%E5%88%B020.html%E9%A1%B5%E9%9D%A2%E4%BA%86%E3%80%82%E8%BF%99%E9%87%8C%E4%B9%9F%E5%85%85%E5%88%86%E5%88%A9%E7%94%A8%E4%BA%86rewrite%E6%8C%87%E4%BB%A4%E6%94%AF%E6%8C%81%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E7%9A%84%E7%89%B9%E6%80%A7%E3%80%82",target:"_blank",rel:"noopener noreferrer"},Ce=a(`<h4 id="防盗链" tabindex="-1"><a class="header-anchor" href="#防盗链" aria-hidden="true">#</a> 防盗链</h4><p>防盗链之前我们已经介绍过了相关的知识，在rewrite中的防盗链和之前将的原理其实都是一样的，只不过通过rewrite可以将防盗链的功能进行完善下，当出现防盗链的情况，我们可以使用rewrite将请求转发到自定义的一张图片和页面，给用户比较好的提示信息。下面我们就通过根据文件类型实现防盗链的一个配置实例:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server{
    listen 80;
    server_name www.web.com;
    locatin ~* ^.+\\.(gif|jpg|png|swf|flv|rar|zip)\${
        valid_referers none blocked server_names *.web.com;
        if ($invalid_referer){
            rewrite ^/ http://www.web.com/images/forbidden.png;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据目录实现防盗链配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server{
    listen 80;
    server_name www.web.com;
    location /file/{
        root /server/file/;
        valid_referers none blocked server_names *.web.com;
        if ($invalid_referer){
            rewrite ^/ http://www.web.com/images/forbidden.png;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function Be($e,Ne){const t=r("ExternalLinkIcon");return d(),l("div",null,[k,e("p",null,[n("127.0.0.1 、 localhost 、域名["),e("a",q,[n("www.baidu.com"),i(t)]),n(" | "),e("a",y,[n("www.jd.com"),i(t)]),n("]")]),z,A,C,e("p",null,[n("京东:"),e("a",B,[n("https://img14.360buyimg.com/n7/jfs/t1/101062/37/2153/254169/5dcbd410E6d10ba22/4ddbd212be225fcd.jpg"),i(t)])]),e("p",null,[n("百度:"),e("a",$,[n("https://pics7.baidu.com/feed/cf1b9d16fdfaaf516f7e2011a7cda1e8f11f7a1a.jpeg?token=551979a23a0995e5e5279b8fa1a48b34&s=BD385394D2E963072FD48543030030BB"),i(t)])]),N,e("table",null,[j,e("tbody",null,[e("tr",null,[R,e("td",null,[n("变量中存放了请求URL中的请求指令。比如"),e("a",T,[n('http://192.168.200.133:8080?arg1=value1&args2=value2中的"arg1=value1&arg2=value2"，功能和$query_string一样'),i(t)])])]),D,U,e("tr",null,[I,e("td",null,[n("变量存储的是当前访问地址的URI。比如"),e("a",P,[n('http://192.168.200.133/server?id=10&name=zhangsan中的"/server"，功能和$uri一样'),i(t)])])]),F,L,M,G,S,O,H,V,K,W,J,Y,Q,X,Z,ee,e("tr",null,[ne,e("td",null,[n("变量中存储了当前请求的URI，并且携带请求参数，比如"),e("a",te,[n('http://192.168.200.133/server?id=10&name=zhangsan中的"/server?id=10&name=zhangsan"'),i(t)])])])])]),ie,ae,se,de,e("p",null,[n("先来看一个效果，如果我们想访问京东网站，大家都知道我们可以输入"),le,n(",但是同样的我们也可以输入"),re,n("同样也都能访问到京东网站。"),e("a",ce,[n("这个其实是因为京东刚开始的时候域名就是www.360buy.com"),i(t)]),n("，"),e("a",oe,[n("后面由于各种原因把自己的域名换成了www.jd.com"),i(t)]),n(", 虽然说域名变量，但是对于以前只记住了www.360buy.com的用户来说，我们如何把这部分用户也迁移到我们新域名的访问上来，针对于这个问题，我们就可以使用Nginx中Rewrite的域名跳转来解决。")]),ue,e("ul",null,[e("li",null,[n("准备两个域名 "),e("a",ve,[n("www.360buy.com"),i(t)]),n(" | "),e("a",pe,[n("www.jd.com"),i(t)])])]),me,e("p",null,[n("》"),e("a",be,[n("通过Rewrite完成将www.360buy.com的请求跳转到www.jd.com"),i(t)])]),he,e("p",null,[n("上述案例中，"),e("a",ge,[n("将www.360buy.com"),i(t)]),n(" 和 "),e("a",xe,[n("www.jingdong.com都能跳转到www.jd.com"),i(t)]),n("，那么www.jd.com我们就可以把它起名叫主域名，其他两个就是我们所说的镜像域名，当然如果我们不想把整个网站做镜像，只想为其中某一个子目录下的资源做镜像，我们可以在location块中配置rewrite功能，比如:")]),_e,e("p",null,[n("要想访问上述资源，很简单，只需要通过"),e("a",fe,[n("http://192.168.200.133直接就能访问"),i(t)]),n("，地址后面不需要加/,但是如果将上述的配置修改为如下内容:")]),we,e("p",null,[n("这个时候，要想访问上述资源，按照上述的访问方式，我们可以通过"),e("a",Ee,[n("http://192.168.200.133/hm/来访问,但是如果地址后面不加斜杠，页面就会出问题。如果不加斜杠，Nginx服务器内部会自动做一个301的重定向，重定向的地址会有一个指令叫server_name_in_redirect"),i(t)]),n(" on|off;来决定重定向的地址：")]),ke,e("p",null,[n("所以就拿刚才的地址来说，"),e("a",qe,[n("http://192.168.200.133/hm如果不加斜杠，那么按照上述规则，如果指令server_name_in_redirect为on，则301重定向地址变为"),i(t)]),n(),e("a",ye,[n("http://localhost/hm/,如果为off，则301重定向地址变为http://192.168.200.133/ht/。后面这个是正常的，前面地址就有问题。"),i(t)])]),ze,e("p",null,[n("这样的花，客户端只需要输入"),e("a",Ae,[n("http://www.web.name/server-11-22-33-44-20.html就可以访问到20.html页面了。这里也充分利用了rewrite指令支持正则表达式的特性。"),i(t)])]),Ce])}const Te=s(E,[["render",Be],["__file","八、Nginx静态资源部署.html.vue"]]);export{Te as default};
