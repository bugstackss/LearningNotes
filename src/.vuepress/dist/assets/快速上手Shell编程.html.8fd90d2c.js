import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as t,d as n,e as s,b as e,a as l,r as c}from"./app.9b10ba0a.js";const o="/assets/05aef93bf3697ce147d3b7272579d3e2.5adc8f3d.png",r={},d=n("h2",{id:"_1-shell概述",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-shell概述","aria-hidden":"true"},"#"),s(" 1. Shell概述")],-1),u={href:"https://so.csdn.net/so/search?q=%E8%A7%A3%E9%87%8A%E5%99%A8&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},v=l('<p><img src="'+o+`" alt="image-20220523094259783"></p><p>Shell是一个功能强大的编程语言，易编写、易调试、灵活性强。</p><ol><li>Linux提供的Shell解析器有</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/shells
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>bash和sh的关系</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /bin
ll <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">bash</span>

<span class="token punctuation">[</span>root@lys bin<span class="token punctuation">]</span><span class="token comment"># echo $SHELL</span>
/bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-shell-脚本入门" tabindex="-1"><a class="header-anchor" href="#_2-shell-脚本入门" aria-hidden="true">#</a> 2. Shell 脚本入门</h2><p>（1）脚本格式</p><p>脚本以#!/bin/bash开头 （指定解析器）</p>`,9),b={href:"https://so.csdn.net/so/search?q=Shell%E8%84%9A%E6%9C%AC&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},m={href:"http://helloworld.sh",target:"_blank",rel:"noopener noreferrer"},k=l(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">touch</span> helloworld.sh
<span class="token function">vim</span> helloworld.sh

<span class="token comment"># 内容</span>
<span class="token comment"># !/bin/bash</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;hellow world&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）脚本的常用执行方式</p><ol><li>bash或sh + 脚本的相对路径或绝对路径 （不用赋予脚本+x权限）（重新开了一个进程执行bash命令）</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sh</span> ./helloworld.sh
<span class="token function">bash</span> ./helloworld.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>采用输入脚本的绝对路径或相对路径执行脚本（必须具有可执行权限+x）（本质是使用当前的bash进程执行命令）</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./helloworld.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>【了解】在脚本的路径前加“.”或者source</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">source</span> helloworld.sh 
<span class="token builtin class-name">.</span> helloworld.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>原因：</p><p>前两种方式都是在当前shell找那个打开一个子shell来执行脚本内容，当脚本内容结束，则子shell关系，回到父shell中。</p><p>第三种，也就是使用在脚本路径前加”.&quot; 或者source的方式，可以使脚本内容在当前shell里执行，而无需打开子shell。这就是为什么我们每次要修改完/etc/profile文件以后，需要source一下的原因。</p><p>开子shell与不开子shell的却别就在于，环境变量的集成关系，如在子shell中设置的当前变量，父shell是不可见的。</p><p><strong>子Shell</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@lys shell<span class="token punctuation">]</span><span class="token comment"># ps -f</span>
<span class="token environment constant">UID</span>        PID  <span class="token environment constant">PPID</span>  C STIME TTY          TIME CMD
root      <span class="token number">1907</span> <span class="token number">10679</span>  <span class="token number">0</span> <span class="token number">12</span>:46 pts/1    00:00:00 <span class="token function">ps</span> <span class="token parameter variable">-f</span>
root     <span class="token number">10679</span> <span class="token number">10672</span>  <span class="token number">0</span> 09:47 pts/1    00:00:00 <span class="token parameter variable">-bash</span>
<span class="token punctuation">[</span>root@lys shell<span class="token punctuation">]</span><span class="token comment"># bash</span>
<span class="token punctuation">[</span>root@lys shell<span class="token punctuation">]</span><span class="token comment"># ps -f</span>
<span class="token environment constant">UID</span>        PID  <span class="token environment constant">PPID</span>  C STIME TTY          TIME CMD
root      <span class="token number">1970</span> <span class="token number">10679</span>  <span class="token number">0</span> <span class="token number">12</span>:46 pts/1    00:00:00 <span class="token function">bash</span>
root      <span class="token number">2006</span>  <span class="token number">1970</span>  <span class="token number">0</span> <span class="token number">12</span>:46 pts/1    00:00:00 <span class="token function">ps</span> <span class="token parameter variable">-f</span>
root     <span class="token number">10679</span> <span class="token number">10672</span>  <span class="token number">0</span> 09:47 pts/1    00:00:00 <span class="token parameter variable">-bash</span>
<span class="token punctuation">[</span>root@lys shell<span class="token punctuation">]</span><span class="token comment"># exit</span>
<span class="token builtin class-name">exit</span>
<span class="token punctuation">[</span>root@lys shell<span class="token punctuation">]</span><span class="token comment"># ps -f</span>
<span class="token environment constant">UID</span>        PID  <span class="token environment constant">PPID</span>  C STIME TTY          TIME CMD
root      <span class="token number">2034</span> <span class="token number">10679</span>  <span class="token number">0</span> <span class="token number">12</span>:46 pts/1    00:00:00 <span class="token function">ps</span> <span class="token parameter variable">-f</span>
root     <span class="token number">10679</span> <span class="token number">10672</span>  <span class="token number">0</span> 09:47 pts/1    00:00:00 <span class="token parameter variable">-bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-变量" tabindex="-1"><a class="header-anchor" href="#_3-变量" aria-hidden="true">#</a> 3. 变量</h2><h3 id="_3-1-系统预定义变量" tabindex="-1"><a class="header-anchor" href="#_3-1-系统预定义变量" aria-hidden="true">#</a> 3.1 系统预定义变量</h3><p>常用系统变量</p><p>HOME、PWD、SHELL、USER</p><p>(1)查看系统变量的值</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token environment constant">$HOME</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(2)显示当前Shell中所有变量：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">env</span>
<span class="token builtin class-name">set</span> <span class="token comment"># 包含所有系统自定义和用户自定义的变量 </span>
<span class="token function">printenv</span> <span class="token environment constant">$USER</span>
<span class="token function">printenv</span> <span class="token environment constant">USER</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-自定义变量" tabindex="-1"><a class="header-anchor" href="#_3-2-自定义变量" aria-hidden="true">#</a> 3.2 自定义变量</h3><p>（1）基本语法</p><ol><li>定义变量：变量名=变量，注意，= 前后不能有空格</li><li>撤销变量：usset变量名</li><li>声明静态变量：readonly变量，注意：不能unset</li></ol><p>（2）变量定义规则</p><ol><li>变量名称可以由字母、数字和下划线组成，但是不能以数字开头，环境变量名建议大写。</li><li>等号两侧不能有空格</li><li>在bash中，变量默认类型都是字符串类型，无法进行数值运算。</li><li>变量的值如果有空格，需要使用双引号或单引号括起来。</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@lys shell<span class="token punctuation">]</span><span class="token comment"># a=2</span>
<span class="token punctuation">[</span>root@lys shell<span class="token punctuation">]</span><span class="token comment"># echo $a</span>
<span class="token number">2</span>
<span class="token comment"># 提升为全部变量</span>
<span class="token punctuation">[</span>root@lys shell<span class="token punctuation">]</span><span class="token comment"># export a</span>

<span class="token assign-left variable">new_var</span><span class="token operator">=</span><span class="token string">&#39;hello linux&#39;</span>
<span class="token function">vim</span> helloworld.sh
<span class="token comment"># 追加</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$new_var</span>

<span class="token function">sh</span> helloworld.sh
<span class="token comment">#发现没有值</span>
<span class="token comment"># 使用一下命令就有值</span>
<span class="token builtin class-name">.</span> hellworld.sh
sourcce hellowrld.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>计算</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span><span class="token number">1</span><span class="token operator">+</span><span class="token number">5</span><span class="token variable">))</span></span>
<span class="token assign-left variable">a</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token number">1</span>+5<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>定义只读变量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">readonly</span><span class="token operator">=</span>5f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>撤销变量</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">unset</span> a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-3-特殊变量" tabindex="-1"><a class="header-anchor" href="#_3-3-特殊变量" aria-hidden="true">#</a> 3.3 特殊变量</h3><h4 id="_3-3-1-n" tabindex="-1"><a class="header-anchor" href="#_3-3-1-n" aria-hidden="true">#</a> 3.3.1 $n</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token variable">$n</span>  n为数字，<span class="token variable">$0</span>代表该脚本名称，<span class="token variable">$1</span>-9 代表第一到第九个参数，十以上的参数需要用大括号标识如<span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> helloworld.sh
<span class="token builtin class-name">echo</span> <span class="token string">&quot;hello，<span class="token variable">$1</span>&quot;</span>
<span class="token comment"># 执行</span>
<span class="token function">sh</span> helloworld.sh a
<span class="token comment"># 输出</span>
hello，a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例2</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;======$n=====&#39;</span>
<span class="token builtin class-name">echo</span> script name: <span class="token variable">$0</span>
<span class="token builtin class-name">echo</span> 1st paramater: <span class="token variable">$1</span>
<span class="token builtin class-name">echo</span> 2nd paramater: <span class="token variable">$2</span>

