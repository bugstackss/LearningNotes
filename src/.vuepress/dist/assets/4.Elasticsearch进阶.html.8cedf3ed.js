const e=JSON.parse('{"key":"v-b186456a","path":"/notes/db/es7.x/4.Elasticsearch%E8%BF%9B%E9%98%B6.html","title":"四、Elasticsearch进阶","lang":"zh-CN","frontmatter":{"title":"四、Elasticsearch进阶","category":["ELK"],"tag":["ELK","分布式搜索引擎"],"sticky":false,"star":false,"article":true,"timeline":true,"description":"一、核心概念 索引（Index） 一个索引就是一个拥有几分相似特征的文档的集合。比如说，你可以有一个客户数据的索引，另一个产品目录的索引，还有一个订单数据的索引。一个索引由一个名字来标识（必须全部是小写字母），并且当我们要对这个索引中的文档进行索引、搜索、更新和删除的时候，都要使用到这个名字。在一个集群中，可以定义任意多的索引。 能搜索的数据必须索引，...","head":[["meta",{"property":"og:url","content":"https://Ragnarokoo.github.io/LearningNotes/notes/db/es7.x/4.Elasticsearch%E8%BF%9B%E9%98%B6.html"}],["meta",{"property":"og:site_name","content":"📚全栈开发学习指南"}],["meta",{"property":"og:title","content":"四、Elasticsearch进阶"}],["meta",{"property":"og:description","content":"一、核心概念 索引（Index） 一个索引就是一个拥有几分相似特征的文档的集合。比如说，你可以有一个客户数据的索引，另一个产品目录的索引，还有一个订单数据的索引。一个索引由一个名字来标识（必须全部是小写字母），并且当我们要对这个索引中的文档进行索引、搜索、更新和删除的时候，都要使用到这个名字。在一个集群中，可以定义任意多的索引。 能搜索的数据必须索引，..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://Ragnarokoo.github.io/LearningNotes/"}],["meta",{"property":"og:updated_time","content":"2023-06-21T17:29:34.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"四、Elasticsearch进阶"}],["meta",{"property":"article:tag","content":"ELK"}],["meta",{"property":"article:tag","content":"分布式搜索引擎"}],["meta",{"property":"article:modified_time","content":"2023-06-21T17:29:34.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"一、核心概念","slug":"一、核心概念","link":"#一、核心概念","children":[{"level":3,"title":"索引（Index）","slug":"索引-index","link":"#索引-index","children":[]},{"level":3,"title":"类型（Type）","slug":"类型-type","link":"#类型-type","children":[]},{"level":3,"title":"文档（Document）","slug":"文档-document","link":"#文档-document","children":[]},{"level":3,"title":"字段（Field）","slug":"字段-field","link":"#字段-field","children":[]},{"level":3,"title":"映射（Mappding）","slug":"映射-mappding","link":"#映射-mappding","children":[]},{"level":3,"title":"分片（Shards）","slug":"分片-shards","link":"#分片-shards","children":[]},{"level":3,"title":"副本（Replicas）","slug":"副本-replicas","link":"#副本-replicas","children":[]},{"level":3,"title":"分配（Allocation）","slug":"分配-allocation","link":"#分配-allocation","children":[]}]},{"level":2,"title":"二、系统架构","slug":"二、系统架构","link":"#二、系统架构","children":[]},{"level":2,"title":"三、分布式集群","slug":"三、分布式集群","link":"#三、分布式集群","children":[{"level":3,"title":"单节点集群","slug":"单节点集群","link":"#单节点集群","children":[]},{"level":3,"title":"故障转移","slug":"故障转移","link":"#故障转移","children":[]},{"level":3,"title":"水平扩容","slug":"水平扩容","link":"#水平扩容","children":[]},{"level":3,"title":"应对故障","slug":"应对故障","link":"#应对故障","children":[]}]},{"level":2,"title":"四、路由计算","slug":"四、路由计算","link":"#四、路由计算","children":[]},{"level":2,"title":"五、分片控制","slug":"五、分片控制","link":"#五、分片控制","children":[{"level":3,"title":"写流程","slug":"写流程","link":"#写流程","children":[]},{"level":3,"title":"读流程","slug":"读流程","link":"#读流程","children":[]},{"level":3,"title":"更新流程","slug":"更新流程","link":"#更新流程","children":[]},{"level":3,"title":"多文档操作流程","slug":"多文档操作流程","link":"#多文档操作流程","children":[]}]},{"level":2,"title":"六、分片原理","slug":"六、分片原理","link":"#六、分片原理","children":[{"level":3,"title":"倒排索引","slug":"倒排索引","link":"#倒排索引","children":[]},{"level":3,"title":"文档搜索","slug":"文档搜索","link":"#文档搜索","children":[]},{"level":3,"title":"动态更新索引","slug":"动态更新索引","link":"#动态更新索引","children":[]},{"level":3,"title":"近实时搜索","slug":"近实时搜索","link":"#近实时搜索","children":[]},{"level":3,"title":"持久化变更","slug":"持久化变更","link":"#持久化变更","children":[]},{"level":3,"title":"段合并","slug":"段合并","link":"#段合并","children":[]}]},{"level":2,"title":"七、文档分析","slug":"七、文档分析","link":"#七、文档分析","children":[{"level":3,"title":"内置分析器","slug":"内置分析器","link":"#内置分析器","children":[]},{"level":3,"title":"分析器使用场景","slug":"分析器使用场景","link":"#分析器使用场景","children":[]},{"level":3,"title":"测试分析器","slug":"测试分析器","link":"#测试分析器","children":[]},{"level":3,"title":"指定分析器","slug":"指定分析器","link":"#指定分析器","children":[]},{"level":3,"title":"IK分词器","slug":"ik分词器","link":"#ik分词器","children":[]},{"level":3,"title":"自定义分析器","slug":"自定义分析器","link":"#自定义分析器","children":[]}]},{"level":2,"title":"八、文档处理","slug":"八、文档处理","link":"#八、文档处理","children":[{"level":3,"title":"文档冲突","slug":"文档冲突","link":"#文档冲突","children":[]},{"level":3,"title":"乐观并发控制","slug":"乐观并发控制","link":"#乐观并发控制","children":[]},{"level":3,"title":"外部系统版本控制","slug":"外部系统版本控制","link":"#外部系统版本控制","children":[]}]},{"level":2,"title":"九、Kibana","slug":"九、kibana","link":"#九、kibana","children":[]}],"git":{"createdTime":1687368574000,"updatedTime":1687368574000,"contributors":[{"name":"kirito","email":"2724964601@qq.com","commits":1}]},"readingTime":{"minutes":47.99,"words":14398},"filePathRelative":"notes/db/es7.x/4.Elasticsearch进阶.md","localizedDate":"2023年6月22日"}');export{e as data};
