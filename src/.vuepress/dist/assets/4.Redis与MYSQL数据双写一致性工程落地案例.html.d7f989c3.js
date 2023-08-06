const e=JSON.parse('{"key":"v-1c7bd8cc","path":"/notes/db/redis_pro/4.Redis%E4%B8%8EMYSQL%E6%95%B0%E6%8D%AE%E5%8F%8C%E5%86%99%E4%B8%80%E8%87%B4%E6%80%A7%E5%B7%A5%E7%A8%8B%E8%90%BD%E5%9C%B0%E6%A1%88%E4%BE%8B.html","title":"四、Redis与MYSQL数据双写一致性工程落地案例","lang":"zh-CN","frontmatter":{"title":"四、Redis与MYSQL数据双写一致性工程落地案例","category":["redis"],"tag":["redis","NOSQL","K,V缓存数据库","非关系型数据库"],"sticky":false,"star":false,"article":true,"timeline":true,"description":"01、复习＋面试题 image-20230501230046614 采用双检加锁策略 多个线程同时去查询数据库的这条数据，那么我们可以在第一个查询数据的请求上使用一个 互斥锁来锁住它。 其他的线程走到这一步拿不到锁就等着，等第一个线程查询到了数据，然后做缓存。 后面的线程进来发现已经有缓存了，就直接走缓存。 image-2023050123012837...","head":[["meta",{"property":"og:url","content":"https://Ragnarokoo.github.io/LearningNotes/notes/db/redis_pro/4.Redis%E4%B8%8EMYSQL%E6%95%B0%E6%8D%AE%E5%8F%8C%E5%86%99%E4%B8%80%E8%87%B4%E6%80%A7%E5%B7%A5%E7%A8%8B%E8%90%BD%E5%9C%B0%E6%A1%88%E4%BE%8B.html"}],["meta",{"property":"og:site_name","content":"📚全栈开发学习指南"}],["meta",{"property":"og:title","content":"四、Redis与MYSQL数据双写一致性工程落地案例"}],["meta",{"property":"og:description","content":"01、复习＋面试题 image-20230501230046614 采用双检加锁策略 多个线程同时去查询数据库的这条数据，那么我们可以在第一个查询数据的请求上使用一个 互斥锁来锁住它。 其他的线程走到这一步拿不到锁就等着，等第一个线程查询到了数据，然后做缓存。 后面的线程进来发现已经有缓存了，就直接走缓存。 image-2023050123012837..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://Ragnarokoo.github.io/LearningNotes/"}],["meta",{"property":"og:updated_time","content":"2023-05-31T09:16:41.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"四、Redis与MYSQL数据双写一致性工程落地案例"}],["meta",{"property":"article:tag","content":"redis"}],["meta",{"property":"article:tag","content":"NOSQL"}],["meta",{"property":"article:tag","content":"K,V缓存数据库"}],["meta",{"property":"article:tag","content":"非关系型数据库"}],["meta",{"property":"article:modified_time","content":"2023-05-31T09:16:41.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"01、复习＋面试题","slug":"_01、复习-面试题","link":"#_01、复习-面试题","children":[]},{"level":2,"title":"02、canal","slug":"_02、canal","link":"#_02、canal","children":[{"level":3,"title":"是什么？","slug":"是什么","link":"#是什么","children":[]},{"level":3,"title":"能干嘛？","slug":"能干嘛","link":"#能干嘛","children":[]},{"level":3,"title":"去哪下？","slug":"去哪下","link":"#去哪下","children":[]}]},{"level":2,"title":"03、工作原理，面试回答","slug":"_03、工作原理-面试回答","link":"#_03、工作原理-面试回答","children":[]},{"level":2,"title":"04、mysql-canal-redis双写一致性Coding","slug":"_04、mysql-canal-redis双写一致性coding","link":"#_04、mysql-canal-redis双写一致性coding","children":[]}],"git":{"createdTime":1685524601000,"updatedTime":1685524601000,"contributors":[{"name":"kirito","email":"2724964601@qq.com","commits":1}]},"readingTime":{"minutes":8.5,"words":2550},"filePathRelative":"notes/db/redis_pro/4.Redis与MYSQL数据双写一致性工程落地案例.md","localizedDate":"2023年5月31日"}');export{e as data};