<span class="token punctuation">[</span>root@lys shell<span class="token punctuation">]</span><span class="token comment">#  sh parameter.sh 0 1 2</span>
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token variable">$n</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
script name: parameter.sh
1st paramater: <span class="token number">0</span>
2nd paramater: <span class="token number">1</span>

<span class="token comment"># 获取调用文件名称</span>
<span class="token function">basename</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-2" tabindex="-1"><a class="header-anchor" href="#_3-3-2" aria-hidden="true">#</a> 3.3.2 $#</h4><p>$# 获取所有输入参数个数，常用于循环，判断参数的个数是否正确以及加强脚本的健壮性</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> parameter.sh 
<span class="token comment">#!/bin/bash</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;======$n=====&#39;</span>
<span class="token builtin class-name">echo</span> script name: <span class="token variable">$0</span>
<span class="token builtin class-name">echo</span> 1st paramater: <span class="token variable">$1</span>
<span class="token builtin class-name">echo</span> 2nd paramater: <span class="token variable">$2</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;======$#=====&#39;</span>
<span class="token builtin class-name">echo</span> paramter numbers: <span class="token variable">$#</span>


<span class="token function">sh</span> parameter.sh ab <span class="token builtin class-name">cd</span>
<span class="token comment"># 结果</span>
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token variable">$n</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
script name: parameter.sh
1st paramater: ab
2nd paramater: <span class="token builtin class-name">cd</span>
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token variable">$#</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
paramter numbers: <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-3-∗-、-、∗、" tabindex="-1"><a class="header-anchor" href="#_3-3-3-∗-、-、∗、" aria-hidden="true">#</a> 3.3.3 ∗ 、 *、∗、@</h4><p>∗ 这个变量代表命令行中所有的参数，*把所有的参数看成一个整体</p><p>@ 这个变量也代表命令行中所有的参数，不过@把每个参数区分对待</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> paramter.sh
<span class="token comment">#!/bin/bash</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;======$n=====&#39;</span>
<span class="token builtin class-name">echo</span> script name: <span class="token variable">$0</span>
<span class="token builtin class-name">echo</span> 1st paramater: <span class="token variable">$1</span>
<span class="token builtin class-name">echo</span> 2nd paramater: <span class="token variable">$2</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;======$#=====&#39;</span>
<span class="token builtin class-name">echo</span> paramter numbers: <span class="token variable">$#</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$*</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$@</span>


