const e=JSON.parse('{"key":"v-ac2ff100","path":"/notes/service/BeanUtils.copyProperties%E7%9A%8411%E4%B8%AA%E5%9D%91.html","title":"BeanUtils.copyProperties的11个坑","lang":"zh-CN","frontmatter":{"title":"BeanUtils.copyProperties的11个坑","category":["java"],"tag":["java","工具类"],"sticky":false,"star":false,"article":true,"timeline":true,"description":"我们日常开发中，经常涉及到DO、DTO、VO对象属性拷贝赋值，很容易想到org.springframework.beans.BeanUtils的`copyProperties。它会自动通过反射机制获取源对象和目标对象的属性，并将对应的属性值进行复制。可以减少手动编写属性复制代码的工作量，提高代码的可读性和维护性。 但是你知道嘛？使用BeanUtils的...","head":[["meta",{"property":"og:url","content":"https://Ragnarokoo.github.io/LearningNotes/notes/service/BeanUtils.copyProperties%E7%9A%8411%E4%B8%AA%E5%9D%91.html"}],["meta",{"property":"og:site_name","content":"📚全栈开发学习指南"}],["meta",{"property":"og:title","content":"BeanUtils.copyProperties的11个坑"}],["meta",{"property":"og:description","content":"我们日常开发中，经常涉及到DO、DTO、VO对象属性拷贝赋值，很容易想到org.springframework.beans.BeanUtils的`copyProperties。它会自动通过反射机制获取源对象和目标对象的属性，并将对应的属性值进行复制。可以减少手动编写属性复制代码的工作量，提高代码的可读性和维护性。 但是你知道嘛？使用BeanUtils的..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://Ragnarokoo.github.io/LearningNotes/"}],["meta",{"property":"og:updated_time","content":"2023-07-02T21:08:01.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"BeanUtils.copyProperties的11个坑"}],["meta",{"property":"article:tag","content":"java"}],["meta",{"property":"article:tag","content":"工具类"}],["meta",{"property":"article:modified_time","content":"2023-07-02T21:08:01.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"第1个坑： 类型不匹配","slug":"第1个坑-类型不匹配","link":"#第1个坑-类型不匹配","children":[]},{"level":2,"title":"第2个坑: BeanUtils.copyProperties是浅拷贝","slug":"第2个坑-beanutils-copyproperties是浅拷贝","link":"#第2个坑-beanutils-copyproperties是浅拷贝","children":[]},{"level":2,"title":"第3个坑：属性名称不一致","slug":"第3个坑-属性名称不一致","link":"#第3个坑-属性名称不一致","children":[]},{"level":2,"title":"第4个坑：Null 值覆盖","slug":"第4个坑-null-值覆盖","link":"#第4个坑-null-值覆盖","children":[]},{"level":2,"title":"第5个坑：注意引入的包","slug":"第5个坑-注意引入的包","link":"#第5个坑-注意引入的包","children":[]},{"level":2,"title":"第6个坑：Boolean类型数据+is属性开头的坑","slug":"第6个坑-boolean类型数据-is属性开头的坑","link":"#第6个坑-boolean类型数据-is属性开头的坑","children":[]},{"level":2,"title":"第7个坑：查找不到字段引用","slug":"第7个坑-查找不到字段引用","link":"#第7个坑-查找不到字段引用","children":[]},{"level":2,"title":"第8个坑：不同内部类，即使相同属性，也是赋值失败","slug":"第8个坑-不同内部类-即使相同属性-也是赋值失败","link":"#第8个坑-不同内部类-即使相同属性-也是赋值失败","children":[]},{"level":2,"title":"第9个坑：bean对应的属性，没有getter和setter方法，赋值失败","slug":"第9个坑-bean对应的属性-没有getter和setter方法-赋值失败","link":"#第9个坑-bean对应的属性-没有getter和setter方法-赋值失败","children":[]},{"level":2,"title":"第10个坑：BeanUtils.copyProperties + 泛型","slug":"第10个坑-beanutils-copyproperties-泛型","link":"#第10个坑-beanutils-copyproperties-泛型","children":[]},{"level":2,"title":"第11个坑：性能问题","slug":"第11个坑-性能问题","link":"#第11个坑-性能问题","children":[]},{"level":2,"title":"12. 替换BeanUtils.copyProperties的方案","slug":"_12-替换beanutils-copyproperties的方案","link":"#_12-替换beanutils-copyproperties的方案","children":[]}],"git":{"createdTime":1688332081000,"updatedTime":1688332081000,"contributors":[{"name":"naroko","email":"2724964601@qq.com","commits":1}]},"readingTime":{"minutes":8.06,"words":2417},"filePathRelative":"notes/service/BeanUtils.copyProperties的11个坑.md","localizedDate":"2023年7月3日"}');export{e as data};
