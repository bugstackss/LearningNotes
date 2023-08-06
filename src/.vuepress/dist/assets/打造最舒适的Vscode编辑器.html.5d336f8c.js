import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as a,a as t}from"./app.9b10ba0a.js";const o={},e=t(`<h2 id="vscode配置setting-json文件" tabindex="-1"><a class="header-anchor" href="#vscode配置setting-json文件" aria-hidden="true">#</a> Vscode配置setting.json文件</h2><p>俗话说的好，工欲善其事，必先利其器。想要优雅且高效的编写代码，必须熟练使用一款前端开发工具。但前端开发工具数不胜数，像HBuilder、Sublime Text、WebStorm、Visual Studio Code......等等,其中VSCode以其轻量且强大的代码编辑功能和丰富的插件生态系统，独受前端工师的青睐。网上有很多vscode的配置以及使用博客，但都没有本篇那么详细且全面。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;search.followSymlinks&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;window.zoomLevel&quot;</span><span class="token operator">:</span> <span class="token number">0.3</span><span class="token punctuation">,</span>
    <span class="token comment">// #每次保存的时候将代码按eslint格式进行修复</span>
    <span class="token property">&quot;eslint.autoFixOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;javascript.format.insertSpaceBeforeFunctionParenthesis&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;emmet.syntaxProfiles&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;javascript&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jsx&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;vue-html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.tabSize&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token property">&quot;files.associations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;*.vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;*.js&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascriptreact&quot;</span> <span class="token comment">//使得js默认使用react图标</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;eslint.options&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;extensions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;.js&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;.vue&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;search.exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;**/node_modules&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;**/bower_components&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;**/dist&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;git.confirmSync&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;javascript.implicitProjectConfig.experimentalDecorators&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.cursorBlinking&quot;</span><span class="token operator">:</span> <span class="token string">&quot;smooth&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.minimap.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.minimap.renderCharacters&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;window.title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\${dirty}\${activeEditorMedium}\${separator}\${rootName}&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.codeLens&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.snippetSuggestions&quot;</span><span class="token operator">:</span> <span class="token string">&quot;top&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.fontWeight&quot;</span><span class="token operator">:</span> <span class="token string">&quot;normal&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.fontSize&quot;</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.rulers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token comment">//代码长度</span>
        <span class="token number">120</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//主题</span>
    <span class="token property">&quot;workbench.iconTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode-icons&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;terminal.integrated.rendererType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dom&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;liveServer.settings.donotShowInfoMsg&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.codeActionsOnSave&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;source.fixAll.eslint&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;git.autofetch&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;git.enableSmartCommit&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//图标</span>
    <span class="token comment">// 左侧不折叠的标签，其余标签会折叠</span>
    <span class="token property">&quot;volar.splitEditors.layout.left&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;template&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;script&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;scriptSetup&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// 右侧不折叠的标签，其余标签会折叠</span>
    <span class="token property">&quot;volar.splitEditors.layout.right&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;styles&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;customBlocks&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;volar.autoCompleteRefs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// #这个按用户自身习惯选择 ， html 使用 beautify</span>
    <span class="token property">&quot;vetur.format.defaultFormatter.html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;js-beautify-html&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// &quot;javascript.format.insertSpaceBeforeFunctionParenthesis&quot;: true,</span>
    <span class="token comment">// 设置下面这组会执行prettier格式</span>
    <span class="token comment">// &quot;vetur.format.defaultFormatter.html&quot;: &quot;prettyhtml&quot;,</span>
    <span class="token property">&quot;vetur.format.defaultFormatter.css&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span> <span class="token comment">//  css</span>
    <span class="token property">&quot;vetur.format.defaultFormatter.postcss&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span> <span class="token comment">// postcss</span>
    <span class="token property">&quot;vetur.format.defaultFormatter.scss&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span> <span class="token comment">// scss</span>
    <span class="token property">&quot;vetur.format.defaultFormatter.less&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span> <span class="token comment">// less</span>
    <span class="token property">&quot;vetur.format.defaultFormatter.stylus&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stylus-supremacy&quot;</span><span class="token punctuation">,</span> <span class="token comment">//stylus</span>
    <span class="token property">&quot;vetur.format.defaultFormatter.ts&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span> <span class="token comment">// ts</span>
    <span class="token property">&quot;vetur.format.defaultFormatter.sass&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sass-formatter&quot;</span><span class="token punctuation">,</span> <span class="token comment">// sass</span>
    <span class="token property">&quot;vetur.validation.template&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//vscode中关于vue的一个语法检查插件，v-for的错可以解决</span>
    <span class="token property">&quot;vetur.format.defaultFormatterOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;wrap_attributes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;force-aligned&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;js-beautify-html&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">// - auto: 仅在超出行长度时才对属性进行换行。</span>
            <span class="token comment">// - force: 对除第一个属性外的其他每个属性进行换行。</span>
            <span class="token comment">// - force-aligned: 对除第一个属性外的其他每个属性进行换行，并保持对齐。</span>
            <span class="token comment">// - force-expand-multiline: 对每个属性进行换行。</span>
            <span class="token comment">// - aligned-multiple: 当超出折行长度时，将属性进行垂直对齐。</span>
            <span class="token property">&quot;wrap_attributes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;force-aligned&quot;</span>
            <span class="token comment">// #vue组件中html代码格式化样式,可选</span>
            <span class="token comment">// &quot;wrap_line_length&quot;: 200,</span>
            <span class="token comment">// &quot;end_with_newline&quot;: false,</span>
            <span class="token comment">// &quot;semi&quot;: true,</span>
            <span class="token comment">// &quot;singleQuote&quot;: true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;prettier&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token comment">//设置分号</span>
            <span class="token property">&quot;semi&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token comment">//双引号变成单引号</span>
            <span class="token property">&quot;singleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token comment">//禁止随时添加逗号,这个很重要。找了好久</span>
            <span class="token property">&quot;trailingComma&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;[jsonc]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode.json-language-features&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;[javascript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode.typescript-language-features&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;[javascriptreact]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode.typescript-language-features&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.formatOnPaste&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.unicodeHighlight.allowedLocales&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;zh-hant&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;[typescript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;[json]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;HookyQR.beautify&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// prettier配置</span>
    <span class="token property">&quot;prettier.printWidth&quot;</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span> <span class="token comment">// 超过最大值换行</span>
    <span class="token property">&quot;prettier.tabWidth&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token comment">// 缩进字节数</span>
    <span class="token property">&quot;prettier.useTabs&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 缩进不使用tab，使用空格</span>
    <span class="token property">&quot;prettier.semi&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 句尾添加分号</span>
    <span class="token property">&quot;prettier.singleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 使用单引号代替双引号</span>
    <span class="token property">&quot;prettier.proseWrap&quot;</span><span class="token operator">:</span> <span class="token string">&quot;preserve&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行</span>
    <span class="token property">&quot;prettier.arrowParens&quot;</span><span class="token operator">:</span> <span class="token string">&quot;avoid&quot;</span><span class="token punctuation">,</span> <span class="token comment">// (x) =&gt; {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号</span>
    <span class="token property">&quot;prettier.bracketSpacing&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 在对象，数组括号与文字之间加空格 &quot;{ foo: bar }&quot;</span>
    <span class="token property">&quot;prettier.endOfLine&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 结尾是 \\n \\r \\n\\r auto</span>
    <span class="token property">&quot;prettier.eslintIntegration&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//不让prettier使用eslint的代码格式进行校验</span>
    <span class="token property">&quot;prettier.htmlWhitespaceSensitivity&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ignore&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;prettier.ignorePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.prettierignore&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 不使用prettier格式化的文件填写在项目的.prettierignore文件中</span>
    <span class="token property">&quot;prettier.jsxBracketSameLine&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 在jsx中把&#39;&gt;&#39; 单独放一行</span>
    <span class="token property">&quot;prettier.jsxSingleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 在jsx中使用单引号代替双引号</span>
    <span class="token property">&quot;prettier.parser&quot;</span><span class="token operator">:</span> <span class="token string">&quot;babylon&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 格式化的解析器，默认是babylon</span>
    <span class="token property">&quot;prettier.requireConfig&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// Require a &#39;prettierconfig&#39; to format prettier</span>
    <span class="token property">&quot;prettier.stylelintIntegration&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//不让prettier使用stylelint的代码格式进行校验</span>
    <span class="token property">&quot;prettier.trailingComma&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es5&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）</span>
    <span class="token property">&quot;prettier.tslintIntegration&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 不让prettier使用tslint的代码格式进行校验</span>
    <span class="token property">&quot;trailingComma&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 函数最后不需要逗号</span>
    <span class="token property">&quot;editor.detectIndentation&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.insertSpaces&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;[vue]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vue3snippets.tabWidth&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vue3snippets.semi&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vue3snippets.useTabs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vue3snippets.trailingComma&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span> <span class="token comment">//  prettier-在对象，数组括号与文字之间加空格 &quot;{ foo: bar }&quot;</span>
    <span class="token comment">// #让vue中的js按&quot;prettier&quot;格式进行格式化</span>
    <span class="token property">&quot;vetur.format.defaultFormatter.js&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;[html]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;[css]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;search.collapseResults&quot;</span><span class="token operator">:</span> <span class="token string">&quot;auto&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;bracket-pair-colorizer-2.depreciation-notice&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;[markdown]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;editor.unicodeHighlight.ambiguousCharacters&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;editor.unicodeHighlight.invisibleCharacters&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;diffEditor.ignoreTrimWhitespace&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        <span class="token property">&quot;editor.wordWrap&quot;</span><span class="token operator">:</span> <span class="token string">&quot;on&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;editor.quickSuggestions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;comments&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;strings&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;other&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;cSpell.fixSpellingWithRenameProvider&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;cSpell.advanced.feature.useReferenceProviderWithRename&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;cSpell.advanced.feature.useReferenceProviderRemove&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/^#+\\\\s/&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;redhat.telemetry.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// sass配置</span>
    <span class="token property">&quot;liveSassCompile.settings.formats&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token comment">/*
                    :nested:嵌套风格
                    :expanded:展开格式
                    :compact:紧凑格式
                    :compressed:压缩格式
            */</span>
            <span class="token property">&quot;format&quot;</span><span class="token operator">:</span> <span class="token string">&quot;expanded&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 可定制的出口css样式（expanded，compact，compressed，nested）</span>
            <span class="token property">&quot;extensionName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.css&quot;</span><span class="token punctuation">,</span> 
            <span class="token property">&quot;savePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;~/../css/&quot;</span>  <span class="token comment">// 为null表示当前目录</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">/* 是否生成对应的map   */</span>
    <span class="token property">&quot;liveSassCompile.settings.generateMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">/* 是否添加兼容前缀 例如：-webkit- -moz-  ...等*/</span>
    <span class="token property">&quot;liveSassCompile.settings.autoprefix&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;ie &gt;= 6&quot;</span><span class="token punctuation">,</span> <span class="token comment">//ie6以上</span>
        <span class="token string">&quot;firefox &gt;= 8&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;chrome &gt;= 24&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;Opera&gt;=10&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">/* 排除目录 */</span>
    <span class="token property">&quot;liveSassCompile.settings.excludeList&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;/**/node_modules/**&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;/.vscode/**&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;[sass]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;michelemelluso.code-beautifier&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.bracketPairColorization.independentColorPoolPerBracketType&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tabnine.experimentalAutoImports&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;security.workspace.trust.untrustedFiles&quot;</span><span class="token operator">:</span> <span class="token string">&quot;open&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Codegeex.Privacy&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vscode插件" tabindex="-1"><a class="header-anchor" href="#vscode插件" aria-hidden="true">#</a> vscode插件</h2><ul><li>Vibrancy Continued + Fix VSCode Checksums（重点推荐）</li></ul>`,5),p=[e];function l(c,r){return n(),a("div",null,p)}const k=s(o,[["render",l],["__file","打造最舒适的Vscode编辑器.html.vue"]]);export{k as default};