<span class="token punctuation">[</span>root@lys shell<span class="token punctuation">]</span><span class="token comment"># sh parameter.sh ab cd</span>
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token variable">$n</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
script name: parameter.sh
1st paramater: ab
2nd paramater: <span class="token builtin class-name">cd</span>
<span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token variable">$#</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span>
paramter numbers: <span class="token number">2</span>
ab <span class="token builtin class-name">cd</span>
ab <span class="token builtin class-name">cd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-4" tabindex="-1"><a class="header-anchor" href="#_3-3-4" aria-hidden="true">#</a> 3.3.4 $?</h4><p>$? 最后一次执行的命令的返回状态。如果这个变量的值为0，证明上一个命令正确执行；如果这个变量非0（具体是哪个数，由命令自己来决定）则证明上一命令执行不正确了）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@lys shell<span class="token punctuation">]</span><span class="token comment"># ./helloworld.sh </span>
helloworld
hello，
<span class="token punctuation">[</span>root@lys shell<span class="token punctuation">]</span><span class="token comment"># echo $?</span>
<span class="token number">0</span>

<span class="token comment"># 如果错误执行，就非0</span>
<span class="token punctuation">[</span>root@lys shell<span class="token punctuation">]</span><span class="token comment"># $?</span>
-bash: <span class="token number">0</span>: <span class="token builtin class-name">command</span> not found
<span class="token punctuation">[</span>root@lys shell<span class="token punctuation">]</span><span class="token comment"># echo $?</span>
<span class="token number">127</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-运算符" tabindex="-1"><a class="header-anchor" href="#_4-运算符" aria-hidden="true">#</a> 4 运算符</h2><p>$((运算式)) 或 $[运算式]</p><p>计算 （2+3）*4</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@lys shell<span class="token punctuation">]</span><span class="token comment"># echo $[(2+3)*4]</span>
<span class="token number">20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>expr使用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">expr</span> <span class="token number">1</span> + <span class="token number">2</span>
<span class="token number">3</span>

<span class="token comment"># 乘法需转义</span>
<span class="token function">expr</span> <span class="token number">5</span> <span class="token punctuation">\\</span>* <span class="token number">2</span>
<span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>命令替换</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@lys shell<span class="token punctuation">]</span><span class="token comment"># a=$(expr 2 + 2)</span>
<span class="token punctuation">[</span>root@lys shell<span class="token punctuation">]</span><span class="token comment"># echo $a</span>
<span class="token number">4</span>


<span class="token punctuation">[</span>root@lys shell<span class="token punctuation">]</span><span class="token comment"># a=\`expr 5 + 2\`</span>
<span class="token punctuation">[</span>root@lys shell<span class="token punctuation">]</span><span class="token comment"># echo $a</span>
<span class="token number">7</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>加法脚本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">sum</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token variable">$1</span> + <span class="token variable">$2</span><span class="token punctuation">]</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$sum</span>          
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-条件判断" tabindex="-1"><a class="header-anchor" href="#_5-条件判断" aria-hidden="true">#</a> 5 条件判断</h2><p>基本语法</p><p>test condition</p><p>[ condition] （注意condition前后要有空格）</p><p>注意: 条件非空即为true, [lys] 返回true, [ ]返回false</p><p>常用判断条件</p><p>（1）两个整数之间比较</p><p>-eq 等于（equal）</p><p>-ne 不等于 （not equal)</p><p>-lt 小于 （less than)</p><p>-le 小于等于 （less equal)</p><p>-gt 大于 （greate than)</p><p>-ge 大于等于 （greater equal)</p><p>注：如果是字符串之间的比较，用等号”=“判断相等；用”！=“判断不等。</p><p>（2）按照文件权限进行判断</p><p>-r 有读的权限（read)</p><p>-w 有写的权限 （write)</p><p>-x 有执行的权限 （execute)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 判断文件是否有可执行权限</span>
<span class="token punctuation">[</span>root@lys shell<span class="token punctuation">]</span><span class="token comment"># [ -x helloworld.sh ]</span>
<span class="token punctuation">[</span>root@lys shell<span class="token punctuation">]</span><span class="token comment"># echo $?</span>
<span class="token number">0</span>
<span class="token comment"># 结果0代表有</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>（3）按照文件类型进行判断</p><p>-e 文件存在（existence)</p><p>-f 文件存在并且是一个常规的文件（file)</p><p>-d 文件存在并且是一个目录（directory)</p><p>案例实操</p><ol><li>23是否大于等于22</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token punctuation">[</span> <span class="token number">23</span> <span class="token parameter variable">-ge</span> <span class="token number">22</span> <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>判断文件是否有可执行权限</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token punctuation">[</span> <span class="token parameter variable">-x</span> helloworld.sh <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>文件是否存在</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token punctuation">[</span> <span class="token parameter variable">-e</span> helloworld.sh<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-流程控制" tabindex="-1"><a class="header-anchor" href="#_6-流程控制" aria-hidden="true">#</a> 6 流程控制</h2><h3 id="_6-1-if判断" tabindex="-1"><a class="header-anchor" href="#_6-1-if判断" aria-hidden="true">#</a> 6.1 if判断</h3><p>（1）单分支</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span>条件判断<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
	程序
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> 条件判断式 <span class="token punctuation">]</span>
<span class="token keyword">then</span> 
	程序
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span>x <span class="token operator">=</span> <span class="token string">&quot;lys&quot;</span>x <span class="token punctuation">]</span>
<span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&#39;welcome, lys&#39;</span>
<span class="token keyword">fi</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token parameter variable">-gt</span> <span class="token number">18</span> <span class="token parameter variable">-a</span> <span class="token variable">$a</span> <span class="token parameter variable">-lt</span> <span class="token number">35</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span> <span class="token builtin class-name">echo</span> OK<span class="token punctuation">;</span> <span class="token keyword">fi</span> 
<span class="token parameter variable">-a</span> and
<span class="token parameter variable">-o</span> or
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>多分支</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> 条件判断式 <span class="token punctuation">]</span>
<span class="token keyword">then</span> 
	程序

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$2</span> <span class="token parameter variable">-lt</span> <span class="token number">18</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;未成年人&quot;</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$2</span> <span class="token parameter variable">-lt</span> <span class="token number">35</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;中年人&quot;</span>
<span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;成年人&quot;</span>
<span class="token keyword">fi</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-case语句" tabindex="-1"><a class="header-anchor" href="#_6-2-case语句" aria-hidden="true">#</a> 6.2 case语句</h3><p>基本语法</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">case</span> $变量名 <span class="token keyword">in</span>
<span class="token string">&quot;值1&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token string">&quot;值2&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span>
*<span class="token punctuation">)</span>
	如果变量的值都不是以上的值，则执行此程序
