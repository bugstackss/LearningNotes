import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,a as e}from"./app.9b10ba0a.js";const t="/assets/obe53BRuFjcJmH4.2de19b20.png",p="/assets/aWnGC1gUd29tFMi.6b4ac602.png",o="/assets/SVJ7TmsadxzPenW.cb4c051c.png",c={},i=e(`<h1 id="_08、完全注解开发" tabindex="-1"><a class="header-anchor" href="#_08、完全注解开发" aria-hidden="true">#</a> 08、完全注解开发</h1><h2 id="_1、abstractannotationconfigdispatcherservletlnitializer" tabindex="-1"><a class="header-anchor" href="#_1、abstractannotationconfigdispatcherservletlnitializer" aria-hidden="true">#</a> 1、AbstractAnnotationConfigDispatcherServletlnitializer</h2><p>在 Servlet3.0 环境中，容器会在类路径中查找实现<code>javax.servlet.ServletContainerlnitializer</code>接口的类，如果找到的话就用它来配置 Servlet 容器</p><p>Spring 提供了这个接口的实现，名为<code>SpringServletContainerlnitializer</code>，这个类反过来又会查找实现<code>WebApplicationlnitializer</code>的类并将配置的任务交给它们来完成</p><p>Spring3.2 引入了一个便利的 <code>WebApplicationlnitializer</code>基础实现，名为<code>AbstractAnnotationConfigDispatcherServletlnitializer</code></p><p>当类扩展了<code>AbstractAnnotationConfigDispatcherServletlnitializer</code>并将其部署到 Servlet3.0 容器时，容器会自动发现它，并用它来配置Servlet 上下文</p><h2 id="_2、初始化类" tabindex="-1"><a class="header-anchor" href="#_2、初始化类" aria-hidden="true">#</a> 2、初始化类</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * web工程的初始化类，代替web.xml
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WebInit</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractAnnotationConfigDispatcherServletInitializer</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 指定Spring配置类
     *
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getRootConfigClasses</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Class</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token class-name">SpringConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 指定SpringMVC配置类
     *
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getServletConfigClasses</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Class</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token class-name">WebConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 指定SpringMVC的映射规则，即url-pattern
     *
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getServletMappings</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 注册过滤器
     *
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">Filter</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getServletFilters</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">CharacterEncodingFilter</span> characterEncodingFilter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CharacterEncodingFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        characterEncodingFilter<span class="token punctuation">.</span><span class="token function">setEncoding</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        characterEncodingFilter<span class="token punctuation">.</span><span class="token function">setForceResponseEncoding</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">HiddenHttpMethodFilter</span> hiddenHttpMethodFilter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HiddenHttpMethodFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Filter</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>characterEncodingFilter<span class="token punctuation">,</span> hiddenHttpMethodFilter<span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、springmvc-配置类" tabindex="-1"><a class="header-anchor" href="#_3、springmvc-配置类" aria-hidden="true">#</a> 3、SpringMVC 配置类</h2><p>SpringMVC 配置类清单</p><ul><li>1、扫描组件</li><li>2、视图解析器</li><li>3、view-controller</li><li>4、default-servlet-handler</li><li>5、MVC注解驱动</li><li>6、文件上传解析器</li><li>7、拦截器</li><li>8、异常处理解析器</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 标识为配置类</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token comment">// ========== 1、扫描组件 ==========</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span><span class="token string">&quot;com.vectorx.springmvc.controller&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// ========== 5、MVC注解驱动 ==========</span>
<span class="token annotation punctuation">@EnableWebMvc</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WebConfig</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4、视图解析器" tabindex="-1"><a class="header-anchor" href="#_4、视图解析器" aria-hidden="true">#</a> 4、视图解析器</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span><span class="token string">&quot;com.vectorx.springmvc.controller&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@EnableWebMvc</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WebConfig</span> <span class="token punctuation">{</span>
    <span class="token comment">// ========== 2、视图解析器 ==========</span>

    <span class="token doc-comment comment">/**
     * 生成模板解析器
     *
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">ITemplateResolver</span> <span class="token function">templateResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringResourceTemplateResolver</span> templateResolver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SpringResourceTemplateResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        templateResolver<span class="token punctuation">.</span><span class="token function">setPrefix</span><span class="token punctuation">(</span><span class="token string">&quot;/WEB-INF/templates/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        templateResolver<span class="token punctuation">.</span><span class="token function">setSuffix</span><span class="token punctuation">(</span><span class="token string">&quot;.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        templateResolver<span class="token punctuation">.</span><span class="token function">setTemplateMode</span><span class="token punctuation">(</span><span class="token class-name">TemplateMode</span><span class="token punctuation">.</span><span class="token constant">HTML</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        templateResolver<span class="token punctuation">.</span><span class="token function">setCharacterEncoding</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> templateResolver<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 生成模板引擎并注入模板解析器
     *
     * <span class="token keyword">@param</span> <span class="token parameter">templateResolver</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">ISpringTemplateEngine</span> <span class="token function">templateEngine</span><span class="token punctuation">(</span><span class="token class-name">ITemplateResolver</span> templateResolver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringTemplateEngine</span> templateEngine <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SpringTemplateEngine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        templateEngine<span class="token punctuation">.</span><span class="token function">setTemplateResolver</span><span class="token punctuation">(</span>templateResolver<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> templateEngine<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 生成视图解析器并注入模板引擎
     *
     * <span class="token keyword">@param</span> <span class="token parameter">templateEngine</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">ViewResolver</span> <span class="token function">viewResolver</span><span class="token punctuation">(</span><span class="token class-name">ISpringTemplateEngine</span> templateEngine<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ThymeleafViewResolver</span> viewResolver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThymeleafViewResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        viewResolver<span class="token punctuation">.</span><span class="token function">setOrder</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        viewResolver<span class="token punctuation">.</span><span class="token function">setCharacterEncoding</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        viewResolver<span class="token punctuation">.</span><span class="token function">setTemplateEngine</span><span class="token punctuation">(</span>templateEngine<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> viewResolver<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、webmvcconfigurer" tabindex="-1"><a class="header-anchor" href="#_5、webmvcconfigurer" aria-hidden="true">#</a> 5、WebMvcConfigurer</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span><span class="token string">&quot;com.vectorx.springmvc.controller&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@EnableWebMvc</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WebConfig</span> <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span> <span class="token punctuation">{</span>
    <span class="token comment">// 略...</span>

    <span class="token comment">// ========== 3、view-controller ==========</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addViewControllers</span><span class="token punctuation">(</span><span class="token class-name">ViewControllerRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        registry<span class="token punctuation">.</span><span class="token function">addViewController</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setViewName</span><span class="token punctuation">(</span><span class="token string">&quot;index&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// ========== 4、default-servlet-handler ==========</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">configureDefaultServletHandling</span><span class="token punctuation">(</span><span class="token class-name">DefaultServletHandlerConfigurer</span> configurer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        configurer<span class="token punctuation">.</span><span class="token function">enable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ========== 7、拦截器 ==========</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addInterceptors</span><span class="token punctuation">(</span><span class="token class-name">InterceptorRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        registry<span class="token punctuation">.</span><span class="token function">addInterceptor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TestInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addPathPatterns</span><span class="token punctuation">(</span><span class="token string">&quot;/**&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ========== 8、异常处理解析器 ==========</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">configureHandlerExceptionResolvers</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HandlerExceptionResolver</span><span class="token punctuation">&gt;</span></span> resolvers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SimpleMappingExceptionResolver</span> exceptionResolver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleMappingExceptionResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Properties</span> properties <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        properties<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;java.lang.ArithmeticException&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        exceptionResolver<span class="token punctuation">.</span><span class="token function">setExceptionMappings</span><span class="token punctuation">(</span>properties<span class="token punctuation">)</span><span class="token punctuation">;</span>
        exceptionResolver<span class="token punctuation">.</span><span class="token function">setExceptionAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;ex&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        resolvers<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>exceptionResolver<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6、文件上传解析器" tabindex="-1"><a class="header-anchor" href="#_6、文件上传解析器" aria-hidden="true">#</a> 6、文件上传解析器</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span><span class="token string">&quot;com.vectorx.springmvc.controller&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@EnableWebMvc</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WebConfig</span> <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span> <span class="token punctuation">{</span>
    <span class="token comment">// 略...</span>
    
    <span class="token comment">// ========== 6、文件上传解析器 ==========</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">MultipartResolver</span> <span class="token function">multipartResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">MultipartResolver</span> multipartResolver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CommonsMultipartResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> multipartResolver<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><h3 id="访问首页" tabindex="-1"><a class="header-anchor" href="#访问首页" aria-hidden="true">#</a> 访问首页</h3><p><img src="`+t+'" alt="image-20220405173617166"></p><h3 id="测试异常" tabindex="-1"><a class="header-anchor" href="#测试异常" aria-hidden="true">#</a> 测试异常</h3><p><img src="'+p+`" alt="image-20220405173640378"></p><h2 id="附录-springmvc-配置类总览" tabindex="-1"><a class="header-anchor" href="#附录-springmvc-配置类总览" aria-hidden="true">#</a> 附录：SpringMVC 配置类总览</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 标识为配置类</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token comment">// ========== 1、扫描组件 ==========</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span><span class="token string">&quot;com.vectorx.springmvc.controller&quot;</span><span class="token punctuation">)</span>
<span class="token comment">// ========== 5、MVC注解驱动 ==========</span>
<span class="token annotation punctuation">@EnableWebMvc</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WebConfig</span> <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span> <span class="token punctuation">{</span>

    <span class="token comment">// ========== 2、视图解析器 ==========</span>

    <span class="token doc-comment comment">/**
     * 生成模板解析器
     *
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">ITemplateResolver</span> <span class="token function">templateResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringResourceTemplateResolver</span> templateResolver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SpringResourceTemplateResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        templateResolver<span class="token punctuation">.</span><span class="token function">setPrefix</span><span class="token punctuation">(</span><span class="token string">&quot;/WEB-INF/templates/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        templateResolver<span class="token punctuation">.</span><span class="token function">setSuffix</span><span class="token punctuation">(</span><span class="token string">&quot;.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        templateResolver<span class="token punctuation">.</span><span class="token function">setTemplateMode</span><span class="token punctuation">(</span><span class="token class-name">TemplateMode</span><span class="token punctuation">.</span><span class="token constant">HTML</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        templateResolver<span class="token punctuation">.</span><span class="token function">setCharacterEncoding</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> templateResolver<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 生成模板引擎并注入模板解析器
     *
     * <span class="token keyword">@param</span> <span class="token parameter">templateResolver</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">ISpringTemplateEngine</span> <span class="token function">templateEngine</span><span class="token punctuation">(</span><span class="token class-name">ITemplateResolver</span> templateResolver<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringTemplateEngine</span> templateEngine <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SpringTemplateEngine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        templateEngine<span class="token punctuation">.</span><span class="token function">setTemplateResolver</span><span class="token punctuation">(</span>templateResolver<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> templateEngine<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 生成视图解析器并注入模板引擎
     *
     * <span class="token keyword">@param</span> <span class="token parameter">templateEngine</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">ViewResolver</span> <span class="token function">viewResolver</span><span class="token punctuation">(</span><span class="token class-name">ISpringTemplateEngine</span> templateEngine<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ThymeleafViewResolver</span> viewResolver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThymeleafViewResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        viewResolver<span class="token punctuation">.</span><span class="token function">setOrder</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        viewResolver<span class="token punctuation">.</span><span class="token function">setCharacterEncoding</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        viewResolver<span class="token punctuation">.</span><span class="token function">setTemplateEngine</span><span class="token punctuation">(</span>templateEngine<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> viewResolver<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ========== 3、view-controller ==========</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addViewControllers</span><span class="token punctuation">(</span><span class="token class-name">ViewControllerRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        registry<span class="token punctuation">.</span><span class="token function">addViewController</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setViewName</span><span class="token punctuation">(</span><span class="token string">&quot;index&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ========== 4、default-servlet-handler ==========</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">configureDefaultServletHandling</span><span class="token punctuation">(</span><span class="token class-name">DefaultServletHandlerConfigurer</span> configurer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        configurer<span class="token punctuation">.</span><span class="token function">enable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ========== 6、文件上传解析器 ==========</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">MultipartResolver</span> <span class="token function">multipartResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">MultipartResolver</span> multipartResolver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CommonsMultipartResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> multipartResolver<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ========== 7、拦截器 ==========</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addInterceptors</span><span class="token punctuation">(</span><span class="token class-name">InterceptorRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        registry<span class="token punctuation">.</span><span class="token function">addInterceptor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TestInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addPathPatterns</span><span class="token punctuation">(</span><span class="token string">&quot;/**&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ========== 8、异常处理解析器 ==========</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">configureHandlerExceptionResolvers</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HandlerExceptionResolver</span><span class="token punctuation">&gt;</span></span> resolvers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SimpleMappingExceptionResolver</span> exceptionResolver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleMappingExceptionResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Properties</span> properties <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Properties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        properties<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token class-name">ArithmeticException</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getCanonicalName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        exceptionResolver<span class="token punctuation">.</span><span class="token function">setExceptionMappings</span><span class="token punctuation">(</span>properties<span class="token punctuation">)</span><span class="token punctuation">;</span>
        exceptionResolver<span class="token punctuation">.</span><span class="token function">setExceptionAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;ex&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        resolvers<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>exceptionResolver<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>本届重点掌握</p><ul><li>web 工程初始化的配置方法</li><li>SpringMVC 配置类的组件配置方法</li></ul><p>附上导图，仅供参考</p><p><img src="`+o+'" alt="08-完全注解开发"></p>',30),l=[i];function u(r,d){return s(),a("div",null,l)}const m=n(c,[["render",u],["__file","08、完全注解开发.html.vue"]]);export{m as default};
