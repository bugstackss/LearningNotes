const e=JSON.parse('{"key":"v-2be62688","path":"/web/css/less/01%20%E3%80%90less%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0%E3%80%91.html","title":"Less预处理语言","lang":"zh-CN","frontmatter":{"title":"Less预处理语言","category":["css"],"tag":["css","less"],"sticky":false,"star":false,"article":true,"timeline":true,"description":"1.维护CSS的弊端 CSS 是一门非程序式语言，没有变量、函数、SCOPE（作用域）等概念。 CSS 需要书写大量看似没有逻辑的代码，CSS 冗余度是比较高的; 不方便维护及扩展，不利于复用; CSS 没有很好的计算能力; 非前端开发工程师来讲，往往会因为缺少 CSS 编写经验而很难写出组织良好且易于维护的 CSS 代码项目; 2.Less介绍 Le...","head":[["meta",{"property":"og:url","content":"https://Ragnarokoo.github.io/LearningNotes/web/css/less/01%20%E3%80%90less%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0%E3%80%91.html"}],["meta",{"property":"og:site_name","content":"📚全栈开发学习指南"}],["meta",{"property":"og:title","content":"Less预处理语言"}],["meta",{"property":"og:description","content":"1.维护CSS的弊端 CSS 是一门非程序式语言，没有变量、函数、SCOPE（作用域）等概念。 CSS 需要书写大量看似没有逻辑的代码，CSS 冗余度是比较高的; 不方便维护及扩展，不利于复用; CSS 没有很好的计算能力; 非前端开发工程师来讲，往往会因为缺少 CSS 编写经验而很难写出组织良好且易于维护的 CSS 代码项目; 2.Less介绍 Le..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://Ragnarokoo.github.io/LearningNotes/"}],["meta",{"property":"og:updated_time","content":"2023-05-31T09:16:41.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Less预处理语言"}],["meta",{"property":"article:tag","content":"css"}],["meta",{"property":"article:tag","content":"less"}],["meta",{"property":"article:modified_time","content":"2023-05-31T09:16:41.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1.维护CSS的弊端","slug":"_1-维护css的弊端","link":"#_1-维护css的弊端","children":[]},{"level":2,"title":"2.Less介绍","slug":"_2-less介绍","link":"#_2-less介绍","children":[]},{"level":2,"title":"3.Less安装（注意如果使用VSCode无需安装Less）","slug":"_3-less安装-注意如果使用vscode无需安装less","link":"#_3-less安装-注意如果使用vscode无需安装less","children":[]},{"level":2,"title":"4.注释(Comments)","slug":"_4-注释-comments","link":"#_4-注释-comments","children":[]},{"level":2,"title":"5.变量(Variables)","slug":"_5-变量-variables","link":"#_5-变量-variables","children":[{"level":3,"title":"5.1 变量命名规范","slug":"_5-1-变量命名规范","link":"#_5-1-变量命名规范","children":[]},{"level":3,"title":"5.2 基本使用","slug":"_5-2-基本使用","link":"#_5-2-基本使用","children":[]},{"level":3,"title":"5.3 变量插值(Variable Interpolation)","slug":"_5-3-变量插值-variable-interpolation","link":"#_5-3-变量插值-variable-interpolation","children":[]},{"level":3,"title":"5.4 延迟加载(Lazy Evaluation)","slug":"_5-4-延迟加载-lazy-evaluation","link":"#_5-4-延迟加载-lazy-evaluation","children":[]},{"level":3,"title":"5.5 属性名变量(Properties as Variables)","slug":"_5-5-属性名变量-properties-as-variables","link":"#_5-5-属性名变量-properties-as-variables","children":[]}]},{"level":2,"title":"6.嵌套(Nesting)","slug":"_6-嵌套-nesting","link":"#_6-嵌套-nesting","children":[{"level":3,"title":"6.1 基本使用","slug":"_6-1-基本使用","link":"#_6-1-基本使用","children":[]},{"level":3,"title":"6.2 父选择器 (Parent Selectors)","slug":"_6-2-父选择器-parent-selectors","link":"#_6-2-父选择器-parent-selectors","children":[]}]},{"level":2,"title":"7.混合(Mixins)","slug":"_7-混合-mixins","link":"#_7-混合-mixins","children":[{"level":3,"title":"7.1 普通混合","slug":"_7-1-普通混合","link":"#_7-1-普通混合","children":[]},{"level":3,"title":"7.2 带参数的混合(Parametric Mixins)","slug":"_7-2-带参数的混合-parametric-mixins","link":"#_7-2-带参数的混合-parametric-mixins","children":[]},{"level":3,"title":"7.3 命名参数","slug":"_7-3-命名参数","link":"#_7-3-命名参数","children":[]},{"level":3,"title":"7.4 @arguments 变量","slug":"_7-4-arguments-变量","link":"#_7-4-arguments-变量","children":[]},{"level":3,"title":"7.5 匹配模式(Pattern-matching)","slug":"_7-5-匹配模式-pattern-matching","link":"#_7-5-匹配模式-pattern-matching","children":[]},{"level":3,"title":"7.6 运算(Operations)","slug":"_7-6-运算-operations","link":"#_7-6-运算-operations","children":[]}]},{"level":2,"title":"8.继承(Extend)","slug":"_8-继承-extend","link":"#_8-继承-extend","children":[{"level":3,"title":"9.避免编译","slug":"_9-避免编译","link":"#_9-避免编译","children":[]}]},{"level":2,"title":"10.函数（Functions）","slug":"_10-函数-functions","link":"#_10-函数-functions","children":[]},{"level":2,"title":"11.导入（Importing）","slug":"_11-导入-importing","link":"#_11-导入-importing","children":[]},{"level":2,"title":"12.导出","slug":"_12-导出","link":"#_12-导出","children":[]}],"git":{"createdTime":1685524601000,"updatedTime":1685524601000,"contributors":[{"name":"kirito","email":"2724964601@qq.com","commits":1}]},"readingTime":{"minutes":8.21,"words":2462},"filePathRelative":"web/css/less/01 【less学习笔记】.md","localizedDate":"2023年5月31日"}');export{e as data};
