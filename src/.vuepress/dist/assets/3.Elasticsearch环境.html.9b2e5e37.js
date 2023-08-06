import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as o,d as s,e as n,b as a,a as i,r}from"./app.9b10ba0a.js";const d="/assets/image-20230608174046820.31072c51.png",p="/assets/image-20230608174358034.e2efa72f.png",u="/assets/image-20230608174510056.3dcf45aa.png",m="/assets/image-20230608174546217.68e04fb2.png",v="/assets/image-20230608174615809.c84556c6.png",b="/assets/image-20230608174652670.d78a122d.png",h="/assets/image-20230608174702387.955b466f.png",k="/assets/image-20230608174715548.1e5d39bd.png",g="/assets/image-20230608174733010.4f143ae2.png",_="/assets/image-20230608174748437.cb43437d.png",l="/assets/image-20230608175223612.d6d94522.png",f="/assets/image-20230608175908092.83a92965.png",x="/assets/image-20230608180041798.55f765bb.png",q="/assets/image-20230608180501862.8a8351cc.png",y={},w=i('<h2 id="一、相关概念" tabindex="-1"><a class="header-anchor" href="#一、相关概念" aria-hidden="true">#</a> 一、相关概念</h2><h3 id="单机-集群" tabindex="-1"><a class="header-anchor" href="#单机-集群" aria-hidden="true">#</a> 单机&amp;集群</h3><p>单台Elasticsearch 服务器提供服务，往往都有最大的负载能力，超过这个阈值，服务器性能就会大大降低甚至不可用，所以生产环境中，一般都是运行在指定服务器集群中。</p><p>除了负载能力，单点服务器也存在其他问题：</p><ul><li><p>单台机器存储容量有限</p></li><li><p>单服务器容易出现单点故障，无法实现高可用</p></li><li><p>单服务的并发处理能力有限</p></li></ul><p>配置服务器集群时，集群中节点数量没有限制，大于等于 2 个节点就可以看做是集群了。一般出于高性能及高可用方面来考虑集群中节点数量都是 3 个以上。</p><h3 id="集群cluster" tabindex="-1"><a class="header-anchor" href="#集群cluster" aria-hidden="true">#</a> 集群Cluster</h3><p>一个集群就是由一个或多个服务器节点组织在一起，共同持有整个的数据，并一起提供索引和搜索功能。一个 Elasticsearch 集群有一个唯一的名字标识，这个名字默认就是”elasticsearch”。这个名字是重要的，因为一个节点只能通过指定某个集群的名字，来加入这个集群。</p><h3 id="节点node" tabindex="-1"><a class="header-anchor" href="#节点node" aria-hidden="true">#</a> 节点Node</h3><p>集群中包含很多服务器，一个节点就是其中的一个服务器。作为集群的一部分，它存储数据，参与集群的索引和搜索功能。</p><p>一个节点也是由一个名字来标识的，默认情况下，这个名字是一个随机的漫威漫画角色的名字，这个名字会在启动的时候赋予节点。这个名字对于管理工作来说挺重要的，因为在这个管理过程中，你会去确定网络中的哪些服务器对应于 Elasticsearch 集群中的哪些节点。</p><p>一个节点可以通过配置集群名称的方式来加入一个指定的集群。默认情况下，每个节点都会被安排加入到一个叫做“elasticsearch”的集群中，这意味着，如果你在你的网络中启动了若干个节点，并假定它们能够相互发现彼此，它们将会自动地形成并加入到一个叫做“elasticsearch”的集群中。</p><p>在一个集群里，只要你想，可以拥有任意多个节点。而且，如果当前你的网络中没有运行任何 Elasticsearch 节点，这时启动一个节点，会默认创建并加入一个叫做“elasticsearch”的集群。</p><h2 id="二、windows集群" tabindex="-1"><a class="header-anchor" href="#二、windows集群" aria-hidden="true">#</a> 二、Windows集群</h2><h3 id="部署集群" tabindex="-1"><a class="header-anchor" href="#部署集群" aria-hidden="true">#</a> 部署集群</h3><p>1.创建elasticsearch-cluster文件夹，在内部复制三个elasticsearch服务</p><p><img src="'+d+`" alt="image-20230608174046820"></p><p>2.修改集群文件目录中每个节点的config/elasticsearch.yml配置文件</p><p>node-1001节点</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#节点 1 的配置信息：</span>
<span class="token comment">#集群名称，节点之间要保持一致cluster.name: my-elasticsearch # 节 点 名 称 ， 集 群 内 要 唯 一 node.name: node-1001 node.master: true</span>
<span class="token key atrule">node.data</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token comment">#ip 地址</span>
<span class="token key atrule">network.host</span><span class="token punctuation">:</span> localhost <span class="token comment">#http 端口</span>
<span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">1001</span> <span class="token comment">#tcp 监听端口</span>
<span class="token key atrule">transport.tcp.port</span><span class="token punctuation">:</span> <span class="token number">9301</span>

<span class="token comment">#discovery.seed_hosts: [&quot;localhost:9301&quot;, &quot;localhost:9302&quot;,&quot;localhost:9303&quot;] #discovery.zen.fd.ping_timeout: 1m</span>
<span class="token comment">#discovery.zen.fd.ping_retries: 5</span>

<span class="token comment"># 集 群 内 的 可 以 被 选 为 主 节 点 的 节 点 列 表 #cluster.initial_master_nodes: [&quot;node-1&quot;, &quot;node-2&quot;,&quot;node-3&quot;]</span>

<span class="token comment">#跨域配置#action.destructive_requires_name: true http.cors.enabled: true http.cors.allow-origin: &quot;*&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>node-1002节点</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#节点 2 的配置信息：</span>
<span class="token comment">#集群名称，节点之间要保持一致cluster.name: my-elasticsearch # 节 点 名 称 ， 集 群 内 要 唯 一node.name: node-1002 node.master: true</span>
<span class="token key atrule">node.data</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token comment">#ip 地址</span>
<span class="token key atrule">network.host</span><span class="token punctuation">:</span> localhost <span class="token comment">#http 端口</span>
<span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">1002</span> <span class="token comment">#tcp 监听端口</span>
<span class="token key atrule">transport.tcp.port</span><span class="token punctuation">:</span> <span class="token number">9302</span>

<span class="token key atrule">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;localhost:9301&quot;</span><span class="token punctuation">]</span> discovery.zen.fd.ping_timeout<span class="token punctuation">:</span> <span class="token key atrule">1m discovery.zen.fd.ping_retries</span><span class="token punctuation">:</span> <span class="token number">5</span>

<span class="token comment"># 集 群 内 的 可 以 被 选 为 主 节 点 的 节 点 列 表#cluster.initial_master_nodes: [&quot;node-1&quot;, &quot;node-2&quot;,&quot;node-3&quot;]</span>

<span class="token comment">#跨域配置#action.destructive_requires_name: true http.cors.enabled: true http.cors.allow-origin: &quot;*&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>node-1003节点</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#节点 3 的配置信息：</span>
<span class="token comment">#集群名称，节点之间要保持一致cluster.name: my-elasticsearch # 节 点 名 称 ， 集 群 内 要 唯 一 node.name: node-1003 node.master: true</span>
<span class="token key atrule">node.data</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token comment">#ip 地址</span>
<span class="token key atrule">network.host</span><span class="token punctuation">:</span> localhost <span class="token comment">#http 端口</span>
<span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">1003</span> <span class="token comment">#tcp 监听端口</span>
<span class="token key atrule">transport.tcp.port</span><span class="token punctuation">:</span> <span class="token number">9303</span>
<span class="token comment">#候选主节点的地址，在开启服务后可以被选为主节点discovery.seed_hosts: [&quot;localhost:9301&quot;, &quot;localhost:9302&quot;] discovery.zen.fd.ping_timeout: 1m discovery.zen.fd.ping_retries: 5</span>

<span class="token comment"># 集 群 内 的 可 以 被 选 为 主 节 点 的 节 点 列 表 #cluster.initial_master_nodes: [&quot;node-1&quot;, &quot;node-2&quot;,&quot;node-3&quot;]</span>

<span class="token comment">#跨域配置#action.destructive_requires_name: true http.cors.enabled: true http.cors.allow-origin: &quot;*&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动集群" tabindex="-1"><a class="header-anchor" href="#启动集群" aria-hidden="true">#</a> 启动集群</h3><p>1.启动前先删除每个节点的data目录中所在内容（如果存在）</p><p><img src="`+p+'" alt="image-20230608174358034"></p><p>2.分别双击执行 bin/elasticsearch.bat，启动节点服务器，启动后，会自动加入指定名称的集群</p><p><img src="'+u+'" alt="image-20230608174510056"></p><h3 id="测试集群" tabindex="-1"><a class="header-anchor" href="#测试集群" aria-hidden="true">#</a> 测试集群</h3><p>查看集群状态</p><ul><li>node-1001节点</li></ul><p><img src="'+m+'" alt="image-20230608174546217"></p><ul><li>node-1002节点</li></ul><p><img src="'+v+'" alt="image-20230608174615809"></p><ul><li>node-1003节点</li></ul><p><img src="'+b+'" alt="image-20230608174652670"></p><p><img src="'+h+'" alt="image-20230608174702387"></p><p><img src="'+k+'" alt="image-20230608174715548"></p><p>向集群中的node-1001 节点增加索引</p><p><img src="'+g+'" alt="image-20230608174733010"></p><p>向集群中的node-1002 节点查询索引</p><p><img src="'+_+'" alt="image-20230608174748437"></p><h2 id="三、linux单机" tabindex="-1"><a class="header-anchor" href="#三、linux单机" aria-hidden="true">#</a> 三、Linux单机</h2><h3 id="软件下载" tabindex="-1"><a class="header-anchor" href="#软件下载" aria-hidden="true">#</a> 软件下载</h3>',45),E={href:"https://www.elastic.co/cn/downloads/past-releases/elasticsearch-7-8-0",target:"_blank",rel:"noopener noreferrer"},z=i('<p><img src="'+l+`" alt="image-20230608175223612"></p><h3 id="软件安装" tabindex="-1"><a class="header-anchor" href="#软件安装" aria-hidden="true">#</a> 软件安装</h3><p>1.下载解压软件</p><p>将下载的软件解压缩</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.8.0-linux-x86_64.tar.gz
<span class="token comment"># 解压缩</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> elasticsearch-7.8.0-linux-x86_64.tar.gz <span class="token parameter variable">-C</span> /opt/module <span class="token comment"># 改名</span>
<span class="token function">mv</span> elasticsearch-7.8.0 es
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.创建用户</p><p>因为安全问题，Elasticsearch 不允许 root 用户直接运行，所以要创建新用户，在 root 用户中创建新用户</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">useradd</span> es <span class="token comment">#新增 es 用户</span>
<span class="token function">passwd</span> es <span class="token comment">#为 es 用户设置密码</span>
<span class="token function">userdel</span> <span class="token parameter variable">-r</span> es <span class="token comment">#如果错了，可以删除再加</span>
<span class="token function">chown</span> <span class="token parameter variable">-R</span> es:es /opt/module/es <span class="token comment">#文件夹所有者</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.修改配置文件</p><p>修改/opt/module/es/config/elasticsearch.yml 文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /opt/module/es/config/elasticsearch.yml

<span class="token comment"># 加入如下配置</span>
cluster.name: elasticsearch
node.name: node-1
network.host: <span class="token number">0.0</span>.0.0
http.port: <span class="token number">9200</span>
cluster.initial_master_nodes: <span class="token punctuation">[</span><span class="token string">&quot;node-1&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改/etc/security/limits.conf</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/security/limits.conf 

<span class="token comment"># 在文件末尾中增加下面内容</span>
<span class="token comment"># 每个进程可以打开的文件数的限制</span>
es soft nofile <span class="token number">65536</span>
es hard nofile <span class="token number">65536</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改/etc/security/limits.d/20-nproc.conf</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/security/limits.d/20-nproc.conf

<span class="token comment"># 在文件末尾中增加下面内容</span>
<span class="token comment"># 每个进程可以打开的文件数的限制</span>
es soft nofile <span class="token number">65536</span>
es hard nofile <span class="token number">65536</span>
<span class="token comment"># 操作系统级别对每个用户创建的进程数的限制</span>
* hard nproc <span class="token number">4096</span>
<span class="token comment"># 注：* 带表 Linux 所有用户名称</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改/etc/sysctl.conf</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/sysctl.conf

<span class="token comment"># 在文件中增加下面内容</span>
<span class="token comment"># 一个进程可以拥有的 VMA(虚拟内存区域)的数量,默认值为 65536</span>
<span class="token assign-left variable">vm.max_map_count</span><span class="token operator">=</span><span class="token number">655360</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新加载</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sysctl</span> <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,19),L=s("p",null,"报错的一些解决方案：",-1),C={href:"https://blog.csdn.net/weixiao_920/article/details/103221995?spm=1001.2101.3001.6650.1&utm_medium=distribute.pc_relevant.none-task-blog-2~default~CTRLIST~Rate-1-103221995-blog-115968267.235%5Ev38%5Epc_relevant_sort&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2~default~CTRLIST~Rate-1-103221995-blog-115968267.235%5Ev38%5Epc_relevant_sort&utm_relevant_index=2",target:"_blank",rel:"noopener noreferrer"},S={href:"https://blog.csdn.net/qq_44872331/article/details/127192642",target:"_blank",rel:"noopener noreferrer"},N=i(`<h3 id="启动软件" tabindex="-1"><a class="header-anchor" href="#启动软件" aria-hidden="true">#</a> 启动软件</h3><p>使用 ES 用户启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/module/es/
<span class="token comment">#启动</span>
bin/elasticsearch
<span class="token comment">#后台启动</span>
bin/elasticsearch <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动时，会动态生成文件，如果文件所属用户不匹配，会发生错误，需要重新进行修改用户和用户组</p><p><img src="`+f+`" alt="image-20230608175908092"></p><p>关闭防火墙</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#暂时关闭防火墙</span>
systemctl stop firewalld
<span class="token comment">#永久关闭防火墙</span>
systemctl <span class="token builtin class-name">enable</span> firewalld.service <span class="token comment">#打开放货抢永久性生效，重启后不会复原</span>
systemctl disable firewalld.service <span class="token comment">#关闭防火墙，永久性生效，重启后不会复原</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试软件" tabindex="-1"><a class="header-anchor" href="#测试软件" aria-hidden="true">#</a> 测试软件</h3>`,8),I={href:"http://xn--IP-0p3ck01akcu41v:9200/",target:"_blank",rel:"noopener noreferrer"},R={href:"http://172.16.102.100:9200/",target:"_blank",rel:"noopener noreferrer"},T=i('<p><img src="'+x+'" alt="image-20230608180041798"></p><h2 id="四、linux集群" tabindex="-1"><a class="header-anchor" href="#四、linux集群" aria-hidden="true">#</a> 四、Linux集群</h2><h3 id="软件下载-1" tabindex="-1"><a class="header-anchor" href="#软件下载-1" aria-hidden="true">#</a> 软件下载</h3>',3),V={href:"https://www.elastic.co/cn/downloads/past-releases/elasticsearch-7-8-0",target:"_blank",rel:"noopener noreferrer"},B=i('<p><img src="'+l+`" alt="image-20230608175223612"></p><h3 id="软件安装-1" tabindex="-1"><a class="header-anchor" href="#软件安装-1" aria-hidden="true">#</a> 软件安装</h3><p>1.解压软件</p><p>将下载的软件解压缩</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 解压缩</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> elasticsearch-7.8.0-linux-x86_64.tar.gz <span class="token parameter variable">-C</span> /opt/module
<span class="token comment"># 改名</span>
<span class="token function">mv</span> elasticsearch-7.8.0 es-cluster
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将软件分发到其他节点：linux2, linux3</p><p>2.创建用户</p><p>因为安全问题，Elasticsearch 不允许 root 用户直接运行，所以要在每个节点中创建新用户，在 root 用户中创建新用户</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">useradd</span> es <span class="token comment">#新增 es 用户</span>
<span class="token function">passwd</span> es <span class="token comment">#为 es 用户设置密码</span>
<span class="token function">userdel</span> <span class="token parameter variable">-r</span> es <span class="token comment">#如果错了，可以删除再加</span>
<span class="token function">chown</span> <span class="token parameter variable">-R</span> es:es /opt/module/es-cluster <span class="token comment">#文件夹所有者</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.配置文件</p><p>修改/opt/module/es/config/elasticsearch.yml 文件，分发文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /opt/module/es/config/elasticsearch.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 加入如下配置</span>
<span class="token comment">#集群名称</span>
cluster.name: cluster-es
<span class="token comment">#节点名称，每个节点的名称不能重复</span>
node.name: node-1
<span class="token comment">#ip 地址，每个节点的地址不能重复</span>
network.host: linux1
<span class="token comment">#是不是有资格主节点</span>
node.master: <span class="token boolean">true</span>
node.data: <span class="token boolean">true</span>
http.port: <span class="token number">9200</span>
<span class="token comment"># head 插件需要这打开这两个配置</span>
http.cors.allow-origin: <span class="token string">&quot;*&quot;</span>
http.cors.enabled: <span class="token boolean">true</span>
http.max_content_length: 200mb
<span class="token comment">#es7.x 之后新增的配置，初始化一个新的集群时需要此配置来选举 master</span>
cluster.initial_master_nodes: <span class="token punctuation">[</span><span class="token string">&quot;node-1&quot;</span><span class="token punctuation">]</span>
<span class="token comment">#es7.x 之后新增的配置，节点发现</span>
discovery.seed_hosts: <span class="token punctuation">[</span><span class="token string">&quot;linux1:9300&quot;</span>,<span class="token string">&quot;linux2:9300&quot;</span>,<span class="token string">&quot;linux3:9300&quot;</span><span class="token punctuation">]</span>
gateway.recover_after_nodes: <span class="token number">2</span>
network.tcp.keep_alive: <span class="token boolean">true</span>
network.tcp.no_delay: <span class="token boolean">true</span>
transport.tcp.compress: <span class="token boolean">true</span>
<span class="token comment">#集群内同时启动的数据任务个数，默认是 2 个</span>
cluster.routing.allocation.cluster_concurrent_rebalance: <span class="token number">16</span>
<span class="token comment">#添加或删除节点及负载均衡时并发恢复的线程个数，默认 4 个</span>
cluster.routing.allocation.node_concurrent_recoveries: <span class="token number">16</span>
<span class="token comment">#初始化数据恢复时，并发恢复线程的个数，默认 4 个</span>
cluster.routing.allocation.node_initial_primaries_recoveries: <span class="token number">16</span>

<span class="token comment"># 用来解决磁盘空间使用率过多，无法分配副本的问题！</span>
cluster.routing.allocation.disk.threshold_enabled: <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改/etc/security/limits.conf ，分发文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/security/limits.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在文件末尾中增加下面内容</span>
es soft nofile <span class="token number">65536</span>
es hard nofile <span class="token number">65536</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改/etc/security/limits.d/20-nproc.conf，分发文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/security/limits.d/20-nproc.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在文件末尾中增加下面内容</span>
es soft nofile <span class="token number">65536</span>
es hard nofile <span class="token number">65536</span>
* hard nproc <span class="token number">4096</span>
<span class="token comment"># 注：* 带表 Linux 所有用户名称</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改/etc/sysctl.conf</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/sysctl.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在文件中增加下面内容</span>
<span class="token assign-left variable">vm.max_map_count</span><span class="token operator">=</span><span class="token number">655360</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>重新加载</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sysctl</span> <span class="token parameter variable">-p</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>在启动之前的一个很重要的注意点：</p><ul><li>如果你搭建过windows集群或者mac上试过集群的搭配就会知道一个问题，除了上述的配置外还需要将<code>data</code>目录下的node文件删除！</li><li>否则，你会看到一个那就是集群都各自跑起来了，但是无法再主节点master上面查看其他节点的信息！</li></ul></blockquote><h3 id="启动软件-1" tabindex="-1"><a class="header-anchor" href="#启动软件-1" aria-hidden="true">#</a> 启动软件</h3><p>分别在不同节点上启动 ES 软件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /opt/module/es-cluster
<span class="token comment">#启动</span>
bin/elasticsearch
<span class="token comment">#后台启动</span>
bin/elasticsearch <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试集群-1" tabindex="-1"><a class="header-anchor" href="#测试集群-1" aria-hidden="true">#</a> 测试集群</h3>`,29),j={href:"http://172.16.102.100:9200/_cat/nodes",target:"_blank",rel:"noopener noreferrer"},D=s("p",null,[s("img",{src:q,alt:"image-20230608180501862"})],-1),P=s("p",null,"参考文章：",-1),A={href:"https://juejin.cn/post/7148596969244459022#heading-15",target:"_blank",rel:"noopener noreferrer"},M={href:"https://blog.csdn.net/u011863024/article/details/115721328",target:"_blank",rel:"noopener noreferrer"};function W(F,G){const e=r("ExternalLinkIcon");return c(),o("div",null,[w,s("p",null,[s("a",E,[n("Elasticsearch下载地址7.8.0"),a(e)])]),z,s("blockquote",null,[L,s("p",null,[n("[(85条消息) ElasticSerach 出现 high disk watermark "),s("a",C,[n("90%] exceeded on_weixiao_920的博客-CSDN博客"),a(e)])]),s("p",null,[n("[(85条消息) es安装报错："),s("a",S,[n("1]: max number of threads [3796] for user [es] is too low, increase to at least [4096]_qq_44872331的博客-CSDN博客"),a(e)])])]),N,s("blockquote",null,[s("p",null,[n("格式："),s("a",I,[n("http://你的IP地址:9200/"),a(e)])])]),s("p",null,[n("浏览器输入地址："),s("a",R,[n("http://172.16.102.100:9200/"),a(e)])]),T,s("p",null,[s("a",V,[n("Elasticsearch下载地址7.8.0"),a(e)])]),B,s("p",null,[n("测试地址："),s("a",j,[n("http://172.16.102.100:9200/_cat/nodes"),a(e)])]),D,s("blockquote",null,[P,s("p",null,[s("a",A,[n("Linux集群搭建"),a(e)])]),s("p",null,[s("a",M,[n("Elasticsearch学习笔记"),a(e)])])])])}const K=t(y,[["render",W],["__file","3.Elasticsearch环境.html.vue"]]);export{K as default};
