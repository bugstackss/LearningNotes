const e=JSON.parse('{"key":"v-0da8eaa6","path":"/springcloud/alibaba/%E5%8D%81%E4%B9%9D%E3%80%81SpringCloud%20Alibaba%20Sentinel%E5%AE%9E%E7%8E%B0%E7%86%94%E6%96%AD%E4%B8%8E%E9%99%90%E6%B5%81.html","title":"十九、SpringCloud Alibaba Sentinel实现熔断与限流","lang":"zh-CN","frontmatter":{"title":"十九、SpringCloud Alibaba Sentinel实现熔断与限流","category":["springcloud"],"tag":["spring","springcloud","微服务","java"],"sticky":false,"star":false,"article":true,"timeline":true,"description":"01、Sentinel是什么 官方Github (https://github.com/alibaba/Sentinel) 官方文档 (https://sentinelguard.io/zh-cn/docs/introduction.html) Sentinel 是什么？ 随着微服务的流行，服务和服务之间的稳定性变得越来越重要。Sentinel (ht...","head":[["meta",{"property":"og:url","content":"https://Ragnarokoo.github.io/LearningNotes/springcloud/alibaba/%E5%8D%81%E4%B9%9D%E3%80%81SpringCloud%20Alibaba%20Sentinel%E5%AE%9E%E7%8E%B0%E7%86%94%E6%96%AD%E4%B8%8E%E9%99%90%E6%B5%81.html"}],["meta",{"property":"og:site_name","content":"📚全栈开发学习指南"}],["meta",{"property":"og:title","content":"十九、SpringCloud Alibaba Sentinel实现熔断与限流"}],["meta",{"property":"og:description","content":"01、Sentinel是什么 官方Github (https://github.com/alibaba/Sentinel) 官方文档 (https://sentinelguard.io/zh-cn/docs/introduction.html) Sentinel 是什么？ 随着微服务的流行，服务和服务之间的稳定性变得越来越重要。Sentinel (ht..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://Ragnarokoo.github.io/LearningNotes/"}],["meta",{"property":"og:updated_time","content":"2023-05-31T09:16:41.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"十九、SpringCloud Alibaba Sentinel实现熔断与限流"}],["meta",{"property":"article:tag","content":"spring"}],["meta",{"property":"article:tag","content":"springcloud"}],["meta",{"property":"article:tag","content":"微服务"}],["meta",{"property":"article:tag","content":"java"}],["meta",{"property":"article:modified_time","content":"2023-05-31T09:16:41.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"01、Sentinel是什么","slug":"_01、sentinel是什么","link":"#_01、sentinel是什么","children":[]},{"level":2,"title":"02、Sentinel下载安装运行","slug":"_02、sentinel下载安装运行","link":"#_02、sentinel下载安装运行","children":[]},{"level":2,"title":"03、Sentinel初始化监控","slug":"_03、sentinel初始化监控","link":"#_03、sentinel初始化监控","children":[]},{"level":2,"title":"04、Sentinel流控规则简介","slug":"_04、sentinel流控规则简介","link":"#_04、sentinel流控规则简介","children":[]},{"level":2,"title":"05、Sentinel流控-QPS直接失败","slug":"_05、sentinel流控-qps直接失败","link":"#_05、sentinel流控-qps直接失败","children":[]},{"level":2,"title":"06、Sentinel流控-线程数直接失败","slug":"_06、sentinel流控-线程数直接失败","link":"#_06、sentinel流控-线程数直接失败","children":[]},{"level":2,"title":"07、Sentinel流控-关联","slug":"_07、sentinel流控-关联","link":"#_07、sentinel流控-关联","children":[]},{"level":2,"title":"08、Sentinel流控-预热","slug":"_08、sentinel流控-预热","link":"#_08、sentinel流控-预热","children":[]},{"level":2,"title":"09、Sentinel流控-排队等待","slug":"_09、sentinel流控-排队等待","link":"#_09、sentinel流控-排队等待","children":[]},{"level":2,"title":"10、Sentinel降级简介","slug":"_10、sentinel降级简介","link":"#_10、sentinel降级简介","children":[]},{"level":2,"title":"11、Sentinel降级-RT","slug":"_11、sentinel降级-rt","link":"#_11、sentinel降级-rt","children":[]},{"level":2,"title":"12、Sentinel降级-异常比例","slug":"_12、sentinel降级-异常比例","link":"#_12、sentinel降级-异常比例","children":[]},{"level":2,"title":"13、Sentinel降级-异常数","slug":"_13、sentinel降级-异常数","link":"#_13、sentinel降级-异常数","children":[]},{"level":2,"title":"14、Sentinel热点key(上)","slug":"_14、sentinel热点key-上","link":"#_14、sentinel热点key-上","children":[]},{"level":2,"title":"15、Sentinel热点key(下)","slug":"_15、sentinel热点key-下","link":"#_15、sentinel热点key-下","children":[]},{"level":2,"title":"16、Sentinel系统规则","slug":"_16、sentinel系统规则","link":"#_16、sentinel系统规则","children":[]},{"level":2,"title":"17、SentinelResource配置(上)","slug":"_17、sentinelresource配置-上","link":"#_17、sentinelresource配置-上","children":[]},{"level":2,"title":"18、SentinelResource配置(中)","slug":"_18、sentinelresource配置-中","link":"#_18、sentinelresource配置-中","children":[]},{"level":2,"title":"19、SentinelResource配置(下)","slug":"_19、sentinelresource配置-下","link":"#_19、sentinelresource配置-下","children":[]},{"level":2,"title":"20、Sentinel服务熔断Ribbon环境预说","slug":"_20、sentinel服务熔断ribbon环境预说","link":"#_20、sentinel服务熔断ribbon环境预说","children":[]},{"level":2,"title":"21、Sentinel服务熔断无配置","slug":"_21、sentinel服务熔断无配置","link":"#_21、sentinel服务熔断无配置","children":[]},{"level":2,"title":"22、Sentinel服务熔断只配置fallback","slug":"_22、sentinel服务熔断只配置fallback","link":"#_22、sentinel服务熔断只配置fallback","children":[]},{"level":2,"title":"23、Sentinel服务熔断只配置blockHandler","slug":"_23、sentinel服务熔断只配置blockhandler","link":"#_23、sentinel服务熔断只配置blockhandler","children":[]},{"level":2,"title":"24、Sentinel服务熔断fallback和blockHandler都配置","slug":"_24、sentinel服务熔断fallback和blockhandler都配置","link":"#_24、sentinel服务熔断fallback和blockhandler都配置","children":[]},{"level":2,"title":"25、Sentinel服务熔断exceptionsToIgnore","slug":"_25、sentinel服务熔断exceptionstoignore","link":"#_25、sentinel服务熔断exceptionstoignore","children":[]},{"level":2,"title":"26、Sentinel服务熔断OpenFeign","slug":"_26、sentinel服务熔断openfeign","link":"#_26、sentinel服务熔断openfeign","children":[]},{"level":2,"title":"27、Sentinel持久化规则","slug":"_27、sentinel持久化规则","link":"#_27、sentinel持久化规则","children":[]}],"git":{"createdTime":1685524601000,"updatedTime":1685524601000,"contributors":[{"name":"kirito","email":"2724964601@qq.com","commits":1}]},"readingTime":{"minutes":34.6,"words":10379},"filePathRelative":"springcloud/alibaba/十九、SpringCloud Alibaba Sentinel实现熔断与限流.md","localizedDate":"2023年5月31日"}');export{e as data};