<span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意事项：</p><p>（1）case行尾必须为单词 “in”, 每个模式匹配必须以有括号&quot;)&quot; 结束</p><p>（2）双分号“;;&quot;表示命令序列结束，相当于java的breakl</p><p>（3）最后的“*）&quot;表示默认模式，相当于java中的default</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">case</span> <span class="token variable">$1</span> <span class="token keyword">in</span>
<span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;one&quot;</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;two&quot;</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token number">3</span><span class="token punctuation">)</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;three&quot;</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span>
*<span class="token punctuation">)</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;number else&quot;</span>
<span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>

<span class="token function">sh</span> case_test.sh <span class="token number">1</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-for-循环" tabindex="-1"><a class="header-anchor" href="#_6-3-for-循环" aria-hidden="true">#</a> 6.3 for 循环</h3><p>基本语法</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>初始值<span class="token punctuation">;</span> 循环控制条件<span class="token punctuation">;</span> 变量变化 <span class="token punctuation">))</span></span>
<span class="token keyword">do</span> 
	程序
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> $<span class="token number">1</span> <span class="token punctuation">;</span> i<span class="token operator">++</span>  <span class="token punctuation">))</span></span>
<span class="token keyword">do</span>
        <span class="token assign-left variable">sum</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$sum</span> + <span class="token variable">$i</span> <span class="token punctuation">]</span>

<span class="token keyword">done</span><span class="token punctuation">;</span>

<span class="token builtin class-name">echo</span> <span class="token variable">$sum</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token keyword">for</span> <span class="token for-or-select variable">os</span> <span class="token keyword">in</span> linux windows macos<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token variable">$os</span><span class="token punctuation">;</span> <span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token assign-left variable">sum</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token variable">$sum</span>+<span class="token variable">$i</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">done</span><span class="token punctuation">;</span> <span class="token builtin class-name">echo</span> <span class="token variable">$sum</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>for 与 ∗ 和 * 和∗和@</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;$#&#39;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">para</span> <span class="token keyword">in</span> <span class="token variable">$*</span>
<span class="token keyword">do</span>
        <span class="token builtin class-name">echo</span> <span class="token variable">$para</span>
<span class="token keyword">done</span>


<span class="token builtin class-name">echo</span> <span class="token string">&#39;$@&#39;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">para</span> <span class="token keyword">in</span> <span class="token variable">$@</span>
<span class="token keyword">do</span>
        <span class="token builtin class-name">echo</span> <span class="token variable">$para</span>
<span class="token keyword">done</span>


<span class="token punctuation">[</span>root@lys shell<span class="token punctuation">]</span><span class="token comment"># sh for_test2.sh 1 2 3 </span>
<span class="token variable">$#</span>
<span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
<span class="token variable">$@</span>
<span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用引号包围起来</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&#39;$#&#39;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">para</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$*</span>&quot;</span>
<span class="token keyword">do</span>
        <span class="token builtin class-name">echo</span> <span class="token variable">$para</span>
<span class="token keyword">done</span>


<span class="token builtin class-name">echo</span> <span class="token string">&#39;$@&#39;</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">para</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">$@</span>&quot;</span>
<span class="token keyword">do</span>
        <span class="token builtin class-name">echo</span> <span class="token variable">$para</span>
<span class="token keyword">done</span>


<span class="token punctuation">[</span>root@lys shell<span class="token punctuation">]</span><span class="token comment"># sh for_test2.sh 1 2 3 </span>
<span class="token variable">$#</span>
<span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>
<span class="token variable">$@</span>
<span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4-while循环" tabindex="-1"><a class="header-anchor" href="#_6-4-while循环" aria-hidden="true">#</a> 6.4 while循环</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">while</span> <span class="token punctuation">[</span> 条件判断式 <span class="token punctuation">]</span>
<span class="token keyword">do</span> 	
	程序
