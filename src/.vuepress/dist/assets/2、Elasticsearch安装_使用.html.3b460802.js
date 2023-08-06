import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c,d as s,e as n,b as e,a as t,r}from"./app.9b10ba0a.js";const p="/assets/image-20230622173649303.95f112d6.png",o="/assets/image-20230622173836108.51844195.png",d="/assets/image-20230622173913433.24a3b17b.png",u="/assets/image-20230622173925927.fe444ff7.png",m="/assets/image-20230622173954769.c52c3152.png",b="/assets/image-20230622174206269.c4b151d8.png",v="/assets/image-20230622174232273.d342d874.png",k="/assets/image-20230622174421861.54a12eb5.png",h="/assets/image-20230622174841437.5c284c74.png",g="/assets/image-20230622174852492.6c330112.png",_="/assets/image-20230622174910754.9d16138b.png",x="/assets/image-20230622174925589.153e8a60.png",f="/assets/image-20230622174944724.15229d8a.png",y="/assets/image-20230622175008619.5cc6f6fd.png",w="/assets/image-20230622175030353.b7638ddf.png",E="/assets/image-20230622175057545.aa85ae7e.png",J="/assets/image-20230622175115066.a27d5ed4.png",q="/assets/image-20230622175133382.f6765b8e.png",K="/assets/image-20230622175257242.9271cd85.png",S="/assets/image-20230622175320468.ee47c3f0.png",D="/assets/image-20230622175629947.2f030349.png",z="/assets/image-20230622175646960.5b6f6683.png",j="/assets/image-20230622175707246.52d628dd.png",C="/assets/image-20230622181616563.4c30d230.png",N="/assets/image-20230622181725072.b262f2c6.png",T="/assets/image-20230622181845704.157f1564.png",A="/assets/image-20230622181925220.6c316306.png",I="/assets/image-20230622181949155.602f23c1.png",L="/assets/image-20230622182627767.77b1ff40.png",V="/assets/image-20230622182645941.de9fcda3.png",M="/assets/image-20230622182730803.d86e2ae1.png",O="/assets/image-20230622182741709.5d6c0052.png",P="/assets/image-20230622182800240.58672733.png",R="/assets/image-20230622182810804.bde12c44.png",X="/assets/image-20230622182823381.dbe9ddf8.png",B={},H=t('<h2 id="一、java-17下载" tabindex="-1"><a class="header-anchor" href="#一、java-17下载" aria-hidden="true">#</a> 一、Java 17下载</h2><p><img src="'+p+'" alt="image-20230622173649303"></p><p>从官网截图上可以看到，Elasticsearch最新版本也终于开始拥抱号称史上最快的JDK了。所以在安装 ES 软件前，需要下载使用 Java JDK17</p><h3 id="下载软件" tabindex="-1"><a class="header-anchor" href="#下载软件" aria-hidden="true">#</a> 下载软件</h3>',4),W={href:"https://www.oracle.com/java",target:"_blank",rel:"noopener noreferrer"},G=s("p",null,"Java 最新的版本是 18.0.1.1（截止 2022.6.15），我们选择 17.0.3 版本",-1),F={href:"https://www.oracle.com/java/technologies/downloads",target:"_blank",rel:"noopener noreferrer"},Q=t('<p><img src="'+o+'" alt="image-20230622173836108"></p><h3 id="软件升级" tabindex="-1"><a class="header-anchor" href="#软件升级" aria-hidden="true">#</a> 软件升级</h3><p>对于 Java 开发人员来讲，更熟悉的开发版本应该是 JDK1.8，突然需要升级到 JDK17，其实本身会感觉有点不适应，甚至会有点排斥。担心升级后会对现有的程序代码造成影响。其实，对于 JDK1.8，最新版本的 JDK17 增加了很多的语法特性:</p><p><img src="'+d+'" alt="image-20230622173913433"></p><p><img src="'+u+'" alt="image-20230622173925927"></p><blockquote><p>JDK新特性一览</p></blockquote><p><img src="'+m+'" alt="image-20230622173954769"></p><p>对于大多数项目而言，想要利用这些新的特性，是需要修改代码的，但性能除外。也就是说，升级 JDK 版本，现有代码即使不进行修改，也不会出现兼容问题，但性能会得到极大的提升，并且高吞吐量垃圾回收器比低延迟垃圾回收器更快，更重要的是它可以免费商用。</p><p>对于升级版本而言，如果你依然有顾虑，一个好的消息就是我们可以下载含有适配 JDK的 ES 版本，上面提到的内容基本上就不用考虑，一切就是这么顺滑，对吗？</p><h2 id="二、elasticsearch安装-使用" tabindex="-1"><a class="header-anchor" href="#二、elasticsearch安装-使用" aria-hidden="true">#</a> 二、Elasticsearch安装&amp;使用</h2><h3 id="下载软件-1" tabindex="-1"><a class="header-anchor" href="#下载软件-1" aria-hidden="true">#</a> 下载软件</h3>',11),U={href:"https://www.elastic.co/cn/",target:"_blank",rel:"noopener noreferrer"},Y=s("p",null,"Elasticsearch 最新的版本是 8.2.3（截止 2022.06.15），我们选择略早的 8.1.0 版本",-1),Z={href:"https://www.elastic.co/cn/downloads/past-releases#elasticsearch",target:"_blank",rel:"noopener noreferrer"},$=t('<p><img src="'+b+'" alt="image-20230622174206269"></p><p><img src="'+v+'" alt="image-20230622174232273"></p><h3 id="安装软件" tabindex="-1"><a class="header-anchor" href="#安装软件" aria-hidden="true">#</a> 安装软件</h3><p>本课程着重讲解新版 ES 软件的特性及应用，所以采用 linux 集群配置。</p><ol><li>集群规划</li></ol><p>为了演示软件的使用，我们这里准备三台 linux 虚拟机，用于配置 Elasticsearch 集群。</p><p>启动集群后，每台虚拟机的进程如下：</p><table><thead><tr><th>主机名</th><th>linux1</th><th>linux2</th><th>linux3</th></tr></thead><tbody><tr><td>进程名</td><td>Elasticsearch(es-node-1)</td><td>Elasticsearch(es-node-2)</td><td>Elasticsearch(es-node-3)</td></tr></tbody></table><p>Linux 系统环境配置请参考之前课程内容。这里我们给三台虚拟机搭建 ES 集群，集群中-节点名称依次为 es-node-1，es-node-2，es-node-3</p><ol start="2"><li>将压缩包 elasticsearch-8.1.0-linux-x86_64.tar.gz 上传到虚拟机中</li></ol><p><img src="'+k+`" alt="image-20230622174421861"></p><p>解压缩文件到自定义路径，笔者解压路径为：/opt/module,解压后，软件路径为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/opt/module/elasticsearch-8.1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 切换目录</span>
<span class="token builtin class-name">cd</span> software
<span class="token comment"># 解压缩</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> elasticsearch-8.1.0-linux-x86_64.tar.gz <span class="token parameter variable">-C</span> /opt/module
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解压后的 Elasticsearch 的目录结构如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost elasticsearch-8.1.0<span class="token punctuation">]</span><span class="token comment"># ll</span>
总用量 <span class="token number">860</span>
drwxr-xr-x  <span class="token number">2</span> root root   <span class="token number">4096</span> <span class="token number">3</span>月   <span class="token number">3</span> <span class="token number">2022</span> bin
drwxr-xr-x  <span class="token number">3</span> root root    <span class="token number">210</span> <span class="token number">6</span>月  <span class="token number">22</span> <span class="token number">17</span>:35 config
drwxr-xr-x  <span class="token number">9</span> root root    <span class="token number">121</span> <span class="token number">3</span>月   <span class="token number">3</span> <span class="token number">2022</span> jdk
drwxr-xr-x  <span class="token number">3</span> root root   <span class="token number">4096</span> <span class="token number">3</span>月   <span class="token number">3</span> <span class="token number">2022</span> lib
-rw-r--r--  <span class="token number">1</span> root root   <span class="token number">3860</span> <span class="token number">3</span>月   <span class="token number">3</span> <span class="token number">2022</span> LICENSE.txt
drwxr-xr-x  <span class="token number">2</span> root root      <span class="token number">6</span> <span class="token number">3</span>月   <span class="token number">3</span> <span class="token number">2022</span> logs
drwxr-xr-x <span class="token number">66</span> root root   <span class="token number">4096</span> <span class="token number">3</span>月   <span class="token number">3</span> <span class="token number">2022</span> modules
-rw-r--r--  <span class="token number">1</span> root root <span class="token number">858797</span> <span class="token number">3</span>月   <span class="token number">3</span> <span class="token number">2022</span> NOTICE.txt
drwxr-xr-x  <span class="token number">2</span> root root      <span class="token number">6</span> <span class="token number">3</span>月   <span class="token number">3</span> <span class="token number">2022</span> plugins
-rw-r--r--  <span class="token number">1</span> root root   <span class="token number">2710</span> <span class="token number">3</span>月   <span class="token number">3</span> <span class="token number">2022</span> README.asciidoc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>目录</th><th>含义</th></tr></thead><tbody><tr><td>bin</td><td>可执行脚本目录</td></tr><tr><td>config</td><td>配置目录</td></tr><tr><td>jdk</td><td>内置JDK目录</td></tr><tr><td>lib</td><td>类库</td></tr><tr><td>logs</td><td>日志目录</td></tr><tr><td>modules</td><td>模块目录</td></tr><tr><td>plugins</td><td>插件目录</td></tr></tbody></table><ol start="3"><li><p>当前安装 ES 版本为 8.1.0，自带 JDK，所以当前 Linux 虚拟机节点无需配置 Java 环境 /opt/elasticsearch/elasticsearch-8.1.0</p></li><li><p>创建 linux 新用户 es, 数据文件，证书目录, 并修改 Elasticsearch 文件拥有者</p></li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 新增 es 用户</span>
<span class="token function">useradd</span> es
<span class="token comment"># 为 es 用户设置密码</span>
<span class="token function">passwd</span> es
<span class="token comment"># 创建数据文件目录</span>
<span class="token function">mkdir</span> /opt/module/elasticsearch-8.1.0/data
<span class="token comment"># 创建证书目录</span>
<span class="token function">mkdir</span> /opt/module/elasticsearch-8.1.0/config/certs
<span class="token comment">#切换目录</span>
<span class="token builtin class-name">cd</span> /opt/module/elasticsearch-8.1.0
<span class="token comment"># 修改文件拥有者--注意点（有时候发现配置文件报错执行一次！）</span>
<span class="token function">chown</span> <span class="token parameter variable">-R</span> es:es /opt/module/elasticsearch-8.1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>在第一台服务器节点 es-node-1 设置集群多节点通信密钥</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 切换用户</span>
<span class="token function">su</span> es

<span class="token comment"># 签发 ca 证书，过程中需按两次回车键</span>
bin/elasticsearch-certutil ca

<span class="token comment"># 用 ca 证书签发节点证书，过程中需按三次回车键</span>
bin/elasticsearch-certutil cert <span class="token parameter variable">--ca</span> elastic-stack-ca.p12

<span class="token comment"># 将生成的证书文件移动到 config/certs 目录中</span>
<span class="token function">mv</span> elastic-stack-ca.p12 elastic-certificates.p12 config/certs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>在第一台服务器节点 es-node-1 设置集群多节点 HTTP 证书</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 签发 Https 证书</span>
bin/elasticsearch-certutil http
<span class="token comment"># 以下是每次要求输入时，需要输入的内容</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+h+'" alt="image-20230622174841437"></p><p><img src="'+g+'" alt="image-20230622174852492"></p><p>指定证书路径</p><p><img src="'+_+'" alt="image-20230622174910754"></p><p>无需输入密码</p><p><img src="'+x+'" alt="image-20230622174925589"></p><p>设置证书失效时间</p><p><img src="'+f+'" alt="image-20230622174944724"></p><p>无需每个节点配置证书</p><p><img src="'+y+'" alt="image-20230622175008619"></p><p>输出连接到第一个节点的所有主机名称</p><p><img src="'+w+'" alt="image-20230622175030353"></p><p>输出连接到第一个节点的所有主机 IP 地址</p><p><img src="'+E+'" alt="image-20230622175057545"></p><p>不改变证书选项配置</p><p><img src="'+J+'" alt="image-20230622175115066"></p><p>不给证书加密，按键输入两次回车</p><p><img src="'+q+`" alt="image-20230622175133382"></p><p>解压刚刚生成的 zip 包</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 解压文件</span>
<span class="token function">unzip</span> elasticsearch-ssl-http.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>将解压后的证书文件移动到 config/certs 目录中</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 移动文件</span>
<span class="token function">mv</span> elasticsearch/http.p12 kibana/elasticsearch-ca.pem config/certs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>修改主配置文件：config/elasticsearch.yml</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 设置 ES 集群名称</span>
<span class="token key atrule">cluster.name</span><span class="token punctuation">:</span> es<span class="token punctuation">-</span>cluster 
<span class="token comment"># 设置集群中当前节点名称</span>
<span class="token key atrule">node.name</span><span class="token punctuation">:</span> es<span class="token punctuation">-</span>node<span class="token punctuation">-</span><span class="token number">1</span>
<span class="token comment"># 设置数据，日志文件路径</span>
<span class="token key atrule">path.data</span><span class="token punctuation">:</span> /opt/module/elasticsearch<span class="token punctuation">-</span>8.1.0/data
<span class="token key atrule">path.logs</span><span class="token punctuation">:</span> /opt/module/elasticsearch<span class="token punctuation">-</span>8.1.0/logs
<span class="token comment"># 设置网络访问节点</span>
<span class="token key atrule">network.host</span><span class="token punctuation">:</span> linux1
<span class="token comment"># 设置网络访问端口</span>
<span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">9200</span>
<span class="token comment"># 初始节点</span>
<span class="token key atrule">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;linux1&quot;</span><span class="token punctuation">]</span>
<span class="token comment"># 安全认证--如果启动后不成功，那么请将enable改为false(注意点：从节点不可以更改否则可能遇到启动不成功的情况！)</span>
<span class="token key atrule">xpack.security.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">xpack.security.enrollment.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">xpack.security.http.ssl</span><span class="token punctuation">:</span>
 <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
 <span class="token key atrule">keystore.path</span><span class="token punctuation">:</span> /opt/module/elasticsearch<span class="token punctuation">-</span>8.1.0/config/certs/http.p12
 <span class="token key atrule">truststore.path</span><span class="token punctuation">:</span> /opt/module/elasticsearch<span class="token punctuation">-</span>8.1.0/config/certs/http.p12
