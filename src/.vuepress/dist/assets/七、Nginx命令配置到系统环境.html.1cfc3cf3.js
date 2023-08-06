import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as i,a as s}from"./app.9b10ba0a.js";const d={},a=s(`<p>前面我们介绍过Nginx安装目录下的二级制可执行文件<code>nginx</code>的很多命令，要想使用这些命令前提是需要进入sbin目录下才能使用，很不方便，如何去优化，我们可以将该二进制可执行文件加入到系统的环境变量，这样的话在任何目录都可以使用nginx对应的相关命令。具体实现步骤如下:</p><p>演示可删除</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/usr/local/nginx/sbin/nginx -V
cd /usr/local/nginx/sbin  nginx -V
如何优化？？？
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(1)修改<code>/etc/profile</code>文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vim /etc/profile
在最后一行添加
export PATH=$PATH:/usr/local/nginx/sbin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2)使之立即生效</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>source /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(3)执行nginx命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nginx -V
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),l=[a];function t(c,r){return n(),i("div",null,l)}const v=e(d,[["render",t],["__file","七、Nginx命令配置到系统环境.html.vue"]]);export{v as default};
