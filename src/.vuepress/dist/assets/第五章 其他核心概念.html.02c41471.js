import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as s,d as e,e as t,b as i,a as l,r as c}from"./app.9b10ba0a.js";const o={},d=l('<h2 id="_1、生命周期" tabindex="-1"><a class="header-anchor" href="#_1、生命周期" aria-hidden="true">#</a> 1、生命周期</h2><h3 id="_1作用" tabindex="-1"><a class="header-anchor" href="#_1作用" aria-hidden="true">#</a> ①作用</h3><p>为了让构建过程自动化完成，Maven 设定了三个生命周期，生命周期中的每一个环节对应构建过程中的一个操作。</p><h3 id="_2三个生命周期" tabindex="-1"><a class="header-anchor" href="#_2三个生命周期" aria-hidden="true">#</a> ②三个生命周期</h3><table><thead><tr><th style="text-align:center;">生命周期名称</th><th style="text-align:center;">作用</th><th style="text-align:center;">各个环节</th></tr></thead><tbody><tr><td style="text-align:center;">Clean</td><td style="text-align:center;">清理操作相关</td><td style="text-align:center;">pre-clean clean post-clean</td></tr><tr><td style="text-align:center;">Site</td><td style="text-align:center;">生成站点相关</td><td style="text-align:center;">pre-site site post-site deploy-site</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:center;">主要构建过程</td><td style="text-align:center;">validate generate-sources process-sources generate-resources process-resources 复制并处理资源文件，至目标目录，准备打包。 compile 编译项目 main 目录下的源代码。 process-classes generate-test-sources process-test-sources generate-test-resources process-test-resources 复制并处理资源文件，至目标测试目录。 test-compile 编译测试源代码。 process-test-classes test 使用合适的单元测试框架运行测试。这些测试代码不会被打包或部署。 prepare-package package 接受编译好的代码，打包成可发布的格式，如JAR。 pre-integration-test integration-test post-integration-test verify install将包安装至本地仓库，以让其它项目依赖。 deploy将最终的包复制到远程的仓库，以让其它开发人员共享；或者部署到服务器上运行（需借助插件，例如：cargo）。</td></tr></tbody></table><h3 id="_3特点" tabindex="-1"><a class="header-anchor" href="#_3特点" aria-hidden="true">#</a> ③特点</h3><ul><li>前面三个生命周期彼此是独立的。</li><li>在任何一个生命周期内部，执行任何一个具体环节的操作，都是从本周期最初的位置开始执行，直到指定的地方。（本节记住这句话就行了，其他的都不需要记）</li></ul><p>Maven 之所以这么设计其实就是为了提高构建过程的自动化程度：让使用者只关心最终要干的即可，过程中的各个环节是自动执行的。</p><h2 id="_2、插件和目标" tabindex="-1"><a class="header-anchor" href="#_2、插件和目标" aria-hidden="true">#</a> 2、插件和目标</h2><h3 id="_1插件" tabindex="-1"><a class="header-anchor" href="#_1插件" aria-hidden="true">#</a> ①插件</h3><p>Maven 的核心程序仅仅负责宏观调度，不做具体工作。具体工作都是由 Maven 插件完成的。例如：编译就是由 maven-compiler-plugin-3.1.jar 插件来执行的。</p><h3 id="_2目标" tabindex="-1"><a class="header-anchor" href="#_2目标" aria-hidden="true">#</a> ②目标</h3><p>一个插件可以对应多个目标，而每一个目标都和生命周期中的某一个环节对应。</p><p>Default 生命周期中有 compile 和 test-compile 两个和编译相关的环节，这两个环节对应 compile 和 test-compile 两个目标，而这两个目标都是由 maven-compiler-plugin-3.1.jar 插件来执行的。</p><h2 id="_3、仓库" tabindex="-1"><a class="header-anchor" href="#_3、仓库" aria-hidden="true">#</a> 3、仓库</h2><ul><li>本地仓库：在当前电脑上，为电脑上所有 Maven 工程服务</li><li>远程仓库：需要联网 <ul><li>局域网：我们自己搭建的 Maven 私服，例如使用 Nexus 技术。</li><li>Internet <ul><li>中央仓库</li><li>镜像仓库：内容和中央仓库保持一致，但是能够分担中央仓库的负载，同时让用户能够就近访问提高下载速度，例如：Nexus aliyun</li></ul></li></ul></li></ul><p>建议：不要中央仓库和阿里云镜像混用，否则 jar 包来源不纯，彼此冲突。</p>',17),h={href:"https://mvnrepository.com/",target:"_blank",rel:"noopener noreferrer"};function p(_,u){const a=c("ExternalLinkIcon");return n(),s("div",null,[d,e("p",null,[t("专门搜索 Maven 依赖信息的网站："),e("a",h,[t("https://mvnrepository.com/"),i(a)])])])}const m=r(o,[["render",p],["__file","第五章 其他核心概念.html.vue"]]);export{m as default};
