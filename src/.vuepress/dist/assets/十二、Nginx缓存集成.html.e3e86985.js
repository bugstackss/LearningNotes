import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as n,a as d}from"./app.9b10ba0a.js";const i="/assets/1591944051969.72bd1d62.png",t="/assets/1582295367198.c38d7c24.png",s="/assets/1591947990200.c526928a.png",r="/assets/1591959569463.0fcb3846.png",c={},l=d('<h2 id="缓存的概念" tabindex="-1"><a class="header-anchor" href="#缓存的概念" aria-hidden="true">#</a> 缓存的概念</h2><p>缓存就是数据交换的缓冲区(称作:Cache),当用户要获取数据的时候，会先从缓存中去查询获取数据，如果缓存中有就会直接返回给用户，如果缓存中没有，则会发请求从服务器重新查询数据，将数据返回给用户的同时将数据放入缓存，下次用户就会直接从缓存中获取数据。</p><p><img src="'+i+'" alt="1591944051969"></p><p>缓存其实在很多场景中都有用到，比如：</p><table><thead><tr><th>场景</th><th>作用</th></tr></thead><tbody><tr><td>操作系统磁盘缓存</td><td>减少磁盘机械操作</td></tr><tr><td>数据库缓存</td><td>减少文件系统的IO操作</td></tr><tr><td>应用程序缓存</td><td>减少对数据库的查询</td></tr><tr><td>Web服务器缓存</td><td>减少对应用服务器请求次数</td></tr><tr><td>浏览器缓存</td><td>减少与后台的交互次数</td></tr></tbody></table><p>缓存的优点</p><p>​ 1.减少数据传输，节省网络流量，加快响应速度，提升用户体验；</p><p>​ 2.减轻服务器压力；</p><p>​ 3.提供服务端的高可用性；</p><p>缓存的缺点</p><p>​ 1.数据的不一致</p><p>​ 2.增加成本</p><p><img src="'+t+'" alt="1582295367198"></p><p>本次课程注解讲解的是Nginx,Nginx作为web服务器，Nginx作为Web缓存服务器，它介于客户端和应用服务器之间，当用户通过浏览器访问一个URL时，web缓存服务器会去应用服务器获取要展示给用户的内容，将内容缓存到自己的服务器上，当下一次请求到来时，如果访问的是同一个URL，web缓存服务器就会直接将之前缓存的内容返回给客户端，而不是向应用服务器再次发送请求。web缓存降低了应用服务器、数据库的负载，减少了网络延迟，提高了用户访问的响应速度，增强了用户的体验。</p><h2 id="nginx的web缓存服务" tabindex="-1"><a class="header-anchor" href="#nginx的web缓存服务" aria-hidden="true">#</a> Nginx的web缓存服务</h2><p>Nginx是从0.7.48版开始提供缓存功能。Nginx是基于Proxy Store来实现的，其原理是把URL及相关组合当做Key,在使用MD5算法对Key进行哈希，得到硬盘上对应的哈希目录路径，从而将缓存内容保存在该目录中。它可以支持任意URL连接，同时也支持404/301/302这样的非200状态码。Nginx即可以支持对指定URL或者状态码设置过期时间，也可以使用purge命令来手动清除指定URL的缓存。</p><p><img src="'+s+`" alt="1591947990200"></p><h2 id="nginx缓存设置的相关指令" tabindex="-1"><a class="header-anchor" href="#nginx缓存设置的相关指令" aria-hidden="true">#</a> Nginx缓存设置的相关指令</h2><p>Nginx的web缓存服务主要是使用<code>ngx_http_proxy_module</code>模块相关指令集来完成，接下来我们把常用的指令来进行介绍下。</p><h3 id="proxy-cache-path" tabindex="-1"><a class="header-anchor" href="#proxy-cache-path" aria-hidden="true">#</a> proxy_cache_path</h3><p>该指定用于设置缓存文件的存放路径</p><table><thead><tr><th>语法</th><th>proxy_cache_path path [levels=number] <br>keys_zone=zone_name:zone_size [inactive=time][max_size=size];</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>http</td></tr></tbody></table><p>path:缓存路径地址,如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/usr/local/proxy_cache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>levels: 指定该缓存空间对应的目录，最多可以设置3层，每层取值为1|2如 :</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>levels=1:2   缓存空间有两层目录，第一次是1个字母，第二次是2个字母
举例说明:
itheima[key]通过MD5加密以后的值为 43c8233266edce38c2c9af0694e2107d
levels=1:2   最终的存储路径为/usr/local/proxy_cache/d/07
levels=2:1:2 最终的存储路径为/usr/local/proxy_cache/7d/0/21
levels=2:2:2 最终的存储路径为??/usr/local/proxy_cache/7d/10/e2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>keys_zone:用来为这个缓存区设置名称和指定大小，如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>keys_zone=itcast:200m  缓存区的名称是itcast,大小为200M,1M大概能存储8000个keys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>inactive:指定缓存的数据多次时间未被访问就将被删除，如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>inactive=1d   缓存数据在1天内没有被访问就会被删除
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>max_size:设置最大缓存空间，如果缓存空间存满，默认会覆盖缓存时间最长的资源，如:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>max_size=20g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置实例:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http{
	proxy_cache_path /usr/local/proxy_cache keys_zone=itcast:200m  levels=1:2:1 inactive=1d max_size=20g;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="proxy-cache" tabindex="-1"><a class="header-anchor" href="#proxy-cache" aria-hidden="true">#</a> proxy_cache</h3><p>该指令用来开启或关闭代理缓存，如果是开启则自定使用哪个缓存区来进行缓存。</p><table><thead><tr><th>语法</th><th>proxy_cache zone_name|off;</th></tr></thead><tbody><tr><td>默认值</td><td>proxy_cache off;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><p>zone_name：指定使用缓存区的名称</p><h3 id="proxy-cache-key" tabindex="-1"><a class="header-anchor" href="#proxy-cache-key" aria-hidden="true">#</a> proxy_cache_key</h3><p>该指令用来设置web缓存的key值，Nginx会根据key值MD5哈希存缓存。</p><table><thead><tr><th>语法</th><th>proxy_cache_key key;</th></tr></thead><tbody><tr><td>默认值</td><td>proxy_cache_key $scheme$proxy_host$request_uri;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><h3 id="proxy-cache-valid" tabindex="-1"><a class="header-anchor" href="#proxy-cache-valid" aria-hidden="true">#</a> proxy_cache_valid</h3><p>该指令用来对不同返回状态码的URL设置不同的缓存时间</p><table><thead><tr><th>语法</th><th>proxy_cache_valid [code ...] time;</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><p>如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>proxy_cache_valid 200 302 10m;
proxy_cache_valid 404 1m;
为200和302的响应URL设置10分钟缓存，为404的响应URL设置1分钟缓存
proxy_cache_valid any 1m;
对所有响应状态码的URL都设置1分钟缓存
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="proxy-cache-min-uses" tabindex="-1"><a class="header-anchor" href="#proxy-cache-min-uses" aria-hidden="true">#</a> proxy_cache_min_uses</h3><p>该指令用来设置资源被访问多少次后被缓存</p><table><thead><tr><th>语法</th><th>proxy_cache_min_uses number;</th></tr></thead><tbody><tr><td>默认值</td><td>proxy_cache_min_uses 1;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><h3 id="proxy-cache-methods" tabindex="-1"><a class="header-anchor" href="#proxy-cache-methods" aria-hidden="true">#</a> proxy_cache_methods</h3><p>该指令用户设置缓存哪些HTTP方法</p><table><thead><tr><th>语法</th><th>proxy_cache_methods GET|HEAD|POST;</th></tr></thead><tbody><tr><td>默认值</td><td>proxy_cache_methods GET HEAD;</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><p>默认缓存HTTP的GET和HEAD方法，不缓存POST方法。</p><h2 id="nginx缓存设置案例" tabindex="-1"><a class="header-anchor" href="#nginx缓存设置案例" aria-hidden="true">#</a> Nginx缓存设置案例</h2><h4 id="需求分析" tabindex="-1"><a class="header-anchor" href="#需求分析" aria-hidden="true">#</a> 需求分析</h4><p><img src="`+r+`" alt="1591959569463"></p><h4 id="步骤实现" tabindex="-1"><a class="header-anchor" href="#步骤实现" aria-hidden="true">#</a> 步骤实现</h4><p>1.环境准备</p><p>应用服务器的环境准备</p><p>（1）在192.168.200.146服务器上的tomcat的webapps下面添加一个js目录，并在js目录中添加一个jquery.js文件</p><p>（2）启动tomcat</p><p>（3）访问测试</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://192.168.200.146:8080/js/jquery.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Nginx的环境准备</p><p>（1）完成Nginx反向代理配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http{
	upstream backend{
		server 192.168.200.146:8080;
	}
	server {
		listen       8080;
        server_name  localhost;
        location / {
        	proxy_pass http://backend/js/;
        }
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（2）完成Nginx缓存配置</p><p>4.添加缓存配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http{
	proxy_cache_path /usr/local/proxy_cache levels=2:1 keys_zone=itcast:200m inactive=1d max_size=20g;
	upstream backend{
		server 192.168.200.146:8080;
	}
	server {
		listen       8080;
        server_name  localhost;
        location / {
        	proxy_cache itcast;
            proxy_cache_key itheima;
            proxy_cache_min_uses 5;
            proxy_cache_valid 200 5d;
            proxy_cache_valid 404 30s;
            proxy_cache_valid any 1m;
            add_header nginx-cache &quot;$upstream_cache_status&quot;;
        	proxy_pass http://backend/js/;
        }
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx缓存的清除" tabindex="-1"><a class="header-anchor" href="#nginx缓存的清除" aria-hidden="true">#</a> Nginx缓存的清除</h2><h3 id="方式一-删除对应的缓存目录" tabindex="-1"><a class="header-anchor" href="#方式一-删除对应的缓存目录" aria-hidden="true">#</a> 方式一:删除对应的缓存目录</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rm -rf /usr/local/proxy_cache/......
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="方式二-使用第三方扩展模块" tabindex="-1"><a class="header-anchor" href="#方式二-使用第三方扩展模块" aria-hidden="true">#</a> 方式二:使用第三方扩展模块</h3><h4 id="ngx-cache-purge" tabindex="-1"><a class="header-anchor" href="#ngx-cache-purge" aria-hidden="true">#</a> ngx_cache_purge</h4><p>（1）下载ngx_cache_purge模块对应的资源包，并上传到服务器上。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ngx_cache_purge-2.3.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（2）对资源文件进行解压缩</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>tar -zxf ngx_cache_purge-2.3.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（3）修改文件夹名称，方便后期配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mv ngx_cache_purge-2.3 purge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（4）查询Nginx的配置参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nginx -V
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（5）进入Nginx的安装目录，使用./configure进行参数配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./configure --add-module=/root/nginx/module/purge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（6）使用make进行编译</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>make
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（7）将nginx安装目录的nginx二级制可执行文件备份</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mv /usr/local/nginx/sbin/nginx /usr/local/nginx/sbin/nginxold
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（8）将编译后的objs中的nginx拷贝到nginx的sbin目录下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cp objs/nginx /usr/local/nginx/sbin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（9）使用make进行升级</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>make upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>（10）在nginx配置文件中进行如下配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server{
	location ~/purge(/.*) {
		proxy_cache_purge itcast itheima;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx设置资源不缓存" tabindex="-1"><a class="header-anchor" href="#nginx设置资源不缓存" aria-hidden="true">#</a> Nginx设置资源不缓存</h2><p>前面咱们已经完成了Nginx作为web缓存服务器的使用。但是我们得思考一个问题就是不是所有的数据都适合进行缓存。比如说对于一些经常发生变化的数据。如果进行缓存的话，就很容易出现用户访问到的数据不是服务器真实的数据。所以对于这些资源我们在缓存的过程中就需要进行过滤，不进行缓存。</p><p>Nginx也提供了这块的功能设置，需要使用到如下两个指令</p><p>proxy_no_cache</p><p>该指令是用来定义不将数据进行缓存的条件。</p><table><thead><tr><th>语法</th><th>proxy_no_cache string ...;</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><p>配置实例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>proxy_no_cache $cookie_nocache $arg_nocache $arg_comment;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>proxy_cache_bypass</p><p>该指令是用来设置不从缓存中获取数据的条件。</p><table><thead><tr><th>语法</th><th>proxy_cache_bypass string ...;</th></tr></thead><tbody><tr><td>默认值</td><td>—</td></tr><tr><td>位置</td><td>http、server、location</td></tr></tbody></table><p>配置实例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>proxy_cache_bypass $cookie_nocache $arg_nocache $arg_comment;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上述两个指令都有一个指定的条件，这个条件可以是多个，并且多个条件中至少有一个不为空且不等于&quot;0&quot;,则条件满足成立。上面给的配置实例是从官方网站获取的，里面使用到了三个变量，分别是$cookie_nocache、$arg_nocache、$arg_comment</p><h3 id="cookie-nocache、-arg-nocache、-arg-comment" tabindex="-1"><a class="header-anchor" href="#cookie-nocache、-arg-nocache、-arg-comment" aria-hidden="true">#</a> $cookie_nocache、$arg_nocache、$arg_comment</h3><p>这三个参数分别代表的含义是:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$cookie_nocache
指的是当前请求的cookie中键的名称为nocache对应的值
$arg_nocache和$arg_comment
指的是当前请求的参数中属性名为nocache和comment对应的属性值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>案例演示下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>log_format params $cookie_nocache | $arg_nocache | $arg_comment；
server{
	listen	8081;
	server_name localhost;
	location /{
		access_log logs/access_params.log params;
		add_header Set-Cookie &#39;nocache=999&#39;;
		root html;
		index index.html;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="案例实现" tabindex="-1"><a class="header-anchor" href="#案例实现" aria-hidden="true">#</a> 案例实现</h3><p>设置不缓存资源的配置方案</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server{
	listen	8080;
	server_name localhost;
	location / {
		if ($request_uri ~ /.*\\.js$){
           set $nocache 1;
        }
		proxy_no_cache $nocache $cookie_nocache $arg_nocache $arg_comment;
        proxy_cache_bypass $nocache $cookie_nocache $arg_nocache $arg_comment;
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,116),o=[l];function v(h,p){return a(),n("div",null,o)}const x=e(c,[["render",v],["__file","十二、Nginx缓存集成.html.vue"]]);export{x as default};
