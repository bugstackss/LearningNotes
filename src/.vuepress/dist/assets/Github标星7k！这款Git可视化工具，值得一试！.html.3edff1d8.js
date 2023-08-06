import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as t,a as i}from"./app.9b10ba0a.js";const n="/assets/640-20230513235245618.976521ff.png",s="/assets/640-20230513235248677.92413a59.png",c={},d=i(`<p>作为一名程序员，在软件开发过程中，了解代码仓库的状态和信息是非常重要的。今天给大家介绍一款可视化的 Git 工具——Onefetch。Onefetch 是一个能够快速展示代码仓库信息的命令行工具，它使用 Rust 编写的，轻量且易于使用。</p><h2 id="项目介绍" tabindex="-1"><a class="header-anchor" href="#项目介绍" aria-hidden="true">#</a> 项目介绍</h2><p>Onefetch 可以识别当前目录中的许多版本控制系统，如 Git、Mercurial、Subversion 等，并显示相关信息，如当前分支、提交哈希、提交时间和作者。它还可以识别编程语言和框架，并显示它们的版本和图标。</p><p>除此之外，Onefetch 还支持多种自定义选项，比如可以显示图标、显示/隐藏某些信息、显示/隐藏标题等。</p><p>Onefetch 的最大优势在于它的轻量级和易用性，它可以很快地安装和使用。并且，Onefetch 的界面简洁明了，只需要在终端中输入命令就可以显示代码仓库的信息。这让开发人员可以快速了解代码仓库的状态，而无需打开 IDE 或者其他重量级的工具。</p><h2 id="项目安装" tabindex="-1"><a class="header-anchor" href="#项目安装" aria-hidden="true">#</a> 项目安装</h2><p>Onefetch 的安装也非常简单。如果是 Mac 用户，直接用 brew 命令安装即可：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> onefetch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果是 Windows 用户，则从项目主页直接下载最新的 exe 安装包安装即可：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>地址：https://github.com/o2sh/onefetch/releases/tag/2.16.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="项目使用" tabindex="-1"><a class="header-anchor" href="#项目使用" aria-hidden="true">#</a> 项目使用</h2><p>安装成功后，我们在命令行中切换到任意一个 git 项目的路径下，执行命令<code>onefetch</code>即可。</p><p>之后我们便可以看到该项目的详细信息啦，如图，我查看了 springboot 的 git 仓库信息：</p><p><img src="`+n+'" alt="图片"></p><p>可以看到，左侧是 JAVA 语言的图标，右侧是 git 仓库的信息，包含了分支数量、创建时间、语言分布占比、作者、仓库大小与代码行数等。</p><p>再换一个 C++ 的项目试试看，如图：</p><p><img src="'+s+`" alt="图片"></p><p>有意思的是，描述信息的标题文字的颜色，对应的是语言图标的主题颜色。</p><p>命令行也可以指定参数执行，比较常用的参数有以下这些：</p><ul><li><p><code>onefetch -d &lt;FIELD&gt;</code>：禁止显示的域，比如你不想展示作者信息，可以用<code>onefetch -d authors</code>命令</p></li><li><p><code>onefetch -o &lt;FIELD&gt;</code>：输出的格式，可以指定为 JSON 格式输出，比如<code>onefetch -o json</code></p></li><li><p><code>onefetch -E</code>：展示作者的 email 信息</p></li><li><p><code>onefetch -i</code>：指定展示图片的路径</p></li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>Onefetch 是一个简单、易用的命令行工具，能够快速展示代码仓库的状态和信息。它的轻量级和可定制性让开发人员可以更快地了解代码仓库的状态，而无需打开重量级的工具，所以赶快来尝试一下吧。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>项目地址：
https://github.com/o2sh/onefetch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,23),o=[d];function r(h,l){return a(),t("div",null,o)}const _=e(c,[["render",r],["__file","Github标星7k！这款Git可视化工具，值得一试！.html.vue"]]);export{_ as default};
