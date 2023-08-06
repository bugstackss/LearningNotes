import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,d as n,e as s,b as t,a as e,r as i}from"./app.9b10ba0a.js";const l="/assets/7cdb21cf5df63e0f78839315e2953e03eed9de84.1eeeadb4.png",d="/assets/7815086ab584cb98b96c542cde0f7347320364b8.ec18757f.png",u="/assets/6503382b9601cfc3e01d146acc072a6da94db603.f1bbadfe.png",r="/assets/24762725394ed29f5644b01259f0b0ef.3d1db0c0.png",k="/assets/1b95ed0be7824a04e45b0dd9f776037bcb441417.39e5a2db.png",m={},h=n("h1",{id:"_01-【ajax概述-http相关问题】",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_01-【ajax概述-http相关问题】","aria-hidden":"true"},"#"),s(" 01 【AJAX概述 HTTP相关问题】")],-1),v=n("h2",{id:"_1-ajax简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-ajax简介","aria-hidden":"true"},"#"),s(" 1.AJAX简介")],-1),b={href:"https://so.csdn.net/so/search?q=XML&spm=1002101.01.70",target:"_blank",rel:"noopener noreferrer"},g=n("strong",null,"无刷新获取数据",-1),x=e('<h2 id="_2-ajax-的特点" tabindex="-1"><a class="header-anchor" href="#_2-ajax-的特点" aria-hidden="true">#</a> 2.AJAX 的特点</h2><h3 id="_2-1-ajax-的优点" tabindex="-1"><a class="header-anchor" href="#_2-1-ajax-的优点" aria-hidden="true">#</a> 2.1 AJAX 的优点</h3><ol><li>可以无需刷新页面而与服务器端进行通信</li><li>允许你根据用户事件来更新部分页面内容</li></ol><h3 id="_2-2-ajax-的缺点" tabindex="-1"><a class="header-anchor" href="#_2-2-ajax-的缺点" aria-hidden="true">#</a> 2.2 AJAX 的缺点</h3><ol><li>没有浏览历史，不能回退</li><li>存在跨域问题(同源)</li><li>SEO 不友好</li></ol><h2 id="_2-http相关问题" tabindex="-1"><a class="header-anchor" href="#_2-http相关问题" aria-hidden="true">#</a> 2.HTTP相关问题</h2><h3 id="_2-1-mdn-文档" tabindex="-1"><a class="header-anchor" href="#_2-1-mdn-文档" aria-hidden="true">#</a> 2.1 MDN 文档</h3>',7),_={href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview",target:"_blank",rel:"noopener noreferrer"},f=e('<h3 id="_2-2-http-请求交互的基本过程" tabindex="-1"><a class="header-anchor" href="#_2-2-http-请求交互的基本过程" aria-hidden="true">#</a> 2.2 HTTP 请求交互的基本过程</h3><p><img src="'+l+`" alt="process"></p><ol><li>前后应用从浏览器端向服务器发送HTTP 请求(请求报文)</li><li>后台服务器接收到请求后, 调度服务器应用处理请求, 向浏览器端返回HTTP响应(响应报文)</li><li>浏览器端接收到响应, 解析显示响应体/调用监视回调</li></ol><h3 id="_2-3-http-报文" tabindex="-1"><a class="header-anchor" href="#_2-3-http-报文" aria-hidden="true">#</a> 2.3 HTTP 报文</h3><p>HTTP（hypertext transport protocol）协议『超文本传输协议』，协议详细规定了浏览器和万维网服务器之间互相通信的规则。 约定, 规则</p><h4 id="_2-3-1-请求报文" tabindex="-1"><a class="header-anchor" href="#_2-3-1-请求报文" aria-hidden="true">#</a> 2.3.1 请求报文</h4><p>重点是格式与参数</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>行      POST  /s?ie=utf-8  HTTP/1 
头      Host: www.baidu.com
        Cookie: BAIDUID=AD3B0FA706E; BIDUPSID=AD3B0FA706;    
        Content-type: application/x-www-form-urlencoded
        User-Agent: chrome 83
空行
体      username=admin&amp;password=admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注:post请求才有请求体</p></blockquote><p><strong>Request Headers</strong></p><table><thead><tr><th>Request Header</th><th>说明</th></tr></thead><tbody><tr><td>Accept</td><td>浏览器可接收的数据格式（如：<em>/</em>）</td></tr><tr><td>Accept-Language</td><td>客户端接收的语言类型（如：zh-CN,en-US）</td></tr><tr><td>Connection</td><td>维护客户端和服务端的连接关系（如：Keep-Alive）</td></tr><tr><td>Host</td><td>连接的目标主机和端口号（如：localhost:8080）</td></tr><tr><td>User-Agent</td><td>客户端版本号的名字</td></tr><tr><td>Accept-Encoding</td><td>客户端能接收的压缩数据的类型（如：gzip）</td></tr><tr><td>Cookie</td><td>客户端暂存服务端的信息</td></tr><tr><td>Content-type</td><td>发送数据的格式，get请求没有（如：application/json）</td></tr></tbody></table><h4 id="_2-3-2-响应报文" tabindex="-1"><a class="header-anchor" href="#_2-3-2-响应报文" aria-hidden="true">#</a> 2.3.2 响应报文</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>行      HTTP/1  200  OK
头      Content-Type: text/html;charset=utf-8
       Set-Cookie: BD_CK_SAM=1;path=/
        Content-length: 2048
        Content-encoding: gzip
空行    
体      &lt;html&gt;
            &lt;head&gt;
            &lt;/head&gt;
            &lt;body&gt;
                &lt;h1&gt;尚硅谷&lt;/h1&gt;
            &lt;/body&gt;
        &lt;/html&gt;
        (html 文本/json 文本/js/css/图片...)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+'" alt="network"></p><blockquote><ul><li>负载(Payload)用来查看请求发送的查询字符串和form data</li><li>Preview用来查看解析后的返回数据</li><li>Response用来查看返回数据</li></ul></blockquote><p><strong>Response Headers</strong></p><table><thead><tr><th>Response Headers</th><th>说明</th></tr></thead><tbody><tr><td>Content-Type</td><td>服务端发送的类型及采用的编码方式（如：text/html; charset=utf-8）</td></tr><tr><td>Content-Encoding</td><td>服务端能够发送压缩编码类型（如：gzip）</td></tr><tr><td>Content-Length</td><td>服务端发送的压缩数据的长度（如：128）</td></tr><tr><td>Set-Cookie</td><td>服务端发送到客户端的暂存数据</td></tr><tr><td>Cache-Control</td><td>缓存相关</td></tr><tr><td>Last-Modified</td><td>缓存相关</td></tr><tr><td>Etag</td><td>缓存相关</td></tr></tbody></table><h4 id="_2-3-3-post请求体参数格式" tabindex="-1"><a class="header-anchor" href="#_2-3-3-post请求体参数格式" aria-hidden="true">#</a> 2.3.3 post请求体参数格式</h4><ol><li>Content-Type: application/x-www-form-urlencoded;charset=utf-8 用于键值对参数，参数的键值用=连接, 参数之间用&amp;连接 例如: <code>name=%E5%B0%8F%E6%98%8E&amp;age=12</code></li><li>Content-Type: application/json;charset=utf-8 用于 json 字符串参数 例如: <code>{&quot;name&quot;: &quot;%E5%B0%8F%E6%98%8E&quot;, &quot;age&quot;: 12}</code></li><li>Content-Type: multipart/form-data 用于文件上传请求</li></ol><h3 id="_2-4-常见的响应状态码" tabindex="-1"><a class="header-anchor" href="#_2-4-常见的响应状态码" aria-hidden="true">#</a> 2.4 常见的响应状态码</h3><p><strong>状态码</strong></p><ul><li><code>1xx</code>：指示信息-表示请求已接收，继续处理</li><li><code>2xx</code>：成功-表示请求已被成功接收</li><li><code>3xx</code>：重定向-要完成请求必须进行更进一步的操作</li><li><code>4xx</code>：客户端错误-请求有语法错误或请求无法实现</li><li><code>5xx</code>：服务器错误-服务器未能实现合法的请求</li></ul><p><strong>常见的http状态码</strong></p><ul><li>****<code>200</code>：客户端请求成功</li><li><code>206</code>：客户发送带有<code>range</code>头的GET请求，服务器完成了它</li><li><code>301</code>：重定向（永久）</li><li><code>302</code>：重定向（临时）</li><li><code>304</code>：资源未被修改，有缓存</li><li><code>403</code>：请求被拒绝</li><li><code>404</code>：资源未找到</li><li><code>500</code>：服务器错误</li><li><code>504</code>：网关超时</li></ul><h3 id="_2-5-不同类型的请求及其作用" tabindex="-1"><a class="header-anchor" href="#_2-5-不同类型的请求及其作用" aria-hidden="true">#</a> 2.5 不同类型的请求及其作用</h3><ol><li><code>GET</code>: 从服务器端<strong>读取</strong>数据（查）</li><li><code>POST</code>: 向服务器端<strong>添加</strong>新数据 （增）</li><li><code>PUT</code>: 更新资源 （改）</li><li><code>DELETE</code>: <strong>删除</strong>服务器端数据 （删）</li></ol><h2 id="_3-原生ajax-的基本使用-xhr" tabindex="-1"><a class="header-anchor" href="#_3-原生ajax-的基本使用-xhr" aria-hidden="true">#</a> 3. 原生AJAX 的基本使用 XHR</h2><h3 id="_3-1-理解" tabindex="-1"><a class="header-anchor" href="#_3-1-理解" aria-hidden="true">#</a> 3.1 理解</h3><ol><li>使用<code>XMLHttpRequest</code> (XHR)对象可以与服务器交互, 也就是发送ajax 请求</li><li>前端可以获取到数据，而无需让整个的页面刷新。</li><li>这使得Web 页面可以只更新页面的局部，而不影响用户的操作。</li></ol>',29),y={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest",target:"_blank",rel:"noopener noreferrer"},T=n("code",null,"XMLHttpRequest",-1),A=e(`<h3 id="_3-2-使用步骤" tabindex="-1"><a class="header-anchor" href="#_3-2-使用步骤" aria-hidden="true">#</a> 3.2 使用步骤</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 请求方式</span>
xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> url<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//可以设置请求头，一般不设置</span>
xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;application/x-www-form-urlencoded&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//get请求不传 body 参数，只有post请求使用</span>
xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span> 
<span class="token comment">// 事件绑定 处理服务端返回的结果</span>
<span class="token comment">// on  when 当....时候</span>
<span class="token comment">// readystate 是 xhr 对象中的属性, 表示状态 0 1 2 3 4</span>
<span class="token comment">//状态 0 表示未初始化  1 open方法调用完毕 2 send方法已经调用完毕 3 服务端返回部分结果 4 服务端返回了所有结果</span>
<span class="token comment">// change  改变</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token comment">//判断 (服务端返回了所有的结果)</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">==</span> <span class="token number">4</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//状态码</span>
           console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//状态字符串</span>
           console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span><span class="token function">getAllResponseHeaders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//所有响应头</span>
           console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//响应体</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-1-get请求" tabindex="-1"><a class="header-anchor" href="#_3-2-1-get请求" aria-hidden="true">#</a> 3.2.1 get请求</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>      <span class="token comment">//  创建对象 </span>
      <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 2. 初始化 设置请求方法和url</span>
      xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;http://127.0.0.1:8000/server&#39;</span><span class="token punctuation">)</span>
      <span class="token comment">// 3. 发送</span>
      xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 4. 事件绑定 处理服务端返回的结果</span>
      xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// readyState 是 xhr 对象中的属性, 表示状态 0 1 2 3 4</span>
        <span class="token comment">//判断 (服务端返回了所有的结果)</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token comment">//判断响应状态码 200  404  403 401 500</span>
          <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">&gt;=</span> <span class="token number">200</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 处理结果 行 头 空行 体</span>
            <span class="token comment">// 响应</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;状态码&#39;</span><span class="token punctuation">,</span> xhr<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 状态码</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;状态字符串&#39;</span><span class="token punctuation">,</span> xhr<span class="token punctuation">.</span>statusText<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 状态字符串</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;所有响应头&#39;</span><span class="token punctuation">,</span> xhr<span class="token punctuation">.</span><span class="token function">getAllResponseHeaders</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 所有响应头</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;响应体&#39;</span><span class="token punctuation">,</span> xhr<span class="token punctuation">.</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 响应体</span>
            <span class="token comment">//设置 result 的文本</span>
            result<span class="token punctuation">.</span>innerHTML<span class="token operator">=</span>xhr<span class="token punctuation">.</span>response<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>GET 请求设置请求参数</strong></p><p>设置url参数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;http://127.0.0.1:8000/server?a=100&amp;b=200&amp;c=300&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+u+'" alt="image-20220624212741956"></p><p><img src="'+r+`" alt=""></p><h4 id="_3-2-2-post请求" tabindex="-1"><a class="header-anchor" href="#_3-2-2-post请求" aria-hidden="true">#</a> 3.2.2 post请求</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>      <span class="token comment">//  创建对象</span>
      <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 2. 初始化 设置类型（请求方式）与url</span>
      xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;http://127.0.0.1:8000/server&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//设置请求头</span>
       xhr<span class="token punctuation">.</span><span class="token function">setRequestHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Content-Type&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;application/x-www-form-urlencoded&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 自定义头信息</span>
      xhr<span class="token punctuation">.</span><span class="token function">setRequesHeader</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ykyk&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 3. 发送   设置请求参数（请求体）</span>
      xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;a=100&amp;b=200&amp;c=300&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 4. 事件绑定</span>
      xhr<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 判断</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">if</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>status <span class="token operator">&gt;=</span><span class="token number">200</span> <span class="token operator">&amp;&amp;</span> xhr<span class="token punctuation">.</span>status <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 处理服务端返回的结果</span>
            result<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> xhr<span class="token punctuation">.</span>response<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>后端设置</strong></p><p>设置响应头允许自定义请求头 post改成all</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>response<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Allow-Header&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-2-3-取消发送无用的参数" tabindex="-1"><a class="header-anchor" href="#_3-2-3-取消发送无用的参数" aria-hidden="true">#</a> 3.2.3 取消发送无用的参数</h4><p>有的时候有的参数是可以不填写的，这时尽管是空串也会随着请求发过去，我们可以将参数的值设置成<code>undefined</code>，这样就不会随请求发过去了</p><h3 id="_3-3-请求超时与网络异常" tabindex="-1"><a class="header-anchor" href="#_3-3-请求超时与网络异常" aria-hidden="true">#</a> 3.3 请求超时与网络异常</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 超时设置 （2秒） 超过2s请求就取消  status 状态变成 cancel </span>
xhr<span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token number">2000</span><span class="token punctuation">;</span>
<span class="token comment">// 超时回调</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">ontimeout</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;网络超时，请稍后重试&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 网络异常回调</span>
xhr<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;网络异常，请稍后重试&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-取消请求" tabindex="-1"><a class="header-anchor" href="#_3-4-取消请求" aria-hidden="true">#</a> 3.4 取消请求</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//     手动取消请求        </span>
<span class="token comment">//    network中的status中pending为等待中</span>
<span class="token comment">//    取消就变成cancel</span>
xhr<span class="token punctuation">.</span><span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-ajax-请求状态" tabindex="-1"><a class="header-anchor" href="#_3-5-ajax-请求状态" aria-hidden="true">#</a> 3.5 AJAX 请求状态</h3>`,21),H=n("code",null,"xhr.readyState",-1),j={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/readyState",target:"_blank",rel:"noopener noreferrer"},w=e('<p><img src="'+k+'" alt="status"></p><ul><li>0: 表示XMLHttpRequest 实例已经生成，但是open()方法还没有被调用</li><li>1: 表示send()方法还没有被调用，仍然可以使用setRequestHeader()，设定HTTP请求的头信息</li><li>2: 表示send()方法已经执行，并且头信息和状态码已经收到</li><li>3: 表示正在接收服务器传来的body 部分的数据</li><li>4: 表示服务器数据已经完全接收，或者本次接收已经失败了</li></ul><h3 id="_3-6-api总结" tabindex="-1"><a class="header-anchor" href="#_3-6-api总结" aria-hidden="true">#</a> 3.6 API总结</h3><ul><li>XMLHttpRequest()：创建 XHR 对象的构造函数</li><li>status：响应状态码值，如 200、404</li><li>statusText：响应状态文本，如 ’ok‘、‘not found’</li><li>readyState：标识请求状态的只读属性 0-1-2-3-4</li><li>onreadystatechange：绑定 readyState 改变的监听</li><li>responseType：指定响应数据类型，如果是 ‘json’，得到响应后自动解析响应</li><li>response：响应体数据，类型取决于 responseType 的指定</li><li>timeout：指定请求超时时间，默认为 0 代表没有限制</li><li>ontimeout：绑定超时的监听</li><li>onerror：绑定请求网络错误的监听</li><li>open()：初始化一个请求，参数为：(method, url[, async])</li><li>send(data)：发送请求</li><li>abort()：中断请求 （发出到返回之间）</li><li>getResponseHeader(name)：获取指定名称的响应头值</li><li>getAllResponseHeaders()：获取所有响应头组成的字符串</li><li>setRequestHeader(name, value)：设置请求头</li></ul>',4);function C(X,q){const a=i("ExternalLinkIcon");return o(),c("div",null,[h,v,n("p",null,[s("AJAX 全称为Asynchronous JavaScript And "),n("a",b,[s("XML"),t(a)]),s("，就是异步的JS 和XML 通过AJAX 可以在浏览器中向服务器发送异步请求，最大的优势："),g,s(" AJAX 不是新的编程语言，而是一种将现有的标准组合在一起使用的新方式")]),x,n("p",null,[n("a",_,[s("https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview"),t(a)])]),f,n("p",null,[n("a",y,[s("https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest"),t(a)]),T,s("，AJAX 的所有操作都是通过该对象进行的")]),A,n("p",null,[H,s(" 可以用来查看请求当前的状态 "),n("a",j,[s("https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/readyState"),t(a)])]),w])}const E=p(m,[["render",C],["__file","AJAX概述 HTTP相关问题.html.vue"]]);export{E as default};