<span class="token key atrule">xpack.security.transport.ssl</span><span class="token punctuation">:</span>
 <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
 <span class="token key atrule">verification_mode</span><span class="token punctuation">:</span> certificate
 <span class="token key atrule">keystore.path</span><span class="token punctuation">:</span> /opt/module/elasticsearch<span class="token punctuation">-</span>8.1.0/config/certs/elastic<span class="token punctuation">-</span>certificates.p12
 <span class="token key atrule">truststore.path</span><span class="token punctuation">:</span> /opt/module/elasticsearch<span class="token punctuation">-</span>8.1.0/config/certs/elastic<span class="token punctuation">-</span>certificates.p12
<span class="token comment"># 此处需注意，es-node-1 为上面配置的节点名称</span>
<span class="token key atrule">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;es-node-1&quot;</span><span class="token punctuation">]</span>
<span class="token key atrule">http.host</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>_local_<span class="token punctuation">,</span> _site_<span class="token punctuation">]</span>
<span class="token key atrule">ingest.geoip.downloader.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token key atrule">xpack.security.http.ssl.client_authentication</span><span class="token punctuation">:</span> none
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8"><li>启动 ES 软件</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动 ES 软件</span>
bin/elasticsearch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>第一次成功启动后，会显示密码，请记住，访问时需要。只有第一次才有哟！</p><p><img src="`+K+'" alt="image-20230622175257242"></p><blockquote><p><strong>上面图形内容因为涉及到多节点集群配置以及</strong> <strong>kibana</strong> <strong>配置，所以极其重要！！！</strong></p><p><strong>如果没有出现上面图片，出现下面图片也可以按照指定方式进行配置。</strong></p></blockquote><p><img src="'+S+`" alt="image-20230622175320468"></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Elasticsearch security features have been automatically configured!
✅ Authentication is enabled and cluster connections are encrypted.

