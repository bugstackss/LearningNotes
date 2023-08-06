import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as r,d as e,e as a,b as o,a as s,r as m}from"./app.9b10ba0a.js";const c="/assets/image-20230315224804089.1176e7da.png",d="/assets/image-20230315224842203.4fab3237.png",p="/assets/image-20230315224851195.dc1e658c.png",h="/assets/image-20230315224900567.5ae24c40.png",g="/assets/image-20230315224912930.5179c8a3.png",l="/assets/image-20230315224926588.af21acdb.png",_="/assets/image-20230315225029162.491e981e.png",b="/assets/image-20230315225114616.a9cddc6d.png",u="/assets/image-20230315225122967.5af8fa86.png",f="/assets/image-20230315225218012.4f40fe43.png",v="/assets/image-20230315225231217.9755da30.png",x="/assets/image-20230315225251120.34f45c69.png",y="/assets/image-20230315225301743.889b50db.png",z="/assets/image-20230315225315245.a8912410.png",I="/assets/image-20230315225324554.d1b35057.png",E="/assets/image-20230315225338613.326b4a7c.png",D="/assets/image-20230315225350031.e4f3bf86.png",k="/assets/image-20230315225448722.ee86251c.png",A="/assets/image-20230315225502829.f4bfa77a.png",M="/assets/image-20230315225515380.8149ba14.png",w="/assets/image-20230315225526757.32d8970d.png",j="/assets/image-20230315225538231.03f84581.png",W="/assets/image-20230315225554725.2d96c956.png",P="/assets/image-20230315225618303.972a4976.png",J="/assets/image-20230315225656929.dda1f9b2.png",N="/assets/image-20230315225710823.145d4fb2.png",S="/assets/image-20230315225720594.1d094468.png",V="/assets/image-20230315225739671.aa2c2ec5.png",B="/assets/image-20230315225752369.11d9c6a2.png",G="/assets/image-20230315225814764.f7fc9913.png",q="/assets/image-20230315225832619.4379c9ec.png",C="/assets/image-20230315225850271.540feba0.png",L="/assets/image-20230315225905876.cfecef35.png",T="/assets/image-20230315225915307.5f3402b3.png",Z="/assets/image-20230315225929594.a8928093.png",F="/assets/image-20230315225938350.f5ec850e.png",H="/assets/image-20230315225950550.87156151.png",K="/assets/image-20230315230002047.7cc157e1.png",O="/assets/image-20230315230015982.e5f087d6.png",Q="/assets/image-20230315230031373.11edd0f1.png",R="/assets/image-20230315230040551.bd93d7ff.png",U="/assets/image-20230315230056053.fa95e9d3.png",X="/assets/image-20230315230109725.435ca6c1.png",Y={},$=s('<h2 id="第一节-创建父工程" tabindex="-1"><a class="header-anchor" href="#第一节-创建父工程" aria-hidden="true">#</a> 第一节 创建父工程</h2><blockquote><p>TIP</p><p>各个 IDEA 不同版本在具体操作方面存在一定差异，这里我们以 2019.3.3 版本为例进行演示。其它版本大家灵活变通即可。</p><p><img src="'+c+'" alt="image-20230315224804089"></p></blockquote><h3 id="_1、创建-project" tabindex="-1"><a class="header-anchor" href="#_1、创建-project" aria-hidden="true">#</a> 1、创建 Project</h3><p><img src="'+d+'" alt="image-20230315224842203"></p><p><img src="'+p+'" alt="image-20230315224851195"></p><p><img src="'+h+'" alt="image-20230315224900567"></p><h3 id="_2、开启自动导入" tabindex="-1"><a class="header-anchor" href="#_2、开启自动导入" aria-hidden="true">#</a> 2、开启自动导入</h3><p>创建 Project 后，IDEA 会自动弹出下面提示，我们选择**『Enable Auto-Import』**，意思是启用自动导入。</p><p><img src="'+g+'" alt="image-20230315224912930"></p><p>这个自动导入<strong>一定要开启</strong>，因为 Project、Module 新创建或 pom.xml 每次修改时都应该让 IDEA 重新加载 Maven 信息。这对 Maven 目录结构认定、Java 源程序编译、依赖 jar 包的导入都有非常关键的影响。</p><p>另外也可以通过 IDEA 的 Settings 设置来开启：</p><p><img src="'+l+'" alt="image-20230315224926588"></p><hr><h2 id="第二节-配置maven信息" tabindex="-1"><a class="header-anchor" href="#第二节-配置maven信息" aria-hidden="true">#</a> 第二节 配置Maven信息</h2><p>每次创建 Project 后都需要设置 Maven 家目录位置，否则 IDEA 将使用内置的 Maven 核心程序（不稳定）并使用默认的本地仓库位置。这样一来，我们在命令行操作过程中已下载好的 jar 包就白下载了，默认的本地仓库通常在 C 盘，还影响系统运行。</p><p>配置之后，IDEA 会根据我们在这里指定的 Maven 家目录自动识别到我们在 settings.xml 配置文件中指定的本地仓库。</p><p><img src="'+_+'" alt="image-20230315225029162"></p><h2 id="第三节-创建java模块工程" tabindex="-1"><a class="header-anchor" href="#第三节-创建java模块工程" aria-hidden="true">#</a> 第三节 创建Java模块工程</h2><p><img src="'+b+'" alt="image-20230315225114616"></p><p><img src="'+u+`" alt="image-20230315225122967"></p><hr><h2 id="第四节-创建web模块工程" tabindex="-1"><a class="header-anchor" href="#第四节-创建web模块工程" aria-hidden="true">#</a> 第四节 创建Web模块工程</h2><h3 id="_1、创建模块" tabindex="-1"><a class="header-anchor" href="#_1、创建模块" aria-hidden="true">#</a> 1、创建模块</h3><p>按照前面的同样操作创建模块，<strong>此时</strong>这个模块其实还是一个<strong>Java模块</strong>。</p><h3 id="_2、修改打包方式" tabindex="-1"><a class="header-anchor" href="#_2、修改打包方式" aria-hidden="true">#</a> 2、修改打包方式</h3><p>Web 模块将来打包当然应该是 <strong>war</strong> 包。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>packaging</span><span class="token punctuation">&gt;</span></span>war<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>packaging</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3、web-设定" tabindex="-1"><a class="header-anchor" href="#_3、web-设定" aria-hidden="true">#</a> 3、Web 设定</h3><p>首先打开项目结构菜单：</p><img src="`+f+'" alt="image-20230315225218012" style="zoom:50%;"><p>然后到 Facets 下查看 IDEA 是否已经帮我们自动生成了 Web 设定。正常来说只要我们确实设置了打包方式为 war，那么 IDEA 2019 版就会自动生成 Web 设定。</p><img src="'+v+'" alt="image-20230315225231217" style="zoom:50%;"><p>另外，对于 IDEA 2018 诸版本没有自动生成 Web 设定，那么请参照下面两图，我们自己创建：</p><img src="'+x+'" alt="image-20230315225251120" style="zoom:50%;"><img src="'+y+'" alt="image-20230315225301743" style="zoom:50%;"><h3 id="_4、借助idea生成web-xml" tabindex="-1"><a class="header-anchor" href="#_4、借助idea生成web-xml" aria-hidden="true">#</a> 4、借助IDEA生成web.xml</h3><img src="'+z+'" alt="image-20230315225315245" style="zoom:50%;"><img src="'+I+'" alt="image-20230315225324554" style="zoom:50%;"><h3 id="_5、设置-web-资源的根目录" tabindex="-1"><a class="header-anchor" href="#_5、设置-web-资源的根目录" aria-hidden="true">#</a> 5、设置 Web 资源的根目录</h3><p>结合 Maven 的目录结构，Web 资源的根目录需要设置为 src/main/webapp 目录。</p><img src="'+E+'" alt="image-20230315225338613" style="zoom:50%;"><img src="'+D+'" alt="image-20230315225350031" style="zoom:50%;"><hr><h2 id="第五节-其他操作" tabindex="-1"><a class="header-anchor" href="#第五节-其他操作" aria-hidden="true">#</a> 第五节 其他操作</h2><h3 id="_1、在idea中执行maven命令" tabindex="-1"><a class="header-anchor" href="#_1、在idea中执行maven命令" aria-hidden="true">#</a> 1、在IDEA中执行Maven命令</h3><h4 id="_1直接执行" tabindex="-1"><a class="header-anchor" href="#_1直接执行" aria-hidden="true">#</a> ①直接执行</h4><img src="'+k+'" alt="image-20230315225448722" style="zoom:50%;"><h4 id="_2手动输入" tabindex="-1"><a class="header-anchor" href="#_2手动输入" aria-hidden="true">#</a> ②手动输入</h4><img src="'+A+'" alt="image-20230315225502829" style="zoom:50%;"><img src="'+M+'" alt="image-20230315225515380" style="zoom:50%;"><img src="'+w+'" alt="image-20230315225526757" style="zoom:50%;"><img src="'+j+'" alt="image-20230315225538231" style="zoom:50%;"><p>如果有需要，还可以给命令后面附加参数：</p><img src="'+W+`" alt="image-20230315225554725" style="zoom:50%;"><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># -D 表示后面要附加命令的参数，字母 D 和后面的参数是紧挨着的，中间没有任何其它字符</span>
<span class="token comment"># maven.test.skip=true 表示在执行命令的过程中跳过测试</span>
mvn clean <span class="token function">install</span> <span class="token parameter variable">-Dmaven.test.skip</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、在idea中查看某个模块的依赖信息" tabindex="-1"><a class="header-anchor" href="#_2、在idea中查看某个模块的依赖信息" aria-hidden="true">#</a> 2、在IDEA中查看某个模块的依赖信息</h3><img src="`+P+'" alt="image-20230315225618303" style="zoom:50%;"><h3 id="_3、工程导入" tabindex="-1"><a class="header-anchor" href="#_3、工程导入" aria-hidden="true">#</a> 3、工程导入</h3><p>Maven工程除了自己创建的，还有很多情况是别人创建的。而为了参与开发或者是参考学习，我们都需要导入到 IDEA 中。下面我们分几种不同情况来说明：</p><h4 id="_1来自版本控制系统" tabindex="-1"><a class="header-anchor" href="#_1来自版本控制系统" aria-hidden="true">#</a> ①来自版本控制系统</h4>',60),aa={href:"http://heavy_code_industry.gitee.io/code_heavy_industry/pro008-Git/lecture/chapter05/verse03.html",target:"_blank",rel:"noopener noreferrer"},ea=e("strong",null,"这里",-1),sa=e("strong",null,"克隆远程库",-1),ta=s('<h4 id="_2来自工程目录" tabindex="-1"><a class="header-anchor" href="#_2来自工程目录" aria-hidden="true">#</a> ②来自工程目录</h4><p>直接使用 IDEA 打开工程目录即可。下面咱们举个例子：</p><h5 id="_1-工程压缩包" tabindex="-1"><a class="header-anchor" href="#_1-工程压缩包" aria-hidden="true">#</a> [1]工程压缩包</h5><p>假设别人发给我们一个 Maven 工程的 zip 压缩包：maven-rest-demo.zip。从码云或GitHub上也可以以 ZIP 压缩格式对项目代码打包下载。</p><h5 id="_2-解压" tabindex="-1"><a class="header-anchor" href="#_2-解压" aria-hidden="true">#</a> [2]解压</h5><p>如果你的所有 IDEA 工程有一个专门的目录来存放，而不是散落各处，那么首先我们就把 ZIP 包解压到这个指定目录中。</p><img src="'+J+'" alt="image-20230315225656929" style="zoom:50%;"><h5 id="_3-打开" tabindex="-1"><a class="header-anchor" href="#_3-打开" aria-hidden="true">#</a> [3]打开</h5><p>只要我们确认在解压目录下可以直接看到 pom.xml，那就能证明这个解压目录就是我们的工程目录。那么接下来让 IDEA 打开这个目录就可以了。</p><img src="'+N+'" alt="image-20230315225710823" style="zoom:50%;"><img src="'+S+'" alt="image-20230315225720594" style="zoom:50%;"><h5 id="_4-设置-maven-核心程序位置" tabindex="-1"><a class="header-anchor" href="#_4-设置-maven-核心程序位置" aria-hidden="true">#</a> [4]设置 Maven 核心程序位置</h5><p>打开一个新的 Maven 工程，和新创建一个 Maven 工程是一样的，此时 IDEA 的 settings 配置中关于 Maven 仍然是默认值：</p><img src="'+V+'" alt="image-20230315225739671" style="zoom:50%;"><p>所以我们还是需要像新建 Maven 工程那样，指定一下 Maven 核心程序位置：</p><img src="'+B+'" alt="image-20230315225752369" style="zoom:50%;"><h3 id="_4、模块导入" tabindex="-1"><a class="header-anchor" href="#_4、模块导入" aria-hidden="true">#</a> 4、模块导入</h3><h4 id="_1情景重现" tabindex="-1"><a class="header-anchor" href="#_1情景重现" aria-hidden="true">#</a> ①情景重现</h4><p>在实际开发中，通常会忽略模块（也就是module）所在的项目（也就是project）仅仅导入某一个模块本身。这么做很可能是类似这样的情况：比如基于 Maven 学习 SSM 的时候，做练习需要导入老师发给我们的代码参考。</p><img src="'+G+'" alt="image-20230315225814764" style="zoom:50%;"><h4 id="_2导入-java-类型模块" tabindex="-1"><a class="header-anchor" href="#_2导入-java-类型模块" aria-hidden="true">#</a> ②导入 Java 类型模块</h4><h5 id="_1-找到老师发的工程目录" tabindex="-1"><a class="header-anchor" href="#_1-找到老师发的工程目录" aria-hidden="true">#</a> [1]找到老师发的工程目录</h5><img src="'+q+'" alt="image-20230315225832619" style="zoom:50%;"><h5 id="_2-复制我们想要导入的模块目录" tabindex="-1"><a class="header-anchor" href="#_2-复制我们想要导入的模块目录" aria-hidden="true">#</a> [2]复制我们想要导入的模块目录</h5><img src="'+C+'" alt="image-20230315225850271" style="zoom:50%;"><h5 id="_3-粘贴到我们自己工程目录下" tabindex="-1"><a class="header-anchor" href="#_3-粘贴到我们自己工程目录下" aria-hidden="true">#</a> [3]粘贴到我们自己工程目录下</h5><p>这个工程（project）是我们事先在 IDEA 中创建好的。</p><img src="'+L+'" alt="image-20230315225905876" style="zoom:50%;"><img src="'+T+'" alt="image-20230315225915307" style="zoom:50%;"><h5 id="_4-在-idea-中执行导入" tabindex="-1"><a class="header-anchor" href="#_4-在-idea-中执行导入" aria-hidden="true">#</a> [4]在 IDEA 中执行导入</h5><img src="'+Z+'" alt="image-20230315225929594" style="zoom:50%;"><img src="'+F+'" alt="image-20230315225938350" style="zoom:50%;"><img src="'+H+'" alt="image-20230315225950550" style="zoom:50%;"><img src="'+K+'" alt="image-20230315230002047" style="zoom:50%;"><img src="'+O+'" alt="image-20230315230015982" style="zoom:50%;"><h5 id="_5-修改-pom-xml" tabindex="-1"><a class="header-anchor" href="#_5-修改-pom-xml" aria-hidden="true">#</a> [5]修改 pom.xml</h5><p>刚刚导入的 module 的父工程坐标还是以前的，需要改成我们自己的 project。</p><img src="'+Q+'" alt="image-20230315230031373" style="zoom:50%;"><img src="'+R+'" alt="image-20230315230040551" style="zoom:50%;"><h5 id="_6-最终效果" tabindex="-1"><a class="header-anchor" href="#_6-最终效果" aria-hidden="true">#</a> [6]最终效果</h5><img src="'+U+'" alt="image-20230315230056053" style="zoom:50%;"><h4 id="_3导入-web-类型模块" tabindex="-1"><a class="header-anchor" href="#_3导入-web-类型模块" aria-hidden="true">#</a> ③导入 Web 类型模块</h4><p>其它操作和上面演示的都一样，只是多一步：删除多余的、不正确的 web.xml 设置。如下图所示：</p><img src="'+X+'" alt="image-20230315230109725" style="zoom:50%;">',44);function ia(na,ra){const t=m("ExternalLinkIcon");return n(),r("div",null,[$,e("p",null,[a("目前我们通常使用的都是 Git（本地库） + 码云（远程库）的版本控制系统，结合 IDEA 的相关操作方式请点"),e("a",aa,[ea,a(" (opens new window)"),o(t)]),a("查看"),sa,a("部分。")]),ta])}const ca=i(Y,[["render",ia],["__file","第四章 使用Maven：IDEA环境.html.vue"]]);export{ca as default};
