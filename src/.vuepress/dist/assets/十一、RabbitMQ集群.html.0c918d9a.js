const e=JSON.parse('{"key":"v-477a466f","path":"/notes/mq/rabbitmq/%E5%8D%81%E4%B8%80%E3%80%81RabbitMQ%E9%9B%86%E7%BE%A4.html","title":"十一、RabbitMQ集群","lang":"zh-CN","frontmatter":{"title":"十一、RabbitMQ集群","category":["rabbitmq"],"tag":["rabbitmq","消息中间件","MQ"],"sticky":false,"star":false,"article":true,"timeline":true,"description":"01、clustering 使用集群的原因 最开始我们介绍了如何安装及运行RabbitMQ服务，不过这些是单机版的，无法满足目前真实应用的要求。如果RabbitMQ服务器遇到内存崩溃、机器掉电或者主板故障等情况，该怎么办？单台RabbitMQ服务器可以满足每秒1000条消息的吞吐量，那么如果应用需要RabbitMQ服务满足每秒10万条消息的吞吐量呢？购...","head":[["meta",{"property":"og:url","content":"https://Ragnarokoo.github.io/LearningNotes/notes/mq/rabbitmq/%E5%8D%81%E4%B8%80%E3%80%81RabbitMQ%E9%9B%86%E7%BE%A4.html"}],["meta",{"property":"og:site_name","content":"📚全栈开发学习指南"}],["meta",{"property":"og:title","content":"十一、RabbitMQ集群"}],["meta",{"property":"og:description","content":"01、clustering 使用集群的原因 最开始我们介绍了如何安装及运行RabbitMQ服务，不过这些是单机版的，无法满足目前真实应用的要求。如果RabbitMQ服务器遇到内存崩溃、机器掉电或者主板故障等情况，该怎么办？单台RabbitMQ服务器可以满足每秒1000条消息的吞吐量，那么如果应用需要RabbitMQ服务满足每秒10万条消息的吞吐量呢？购..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://Ragnarokoo.github.io/LearningNotes/"}],["meta",{"property":"og:updated_time","content":"2023-05-31T09:16:41.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"十一、RabbitMQ集群"}],["meta",{"property":"article:tag","content":"rabbitmq"}],["meta",{"property":"article:tag","content":"消息中间件"}],["meta",{"property":"article:tag","content":"MQ"}],["meta",{"property":"article:modified_time","content":"2023-05-31T09:16:41.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"01、clustering","slug":"_01、clustering","link":"#_01、clustering","children":[{"level":3,"title":"使用集群的原因","slug":"使用集群的原因","link":"#使用集群的原因","children":[]},{"level":3,"title":"搭建步骤","slug":"搭建步骤","link":"#搭建步骤","children":[]}]},{"level":2,"title":"02、镜像队列","slug":"_02、镜像队列","link":"#_02、镜像队列","children":[{"level":3,"title":"使用镜像的原因","slug":"使用镜像的原因","link":"#使用镜像的原因","children":[]},{"level":3,"title":"搭建步骤","slug":"搭建步骤-1","link":"#搭建步骤-1","children":[]}]},{"level":2,"title":"03、Haproxy+Keepalive实现高可用负载均衡","slug":"_03、haproxy-keepalive实现高可用负载均衡","link":"#_03、haproxy-keepalive实现高可用负载均衡","children":[{"level":3,"title":"整体架构图","slug":"整体架构图","link":"#整体架构图","children":[]},{"level":3,"title":"Haproxy实现负载均衡","slug":"haproxy实现负载均衡","link":"#haproxy实现负载均衡","children":[]},{"level":3,"title":"搭建步骤","slug":"搭建步骤-2","link":"#搭建步骤-2","children":[]},{"level":3,"title":"Keepalived实现双机(主备)热备","slug":"keepalived实现双机-主备-热备","link":"#keepalived实现双机-主备-热备","children":[]},{"level":3,"title":"搭建步骤","slug":"搭建步骤-3","link":"#搭建步骤-3","children":[]}]},{"level":2,"title":"04、Federation Exchange","slug":"_04、federation-exchange","link":"#_04、federation-exchange","children":[{"level":3,"title":"使用它的原因","slug":"使用它的原因","link":"#使用它的原因","children":[]},{"level":3,"title":"搭建步骤","slug":"搭建步骤-4","link":"#搭建步骤-4","children":[]}]},{"level":2,"title":"05、Federation Queue","slug":"_05、federation-queue","link":"#_05、federation-queue","children":[{"level":3,"title":"使用它的原因","slug":"使用它的原因-1","link":"#使用它的原因-1","children":[]},{"level":3,"title":"搭建步骤","slug":"搭建步骤-5","link":"#搭建步骤-5","children":[]}]},{"level":2,"title":"06、Shovel","slug":"_06、shovel","link":"#_06、shovel","children":[{"level":3,"title":"使用它的原因","slug":"使用它的原因-2","link":"#使用它的原因-2","children":[]},{"level":3,"title":"搭建步骤","slug":"搭建步骤-6","link":"#搭建步骤-6","children":[]}]}],"git":{"createdTime":1685524601000,"updatedTime":1685524601000,"contributors":[{"name":"kirito","email":"2724964601@qq.com","commits":1}]},"readingTime":{"minutes":8.03,"words":2408},"filePathRelative":"notes/mq/rabbitmq/十一、RabbitMQ集群.md","localizedDate":"2023年5月31日"}');export{e as data};
