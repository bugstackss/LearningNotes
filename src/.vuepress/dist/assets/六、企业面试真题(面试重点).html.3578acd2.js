import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as e,a}from"./app.9b10ba0a.js";const t={},p=a('<h2 id="_01、选举机制" tabindex="-1"><a class="header-anchor" href="#_01、选举机制" aria-hidden="true">#</a> 01、选举机制</h2><p>半数机制，超过半数的投票通过，即通过。</p><p>（1） 第一次启动选举规则：</p><p><code>投票过半数时，服务器 id 大的胜出</code></p><p>（2） 第二次启动选举规则：</p><ul><li><p><code>①EPOCH 大的直接胜出 </code></p></li><li><p><code>②EPOCH 相同，事务 id 大的胜出</code></p></li><li><p><code>③事务 id 相同，服务器 id 大的胜出</code></p></li></ul><h2 id="_02、生产集群安装多少zk合适" tabindex="-1"><a class="header-anchor" href="#_02、生产集群安装多少zk合适" aria-hidden="true">#</a> 02、生产集群安装多少zk合适？</h2><p>安装奇数台。</p><p><strong>生产经验：</strong></p><ul><li><p>10 台服务器：3 台 zk；</p></li><li><p>20 台服务器：5 台 zk；</p></li><li><p>100 台服务器：11 台 zk；</p></li><li><p>200 台服务器：11 台 zk</p></li></ul><p><strong>服务器台数多：好处，提高可靠性；坏处：提高通信延时</strong></p><h3 id="_03、常用命令" tabindex="-1"><a class="header-anchor" href="#_03、常用命令" aria-hidden="true">#</a> 03、常用命令</h3><p>CRUD：</p><ol><li>C <ul><li>create</li></ul></li><li>R <ul><li>ls</li><li>ls2</li><li>get</li><li>stat</li></ul></li><li>U <ul><li>set</li></ul></li><li>D <ul><li>delete</li><li>rmr</li></ul></li><li>help</li></ol>',14),r=[p];function _(d,o){return i(),e("div",null,r)}const n=l(t,[["render",_],["__file","六、企业面试真题(面试重点).html.vue"]]);export{n as default};
