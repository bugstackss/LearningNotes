import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as l,d as s,e as n,b as p,a,r as c}from"./app.9b10ba0a.js";const o="/assets/image-20230625233214439.140d3cab.png",u="/assets/image-20230625233237235.428b0f34.png",d="/assets/image-20230625233523462.8c267b57.png",r="/assets/image-20230625233626972.552e5ff1.png",m="/assets/image-20230625233733880.0338cdac.png",v="/assets/image-20230625233834231.79644076.png",k="/assets/image-20230625234039193.ffbcc340.png",b="/assets/image-20230625234430501.e1d0d72a.png",g="/assets/image-20230625234521181.5bece49a.png",q="/assets/image-20230625234558688.d49650f4.png",h="/assets/image-20230625234919068.f29f7d12.png",_="/assets/image-20230625234900512.bbff0531.png",x="/assets/image-20230625235246055.d8696d6f.png",y="/assets/image-20230625235808443.fef4ccba.png",f="/assets/image-20230626000803143.d975ae99.png",T="/assets/image-20230626000548045.63d20fed.png",E="/assets/image-20230626000736868.e5053c20.png",z="/assets/image-20230626001038386.2aa6e15e.png",S="/assets/image-20230626001315296.d4ac10ee.png",G="/assets/image-20230626001609361.9a185dfe.png",P="/assets/image-20230626002049902.2700e525.png",L="/assets/image-20230626002701117.3e763f6f.png",U="/assets/image-20230626002913727.0cd9b532.png",H="/assets/image-20230626003046537.db77ebfc.png",w="/assets/image-20230626003902080.74280bff.png",I="/assets/image-20230626004110206.c193862f.png",D="/assets/image-20230626004729673.2aaf9f27.png",F="/assets/image-20230626005007125.bb059a3c.png",K="/assets/image-20230626005326600.30eac0b9.png",A="/assets/image-20230626012603255.d2a48083.png",N="/assets/image-20230626012719910.c9d3431e.png",O="/assets/image-20230626013007763.f49a5b64.png",J="/assets/image-20230626013216688.5a7ff601.png",M="/assets/image-20230626014200451.43c16bce.png",j="/assets/image-20230626013500079.d8bc2347.png",Q="/assets/image-20230626013918057.115f400f.png",V="/assets/image-20230626124705954.eb9861ec.png",B="/assets/image-20230626124815868.bfb01247.png",C="/assets/image-20230626125352394.a77c61fd.png",Y="/assets/image-20230626124915167.cd05435f.png",R="/assets/image-20230626125642153.2ce1a5d2.png",W="/assets/image-20230626125733844.a58810ca.png",X="/assets/image-20230626130814532.bf4495aa.png",Z="/assets/image-20230626130306191.3527db10.png",$="/assets/image-20230626132902637.23a63eec.png",ss="/assets/image-20230626133421629.36dfc4f5.png",ns="/assets/image-20230626133530827.cf176511.png",as="/assets/image-20230626133749935.f68b5e22.png",ts="/assets/image-20230626134009116.421f4cf6.png",es="/assets/image-20230626134108430.29619aa7.png",is="/assets/image-20230626162441150.a026c0f9.png",ls="/assets/image-20230626163145108.e5395a51.png",ps="/assets/image-20230626163322807.66a92e4d.png",cs="/assets/image-20230626163615566.a55930cb.png",os="/assets/image-20230626163844998.24b3b999.png",us="/assets/image-20230626202033763.507cf3b1.png",ds="/assets/image-20230626202317096.e6561913.png",rs="/assets/image-20230626202347827.c67f6f53.png",ms="/assets/image-20230626202740223.62de86d2.png",vs="/assets/image-20230626202934730.e52d80d2.png",ks={},bs=a(`<h2 id="一、索引操作" tabindex="-1"><a class="header-anchor" href="#一、索引操作" aria-hidden="true">#</a> 一、索引操作</h2><h3 id="创建索引" tabindex="-1"><a class="header-anchor" href="#创建索引" aria-hidden="true">#</a> 创建索引</h3><p>ES 软件的索引可以类比为 MySQL 中表的概念，创建一个索引，类似于创建一个表。查询完成后，Kibana 右侧会返回响应结果及请求状态。</p><div class="language-SHELL line-numbers-mode" data-ext="SHELL"><pre class="language-SHELL"><code>PUT test_index
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+o+'" alt="image-20230625233214439"></p><p>重复创建索引时，Kibana 右侧会返回响应结果，其中包含错误信息。</p><p><img src="'+u+`" alt="image-20230625233237235"></p><h3 id="判断索引是否存在" tabindex="-1"><a class="header-anchor" href="#判断索引是否存在" aria-hidden="true">#</a> 判断索引是否存在</h3><div class="language-SHELL line-numbers-mode" data-ext="SHELL"><pre class="language-SHELL"><code>HEAD test_index
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>存在</li></ul><p><img src="`+d+'" alt="image-20230625233523462"></p><ul><li>不存在</li></ul><p><img src="'+r+`" alt="image-20230625233626972"></p><h3 id="查询指定索引" tabindex="-1"><a class="header-anchor" href="#查询指定索引" aria-hidden="true">#</a> 查询指定索引</h3><p>根据索引名称查询指定索引，如果查询到，会返回索引的详细信息</p><div class="language-SHELL line-numbers-mode" data-ext="SHELL"><pre class="language-SHELL"><code>GET test_index
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+m+'" alt="image-20230625233733880"></p><p>如果查询的索引未存在，会返回错误信息</p><p><img src="'+v+`" alt="image-20230625233834231"></p><h3 id="查询所有索引" tabindex="-1"><a class="header-anchor" href="#查询所有索引" aria-hidden="true">#</a> 查询所有索引</h3><p>为了方便，可以查询当前所有索引数据。这里请求路径中的_cat 表示查看的意思，indices表示索引，所以整体含义就是查看当前 ES 服务器中的所有索引，就好像 MySQL 中的 show tables 的感觉</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET _cat/indices
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+k+'" alt="image-20230625234039193"></p><p>这里的查询结果表示索引的状态信息，按顺序数据表示结果如下：</p><table><thead><tr><th>内容</th><th>含义</th><th>具体描述</th></tr></thead><tbody><tr><td>green</td><td>health</td><td>当前服务器健康状态：<br><strong>green</strong>(集群完整) <strong>yellow</strong>(单点正常、集群不完整) <br>red(单点不正常)</td></tr><tr><td>open</td><td>status</td><td>索引打开、关闭状态</td></tr><tr><td>myindex</td><td>index</td><td>索引名</td></tr><tr><td>Swx2xWHLR6yv23kTrK3sAg</td><td>uuid</td><td>索引统一编号</td></tr><tr><td>1</td><td>pri</td><td>主分片数量</td></tr><tr><td>1</td><td>rep</td><td>副本数量</td></tr><tr><td>0</td><td>docs.count</td><td>可用文档数量</td></tr><tr><td>0</td><td>docs.deleted</td><td>文档删除状态（逻辑删除）</td></tr><tr><td>450b</td><td>store.size</td><td>主分片和副分片整体占空间大小</td></tr><tr><td>225b</td><td>pri.store.size</td><td>主分片占空间大小</td></tr></tbody></table><h3 id="给索引增加配置" tabindex="-1"><a class="header-anchor" href="#给索引增加配置" aria-hidden="true">#</a> 给索引增加配置</h3><p><img src="'+b+'" alt="image-20230625234430501"></p><p><img src="'+g+'" alt="image-20230625234521181"></p><p><img src="'+q+'" alt="image-20230625234558688"></p><h3 id="⚠️修改索引" tabindex="-1"><a class="header-anchor" href="#⚠️修改索引" aria-hidden="true">#</a> ⚠️修改索引</h3><p>这里尝试使用PUT进行修改索引</p><p><img src="'+h+'" alt="image-20230625234919068"></p><p>尝试以后发现并不可以修改，那么尝试POST：</p><p><img src="'+_+'" alt="image-20230625234900512"></p><p>从结果可以看出来不支持POST进行修改仅支持[HEAD,PUT,DELETE,GET]请求，但是可以发现其他的请求明显不是修改的操作，所以不支持，如果想要修改的话可以尝试重新建立索引！</p><h3 id="删除索引" tabindex="-1"><a class="header-anchor" href="#删除索引" aria-hidden="true">#</a> 删除索引</h3><p><img src="'+x+'" alt="image-20230625235246055"></p><p>这里删除如上所示，但是如果重复删除一个索引，那么就会报错，提示索引不存在！</p><p><img src="'+y+`" alt="image-20230625235808443"></p><p>索引命令操作如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建索引</span>
<span class="token comment"># PUT 索引名称（小写）</span>
PUT test_index

<span class="token comment"># PUT 索引</span>
<span class="token comment"># 增加配置：JSON格式的主体内容</span>
PUT test_index_1
<span class="token punctuation">{</span>
  <span class="token string">&quot;aliases&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;test1&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment"># 修改索引配置</span>
<span class="token comment"># ES软件不允许修改索引信息</span>
PUT test_index_1
<span class="token punctuation">{</span>
  <span class="token string">&quot;aliases&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;test1&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment"># 删除索引</span>
<span class="token comment"># delete 索引名称</span>
DELETE test_index_1

<span class="token comment"># HEAD 索引 HTTP状态码：200，,404</span>
HEAD test_index1

<span class="token comment"># 查询索引</span>
<span class="token comment"># GET 索引名称</span>
GET test_index1
GET test_index_1
GET test1

<span class="token comment"># 查询索引索引</span>
GET _cat/indices
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、文档操作" tabindex="-1"><a class="header-anchor" href="#二、文档操作" aria-hidden="true">#</a> 二、文档操作</h2><p>文档是 ES 软件搜索数据的最小单位, 不依赖预先定义的模式，所以可以将文档类比为表的一行JSON类型的数据。我们知道关系型数据库中，要提前定义字段才能使用，在Elasticsearch中，对于字段是非常灵活的，有时候，我们可以忽略该字段，或者动态的添加一个新的字段。</p><h3 id="创建文档" tabindex="-1"><a class="header-anchor" href="#创建文档" aria-hidden="true">#</a> 创建文档</h3><p><img src="`+f+'" alt="image-20230626000803143"></p><p>此处因为没有指定数据唯一性标识，所以无法使用 PUT 请求，只能使用 POST 请求，且对数据会生成随机的唯一性标识。否则会返回错误信息</p><p><img src="'+T+'" alt="image-20230626000548045"></p><p>如果在创建数据时，指定唯一性标识，那么请求范式 POST，PUT 都可以</p><p><img src="'+E+'" alt="image-20230626000736868"></p><h3 id="查询文档" tabindex="-1"><a class="header-anchor" href="#查询文档" aria-hidden="true">#</a> 查询文档</h3><p>根据唯一性标识可以查询对应的文档</p><p><img src="'+z+'" alt="image-20230626001038386"></p><h3 id="查询所有文档" tabindex="-1"><a class="header-anchor" href="#查询所有文档" aria-hidden="true">#</a> 查询所有文档</h3><p><img src="'+S+'" alt="image-20230626001315296"></p><h3 id="修改索引" tabindex="-1"><a class="header-anchor" href="#修改索引" aria-hidden="true">#</a> 修改索引</h3><p>修改文档本质上和新增文档是一样的，如果存在就修改，如果不存在就新增</p><p><img src="'+G+'" alt="image-20230626001609361"></p><h3 id="删除文档" tabindex="-1"><a class="header-anchor" href="#删除文档" aria-hidden="true">#</a> 删除文档</h3><p>删除一个文档不会立即从磁盘上移除，它只是被标记成已删除（逻辑删除）。</p><p><img src="'+P+`" alt="image-20230626002049902"></p><p>上述指令操作：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建文档（索引数据）-增加唯一性标识(手动、自动)</span>
PUT test_doc

PUT test_doc/_doc/1001
<span class="token punctuation">{</span>
  <span class="token string">&quot;id&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1001</span>,
  <span class="token string">&quot;name&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;zhangsan&quot;</span>,
  <span class="token string">&quot;age&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">30</span>
<span class="token punctuation">}</span>

POST test_doc/_doc
<span class="token punctuation">{</span>
  <span class="token string">&quot;id&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">1002</span>,
  <span class="token string">&quot;name&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;lisi&quot;</span>,
  <span class="token string">&quot;age&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">25</span>
<span class="token punctuation">}</span>

<span class="token comment"># 查询文档</span>
GET test_doc/_doc/1001

<span class="token comment"># 查询索引中所有的文档数据</span>
GET test_doc/_search

<span class="token comment"># 修改索引</span>
PUT test_doc/_doc/1001
<span class="token punctuation">{</span>
  <span class="token string">&quot;id&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">10011</span>,
  <span class="token string">&quot;name&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;zhangsan&quot;</span>,
  <span class="token string">&quot;age&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">30</span>,
  <span class="token string">&quot;tel&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">123123</span>
<span class="token punctuation">}</span>

POST test_doc/_doc/1002
<span class="token punctuation">{</span>
  <span class="token string">&quot;id&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">10022</span>,
  <span class="token string">&quot;name&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;zhangsan2&quot;</span>,
  <span class="token string">&quot;age&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">302</span>,
  <span class="token string">&quot;tel&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">12312322</span>
<span class="token punctuation">}</span>

<span class="token comment"># 删除数据</span>
DELETE test_doc/_doc/1002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、数据搜索" tabindex="-1"><a class="header-anchor" href="#三、数据搜索" aria-hidden="true">#</a> 三、数据搜索</h2><p>为了方便演示，事先准备多条数据</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PUT test_query

PUT test_query/_bulk
<span class="token punctuation">{</span><span class="token string">&quot;index&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token string">&quot;_index&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;test_query&quot;</span>,<span class="token string">&quot;_id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1001&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1001&quot;</span>,<span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;zhang san&quot;</span>,<span class="token string">&quot;age&quot;</span>:30<span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token string">&quot;index&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token string">&quot;_index&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;test_query&quot;</span>,<span class="token string">&quot;_id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1002&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1002&quot;</span>,<span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;li si&quot;</span>,<span class="token string">&quot;age&quot;</span><span class="token builtin class-name">:</span> <span class="token number">40</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token string">&quot;index&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token string">&quot;_index&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;test_query&quot;</span>,<span class="token string">&quot;_id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1003&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1003&quot;</span>, <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;wang wu&quot;</span>,<span class="token string">&quot;age&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">50</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token string">&quot;index&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token string">&quot;_index&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;test_query&quot;</span>,<span class="token string">&quot;_id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1004&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1004&quot;</span>,<span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;zhangsan&quot;</span>, <span class="token string">&quot;age&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">30</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token string">&quot;index&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token string">&quot;_index&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;test_query&quot;</span>,<span class="token string">&quot;_id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1005&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1005&quot;</span>,<span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;lisi&quot;</span>,<span class="token string">&quot;age&quot;</span>:40<span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token string">&quot;index&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token string">&quot;_index&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;test_query&quot;</span>,<span class="token string">&quot;_id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1006&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1006&quot;</span>, <span class="token string">&quot;name &quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;wangwu&quot;</span>,<span class="token string">&quot;age&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">50</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+L+'" alt="image-20230626002701117"></p><h3 id="查询所有文档-1" tabindex="-1"><a class="header-anchor" href="#查询所有文档-1" aria-hidden="true">#</a> 查询所有文档</h3><p><img src="'+U+'" alt="image-20230626002913727"></p><h3 id="匹配查询文档" tabindex="-1"><a class="header-anchor" href="#匹配查询文档" aria-hidden="true">#</a> 匹配查询文档</h3><p>这里的查询表示文档数据中 JSON 对象数据中的 name 属性是 zhangsan。</p><p><img src="'+H+'" alt="image-20230626003046537"></p><p><img src="'+w+'" alt="image-20230626003902080"></p><h3 id="匹配查询字段" tabindex="-1"><a class="header-anchor" href="#匹配查询字段" aria-hidden="true">#</a> 匹配查询字段</h3><p>默认情况下，Elasticsearch 在搜索的结果中，会把文档中保存在_source 的所有字段都返回。如果我们只想获取其中的部分字段，我们可以添加_source 的过滤</p><p><img src="'+I+`" alt="image-20230626004110206"></p><p>操作指令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建索引</span>
PUT test_query
<span class="token comment"># 添加数据</span>
PUT test_query/_bulk
<span class="token punctuation">{</span><span class="token string">&quot;index&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token string">&quot;_index&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;test_query&quot;</span>,<span class="token string">&quot;_id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1001&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1001&quot;</span>,<span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;zhang san&quot;</span>,<span class="token string">&quot;age&quot;</span>:30<span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token string">&quot;index&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token string">&quot;_index&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;test_query&quot;</span>,<span class="token string">&quot;_id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1002&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1002&quot;</span>,<span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;li si&quot;</span>,<span class="token string">&quot;age&quot;</span><span class="token builtin class-name">:</span> <span class="token number">40</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token string">&quot;index&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token string">&quot;_index&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;test_query&quot;</span>,<span class="token string">&quot;_id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1003&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1003&quot;</span>, <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;wang wu&quot;</span>,<span class="token string">&quot;age&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">50</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token string">&quot;index&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token string">&quot;_index&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;test_query&quot;</span>,<span class="token string">&quot;_id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1004&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1004&quot;</span>,<span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;zhangsan&quot;</span>, <span class="token string">&quot;age&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">30</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token string">&quot;index&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token string">&quot;_index&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;test_query&quot;</span>,<span class="token string">&quot;_id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1005&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1005&quot;</span>,<span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;lisi&quot;</span>,<span class="token string">&quot;age&quot;</span>:40<span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token string">&quot;index&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token string">&quot;_index&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;test_query&quot;</span>,<span class="token string">&quot;_id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1006&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token punctuation">{</span><span class="token string">&quot;id&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1006&quot;</span>, <span class="token string">&quot;name &quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;wangwu&quot;</span>,<span class="token string">&quot;age&quot;</span> <span class="token builtin class-name">:</span> <span class="token number">50</span><span class="token punctuation">}</span>

<span class="token comment"># 查询所有文档</span>
GET test_query/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;match_all&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment"># 匹配查询文档</span>
<span class="token comment"># Match是分词查询，ES会将数据分词（关键词）保存</span>
GET test_query/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;zhang li&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment"># term 是根据整体进行查询，不会做分词</span>
GET test_query/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;term&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;value&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;zhangsan&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment"># 对查询结果的字段进行限制</span>
GET test_query/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;_source&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span>,<span class="token string">&quot;age&quot;</span><span class="token punctuation">]</span>, 
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;zhang li&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他操作" tabindex="-1"><a class="header-anchor" href="#其他操作" aria-hidden="true">#</a> 其他操作</h3><blockquote><p>组合查询 or</p></blockquote><p><img src="`+D+'" alt="image-20230626004729673"></p><blockquote><p>排序后查询</p></blockquote><p><img src="'+F+'" alt="image-20230626005007125"></p><blockquote><p>分页查询</p></blockquote><p><img src="'+K+`" alt="image-20230626005326600"></p><blockquote><p>上述代码操作：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 组合多个条件or</span>
GET test_query/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;bool&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;should&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;zhang&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>,
        <span class="token punctuation">{</span>
          <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;age&quot;</span><span class="token builtin class-name">:</span> <span class="token number">40</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment"># 排序后查询</span>
GET test_query/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;zhang li&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;sort&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token string">&quot;age&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;order&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;desc&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment"># 分页查询</span>
<span class="token comment"># from = (pageno -1) * size</span>
<span class="token comment"># size = 每页显示的数量</span>
GET test_query/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;match_all&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;from&quot;</span><span class="token builtin class-name">:</span> <span class="token number">4</span>,
  <span class="token string">&quot;size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="四、聚合搜索" tabindex="-1"><a class="header-anchor" href="#四、聚合搜索" aria-hidden="true">#</a> 四、聚合搜索</h2><p>聚合允许使用者对 es 文档进行统计分析，类似与关系型数据库中的 group by，当然还有很多其他的聚合，例如取最大值、平均值等等。</p><blockquote><p>分组查询</p></blockquote><p><img src="`+A+'" alt="image-20230626012603255"></p><p>上面的数据太多余，只想要聚合的操作怎么办？</p><p><img src="'+N+'" alt="image-20230626012719910"></p><h3 id="求和" tabindex="-1"><a class="header-anchor" href="#求和" aria-hidden="true">#</a> 求和</h3><p><img src="'+O+'" alt="image-20230626013007763"></p><h3 id="平均值" tabindex="-1"><a class="header-anchor" href="#平均值" aria-hidden="true">#</a> 平均值</h3><p><img src="'+J+'" alt="image-20230626013216688"></p><h3 id="最大值" tabindex="-1"><a class="header-anchor" href="#最大值" aria-hidden="true">#</a> 最大值</h3><p><img src="'+M+'" alt="image-20230626014200451"></p><h3 id="topn" tabindex="-1"><a class="header-anchor" href="#topn" aria-hidden="true">#</a> TopN</h3><p><img src="'+j+'" alt="image-20230626013500079"></p><p><img src="'+Q+`" alt="image-20230626013918057"></p><blockquote><p>核心操作</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 分组查询</span>
GET test_query/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;aggs&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;ageGroup&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;terms&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;field&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;age&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token comment"># 分组后聚合（求和）</span>
GET test_query/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;aggs&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;ageGroup&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;terms&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;field&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;age&quot;</span>
      <span class="token punctuation">}</span>,
      <span class="token string">&quot;aggs&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;ageSum&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
          <span class="token string">&quot;sum&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;field&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;age&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token comment"># 求年龄最大值</span>
GET test_query/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;aggs&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;maxAge&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;max&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;field&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;age&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token comment"># 求年龄平均值</span>
GET test_query/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;aggs&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;avgAge&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;avg&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;field&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;age&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>

<span class="token comment"># 获取前几名操作</span>
GET test_query/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;aggs&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;top3&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;top_hits&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;sort&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
              <span class="token string">&quot;age&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;order&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;desc&quot;</span>
              <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">]</span>, 
        <span class="token string">&quot;size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">3</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;size&quot;</span><span class="token builtin class-name">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、索引模版" tabindex="-1"><a class="header-anchor" href="#五、索引模版" aria-hidden="true">#</a> 五、索引模版</h2><p>我们之前对索引进行一些配置信息设置，但是都是在单个索引上进行设置。在实际开发中，我们可能需要创建不止一个索引，但是每个索引或多或少都有一些共性。比如我们在设计关系型数据库时，一般都会为每个表结构设计一些常用的字段，比如：创建时间，更新时间，备注信息等。elasticsearch 在创建索引的时候，就引入了模板的概念，你可以先设置一些通用的模板，在创建索引的时候，elasticsearch 会先根据你创建的模板对索引进行设置。elasticsearch 中提供了很多的默认设置模板，这就是为什么我们在新建文档的时候，可以为你自动设置一些信息，做一些字段转换等。</p><p>索引可使用预定义的模板进行创建,这个模板称作 Index templates。模板设置包括 settings和 mappings</p><h3 id="创建模版" tabindex="-1"><a class="header-anchor" href="#创建模版" aria-hidden="true">#</a> 创建模版</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code># 模板名称小写
PUT _template/mytemplate
<span class="token punctuation">{</span>
    <span class="token property">&quot;index_patterns&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token string">&quot;my*&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;index&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;number_of_shards&quot;</span><span class="token operator">:</span><span class="token string">&quot;1&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;now&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;date&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;format&quot;</span><span class="token operator">:</span><span class="token string">&quot;yyyy/MM/dd&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+V+`" alt="image-20230626124705954"></p><h3 id="查看模版" tabindex="-1"><a class="header-anchor" href="#查看模版" aria-hidden="true">#</a> 查看模版</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看模版</span>
GET /_template/mytemplate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+B+'" alt="image-20230626124815868"></p><p><img src="'+C+`" alt="image-20230626125352394"></p><h3 id="验证模版是否存在" tabindex="-1"><a class="header-anchor" href="#验证模版是否存在" aria-hidden="true">#</a> 验证模版是否存在</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 验证模版是否存在</span>
HEAD /_template/mytemplate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+Y+`" alt="image-20230626124915167"></p><h3 id="删除模版" tabindex="-1"><a class="header-anchor" href="#删除模版" aria-hidden="true">#</a> 删除模版</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 删除模版</span>
DELETE _template/mytemplate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+R+'" alt="image-20230626125642153"></p><p>如果删除以后再次查询或者查询不存在的索引返回</p><p><img src="'+W+`" alt="image-20230626125733844"></p><blockquote><p>以上代码测试：</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建索引</span>
PUT test_temp

<span class="token comment"># 查询索引</span>
GET test_temp

<span class="token comment"># 模板名称小写</span>
PUT _template/mytemplate
<span class="token punctuation">{</span>
    <span class="token string">&quot;index_patterns&quot;</span>:<span class="token punctuation">[</span>
        <span class="token string">&quot;my*&quot;</span>
    <span class="token punctuation">]</span>,
    <span class="token string">&quot;settings&quot;</span>:<span class="token punctuation">{</span>
        <span class="token string">&quot;index&quot;</span>:<span class="token punctuation">{</span>
            <span class="token string">&quot;number_of_shards&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;2&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;mappings&quot;</span>:<span class="token punctuation">{</span>
        <span class="token string">&quot;properties&quot;</span>:<span class="token punctuation">{</span>
            <span class="token string">&quot;now&quot;</span>:<span class="token punctuation">{</span>
                <span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;date&quot;</span>,
                <span class="token string">&quot;format&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;yyyy/MM/dd&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment"># 查看模版</span>
GET /_template/mytemplate

<span class="token comment"># 删除模版</span>
DELETE _template/mytemplate

<span class="token comment"># 验证模版是否存在</span>
HEAD /_template/mytemplate
<span class="token comment"># 测试一下，发现创建的模版并没有生效</span>
PUT test_temp_2
GET test_temp_2
<span class="token comment"># 这里注意一下匹配规则是以my开头的才可以生效</span>
PUT my_test_temp
GET my_test_temp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、中文分词" tabindex="-1"><a class="header-anchor" href="#六、中文分词" aria-hidden="true">#</a> 六、中文分词</h2><p>我们在使用 Elasticsearch 官方默认的分词插件时会发现，其对中文的分词效果不佳，经常分词后得效果不是我们想要得。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 默认分词器</span>
GET _analyze
<span class="token punctuation">{</span>
  <span class="token string">&quot;analyzer&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;standard&quot;</span>,
  <span class="token string">&quot;text&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;我是一个Java开发人员&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment"># 默认分词器</span>
GET _analyze
<span class="token punctuation">{</span>
  <span class="token string">&quot;analyzer&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;chinese&quot;</span>,
  <span class="token string">&quot;text&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;我是一个Java开发人员&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+X+'" alt="image-20230626130814532"></p><p>为了能够更好地对中文进行搜索和查询，就需要在Elasticsearch中集成好的分词器插件，而 IK 分词器就是用于对中文提供支持得插件。</p><h3 id="集成ik分词器" tabindex="-1"><a class="header-anchor" href="#集成ik分词器" aria-hidden="true">#</a> 集成IK分词器</h3><h4 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h4>',129),gs={href:"https://github.com/medcl/elasticsearch-analysis-ik/releases",target:"_blank",rel:"noopener noreferrer"},qs=a('<p>注意：选择下载的版本要与 Elasticsearch 版本对应。我们这里选择 8.1.0</p><p><img src="'+Z+'" alt="image-20230626130306191"></p><h4 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h4><p>在安装目录得 plugins 目中，将下载得压缩包直接解压缩得里面即可</p><p><img src="'+$+`" alt="image-20230626132902637"></p><p><strong>重启</strong> <strong>Elasticsearch</strong> <strong>服务</strong></p><h3 id="使用ik分词器" tabindex="-1"><a class="header-anchor" href="#使用ik分词器" aria-hidden="true">#</a> 使用IK分词器</h3><p>IK 分词器提供了两个分词算法：</p><ul><li><p>ik_smart: 最少切分</p></li><li><p>ik_max_word:最细粒度划分</p></li></ul><p>接下来咱们使用 ik_smart 算法对之前得中文内容进行分词，明显会发现和默认分词器得区别。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用IK分词器</span>
GET _analyze
<span class="token punctuation">{</span>
  <span class="token string">&quot;analyzer&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ik_max_word&quot;</span>,
  <span class="token string">&quot;text&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;我是一个开发人员&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+ss+'" alt="image-20230626133421629"></p><p>接下来，再对比 ik_max_word 算法分词后的效果</p><p><img src="'+ns+`" alt="image-20230626133530827"></p><blockquote><p>操作</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 默认分词器</span>
GET _analyze
<span class="token punctuation">{</span>
  <span class="token string">&quot;analyzer&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;standard&quot;</span>,
  <span class="token string">&quot;text&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;我是一个Java开发人员&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment"># 默认分词器</span>
GET _analyze
<span class="token punctuation">{</span>
  <span class="token string">&quot;analyzer&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;chinese&quot;</span>,
  <span class="token string">&quot;text&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;我是一个Java开发人员&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment"># 使用IK分词器</span>
GET _analyze
<span class="token punctuation">{</span>
  <span class="token string">&quot;analyzer&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ik_smart&quot;</span>,
  <span class="token string">&quot;text&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;我是一个Java开发人员&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment"># 使用IK分词器</span>
GET _analyze
<span class="token punctuation">{</span>
  <span class="token string">&quot;analyzer&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ik_max_word&quot;</span>,
  <span class="token string">&quot;text&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;我是一个Java开发人员&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义分词效果" tabindex="-1"><a class="header-anchor" href="#自定义分词效果" aria-hidden="true">#</a> 自定义分词效果</h3><p>我们在使用 IK 分词器时会发现其实有时候分词的效果也并不是我们所期待的,有时一些特殊得术语会被拆开，比如上面得中文“一个学生”希望不要拆开，怎么做呢？其实 IK 插件给我们提供了自定义分词字典，我们就可以添加自己想要保留得字了。<code>test.dic</code></p><p><img src="`+as+'" alt="image-20230626133749935"></p><p><img src="'+ts+`" alt="image-20230626134009116"></p><p>接下来我们修改配置文件：IKAnalyzer.cfg.xml</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">properties</span> <span class="token name">SYSTEM</span> <span class="token string">&quot;http://java.sun.com/dtd/properties.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>comment</span><span class="token punctuation">&gt;</span></span>IK Analyzer 扩展配置<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>comment</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--用户可以在这里配置自己的扩展字典 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>entry</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ext_dict<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>test.dic<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>entry</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--用户可以在这里配置自己的扩展停止词字典--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>entry</span> <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ext_stopwords<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>entry</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--用户可以在这里配置远程扩展字典 --&gt;</span>
    <span class="token comment">&lt;!-- &lt;entry key=&quot;remote_ext_dict&quot;&gt;words_location&lt;/entry&gt; --&gt;</span>
    <span class="token comment">&lt;!--用户可以在这里配置远程扩展停止词字典--&gt;</span>
    <span class="token comment">&lt;!-- &lt;entry key=&quot;remote_ext_stopwords&quot;&gt;words_location&lt;/entry&gt; --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启 Elasticsearch 服务器查看效果</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET _analyze
<span class="token punctuation">{</span>
 <span class="token string">&quot;analyzer&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ik_smart&quot;</span>,
 <span class="token string">&quot;text&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;我是一个学生&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+es+'" alt="image-20230626134108430"></p><h2 id="七、文档得分" tabindex="-1"><a class="header-anchor" href="#七、文档得分" aria-hidden="true">#</a> 七、文档得分</h2><p>Lucene 和 ES 的得分机制是一个基于词频和逆文档词频的公式，简称为 TF-IDF 公式</p><p><img src="'+is+`" alt="image-20230626162441150"></p><p>公式中将查询作为输入，使用不同的手段来确定每一篇文档的得分，将每一个因素最后通过公式综合起来，返回该文档的最终得分。这个综合考量的过程，就是我们希望相关的文档被优先返回的考量过程。在 Lucene 和 ES 中这种相关性称为得分。</p><p>考虑到查询内容和文档得关系比较复杂，所以公式中需要输入得参数和条件非常得多。但是其中比较重要得其实是两个算法机制</p><ul><li>TF (词频)</li></ul><p>Term Frequency : 搜索文本中的各个词条（term）在查询文本中出现了多少次，出现次数越多，就越相关，得分会比较高</p><ul><li>IDF(逆文档频率)</li></ul><p>Inverse Document Frequency : 搜索文本中的各个词条（term）在整个索引的所有文档中出现了多少次，出现的次数越多，说明越不重要，也就越不相关，得分就比较低。</p><h3 id="打分机制" tabindex="-1"><a class="header-anchor" href="#打分机制" aria-hidden="true">#</a> 打分机制</h3><p>接下来咱们用一个例子简单分析一下文档的打分机制：</p><ol><li>首先，咱们先准备一个基础数据</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建索引</span>
PUT test_source
<span class="token comment"># 增加文档数据</span>
PUT test_source/_doc/1001
<span class="token punctuation">{</span>
  <span class="token string">&quot;text&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;zhang kai shou bui,ying jie tai yang&quot;</span>
<span class="token punctuation">}</span>

PUT test_source/_doc/1002
<span class="token punctuation">{</span>
  <span class="token string">&quot;text&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;zhang san&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>查询匹配条件的文档数据</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET test_source/_search
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;text&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;zhang&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+ls+`" alt="image-20230626163145108"></p><p>这里文档的得分为：0.14638957，很奇怪，此时索引中只有一个文档数据，且文档数据中可以直接匹配查询条件，为什么分值这么低？这就是公式的计算结果，咱们一起来看看</p><ol start="3"><li>分析文档数据打分过程</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET test_source/_search?explain<span class="token operator">=</span>true
<span class="token punctuation">{</span>
  <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;match&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;text&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;zhang&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行后，会发现打分机制中有 2 个重要阶段：计算 TF 值和 IDF 值</p><p><img src="`+ps+'" alt="image-20230626163322807"></p><p><img src="'+cs+'" alt="image-20230626163615566"></p><p>最后的分数为：</p><p><img src="'+os+`" alt="image-20230626163844998"></p><ol start="4"><li>计算 TF 值</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>freq / (freq + k1 * (1 - b + b *dl / avgdl))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>含义</th><th>取值</th></tr></thead><tbody><tr><td>freq</td><td>文档中出现词条的次数</td><td>1.0</td></tr><tr><td>k1</td><td>术语饱和参数</td><td>1.2（默认值）</td></tr><tr><td>b</td><td>长度规格化参数（单词长度对于整个文档的影响程度）</td><td>0.75（默认值）</td></tr><tr><td>dl</td><td>当前文中分解的字段长度</td><td>1.0</td></tr><tr><td>avgdl</td><td>查询文档中分解字段数量/查询文档数量</td><td>1.0</td></tr><tr><td><strong>TF（词频）</strong></td><td><strong>1.0/(1 + 1.2 * (1 - 0.75 + 0.75*1.0/1.0))</strong></td><td><strong>0.454545</strong></td></tr></tbody></table><ol start="5"><li>计算 IDF 值</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>log(1 + (N - n + 0.5) / (n + 0.5))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>含义</th><th>取值</th></tr></thead><tbody><tr><td>N</td><td>包含查询字段的文档总数（不一定包含查询词条）</td><td>1</td></tr><tr><td>n</td><td>包含查询词条的文档数</td><td>1</td></tr><tr><td>IDF（逆文档频率）</td><td><strong>log(1 + (1 - 1 + 0.5) / (1 + 0.5))</strong></td><td><strong>0.2876821</strong></td></tr></tbody></table><p><strong>注：这里的</strong> <strong>log</strong> <strong>是底数为</strong> <strong>e</strong> <strong>的对数</strong></p><ol start="6"><li>计算文档得分</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>boost * idf * tf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>含义</th><th>取值</th></tr></thead><tbody><tr><td>boost</td><td>词条权重</td><td><strong>2.2</strong>基础值）查询权重**(1)**</td></tr><tr><td>idf</td><td>逆文档频率</td><td><strong>0.2876821</strong></td></tr><tr><td>tf</td><td>词频</td><td><strong>0.454545</strong></td></tr><tr><td><strong>Score（得分）</strong></td><td><strong>2.2 * 0.2876821 * 0.454545</strong></td><td><strong>0.2876821</strong></td></tr></tbody></table><ol start="7"><li>增加新的文档，测试得分 <ul><li>增加一个毫无关系的文档</li></ul></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 增加文档</span>
PUT /atguigu/_doc/2
<span class="token punctuation">{</span>
 <span class="token string">&quot;text&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;spark&quot;</span>
<span class="token punctuation">}</span>
<span class="token comment"># 因为新文档无词条相关信息，所以匹配的文档数据得分就应该较高：</span>
<span class="token comment"># 0.6931741</span>
GET /atguigu/_search
<span class="token punctuation">{</span>
    <span class="token string">&quot;query&quot;</span>:<span class="token punctuation">{</span>
        <span class="token string">&quot;match&quot;</span>:<span class="token punctuation">{</span>
            <span class="token string">&quot;text&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;hello&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+us+`" alt="image-20230626202033763"></p><ul><li>增加一个一模一样的文档</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 增加文档</span>
PUT /atguigu/_doc/2
<span class="token punctuation">{</span>
 <span class="token string">&quot;text&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;hello&quot;</span>
<span class="token punctuation">}</span>
<span class="token comment"># 因为新文档含词条相关信息，且多个文件含有词条，所以显得不是很重要，得分会变低</span>
<span class="token comment"># 0.18232156</span>
GET /atguigu/_search
<span class="token punctuation">{</span>
    <span class="token string">&quot;query&quot;</span>:<span class="token punctuation">{</span>
        <span class="token string">&quot;match&quot;</span>:<span class="token punctuation">{</span>
            <span class="token string">&quot;text&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;hello&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+ds+`" alt="image-20230626202317096"></p><ul><li>增加一个含有词条，但是内容较多的文档</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 增加文档</span>
PUT /atguigu/_doc/2
<span class="token punctuation">{</span>
 <span class="token string">&quot;text&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;hello elasticsearch&quot;</span> 
<span class="token punctuation">}</span>
<span class="token comment"># 因为新文档含词条相关信息，但只是其中一部分，所以查询文档的分数会变得更低一些。</span>
<span class="token comment"># 0.14874382</span>
GET /atguigu/_search
<span class="token punctuation">{</span>
    <span class="token string">&quot;query&quot;</span>:<span class="token punctuation">{</span>
        <span class="token string">&quot;match&quot;</span>:<span class="token punctuation">{</span>
            <span class="token string">&quot;text&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;hello&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+rs+`" alt="image-20230626202347827"></p><h3 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h3><p>需求：</p><p>查询文档标题中含有“Hadoop”,“Elasticsearch”,“Spark”的内容。</p><p>优先选择“Spark”的内容</p><ol><li>准备数据</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 准备数据</span>
PUT /testscore/_doc/1001
<span class="token punctuation">{</span>
    <span class="token string">&quot;title&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Hadoop is a Framework&quot;</span>,
    <span class="token string">&quot;content&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Hadoop 是一个大数据基础框架&quot;</span>
<span class="token punctuation">}</span>
PUT /testscore/_doc/1002
<span class="token punctuation">{</span>
    <span class="token string">&quot;title&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Hive is a SQL Tools&quot;</span>,
    <span class="token string">&quot;content&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Hive 是一个 SQL 工具&quot;</span>
<span class="token punctuation">}</span>
PUT /testscore/_doc/1003
<span class="token punctuation">{</span>
    <span class="token string">&quot;title&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Spark is a Framework&quot;</span>,
    <span class="token string">&quot;content&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Spark 是一个分布式计算引擎&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>查询数据</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查询文档标题中含有“Hadoop”,“Elasticsearch”,“Spark”的内容</span>
GET /testscore/_search?explain<span class="token operator">=</span>true
<span class="token punctuation">{</span>
    <span class="token string">&quot;query&quot;</span>:<span class="token punctuation">{</span>
        <span class="token string">&quot;bool&quot;</span>:<span class="token punctuation">{</span>
            <span class="token string">&quot;should&quot;</span>:<span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token string">&quot;match&quot;</span>:<span class="token punctuation">{</span>
                        <span class="token string">&quot;title&quot;</span>:<span class="token punctuation">{</span>
                            <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Hadoop&quot;</span>,
                            <span class="token string">&quot;boost&quot;</span>:1
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>,
                <span class="token punctuation">{</span>
                    <span class="token string">&quot;match&quot;</span>:<span class="token punctuation">{</span>
                        <span class="token string">&quot;title&quot;</span>:<span class="token punctuation">{</span>
                            <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Hive&quot;</span>,
                            <span class="token string">&quot;boost&quot;</span>:1
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>,
                <span class="token punctuation">{</span>
                    <span class="token string">&quot;match&quot;</span>:<span class="token punctuation">{</span>
                        <span class="token string">&quot;title&quot;</span>:<span class="token punctuation">{</span>
                            <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Spark&quot;</span>,
                            <span class="token string">&quot;boost&quot;</span>:1
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，你会发现，Spark 的结果并不会放置在最前面</p><p><img src="`+ms+`" alt="image-20230626202740223"></p><p>此时，咱们可以更改 Spark 查询的权重参数 boost.看看查询的结果有什么不同</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查询文档标题中含有“Hadoop”,“Elasticsearch”,“Spark”的内容</span>
GET /testscore/_search?explain<span class="token operator">=</span>true
<span class="token punctuation">{</span>
    <span class="token string">&quot;query&quot;</span>:<span class="token punctuation">{</span>
        <span class="token string">&quot;bool&quot;</span>:<span class="token punctuation">{</span>
            <span class="token string">&quot;should&quot;</span>:<span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token string">&quot;match&quot;</span>:<span class="token punctuation">{</span>
                        <span class="token string">&quot;title&quot;</span>:<span class="token punctuation">{</span>
                            <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Hadoop&quot;</span>,
                            <span class="token string">&quot;boost&quot;</span>:1
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>,
                <span class="token punctuation">{</span>
                    <span class="token string">&quot;match&quot;</span>:<span class="token punctuation">{</span>
                        <span class="token string">&quot;title&quot;</span>:<span class="token punctuation">{</span>
                            <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Hive&quot;</span>,
                            <span class="token string">&quot;boost&quot;</span>:1
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>,
                <span class="token punctuation">{</span>
                    <span class="token string">&quot;match&quot;</span>:<span class="token punctuation">{</span>
                        <span class="token string">&quot;title&quot;</span>:<span class="token punctuation">{</span>
                            <span class="token string">&quot;query&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Spark&quot;</span>,
                            <span class="token string">&quot;boost&quot;</span>:2
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+vs+'" alt="image-20230626202934730"></p>',81);function hs(_s,xs){const t=c("ExternalLinkIcon");return i(),l("div",null,[bs,s("p",null,[n("下载地址："),s("a",gs,[n("https://github.com/medcl/elasticsearch-analysis-ik/releases"),p(t)])]),qs])}const Ts=e(ks,[["render",hs],["__file","3、Elasticsearch基础功能.html.vue"]]);export{Ts as default};
