import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as l,a as e}from"./app.9b10ba0a.js";const h={},o=e('<h2 id="configuration的配置参数" tabindex="-1"><a class="header-anchor" href="#configuration的配置参数" aria-hidden="true">#</a> ./configuration的配置参数</h2><h3 id="一、路径相关参数" tabindex="-1"><a class="header-anchor" href="#一、路径相关参数" aria-hidden="true">#</a> 一、路径相关参数</h3><ol><li>–prefix=PATH：Nginx安装部署后的根目录，默认为/usr/local/nginx。这个目标的设置会影响其他参数中的相对目录。例如：如果设置了–sbin-path=sbin/nginx，那么实际上可执行文件会被放到/usr/local/nginx/sbin/nginx中</li><li>–sbin-path=PATH：可执行文件的放置路径。默认为/sbin/nginx</li><li>–conf-path=PATH：配置文件的放置路径。默认为/conf/nginx.conf</li><li>–error-log-path=PATH：error日志文件的放置路径，默认为/logs/error.log</li><li>–pid-path=PATH：pid文件的存放路径。以ASCII码存放Nginx master的进程ID，在使用命令行式（例如nginx -s reload）通过读取master进程ID向master进程发送信号时，才能对运行中Nginx服务产生作用，默认为/logs/nginx.pid</li><li>–lock-path=PATH：lock文件的放置路径，默认为/logs/nginx.lock</li><li>–builddir=DIR：configure执行时与编译期间产生的临时文件放置的目录，包括产生的Makefile、C源文件、目标文件、可执行文件等。默认为/objs</li><li>–with-http_perl_module：</li><li>–with-http_perl_module=dynamic：</li><li>–with-perl_modules_path=PATH：perl模块放置的路径，只有使用第三方perl模块才需要配置此路径。</li><li>–with-perl=PATH：perl二进制放置路径。如果配置的Nginx会执行Perl脚本，那么必须要设置此路径</li><li>–http-log-path=PATH：access日志放置的位置。每一个HTTP请求在结束时都会记录的访问日志。默认为/logs/access.log</li><li>–http-client-body-temp-path=PATH：处理HTTP请求时如果请求的包体需要暂时存放到临时磁盘文件中，则把这样的临时文件放置到该路径下。默认为/client_body_temp</li><li>–http-proxy-temp-path=PATH：Nginx作为HTTP反向代理服务器时，上游服务器产生的HTTP包体需要临时存放到磁盘文件的路径。默认为/proxy_temp</li><li>–http-fastcgi-temp-path=PATH：Fastcgi所使用临时文件的放置目录，默认为/fastcgi_temp</li><li>–http-uwsgi-temp-path=PATH：uWSGI所使用临时文件的放置目录，默认为/uwsgi_temp</li><li>–http-scgi-temp-path=PATH：SCGI所使用临时文件的放置目录，默认为/scgi_temp</li></ol><h3 id="二、编译相关参数" tabindex="-1"><a class="header-anchor" href="#二、编译相关参数" aria-hidden="true">#</a> 二、编译相关参数</h3><ol><li>–with-cc=PATH：C编译器的路径</li><li>–with-cpp=PATH：C预编译器的路径</li><li>–with-cc-opt=OPTIONS：如果希望在Nginx编译期间指定加入一些编译选项，如指定宏或者使用-I加入某些需要包含的目录</li><li>–with-ld-opt=OPTIONS：执行链接操作时需要指定链接的参数</li><li>–with-cpu-opt=CPU：指定CPU处理器架构，只能取：pentium、pentiumpro、pentium3、pentium4、athlon、opteron、sparc32、sparc64、ppc64</li></ol><h3 id="三、依赖软件相关参数" tabindex="-1"><a class="header-anchor" href="#三、依赖软件相关参数" aria-hidden="true">#</a> 三、依赖软件相关参数</h3><h4 id="_3-1-pcre" tabindex="-1"><a class="header-anchor" href="#_3-1-pcre" aria-hidden="true">#</a> 3.1 pcre</h4><ol><li>–without-pcre：如果确认Nginx不用解析正则表达式，也就是nginx.conf配置文件不会出现正则表达式，那么可以使用这个参数</li><li>–with-pcre：强制使用PCRE库</li><li>–with-pcre=DIR：指定PCRE库的源码位置，在编译Nginx时会进入该目录编译PCRE源码</li><li>–with-pcre-opt=OPTIONS：编译PCRE源码时希望加入的编译选项</li><li>–with-pcre-jit：</li></ol><h4 id="_3-2-openssl" tabindex="-1"><a class="header-anchor" href="#_3-2-openssl" aria-hidden="true">#</a> 3.2 openssl</h4><ol><li>–with-openssl=DIR：指定openssl库的源码位置，在编译Nginx时会进入该目录编译openssl源码。注意：如果web服务器支持HTTPS，也就是SSL协议，nginx要求必须要用openssl</li><li>–with-openssl-opt=OPTIONS：编译openssl源码时希望加入的编译选项</li></ol><h4 id="_3-3-atomic原子库" tabindex="-1"><a class="header-anchor" href="#_3-3-atomic原子库" aria-hidden="true">#</a> 3.3 atomic原子库</h4><ol><li>–with-libatomic：强制使用atomic库。</li><li>–with-libatomic=DIR：atomic库所在的位置</li></ol><h4 id="_3-4-散列函数库" tabindex="-1"><a class="header-anchor" href="#_3-4-散列函数库" aria-hidden="true">#</a> 3.4 散列函数库</h4><ol><li>–with-MD5=DIR：指定MD5源码位置，在编译Nginx时会进入该目录编译MD5源码。注意：Nginx已经有MD5算法的实现。</li><li>–with-MD5-opt=OPTIONS：编译MD5源码时希望加入的编译选项</li><li>–with-MD5-asm：使用MD5的汇编源码</li><li>–with-SHA1=DIR：指定SHA1源码位置，在编译Nginx时会进入该目录编译SHA1源码。注意：openssl中已经有SHA1算法</li><li>–with-SHA1-opt=OPTIONS：编译SHA1源码时希望加入的编译选项</li><li>–with-SHA1-asm：使用SHA1的汇编源码</li></ol><h4 id="_3-5-zlib" tabindex="-1"><a class="header-anchor" href="#_3-5-zlib" aria-hidden="true">#</a> 3.5 ZLIB</h4><ol><li>–with-zlib=DIR：指定ZLIB源码位置。编译Nginx时会进入该目录编译zlib源码。如果使用了gzip压缩功能，就需要zlib库的支持</li><li>–with-zlib-opt=OPTIONS：编译zlib源码时希望加入的编译选项</li><li>–with-zlib-asn=CPU：指定对特定的CPU使用的zlib库的汇编优化功能，目前只支持两种架构：pentium和pentiumpro</li></ol><h3 id="四、事件模块" tabindex="-1"><a class="header-anchor" href="#四、事件模块" aria-hidden="true">#</a> 四、事件模块</h3><ol><li>–with-rtsig_module：使用rtsig模块处理事件驱动。默认情况下Nginx是不安装rtsig模块。</li><li>–with-select_module：使用select模块处理事件驱动。select是linux提供的一种多路复用机制，在epoll调用没有诞生前，例如在linux2.4及以前的内核中，select用于支持服务器提供高并发连接。默认情况下Nginx是不安装select模块。</li><li>–without-select_module：不安装select_module</li><li>–with-poll_module：使用poll模块处理事件驱动。poll的性能与select类似，在大量并发连接下性能都远不如epoll。默认情况下Nginx不安装poll模块。</li><li>–without-poll_module：不安装poll模块</li><li>–with-aio_module：使用AIO方式处理事件驱动。只有FreeBSD操作系统才能使用。</li></ol><h3 id="五、核心http模块-默认安装-以下为去除指令" tabindex="-1"><a class="header-anchor" href="#五、核心http模块-默认安装-以下为去除指令" aria-hidden="true">#</a> 五、核心HTTP模块（默认安装），以下为去除指令</h3><ol><li>–without-http_charset_module：不安装http charset模块。这个模块可以将服务器发出的HTTP相应重编码</li><li>–without-http_gzip_module：不安装http gzip模块。在服务器发出的HTTP相应包中，这个模块可以按照配置文件指定的content-type对特定大小的HTTP相应包体执行gzip压缩。</li><li>–without-http_ssi_module：不安装http ssi模块。该模块可以在向用户返回HTTP响应包体中加入特定的内容，如HTML文件中固定的页头和页尾。</li><li>–without-http_userid_module：不安装http userid模块。这个模块可以通过HTTP请求头部信息里的一些字段认证用户信息，以确定请求是否合法。</li><li>–without-http_access_module：不安装http access模块。这个模块可以根据IP地址限制能够访问服务器的客户端。</li><li>–without-http_auth_basic_module：不安装http auth basic模块。这个模块可以提供最简单的用户名/密码认证。</li><li>**–without-http_mirror_module **：不安装http mirror模块。</li><li>–without-http_autoindex_module：不安装http autoindex模块。该模块提供简单的目录浏览功能。</li><li>–without-http_geo_module：不安装http geo模块。该模块可以定义一些变量，这些变量的值将与客户端的IP地址关联，这样Nginx针对不同地区的客户端返回不一样的结果，例如不同地区显示不同语言的网页。</li><li>–without-http_map_module：不安装http map模块。这个模块可以建立一个key/value映射表，不同的key得到相应的value，这样可以针对不同URL做特殊处理。例如返回302重定向相应时，可以期望URL不同时返回的Location字段也不一样。</li><li>–without-http_split_clients_module：不安装http split client模块。该模块会根据客户端的信息，例如IP地址、header头、cookie等，来区分处理。</li><li>–without-http_referer_module：不安装http referer模块。该模块可以根据请求中的referer字段来拒绝请求。</li><li>–without-http_rewrite_module：不安装http rewrite模块，该模块提供HTTP请求在Nginx服务内部的重定向功能，依赖PCRE库。</li><li>–without-http_proxy_module：不安装http proxy模块。该模块提供最基本的HTTP反向代理功能。</li><li>–without-http_fastcgi_module：不安装http fastcgui模块。该模块提供FastCGUI功能。</li><li>–without-http_uwsgi_module：不安装http uwsgi模块。该模块提供uWSGI功能。</li><li>**–without-http_scgi_module **：</li><li>**–without-http_grpc_module **：</li><li>–without-http_memcached_module：不安装http memcached模块。该模块使得Nginx直接由上游的memcached服务读取数据，并简单地适配成HTTP响应返回给客户端。</li><li>–without-http_limit_conn_module：</li><li>–without-http_limit_zone_module：不安装http limit zone模块。该模块针对某个IP地址限制并发连接数。例如，使Nginx对一个IP地址仅允许一个链接。</li><li>–without-http_limit_req_module：不安装http limit req模块。该模块针对某个IP地址限制并发请求数。</li><li>–without-http_empty_gif_module：不安装http empty gif模块。该模块可以使得Nginx在收到无效请求时，立刻返回内存中的1 X 1像素的GIF图片。这种好处在于，对于明显的无效请求不会去试图浪费服务器资源。</li><li>–without-http_browser_module：不安装http brower模块。该模块会根据HTTP请求中的user-agent字段来是被浏览器。</li><li>–without-http_upstream_hash_module：</li><li>–without-http_upstream_ip_hash_module：不安装http upstream ip hash模块。该模块提供当Nginx与后端server建立连接时，会根据IP做散列运算来决定与后端那台server通信，从而实现负载均衡</li><li>–without-http_upstream_least_conn_module:</li><li>–without-http_upstream_random_module:</li><li>–without-http_upstream_keepalive_module:</li><li>–without-http_upstream_zone_module：</li></ol><h3 id="六、-http模块-默认不安装" tabindex="-1"><a class="header-anchor" href="#六、-http模块-默认不安装" aria-hidden="true">#</a> 六、 HTTP模块（默认不安装）</h3><ol><li>–with-http_ssl_module：安装http ssl模块。该模块使Nginx支持SSL协议，提供HTTPS服务。注意：该模块依赖openssl</li><li>**–with-http_v2_module **：安装http v2模块。</li><li>–with-http_realip_module：安装http realip模块。该模块可以从客户端请求里的header信息（如X-Real-IP或者X-Forwarder-For）获取真正客户端的IP地址。</li><li>–with-http_addition_module：安装http addition模块。该模块可以在返回客户端的HTTP包体头部或者尾部增加内容。</li><li>–with-http_xslt_module：安装http xslt模块。这个模块可以使XML格式的数据在发给客户端前加入XSL渲染。注意：该模块依赖于libxml2和libxslt。</li><li>–with-http_xslt_module=dynamic ：开启动态http xslt模块。</li><li>–with-http_image_filter_module：安装http image_filter模块。这个模块将符合配置的图片实时压缩为指定大小的缩略图再发送给用户，目前支持JPEG、PNG、GIF格式。注意：该模块依赖与libgd库。</li><li>–with-http_image_filter_module=dynamic：开启动态http image filter模块。</li><li>–with-http_geoip_module：安装http geoip模块。该模块可以一句MaxMind GeoIP的IP地址数据库对客户端的IP地址得到实际的地理位置。注意：该模块依赖于MaxMindGeoIP的库文件</li><li>–with-http_geoip_module=dynamic：开启动态http geoip模块。</li><li>–with-http_sub_module：安装http sub模块。该模块可以在Nginx返回客户端的HTTP响应包中将指定字符串替换为自己需要的字符串。</li><li>–with-http_dav_module：安装http dav模块。该模块可以让Nginx支持Webdav标准，如支持Webdav中的PUT、DELETE、COPY、MOVE、MKCOL等请求。</li><li>–with-http_flv_module：安装http flv模块。该模块可以在向客户端返回响应时，对flv格式的视频文件在header头做一些处理，使得客户端可以观看、拖放FLV视频。</li><li>–with-http_MP4_module：安装http MP4模块。该模块时客户端可以观看、拖动MP4视频。</li><li>–with-http_gunzip_module ：安装http gunzip模块。</li><li>–with-http_gzip_static_module：安装http gzip_static模块。如果采用gzip把一些文档进行gzip格式压缩后再返回给客户端，那么对同一个文件每次都会重新压缩，这是比较消耗服务器CPU资源的。gzip static模块可以在做gzip压缩前，先查看相同位置是否有已经做过gzip压缩的.gz文件，如果有就直接返回。</li><li>–with-http_auth_request_module ：安装http auth request模块。</li><li>–with-http_random_index_module：安装http random_index模块。该模块在客户端访问某个目录时，随机返回该目录下的任意文件。</li><li>–with-http_secure_link_module：安装http secure link模块。该模块提供一种验证请求是否有效的机制。例如，它会验证URL中需要加入token参数是否属于特定客户端发来的，以及检查时间戳是否过期。</li><li>–with-http_degradation_module：安装http dagradation模块。该模块针对一些特殊的系统调用（如sbrk）做优化，如直接返回HTTP响应码为204或者404.目前不支持Linux系统</li><li>–with-http_slice_module ：安装http slice模块。</li><li>–with-http_stub_status_module：安装http stub_status模块。该模块可以让运行中的Nginx提供性能统计页面，获取相关的并发链接。</li><li>–with-goole_perftools__module：安装goole perftools模块。该模块提供Goole的性能测试工具</li></ol><h3 id="七、邮箱模块" tabindex="-1"><a class="header-anchor" href="#七、邮箱模块" aria-hidden="true">#</a> 七、邮箱模块</h3><ol><li>–with-mail：安装邮件服务器反向代理模块，使Nginx可以反向代理IMAP、POP3、SMTP等协议。</li><li>–with-mail_ssl_module：安装mail ssl模块。该模块可以使IMAP、POP3、SMTP等协议基于SSL/TLS协议之上。</li><li>–without-mail_pop_module：不安装mail pop3模块。在使用–with-mail后pop3模块是默认安装的，此选项取消安装。</li><li>–without-mail_imap_module：不安装mail imap模块。在使用–with-mail后imap模块是默认安装的，此选项取消安装。</li><li>–without-mail_smtp_module：不安装mail smtp模块。在使用–with-mail后smtp模块是默认安装的，此选项取消安装。</li></ol><h3 id="八、stream" tabindex="-1"><a class="header-anchor" href="#八、stream" aria-hidden="true">#</a> 八、Stream</h3><ol><li>–with-stream：开启TCP/IP代理模块</li><li>–with-stream=dynamic：开启动态TCP/IP代理模块</li><li>–with-stream_ssl_module：</li><li>–with-stream_realip_module：</li><li>–with-stream_geoip_module：</li><li>–with-stream_geoip_module=dynamic：</li><li>–with-stream_ssl_preread_module：</li><li>–without-stream_limit_conn_module：</li><li>–without-stream_access_module：</li><li>–without-stream_geo_module：</li><li>–without-stream_map_module：</li><li>–without-stream_split_clients_module：</li><li>–without-stream_return_module：</li><li>–without-stream_upstream_hash_module：</li><li>–without-stream_upstream_least_conn_module：</li><li>–without-stream_upstream_random_module：</li><li>–without-stream_upstream_zone_module：</li></ol><h3 id="九、其他参数" tabindex="-1"><a class="header-anchor" href="#九、其他参数" aria-hidden="true">#</a> 九、其他参数</h3><ol><li><p>–with-debug：将Nginx需要打印debug调试级别日志的代码编译进Nginx。这样可以在Nginx运行时通过修改配置文件来使其打印调试日志，这对于研究、定位Nginx问题非常有帮助。</p></li><li><p>–add-module=PATH：当在Nginx里加入第三方模块时，通过这个参数指定第三方模块的路径。</p></li><li><p>–add-dynamic-PATH：启动动态外部模块</p></li><li><p>–with-compat：动态模块兼容</p></li><li><p>–without-http：禁用HTTP服务器。</p></li><li><p>–without-http-cache：禁用HTTP服务器里的缓存cache特性。</p></li><li><p>–with-file-aio：启用文件的异步I/O功能来处理磁盘文件，这需要linux内核支持原生的异步I/O。</p></li><li><p>–with-ipv6：使Nginx支持IPV6。</p></li><li><p>–user=USER：指定Nginx woker进程运行时所属的用户。注意：不要将启动woker进程的用户设为root，在woker进程出问题时master进程要具备停止/启动woker进程的能力。</p></li><li><p>–group=GROUP：指定Nginx worker进程运行时所属的组。</p></li><li><p>–with-cpp_test_module：开启C++测试模块。</p></li><li><p>–with-threads：启动线程池支持。</p></li></ol>',28),a=[o];function p(r,_){return t(),l("div",null,a)}const u=i(h,[["render",p],["__file","Nginx的configuration的配置参数.html.vue"]]);export{u as default};
