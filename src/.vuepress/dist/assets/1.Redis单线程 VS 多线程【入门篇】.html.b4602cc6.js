const e=JSON.parse('{"key":"v-188ca36f","path":"/notes/db/redis_pro/1.Redis%E5%8D%95%E7%BA%BF%E7%A8%8B%20VS%20%E5%A4%9A%E7%BA%BF%E7%A8%8B%E3%80%90%E5%85%A5%E9%97%A8%E7%AF%87%E3%80%91.html","title":"一、Redis单线程 VS 多线程【入门篇】","lang":"zh-CN","frontmatter":{"title":"一、Redis单线程 VS 多线程【入门篇】","category":["redis"],"tag":["redis","NOSQL","K,V缓存数据库","非关系型数据库"],"sticky":false,"star":false,"article":true,"timeline":true,"description":"首课重要，后续深度讲解，避免晕菜，先预习混个耳熟 01、面试题 redis到底是单线程还是多线程？; IO多路复用听说过吗？; redis为什么快？; 02、Redis为什么选择单线程？ 是什么？ 这种问法其实并不严谨，为啥这么说呢? Redis的版本很多3.x、4.x、6.x，版本不同架构也是不同的，不限定版本问是否单线程也不太严谨。 1 版本3.x...","head":[["meta",{"property":"og:url","content":"https://Ragnarokoo.github.io/LearningNotes/notes/db/redis_pro/1.Redis%E5%8D%95%E7%BA%BF%E7%A8%8B%20VS%20%E5%A4%9A%E7%BA%BF%E7%A8%8B%E3%80%90%E5%85%A5%E9%97%A8%E7%AF%87%E3%80%91.html"}],["meta",{"property":"og:site_name","content":"📚全栈开发学习指南"}],["meta",{"property":"og:title","content":"一、Redis单线程 VS 多线程【入门篇】"}],["meta",{"property":"og:description","content":"首课重要，后续深度讲解，避免晕菜，先预习混个耳熟 01、面试题 redis到底是单线程还是多线程？; IO多路复用听说过吗？; redis为什么快？; 02、Redis为什么选择单线程？ 是什么？ 这种问法其实并不严谨，为啥这么说呢? Redis的版本很多3.x、4.x、6.x，版本不同架构也是不同的，不限定版本问是否单线程也不太严谨。 1 版本3.x..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://Ragnarokoo.github.io/LearningNotes/"}],["meta",{"property":"og:updated_time","content":"2023-05-31T09:16:41.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"一、Redis单线程 VS 多线程【入门篇】"}],["meta",{"property":"article:tag","content":"redis"}],["meta",{"property":"article:tag","content":"NOSQL"}],["meta",{"property":"article:tag","content":"K,V缓存数据库"}],["meta",{"property":"article:tag","content":"非关系型数据库"}],["meta",{"property":"article:modified_time","content":"2023-05-31T09:16:41.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"01、面试题","slug":"_01、面试题","link":"#_01、面试题","children":[]},{"level":2,"title":"02、Redis为什么选择单线程？","slug":"_02、redis为什么选择单线程","link":"#_02、redis为什么选择单线程","children":[{"level":3,"title":"是什么？","slug":"是什么","link":"#是什么","children":[]},{"level":3,"title":"why","slug":"why","link":"#why","children":[]}]},{"level":2,"title":"03、既然单线程那么好，为什么逐渐又加入了多线程特性？","slug":"_03、既然单线程那么好-为什么逐渐又加入了多线程特性","link":"#_03、既然单线程那么好-为什么逐渐又加入了多线程特性","children":[{"level":3,"title":"单线程也有单线程的烦恼","slug":"单线程也有单线程的烦恼","link":"#单线程也有单线程的烦恼","children":[]},{"level":3,"title":"如何解决？","slug":"如何解决","link":"#如何解决","children":[]}]},{"level":2,"title":"04、Redis6/7的多线程特性和IO多路复用入门篇","slug":"_04、redis6-7的多线程特性和io多路复用入门篇","link":"#_04、redis6-7的多线程特性和io多路复用入门篇","children":[{"level":3,"title":"对于Redis主要的性能瓶颈是内存或者网络带宽而并非是CPU","slug":"对于redis主要的性能瓶颈是内存或者网络带宽而并非是cpu","link":"#对于redis主要的性能瓶颈是内存或者网络带宽而并非是cpu","children":[]},{"level":3,"title":"第一次听","slug":"第一次听","link":"#第一次听","children":[]},{"level":3,"title":"最后Redis的瓶颈可以初步定位：网络IO","slug":"最后redis的瓶颈可以初步定位-网络io","link":"#最后redis的瓶颈可以初步定位-网络io","children":[]},{"level":3,"title":"Unix网络编程中的物种IO模型","slug":"unix网络编程中的物种io模型","link":"#unix网络编程中的物种io模型","children":[]},{"level":3,"title":"简单说明","slug":"简单说明","link":"#简单说明","children":[]}]},{"level":2,"title":"05、Redis7默认是否开启了多线程？","slug":"_05、redis7默认是否开启了多线程","link":"#_05、redis7默认是否开启了多线程","children":[]},{"level":2,"title":"06、我还是曾经那个少年","slug":"_06、我还是曾经那个少年","link":"#_06、我还是曾经那个少年","children":[]}],"git":{"createdTime":1685524601000,"updatedTime":1685524601000,"contributors":[{"name":"kirito","email":"2724964601@qq.com","commits":1}]},"readingTime":{"minutes":13.63,"words":4088},"filePathRelative":"notes/db/redis_pro/1.Redis单线程 VS 多线程【入门篇】.md","localizedDate":"2023年5月31日"}');export{e as data};
