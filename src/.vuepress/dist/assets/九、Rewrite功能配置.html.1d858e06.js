import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as s,d as e,e as n,b as t,a as r,r as a}from"./app.9b10ba0a.js";const c="/assets/1589475653252.7972f8d6.png",u="/assets/1589475732042.feccaf00.png",v="/assets/1589560433192.968f4f6e.png",o={},m={href:"http://www.jd.com",target:"_blank",rel:"noopener noreferrer"},b=r(`<p>Rewrite的相关命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>set指令
if指令
break指令
return指令
rewrite指令
rewrite_log指令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Rewrite的应用场景</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>域名跳转
域名镜像
独立域名
目录自动添加&quot;/&quot;
合并目录
防盗链的实现
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rewrite的相关指令" tabindex="-1"><a class="header-anchor" href="#rewrite的相关指令" aria-hidden="true">#</a> Rewrite的相关指令</h3><h4 id="set指令" tabindex="-1"><a class="header-anchor" href="#set指令" aria-hidden="true">#</a> set指令</h4><p>该指令用来设置一个新的变量。</p><table><thead><tr><th>语法</th><th>set $variable value;</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>server、location、if</td></tr></tbody></table><p>variable:变量的名称，该变量名称要用&quot;$&quot;作为变量的第一个字符，且不要与Nginx服务器预设的全局变量同名。</p><p>value:变量的值，可以是字符串、其他变量或者变量的组合等。</p><h4 id="rewrite常用全局变量" tabindex="-1"><a class="header-anchor" href="#rewrite常用全局变量" aria-hidden="true">#</a> Rewrite常用全局变量</h4>`,11),h=e("thead",null,[e("tr",null,[e("th",null,"变量"),e("th",null,"说明")])],-1),p=e("td",null,"$args",-1),w={href:"http://192.168.200.133/server?arg1=value1&args2=value2%E4%B8%AD%E7%9A%84%22arg1=value1&arg2=value2%22%EF%BC%8C%E5%8A%9F%E8%83%BD%E5%92%8C$query_string%E4%B8%80%E6%A0%B7",target:"_blank",rel:"noopener noreferrer"},_=e("tr",null,[e("td",null,"$http_user_agent"),e("td",null,"变量存储的是用户访问服务的代理信息(如果通过浏览器访问，记录的是浏览器的相关版本信息)")],-1),g=e("tr",null,[e("td",null,"$host"),e("td",null,"变量存储的是访问服务器的server_name值")],-1),x=e("td",null,"$document_uri",-1),E={href:"http://192.168.200.133/server?id=10&name=zhangsan%E4%B8%AD%E7%9A%84%22/server%22%EF%BC%8C%E5%8A%9F%E8%83%BD%E5%92%8C$uri%E4%B8%80%E6%A0%B7",target:"_blank",rel:"noopener noreferrer"},f=e("tr",null,[e("td",null,"$document_root"),e("td",null,"变量存储的是当前请求对应location的root值，如果未设置，默认指向Nginx自带html目录所在位置")],-1),$=e("tr",null,[e("td",null,"$content_length"),e("td",null,"变量存储的是请求头中的Content-Length的值")],-1),q=e("tr",null,[e("td",null,"$content_type"),e("td",null,"变量存储的是请求头中的Content-Type的值")],-1),B=e("tr",null,[e("td",null,"$http_cookie"),e("td",null,"变量存储的是客户端的cookie信息，可以通过add_header Set-Cookie 'cookieName=cookieValue'来添加cookie数据")],-1),A=e("tr",null,[e("td",null,"$limit_rate"),e("td",null,"变量中存储的是Nginx服务器对网络连接速率的限制，也就是Nginx配置中对limit_rate指令设置的值，默认是0，不限制。")],-1),R=e("tr",null,[e("td",null,"$remote_addr"),e("td",null,"变量中存储的是客户端的IP地址")],-1),k=e("tr",null,[e("td",null,"$remote_port"),e("td",null,"变量中存储了客户端与服务端建立连接的端口号")],-1),y=e("tr",null,[e("td",null,"$remote_user"),e("td",null,"变量中存储了客户端的用户名，需要有认证模块才能获取")],-1),C=e("tr",null,[e("td",null,"$scheme"),e("td",null,"变量中存储了访问协议")],-1),U=e("tr",null,[e("td",null,"$server_addr"),e("td",null,"变量中存储了服务端的地址")],-1),I=e("tr",null,[e("td",null,"$server_name"),e("td",null,"变量中存储了客户端请求到达的服务器的名称")],-1),N=e("tr",null,[e("td",null,"$server_port"),e("td",null,"变量中存储了客户端请求到达服务器的端口号")],-1),F=e("tr",null,[e("td",null,"$server_protocol"),e("td",null,'变量中存储了客户端请求协议的版本，比如"HTTP/1.1"')],-1),D=e("tr",null,[e("td",null,"$request_body_file"),e("td",null,"变量中存储了发给后端服务器的本地文件资源的名称")],-1),L=e("tr",null,[e("td",null,"$request_method"),e("td",null,'变量中存储了客户端的请求方式，比如"GET","POST"等')],-1),T=e("tr",null,[e("td",null,"$request_filename"),e("td",null,"变量中存储了当前请求的资源文件的路径名")],-1),j=e("td",null,"$request_uri",-1),z={href:"http://192.168.200.133/server?id=10&name=zhangsan%E4%B8%AD%E7%9A%84%22/server?id=10&name=zhangsan%22",target:"_blank",rel:"noopener noreferrer"},S=r(`<p>上述参数还可以在日志文件中使用，这个就要用到前面我们介绍的<code>log_format</code>指令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>log_format main &#39;$remote_addr - $request - $status-$request_uri  $http_user_agent&#39;;

access_log logs/access.log main;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="if指令" tabindex="-1"><a class="header-anchor" href="#if指令" aria-hidden="true">#</a> if指令</h4><p>该指令用来支持条件判断，并根据条件判断结果选择不同的Nginx配置。</p>`,4),P=e("table",null,[e("thead",{"css-module":"."},[e("tr",null,[e("th",null,"语法"),e("th",null,"if (condition)")])]),e("tbody",null,[e("tr",null,[e("td",null,"默认值"),e("td",null,"—")]),e("tr",null,[e("td",null,"位置"),e("td",null,"server、location")])])],-1),O=r(`<p>condition为判定条件，可以支持以下写法：</p><ol><li>变量名。如果变量名对应的值为空字符串或&quot;0&quot;，if都判断为false,其他条件为true。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if ($param){

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>使用&quot;=&quot;和&quot;!=&quot;比较变量和字符串是否相等，满足条件为true，不满足为false</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if ($request_method = POST){
    return 405;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：此处和Java不太一样的地方是字符串不需要添加引号,并且等号和不等号前后到需要加空格。</p><ol start="3"><li><p>使用正则表达式对变量进行匹配，匹配成功返回true，否则返回false。变量与正则表达式之间使用&quot;<sub>&quot;,&quot;</sub>*&quot;,&quot;!<sub>&quot;,&quot;!</sub>*&quot;来连接。</p><p>&quot;~&quot;代表匹配正则表达式过程中区分大小写，</p><p>&quot;~*&quot;代表匹配正则表达式过程中不区分大小写</p><p>&quot;!<sub>&quot;和&quot;!</sub>*&quot;刚好和上面取相反值，如果匹配上返回false,匹配不上返回true</p></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if ($http_user_agent ~ MSIE){
    #$http_user_agent的值中是否包含MSIE字符串，如果包含返回true
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：正则表达式字符串一般不需要加引号，但是如果字符串中包含&quot;}&quot;或者是&quot;;&quot;等字符时，就需要把引号加上。</p><ol start="4"><li>判断请求的文件是否存在使用&quot;-f&quot;和&quot;!-f&quot;,</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if (-f $request_filename){
    #判断请求的文件是否存在
}
if (!-f $request_filename){
    #判断请求的文件是否不存在
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li><p>判断请求的目录是否存在使用&quot;-d&quot;和&quot;!-d&quot;</p></li><li><p>判断请求的目录或者文件是否存在使用&quot;-e&quot;和&quot;!-e&quot;</p></li><li><p>判断请求的文件是否可执行使用&quot;-x&quot;和&quot;!-x&quot;</p></li></ol><h4 id="break指令" tabindex="-1"><a class="header-anchor" href="#break指令" aria-hidden="true">#</a> break指令</h4><p>该指令用于中断当前相同作用域中的其他Nginx配置。与该指令处于同一作用域的Nginx配置中，位于它前面的指令配置生效，位于后面的指令配置无效。并且break还有另外一个功能就是终止当前的匹配并把当前的URI在本location进行重定向访问处理。</p><table><thead><tr><th>语法</th><th>break;</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>server、location、if</td></tr></tbody></table><p>例子:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location /testbreak{
    default_type text/plain;
    set $username TOM;
    if ($args){
        Set $username JERRY;
        break;
        set $username ROSE;
    }
    add_header username $username;
    return 200 $username;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="return指令" tabindex="-1"><a class="header-anchor" href="#return指令" aria-hidden="true">#</a> return指令</h4><p>该指令用于完成对请求的处理，直接向客户端返回。在return后的所有Nginx配置都是无效的。</p><table><thead><tr><th>语法</th><th>return code [text];<br>return code URL;<br>return URL;</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>server、location、if</td></tr></tbody></table><p>code:为返回给客户端的HTTP状态代理。可以返回的状态代码为0~999的任意HTTP状态代理</p><p>text:为返回给客户端的响应体内容，支持变量的使用</p><p>URL:为返回给客户端的URL地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location /testreturn {

    return 200 success;
}

location /testreturn {

    return https://www.baidu.com; // 302重定向到百度
}

location /testreturn {
    return 302 https://www.baidu.com;
}

location /testreturn {
    return 302 www.baidu.com;//不允许这么写
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="rewrite指令" tabindex="-1"><a class="header-anchor" href="#rewrite指令" aria-hidden="true">#</a> rewrite指令</h4><p>该指令通过正则表达式的使用来改变URI。可以同时存在一个或者多个指令，按照顺序依次对URL进行匹配和处理。</p><table><thead><tr><th>语法</th><th>rewrite regex replacement [flag];</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>server、location、if</td></tr></tbody></table><p>regex:用来匹配URI的正则表达式</p><p>replacement:匹配成功后，用于替换URI中被截取内容的字符串。如果该字符串是以&quot;http://&quot;或者&quot;https://&quot;开头的，则不会继续向下对URI进行其他处理，而是直接返回重写后的URI给客户端。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location rewrite {
    rewrite ^/rewrite/url\\w*$ https://www.baidu.com;
    rewrite ^/rewrite/(test)\\w*$ /$1;
    rewrite ^/rewrite/(demo)\\w*$ /$1;
}
location /test{
    default_type text/plain;
    return 200 test_success;
}
location /demo{
    default_type text/plain;
    return 200 demo_success;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>flag:用来设置rewrite对URI的处理行为，可选值有如下：</p><ul><li>last:终止继续在本location块中处理接收到的URI，并将此处重写的URI作为一个新的URI，使用各location块进行处理。该标志将重写后的URI重写在server块中执行，为重写后的URI提供了转入到其他location块的机会。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location rewrite {
    rewrite ^/rewrite/(test)\\w*$ /$1 last;
    rewrite ^/rewrite/(demo)\\w*$ /$1 last;
}
location /test{
    default_type text/plain;
    return 200 test_success;
}
location /demo{
    default_type text/plain;
    return 200 demo_success;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问 <code>http://192.168.200.133:8081/rewrite/testabc</code>,能正确访问</p><p><img src="`+c+`" alt="1589475653252"></p><ul><li>break：将此处重写的URI作为一个新的URI,在本块中继续进行处理。该标志将重写后的地址在当前的location块中执行，不会将新的URI转向其他的location块。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location rewrite {
    #/test   /usr/local/nginx/html/test/index.html
    rewrite ^/rewrite/(test)\\w*$ /$1 break;
    rewrite ^/rewrite/(demo)\\w*$ /$1 break;
}
location /test{
    default_type text/plain;
    return 200 test_success;
}
location /demo{
    default_type text/plain;
    return 200 demo_success;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问 <code>http://192.168.200.133:8081/rewrite/demoabc</code>,页面报404错误</p><p><img src="`+u+`" alt="1589475732042"></p><ul><li>redirect：将重写后的URI返回给客户端，状态码为302，指明是临时重定向URI,主要用在replacement变量不是以&quot;http://&quot;或者&quot;https://&quot;开头的情况。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location rewrite {
    rewrite ^/rewrite/(test)\\w*$ /$1 redirect;
    rewrite ^/rewrite/(demo)\\w*$ /$1 redirect;
}
location /test{
    default_type text/plain;
    return 200 test_success;
}
location /demo{
    default_type text/plain;
    return 200 demo_success;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问<code>http://192.168.200.133:8081/rewrite/testabc</code>请求会被临时重定向，浏览器地址也会发生改变</p><ul><li>permanent：将重写后的URI返回给客户端，状态码为301，指明是永久重定向URI,主要用在replacement变量不是以&quot;http://&quot;或者&quot;https://&quot;开头的情况。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location rewrite {
    rewrite ^/rewrite/(test)\\w*$ /$1 permanent;
    rewrite ^/rewrite/(demo)\\w*$ /$1 permanent;
}
location /test{
    default_type text/plain;
    return 200 test_success;
}
location /demo{
    default_type text/plain;
    return 200 demo_success;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问<code>http://192.168.200.133:8081/rewrite/testabc</code>请求会被永久重定向，浏览器地址也会发生改变</p><h4 id="rewrite-log指令" tabindex="-1"><a class="header-anchor" href="#rewrite-log指令" aria-hidden="true">#</a> rewrite_log指令</h4><p>该指令配置是否开启URL重写日志的输出功能。</p><table><thead><tr><th>语法</th><th>rewrite_log on|off;</th></tr></thead><tbody><tr><td>默认值</td><td>rewrite_log off;</td></tr><tr><td>位置</td><td>http、server、location、if</td></tr></tbody></table><p>开启后，URL重写的相关日志将以notice级别输出到error_log指令配置的日志文件汇总。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rewrite_log on;
error_log  logs/error.log notice;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rewrite的案例" tabindex="-1"><a class="header-anchor" href="#rewrite的案例" aria-hidden="true">#</a> Rewrite的案例</h3><h4 id="域名跳转" tabindex="-1"><a class="header-anchor" href="#域名跳转" aria-hidden="true">#</a> 域名跳转</h4><p>》问题分析</p>`,53),V=e("code",null,"www.jd.com",-1),H=e("code",null,"www.360buy.com",-1),M={href:"http://xn--www-w48dncyev1bq7fw6d70b44jz5j4kd0qj8rhqpcd0trr5az4ama9098f7p5f.360buy.com",target:"_blank",rel:"noopener noreferrer"},J={href:"http://xn--www-0h9dlb801dguajcf733ef2c1t1a6tmysbxwf4x7h3yen6qvr1bmz3g.jd.com",target:"_blank",rel:"noopener noreferrer"},G=r(`<p>》环境准备</p><ul><li>准备三个域名：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vim /etc/hosts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>127.0.0.1   www.itcast.cn
127.0.0.1   www.itheima.cn
127.0.0.1   www.itheima.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),W={href:"http://xn--Nginxwww-jn5ou93qyk1cvdk24ac11d.itcast.cn",target:"_blank",rel:"noopener noreferrer"},Y=r(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen 80;
    server_name www.itcast.cn;
    location /{
        default_type text/html;
        return 200 &#39;&lt;h1&gt;welcome to itcast&lt;/h1&gt;&#39;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),K={href:"http://xn--Rewritewww-uk3sy9bh26b7i0mt9a.ithema.xn--comwww-k76j.itheima.xn--cnwww-8o6hh17mhfr897bgferwe.itcast.com",target:"_blank",rel:"noopener noreferrer"},Q=r(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen 80;
    server_name www.itheima.com www.itheima.cn;
    rewrite ^/ http://www.itcast.cn;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>问题描述:如何在域名跳转的过程中携带请求的URI？</p><p>修改配置信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen 80;
    server_name www.itheima.com www.itheima.cn;
    rewrite ^(.*) http://www.itcast.cn$1；
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="域名镜像" tabindex="-1"><a class="header-anchor" href="#域名镜像" aria-hidden="true">#</a> 域名镜像</h4><p>镜像网站指定是将一个完全相同的网站分别放置到几台服务器上，并分别使用独立的URL进行访问。其中一台服务器上的网站叫主站，其他的为镜像网站。镜像网站和主站没有太大的区别，可以把镜像网站理解为主站的一个备份节点。可以通过镜像网站提供网站在不同地区的响应速度。镜像网站可以平衡网站的流量负载、可以解决网络宽带限制、封锁等。</p><p><img src="`+v+'" alt="1589560433192"></p>',7),X={href:"http://www.itheima.xn--cnwww-8o6hq90zoxva74cr8e.itcast.cn",target:"_blank",rel:"noopener noreferrer"},Z=r(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen          80;
    server_name     www.itheima.cn www.itheima.com;
    location /user {
        rewrite ^/user(.*)$ http://www.itcast.cn$1;
    }
    location /emp{
        default_type text/html;
        return 200 &#39;&lt;h1&gt;emp_success&lt;/h1&gt;&#39;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="独立域名" tabindex="-1"><a class="header-anchor" href="#独立域名" aria-hidden="true">#</a> 独立域名</h4><p>一个完整的项目包含多个模块，比如购物网站有商品搜索模块、商品详情模块和购物车模块等，那么我们如何为每一个模块设置独立的域名。</p><p>需求：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://search.itcast.com:81  访问商品搜索模块
http://item.itcast.com:82      访问商品详情模块
http://cart.itcast.com:83      访问商品购物车模块
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server{
    listen 81;
    server_name search.itcast.com;
    rewrite ^(.*) http://www.itcast.cn/search$1;
}
server{
    listen 82;
    server_name item.itcast.com;
    rewrite ^(.*) http://www.itcast.cn/item$1;
}
server{
    listen 83;
    server_name cart.itcast.com;
    rewrite ^(.*) http://www.itcast.cn/cart$1;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="目录自动添加" tabindex="-1"><a class="header-anchor" href="#目录自动添加" aria-hidden="true">#</a> 目录自动添加&quot;/&quot;</h4><p>问题描述</p><p>通过一个例子来演示下问题:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen    8082;
    server_name localhost;
    location /heima {
        root html;
        index index.html;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过<code>http://192.168.200.133:8082/heima</code>和通过<code>http://192.168.200.133:8082/heima/</code>访问的区别？</p><p>如果不加斜杠，Nginx服务器内部会自动做一个301的重定向，重定向的地址会有一个指令叫server_name_in_redirect on|off;来决定重定向的地址：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>如果该指令为on
    重定向的地址为:  http://server_name:8082/目录名/;
    http://localhost:8082/heima/
如果该指令为off
    重定向的地址为:  http://原URL中的域名:8082/目录名/;
    http://192.168.200.133:8082/heima/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),ee={href:"http://192.168.200.133:8082/heima%E5%A6%82%E6%9E%9C%E4%B8%8D%E5%8A%A0%E6%96%9C%E6%9D%A0%EF%BC%8C%E9%82%A3%E4%B9%88%E6%8C%89%E7%85%A7%E4%B8%8A%E8%BF%B0%E8%A7%84%E5%88%99%EF%BC%8C%E5%A6%82%E6%9E%9C%E6%8C%87%E4%BB%A4server_name_in_redirect%E4%B8%BAon%EF%BC%8C%E5%88%99301%E9%87%8D%E5%AE%9A%E5%90%91%E5%9C%B0%E5%9D%80%E5%8F%98%E4%B8%BA",target:"_blank",rel:"noopener noreferrer"},ne={href:"http://localhost:8082/heima/,%E5%A6%82%E6%9E%9C%E4%B8%BAoff%EF%BC%8C%E5%88%99301%E9%87%8D%E5%AE%9A%E5%90%91%E5%9C%B0%E5%9D%80%E5%8F%98%E4%B8%BAhttp://192.168.200.133:8082/heima/%E3%80%82%E5%90%8E%E9%9D%A2%E8%BF%99%E4%B8%AA%E6%98%AF%E6%AD%A3%E5%B8%B8%E7%9A%84%EF%BC%8C%E5%89%8D%E9%9D%A2%E5%9C%B0%E5%9D%80%E5%B0%B1%E6%9C%89%E9%97%AE%E9%A2%98%E3%80%82",target:"_blank",rel:"noopener noreferrer"},ie=r(`<p>注意server_name_in_redirect指令在Nginx的0.8.48版本之前默认都是on，之后改成了off,所以现在我们这个版本不需要考虑这个问题，但是如果是0.8.48以前的版本并且server_name_in_redirect设置为on，我们如何通过rewrite来解决这个问题？</p><p>解决方案</p><p>我们可以使用rewrite功能为末尾没有斜杠的URL自动添加一个斜杠</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen    80;
    server_name localhost;
    server_name_in_redirect on;
    location /heima {
        if (-d $request_filename){
            rewrite ^/(.*)([^/])$ http://$host/$1$2/ permanent;
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="合并目录" tabindex="-1"><a class="header-anchor" href="#合并目录" aria-hidden="true">#</a> 合并目录</h4><p>搜索引擎优化(SEO)是一种利用搜索引擎的搜索规则来提高目的网站在有关搜索引擎内排名的方式。我们在创建自己的站点时，可以通过很多中方式来有效的提供搜索引擎优化的程度。其中有一项就包含URL的目录层级一般不要超过三层，否则的话不利于搜索引擎的搜索也给客户端的输入带来了负担，但是将所有的文件放在一个目录下又会导致文件资源管理混乱并且访问文件的速度也会随着文件增多而慢下来，这两个问题是相互矛盾的，那么使用rewrite如何解决上述问题?</p><p>举例，网站中有一个资源文件的访问路径时 /server/11/22/33/44/20.html,也就是说20.html存在于第5级目录下，如果想要访问该资源文件，客户端的URL地址就要写成 <code>http://192.168.200.133/server/11/22/33/44/20.html</code>,</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen 8083;
    server_name localhost;
    location /server{
        root html;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是这个是非常不利于SEO搜索引擎优化的，同时客户端也不好记.使用rewrite我们可以进行如下配置:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen 8083;
    server_name localhost;
    location /server{
        rewrite ^/server-([0-9]+)-([0-9]+)-([0-9]+)-([0-9]+)\\.html$ /server/$1/$2/$3/$4/$5.html last;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),te={href:"http://www.web.name/server-11-22-33-44-20.html%E5%B0%B1%E5%8F%AF%E4%BB%A5%E8%AE%BF%E9%97%AE%E5%88%B020.html%E9%A1%B5%E9%9D%A2%E4%BA%86%E3%80%82%E8%BF%99%E9%87%8C%E4%B9%9F%E5%85%85%E5%88%86%E5%88%A9%E7%94%A8%E4%BA%86rewrite%E6%8C%87%E4%BB%A4%E6%94%AF%E6%8C%81%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E7%9A%84%E7%89%B9%E6%80%A7%E3%80%82",target:"_blank",rel:"noopener noreferrer"},re=r(`<h4 id="防盗链" tabindex="-1"><a class="header-anchor" href="#防盗链" aria-hidden="true">#</a> 防盗链</h4><p>防盗链之前我们已经介绍过了相关的知识，在rewrite中的防盗链和之前将的原理其实都是一样的，只不过通过rewrite可以将防盗链的功能进行完善下，当出现防盗链的情况，我们可以使用rewrite将请求转发到自定义的一张图片和页面，给用户比较好的提示信息。下面我们就通过根据文件类型实现防盗链的一个配置实例:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>location /images {
    root html;
    valid_referers none blocked www.baidu.com;
    if ($invalid_referer){
        #return 403;
        rewrite ^/    /images/forbidden.png break;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function le(de,se){const i=a("ExternalLinkIcon");return d(),s("div",null,[e("p",null,[n("Rewrite是Nginx服务器提供的一个重要基本功能，是Web服务器产品中几乎必备的功能。主要的作用是用来实现URL的重写。"),e("a",m,[n("www.jd.com"),t(i)]),n(" 注意:Nginx服务器的Rewrite功能的实现依赖于PCRE的支持，因此在编译安装Nginx服务器之前，需要安装PCRE库。Nginx使用的是ngx_http_rewrite_module模块来解析和处理Rewrite功能的相关配置。")]),b,e("table",null,[h,e("tbody",null,[e("tr",null,[p,e("td",null,[n("变量中存放了请求URL中的请求参数。比如"),e("a",w,[n('http://192.168.200.133/server?arg1=value1&args2=value2中的"arg1=value1&arg2=value2"，功能和$query_string一样'),t(i)])])]),_,g,e("tr",null,[x,e("td",null,[n("变量存储的是当前访问地址的URI。比如"),e("a",E,[n('http://192.168.200.133/server?id=10&name=zhangsan中的"/server"，功能和$uri一样'),t(i)])])]),f,$,q,B,A,R,k,y,C,U,I,N,F,D,L,T,e("tr",null,[j,e("td",null,[n("变量中存储了当前请求的URI，并且携带请求参数，比如"),e("a",z,[n('http://192.168.200.133/server?id=10&name=zhangsan中的"/server?id=10&name=zhangsan"'),t(i)])])])])]),S,P,O,e("p",null,[n("先来看一个效果，如果我们想访问京东网站，大家都知道我们可以输入"),V,n(",但是同样的我们也可以输入"),H,n("同样也都能访问到京东网站。"),e("a",M,[n("这个其实是因为京东刚开始的时候域名就是www.360buy.com"),t(i)]),n("，"),e("a",J,[n("后面由于各种原因把自己的域名换成了www.jd.com"),t(i)]),n(", 虽然说域名变量，但是对于以前只记住了www.360buy.com的用户来说，我们如何把这部分用户也迁移到我们新域名的访问上来，针对于这个问题，我们就可以使用Nginx中Rewrite的域名跳转来解决。")]),G,e("ul",null,[e("li",null,[e("a",W,[n("通过Nginx实现访问www.itcast.cn"),t(i)])])]),Y,e("p",null,[n("》"),e("a",K,[n("通过Rewrite完成将www.ithema.com和www.itheima.cn的请求跳转到www.itcast.com"),t(i)])]),Q,e("p",null,[n("而我们所说的域名镜像和网站镜像比较类似，上述案例中，将www.itheima.com和 "),e("a",X,[n("www.itheima.cn都能跳转到www.itcast.cn"),t(i)]),n("，那么www.itcast.cn我们就可以把它起名叫主域名，其他两个就是我们所说的镜像域名，当然如果我们不想把整个网站做镜像，只想为其中某一个子目录下的资源做镜像，我们可以在location块中配置rewrite功能，比如:")]),Z,e("p",null,[n("所以就拿刚才的地址来说，"),e("a",ee,[n("http://192.168.200.133:8082/heima如果不加斜杠，那么按照上述规则，如果指令server_name_in_redirect为on，则301重定向地址变为"),t(i)]),n(),e("a",ne,[n("http://localhost:8082/heima/,如果为off，则301重定向地址变为http://192.168.200.133:8082/heima/。后面这个是正常的，前面地址就有问题。"),t(i)])]),ie,e("p",null,[n("这样的花，客户端只需要输入"),e("a",te,[n("http://www.web.name/server-11-22-33-44-20.html就可以访问到20.html页面了。这里也充分利用了rewrite指令支持正则表达式的特性。"),t(i)])]),re])}const ue=l(o,[["render",le],["__file","九、Rewrite功能配置.html.vue"]]);export{ue as default};
