const e=JSON.parse('{"key":"v-cd9ebb54","path":"/notes/jdbc/%E5%85%A8%E6%96%B08.x%E7%89%88%E6%9C%ACJDBC%E6%95%B0%E6%8D%AE%E5%BA%93%E8%BF%9E%E6%8E%A5%E6%8A%80%E6%9C%AF.html","title":"全新8.x版本JDBC数据库连接技术","lang":"zh-CN","frontmatter":{"title":"全新8.x版本JDBC数据库连接技术","category":["jdbc"],"tag":["jdbc","java","数据库","mysql"],"sticky":false,"star":false,"article":true,"timeline":true,"description":"一、前言 1.1 课程需要哪些前置技术 技术 版本 备注 -------------- ------ -------- idea 2022.2 最新版本 jdk 1.8 mysql-jdbc驱动 8.0.27 8.0.25+ druid 1.1.21 mysql 8.0.25 image-20230311133459713 1.2 课程学习路线设计 学...","head":[["meta",{"property":"og:url","content":"https://Ragnarokoo.github.io/LearningNotes/notes/jdbc/%E5%85%A8%E6%96%B08.x%E7%89%88%E6%9C%ACJDBC%E6%95%B0%E6%8D%AE%E5%BA%93%E8%BF%9E%E6%8E%A5%E6%8A%80%E6%9C%AF.html"}],["meta",{"property":"og:site_name","content":"📚全栈开发学习指南"}],["meta",{"property":"og:title","content":"全新8.x版本JDBC数据库连接技术"}],["meta",{"property":"og:description","content":"一、前言 1.1 课程需要哪些前置技术 技术 版本 备注 -------------- ------ -------- idea 2022.2 最新版本 jdk 1.8 mysql-jdbc驱动 8.0.27 8.0.25+ druid 1.1.21 mysql 8.0.25 image-20230311133459713 1.2 课程学习路线设计 学..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://Ragnarokoo.github.io/LearningNotes/"}],["meta",{"property":"og:updated_time","content":"2023-05-31T09:16:41.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"全新8.x版本JDBC数据库连接技术"}],["meta",{"property":"article:tag","content":"jdbc"}],["meta",{"property":"article:tag","content":"java"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"mysql"}],["meta",{"property":"article:modified_time","content":"2023-05-31T09:16:41.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"一、前言","slug":"一、前言","link":"#一、前言","children":[{"level":3,"title":"1.1 课程需要哪些前置技术","slug":"_1-1-课程需要哪些前置技术","link":"#_1-1-课程需要哪些前置技术","children":[]},{"level":3,"title":"1.2 课程学习路线设计","slug":"_1-2-课程学习路线设计","link":"#_1-2-课程学习路线设计","children":[]}]},{"level":2,"title":"二、全新JDBC技术概述","slug":"二、全新jdbc技术概述","link":"#二、全新jdbc技术概述","children":[{"level":3,"title":"2.1 jdbc技术概念和理解","slug":"_2-1-jdbc技术概念和理解","link":"#_2-1-jdbc技术概念和理解","children":[]},{"level":3,"title":"2.2 jdbc核心api和使用路线","slug":"_2-2-jdbc核心api和使用路线","link":"#_2-2-jdbc核心api和使用路线","children":[]},{"level":3,"title":"2.3 为什么选择全新 8+ 版本 mysql-jdbc 驱动？","slug":"_2-3-为什么选择全新-8-版本-mysql-jdbc-驱动","link":"#_2-3-为什么选择全新-8-版本-mysql-jdbc-驱动","children":[]}]},{"level":2,"title":"三、全新 JDBC 核心 API","slug":"三、全新-jdbc-核心-api","link":"#三、全新-jdbc-核心-api","children":[{"level":3,"title":"3.1 引入 mysql-jdbc 驱动 jar","slug":"_3-1-引入-mysql-jdbc-驱动-jar","link":"#_3-1-引入-mysql-jdbc-驱动-jar","children":[]},{"level":3,"title":"3.2 jdbc 基本使用步骤分析","slug":"_3-2-jdbc-基本使用步骤分析","link":"#_3-2-jdbc-基本使用步骤分析","children":[]},{"level":3,"title":"3.3 基于statement 演示查询","slug":"_3-3-基于statement-演示查询","link":"#_3-3-基于statement-演示查询","children":[]},{"level":3,"title":"3.4 基于 statement 方式问题","slug":"_3-4-基于-statement-方式问题","link":"#_3-4-基于-statement-方式问题","children":[]},{"level":3,"title":"3.5 基于 preparedStatment 方式优化","slug":"_3-5-基于-preparedstatment-方式优化","link":"#_3-5-基于-preparedstatment-方式优化","children":[]},{"level":3,"title":"3.6 基于 preparedStatment 演示 crud","slug":"_3-6-基于-preparedstatment-演示-crud","link":"#_3-6-基于-preparedstatment-演示-crud","children":[]},{"level":3,"title":"3.7 preparedStatment 使用方式总结","slug":"_3-7-preparedstatment-使用方式总结","link":"#_3-7-preparedstatment-使用方式总结","children":[]}]},{"level":2,"title":"四、全新 JDBC扩展提升","slug":"四、全新-jdbc扩展提升","link":"#四、全新-jdbc扩展提升","children":[{"level":3,"title":"4.1 自增长主键回显实现","slug":"_4-1-自增长主键回显实现","link":"#_4-1-自增长主键回显实现","children":[]},{"level":3,"title":"4.2 批量数据插入性能测试","slug":"_4-2-批量数据插入性能测试","link":"#_4-2-批量数据插入性能测试","children":[]},{"level":3,"title":"4.3 jdbc中数据库事务实现","slug":"_4-3-jdbc中数据库事务实现","link":"#_4-3-jdbc中数据库事务实现","children":[]}]},{"level":2,"title":"五、国货之光 Duid连接池技术使用","slug":"五、国货之光-duid连接池技术使用","link":"#五、国货之光-duid连接池技术使用","children":[{"level":3,"title":"5.1 连接性能损耗问题分析","slug":"_5-1-连接性能损耗问题分析","link":"#_5-1-连接性能损耗问题分析","children":[]},{"level":3,"title":"5.2 数据库连接池的作用","slug":"_5-2-数据库连接池的作用","link":"#_5-2-数据库连接池的作用","children":[]},{"level":3,"title":"5.3 市面常见连接池产品和对比","slug":"_5-3-市面常见连接池产品和对比","link":"#_5-3-市面常见连接池产品和对比","children":[]},{"level":3,"title":"5.4 国货之光 druid 连接池使用","slug":"_5-4-国货之光-druid-连接池使用","link":"#_5-4-国货之光-druid-连接池使用","children":[]}]},{"level":2,"title":"六、全新JDBC使用优化以及工具类封装","slug":"六、全新jdbc使用优化以及工具类封装","link":"#六、全新jdbc使用优化以及工具类封装","children":[{"level":3,"title":"6.1 jdbc工具类封装 v1.0","slug":"_6-1-jdbc工具类封装-v1-0","link":"#_6-1-jdbc工具类封装-v1-0","children":[]},{"level":3,"title":"6.2 jdbc工具类封装v.2.0","slug":"_6-2-jdbc工具类封装v-2-0","link":"#_6-2-jdbc工具类封装v-2-0","children":[]},{"level":3,"title":"6.3高级应用层封装BaseDao","slug":"_6-3高级应用层封装basedao","link":"#_6-3高级应用层封装basedao","children":[]}]},{"level":2,"title":"七、基于CMS项目JDBC实战练习","slug":"七、基于cms项目jdbc实战练习","link":"#七、基于cms项目jdbc实战练习","children":[{"level":3,"title":"7.1 cms项目介绍和导入","slug":"_7-1-cms项目介绍和导入","link":"#_7-1-cms项目介绍和导入","children":[]},{"level":3,"title":"7.2基于cms项目添加数据库相关配置","slug":"_7-2基于cms项目添加数据库相关配置","link":"#_7-2基于cms项目添加数据库相关配置","children":[]},{"level":3,"title":"7.2基于cms项目添加数据库相关配置","slug":"_7-2基于cms项目添加数据库相关配置-1","link":"#_7-2基于cms项目添加数据库相关配置-1","children":[]},{"level":3,"title":"7.3 基于cms项目实战","slug":"_7-3-基于cms项目实战","link":"#_7-3-基于cms项目实战","children":[]}]}],"git":{"createdTime":1685524601000,"updatedTime":1685524601000,"contributors":[{"name":"kirito","email":"2724964601@qq.com","commits":1}]},"readingTime":{"minutes":39.33,"words":11800},"filePathRelative":"notes/jdbc/全新8.x版本JDBC数据库连接技术.md","localizedDate":"2023年5月31日"}');export{e as data};
