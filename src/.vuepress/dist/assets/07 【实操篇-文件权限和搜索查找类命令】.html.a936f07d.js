const e=JSON.parse('{"key":"v-1b95b800","path":"/notes/linux/07%20%E3%80%90%E5%AE%9E%E6%93%8D%E7%AF%87-%E6%96%87%E4%BB%B6%E6%9D%83%E9%99%90%E5%92%8C%E6%90%9C%E7%B4%A2%E6%9F%A5%E6%89%BE%E7%B1%BB%E5%91%BD%E4%BB%A4%E3%80%91.html","title":"七、实操篇-文件权限和搜索查找类命令","lang":"zh-CN","frontmatter":{"title":"七、实操篇-文件权限和搜索查找类命令","icon":"centos","category":["linux"],"tag":["linux","centos"],"sticky":false,"star":false,"article":true,"timeline":true,"description":"1.文件权限类 1.1 权限管理的重要性 和 Windows 系统不同，Linux 系统为每个文件都添加了很多的属性，最大的作用就是维护数据的安全。举个简单的例子，在你的 Linux 系统中，和系统服务相关的文件通常只有 root 用户才能读或写，就拿 /etc/shadow 这个文件来说，此文件记录了系统中所有用户的密码数据，非常重要，因此绝不能让任...","head":[["meta",{"property":"og:url","content":"https://Ragnarokoo.github.io/LearningNotes/notes/linux/07%20%E3%80%90%E5%AE%9E%E6%93%8D%E7%AF%87-%E6%96%87%E4%BB%B6%E6%9D%83%E9%99%90%E5%92%8C%E6%90%9C%E7%B4%A2%E6%9F%A5%E6%89%BE%E7%B1%BB%E5%91%BD%E4%BB%A4%E3%80%91.html"}],["meta",{"property":"og:site_name","content":"📚全栈开发学习指南"}],["meta",{"property":"og:title","content":"七、实操篇-文件权限和搜索查找类命令"}],["meta",{"property":"og:description","content":"1.文件权限类 1.1 权限管理的重要性 和 Windows 系统不同，Linux 系统为每个文件都添加了很多的属性，最大的作用就是维护数据的安全。举个简单的例子，在你的 Linux 系统中，和系统服务相关的文件通常只有 root 用户才能读或写，就拿 /etc/shadow 这个文件来说，此文件记录了系统中所有用户的密码数据，非常重要，因此绝不能让任..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://Ragnarokoo.github.io/LearningNotes/"}],["meta",{"property":"og:updated_time","content":"2023-05-31T09:16:41.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"七、实操篇-文件权限和搜索查找类命令"}],["meta",{"property":"article:tag","content":"linux"}],["meta",{"property":"article:tag","content":"centos"}],["meta",{"property":"article:modified_time","content":"2023-05-31T09:16:41.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1.文件权限类","slug":"_1-文件权限类","link":"#_1-文件权限类","children":[{"level":3,"title":"1.1 权限管理的重要性","slug":"_1-1-权限管理的重要性","link":"#_1-1-权限管理的重要性","children":[]},{"level":3,"title":"1.2 权限位","slug":"_1-2-权限位","link":"#_1-2-权限位","children":[]},{"level":3,"title":"1.3 读写执行权限（-r、-w、-x）的含义","slug":"_1-3-读写执行权限-r、-w、-x-的含义","link":"#_1-3-读写执行权限-r、-w、-x-的含义","children":[]},{"level":3,"title":"1.4 chmod 改变权限","slug":"_1-4-chmod-改变权限","link":"#_1-4-chmod-改变权限","children":[]},{"level":3,"title":"1.5 chown 改变所有者和所属组","slug":"_1-5-chown-改变所有者和所属组","link":"#_1-5-chown-改变所有者和所属组","children":[]},{"level":3,"title":"1.6 chgrp 改变所属组","slug":"_1-6-chgrp-改变所属组","link":"#_1-6-chgrp-改变所属组","children":[]}]},{"level":2,"title":"2.搜索查找类","slug":"_2-搜索查找类","link":"#_2-搜索查找类","children":[{"level":3,"title":"2.1 find 查找文件或者目录","slug":"_2-1-find-查找文件或者目录","link":"#_2-1-find-查找文件或者目录","children":[]},{"level":3,"title":"2.2 locate 快速定位文件路径","slug":"_2-2-locate-快速定位文件路径","link":"#_2-2-locate-快速定位文件路径","children":[]},{"level":3,"title":"2.3 grep 过滤查找","slug":"_2-3-grep-过滤查找","link":"#_2-3-grep-过滤查找","children":[]},{"level":3,"title":"2.4 “|”管道符","slug":"_2-4-管道符","link":"#_2-4-管道符","children":[]},{"level":3,"title":"2.5 wc 计算字数","slug":"_2-5-wc-计算字数","link":"#_2-5-wc-计算字数","children":[]}]}],"git":{"createdTime":1685524601000,"updatedTime":1685524601000,"contributors":[{"name":"kirito","email":"2724964601@qq.com","commits":1}]},"readingTime":{"minutes":18.38,"words":5514},"filePathRelative":"notes/linux/07 【实操篇-文件权限和搜索查找类命令】.md","localizedDate":"2023年5月31日"}');export{e as data};
