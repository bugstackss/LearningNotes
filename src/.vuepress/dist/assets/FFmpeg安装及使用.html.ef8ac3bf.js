import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as l,d as i,e,b as s,a,r}from"./app.9b10ba0a.js";const p={},v=a(`<h2 id="一、安装" tabindex="-1"><a class="header-anchor" href="#一、安装" aria-hidden="true">#</a> 一、安装</h2><p><strong>1、若没有安装brew指令，打开终端，安装homebrew</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/bin/zsh -c &quot;$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>敲击完毕后输入 1</p><p>若无法成功，可再次输入命令重试</p><p>安装成功后重新启动</p><p><strong>2、安装ffmpeg，打开终端输入</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>brew install ffmpeg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),m={href:"https://so.csdn.net/so/search?q=brew&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},u=a(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git config --global --add safe.directory /opt/homebrew/Library/Taps/homebrew/homebrew-cask Homebrew/homebrew-cask

git config --global --add safe.directory /opt/homebrew/Library/Taps/homebrew/homebrew-core Homebrew/homebrew-core
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3、若没有报错，输入指令查看是否安装成功</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ffmpeg -version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),c={id:"二、ffmpeg参数",tabindex:"-1"},o=i("a",{class:"header-anchor",href:"#二、ffmpeg参数","aria-hidden":"true"},"#",-1),g={href:"https://so.csdn.net/so/search?q=ffmpeg&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"},b=a(`<p><strong>常用参数</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-c：      指定编码器
-c copy： 直接复制，不经过重新编码（这样比较快）  eg： ffmpeg -i input.mp4 -c copy output.webm 
          将视频从一种容器转到另一个容器
-f：      强制设定文件格式，需使用能力集列表中的名称（缺省是根据扩展名选择的）
-c:v：    指定视频编码器  eg:  ffmpeg -i [input.file] -c:v libx265 output.mp4  转成 H.265 
          编码
-c:a：    指定音频编码器  
-i：      指定输入文件  eg： ffmpeg -i input.mp4 查看文件信息
-an：     去除音频流
-vn：     去除视频流   eg: $ ffmpeg -i input.mp4 -vn -c:a copy output.aac 从视频中提取音频；- 
          vn去掉视频，-c:a copy表示不改变音频编码，直接拷贝。
-preset： 指定输出的视频质量，会影响文件的生成速度，有以下几个可用的值 ultrafast, superfast, 
          veryfast, faster, fast, medium, slow, slower, veryslow。
-y：      不经过确认，输出时直接覆盖同名文件。
-vf scale=480*360   改变分辨率  eg:ffmpeg -i input.mp4 -vf scale=320*240 output.mp4
-s        设置视频分辨率 eg:ffmpeg -i input,mp4 -s 320x240 output.mp4
-vframes 1 指定只截取一帧  
-q:v      2表示输出的图片质量，一般为1到5(1代表质量最高)
-ss       开始时间
-t        持续时间
-to       结束时间
-loop 1   表示图片无限循环
-shortest 音频文件结束，输出视频就结束
-r fps    设置帧率 eg: ffmpeg -i input.mp4 -r 24 output.mp4 设置帧率为24
-b        设置码率 eg: ffmpeg -i input.avi -b 1.5M output.mp4
-b:a      音频 -b:v 视频
-fs       (file size首字母缩写)控制输出文件大小 eg: ffmpeg -i input.avi -fs 1024K output.mp4
-ar        指定音频采样率 比如48000
-channels  指定音频通道数 比如双通道为2
-profile:a 指定音频编码格式 比如AAC_LC
-ss        开始时间
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>视频参数</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-b 设定视频流量(码率)，默认为200Kbit/s 
-r 设定帧速率，默认为25 
-s 设定画面的宽与高 
-aspect 设定画面的比例 
-vn 不处理视频 
-vcodec 设定视频编解码器，未设定时则使用与输入流相同的编解码器 
-g gop_size 设置图像组大小 这里设置GOP大小，也表示两个I帧之间的间隔
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>音频参数</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-ar 设定采样率 
-ac 设定声音的Channel数 
-acodec 设定声音编解码器，未设定时则使用与输入流相同的编解码器 
-an 不处理音频
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>能力集列表</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-formats：列出支持的文件格式。

-codecs：列出支持的编解码器。

-decoders：列出支持的解码器。

-encoders：列出支持的编码器。

-protocols：列出支持的协议。

-bsfs：列出支持的比特流过滤器。

-filters：列出支持的滤镜。

-pix_fmts：列出支持的图像采样格式。

-sample_fmts：列出支持的声音采样格式。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、ffmpeg用例" tabindex="-1"><a class="header-anchor" href="#三、ffmpeg用例" aria-hidden="true">#</a> 三、ffmpeg用例</h2><p><strong>1、视频格式转换</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ffmpeg -i input.avi output.mp4
ffmpeg -i input.mp4 output.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.提取音频</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ffmpeg -i 晓松奇谈.mp4 -acodec aac -vn output.aac
# (-vn 不处理视频 )
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3.提取视频</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ffmpeg -i input.mp4 -vcodec copy -an output.mp4
# -an 不处理音频
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4.视频剪切</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 下面的命令，就可以从时间为00:00:15开始，截取5秒钟的视频。
ffmpeg -ss 00:00:15 -t 00:00:05 -i input.mp4 -vcodec copy -acodec copy output.mp4
# -ss表示开始切割的时间，-t表示要切多少。上面就是从开始，切5秒钟出来。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5.码率控制(文件可变小)</strong><br> 码率控制对于在线视频比较重要。因为在线视频需要考虑其能提供的带宽。</p><p>那么，什么是码率？很简单： bitrate = file size / duration</p><p>比如一个文件20.8M，时长1分钟，那么，码率就是：<br> biterate = 20.8M bit/60s = 20.8_1024_1024*8 bit/60s= 2831Kbps<br> 一般音频的码率只有固定几种，比如是128Kbps， 那么，video的就是<br> video biterate = 2831Kbps -128Kbps = 2703Kbps。</p><p>说完背景了。好了，来说ffmpeg如何控制码率。 ffmpg控制码率有3种选择，-minrate -b:v -maxrate</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># -b:v主要是控制平均码率。 比如一个视频源的码率太高了，有10Mbps，文件太大，想把文件弄小一点，但是又不破坏分辨率。 
ffmpeg -i input.mp4 -b:v 2000k output.mp4
# 上面把码率从原码率转成2Mbps码率，这样其实也间接让文件变小了。目测接近一半。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 不过，ffmpeg官方wiki比较建议，设置b:v时，同时加上 -bufsize
# -bufsize 用于设置码率控制缓冲器的大小，设置的好处是，让整体的码率更趋近于希望的值，减少波动。
#（简单来说，比如1 2的平均值是1.5， 1.49 1.51 也是1.5, 当然是第二种比较好） 
ffmpeg -i input.mp4 -b:v 2000k -bufsize 2000k output.mp4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># -minrate -maxrate就简单了，在线视频有时候，希望码率波动，不要超过一个阈值，可以设置maxrate。
ffmpeg -i input.mp4 -b:v 2000k -bufsize 2000k -maxrate 2500k output.mp4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6.视频编码格式转换</strong><br> 比如一个视频的编码是MPEG4，想用H264编码，咋办？</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ffmpeg -i input.mp4 -vcodec h264 output.mp4
ffmpeg -i input.mp4 -vcodec mpeg4 output.mp4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>7.将输入的1920x1080缩小到960x540输出</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ffmpeg -i input.mp4 -vf scale=960:540 output.mp4
# ps: 如果540不写，写成-1，即scale=960:-1, 那也是可以的，ffmpeg会通知缩放滤镜在输出时保持原始的宽高比。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>8.为视频添加logo / 水印</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>左上角：ffmpeg -i output.mp4 -i pptv.png -filter_complex overlay output3.mp4
右上角：ffmpeg -i output.mp4 -i pptv.png -filter_complex overlay=W-w output4.mp4
左下角：ffmpeg -i output.mp4 -i pptv.png -filter_complex overlay=0:H-h output5.mp4
右下角：ffmpeg -i output.mp4 -i pptv.png -filter_complex overlay=W-w:H-h output6.mp4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>9.为视频去除 logo / 水印</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># ffmpeg -i 原始视频文件 -vf delogo=x:y:w:h 处理后视频文件，x,y为距左上角坐标，w,h为水印的宽度和高度
ffmpeg -i origin.mp4 -vf delogo=1000:32:260:86 output.mp4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>10.抓取视频的一些帧，存为jpeg图片</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ffmpeg -i input.mp4 -r 1 -q:v 2 -f image2 pic-%03d.jpeg
 
-r 表示每一秒几帧
-q:v表示存储jpeg的图像质量，一般2是高质量。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如此，ffmpeg会把input.mp4，每隔一秒，存一张图片下来。假设有60s，那会有60张。60张？什么？这么多？不要不要。。。。。不要咋办？？ 可以设置开始的时间，和你想要截取的时间呀</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ffmpeg -i input.mp4 -ss 00:00:20 -t 10 -r 1 -q:v 2 -f image2 pic-%03d.jpeg
 
-ss 表示开始时间
-t表示共要多少时间。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如此，ffmpeg会从input.mp4的第20s时间开始，往下10s，即20~30s这10秒钟之间，每隔1s就抓一帧，总共会抓10帧。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 从一个视频文件中抽取一帧图像：
ffmpeg -y -i test.mp4 -ss 00:03:22.000 -vframes 1 -an test.jpg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>11.将图片序列合成视频 | 将视频分解成图片序列</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ffmpeg -f image2 -i image%d.jpg video.mpg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的命令会把当前目录下的图片（名字如：image1.jpg. image2.jpg. 等…）合并成video.mpg</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ffmpeg -i video.mpg image%d.jpg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的命令会生成image1.jpg. image2.jpg. …</p><p>支持的图片格式有：<strong>PGM. PPM. PAM. PGMYUV. JPEG. GIF. PNG. TIFF. SGI</strong></p><p><strong>12.视频压缩：H264编码profile &amp; level控制</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ffmpeg -i input.mp4 -profile:v baseline -level 3.0 output.mp4
ffmpeg -i input.mp4 -profile:v main -level 4.2 output.mp4
ffmpeg -i input.mp4 -profile:v high -level 5.1 output.mp4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果ffmpeg编译时加了external的libx264，那就这么写：<br> ffmpeg -i input.mp4 -c:v libx264 -x264-params “profile=high:level=3.0” output.mp4<br> 从压缩比例来说，baseline&lt; main &lt; high，对于带宽比较局限的在线视频，可能会选择high，但有些时候，做个小视频，希望所有的设备基本都能解码（有些低端设备或早期的设备只能解码baseline），那就牺牲文件大小吧，用baseline。自己取舍吧！</p><p><strong>13. 旋转视频</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在手机上录的视频，在电脑放，是颠倒的，需要旋转90度。使用格式工厂失败了
使用ffmpeg -i 3.mp4 -vf rotate=PI/2 rotate8.mp4画面确实旋转过来了
但是尺寸不对，变成横屏后，两侧的画面看不到了
改用ffmpeg -i 3.mp4 -vf transpose=1 rotate8.mp4解决了问题
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>14.视频合成</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ffmpeg -i &quot;concat:input1.mpg|input2.mpg|input3.mpg&quot; -c copy output.mpg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对于非 MPEG 格式容器，但是是 MPEG 编码器（H.264、DivX、XviD、MPEG4、MPEG2、AAC、MP2、MP3 等），可以包装进 TS 格式的容器再合并。在新浪视频，有很多视频使用 H.264 编码器，可以采用这个方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ffmpeg -i input1.flv -c copy -bsf:v h264_mp4toannexb -f mpegts input1.ts
 
ffmpeg -i input2.flv -c copy -bsf:v h264_mp4toannexb -f mpegts input2.ts
 
ffmpeg -i input3.flv -c copy -bsf:v h264_mp4toannexb -f mpegts input3.ts
 
ffmpeg -i &quot;concat:input1.ts|input2.ts|input3.ts&quot; -c copy -bsf:a aac_adtstoasc -movflags +faststart output.mp4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>15.其他用例</strong></p><p>将4个视频拼接成一个很长的视频</p><p>横向拼接2个视频</p><p>查看视频总帧数</p><p>图片转视频</p><p>图片格式转换</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>https://blog.csdn.net/m0_37605642/article/details/121566820?spm=1001.2101.3001.6661.1&amp;utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-121566820-blog-123057086.pc_relevant_default&amp;depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-121566820-blog-123057086.pc_relevant_default&amp;utm_relevant_index=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="采纳学习" tabindex="-1"><a class="header-anchor" href="#采纳学习" aria-hidden="true">#</a> 采纳学习</h2>`,61),f={href:"https://blog.csdn.net/JineD/article/details/123057086",target:"_blank",rel:"noopener noreferrer"};function x(h,_){const n=r("ExternalLinkIcon");return t(),l("div",null,[v,i("p",null,[e("若报错Command failed with exit 128:git的话，输入"),i("a",m,[e("brew"),s(n)]),e(" -v后会提示你执行两个配置命令，直接复制执行就ok了！")]),u,i("h2",c,[o,e(" 二、"),i("a",g,[e("ffmpeg"),s(n)]),e("参数")]),b,i("p",null,[i("a",f,[e("https://blog.csdn.net/JineD/article/details/123057086"),s(n)])])])}const k=d(p,[["render",x],["__file","FFmpeg安装及使用.html.vue"]]);export{k as default};
