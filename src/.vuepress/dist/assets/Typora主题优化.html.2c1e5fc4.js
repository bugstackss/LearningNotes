import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,a as p}from"./app.9b10ba0a.js";const t={},e=p(`<p>这里推荐使用vue主题：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token string">&#39;vue/fonts.css&#39;</span><span class="token punctuation">;</span></span>

<span class="token selector">:root</span> <span class="token punctuation">{</span>
    <span class="token property">--side-bar-bg-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
    <span class="token property">--control-text-color</span><span class="token punctuation">:</span> #777<span class="token punctuation">;</span>
    <span class="token property">--font-sans-serif</span><span class="token punctuation">:</span> <span class="token string">&#39;Ubuntu&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Source Sans Pro&#39;</span><span class="token punctuation">,</span> sans-serif <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token property">--font-monospace</span><span class="token punctuation">:</span> <span class="token string">&#39;Fira Code&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Roboto Mono&#39;</span><span class="token punctuation">,</span> monospace <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">html</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--font-sans-serif<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #34495e<span class="token punctuation">;</span>
    <span class="token property">-webkit-font-smoothing</span><span class="token punctuation">:</span> antialiased<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.6rem<span class="token punctuation">;</span>
    <span class="token property">letter-spacing</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">overflow-x</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#write</span> <span class="token punctuation">{</span>
    <span class="token property">max-width</span><span class="token punctuation">:</span> 860px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 20px 30px 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#write p</span> <span class="token punctuation">{</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.6rem<span class="token punctuation">;</span>
    <span class="token property">word-spacing</span><span class="token punctuation">:</span> .05rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#write ol li</span> <span class="token punctuation">{</span>
    <span class="token property">padding-left</span><span class="token punctuation">:</span> 0.5rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#write &gt; ul:first-child,
#write &gt; ol:first-child</span> <span class="token punctuation">{</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body &gt; *:first-child</span> <span class="token punctuation">{</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 0 <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body &gt; *:last-child</span> <span class="token punctuation">{</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 0 <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">a</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #42b983<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> 600<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0 2px<span class="token punctuation">;</span>
    <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h1,
h2,
h3,
h4,
h5,
h6</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.4<span class="token punctuation">;</span>
    <span class="token property">cursor</span><span class="token punctuation">:</span> text<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h1:hover a.anchor,
h2:hover a.anchor,
h3:hover a.anchor,
h4:hover a.anchor,
h5:hover a.anchor,
h6:hover a.anchor</span> <span class="token punctuation">{</span>
    <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h1 tt,
h1 code</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> inherit <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h2 tt,
h2 code</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> inherit <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h3 tt,
h3 code</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> inherit <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h4 tt,
h4 code</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> inherit <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h5 tt,
h5 code</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> inherit <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h6 tt,
h6 code</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> inherit <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h2 a,
h3 a</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #34495e<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h1</span> <span class="token punctuation">{</span>
    <span class="token property">padding-bottom</span><span class="token punctuation">:</span> .4rem<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 2.2rem<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.3<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h2</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 1.75rem<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.225<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 35px 0 15px<span class="token punctuation">;</span>
    <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 0.5em<span class="token punctuation">;</span>
    <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid #ddd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h3</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 1.4rem<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.43<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 20px 0 7px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h4</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 1.2rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h5</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h6</span> <span class="token punctuation">{</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #777<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">p,
blockquote,
ul,
ol,
dl,
table</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0.8em 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">li &gt; ol,
li &gt; ul</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">hr</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 16px 0<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #e7e7e7<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 0 none<span class="token punctuation">;</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> content-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body &gt; h2:first-child</span> <span class="token punctuation">{</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body &gt; h1:first-child</span> <span class="token punctuation">{</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body &gt; h1:first-child + h2</span> <span class="token punctuation">{</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body &gt; h3:first-child,
body &gt; h4:first-child,
body &gt; h5:first-child,
body &gt; h6:first-child</span> <span class="token punctuation">{</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">a:first-child h1,
a:first-child h2,
a:first-child h3,
a:first-child h4,
a:first-child h5,
a:first-child h6</span> <span class="token punctuation">{</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">h1 p,
h2 p,
h3 p,
h4 p,
h5 p,
h6 p</span> <span class="token punctuation">{</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">li p.first</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">ul,
ol</span> <span class="token punctuation">{</span>
    <span class="token property">padding-left</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">ul:first-child,
ol:first-child</span> <span class="token punctuation">{</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">ul:last-child,
ol:last-child</span> <span class="token punctuation">{</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">blockquote</span> <span class="token punctuation">{</span>
    <span class="token property">border-left</span><span class="token punctuation">:</span> 4px solid #42b983<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 10px 15px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #777<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>66<span class="token punctuation">,</span> 185<span class="token punctuation">,</span> 131<span class="token punctuation">,</span> .1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">table</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">word-break</span><span class="token punctuation">:</span> initial<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">table tr</span> <span class="token punctuation">{</span>
    <span class="token property">border-top</span><span class="token punctuation">:</span> 1px solid #dfe2e5<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">table tr:nth-child(2n),
thead</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #fafafa<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">table tr th</span> <span class="token punctuation">{</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #dfe2e5<span class="token punctuation">;</span>
    <span class="token property">border-bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 6px 13px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">table tr td</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #dfe2e5<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 6px 13px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">table tr th:first-child,
table tr td:first-child</span> <span class="token punctuation">{</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">table tr th:last-child,
table tr td:last-child</span> <span class="token punctuation">{</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#write strong</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0 1px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#write em</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0 5px 0 2px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#write table thead th</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #f2f2f2<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#write .CodeMirror-gutters</span> <span class="token punctuation">{</span>
    <span class="token property">border-right</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#write .md-fences</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #F4F4F4<span class="token punctuation">;</span>
    <span class="token property">-webkit-font-smoothing</span><span class="token punctuation">:</span> initial<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0.8rem 0 <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0.3rem 0 <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.43rem<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #F8F8F8 <span class="token important">!important</span><span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--font-monospace<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 0.85rem<span class="token punctuation">;</span>
    <span class="token property">word-wrap</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#write .CodeMirror-wrap .CodeMirror-code pre</span> <span class="token punctuation">{</span>
    <span class="token property">padding-left</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#write code, tt</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 2px 4px<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--font-monospace<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 0.92rem<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #e96900<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">tt</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 2px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#write .md-footnote</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #e96900<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* heighlight. */</span>
<span class="token selector">#write mark</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #EBFFEB<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 2px<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 2px 4px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 2px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #222<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#write del</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 1px 2px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.cm-s-inner .cm-link,
.cm-s-inner.cm-link</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #22a2c9<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.cm-s-inner .cm-string</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #22a2c9<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.md-task-list-item &gt; input</span> <span class="token punctuation">{</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> -1.3em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> print</span> <span class="token punctuation">{</span>
    <span class="token selector">html</span> <span class="token punctuation">{</span>
        <span class="token property">font-size</span><span class="token punctuation">:</span> 13px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">table,
    pre</span> <span class="token punctuation">{</span>
        <span class="token property">page-break-inside</span><span class="token punctuation">:</span> avoid<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token selector">pre</span> <span class="token punctuation">{</span>
        <span class="token property">word-wrap</span><span class="token punctuation">:</span> break-word<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token selector">.md-fences</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.md-diagram-panel</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> static <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#write pre.md-meta-block</span> <span class="token punctuation">{</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 85%<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.45<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #f7f7f7<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #777777<span class="token punctuation">;</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 0 <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mathjax-block &gt; .code-tooltip</span> <span class="token punctuation">{</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> .375rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#write &gt; h3.md-focus:before</span> <span class="token punctuation">{</span>
    <span class="token property">left</span><span class="token punctuation">:</span> -1.5625rem<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> .375rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#write &gt; h4.md-focus:before</span> <span class="token punctuation">{</span>
    <span class="token property">left</span><span class="token punctuation">:</span> -1.5625rem<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> .285714286rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#write &gt; h5.md-focus:before</span> <span class="token punctuation">{</span>
    <span class="token property">left</span><span class="token punctuation">:</span> -1.5625rem<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> .285714286rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#write &gt; h6.md-focus:before</span> <span class="token punctuation">{</span>
    <span class="token property">left</span><span class="token punctuation">:</span> -1.5625rem<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> .285714286rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.md-image &gt; .md-meta</span> <span class="token punctuation">{</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--font-monospace<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 2px 0 0 4px<span class="token punctuation">;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 0.9em<span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.md-tag</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.md-toc</span> <span class="token punctuation">{</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">padding-bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.sidebar-tabs</span> <span class="token punctuation">{</span>
    <span class="token property">border-bottom</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#typora-quick-open</span> <span class="token punctuation">{</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ddd<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#typora-quick-open-item</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #FAFAFA<span class="token punctuation">;</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> #FEFEFE #e5e5e5 #e5e5e5 #eee<span class="token punctuation">;</span>
    <span class="token property">border-style</span><span class="token punctuation">:</span> solid<span class="token punctuation">;</span>
    <span class="token property">border-width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">#md-notification:before</span> <span class="token punctuation">{</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/** focus mode */</span>

<span class="token selector">.on-focus-mode blockquote</span> <span class="token punctuation">{</span>
    <span class="token property">border-left-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>85<span class="token punctuation">,</span> 85<span class="token punctuation">,</span> 85<span class="token punctuation">,</span> 0.12<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">header,
.context-menu,
.megamenu-content,
footer</span> <span class="token punctuation">{</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--font-sans-serif<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.file-node-content:hover .file-node-icon,
.file-node-content:hover .file-node-open-state</span> <span class="token punctuation">{</span>
    <span class="token property">visibility</span><span class="token punctuation">:</span> visible<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.mac-seamless-mode #typora-sidebar</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--side-bar-bg-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.md-lang</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #b4654d<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.html-for-mac .context-menu</span> <span class="token punctuation">{</span>
    <span class="token property">--item-hover-bg-color</span><span class="token punctuation">:</span> #E6F0FE<span class="token punctuation">;</span>
<span class="token punctuation">}</span>




<span class="token selector">.md-fences</span><span class="token punctuation">{</span><span class="token property">margin-left</span><span class="token punctuation">:</span>0<span class="token important">!important</span><span class="token punctuation">}</span>
<span class="token selector">.outline-item-active</span><span class="token punctuation">{</span><span class="token property">background</span><span class="token punctuation">:</span>#6fd18d<span class="token punctuation">;</span><span class="token property">color</span><span class="token punctuation">:</span>#fff<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">.outline-content li, .outline-content ul</span><span class="token punctuation">{</span><span class="token property">margin</span><span class="token punctuation">:</span>5px 0<span class="token important">!important</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">.ul-list</span><span class="token punctuation">{</span><span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token important">!important</span><span class="token punctuation">}</span>
<span class="token selector">.blockquote</span><span class="token punctuation">{</span><span class="token property">margin</span><span class="token punctuation">:</span>10px 0<span class="token important">!important</span><span class="token punctuation">;</span><span class="token property">padding</span><span class="token punctuation">:</span>10px<span class="token important">!important</span><span class="token punctuation">;</span><span class="token property">border-color</span><span class="token punctuation">:</span>#6fd047!importnat<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">img</span><span class="token punctuation">{</span><span class="token property">padding</span><span class="token punctuation">:</span>15px<span class="token important">!important</span><span class="token punctuation">;</span><span class="token property">background</span><span class="token punctuation">:</span>#f8f8f8<span class="token important">!important</span><span class="token punctuation">;</span><span class="token punctuation">}</span>

<span class="token selector">#write</span><span class="token punctuation">{</span><span class="token property">max-width</span><span class="token punctuation">:</span>1120px<span class="token important">!important</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">#write h1, #write h2, #write h3, #write h4, #write h5, #write h6</span><span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>##5fb93a<span class="token important">!important</span><span class="token punctuation">;</span><span class="token property">font-weight</span><span class="token punctuation">:</span>700<span class="token important">!important</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">#write h1:before</span><span class="token punctuation">{</span><span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&quot;🏆&quot;</span><span class="token punctuation">;</span><span class="token property">padding-right</span><span class="token punctuation">:</span>4px<span class="token punctuation">;</span><span class="token property">display</span><span class="token punctuation">:</span>inline-block<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">#write h2:before</span><span class="token punctuation">{</span><span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&quot;📚&quot;</span><span class="token punctuation">;</span><span class="token property">padding-right</span><span class="token punctuation">:</span>4px<span class="token punctuation">;</span><span class="token property">display</span><span class="token punctuation">:</span>inline-block<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">#write h3:before</span><span class="token punctuation">{</span><span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&quot;🍎&quot;</span><span class="token punctuation">;</span><span class="token property">padding-right</span><span class="token punctuation">:</span>4px<span class="token punctuation">;</span><span class="token property">display</span><span class="token punctuation">:</span>inline-block<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">#write h4:before</span><span class="token punctuation">{</span><span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&quot;🍊&quot;</span><span class="token punctuation">;</span><span class="token property">padding-right</span><span class="token punctuation">:</span>4px<span class="token punctuation">;</span><span class="token property">display</span><span class="token punctuation">:</span>inline-block<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">#write h5:before</span><span class="token punctuation">{</span><span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&quot;🍭&quot;</span><span class="token punctuation">;</span><span class="token property">padding-right</span><span class="token punctuation">:</span>4px<span class="token punctuation">;</span><span class="token property">display</span><span class="token punctuation">:</span>inline-block<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">#write h6:before</span><span class="token punctuation">{</span><span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&quot;🍉&quot;</span><span class="token punctuation">;</span><span class="token property">padding-right</span><span class="token punctuation">:</span>4px<span class="token punctuation">;</span><span class="token property">display</span><span class="token punctuation">:</span>inline-block<span class="token punctuation">;</span><span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优化设置</p><p>首先打开你要优化的主题设置，然后选择需要的css文件，将以下内容放入最下方即可！</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.md-fences</span><span class="token punctuation">{</span><span class="token property">margin-left</span><span class="token punctuation">:</span>0<span class="token important">!important</span><span class="token punctuation">}</span>
<span class="token selector">.outline-item-active</span><span class="token punctuation">{</span><span class="token property">background</span><span class="token punctuation">:</span>#6fd18d<span class="token punctuation">;</span><span class="token property">color</span><span class="token punctuation">:</span>#fff<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">.outline-content li, .outline-content ul</span><span class="token punctuation">{</span><span class="token property">margin</span><span class="token punctuation">:</span>5px 0<span class="token important">!important</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token selector">.ul-list</span><span class="token punctuation">{</span><span class="token property">margin</span><span class="token punctuation">:</span>0<span class="token important">!important</span><span class="token punctuation">}</span>
<span class="token selector">.blockquote</span><span class="token punctuation">{</span><span class="token property">margin</span><span class="token punctuation">:</span>10px 0<span class="token important">!important</span><span class="token punctuation">;</span><span class="token property">padding</span><span class="token punctuation">:</span>10px<span class="token important">!important</span><span class="token punctuation">;</span><span class="token property">border-color</span><span class="token punctuation">:</span>#6fd047!importnat<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">img</span><span class="token punctuation">{</span><span class="token property">padding</span><span class="token punctuation">:</span>15px<span class="token important">!important</span><span class="token punctuation">;</span><span class="token property">background</span><span class="token punctuation">:</span>#f8f8f8<span class="token important">!important</span><span class="token punctuation">;</span><span class="token punctuation">}</span>

<span class="token selector">#write</span><span class="token punctuation">{</span><span class="token property">max-width</span><span class="token punctuation">:</span>1120px<span class="token important">!important</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">#write h1, #write h2, #write h3, #write h4, #write h5, #write h6</span><span class="token punctuation">{</span><span class="token property">color</span><span class="token punctuation">:</span>##5fb93a<span class="token important">!important</span><span class="token punctuation">;</span><span class="token property">font-weight</span><span class="token punctuation">:</span>700<span class="token important">!important</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">#write h1:before</span><span class="token punctuation">{</span><span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&quot;🍁&quot;</span><span class="token punctuation">;</span><span class="token property">padding-right</span><span class="token punctuation">:</span>4px<span class="token punctuation">;</span><span class="token property">display</span><span class="token punctuation">:</span>inline-block<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">#write h2:before</span><span class="token punctuation">{</span><span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&quot;🌳&quot;</span><span class="token punctuation">;</span><span class="token property">padding-right</span><span class="token punctuation">:</span>4px<span class="token punctuation">;</span><span class="token property">display</span><span class="token punctuation">:</span>inline-block<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">#write h3:before</span><span class="token punctuation">{</span><span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&quot;🌷&quot;</span><span class="token punctuation">;</span><span class="token property">padding-right</span><span class="token punctuation">:</span>4px<span class="token punctuation">;</span><span class="token property">display</span><span class="token punctuation">:</span>inline-block<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">#write h4:before</span><span class="token punctuation">{</span><span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&quot;🌼&quot;</span><span class="token punctuation">;</span><span class="token property">padding-right</span><span class="token punctuation">:</span>4px<span class="token punctuation">;</span><span class="token property">display</span><span class="token punctuation">:</span>inline-block<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">#write h5:before</span><span class="token punctuation">{</span><span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&quot;🌻&quot;</span><span class="token punctuation">;</span><span class="token property">padding-right</span><span class="token punctuation">:</span>4px<span class="token punctuation">;</span><span class="token property">display</span><span class="token punctuation">:</span>inline-block<span class="token punctuation">;</span><span class="token punctuation">}</span>
<span class="token selector">#write h6:before</span><span class="token punctuation">{</span><span class="token property">content</span><span class="token punctuation">:</span><span class="token string">&quot;🥦&quot;</span><span class="token punctuation">;</span><span class="token property">padding-right</span><span class="token punctuation">:</span>4px<span class="token punctuation">;</span><span class="token property">display</span><span class="token punctuation">:</span>inline-block<span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),i=[e];function o(c,l){return s(),a("div",null,i)}const d=n(t,[["render",o],["__file","Typora主题优化.html.vue"]]);export{d as default};