<span class="token keyword">done</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>while循环实现 1+100</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">sum</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$i</span> <span class="token parameter variable">-le</span> <span class="token number">100</span> <span class="token punctuation">]</span>
<span class="token keyword">do</span>
        <span class="token assign-left variable">sum</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$sum</span> + <span class="token variable">$i</span> <span class="token punctuation">]</span>
        <span class="token assign-left variable">i</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token variable">$i</span> + <span class="token number">1</span><span class="token punctuation">]</span>
<span class="token comment"># 		let sum+=i</span>
<span class="token comment">#		let i++ let 实现方式 </span>
<span class="token keyword">done</span><span class="token punctuation">;</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$sum</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-read读取控制台输入" tabindex="-1"><a class="header-anchor" href="#_7-read读取控制台输入" aria-hidden="true">#</a> 7 read读取控制台输入</h3><p>基本语法</p><p>read (选项) （参数）</p><p>-p：指定读取值时的提示符：</p><p>-t：指定读取值时等待的时间（秒）如果-t不加表示一直等待</p><p>参数：</p><p>变量：指定读取值的变量名</p><p>案例实操</p><p>提示7秒内，读取控制台输入的名称</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">read</span> <span class="token parameter variable">-t</span> <span class="token number">10</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;请输入您的名称：&quot;</span> name
<span class="token builtin class-name">echo</span> <span class="token string">&quot;welcome <span class="token variable">$name</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-函数" tabindex="-1"><a class="header-anchor" href="#_7-函数" aria-hidden="true">#</a> 7 函数</h2><h3 id="_7-1-系统函数" tabindex="-1"><a class="header-anchor" href="#_7-1-系统函数" aria-hidden="true">#</a> 7.1 系统函数</h3><h4 id="_7-1-1-basename" tabindex="-1"><a class="header-anchor" href="#_7-1-1-basename" aria-hidden="true">#</a> 7.1.1 basename</h4><p>basename [string/pathname] [suffix] basename命令会删除所有的前缀包括最后一个（“/&quot;)字符，然后再字符串显示出来</p><p>basename 可以理解为取路径里的文件名称</p><p>选项:</p><p>suffix为后缀，如果suffix被指定了，basename会讲pathname或string中的suffix去掉。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">filename</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$1</span>&quot;</span>_log_<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%s<span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> <span class="token variable">$filename</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>basename 基础用法</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@lys shell<span class="token punctuation">]</span><span class="token comment"># basename helloworld.sh </span>
helloworld.sh

<span class="token punctuation">[</span>root@lys shell<span class="token punctuation">]</span><span class="token comment"># basename helloworld.sh .sh</span>
helloworld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-1-2-dirname" tabindex="-1"><a class="header-anchor" href="#_8-1-2-dirname" aria-hidden="true">#</a> 8.1.2 dirname</h4><p>dirname 文件<strong>绝对路径</strong> 从给定的包含绝对路径的文件名中取出文件名（非目录的部分)，然后返回剩下的路径（目录的部分））</p><p>dirname 可以理解为取文件路径的绝对路径名称</p><p>获取hellowolrd.sh的目录名称</p><h3 id="_7-2-自定义函数" tabindex="-1"><a class="header-anchor" href="#_7-2-自定义函数" aria-hidden="true">#</a> 7.2 自定义函数</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>function<span class="token punctuation">]</span> funname<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>

<span class="token punctuation">{</span>
	Action<span class="token punctuation">;</span>

    <span class="token punctuation">[</span>return int<span class="token punctuation">;</span><span class="token punctuation">]</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>经验技巧</p><p>（1）必须在调用函数地方之前，先声明函数，shell脚本是逐行运行。不会像其他语言一样先编译。</p><p>（2）函数返回值，只能通过$?系统变量获得，可以显示加：return返回，如果不加，将以最后一条命令运行结果作为返回值。return后跟述职n(0–255)</p><p>计算两数的和</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token assign-left variable">s</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token variable">$1</span>+<span class="token variable">$2</span><span class="token punctuation">]</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;sum=<span class="token variable">$s</span>&quot;</span>
<span class="token punctuation">}</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;请输入第一个整数&quot;</span> a
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;请输入第二个整数&quot;</span> b
<span class="token function">add</span> <span class="token variable">$a</span> <span class="token variable">$b</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用#？最大只能返回255</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token assign-left variable">s</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token variable">$1</span>+<span class="token variable">$2</span><span class="token punctuation">]</span>
        <span class="token builtin class-name">return</span> <span class="token variable">$s</span>
<span class="token punctuation">}</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;请输入第一个整数&quot;</span> a
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;请输入第二个整数&quot;</span> b
<span class="token function">add</span> <span class="token variable">$a</span> <span class="token variable">$b</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;sum=&quot;</span><span class="token variable">$?</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用$()获取值</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token keyword">function</span> <span class="token function-name function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token assign-left variable">s</span><span class="token operator">=</span>$<span class="token punctuation">[</span><span class="token variable">$1</span>+<span class="token variable">$2</span><span class="token punctuation">]</span>
        <span class="token builtin class-name">echo</span> <span class="token variable">$s</span>
