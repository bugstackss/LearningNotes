import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as a,a as s}from"./app.9b10ba0a.js";const c={},i=s(`<h2 id="mac-本地-执行docker-出现-command-not-found-问题" tabindex="-1"><a class="header-anchor" href="#mac-本地-执行docker-出现-command-not-found-问题" aria-hidden="true">#</a> mac 本地 执行docker 出现 command not found 问题</h2><p>问题： mac本地安装完docker，执行docker出现command not found，因为没有将docker 命令所在的路径添加到系统变量中；</p><p>解决办法： 1.找到docker命令所在的路径，这个路径在你安装成功的时候会直接提示给你，我的路径是：/Applications/Docker.app/Contents/Resources/bin</p><p>2.编辑/etc/paths，在文件的末尾加上docker的安装路径：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/paths
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-path line-numbers-mode" data-ext="path"><pre class="language-path"><code>/Applications/Docker.app/Contents/Resources/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>MacBook-Pro:~ mac$ <span class="token function">cat</span> /etc/paths
/usr/local/bin
/usr/bin
/bin
/usr/sbin
/sbin
/Applications/Docker.app/Contents/Resources/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>添加完之后的文件内容<br> 3.执行docker，就可以看到相关的命令了</p>`,8),d=[i];function o(r,t){return n(),a("div",null,d)}const u=e(c,[["render",o],["__file","Docker Desktop for Mac.html.vue"]]);export{u as default};
