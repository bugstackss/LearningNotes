import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as p,d as s,e as n,b as c,a,r as l}from"./app.9b10ba0a.js";const i={},u=a('<h1 id="_17-console-对象与控制台" tabindex="-1"><a class="header-anchor" href="#_17-console-对象与控制台" aria-hidden="true">#</a> 17.console 对象与控制台</h1><h2 id="_17-1-console-对象" tabindex="-1"><a class="header-anchor" href="#_17-1-console-对象" aria-hidden="true">#</a> 17.1 console 对象</h2><p><code>console</code>对象是 JavaScript 的原生对象，它有点像 Unix 系统的标准输出<code>stdout</code>和标准错误<code>stderr</code>，可以输出各种信息到控制台，并且还提供了很多有用的辅助方法。</p><p><code>console</code>的常见用途有两个。</p><ul><li>调试程序，显示网页代码运行时的错误信息。</li><li>提供了一个命令行接口，用来与网页代码互动。</li></ul><p><code>console</code>对象的浏览器实现，包含在浏览器自带的开发工具之中。以 Chrome 浏览器的“开发者工具”（Developer Tools）为例，可以使用下面三种方法的打开它。</p><ol><li>按 F12 或者<code>Control + Shift + i</code>（PC）/ <code>Command + Option + i</code>（Mac）。</li><li>浏览器菜单选择“工具/开发者工具”。</li><li>在一个页面元素上，打开右键菜单，选择其中的“Inspect Element”。</li></ol><p>打开开发者工具以后，顶端有多个面板。</p><ul><li><strong>Elements</strong>：查看网页的 HTML 源码和 CSS 代码。</li><li><strong>Resources</strong>：查看网页加载的各种资源文件（比如代码文件、字体文件 CSS 文件等），以及在硬盘上创建的各种内容（比如本地缓存、Cookie、Local Storage等）。</li><li><strong>Network</strong>：查看网页的 HTTP 通信情况。</li><li><strong>Sources</strong>：查看网页加载的脚本源码。</li><li><strong>Timeline</strong>：查看各种网页行为随时间变化的情况。</li><li><strong>Performance</strong>：查看网页的性能情况，比如 CPU 和内存消耗。</li><li><strong>Console</strong>：用来运行 JavaScript 命令。</li></ul><p>这些面板都有各自的用途，以下只介绍<code>Console</code>面板（又称为控制台）。</p><p><code>Console</code>面板基本上就是一个命令行窗口，你可以在提示符下，键入各种命令。</p><h2 id="_17-2-console-对象的静态方法" tabindex="-1"><a class="header-anchor" href="#_17-2-console-对象的静态方法" aria-hidden="true">#</a> 17.2 console 对象的静态方法</h2><p><code>console</code>对象提供的各种静态方法，用来与控制台窗口互动。</p>',13),r={id:"_17-2-1-console-log-console-info-console-debug",tabindex:"-1"},d=s("a",{class:"header-anchor",href:"#_17-2-1-console-log-console-info-console-debug","aria-hidden":"true"},"#",-1),k={href:"http://console.info",target:"_blank",rel:"noopener noreferrer"},v=a(`<p><code>console.log</code>方法用于在控制台输出信息。它可以接受一个或多个参数，将它们连接起来输出。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// Hello World</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// a b c</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>console.log</code>方法会自动在每次输出的结尾，添加换行符。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 1</span>
<span class="token comment">// 2</span>
<span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果第一个参数是格式字符串（使用了格式占位符），<code>console.log</code>方法将依次用后面的参数替换占位符，然后再进行输出。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39; %s + %s = %s&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment">//  1 + 1 = 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code>console.log</code>方法的第一个参数有三个占位符（<code>%s</code>），第二、三、四个参数会在显示时，依次替换掉这个三个占位符。</p><p><code>console.log</code>方法支持以下占位符，不同类型的数据必须使用对应的占位符。</p><ul><li><code>%s</code> 字符串</li><li><code>%d</code> 整数</li><li><code>%i</code> 整数</li><li><code>%f</code> 浮点数</li><li><code>%o</code> 对象的链接</li><li><code>%c</code> CSS 格式字符串</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> number <span class="token operator">=</span> <span class="token number">11</span> <span class="token operator">*</span> <span class="token number">9</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> color <span class="token operator">=</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;%d %s balloons&#39;</span><span class="token punctuation">,</span> number<span class="token punctuation">,</span> color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 99 red balloons</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，第二个参数是数值，对应的占位符是<code>%d</code>，第三个参数是字符串，对应的占位符是<code>%s</code>。</p><p>使用<code>%c</code>占位符时，对应的参数必须是 CSS 代码，用来对输出内容进行 CSS 渲染。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>
  <span class="token string">&#39;%cThis text is styled!&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;color: red; background: yellow; font-size: 24px;&#39;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码运行后，输出的内容将显示为黄底红字。</p><p><code>console.log</code>方法的两种参数格式，可以结合在一起使用。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39; %s + %s &#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;= 2&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 1 + 1  = 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果参数是一个对象，<code>console.log</code>会显示该对象的值。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// Object {foo: &quot;bar&quot;}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Date<span class="token punctuation">)</span>
<span class="token comment">// function Date() { [native code] }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码输出<code>Date</code>对象的值，结果为一个构造函数。</p><p><code>console.info</code>是<code>console.log</code>方法的别名，用法完全一样。只不过<code>console.info</code>方法会在输出信息的前面，加上一个蓝色图标。</p><p><code>console.debug</code>方法与<code>console.log</code>方法类似，会在控制台输出调试信息。但是，默认情况下，<code>console.debug</code>输出的信息不会显示，只有在打开显示级别在<code>verbose</code>的情况下，才会显示。</p><p><code>console</code>对象的所有方法，都可以被覆盖。因此，可以按照自己的需要，定义<code>console.log</code>方法。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token string">&#39;log&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;info&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;warn&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">method</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">[</span>method<span class="token punctuation">]</span> <span class="token operator">=</span> console<span class="token punctuation">[</span>method<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>
    console<span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toISOString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;出错了！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2014-05-18T09:00.000Z 出错了！</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码表示，使用自定义的<code>console.log</code>方法，可以在显示结果添加当前时间。</p><h3 id="_17-2-2-console-warn-console-error" tabindex="-1"><a class="header-anchor" href="#_17-2-2-console-warn-console-error" aria-hidden="true">#</a> 17.2.2 console.warn()，console.error()</h3><p><code>warn</code>方法和<code>error</code>方法也是在控制台输出信息，它们与<code>log</code>方法的不同之处在于，<code>warn</code>方法输出信息时，在最前面加一个黄色三角，表示警告；<code>error</code>方法输出信息时，在最前面加一个红色的叉，表示出错。同时，还会高亮显示输出文字和错误发生的堆栈。其他方面都一样。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;Error: %s (%i)&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Server is not responding&#39;</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>
<span class="token comment">// Error: Server is not responding (500)</span>
console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;Warning! Too few nodes (%d)&#39;</span><span class="token punctuation">,</span> document<span class="token punctuation">.</span>childNodes<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
<span class="token comment">// Warning! Too few nodes (1)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以这样理解，<code>log</code>方法是写入标准输出（<code>stdout</code>），<code>warn</code>方法和<code>error</code>方法是写入标准错误（<code>stderr</code>）。</p><h3 id="_17-2-3-console-table" tabindex="-1"><a class="header-anchor" href="#_17-2-3-console-table" aria-hidden="true">#</a> 17.2.3 console.table()</h3><p>对于某些复合类型的数据，<code>console.table</code>方法可以将其转为表格显示。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> languages <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;JavaScript&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">fileExtension</span><span class="token operator">:</span> <span class="token string">&quot;.js&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;TypeScript&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">fileExtension</span><span class="token operator">:</span> <span class="token string">&quot;.ts&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;CoffeeScript&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">fileExtension</span><span class="token operator">:</span> <span class="token string">&quot;.coffee&quot;</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span>languages<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码的<code>language</code>变量，转为表格显示如下。</p><table><thead><tr><th>(index)</th><th>name</th><th>fileExtension</th></tr></thead><tbody><tr><td>0</td><td>&quot;JavaScript&quot;</td><td>&quot;.js&quot;</td></tr><tr><td>1</td><td>&quot;TypeScript&quot;</td><td>&quot;.ts&quot;</td></tr><tr><td>2</td><td>&quot;CoffeeScript&quot;</td><td>&quot;.coffee&quot;</td></tr></tbody></table><p>下面是显示表格内容的例子。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> languages <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">csharp</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;C#&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">paradigm</span><span class="token operator">:</span> <span class="token string">&quot;object-oriented&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">fsharp</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;F#&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">paradigm</span><span class="token operator">:</span> <span class="token string">&quot;functional&quot;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span>languages<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码的<code>language</code>，转为表格显示如下。</p><table><thead><tr><th>(index)</th><th>name</th><th>paradigm</th></tr></thead><tbody><tr><td>csharp</td><td>&quot;C#&quot;</td><td>&quot;object-oriented&quot;</td></tr><tr><td>fsharp</td><td>&quot;F#&quot;</td><td>&quot;functional&quot;</td></tr></tbody></table><h3 id="_17-2-4-console-count" tabindex="-1"><a class="header-anchor" href="#_17-2-4-console-count" aria-hidden="true">#</a> 17.2.4 console.count()</h3><p><code>count</code>方法用于计数，输出它被调用了多少次。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token string">&#39;hi &#39;</span> <span class="token operator">+</span> user<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">greet</span><span class="token punctuation">(</span><span class="token string">&#39;bob&#39;</span><span class="token punctuation">)</span>
<span class="token comment">//  : 1</span>
<span class="token comment">// &quot;hi bob&quot;</span>

<span class="token function">greet</span><span class="token punctuation">(</span><span class="token string">&#39;alice&#39;</span><span class="token punctuation">)</span>
<span class="token comment">//  : 2</span>
<span class="token comment">// &quot;hi alice&quot;</span>

<span class="token function">greet</span><span class="token punctuation">(</span><span class="token string">&#39;bob&#39;</span><span class="token punctuation">)</span>
<span class="token comment">//  : 3</span>
<span class="token comment">// &quot;hi bob&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码每次调用<code>greet</code>函数，内部的<code>console.count</code>方法就输出执行次数。</p><p>该方法可以接受一个字符串作为参数，作为标签，对执行次数进行分类。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">greet</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token string">&quot;hi &quot;</span> <span class="token operator">+</span> user<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">greet</span><span class="token punctuation">(</span><span class="token string">&#39;bob&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// bob: 1</span>
<span class="token comment">// &quot;hi bob&quot;</span>

<span class="token function">greet</span><span class="token punctuation">(</span><span class="token string">&#39;alice&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// alice: 1</span>
<span class="token comment">// &quot;hi alice&quot;</span>

<span class="token function">greet</span><span class="token punctuation">(</span><span class="token string">&#39;bob&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// bob: 2</span>
<span class="token comment">// &quot;hi bob&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码根据参数的不同，显示<code>bob</code>执行了两次，<code>alice</code>执行了一次。</p><h3 id="_17-2-5-console-dir-console-dirxml" tabindex="-1"><a class="header-anchor" href="#_17-2-5-console-dir-console-dirxml" aria-hidden="true">#</a> 17.2.5 console.dir()，console.dirxml()</h3><p><code>dir</code>方法用来对一个对象进行检查（inspect），并以易于阅读和打印的格式显示。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">f1</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">f2</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// Object {f1: &quot;foo&quot;, f2: &quot;bar&quot;}</span>

console<span class="token punctuation">.</span><span class="token function">dir</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">f1</span><span class="token operator">:</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">f2</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// Object</span>
<span class="token comment">//   f1: &quot;foo&quot;</span>
<span class="token comment">//   f2: &quot;bar&quot;</span>
<span class="token comment">//   __proto__: Object</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码显示<code>dir</code>方法的输出结果，比<code>log</code>方法更易读，信息也更丰富。</p><p>该方法对于输出 DOM 对象非常有用，因为会显示 DOM 对象的所有属性。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.dir(document.body)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Node 环境之中，还可以指定以代码高亮的形式输出。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.dir(obj, {colors: true})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>dirxml</code>方法主要用于以目录树的形式，显示 DOM 节点。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.dirxml(document.body)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果参数不是 DOM 节点，而是普通的 JavaScript 对象，<code>console.dirxml</code>等同于<code>console.dir</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>console.dirxml([1, 2, 3])
// 等同于
console.dir([1, 2, 3])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_17-2-6-console-assert" tabindex="-1"><a class="header-anchor" href="#_17-2-6-console-assert" aria-hidden="true">#</a> 17.2.6 console.assert()</h3><p><code>console.assert</code>方法主要用于程序运行过程中，进行条件判断，如果不满足条件，就显示一个错误，但不会中断程序执行。这样就相当于提示用户，内部状态不正确。</p><p>它接受两个参数，第一个参数是表达式，第二个参数是字符串。只有当第一个参数为<code>false</code>，才会提示有错误，在控制台输出第二个参数，否则不会有任何结果。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">assert</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&#39;判断条件不成立&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// Assertion failed: 判断条件不成立</span>

<span class="token comment">// 相当于</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;判断条件不成立&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个例子，判断子节点的个数是否大于等于500。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">assert</span><span class="token punctuation">(</span>list<span class="token punctuation">.</span>childNodes<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token string">&#39;节点个数大于等于500&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码中，如果符合条件的节点小于500个，不会有任何输出；只有大于等于500时，才会在控制台提示错误，并且显示指定文本。</p><h3 id="_17-2-7-console-time-console-timeend" tabindex="-1"><a class="header-anchor" href="#_17-2-7-console-time-console-timeend" aria-hidden="true">#</a> 17.2.7 console.time()，console.timeEnd()</h3><p>这两个方法用于计时，可以算出一个操作所花费的准确时间。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token string">&#39;Array initialize&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> array<span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">1000000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> array<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">timeEnd</span><span class="token punctuation">(</span><span class="token string">&#39;Array initialize&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Array initialize: 1914.481ms</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>time</code>方法表示计时开始，<code>timeEnd</code>方法表示计时结束。它们的参数是计时器的名称。调用<code>timeEnd</code>方法之后，控制台会显示“计时器名称: 所耗费的时间”。</p><h3 id="_17-2-8-console-trace-console-clear" tabindex="-1"><a class="header-anchor" href="#_17-2-8-console-trace-console-clear" aria-hidden="true">#</a> 17.2.8 console.trace()，console.clear()</h3><p><code>console.trace</code>方法显示当前执行的代码在堆栈中的调用路径。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">trace</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// console.trace()</span>
<span class="token comment">//   (anonymous function)</span>
<span class="token comment">//   InjectedScript._evaluateOn</span>
<span class="token comment">//   InjectedScript._evaluateAndWrap</span>
<span class="token comment">//   InjectedScript.evaluate</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>console.clear</code>方法用于清除当前控制台的所有输出，将光标回置到第一行。如果用户选中了控制台的“Preserve log”选项，<code>console.clear</code>方法将不起作用。</p><h2 id="_17-3-debugger-语句" tabindex="-1"><a class="header-anchor" href="#_17-3-debugger-语句" aria-hidden="true">#</a> 17.3 debugger 语句</h2><p><code>debugger</code>语句主要用于除错，作用是设置断点。如果有正在运行的除错工具，程序运行到<code>debugger</code>语句时会自动停下。如果没有除错工具，<code>debugger</code>语句不会产生任何结果，JavaScript 引擎自动跳过这一句。</p><p>Chrome 浏览器中，当代码运行到<code>debugger</code>语句时，就会暂停运行，自动打开脚本源码界面。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">debugger</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码打印出0，1，2以后，就会暂停，自动打开源码界面，等待进一步处理。</p>`,76);function m(b,g){const e=l("ExternalLinkIcon");return t(),p("div",null,[u,s("h3",r,[d,n(" 17.2.1 console.log()，"),s("a",k,[n("console.info"),c(e)]),n("()，console.debug()")]),v])}const y=o(i,[["render",m],["__file","14 【语法之console 对象与控制台】.html.vue"]]);export{y as default};
