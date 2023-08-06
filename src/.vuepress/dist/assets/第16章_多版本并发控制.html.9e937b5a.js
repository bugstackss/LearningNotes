const e=JSON.parse('{"key":"v-36ac9b4d","path":"/notes/db/mysql_pro/%E7%AC%AC16%E7%AB%A0_%E5%A4%9A%E7%89%88%E6%9C%AC%E5%B9%B6%E5%8F%91%E6%8E%A7%E5%88%B6.html","title":"第 16 章_多版本并发控制","lang":"zh-CN","frontmatter":{"title":"第 16 章_多版本并发控制","category":["mysql"],"tag":["mysql","SQL","关系型数据库"],"sticky":false,"star":false,"article":true,"timeline":true,"description":"1. 什么是MVCC MVCC （Multiversion Concurrency Control），多版本并发控制。顾名思义，MVCC 是通过数据行的多个版本管理来实现数据库的并发控制。这项技术使得在InnoDB的事务隔离级别下执行一致性读操作有了保证。换言之，就是为了查询一些正在被另一个事务更新的行，并且可以看到它们被更新之前的值，这样在做查询的时...","head":[["meta",{"property":"og:url","content":"https://Ragnarokoo.github.io/LearningNotes/notes/db/mysql_pro/%E7%AC%AC16%E7%AB%A0_%E5%A4%9A%E7%89%88%E6%9C%AC%E5%B9%B6%E5%8F%91%E6%8E%A7%E5%88%B6.html"}],["meta",{"property":"og:site_name","content":"📚全栈开发学习指南"}],["meta",{"property":"og:title","content":"第 16 章_多版本并发控制"}],["meta",{"property":"og:description","content":"1. 什么是MVCC MVCC （Multiversion Concurrency Control），多版本并发控制。顾名思义，MVCC 是通过数据行的多个版本管理来实现数据库的并发控制。这项技术使得在InnoDB的事务隔离级别下执行一致性读操作有了保证。换言之，就是为了查询一些正在被另一个事务更新的行，并且可以看到它们被更新之前的值，这样在做查询的时..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://Ragnarokoo.github.io/LearningNotes/"}],["meta",{"property":"og:updated_time","content":"2023-05-31T09:16:41.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"第 16 章_多版本并发控制"}],["meta",{"property":"article:tag","content":"mysql"}],["meta",{"property":"article:tag","content":"SQL"}],["meta",{"property":"article:tag","content":"关系型数据库"}],["meta",{"property":"article:modified_time","content":"2023-05-31T09:16:41.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. 什么是MVCC","slug":"_1-什么是mvcc","link":"#_1-什么是mvcc","children":[]},{"level":2,"title":"2. 快照读与当前读","slug":"_2-快照读与当前读","link":"#_2-快照读与当前读","children":[{"level":3,"title":"2. 1 快照读","slug":"_2-1-快照读","link":"#_2-1-快照读","children":[]},{"level":3,"title":"2. 2 当前读","slug":"_2-2-当前读","link":"#_2-2-当前读","children":[]}]},{"level":2,"title":"3. 复习","slug":"_3-复习","link":"#_3-复习","children":[{"level":3,"title":"3. 1 再谈隔离级别","slug":"_3-1-再谈隔离级别","link":"#_3-1-再谈隔离级别","children":[]},{"level":3,"title":"3. 2 隐藏字段、Undo Log版本链","slug":"_3-2-隐藏字段、undo-log版本链","link":"#_3-2-隐藏字段、undo-log版本链","children":[]}]},{"level":2,"title":"4. MVCC实现原理之ReadView","slug":"_4-mvcc实现原理之readview","link":"#_4-mvcc实现原理之readview","children":[{"level":3,"title":"4.1 什么是ReadView","slug":"_4-1-什么是readview","link":"#_4-1-什么是readview","children":[]},{"level":3,"title":"4.2 设计思路","slug":"_4-2-设计思路","link":"#_4-2-设计思路","children":[]},{"level":3,"title":"4.3 ReadView的规则","slug":"_4-3-readview的规则","link":"#_4-3-readview的规则","children":[]},{"level":3,"title":"4. 4 MVCC整体操作流程","slug":"_4-4-mvcc整体操作流程","link":"#_4-4-mvcc整体操作流程","children":[]}]},{"level":2,"title":"5. 举例说明","slug":"_5-举例说明","link":"#_5-举例说明","children":[{"level":3,"title":"5. 1 READ COMMITTED隔离级别下","slug":"_5-1-read-committed隔离级别下","link":"#_5-1-read-committed隔离级别下","children":[]},{"level":3,"title":"5. 2 REPEATABLE READ隔离级别下","slug":"_5-2-repeatable-read隔离级别下","link":"#_5-2-repeatable-read隔离级别下","children":[]},{"level":3,"title":"5. 3 如何解决幻读","slug":"_5-3-如何解决幻读","link":"#_5-3-如何解决幻读","children":[]}]},{"level":2,"title":"6. 总结","slug":"_6-总结","link":"#_6-总结","children":[]}],"git":{"createdTime":1685524601000,"updatedTime":1685524601000,"contributors":[{"name":"kirito","email":"2724964601@qq.com","commits":1}]},"readingTime":{"minutes":22.06,"words":6618},"filePathRelative":"notes/db/mysql_pro/第16章_多版本并发控制.md","localizedDate":"2023年5月31日"}');export{e as data};