<span class="token punctuation">}</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;请输入第一个整数&quot;</span> a
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;请输入第二个整数&quot;</span> b
<span class="token assign-left variable">sum</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">add</span> $a $b<span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;sum=<span class="token variable">$sum</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-综合案例" tabindex="-1"><a class="header-anchor" href="#_8-综合案例" aria-hidden="true">#</a> 8 综合案例</h2><h3 id="_8-1-归档文件" tabindex="-1"><a class="header-anchor" href="#_8-1-归档文件" aria-hidden="true">#</a> 8.1 归档文件</h3><p>实际生产中，往往需要对重要数据进行归档备份。</p><p>需求：实现一个每天对指定目录归档备份的脚本，输入一个目录名称（末尾不带/）,将目录下所有文件按天归档保存，并将归档日期附加在归档文件名上，放在/root/archive下。</p><p>这里使用到了归档命令：tar</p><p>后面可以加上-c表示归档。加上-z选项表示同时进行压缩，得到的文件后缀名为tar.gz</p><p>脚本实现：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token comment">#!/bin/bash</span>


<span class="token comment">#首先判断输入参数个数是否为1</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$#</span> <span class="token parameter variable">-ne</span> <span class="token number">1</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;参数个数错误！应该输入一个参数，作为归档目录&quot;</span>
        <span class="token builtin class-name">exit</span>
<span class="token keyword">fi</span>

<span class="token comment"># 从参数中获取目录名称</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token variable">$1</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> 
<span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;目录不存在!&quot;</span>
        <span class="token builtin class-name">exit</span>
<span class="token keyword">fi</span>

<span class="token assign-left variable">DIR_NAME</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">basename</span> $1<span class="token variable">)</span></span>
<span class="token assign-left variable">DIR_PATH</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">cd</span> <span class="token punctuation">$(</span>dirname $1<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>


<span class="token comment"># 获取当前日期</span>
<span class="token assign-left variable">DATE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%y%m%d<span class="token variable">)</span></span>
<span class="token comment"># 生成的归档文件名称</span>
<span class="token assign-left variable">FILE</span><span class="token operator">=</span>archive_<span class="token variable">\${DIR_NAME}</span>_<span class="token variable">$DATE</span>.tar.gz
<span class="token assign-left variable">DEST</span><span class="token operator">=</span>/root/archive/<span class="token variable">$FILE</span>

<span class="token comment"># 开始归档</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;开始归档...&quot;</span>
<span class="token builtin class-name">echo</span> 

<span class="token function">tar</span> <span class="token parameter variable">-zcf</span> <span class="token variable">$DEST</span>  <span class="token variable">$DIR_PATH</span>/<span class="token variable">$DIR_NAME</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;归档成功&quot;</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;归档文件为：<span class="token variable">$DEST</span>&quot;</span>
<span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">&quot;归档出现问题&quot;</span>
        <span class="token builtin class-name">echo</span> 
<span class="token keyword">fi</span>
<span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">mkdir</span> /root/archive
 <span class="token function">sh</span> tar.sh <span class="token punctuation">..</span>/shell/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>定时执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">crontab</span> <span class="token parameter variable">-e</span>
<span class="token number">0</span> <span class="token number">2</span> * * * /java-project/shell/tar.sh /java-project/shell
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-正则表达式入门" tabindex="-1"><a class="header-anchor" href="#_9-正则表达式入门" aria-hidden="true">#</a> 9 正则表达式入门</h2><p>正则表达式使用单个字符串来描述、匹配一系列符合某个语法规则的字符串。在很多文本编辑器里，正则表达式通常被用来检索、替换那些符合某个模式的文本。在Linux中，grep，sed，awk等文本处理工具都支持通过正则表达式进行模式匹配。</p><h3 id="_9-1-常规匹配" tabindex="-1"><a class="header-anchor" href="#_9-1-常规匹配" aria-hidden="true">#</a> 9.1 常规匹配</h3><p>一串不包含规则字符的正则表达式匹配它自己，例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">grep</span> lys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>就会匹配所有包含lys的行</p><h3 id="_9-2-常用特殊字符" tabindex="-1"><a class="header-anchor" href="#_9-2-常用特殊字符" aria-hidden="true">#</a> 9.2 常用特殊字符</h3><ol><li><p>特殊字符: ^</p><p>^匹配一行的开头，例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">grep</span> ^a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>会匹配出所有的a开头的行</p></li><li><p>特殊字符：$</p><p>$ 匹配一行的结束，例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">grep</span> t$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查找空行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> helloworld.sh <span class="token operator">|</span> <span class="token function">grep</span> ^$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>特殊字符：.</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">grep</span> r<span class="token punctuation">..</span>t
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>会匹配包含rabt,rbbt,rxdt,root等的所有行</p></li><li><p>特殊字符：*</p><p>*不单独使用，他上一个字符连用，表示上一个字符0次或多次，例如</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">grep</span> ro*t
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>会匹配rt,rot,root,roooor等</p><p>.*会匹配全部</p></li><li><p>字符区间（中括号）：[]</p><p>[] 表示匹配某个范围内的一个字符，例如</p><p>[6,8]-------匹配6或者8，</p><p>[0-9]------匹配一个0-9的数字</p><p>[0-9]*-----匹配任意长度的数字字符串</p><p>[a-z] — 匹配一个a-z之间的字符串</p><p>[a-z]* ------ 匹配任意长度的字母字符串</p><p>[a-z,e-f]-- 匹配a-c，或者e-f之间的任意字符</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">grep</span> r<span class="token punctuation">[</span>a,b,c<span class="token punctuation">]</span>*t
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>会匹配rt,rat,raat等等行</p></li><li><p>特殊字符：\\</p><p>\\标识转义，并不会单独使用。由于所有特殊字符都有其特定匹配模式，当我们想匹配某一特殊字符本身时（例如，我想找出所有包含’$&#39;的行），就需要将转义符合特殊字符连用，来表示特殊字符本身，例如</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;a\\$b&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>就会匹配所有包含a$b的行。主要需要使用单引号将表达式引起来、</p></li></ol><h2 id="_10-文本处理工具" tabindex="-1"><a class="header-anchor" href="#_10-文本处理工具" aria-hidden="true">#</a> 10 文本处理工具</h2><h3 id="_10-1-cut" tabindex="-1"><a class="header-anchor" href="#_10-1-cut" aria-hidden="true">#</a> 10.1 cut</h3><p>cut的工作就是“剪”,具体的说 就是在文件中负责剪切数据用的。cut命令从文件的每一行剪切字节、字符和字段并将这些字节、字符和字段输出。</p><p>基本用法</p><p>cut [选项参数] filename</p><p>说明：默认分隔符是制表符</p><table><thead><tr><th>选项参数</th><th>功能</th></tr></thead><tbody><tr><td>-f</td><td>列号，提前第几列</td></tr><tr><td>-d</td><td>分隔符，按照指定分隔符分割列，默认是制表符“\\t&quot;</td></tr><tr><td>-c</td><td>按字符进行切割 后加加n 表示取第几列 比如 -c 1</td></tr></tbody></table><p>数据准备</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>dong shen
guan zhen
wo wo
lai lai
le le
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>切割 cut.txt 第一列</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">&quot; &quot;</span> <span class="token parameter variable">-f</span> <span class="token number">1</span> cut.sh 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>截取第二列</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">&quot; &quot;</span> <span class="token parameter variable">-f</span> <span class="token number">2</span> cut.sh 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>截取区间</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">&quot; &quot;</span> <span class="token parameter variable">-f</span> <span class="token number">1</span>-4 cut.sh 
<span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">&quot; &quot;</span> <span class="token parameter variable">-f</span> <span class="token parameter variable">-4</span> cut.sh
<span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">&quot; &quot;</span> <span class="token parameter variable">-f</span> <span class="token number">4</span>- cut.sh 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在cut切割guan</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> cut.sh <span class="token operator">|</span> <span class="token function">grep</span> guan <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">&quot; &quot;</span> <span class="token parameter variable">-f</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>选取系统 PATH 变量值，第 2 个“：”开始后的所有路径：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token environment constant">$PATH</span> 
/java-project/jdk1.8.0_321/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/root/bi