ℹ️  Password for the elastic user (reset with \`bin/elasticsearch-reset-password -u elastic\`):
  CPz+1m4DlutB+xWFou=r



❌ Unable to generate an enrollment token for Kibana instances, try invoking \`bin/elasticsearch-create-enrollment-token -s kibana\`.

❌ An enrollment token to enroll new nodes wasn&#39;t generated. To add nodes and enroll them into this cluster:
• On this node:
  ⁃ Create an enrollment token with \`bin/elasticsearch-create-enrollment-token -s node\`.
  ⁃ Restart Elasticsearch.
• On other nodes:
  ⁃ Start Elasticsearch with \`bin/elasticsearch --enrollment-token &lt;token&gt;\`, using the enrollment token that you generated.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：9300 端口为 Elasticsearch 集群间组件的通信端口，9200 端口为浏览器访问的http 协议 RESTful 端口。</p></blockquote>`,55),ss={start:"9"},ns={href:"https://xn--ces6a589dplei80c:9200",target:"_blank",rel:"noopener noreferrer"},as=t('<p>因为配置了安全协议，所以使用 https 协议进行访问，但由于证书是自己生成的，并不可靠，所以会有安全提示</p><p><img src="'+D+'" alt="image-20230622175629947"></p><p>选择继续即可</p><p><img src="'+z+'" alt="image-20230622175646960"></p><p>输入账号，密码登录即可</p><p><img src="'+j+`" alt="image-20230622175707246"></p><ol start="10"><li>修改集群中其他节点的配置文件：config/elasticsearch.yml</li></ol><p>linux2: 证书直接拷贝，其他步骤完全相同，配置文件中修改如下内容即可</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 设置节点名称</span>
<span class="token key atrule">node.name</span><span class="token punctuation">:</span> es<span class="token punctuation">-</span>node<span class="token punctuation">-</span><span class="token number">2</span>
<span class="token comment"># 设置网络访问主机</span>
<span class="token key atrule">network.host</span><span class="token punctuation">:</span> linux2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>linux3:证书直接拷贝，其他步骤完全相同，配置文件中修改如下内容即可</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 设置节点名称</span>
<span class="token key atrule">node.name</span><span class="token punctuation">:</span> es<span class="token punctuation">-</span>node<span class="token punctuation">-</span><span class="token number">3</span>
<span class="token comment"># 设置网络访问主机</span>
<span class="token key atrule">network.host</span><span class="token punctuation">:</span> linux3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="11"><li>依次启动集群的三台服务器节点, <strong>不要忘记切换用户后再启动</strong></li></ol><p>linux1：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 后台启动服务</span>
bin/elasticsearch <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>linux2：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 后台启动服务</span>
bin/elasticsearch <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>linux3：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 后台启动服务</span>
bin/elasticsearch <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="问题解决" tabindex="-1"><a class="header-anchor" href="#问题解决" aria-hidden="true">#</a> 问题解决</h3><ul><li><p>Elasticsearch 是使用 java 开发的，8.1 版本的 ES 需要 JDK17 及以上版本。默认安装包中带有 JDK 环境，如果系统配置 <strong>ES_JAVA_HOME</strong> <strong>环境变量，那么会采用系统配置的</strong>JDK。如果没有配置该环境变量，ES 会使用自带捆绑的 JDK。虽然自带的 JDK 是 ES软件推荐的 Java 版本，但一般建议使用系统配置的 JDK。</p></li><li><p>Windows 环境中出现下面的错误信息，是因为开启了 SSL 认证：</p></li></ul><p><img src="`+C+`" alt="image-20230622181616563"></p><p>修改 config/elasticsearch.yml 文件，将 enabled 的值修改为 false</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Enable encryption for HTTP API client connections, such as Kibana, Logstash,and Agents</span>
<span class="token key atrule">xpack.security.http.ssl</span><span class="token punctuation">:</span>
 <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
 <span class="token key atrule">keystore.path</span><span class="token punctuation">:</span> certs/http.p12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>启动成功后，如果访问 localhost:9200 地址后，弹出登录窗口</li></ul><p><img src="`+N+`" alt="image-20230622181725072"></p><p>第一次启动时，因为开启了密码验证模式，在启动窗口中会显示输入账号和密码。如果没有注意到或没有找到账号密码，可以设置免密登录：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># Enable security features</span>
<span class="token key atrule">xpack.security.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>双击启动窗口闪退，通过路径访问追踪错误，如果是“空间不足”，请修改config/jvm.options 配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置 JVM 初始内存为 1G。此值可以设置与-Xmx 相同，以避免每次垃圾回收完成后 JVM 重新分配</span>
内存
<span class="token comment"># Xms represents the initial size of total heap space</span>
<span class="token comment"># 设置 JVM 最大可用内存为 1G</span>
<span class="token comment"># Xmx represents the maximum size of total heap space</span>
<span class="token parameter variable">-Xms4g</span>
<span class="token parameter variable">-Xmx4g</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>启动后，如果密码忘记了，怎么办？可以采用指令重置密码</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用 es 用户，执行指令，重置 elastic 用户密码</span>
bin/elasticsearch-reset-password <span class="token parameter variable">-u</span> elastic
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+T+'" alt="image-20230622181845704"></p><p>如果只启动单一节点，此操作可能会失败，至少启动 2 个节点，测试成功</p><h2 id="三、kibana安装-使用" tabindex="-1"><a class="header-anchor" href="#三、kibana安装-使用" aria-hidden="true">#</a> 三、Kibana安装&amp;使用</h2><p>Elasticsearch 的开源分析可视化工具，与存储在 Elasticsearch 中的数据进行交互</p><p><img src="'+A+'" alt="image-20230622181925220"></p><h3 id="下载软件-2" tabindex="-1"><a class="header-anchor" href="#下载软件-2" aria-hidden="true">#</a> <strong>下载软件</strong></h3><p>Elasticsearch 下载的版本是 8.1.0，这里我们选择同样的 8.1.0 版本</p>',38),es={href:"https://www.elastic.co/cn/downloads/past-releases#kibana",target:"_blank",rel:"noopener noreferrer"},ts=t('<p><img src="'+I+`" alt="image-20230622181949155"></p><h3 id="安装软件-1" tabindex="-1"><a class="header-anchor" href="#安装软件-1" aria-hidden="true">#</a> <strong>安装软件</strong></h3><p>本课程着重讲解新版 ES 软件的特性及应用，所以对应的 Kibana 也采用 linux 集群配置。</p><ol><li>将压缩包 kibana-8.1.0-linux-x86_64.tar.gz 上传到虚拟机中</li></ol><p>解压缩文件到自定义路径，笔者解压路径为：/opt/module，解压后，软件路径为：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/opt/module/kibana-8.1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 切换目录</span>
<span class="token builtin class-name">cd</span> software
<span class="token comment"># 解压缩</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> kibana-8.1.0-linux-x86_64.tar.gz <span class="token parameter variable">-C</span> /opt/module
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解压后的 kibana 的目录结构如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost kibana-8.1.0<span class="token punctuation">]</span><span class="token comment"># ll</span>
总用量 <span class="token number">1436</span>
drwxr-xr-x   <span class="token number">2</span> root root     <span class="token number">146</span> <span class="token number">3</span>月   <span class="token number">3</span> <span class="token number">2022</span> bin
drwxr-xr-x   <span class="token number">2</span> root root      <span class="token number">44</span> <span class="token number">3</span>月   <span class="token number">3</span> <span class="token number">2022</span> config
drwxr-xr-x   <span class="token number">2</span> root root       <span class="token number">6</span> <span class="token number">3</span>月   <span class="token number">3</span> <span class="token number">2022</span> data
-rw-r--r--   <span class="token number">1</span> root root    <span class="token number">3860</span> <span class="token number">3</span>月   <span class="token number">3</span> <span class="token number">2022</span> LICENSE.txt
drwxr-xr-x   <span class="token number">2</span> root root       <span class="token number">6</span> <span class="token number">3</span>月   <span class="token number">3</span> <span class="token number">2022</span> logs
drwxr-xr-x   <span class="token number">6</span> root root     <span class="token number">108</span> <span class="token number">3</span>月   <span class="token number">3</span> <span class="token number">2022</span> <span class="token function">node</span>
drwxr-xr-x <span class="token number">836</span> root root   <span class="token number">24576</span> <span class="token number">3</span>月   <span class="token number">3</span> <span class="token number">2022</span> node_modules
-rw-r--r--   <span class="token number">1</span> root root <span class="token number">1417101</span> <span class="token number">3</span>月   <span class="token number">3</span> <span class="token number">2022</span> NOTICE.txt
-rw-r--r--   <span class="token number">1</span> root root     <span class="token number">738</span> <span class="token number">3</span>月   <span class="token number">3</span> <span class="token number">2022</span> package.json
drwxr-xr-x   <span class="token number">2</span> root root       <span class="token number">6</span> <span class="token number">3</span>月   <span class="token number">3</span> <span class="token number">2022</span> plugins
-rw-r--r--   <span class="token number">1</span> root root    <span class="token number">3966</span> <span class="token number">3</span>月   <span class="token number">3</span> <span class="token number">2022</span> README.txt
drwxr-xr-x  <span class="token number">11</span> root root     <span class="token number">177</span> <span class="token number">3</span>月   <span class="token number">3</span> <span class="token number">2022</span> src
drwxr-xr-x   <span class="token number">3</span> root root      <span class="token number">79</span> <span class="token number">3</span>月   <span class="token number">3</span> <span class="token number">2022</span> x-pack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>给 Kibana 生成证书文件</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在 ES 服务器中生成证书，输入回车即可</span>
<span class="token builtin class-name">cd</span> /opt/module/elasticsearch-8.1.0
bin/elasticsearch-certutil csr <span class="token parameter variable">-name</span> kibana <span class="token parameter variable">-dns</span> linux1
<span class="token comment"># 解压文件</span>
<span class="token function">unzip</span> csr-bundle.zip
<span class="token comment"># 将解压后的文件移动到 kibana 的 config 目录中</span>
<span class="token function">mv</span> kibana.csr kibana.key /opt/module/kibana-8.1.0/config/
<span class="token comment"># 生成 crt 文件</span>
openssl x509 <span class="token parameter variable">-req</span> <span class="token parameter variable">-in</span> kibana.csr <span class="token parameter variable">-signkey</span> kibana.key <span class="token parameter variable">-out</span> kibana.crt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>修改配置文件：kibana.yml</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 服务端口</span>
server.port: <span class="token number">5601</span>
<span class="token comment"># 服务主机名</span>
server.host: <span class="token string">&quot;linux1&quot;</span>
<span class="token comment"># 国际化 - 中文</span>
i18n.locale: <span class="token string">&quot;zh-CN&quot;</span>
<span class="token comment"># ES 服务主机地址</span>
elasticsearch.hosts: <span class="token punctuation">[</span><span class="token string">&quot;https://linux1:9200&quot;</span><span class="token punctuation">]</span>
<span class="token comment"># 访问 ES 服务的账号密码</span>
elasticsearch.username: <span class="token string">&quot;kibana&quot;</span>
elasticsearch.password: <span class="token string">&quot;fnqIYLQGv81iyW5nWeZ-&quot;</span>
elasticsearch.ssl.verificationMode: none
elasticsearch.ssl.certificateAuthorities: <span class="token punctuation">[</span> <span class="token string">&quot;/opt/module/elasticsearch-8.1.0/config/certs/elasticsearch-ca.pem&quot;</span> <span class="token punctuation">]</span>
server.ssl.enabled: <span class="token boolean">true</span>
server.ssl.certificate: /opt/module/kibana-8.1.0/config/kibana.crt
server.ssl.key: /opt/module/kibana-8.1.0/config/kibana.key
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>修改软件目录拥有者</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 切换目录</span>
<span class="token function">chown</span> <span class="token parameter variable">-R</span> es:es /opt/module/kibana-8.1.0/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>切换用户，启动软件</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 切换用户</span>
<span class="token function">su</span> es
<span class="token comment"># 启动软件</span>
bin/kibana
<span class="token comment"># 也可以后台启动</span>
<span class="token function">nohup</span> /opt/module/kibana-8.1.0/bin/kibana <span class="token operator">&gt;</span>kibana.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+L+'" alt="image-20230622182627767"></p><h3 id="应用软件" tabindex="-1"><a class="header-anchor" href="#应用软件" aria-hidden="true">#</a> <strong>应用软件</strong></h3>',19),is={href:"https://linux1:5601",target:"_blank",rel:"noopener noreferrer"},ls=s("p",null,[s("img",{src:V,alt:"image-20230622182645941"})],-1),cs={href:"https://so.csdn.net/so/search?q=Kibana&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},rs=t('<p><img src="'+M+'" alt="image-20230622182730803"></p><p>输入 elastic 账号和密码即可访问</p><p><img src="'+O+'" alt="image-20230622182741709"></p><p><img src="'+P+'" alt="image-20230622182800240"></p><p><img src="'+R+'" alt="image-20230622182810804"></p><p><img src="'+X+'" alt="image-20230622182823381"></p>',6),ps=s("p",null,"Kibana可能遇到的问题：",-1),os={href:"https://discuss.elastic.co/t/error-enoent-no-such-file-or-directory-open-config-kibana-server-key/272340",target:"_blank",rel:"noopener noreferrer"},ds={href:"https://developer.aliyun.com/article/1158125",target:"_blank",rel:"noopener noreferrer"};function us(ms,bs){const a=r("ExternalLinkIcon");return l(),c("div",null,[H,s("p",null,[n("Java 的官方地址："),s("a",W,[n("https://www.oracle.com/java"),e(a)])]),G,s("p",null,[n("下载地址："),s("a",F,[n("https://www.oracle.com/java/technologies/downloads"),e(a)])]),Q,s("p",null,[n("Elasticsearch 的官方地址："),s("a",U,[n("https://www.elastic.co/cn/"),e(a)])]),Y,s("p",null,[n("下载地址："),s("a",Z,[n("https://www.elastic.co/cn/downloads/past-releases#elasticsearch"),e(a)])]),$,s("ol",ss,[s("li",null,[n("访问服务器节点 "),s("a",ns,[n("https://虚拟机地址:9200"),e(a)])])]),as,s("p",null,[n("下载地址："),s("a",es,[n("https://www.elastic.co/cn/downloads/past-releases#kibana"),e(a)])]),ts,s("p",null,[n("打开浏览器，输入访问地址："),s("a",is,[n("https://linux1:5601"),e(a)])]),ls,s("blockquote",null,[s("p",null,[n("浏览器访问提示："),s("a",cs,[n("Kibana"),e(a)]),n(" server is not ready yet.（服务器尚未准备就绪。）如果遇到这个问题首先说明一下，Kibana启动很慢请多等待一会，其次修改访问kibana密码！")])]),rs,s("blockquote",null,[ps,s("p",null,[s("a",os,[n("Error: ENOENT: no such file or directory, open ‘config/kibana-server.key’"),e(a)])]),s("p",null,[s("a",ds,[n("CentOS8 Kibana8.x 安装遇到的问题解决"),e(a)])])])])}const hs=i(B,[["render",us],["__file","2、Elasticsearch安装&使用.html.vue"]]);export{hs as default};
