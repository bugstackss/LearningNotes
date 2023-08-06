import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,a as t}from"./app.9b10ba0a.js";const p="/assets/2e375b96-e4e6-4e44-9e47-d5101684a5b6.4e07ac93.png",e="/assets/38c60551-55a6-4029-bfc0-d5ab4d85e0cd.b9d7e0db.png",c={},o=t('<h1 id="_08、dao及相关实现类" tabindex="-1"><a class="header-anchor" href="#_08、dao及相关实现类" aria-hidden="true">#</a> 08、DAO及相关实现类</h1><ul><li>DAO：Data Access Object访问数据信息的类和接口，包括了对数据的CRUD（Create、Retrival、Update、Delete），而不包含任何业务相关的信息。有时也称作：BaseDAO</li><li>作用：为了实现功能的模块化，更有利于代码的维护和升级。</li><li>下面是尚硅谷JavaWeb阶段书城项目中DAO使用的体现：</li></ul><p><img src="'+p+'" alt="2e375b96-e4e6-4e44-9e47-d5101684a5b6"></p><ul><li>层次结构：</li></ul><p><img src="'+e+`" alt="38c60551-55a6-4029-bfc0-d5ab4d85e0cd"></p><h2 id="【basedao-java】" tabindex="-1"><a class="header-anchor" href="#【basedao-java】" aria-hidden="true">#</a> 【BaseDAO.java】</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>bookstore<span class="token punctuation">.</span>dao</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">ParameterizedType</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Type</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Connection</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">SQLException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>commons<span class="token punctuation">.</span>dbutils<span class="token punctuation">.</span></span><span class="token class-name">QueryRunner</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>commons<span class="token punctuation">.</span>dbutils<span class="token punctuation">.</span>handlers<span class="token punctuation">.</span></span><span class="token class-name">BeanHandler</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>commons<span class="token punctuation">.</span>dbutils<span class="token punctuation">.</span>handlers<span class="token punctuation">.</span></span><span class="token class-name">BeanListHandler</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>commons<span class="token punctuation">.</span>dbutils<span class="token punctuation">.</span>handlers<span class="token punctuation">.</span></span><span class="token class-name">ScalarHandler</span></span><span class="token punctuation">;</span>


<span class="token doc-comment comment">/**
 * 定义一个用来被继承的对数据库进行基本操作的Dao
 * 
 * <span class="token keyword">@author</span> HanYanBing
 *
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">BaseDao</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token class-name">QueryRunner</span> queryRunner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueryRunner</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 定义一个变量来接收泛型的类型</span>
	<span class="token keyword">private</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> type<span class="token punctuation">;</span>

	<span class="token comment">// 获取T的Class对象，获取泛型的类型，泛型是在被子类继承时才确定</span>
	<span class="token keyword">public</span> <span class="token class-name">BaseDao</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 获取子类的类型</span>
		<span class="token class-name">Class</span> clazz <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 获取父类的类型</span>
		<span class="token comment">// getGenericSuperclass()用来获取当前类的父类的类型</span>
		<span class="token comment">// ParameterizedType表示的是带泛型的类型</span>
		<span class="token class-name">ParameterizedType</span> parameterizedType <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">ParameterizedType</span><span class="token punctuation">)</span> clazz<span class="token punctuation">.</span><span class="token function">getGenericSuperclass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 获取具体的泛型类型 getActualTypeArguments获取具体的泛型的类型</span>
		<span class="token comment">// 这个方法会返回一个Type的数组</span>
		<span class="token class-name">Type</span><span class="token punctuation">[</span><span class="token punctuation">]</span> types <span class="token operator">=</span> parameterizedType<span class="token punctuation">.</span><span class="token function">getActualTypeArguments</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 获取具体的泛型的类型·</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span> types<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * 通用的增删改操作
	 * 
	 * <span class="token keyword">@param</span> <span class="token parameter">sql</span>
	 * <span class="token keyword">@param</span> <span class="token parameter">params</span>
	 * <span class="token keyword">@return</span>
	 */</span>
	<span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token class-name">Connection</span> conn<span class="token punctuation">,</span><span class="token class-name">String</span> sql<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			count <span class="token operator">=</span> queryRunner<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>conn<span class="token punctuation">,</span> sql<span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> 
		<span class="token keyword">return</span> count<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * 获取一个对象
	 * 
	 * <span class="token keyword">@param</span> <span class="token parameter">sql</span>
	 * <span class="token keyword">@param</span> <span class="token parameter">params</span>
	 * <span class="token keyword">@return</span>
	 */</span>
	<span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">Connection</span> conn<span class="token punctuation">,</span><span class="token class-name">String</span> sql<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">T</span> t <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			t <span class="token operator">=</span> queryRunner<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>conn<span class="token punctuation">,</span> sql<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">BeanHandler</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> 
		<span class="token keyword">return</span> t<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * 获取所有对象
	 * 
	 * <span class="token keyword">@param</span> <span class="token parameter">sql</span>
	 * <span class="token keyword">@param</span> <span class="token parameter">params</span>
	 * <span class="token keyword">@return</span>
	 */</span>
	<span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token function">getBeanList</span><span class="token punctuation">(</span><span class="token class-name">Connection</span> conn<span class="token punctuation">,</span><span class="token class-name">String</span> sql<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			list <span class="token operator">=</span> queryRunner<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>conn<span class="token punctuation">,</span> sql<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">BeanListHandler</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> 
		<span class="token keyword">return</span> list<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * 获取一个但一值得方法，专门用来执行像 select count(*)...这样的sql语句
	 * 
	 * <span class="token keyword">@param</span> <span class="token parameter">sql</span>
	 * <span class="token keyword">@param</span> <span class="token parameter">params</span>
	 * <span class="token keyword">@return</span>
	 */</span>
	<span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getValue</span><span class="token punctuation">(</span><span class="token class-name">Connection</span> conn<span class="token punctuation">,</span><span class="token class-name">String</span> sql<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> params<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Object</span> count <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			<span class="token comment">// 调用queryRunner的query方法获取一个单一的值</span>
			count <span class="token operator">=</span> queryRunner<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>conn<span class="token punctuation">,</span> sql<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">ScalarHandler</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> params<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">SQLException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> 
		<span class="token keyword">return</span> count<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【bookdao-java】" tabindex="-1"><a class="header-anchor" href="#【bookdao-java】" aria-hidden="true">#</a> 【BookDAO.java】</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>bookstore<span class="token punctuation">.</span>dao</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Connection</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>bookstore<span class="token punctuation">.</span>beans<span class="token punctuation">.</span></span><span class="token class-name">Book</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>bookstore<span class="token punctuation">.</span>beans<span class="token punctuation">.</span></span><span class="token class-name">Page</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">BookDao</span> <span class="token punctuation">{</span>

	<span class="token doc-comment comment">/**
	 * 从数据库中查询出所有的记录
	 * 
	 * <span class="token keyword">@return</span>
	 */</span>
	<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Book</span><span class="token punctuation">&gt;</span></span> <span class="token function">getBooks</span><span class="token punctuation">(</span><span class="token class-name">Connection</span> conn<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 向数据库中插入一条记录
	 * 
	 * <span class="token keyword">@param</span> <span class="token parameter">book</span>
	 */</span>
	<span class="token keyword">void</span> <span class="token function">saveBook</span><span class="token punctuation">(</span><span class="token class-name">Connection</span> conn<span class="token punctuation">,</span><span class="token class-name">Book</span> book<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 从数据库中根据图书的id删除一条记录
	 * 
	 * <span class="token keyword">@param</span> <span class="token parameter">bookId</span>
	 */</span>
	<span class="token keyword">void</span> <span class="token function">deleteBookById</span><span class="token punctuation">(</span><span class="token class-name">Connection</span> conn<span class="token punctuation">,</span><span class="token class-name">String</span> bookId<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 根据图书的id从数据库中查询出一条记录
	 * 
	 * <span class="token keyword">@param</span> <span class="token parameter">bookId</span>
	 * <span class="token keyword">@return</span>
	 */</span>
	<span class="token class-name">Book</span> <span class="token function">getBookById</span><span class="token punctuation">(</span><span class="token class-name">Connection</span> conn<span class="token punctuation">,</span><span class="token class-name">String</span> bookId<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 根据图书的id从数据库中更新一条记录
	 * 
	 * <span class="token keyword">@param</span> <span class="token parameter">book</span>
	 */</span>
	<span class="token keyword">void</span> <span class="token function">updateBook</span><span class="token punctuation">(</span><span class="token class-name">Connection</span> conn<span class="token punctuation">,</span><span class="token class-name">Book</span> book<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 获取带分页的图书信息
	 * 
	 * <span class="token keyword">@param</span> <span class="token parameter">page</span>：是只包含了用户输入的pageNo属性的page对象
	 * <span class="token keyword">@return</span> 返回的Page对象是包含了所有属性的Page对象
	 */</span>
	<span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Book</span><span class="token punctuation">&gt;</span></span> <span class="token function">getPageBooks</span><span class="token punctuation">(</span><span class="token class-name">Connection</span> conn<span class="token punctuation">,</span><span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Book</span><span class="token punctuation">&gt;</span></span> page<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 获取带分页和价格范围的图书信息
	 * 
	 * <span class="token keyword">@param</span> <span class="token parameter">page</span>：是只包含了用户输入的pageNo属性的page对象
	 * <span class="token keyword">@return</span> 返回的Page对象是包含了所有属性的Page对象
	 */</span>
	<span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Book</span><span class="token punctuation">&gt;</span></span> <span class="token function">getPageBooksByPrice</span><span class="token punctuation">(</span><span class="token class-name">Connection</span> conn<span class="token punctuation">,</span><span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Book</span><span class="token punctuation">&gt;</span></span> page<span class="token punctuation">,</span> <span class="token keyword">double</span> minPrice<span class="token punctuation">,</span> <span class="token keyword">double</span> maxPrice<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【userdao-java】" tabindex="-1"><a class="header-anchor" href="#【userdao-java】" aria-hidden="true">#</a> 【UserDAO.java】</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>bookstore<span class="token punctuation">.</span>dao</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Connection</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>bookstore<span class="token punctuation">.</span>beans<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserDao</span> <span class="token punctuation">{</span>

	<span class="token doc-comment comment">/**
	 * 根据User对象中的用户名和密码从数据库中获取一条记录
	 * 
	 * <span class="token keyword">@param</span> <span class="token parameter">user</span>
	 * <span class="token keyword">@return</span> User 数据库中有记录 null 数据库中无此记录
	 */</span>
	<span class="token class-name">User</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token class-name">Connection</span> conn<span class="token punctuation">,</span><span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 根据User对象中的用户名从数据库中获取一条记录
	 * 
	 * <span class="token keyword">@param</span> <span class="token parameter">user</span>
	 * <span class="token keyword">@return</span> true 数据库中有记录 false 数据库中无此记录
	 */</span>
	<span class="token keyword">boolean</span> <span class="token function">checkUsername</span><span class="token punctuation">(</span><span class="token class-name">Connection</span> conn<span class="token punctuation">,</span><span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token doc-comment comment">/**
	 * 向数据库中插入User对象
	 * 
	 * <span class="token keyword">@param</span> <span class="token parameter">user</span>
	 */</span>
	<span class="token keyword">void</span> <span class="token function">saveUser</span><span class="token punctuation">(</span><span class="token class-name">Connection</span> conn<span class="token punctuation">,</span><span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【bookdaoimpl-java】" tabindex="-1"><a class="header-anchor" href="#【bookdaoimpl-java】" aria-hidden="true">#</a> 【BookDaoImpl.java】</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>bookstore<span class="token punctuation">.</span>dao<span class="token punctuation">.</span>impl</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Connection</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>bookstore<span class="token punctuation">.</span>beans<span class="token punctuation">.</span></span><span class="token class-name">Book</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>bookstore<span class="token punctuation">.</span>beans<span class="token punctuation">.</span></span><span class="token class-name">Page</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>bookstore<span class="token punctuation">.</span>dao<span class="token punctuation">.</span></span><span class="token class-name">BaseDao</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>bookstore<span class="token punctuation">.</span>dao<span class="token punctuation">.</span></span><span class="token class-name">BookDao</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BookDaoImpl</span> <span class="token keyword">extends</span> <span class="token class-name">BaseDao</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Book</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">BookDao</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Book</span><span class="token punctuation">&gt;</span></span> <span class="token function">getBooks</span><span class="token punctuation">(</span><span class="token class-name">Connection</span> conn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 调用BaseDao中得到一个List的方法</span>
		<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Book</span><span class="token punctuation">&gt;</span></span> beanList <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token comment">// 写sql语句</span>
		<span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;select id,title,author,price,sales,stock,img_path imgPath from books&quot;</span><span class="token punctuation">;</span>
		beanList <span class="token operator">=</span> <span class="token function">getBeanList</span><span class="token punctuation">(</span>conn<span class="token punctuation">,</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> beanList<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">saveBook</span><span class="token punctuation">(</span><span class="token class-name">Connection</span> conn<span class="token punctuation">,</span><span class="token class-name">Book</span> book<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 写sql语句</span>
		<span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;insert into books(title,author,price,sales,stock,img_path) values(?,?,?,?,?,?)&quot;</span><span class="token punctuation">;</span>
		<span class="token comment">// 调用BaseDao中通用的增删改的方法</span>
		<span class="token function">update</span><span class="token punctuation">(</span>conn<span class="token punctuation">,</span>sql<span class="token punctuation">,</span> book<span class="token punctuation">.</span><span class="token function">getTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> book<span class="token punctuation">.</span><span class="token function">getAuthor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> book<span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> book<span class="token punctuation">.</span><span class="token function">getSales</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> book<span class="token punctuation">.</span><span class="token function">getStock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>book<span class="token punctuation">.</span><span class="token function">getImgPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">deleteBookById</span><span class="token punctuation">(</span><span class="token class-name">Connection</span> conn<span class="token punctuation">,</span><span class="token class-name">String</span> bookId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 写sql语句</span>
		<span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;DELETE FROM books WHERE id = ?&quot;</span><span class="token punctuation">;</span>
		<span class="token comment">// 调用BaseDao中通用增删改的方法</span>
		<span class="token function">update</span><span class="token punctuation">(</span>conn<span class="token punctuation">,</span>sql<span class="token punctuation">,</span> bookId<span class="token punctuation">)</span><span class="token punctuation">;</span>
			
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">Book</span> <span class="token function">getBookById</span><span class="token punctuation">(</span><span class="token class-name">Connection</span> conn<span class="token punctuation">,</span><span class="token class-name">String</span> bookId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 调用BaseDao中获取一个对象的方法</span>
		<span class="token class-name">Book</span> book <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token comment">// 写sql语句</span>
		<span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;select id,title,author,price,sales,stock,img_path imgPath from books where id = ?&quot;</span><span class="token punctuation">;</span>
		book <span class="token operator">=</span> <span class="token function">getBean</span><span class="token punctuation">(</span>conn<span class="token punctuation">,</span>sql<span class="token punctuation">,</span> bookId<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> book<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">updateBook</span><span class="token punctuation">(</span><span class="token class-name">Connection</span> conn<span class="token punctuation">,</span><span class="token class-name">Book</span> book<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 写sql语句</span>
		<span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;update books set title = ? , author = ? , price = ? , sales = ? , stock = ? where id = ?&quot;</span><span class="token punctuation">;</span>
		<span class="token comment">// 调用BaseDao中通用的增删改的方法</span>
		<span class="token function">update</span><span class="token punctuation">(</span>conn<span class="token punctuation">,</span>sql<span class="token punctuation">,</span> book<span class="token punctuation">.</span><span class="token function">getTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> book<span class="token punctuation">.</span><span class="token function">getAuthor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> book<span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> book<span class="token punctuation">.</span><span class="token function">getSales</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> book<span class="token punctuation">.</span><span class="token function">getStock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> book<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Book</span><span class="token punctuation">&gt;</span></span> <span class="token function">getPageBooks</span><span class="token punctuation">(</span><span class="token class-name">Connection</span> conn<span class="token punctuation">,</span><span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Book</span><span class="token punctuation">&gt;</span></span> page<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 获取数据库中图书的总记录数</span>
		<span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;select count(*) from books&quot;</span><span class="token punctuation">;</span>
		<span class="token comment">// 调用BaseDao中获取一个单一值的方法</span>
		<span class="token keyword">long</span> totalRecord <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span> <span class="token function">getValue</span><span class="token punctuation">(</span>conn<span class="token punctuation">,</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 将总记录数设置都page对象中</span>
		page<span class="token punctuation">.</span><span class="token function">setTotalRecord</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> totalRecord<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 获取当前页中的记录存放的List</span>
		<span class="token class-name">String</span> sql2 <span class="token operator">=</span> <span class="token string">&quot;select id,title,author,price,sales,stock,img_path imgPath from books limit ?,?&quot;</span><span class="token punctuation">;</span>
		<span class="token comment">// 调用BaseDao中获取一个集合的方法</span>
		<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Book</span><span class="token punctuation">&gt;</span></span> beanList <span class="token operator">=</span> <span class="token function">getBeanList</span><span class="token punctuation">(</span>conn<span class="token punctuation">,</span>sql2<span class="token punctuation">,</span> <span class="token punctuation">(</span>page<span class="token punctuation">.</span><span class="token function">getPageNo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token class-name">Page</span><span class="token punctuation">.</span><span class="token constant">PAGE_SIZE</span><span class="token punctuation">,</span> <span class="token class-name">Page</span><span class="token punctuation">.</span><span class="token constant">PAGE_SIZE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 将这个List设置到page对象中</span>
		page<span class="token punctuation">.</span><span class="token function">setList</span><span class="token punctuation">(</span>beanList<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> page<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Book</span><span class="token punctuation">&gt;</span></span> <span class="token function">getPageBooksByPrice</span><span class="token punctuation">(</span><span class="token class-name">Connection</span> conn<span class="token punctuation">,</span><span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Book</span><span class="token punctuation">&gt;</span></span> page<span class="token punctuation">,</span> <span class="token keyword">double</span> minPrice<span class="token punctuation">,</span> <span class="token keyword">double</span> maxPrice<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 获取数据库中图书的总记录数</span>
		<span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;select count(*) from books where price between ? and ?&quot;</span><span class="token punctuation">;</span>
		<span class="token comment">// 调用BaseDao中获取一个单一值的方法</span>
		<span class="token keyword">long</span> totalRecord <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span> <span class="token function">getValue</span><span class="token punctuation">(</span>conn<span class="token punctuation">,</span>sql<span class="token punctuation">,</span>minPrice<span class="token punctuation">,</span>maxPrice<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 将总记录数设置都page对象中</span>
		page<span class="token punctuation">.</span><span class="token function">setTotalRecord</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> totalRecord<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 获取当前页中的记录存放的List</span>
		<span class="token class-name">String</span> sql2 <span class="token operator">=</span> <span class="token string">&quot;select id,title,author,price,sales,stock,img_path imgPath from books where price between ? and ? limit ?,?&quot;</span><span class="token punctuation">;</span>
		<span class="token comment">// 调用BaseDao中获取一个集合的方法</span>
		<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Book</span><span class="token punctuation">&gt;</span></span> beanList <span class="token operator">=</span> <span class="token function">getBeanList</span><span class="token punctuation">(</span>conn<span class="token punctuation">,</span>sql2<span class="token punctuation">,</span> minPrice <span class="token punctuation">,</span> maxPrice <span class="token punctuation">,</span> <span class="token punctuation">(</span>page<span class="token punctuation">.</span><span class="token function">getPageNo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token class-name">Page</span><span class="token punctuation">.</span><span class="token constant">PAGE_SIZE</span><span class="token punctuation">,</span> <span class="token class-name">Page</span><span class="token punctuation">.</span><span class="token constant">PAGE_SIZE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 将这个List设置到page对象中</span>
		page<span class="token punctuation">.</span><span class="token function">setList</span><span class="token punctuation">(</span>beanList<span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token keyword">return</span> page<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【userdaoimpl-java】" tabindex="-1"><a class="header-anchor" href="#【userdaoimpl-java】" aria-hidden="true">#</a> 【UserDaoImpl.java】</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>bookstore<span class="token punctuation">.</span>dao<span class="token punctuation">.</span>impl</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">Connection</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>bookstore<span class="token punctuation">.</span>beans<span class="token punctuation">.</span></span><span class="token class-name">User</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>bookstore<span class="token punctuation">.</span>dao<span class="token punctuation">.</span></span><span class="token class-name">BaseDao</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>bookstore<span class="token punctuation">.</span>dao<span class="token punctuation">.</span></span><span class="token class-name">UserDao</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserDaoImpl</span> <span class="token keyword">extends</span> <span class="token class-name">BaseDao</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token keyword">implements</span> <span class="token class-name">UserDao</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">User</span> <span class="token function">getUser</span><span class="token punctuation">(</span><span class="token class-name">Connection</span> conn<span class="token punctuation">,</span><span class="token class-name">User</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 调用BaseDao中获取一个对象的方法</span>
		<span class="token class-name">User</span> bean <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token comment">// 写sql语句</span>
		<span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;select id,username,password,email from users where username = ? and password = ?&quot;</span><span class="token punctuation">;</span>
		bean <span class="token operator">=</span> <span class="token function">getBean</span><span class="token punctuation">(</span>conn<span class="token punctuation">,</span>sql<span class="token punctuation">,</span> user<span class="token punctuation">.</span><span class="token function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> user<span class="token punctuation">.</span><span class="token function">getPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> bean<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">checkUsername</span><span class="token punctuation">(</span><span class="token class-name">Connection</span> conn<span class="token punctuation">,</span><span class="token class-name">User</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 调用BaseDao中获取一个对象的方法</span>
		<span class="token class-name">User</span> bean <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token comment">// 写sql语句</span>
		<span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;select id,username,password,email from users where username = ?&quot;</span><span class="token punctuation">;</span>
		bean <span class="token operator">=</span> <span class="token function">getBean</span><span class="token punctuation">(</span>conn<span class="token punctuation">,</span>sql<span class="token punctuation">,</span> user<span class="token punctuation">.</span><span class="token function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> bean <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">saveUser</span><span class="token punctuation">(</span><span class="token class-name">Connection</span> conn<span class="token punctuation">,</span><span class="token class-name">User</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//写sql语句</span>
		<span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;insert into users(username,password,email) values(?,?,?)&quot;</span><span class="token punctuation">;</span>
		<span class="token comment">//调用BaseDao中通用的增删改的方法</span>
		<span class="token function">update</span><span class="token punctuation">(</span>conn<span class="token punctuation">,</span>sql<span class="token punctuation">,</span> user<span class="token punctuation">.</span><span class="token function">getUsername</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>user<span class="token punctuation">.</span><span class="token function">getPassword</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>user<span class="token punctuation">.</span><span class="token function">getEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【book-java】" tabindex="-1"><a class="header-anchor" href="#【book-java】" aria-hidden="true">#</a> 【Book.java】</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>bookstore<span class="token punctuation">.</span>beans</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * 图书类
 * <span class="token keyword">@author</span> songhongkang
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Book</span> <span class="token punctuation">{</span>

	<span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> title<span class="token punctuation">;</span> <span class="token comment">// 书名</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> author<span class="token punctuation">;</span> <span class="token comment">// 作者</span>
	<span class="token keyword">private</span> <span class="token keyword">double</span> price<span class="token punctuation">;</span> <span class="token comment">// 价格</span>
	<span class="token keyword">private</span> <span class="token class-name">Integer</span> sales<span class="token punctuation">;</span> <span class="token comment">// 销量</span>
	<span class="token keyword">private</span> <span class="token class-name">Integer</span> stock<span class="token punctuation">;</span> <span class="token comment">// 库存</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> imgPath <span class="token operator">=</span> <span class="token string">&quot;static/img/default.jpg&quot;</span><span class="token punctuation">;</span> <span class="token comment">// 封面图片的路径</span>
	<span class="token comment">//构造器，get()，set()，toString()方法略</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【page-java】" tabindex="-1"><a class="header-anchor" href="#【page-java】" aria-hidden="true">#</a> 【Page.java】</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>bookstore<span class="token punctuation">.</span>beans</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * 页码类
 * <span class="token keyword">@author</span> songhongkang
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

	<span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> list<span class="token punctuation">;</span> <span class="token comment">// 每页查到的记录存放的集合</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">PAGE_SIZE</span> <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token comment">// 每页显示的记录数</span>
	<span class="token keyword">private</span> <span class="token keyword">int</span> pageNo<span class="token punctuation">;</span> <span class="token comment">// 当前页</span>
<span class="token comment">//	private int totalPageNo; // 总页数，通过计算得到</span>
	<span class="token keyword">private</span> <span class="token keyword">int</span> totalRecord<span class="token punctuation">;</span> <span class="token comment">// 总记录数，通过查询数据库得到</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="【user-java】" tabindex="-1"><a class="header-anchor" href="#【user-java】" aria-hidden="true">#</a> 【User.java】</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>atguigu<span class="token punctuation">.</span>bookstore<span class="token punctuation">.</span>beans</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * 用户类
 * <span class="token keyword">@author</span> songhongkang
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>

	<span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> username<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>
	<span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),l=[o];function i(u,k){return s(),a("div",null,l)}const m=n(c,[["render",i],["__file","08、DAO及相关实现类.html.vue"]]);export{m as default};