<span class="token builtin class-name">echo</span> <span class="token environment constant">$PATH</span> <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;:&quot;</span> <span class="token parameter variable">-f</span> <span class="token number">3</span>-
/usr/local/bin:/usr/sbin:/usr/bin:/root/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>切割 ifconfig 后打印的 IP 地址</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ifconfig</span> ens33 <span class="token operator">|</span> <span class="token function">grep</span> netmask <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">&quot; &quot;</span> <span class="token parameter variable">-f</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_10-2-awk" tabindex="-1"><a class="header-anchor" href="#_10-2-awk" aria-hidden="true">#</a> 10.2 awk</h3><p>一个强大的文本分析工具，把文件逐行的读入，以空格为默认分隔符将每行切片，切开的部分再进行分析处理。</p><p>基本用法</p><p>awk [选项参数] ‘/pattern1/{action}’ ‘/patten2/{action2}’ filename</p><p>pattern：表示awk在数据中查找的内容，就是匹配模式</p><p>action:在匹配内容时所执行的一系列命令</p><table><thead><tr><th>选项参数</th><th>功能</th></tr></thead><tbody><tr><td>-F</td><td>指定输入文件分隔符</td></tr><tr><td>-v</td><td>赋值一个用户定义变量</td></tr></tbody></table><p>案例实操</p><p>（1）数据准备</p><p>搜索passwd文件以root关键字开头的所有行，并输出该行的第7列</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#cut 实现</span>
 <span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">grep</span> ^root <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">&quot;;&quot;</span> <span class="token parameter variable">-f</span> <span class="token number">7</span>
