import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,a as t}from"./app.9b10ba0a.js";const p="/assets/ea56ae54-a7c2-471f-a628-c66cadfe1d45.9fa07c17.png",e={},o=t('<h1 id="_05、操作blob类型字段" tabindex="-1"><a class="header-anchor" href="#_05、操作blob类型字段" aria-hidden="true">#</a> 05、操作BLOB类型字段</h1><h2 id="_5-1-mysql-blob类型" tabindex="-1"><a class="header-anchor" href="#_5-1-mysql-blob类型" aria-hidden="true">#</a> 5.1 MySQL BLOB类型</h2><ul><li>MySQL中，BLOB是一个二进制大型对象，是一个可以存储大量数据的容器，它能容纳不同大小的数据。</li><li>插入BLOB类型的数据必须使用PreparedStatement，因为BLOB类型的数据无法使用字符串拼接写的。</li><li>MySQL的四种BLOB类型(除了在存储的最大信息量上不同外，他们是等同的)</li></ul><p><img src="'+p+`" alt="ea56ae54-a7c2-471f-a628-c66cadfe1d45"></p><ul><li><p>实际使用中根据需要存入的数据大小定义不同的BLOB类型。</p></li><li><p>需要注意的是：如果存储的文件过大，数据库的性能会下降。</p></li><li><p>如果在指定了相关的Blob类型以后，还报错：xxx too large，那么在mysql的安装目录下，找my.ini文件加上如下的配置参数： <strong>max_allowed_packet</strong>=16M。同时注意：修改了my.ini文件之后，需要重新启动mysql服务。</p></li></ul><h2 id="_5-2-向数据表中插入大数据类型" tabindex="-1"><a class="header-anchor" href="#_5-2-向数据表中插入大数据类型" aria-hidden="true">#</a> 5.2 向数据表中插入大数据类型</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//获取连接</span>
<span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token class-name">JDBCUtils</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
<span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;insert into customers(name,email,birth,photo)values(?,?,?,?)&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">PreparedStatement</span> ps <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 填充占位符</span>
ps<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;徐海强&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ps<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;xhq@126.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ps<span class="token punctuation">.</span><span class="token function">setDate</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span>Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 操作Blob类型的变量</span>
<span class="token class-name">FileInputStream</span> fis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;xhq.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ps<span class="token punctuation">.</span><span class="token function">setBlob</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> fis<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//执行</span>
ps<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
fis<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">JDBCUtils</span><span class="token punctuation">.</span><span class="token function">closeResource</span><span class="token punctuation">(</span>conn<span class="token punctuation">,</span> ps<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-3-修改数据表中的blob类型字段" tabindex="-1"><a class="header-anchor" href="#_5-3-修改数据表中的blob类型字段" aria-hidden="true">#</a> 5.3 修改数据表中的Blob类型字段</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token class-name">JDBCUtils</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;update customers set photo = ? where id = ?&quot;</span><span class="token punctuation">;</span>
<span class="token class-name">PreparedStatement</span> ps <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 填充占位符</span>
<span class="token comment">// 操作Blob类型的变量</span>
<span class="token class-name">FileInputStream</span> fis <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token string">&quot;coffee.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ps<span class="token punctuation">.</span><span class="token function">setBlob</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> fis<span class="token punctuation">)</span><span class="token punctuation">;</span>
ps<span class="token punctuation">.</span><span class="token function">setInt</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

ps<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

fis<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">JDBCUtils</span><span class="token punctuation">.</span><span class="token function">closeResource</span><span class="token punctuation">(</span>conn<span class="token punctuation">,</span> ps<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-4-从数据表中读取大数据类型" tabindex="-1"><a class="header-anchor" href="#_5-4-从数据表中读取大数据类型" aria-hidden="true">#</a> 5.4 从数据表中读取大数据类型</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;SELECT id, name, email, birth, photo FROM customer WHERE id = ?&quot;</span><span class="token punctuation">;</span>
conn <span class="token operator">=</span> <span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ps <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
ps<span class="token punctuation">.</span><span class="token function">setInt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
rs <span class="token operator">=</span> ps<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>rs<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token class-name">Integer</span> id <span class="token operator">=</span> rs<span class="token punctuation">.</span><span class="token function">getInt</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> name <span class="token operator">=</span> rs<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">String</span> email <span class="token operator">=</span> rs<span class="token punctuation">.</span><span class="token function">getString</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Date</span> birth <span class="token operator">=</span> rs<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">Customer</span> cust <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Customer</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> name<span class="token punctuation">,</span> email<span class="token punctuation">,</span> birth<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>cust<span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token comment">//读取Blob类型的字段</span>
	<span class="token class-name">Blob</span> photo <span class="token operator">=</span> rs<span class="token punctuation">.</span><span class="token function">getBlob</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">InputStream</span> is <span class="token operator">=</span> photo<span class="token punctuation">.</span><span class="token function">getBinaryStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token class-name">OutputStream</span> os <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">&quot;c.jpg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">byte</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">(</span>len <span class="token operator">=</span> is<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		os<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>buffer<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
    <span class="token class-name">JDBCUtils</span><span class="token punctuation">.</span><span class="token function">closeResource</span><span class="token punctuation">(</span>conn<span class="token punctuation">,</span> ps<span class="token punctuation">,</span> rs<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
	<span class="token keyword">if</span><span class="token punctuation">(</span>is <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		is<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
		
	<span class="token keyword">if</span><span class="token punctuation">(</span>os <span class="token operator">!=</span>  <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		os<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),c=[o];function l(u,i){return s(),a("div",null,c)}const d=n(e,[["render",l],["__file","05、操作BLOB类型字段.html.vue"]]);export{d as default};
