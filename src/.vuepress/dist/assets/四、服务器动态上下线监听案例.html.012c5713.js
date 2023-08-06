import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,a as e}from"./app.9b10ba0a.js";const p="/assets/b5a08766-dfa8-4f5a-977a-f1f7815ecd06.048804a8.png",t="/assets/image-20230418002927728.c73d2acc.png",o="/assets/wps17.99db784d.png",c="/assets/wps18.801537e2.png",i={},l=e('<h2 id="_01、需求" tabindex="-1"><a class="header-anchor" href="#_01、需求" aria-hidden="true">#</a> 01、需求</h2><p>某分布式系统中，主节点可以有多台，可以动态上下线，任意一台客户端都能实时感知到主节点服务器的上下线。</p><h2 id="_02、需求分析" tabindex="-1"><a class="header-anchor" href="#_02、需求分析" aria-hidden="true">#</a> 02、需求分析</h2><p><strong>服务器动态上下线</strong></p><p><img src="'+p+`" alt="b5a08766-dfa8-4f5a-977a-f1f7815ecd06"></p><h2 id="_03、具体实现" tabindex="-1"><a class="header-anchor" href="#_03、具体实现" aria-hidden="true">#</a> 03、具体实现</h2><p>1.首先在集群上创建<code>/servers</code>节点</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">2</span><span class="token punctuation">]</span> create /servers <span class="token string">&quot;servers&quot;</span>
Created /servers
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2.在IDEA中创建包名：com.nakanomay.zkcase1</p><p>3.服务端向zookeeper注册代码</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>zookeeper<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Created with IntelliJ IDEA.
 *
 * <span class="token keyword">@author</span> nakano_may丶
 * <span class="token keyword">@date</span> 2023/4/17
 * @Version 1.0
 * <span class="token keyword">@description</span> zk服务端代码
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DistributeServer</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> connectString <span class="token operator">=</span> <span class="token string">&quot;172.16.102.100:2181,172.16.102.135:2181,172.16.102.136:2181&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> sessionTimeout <span class="token operator">=</span> <span class="token number">2000</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">ZooKeeper</span> zk <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">DistributeServer</span> server <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DistributeServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 1 获取zk连接</span>
        server<span class="token punctuation">.</span><span class="token function">getConnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 2 注册服务器到zk集群</span>
        server<span class="token punctuation">.</span><span class="token function">registry</span><span class="token punctuation">(</span>args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 3 启动业务逻辑（睡觉）</span>
        server<span class="token punctuation">.</span><span class="token function">business</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">business</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token class-name">Long</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">registry</span><span class="token punctuation">(</span><span class="token class-name">String</span> hostname<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">String</span> create <span class="token operator">=</span> zk<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&quot;/servers/&quot;</span> <span class="token operator">+</span> hostname<span class="token punctuation">,</span> hostname<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">ZooDefs<span class="token punctuation">.</span>Ids</span><span class="token punctuation">.</span><span class="token constant">OPEN_ACL_UNSAFE</span><span class="token punctuation">,</span> <span class="token class-name">CreateMode</span><span class="token punctuation">.</span><span class="token constant">EPHEMERAL_SEQUENTIAL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>hostname <span class="token operator">+</span> <span class="token string">&quot; is online&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">getConnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span>
    <span class="token punctuation">{</span>
        zk <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ZooKeeper</span><span class="token punctuation">(</span>connectString<span class="token punctuation">,</span> sessionTimeout<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">process</span><span class="token punctuation">(</span><span class="token class-name">WatchedEvent</span> event<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.客户端代码</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>zookeeper<span class="token punctuation">.</span></span><span class="token class-name">KeeperException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>zookeeper<span class="token punctuation">.</span></span><span class="token class-name">ZooKeeper</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Created with IntelliJ IDEA.
 *
 * <span class="token keyword">@author</span> nakano_may丶
 * <span class="token keyword">@date</span> 2023/4/18
 * @Version 1.0
 * <span class="token keyword">@description</span> zk客户端代码
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DistributeClient</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> connectString <span class="token operator">=</span> <span class="token string">&quot;172.16.102.100:2181,172.16.102.135:2181,172.16.102.136:2181&quot;</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> sessionTimeout <span class="token operator">=</span> <span class="token number">2000</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">ZooKeeper</span> zk <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">InterruptedException</span><span class="token punctuation">,</span> <span class="token class-name">KeeperException</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">DistributeClient</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DistributeClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 1 获取zk连接</span>
        client<span class="token punctuation">.</span><span class="token function">getConnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 2 监听/servers下面节点的增加和删除</span>
        client<span class="token punctuation">.</span><span class="token function">getServerList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 3 业余逻辑（睡觉）</span>
        client<span class="token punctuation">.</span><span class="token function">business</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">business</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token class-name">Long</span><span class="token punctuation">.</span><span class="token constant">MAX_VALUE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 获取服务器列表信息</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">getServerList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span><span class="token punctuation">,</span> <span class="token class-name">KeeperException</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// 1 获取服务器子节点信息，并且对父节点进行监听</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> children <span class="token operator">=</span> zk<span class="token punctuation">.</span><span class="token function">getChildren</span><span class="token punctuation">(</span><span class="token string">&quot;/servers&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 2 存储服务器信息列表</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> servers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 3 遍历所有接地那，获取节点中的主机名称信息</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> child <span class="token operator">:</span> children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> data <span class="token operator">=</span> zk<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token string">&quot;/servers/&quot;</span> <span class="token operator">+</span> child<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            servers<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 4 打印服务器列表信息</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>servers<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">getConnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span>
    <span class="token punctuation">{</span>
        zk <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ZooKeeper</span><span class="token punctuation">(</span>connectString<span class="token punctuation">,</span> sessionTimeout<span class="token punctuation">,</span> event <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token function">getServerList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">KeeperException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_04、测试" tabindex="-1"><a class="header-anchor" href="#_04、测试" aria-hidden="true">#</a> 04、测试</h2><p><strong>1）在Linux命令行上操作增加服务器</strong></p><ol><li>启动DistributeClient客户端</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">10</span><span class="token punctuation">]</span> create <span class="token parameter variable">-e</span> <span class="token parameter variable">-s</span> /servers/hadoop101 <span class="token string">&quot;hadoop101&quot;</span>
Created /servers/hadoop1010000000000
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">11</span><span class="token punctuation">]</span> create <span class="token parameter variable">-e</span> <span class="token parameter variable">-s</span> /servers/hadoop102 <span class="token string">&quot;hadoop102&quot;</span>
Created /servers/hadoop1020000000001
<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">12</span><span class="token punctuation">]</span> create <span class="token parameter variable">-e</span> <span class="token parameter variable">-s</span> /servers/hadoop103 <span class="token string">&quot;hadoop103&quot;</span>
Created /servers/hadoop1030000000002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>观察idea控制台变化</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>hadoop101<span class="token punctuation">]</span>
<span class="token punctuation">[</span>hadoop101,hadoop102<span class="token punctuation">]</span>
<span class="token punctuation">[</span>hadoop101,hadoop102,hadoop103<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2）在idea上操作增加减少服务器</strong></p><ol><li><p>启动DistributeClient 客户端（如果已经启动过，不需要重启）</p></li><li><p>启动DistributeServer 服务</p></li></ol><p>①点击Edit Configurations…</p><p><img src="`+t+'" alt="image-20230418002927728"></p><p>②在弹出的窗口中（Program arguments）输入想启动的主机，例如，hadoop102</p><p><img src="'+o+'" alt="img"></p><p>③回到 DistributeServer 的 main 方 法 ， 右 键 ， 在 弹 出 的 窗 口 中 点 击 Run “DistributeServer.main()”</p><p><img src="'+c+'" alt="wps18"></p><p>④观察 DistributeServer 控制台，提示hadoop102 is working</p><p>⑤观察 DistributeClient 控制台，提示hadoop102 已经上线</p>',29),u=[l];function r(k,d){return s(),a("div",null,u)}const b=n(i,[["render",r],["__file","四、服务器动态上下线监听案例.html.vue"]]);export{b as default};
