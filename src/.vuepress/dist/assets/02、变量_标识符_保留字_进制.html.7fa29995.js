import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as p,d as n,e as s,b as e,a as t,r as o}from"./app.9b10ba0a.js";const c="/assets/b98175d8a9798669485b7532186d9f82.3a13f781.png",u="/assets/e7b2048c652a090aaa9a77a43044863a.1e4c28d4.png",r="/assets/58fa3b6eb659d69e11d281fb6a2364ea.68d3e85b.png",d="/assets/02a30584b81301520637d3b982d0bede.d1951a1a.png",k="/assets/5f55de57c32a87d59ef581f39d0a92e6.87938c12.png",v="/assets/7775c47e49965529b779183a44e41fb9.3d8e6874.png",m="/assets/c2d9860f3b822dbeabac4b4ff6e0c7c5.2cea30e5.png",b="/assets/a200a439100aaa2c2721deb5c8664693.32066d1e.png",h="/assets/050e3f2cd04de75da6e70a074670260d.019c3655.png",g="/assets/b3386e2cd8b7990a222895f6b0472d33.98c09cdb.png",y={},f=n("h2",{id:"_01、关键字与保留字",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_01、关键字与保留字","aria-hidden":"true"},"#"),s(" 01、关键字与保留字")],-1),_=n("blockquote",null,[n("p",null,"1、关键字(keyword)的定义和特点")],-1),w=n("li",null,"定义：被 Java 语言赋予了特殊含义，用做专门用途的字符串（单词）",-1),S=n("li",null,"特点：关键字中所有字母都为小写",-1),q={href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/_keywords.html",target:"_blank",rel:"noopener noreferrer"},x=t('<p><img src="'+c+'" alt="img"></p><p><img src="'+u+`" alt="img"></p><blockquote><p>2、保留字(reserved word)</p></blockquote><p>Java 保留字：现有 Java 版本尚未使用，但以后版本可能会作为关键字使用。自己命名标识符时要避免使用这些保留字<code>goto、const</code>。</p><h2 id="_02、标识符" tabindex="-1"><a class="header-anchor" href="#_02、标识符" aria-hidden="true">#</a> 02、标识符</h2><h3 id="_2-1、什么是标识符-identifier" tabindex="-1"><a class="header-anchor" href="#_2-1、什么是标识符-identifier" aria-hidden="true">#</a> 2.1、什么是标识符（Identifier）</h3><ul><li>Java 对各种变量、方法和类等要素命名时使用的字符序列称为标识符</li><li>技巧：凡是自己可以起名字的地方都叫标识符。</li></ul><h3 id="_2-2、定义合法标识符规则【重要】" tabindex="-1"><a class="header-anchor" href="#_2-2、定义合法标识符规则【重要】" aria-hidden="true">#</a> 2.2、定义合法标识符规则【重要】</h3><ol><li><strong>由 26 个英文字母大小写，0-9，_或$ 组成</strong></li><li><strong>数字不可以开头。</strong></li><li><strong>标识符不能包含空格。</strong></li><li><strong>不可以使用关键字和保留字，但能包含关键字和保留字。</strong></li><li><strong>Java 中严格区分大小写，长度无限制。</strong></li></ol><h3 id="_2-3、java-中的名称命名规范" tabindex="-1"><a class="header-anchor" href="#_2-3、java-中的名称命名规范" aria-hidden="true">#</a> 2.3、Java 中的名称命名规范</h3><blockquote><p>1、Java 中的名称命名规范：</p></blockquote><ul><li><strong>包名</strong>：多单词组成时<strong>所有字母都小写</strong>：xxxyyyzzz</li><li><strong>类名</strong>、接口名：多单词组成时，**所有单词的首字母大写：**XxxYyyZzz</li><li><strong>变量名</strong>、方法名：多单词组成时，<strong>第一个单词首字母小写，第二个单词开始每个单词首字母大写：xxxYyyZzz</strong></li><li><strong>常量名</strong>：<strong>所有字母都大写。多单词时每个单词用下划线连接：XXX_YYY_ZZZ</strong></li></ul><blockquote><p>2、注意点</p></blockquote><ul><li>注意 1：在起名字时，为了提高阅读性，要尽量有意义，“见名知意”。</li><li>注意 2：java 采用 unicode 字符集，因此标识符也可以使用汉字声明，但是不建议使用。</li><li>更多细节详见《代码整洁之道》</li></ul><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>1.介绍
软件中随处可见命名。我们给变量、函数、参数、类和包命名。我们给源代码及源代码所在目录命名。
这么多命名要做，不妨做好它。下文列出了取个好名字的几条简单规则。

2.名副其实,见名知意
变量名太随意，haha、list1、ok、theList 这些都没啥意义

3.避免误导
包含List、import、java等类名、关键字或特殊字；
字母o与数字0，字母l与数字1等
提防使用不同之处较小的名称。比如：XYZControllerForEfficientHandlingOfStrings与XYZControllerForEfficientStorageOfStrings

4.做有意义的区分
反面教材，变量名：a1、a2、a3
避免冗余，不要出现Variable、表字段中避免出现table、字符串避免出现nameString，直接name就行，知道是字符串类型
再比如：定义了两个类：Customer类和CustomerObject类，如何区分？
定义了三个方法：getActiveAccount()、getActiveAccounts()、getActiveAccountInfo()，如何区分？

5.使用读得出来的名称
不要使用自己拼凑出来的单词，比如：xsxm(学生姓名)；genymdhms(生成日期，年、月、日、时、分、秒)
所谓的驼峰命名法，尽量使用完整的单词

6.使用可搜索的名称
一些常量，最好不直接使用数字，而指定一个变量名，这个变量名可以便于搜索到.
比如：找MAX_CLASSES_PER_STUDENT很容易，但想找数字7就麻烦了。

7.避免使用编码
7.1 匈牙利语标记法:即变量名表明该变量数据类型的小写字母开始。例如，szCmdLine的前缀sz表示“以零结束的字符串”。
7.2 成员前缀:避免使用前缀，但是Android中一个比较好的喜欢用m表示私有等，个人感觉比较好
7.3 接口和实现:作者不喜欢把接口使用I来开头，实现也希望只是在后面添加Imp

8.避免思维映射
比如传统上惯用单字母名称做循环计数器。所以就不要给一些非计数器的变量命名为：i、j、k等

9.类名
类名与对象名应该是名词与名词短语。如Customer、WikiPage、Account和AddressParser。避免使用Data或Info这样的类名。
不能使动词。比如：Manage、Process

10.方法名
方法名应当是动词或者动词短语。如postPayment、deletePage或save

11.别扮可爱
有的变量名叫haha、banana
别用eatMyShorts()表示abort()

12.每个概念对应一个词
项目中同时出现controllers与managers，为什么不统一使用其中一种？
对于那些会用到你代码的程序员，一以贯之的命名法简直就是天降福音。

13.别用双关语
有时可能使用add并不合适，比例insert、append。add表示完整的新添加的含义。     

14. 使用解决方案领域名称
看代码的都是程序员，所以尽量用那些计算机科学术语、算法名、模式名、数学术语，
依据问题所涉领域来命名不算是聪明的做法。

2.15 使用源自所涉问题领域的名称
如果不能用程序员熟悉的术语来给手头的工作命名，就采用从所涉问题领域而来的名称吧。
至少，负责维护代码的程序员就能去请教领域专家了。

2.16 添加有意义的语境
可以把相关的变量放到一个类中，使用这个类来表明语境。

2.17 不要添加没用的语境
名字中带有项目的缩写，这样完全没有必要。比如有一个名为“加油站豪华版”（Gas Station Deluxe）的项目，
在其中给每个类添加GSD前缀就不是什么好策略。

2.18 最后的话
取好名字最难的地方在于需要良好的描述技巧和共有文化背景。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_03、变量" tabindex="-1"><a class="header-anchor" href="#_03、变量" aria-hidden="true">#</a> 03、变量</h2><h3 id="_3-1、变量的声明与使用" tabindex="-1"><a class="header-anchor" href="#_3-1、变量的声明与使用" aria-hidden="true">#</a> 3.1、变量的声明与使用</h3><blockquote><p>1、变量的概念：</p></blockquote><ul><li>内存中的一个存储区域；</li><li>该区域的数据可以在同一类型范围内不断变化；</li><li>变量是程序中最基本的存储单元。包含<strong>变量类型、变量名和存储的值。</strong></li></ul><blockquote><p>2、变量的作用：</p></blockquote><ul><li>用于在内存中保存数据。</li></ul><blockquote><p>3、使用变量注意：</p></blockquote><ul><li>Java 中每个变量必须先声明，后使用；</li><li>使用变量名来访问这块区域的数据；</li><li>变量的作用域：其定义所在的一对{ }内；</li><li>变量只有在其作用域内才有效；</li><li>同一个作用域内，不能定义重名的变量；</li></ul><blockquote><p>4、声明变量</p></blockquote><ul><li>语法：&lt;数据类型&gt; &lt;变量名称&gt;</li><li>例如：int var;</li></ul><blockquote><p>5、变量的赋值</p></blockquote><ul><li>语法：&lt;变量名称&gt; = &lt;值&gt;</li><li>例如：var = 10;</li></ul><blockquote><p>6、声明和赋值变量</p></blockquote><ul><li>语法：&lt;数据类型&gt;&lt;变量名&gt;= &lt;初始化值&gt;</li><li>例如：int var = 10</li></ul><blockquote><p>7、补充：变量的分类-按声明的位置的不同</p></blockquote><ul><li>在方法体外，类体内声明的变量称为<strong>成员变量</strong>。</li><li>在方法体内部声明的变量称为<strong>局部变量</strong>。 <img src="`+r+'" alt="img"></li></ul><blockquote><p>8、注意：二者在初始化值方面的异同:</p></blockquote><ul><li>同：都有生命周期</li><li>异：局部变量除形参外，需显式初始化。</li></ul><h3 id="_3-2、基本数据类型" tabindex="-1"><a class="header-anchor" href="#_3-2、基本数据类型" aria-hidden="true">#</a> 3.2、基本数据类型</h3><blockquote><p>2、变量的分类-按数据类型</p></blockquote><p>对于每一种数据都定义了明确的具体数据类型（强类型语言），在内存中分配了不同大小的内存空间。</p><p><img src="'+d+`" alt="img"></p><h4 id="_3-2-1、整数类型-byte、short、int、long" tabindex="-1"><a class="header-anchor" href="#_3-2-1、整数类型-byte、short、int、long" aria-hidden="true">#</a> 3.2.1、整数类型：byte、short、int、long</h4><ul><li>Java 各整数类型有固定的表数范围和字段长度，不受具体 OS 的影响，以保证 java 程序的可移植性。</li><li><strong>java 的整型常量默认为 int 型，声明 long 型常量须后加‘l’或‘L’</strong></li><li>java 程序中变量通常声明为 int 型，除非不足以表示较大的数，才使用 long</li></ul><table><thead><tr><th>类型</th><th>占用存储空间</th><th>表数范围</th></tr></thead><tbody><tr><td>byte</td><td>1字节=8bit位</td><td>-128 ~ 127</td></tr><tr><td>short</td><td>2字节</td><td>-2^15~ 2^15-1</td></tr><tr><td>int</td><td>4字节</td><td>-2^31~ 2^31-1 (约21亿)</td></tr><tr><td>long</td><td>8字节</td><td>-2^63~ 2^63-1</td></tr></tbody></table><ul><li>1MB = 1024KB 1KB= 1024B B= byte ? bit?</li><li><strong>bit: 计算机中的最小存储单位。byte:计算机中基本存储单元。</strong></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
Java定义的数据类型

一、变量按照数据类型来分：
 基本数据类型：
  整型：byte \\ short \\ int \\ long
  浮点型：float \\ double
  字符型：char
  布尔型：boolean

 引用数据类型：
  类：class
  接口：interface
  数组：array

二、变量在类中声明的位置：
  成员变量 vs 局部变量
*/</span>
<span class="token keyword">class</span> <span class="token class-name">VariableTest1</span><span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//1. 整型：byte(1字节=8bit) short(2字节） \\ int (4字节）\\ long(8字节)</span>
  <span class="token comment">//① byte范围：-128 ~ 127</span>

  <span class="token keyword">byte</span> b1 <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
  <span class="token keyword">byte</span> b2 <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">128</span><span class="token punctuation">;</span>
 <span class="token comment">// b2 = 128; //编译不通过</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b2<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// ② 声明long型变量，必须以“1”或“L”结尾</span>
  <span class="token keyword">short</span> s1 <span class="token operator">=</span> <span class="token number">128</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> i1 <span class="token operator">=</span> <span class="token number">12345</span><span class="token punctuation">;</span>
  <span class="token keyword">long</span> l1 <span class="token operator">=</span> <span class="token number">345678586</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>l1<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-2、浮点类型-float、double" tabindex="-1"><a class="header-anchor" href="#_3-2-2、浮点类型-float、double" aria-hidden="true">#</a> 3.2.2、浮点类型：float、double</h4><ul><li>与整数类型类似，Java 浮点类型也有固定的表数范围和字段长度，不受具体操作系统的影响。</li><li>浮点型常量有两种表示形式： <ul><li>十进制数形式：如：5.12 512.0f .512 (必须有小数点）</li><li>科学计数法形式:如：5.12e2 512E2 100E-2</li></ul></li><li>float:单精度，尾数可以精确到7位有效数字。很多情况下，精度很难满足需求。</li><li>double:双精度，精度是float的两倍。通常采用此类型。</li><li><strong>Java 的浮点型常量默认为double型，声明float型常量，须后加‘f’或‘F’。</strong></li></ul><table><thead><tr><th>类型</th><th>占用存储空间</th><th>表数范围</th></tr></thead><tbody><tr><td>单精度float</td><td>4字节</td><td>-3.403E38 ~ 3.403E38</td></tr><tr><td>双精度double</td><td>8字节</td><td>-1.798E308 ~ 1.798E308</td></tr></tbody></table><h4 id="_3-2-3、字符类型-char" tabindex="-1"><a class="header-anchor" href="#_3-2-3、字符类型-char" aria-hidden="true">#</a> 3.2.3、字符类型：char</h4><ul><li>char 型数据用来表示通常意义上“字符”(2字节)</li><li>Java中的所有字符都使用Unicode编码，故一个字符可以存储一个字母，一个汉字，或其他书面语的一个字符。</li><li>字符型变量的三种表现形式： <ul><li>字符常量是用单引号(‘ ’)括起来的单个字符。例如：char c1 = ‘a’; char c2 = ‘中’; char c3 = ‘9’;</li><li>Java中还允许使用转义字符‘\\’来将其后的字符转变为特殊字符型常量。例如：char c3 = ‘\\n’; //’\\n’表示换行符</li><li>直接使用Unicode值来表示字符型常量：‘\\uXXXX’。其中，XXXX代表一个十六进制整数。如：\\u000a 表示\\n。</li></ul></li><li>char类型是可以进行运算的。因为它都对应有Unicode码。</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
Java定义的数据类型

一、变量按照数据类型来分：

 基本数据类型：
  整型：byte \\ short \\ int \\ long
  浮点型：float \\ double
  字符型：char
  布尔型：boolean

 引用数据类型：
  类：class
  接口：interface
  数组：array

二、变量在类中声明的位置：
  成员变量 vs 局部变量
*/</span>
<span class="token keyword">class</span> <span class="token class-name">VariableTest1</span><span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//2. 浮点型：float(4字节) \\ double(8字节)</span>
  <span class="token comment">//① 浮点型，表示带小数点的数值</span>
  <span class="token comment">//② float表示数值的范围比long还大</span>

  <span class="token keyword">double</span> d1 <span class="token operator">=</span> <span class="token number">12.3</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>d1 <span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">//定义float类型变量时，变量要以&quot;f&quot; 或&quot;F&quot;结尾</span>
  <span class="token keyword">float</span> f1 <span class="token operator">=</span> <span class="token number">12.3F</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>f1<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//② 通常，定义浮点型变量时，使用double变量</span>

  <span class="token comment">//3. 字符型：char(1字符=2字节)</span>
  <span class="token comment">//① 定义char型变量，通常使用一对&#39;&#39; </span>
  <span class="token keyword">char</span> c1 <span class="token operator">=</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">;</span>
  <span class="token comment">//编译不通过</span>
  <span class="token comment">//c1 = &#39;AB&#39;;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c1<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">char</span> c2 <span class="token operator">=</span> <span class="token char">&#39;1&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">char</span> c3 <span class="token operator">=</span> <span class="token char">&#39;中&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">char</span> c4 <span class="token operator">=</span> <span class="token char">&#39;&amp;&#39;</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c3<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c4<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">//② 表示方式：1.声明一个字符；2.转义字符；3.直接使用Unicode值来表示字符型常量</span>
  <span class="token keyword">char</span> c5 <span class="token operator">=</span> <span class="token char">&#39;\\n&#39;</span><span class="token punctuation">;</span> <span class="token comment">//换行符</span>
  c5 <span class="token operator">=</span> <span class="token char">&#39;\\t&#39;</span><span class="token punctuation">;</span> <span class="token comment">//制表符</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span> <span class="token operator">+</span> c5<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">char</span> c6 <span class="token operator">=</span> <span class="token char">&#39;\\u0123&#39;</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c6<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token keyword">char</span> c7 <span class="token operator">=</span> <span class="token char">&#39;\\u0043&#39;</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c7<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>了解：ASCII 码</p></blockquote><ul><li>在计算机内部，所有数据都使用二进制表示。每一个二进制位（bit）有0 和1 两种状态，因此8个二进制位就可以组合出256 种状态，这被称为一个字节（byte）。一个字节一共可以用来表示256 种不同的状态，每一个状态对应一个符号，就是256 个符号，从0000000 到11111111。</li><li>ASCII码：上个世纪60年代，美国制定了一套字符编码，对英语字符与二进制位之间的关系，做了统一规定。这被称为ASCII码。ASCII码一共规定了128个字符的编码，比如空格“SPACE”是32（二进制00100000），大写的字母A是65（二进制01000001）。这128个符号（包括32个不能打印出来的控制符号），只占用了一个字节的后面7位，最前面的1位统一规定为0。</li><li>缺点： <ul><li>不能表示所有字符。</li><li>相同的编码表示的字符不一样：比如，130在法语编码中代表了é，在希伯来语编码中却代表了字母Gimel(ג)。</li></ul></li></ul><blockquote><p>了解：Unicode 编码</p></blockquote><ul><li>乱码：世界上存在着多种编码方式，同一个二进制数字可以被解释成不同的符号。因此，要想打开一个文本文件，就必须知道它的编码方式，否则用错误的编码方式解读，就会出现乱码。</li><li>Unicode：一种编码，将世界上所有的符号都纳入其中。每一个符号都给予一个独一无二的编码，使用Unicode 没有乱码的问题。</li><li>Unicode 的缺点：Unicode 只规定了符号的二进制代码，却没有规定这个二进制代码应该如何存储：无法区别Unicode 和ASCII：计算机无法区分三个字节表示一个符号还是分别表示三个符号。另外，我们知道，英文字母只用一个字节表示就够了，如果unicode统一规定，每个符号用三个或四个字节表示，那么每个英文字母前都必然有二到三个字节是0，这对于存储空间来说是极大的浪费。</li></ul><blockquote><p>了解：UTF-8</p></blockquote><ul><li>UTF-8 是在互联网上使用最广的一种Unicode 的实现方式。</li><li>UTF-8 是一种变长的编码方式。它可以使用1-6 个字节表示一个符号，根据不同的符号而变化字节长度。</li><li>UTF-8的编码规则： <ul><li>对于单字节的UTF-8编码，该字节的最高位为0，其余7位用来对字符进行编码（等同于ASCII码）。</li><li>对于多字节的UTF-8编码，如果编码包含n 个字节，那么第一个字节的前n位为1，第一个字节的第n+1 位为0，该字节的剩余各位用来对字符进行编码。在第一个字节之后的所有的字节，都是最高两位为&quot;10&quot;，其余6位用来对字符进行编码。</li></ul></li></ul>`,54),j={id:"_3-3-4、布尔类型-boolean",tabindex:"-1"},A=n("a",{class:"header-anchor",href:"#_3-3-4、布尔类型-boolean","aria-hidden":"true"},"#",-1),E={href:"https://so.csdn.net/so/search?q=%E5%B8%83%E5%B0%94%E7%B1%BB%E5%9E%8B&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},B=t(`<ul><li>boolean 类型用来判断逻辑条件，一般用于程序流程控制： <ul><li>if条件控制语句；</li><li>while循环控制语句；</li><li>do-while循环控制语句；</li><li>for循环控制语句；</li></ul></li><li>boolean类型数据只允许取值true和false，无null。 <ul><li>不可以使用0或非0 的整数替代false和true，这点和C语言不同。</li><li>Java虚拟机中没有任何供boolean值专用的字节码指令，Java语言表达所操作的boolean值，在编译之后都使用java虚拟机中的int数据类型来代替：true用1表示，false用0表示。———《java虚拟机规范8版》</li></ul></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">VariableTest1</span><span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//4. 布尔型：boolean</span>
  <span class="token comment">//① 只能取两个值之一：true 、false</span>
  <span class="token comment">//② 常常在条件判断、循环结构中使用</span>
  <span class="token keyword">boolean</span> bb1 <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bb1<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">boolean</span> isMarried <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>isMarried<span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;禁止入内！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
   <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;可以参观！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3、基本数据类型转换" tabindex="-1"><a class="header-anchor" href="#_3-3、基本数据类型转换" aria-hidden="true">#</a> 3.3、基本数据类型转换</h3><ul><li>自动类型转换：容量小的类型自动转换为容量大的数据类型。数据类型按容量大小排序为： <img src="`+k+`" alt="img"></li><li>有多种类型的数据混合运算时，系统首先自动将所有数据转换成容量最大的那种数据类型，然后再进行计算。</li><li><strong>byte,short,char之间不会相互转换，他们三者在计算时首先转换为int类型</strong>。</li><li><strong>boolean类型不能与其它数据类型运算</strong>。</li><li><strong>当把任何基本数据类型的值和字符串(String)进行连接运算时(+)，基本数据类型的值将自动转化为字符串(String)类型</strong>。</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
基本数据类型之间的运算规则：

前提：这里讨论只是7中基本数据类型变量的运算。不包含boolean类型的。
1. 自动类型提升：
 当容量小的数据类型的变量和容量大的数据类型的变量做运算时，结果自动提升为容量大的数据类型。
 char、byte、short--&gt;int--&gt;long--&gt;float--&gt;double

 特别的：当byte、char、short三种类型的变量做运算时，结果为int类型

2. 强制类型转换：
 
说明：此时容量大小指的是，表示数的范围的大和小。比如：float容量要大于long的容量
*/</span>
<span class="token keyword">class</span> <span class="token class-name">VariableTest2</span><span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">byte</span> b1 <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> i1 <span class="token operator">=</span> <span class="token number">129</span><span class="token punctuation">;</span>
  <span class="token comment">//编译不通过</span>
<span class="token comment">//  byte b2 = b1 + i1;</span>
  <span class="token keyword">int</span> i2 <span class="token operator">=</span> b1 <span class="token operator">+</span> i1<span class="token punctuation">;</span>
  <span class="token keyword">long</span> l1 <span class="token operator">=</span> b1 <span class="token operator">+</span> i1<span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>l1<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">float</span> f <span class="token operator">=</span> b1 <span class="token operator">+</span> i1<span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//***************特别的**************************</span>
  <span class="token keyword">char</span> c1 <span class="token operator">=</span> <span class="token char">&#39;a&#39;</span><span class="token punctuation">;</span> <span class="token comment">//97</span>
  <span class="token keyword">int</span> i3 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> i4 <span class="token operator">=</span> c1 <span class="token operator">+</span> i3<span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i4<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">short</span> s2 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token comment">//编译错误</span>
<span class="token comment">//  char c3 = c1 + s2;</span>
  
  <span class="token keyword">byte</span> b2 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token comment">//  char c3 = c1 + b2; //编译不通过</span>

<span class="token comment">//  short s3 = b2 + s2; //编译不通过</span>
  
<span class="token comment">//  short s4 = b1 + b2; //编译不通过</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">VariableTest4</span><span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">//1. 编码情况</span>
  <span class="token keyword">long</span> l <span class="token operator">=</span> <span class="token number">123456</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//编译失败：过大的整数</span>
  <span class="token comment">//long l1 = 452367894586235;</span>
  <span class="token keyword">long</span> l1 <span class="token operator">=</span> <span class="token number">452367894586235L</span><span class="token punctuation">;</span>

  <span class="token comment">//**************************</span>
  <span class="token comment">//编译失败</span>
<span class="token comment">//  float f1 = 12.3;</span>
  
  <span class="token comment">//2. 编码情况2:</span>
  <span class="token comment">//整型变量，默认类型为int型</span>
  <span class="token comment">//浮点型变量，默认类型为double型</span>
  <span class="token keyword">byte</span> b <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">;</span>
 <span class="token comment">// byte b1 = b + 1; //编译失败</span>
  
 <span class="token comment">// float f1 = b + 12.3; //编译失败</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4、字符串类型-string" tabindex="-1"><a class="header-anchor" href="#_3-4、字符串类型-string" aria-hidden="true">#</a> 3.4、字符串类型：String</h3><ul><li><strong>String不是基本数据类型，属于引用数据类型</strong></li><li>使用方式与基本数据类型一致。例如：String str= “abcd”;</li><li>一个字符串可以串接另一个字符串，也可以直接串接其他类型的数据。例如：</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*
String类型变量的使用
1. String属于引用数据类型
2. 声明String类型变量时，使用一对&quot;&quot;
3. String可以和8种基本数据类型变量做运算，且运算只能是连接运算；+
4. 运算的结果任然是String类型

*/</span>
<span class="token keyword">class</span> <span class="token class-name">StringTest</span><span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>

  <span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token string">&quot;Good Moon!&quot;</span><span class="token punctuation">;</span>

  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token class-name">String</span> s2 <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">;</span>
  <span class="token class-name">String</span> s3 <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

<span class="token comment">//  char c = &#39;&#39;; //编译不通过</span>
  
  <span class="token comment">//*******************************</span>
  <span class="token keyword">int</span> number <span class="token operator">=</span> <span class="token number">1001</span><span class="token punctuation">;</span>
  <span class="token class-name">String</span> numberStr <span class="token operator">=</span> <span class="token string">&quot;学号:&quot;</span><span class="token punctuation">;</span>
  <span class="token class-name">String</span> info <span class="token operator">=</span> numberStr <span class="token operator">+</span> number<span class="token punctuation">;</span> <span class="token comment">//连接运算</span>
  <span class="token keyword">boolean</span> b1 <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token class-name">String</span> info1 <span class="token operator">=</span> info <span class="token operator">+</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>info1<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>练习1：</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> str1 <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token comment">//判断对错：no</span>
<span class="token class-name">String</span> str2 <span class="token operator">=</span> <span class="token number">3.5f</span> <span class="token operator">+</span> “”<span class="token punctuation">;</span> <span class="token comment">//判断str2对错：yes</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出：”3.5”</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token operator">+</span><span class="token number">4</span><span class="token operator">+</span>“<span class="token class-name">Hello</span><span class="token operator">!</span>”<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出：7Hello!</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>“<span class="token class-name">Hello</span><span class="token operator">!</span>”<span class="token operator">+</span><span class="token number">3</span><span class="token operator">+</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出：Hello!34</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>‘a’<span class="token operator">+</span><span class="token number">1</span><span class="token operator">+</span>“<span class="token class-name">Hello</span><span class="token operator">!</span>”<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出：98Hello!</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>“<span class="token class-name">Hello</span>”<span class="token operator">+</span>‘a’<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//输出：Helloa1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),I={id:"_3-5、强制类型转换",tabindex:"-1"},C=n("a",{class:"header-anchor",href:"#_3-5、强制类型转换","aria-hidden":"true"},"#",-1),J={href:"https://so.csdn.net/so/search?q=%E5%BC%BA%E5%88%B6%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},U=t(`<ul><li>自动类型转换的逆过程，将容量大的数据类型转换为容量小的数据类型。使用时要加上强制转换符：()，但可能造成精度降低或溢出,格外要注意。</li><li>通常，字符串不能直接转换为基本类型，但通过基本类型对应的包装类则可以实现把字符串转换成基本类型。</li><li>如：<code>String a = “43”; inti= Integer.parseInt(a);</code></li><li><code>boolean</code>类型不可以转换为其它的数据类型。</li></ul><blockquote><p>练习2：</p></blockquote><p>判断是否能通过编译</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">short</span> s <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
s <span class="token operator">=</span> s<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">//判断：no</span>
<span class="token keyword">byte</span> b <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
b <span class="token operator">=</span> b <span class="token operator">+</span> <span class="token number">4</span><span class="token punctuation">;</span><span class="token comment">//判断：no</span>
b <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">)</span><span class="token punctuation">(</span>b<span class="token operator">+</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//判断：yes</span>
<span class="token keyword">char</span> c <span class="token operator">=</span> ‘a’<span class="token punctuation">;</span>
<span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">float</span> d <span class="token operator">=</span> <span class="token number">.314F</span><span class="token punctuation">;</span>
<span class="token keyword">double</span> result <span class="token operator">=</span> c<span class="token operator">+</span>i<span class="token operator">+</span>d<span class="token punctuation">;</span> <span class="token comment">//判断：yes</span>
<span class="token keyword">byte</span> b <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">short</span> s <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token keyword">short</span> t <span class="token operator">=</span> s <span class="token operator">+</span> b<span class="token punctuation">;</span><span class="token comment">//判断：no</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_04、进制" tabindex="-1"><a class="header-anchor" href="#_04、进制" aria-hidden="true">#</a> 04、进制</h2><h3 id="_4-1、进制与进制间的转换" tabindex="-1"><a class="header-anchor" href="#_4-1、进制与进制间的转换" aria-hidden="true">#</a> 4.1、进制与进制间的转换</h3><blockquote><p>关于进制</p></blockquote><ul><li>所有数字在计算机底层都以二进制形式存在。</li><li>对于整数，有四种表示方式： <ul><li>二进制(binary)：0,1 ，满2进1.以<code>0b</code>或<code>0B</code>开头。</li><li>十进制(decimal)：0-9 ，满10进1。</li><li>八进制(octal)：0-7 ，满8进1. 以数字<code>0</code>开头表示。</li><li>十六进制(hex)：0-9及A-F，满16进1. 以<code>0x</code>或<code>0X</code>开头表示。此处的A-F不区分大小写。如：0x21AF +1= 0X21B0</li></ul></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">BinaryTest</span><span class="token punctuation">{</span>
 <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>

  <span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token number">0b110</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> num2 <span class="token operator">=</span> <span class="token number">110</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> num3 <span class="token operator">=</span> <span class="token number">0127</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> num4 <span class="token operator">=</span> <span class="token number">0x110A</span><span class="token punctuation">;</span>

  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;num1 = &quot;</span> <span class="token operator">+</span> num1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;num2 = &quot;</span> <span class="token operator">+</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;num3 = &quot;</span> <span class="token operator">+</span> num3<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;num4 = &quot;</span> <span class="token operator">+</span> num4<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2、二进制" tabindex="-1"><a class="header-anchor" href="#_4-2、二进制" aria-hidden="true">#</a> 4.2、二进制</h3><ul><li>Java整数常量默认是int类型，当用二进制定义整数时，其第32位是符号位；当是long类型时，二进制默认占64位，第64位是符号位</li><li>二进制的整数有如下三种形式： <ul><li>原码：直接将一个数值换成二进制数。最高位是符号位</li><li>负数的<strong>反码</strong>：是对<strong>原码按位取反，只是最高位（符号位）确定为1</strong>。</li><li>负数的<strong>补码</strong>：其<strong>反码加1</strong>。计算机以二进制补码的形式保存所有的整数。</li><li>正数的原码、反码、补码都相同，负数的补码是其反码+1</li></ul></li></ul><blockquote><p>为什么要使用原码、反码、补码表示形式呢？</p></blockquote><p>计算机辨别“符号位”显然会让计算机的基础电路设计变得十分复杂! 于是人们想出了将符号位也参与运算的方法. 我们知道, 根据运算法则减去一个正数等于加上一个负数, 即: 1-1 = 1 + (-1) = 0 , 所以机器可以只有加法而没有减法, 这样计算机运算的设计就更简单了。</p><p><img src="`+v+'" alt="img"></p><p><strong>二进制——》十进制</strong></p><p><img src="'+m+'" alt="img"></p><blockquote><p>原码与反码是帮助推导出补码而存在的！！！</p></blockquote><p>十进制——》二进制</p><p><img src="'+b+'" alt="img"></p><ul><li>对于正数来讲：原码、反码、补码是相同的：三码合一。</li><li>计算机底层都是使用二进制表示的数值。</li><li><strong>计算机底层都是使用的数值的<code>补码</code>保存数据的。</strong></li></ul><h3 id="_4-3、进制间转化" tabindex="-1"><a class="header-anchor" href="#_4-3、进制间转化" aria-hidden="true">#</a> 4.3、进制间转化</h3><blockquote><p>十进制二进制互转</p></blockquote><ul><li>二进制转成十进制乘以2的幂数</li><li>十进制转成二进制除以2取余数</li></ul><p><img src="'+h+'" alt="在这里插入图片描述"></p><p><img src="'+g+'" alt="在这里插入图片描述"></p>',25);function X(T,F){const a=o("ExternalLinkIcon");return i(),p("div",null,[f,_,n("ul",null,[w,S,n("li",null,[s("官方地址： "),n("a",q,[s("https://docs.oracle.com/javase/tutorial/java/nutsandbolts/_keywords.html"),e(a)])])]),x,n("h4",j,[A,s(" 3.3.4、"),n("a",E,[s("布尔类型"),e(a)]),s("：boolean")]),B,n("h3",I,[C,s(" 3.5、"),n("a",J,[s("强制类型转换"),e(a)])]),U])}const H=l(y,[["render",X],["__file","02、变量&标识符&保留字&进制.html.vue"]]);export{H as default};