<span class="token comment"># awk实现</span>
<span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&quot;:&quot;</span> <span class="token string">&#39;/^root/ {print $7}&#39;</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $}&#39;</span>
<span class="token comment"># 打印文件大小</span>
ll <span class="token parameter variable">-l</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $5}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>搜索passwd文件以root关键字开头的所有行，并输出该行的第1列和第7列，中间以“，”号分割。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&quot;:&quot;</span> <span class="token string">&#39;/^root/ {print $1&quot;,&quot;$7}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(4)只显示/etc/passwd的第一列和第七列，以逗号分割，且在所有行前面添加列名&quot;begin&quot;在最后一行添加&quot;end&quot;</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&quot;:&quot;</span> <span class="token string">&#39;BEGIN{print &quot;begin&quot;}{print $1&quot;,&quot;$7}END{print &quot;end&quot;}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(5)将passwd文件中的用户id增加1并输出</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&quot;:&quot;</span> <span class="token string">&#39;{print $3+1}&#39;</span>
<span class="token comment"># 使用变量</span>
<span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-v</span> <span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token number">1</span> <span class="token parameter variable">-F</span> <span class="token string">&quot;:&quot;</span> <span class="token string">&#39;{print $3+i}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>awk的内置变量</p><table><thead><tr><th>变量</th><th>说明</th></tr></thead><tbody><tr><td>FILENAME</td><td>文件名</td></tr><tr><td>NR</td><td>已读的记录数（行号）</td></tr><tr><td>DF</td><td>浏览记录的域的个数（切割后，列的个数）</td></tr></tbody></table><p>案例实操</p><p>（1）统计passwd文件名，每行的行号，每行的列数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">awk</span>  <span class="token parameter variable">-F</span> <span class="token string">&quot;:&quot;</span> <span class="token string">&#39;{print &quot;文件名 :&quot;FILENAME &quot;行号：&quot; NR &quot;列数: &quot;NF }&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(2) 查询ifconfig命令和输出结果中的空行所在的行号</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token function">ifconfig</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;/^$/ {print &quot;空行: &quot; NR}&#39;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_11-综合应用" tabindex="-1"><a class="header-anchor" href="#_11-综合应用" aria-hidden="true">#</a> 11 综合应用</h2><p>我们可以利用 Linux 自带的 mesg 和 write 工具，向其它用户发送消息。</p><p>需求：实现一个向某个用户快速发送消息的脚本，输入用户名作为第一个参数，后面直 接跟要发送的消息。脚本需要检测用户是否登录在系统中、是否打开消息功能，以及当前发送消息是否为空。</p><p>前置知识</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">who</span> 查看有多少控制台
<span class="token punctuation">[</span>root@bogon logs<span class="token punctuation">]</span><span class="token comment"># who</span>
root     pts/0        <span class="token number">2022</span>-05-26 <span class="token number">17</span>:34 <span class="token punctuation">(</span><span class="token number">124.64</span>.252.49<span class="token punctuation">)</span>
root     pts/1        <span class="token number">2022</span>-05-27 <span class="token number">10</span>:12 <span class="token punctuation">(</span><span class="token number">120.244</span>.202.117<span class="token punctuation">)</span>
root     pts/2        <span class="token number">2022</span>-05-27 <span class="token number">11</span>:37 <span class="token punctuation">(</span><span class="token number">58.34</span>.52.34<span class="token punctuation">)</span>
root     pts/5        <span class="token number">2022</span>-05-27 <span class="token number">10</span>:16 <span class="token punctuation">(</span><span class="token number">120.244</span>.202.117<span class="token punctuation">)</span>
root     pts/6        <span class="token number">2022</span>-05-27 <span class="token number">19</span>:10 <span class="token punctuation">(</span><span class="token number">120.245</span>.102.201<span class="token punctuation">)</span>
root     pts/8        <span class="token number">2022</span>-05-25 <span class="token number">10</span>:18 <span class="token punctuation">(</span><span class="token number">124.64</span>.252.49<span class="token punctuation">)</span>

<span class="token comment"># 向某个控制台发出消息</span>
<span class="token function">write</span> root pts/1
hi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>脚本实现如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash/</span>

<span class="token comment"># 查看用户是否登录</span>
<span class="token assign-left variable">login_user</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">who</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-m</span> <span class="token number">1</span> $1 <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $1}&#39;</span> <span class="token variable">)</span></span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable">$login_user</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$1</span> 不在线！&quot;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;脚本退出&quot;</span>
	<span class="token builtin class-name">exit</span>
<span class="token keyword">fi</span>


<span class="token comment"># 查看用户是否开启消息功能</span>
<span class="token assign-left variable">is_allowed</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">who</span> <span class="token parameter variable">-T</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-m</span> <span class="token number">1</span> $1 <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token variable">)</span></span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$is_allowed</span> <span class="token operator">!=</span> <span class="token string">&quot;+&quot;</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$1</span> 没有开启消息功能&quot;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;脚本退出...&quot;</span>
	<span class="token builtin class-name">exit</span>
<span class="token keyword">fi</span>

<span class="token comment"># 确认是否有消息发送</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token variable">$2</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;没有消息发送&quot;</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;脚本退出&quot;</span>
	<span class="token builtin class-name">exit</span>
<span class="token keyword">fi</span>


<span class="token comment"># 从参数中获取要发送的消息</span>
<span class="token assign-left variable">whole_msg</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> $* <span class="token operator">|</span> <span class="token function">cut</span> <span class="token parameter variable">-d</span> <span class="token string">&quot; &quot;</span> <span class="token parameter variable">-f</span> <span class="token number">2</span>-<span class="token variable">)</span></span>

<span class="token comment"># 获取用户登录的终端</span>
<span class="token assign-left variable">user_terminal</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">who</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-m</span> <span class="token number">1</span> $1 <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token variable">)</span></span>


<span class="token comment"># 写入要发送的消息</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$whole_msg</span> <span class="token operator">|</span> <span class="token function">write</span> <span class="token variable">$login_user</span> <span class="token variable">$user_terminal</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span> 
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;发送失败！&quot;</span>
<span class="token keyword">else</span>
	<span class="token builtin class-name">echo</span> <span class="token string">&quot;发送成功!&quot;</span>
<span class="token keyword">fi</span>

<span class="token builtin class-name">exit</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取文件大小</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">filename</span><span class="token operator">=</span><span class="token string">&quot;XXXX.jar&quot;</span>
<span class="token assign-left variable">filesize</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ls</span> <span class="token parameter variable">-l</span> $filename <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{ print $5 }&#39;</span><span class="token variable">\`</span></span>
<span class="token assign-left variable">filesize</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">stat</span> -c%s <span class="token string">&quot;<span class="token variable">$filename</span>&quot;</span><span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,232);function h(g,f){const a=c("ExternalLinkIcon");return p(),t("div",null,[d,n("p",null,[s("Shell是一个命令"),n("a",u,[s("解释器"),e(a)]),s("，它接收应用程序/用户命令，然后调用操作系统内核。")]),v,n("p",null,[s("（2）第一个"),n("a",b,[s("Shell脚本"),e(a)]),s(),n("a",m,[s("helloworld.sh"),e(a)])]),k])}const q=i(r,[["render",h],["__file","快速上手Shell编程.html.vue"]]);export{q as default};
