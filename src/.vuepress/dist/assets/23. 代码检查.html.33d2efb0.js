const t=JSON.parse(`{"key":"v-95a7976a","path":"/web/ts/23.%20%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5.html","title":"代码检查","lang":"zh-CN","frontmatter":{"title":"代码检查","category":["ts"],"tag":["typescript","javascript"],"sticky":false,"star":false,"article":true,"timeline":true,"description":"2019 年 1 月，TypeScirpt 官方决定全面采用 ESLint (https://www.oschina.net/news/103818/future-typescript-eslint) 作为代码检查的工具，并创建了一个新项目 typescript-eslint (https://github.com/typescript-eslint/...","head":[["meta",{"property":"og:url","content":"https://Ragnarokoo.github.io/LearningNotes/web/ts/23.%20%E4%BB%A3%E7%A0%81%E6%A3%80%E6%9F%A5.html"}],["meta",{"property":"og:site_name","content":"📚全栈开发学习指南"}],["meta",{"property":"og:title","content":"代码检查"}],["meta",{"property":"og:description","content":"2019 年 1 月，TypeScirpt 官方决定全面采用 ESLint (https://www.oschina.net/news/103818/future-typescript-eslint) 作为代码检查的工具，并创建了一个新项目 typescript-eslint (https://github.com/typescript-eslint/..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2023-05-31T09:16:41.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"typescript"}],["meta",{"property":"article:tag","content":"javascript"}],["meta",{"property":"article:modified_time","content":"2023-05-31T09:16:41.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"什么是代码检查","slug":"什么是代码检查","link":"#什么是代码检查","children":[]},{"level":2,"title":"为什么需要代码检查","slug":"为什么需要代码检查","link":"#为什么需要代码检查","children":[]},{"level":2,"title":"在 TypeScript 中使用 ESLint","slug":"在-typescript-中使用-eslint","link":"#在-typescript-中使用-eslint","children":[{"level":3,"title":"安装 ESLint","slug":"安装-eslint","link":"#安装-eslint","children":[]},{"level":3,"title":"创建配置文件","slug":"创建配置文件","link":"#创建配置文件","children":[]},{"level":3,"title":"检查一个 ts 文件","slug":"检查一个-ts-文件","link":"#检查一个-ts-文件","children":[]},{"level":3,"title":"检查整个项目的 ts 文件","slug":"检查整个项目的-ts-文件","link":"#检查整个项目的-ts-文件","children":[]},{"level":3,"title":"在 VSCode 中集成 ESLint 检查","slug":"在-vscode-中集成-eslint-检查","link":"#在-vscode-中集成-eslint-检查","children":[]},{"level":3,"title":"使用 Prettier 修复格式错误","slug":"使用-prettier-修复格式错误","link":"#使用-prettier-修复格式错误","children":[]},{"level":3,"title":"使用 AlloyTeam 的 ESLint 配置","slug":"使用-alloyteam-的-eslint-配置","link":"#使用-alloyteam-的-eslint-配置","children":[]},{"level":3,"title":"使用 ESLint 检查 tsx 文件","slug":"使用-eslint-检查-tsx-文件","link":"#使用-eslint-检查-tsx-文件","children":[]}]},{"level":2,"title":"Troubleshootings","slug":"troubleshootings","link":"#troubleshootings","children":[{"level":3,"title":"Cannot find module '@typescript-eslint/parser'","slug":"cannot-find-module-typescript-eslint-parser","link":"#cannot-find-module-typescript-eslint-parser","children":[]},{"level":3,"title":"VSCode 没有显示出 ESLint 的报错","slug":"vscode-没有显示出-eslint-的报错","link":"#vscode-没有显示出-eslint-的报错","children":[]},{"level":3,"title":"为什么有些定义了的变量（比如使用 enum 定义的变量）未使用，ESLint 却没有报错？","slug":"为什么有些定义了的变量-比如使用-enum-定义的变量-未使用-eslint-却没有报错","link":"#为什么有些定义了的变量-比如使用-enum-定义的变量-未使用-eslint-却没有报错","children":[]},{"level":3,"title":"启用了 noUnusedParameters 之后，只使用了第二个参数，但是又必须传入第一个参数，这就会报错了","slug":"启用了-nounusedparameters-之后-只使用了第二个参数-但是又必须传入第一个参数-这就会报错了","link":"#启用了-nounusedparameters-之后-只使用了第二个参数-但是又必须传入第一个参数-这就会报错了","children":[]}]}],"git":{"createdTime":1685524601000,"updatedTime":1685524601000,"contributors":[{"name":"kirito","email":"2724964601@qq.com","commits":1}]},"readingTime":{"minutes":11.29,"words":3386},"filePathRelative":"web/ts/23. 代码检查.md","localizedDate":"2023年5月31日"}`);export{t as data};
