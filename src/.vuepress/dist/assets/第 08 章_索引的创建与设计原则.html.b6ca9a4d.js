import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as l,d as e,e as i,b as a,a as r,r as c}from"./app.9b10ba0a.js";const t="/assets/image-20221219175506431.e3efdeac.png",v="/assets/image-20221219175526113.eb726a67.png",u="/assets/image-20221219182915927.aa4e0392.png",m={},o=e("h1",{id:"第-08-章-索引的创建与设计原则",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#第-08-章-索引的创建与设计原则","aria-hidden":"true"},"#"),i(" 第 08 章_索引的创建与设计原则")],-1),b=e("p",null,"讲师：尚硅谷-宋红康（江湖人称：康师傅）",-1),p={href:"http://www.atguigu.com",target:"_blank",rel:"noopener noreferrer"},E=r(`<h2 id="_1-索引的声明与使用" tabindex="-1"><a class="header-anchor" href="#_1-索引的声明与使用" aria-hidden="true">#</a> 1. 索引的声明与使用</h2><h3 id="_1-1-索引的分类" tabindex="-1"><a class="header-anchor" href="#_1-1-索引的分类" aria-hidden="true">#</a> 1. 1 索引的分类</h3><p>MySQL的索引包括普通索引、唯一性索引、全文索引、单列索引、多列索引和空间索引等。</p><ul><li>从<code>功能逻辑</code>上说，索引主要有 4 种，分别是普通索引、唯一索引、主键索引、全文索引。</li><li>按照<code>物理实现方式</code>，索引可以分为 2 种：聚簇索引和非聚簇索引。</li><li>按照<code>作用字段个数</code>进行划分，分成单列索引和联合索引。</li></ul><ol><li><p><strong>普通索引</strong></p></li><li><p><strong>唯一性索引</strong></p></li><li><p><strong>主键索引</strong></p></li><li><p><strong>单列索引</strong></p></li><li><p><strong>多列(组合、联合)索引</strong></p></li><li><p><strong>全文索引</strong></p></li><li><p><strong>补充：空间索引</strong></p></li></ol><blockquote><p>小结：<code>不同的存储引擎支持的索引类型也不一样 InnoDB</code> ： 支持 B-tree、Full-text 等索引，不支持 Hash索引； <code>MyISAM</code> ： 支持 B-tree、Full-text 等索引，不支持 Hash 索引； <code>Memory</code> ： 支持 B-tree、Hash 等索引，不支持 Full-text 索引； <code>NDB</code> ： 支持 Hash 索引，不支持 B-tree、Full-text 等索引； <code>Archive</code> ： 不支持 B-tree、Hash、Full-text 等索引；</p></blockquote><h3 id="_1-2-创建索引" tabindex="-1"><a class="header-anchor" href="#_1-2-创建索引" aria-hidden="true">#</a> 1. 2 创建索引</h3><h4 id="_1-创建表的时候创建索引" tabindex="-1"><a class="header-anchor" href="#_1-创建表的时候创建索引" aria-hidden="true">#</a> 1. 创建表的时候创建索引</h4><h5 id="举例" tabindex="-1"><a class="header-anchor" href="#举例" aria-hidden="true">#</a> 举例：</h5><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CREATE TABLE dept(
dept_id INT PRIMARY KEY AUTO_INCREMENT,
dept_name VARCHAR( 20 )
);

CREATE TABLE emp(
emp_id INT PRIMARY KEY AUTO_INCREMENT,
emp_name VARCHAR( 20 ) UNIQUE,
dept_id INT,
CONSTRAINT emp_dept_id_fk FOREIGN KEY(dept_id) REFERENCES dept(dept_id)
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，如果显式创建表时创建索引的话，基本语法格式如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CREATE TABLE table_name [col_name data_type]
[UNIQUE | FULLTEXT | SPATIAL] [INDEX | KEY] [index_name] (col_name [length]) [ASC |
DESC]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>UNIQUE</code>、<code>FULLTEXT</code>和<code>SPATIAL</code>为可选参数，分别表示唯一索引、全文索引和空间索引；</li><li><code>INDEX</code>与<code>KEY</code>为同义词，两者的作用相同，用来指定创建索引；</li><li><code>index_name</code>指定索引的名称，为可选参数，如果不指定，那么MySQL默认col_name为索引名；</li><li><code>col_name</code>为需要创建索引的字段列，该列必须从数据表中定义的多个列中选择；</li><li><code>length</code>为可选参数，表示索引的长度，只有字符串类型的字段才能指定索引长度；</li><li><code>ASC</code>或<code>DESC</code>指定升序或者降序的索引值存储。</li></ul><ol><li><strong>创建普通索引</strong></li></ol><p>在book表中的year_publication字段上建立普通索引，SQL语句如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CREATE TABLE book(
book_id INT ,
book_name VARCHAR( 100 ),
authors VARCHAR( 100 ),
info VARCHAR( 100 ) ,
comment VARCHAR( 100 ),
year_publication YEAR,
INDEX(year_publication)
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><strong>创建唯一索引</strong></li></ol><p>举例：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CREATE TABLE test1(
id INT NOT NULL,
name varchar( 30 ) NOT NULL,
UNIQUE INDEX uk_idx_id(id)
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该语句执行完毕之后，使用SHOW CREATE TABLE查看表结构：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SHOW INDEX FROM test1 \\G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li><strong>主键索引</strong></li></ol><p>设定为主键后数据库会自动建立索引，innodb为聚簇索引，语法：</p><ul><li>随表一起建索引：</li></ul><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CREATE TABLE student (
id INT( 10 ) UNSIGNED AUTO_INCREMENT ,
student_no VARCHAR( 200 ),
student_name VARCHAR( 200 ),
PRIMARY KEY(id)
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>删除主键索引：</li></ul><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>ALTER TABLE student
drop PRIMARY KEY ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>修改主键索引：必须先删除掉(drop)原索引，再新建(add)索引</li></ul><ol start="4"><li><strong>创建单列索引</strong></li></ol><p>举例：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CREATE TABLE test2(
id INT NOT NULL,
name CHAR( 50 ) NULL,
INDEX single_idx_name(name( 20 ))
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该语句执行完毕之后，使用SHOW CREATE TABLE查看表结构：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SHOW INDEX FROM test2 \\G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li><strong>创建组合索引</strong></li></ol><p>举例：创建表test3，在表中的id、name和age字段上建立组合索引，SQL语句如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CREATE TABLE test3(
id INT( 11 ) NOT NULL,
name CHAR( 30 ) NOT NULL,
age INT( 11 ) NOT NULL,
info VARCHAR( 255 ),
INDEX multi_idx(id,name,age)
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该语句执行完毕之后，使用SHOW INDEX 查看：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SHOW INDEX FROM test3 \\G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6"><li><strong>创建全文索引</strong></li></ol><p>举例 1 ：创建表test4，在表中的info字段上建立全文索引，SQL语句如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CREATE TABLE test4(
id INT NOT NULL,
name CHAR( 30 ) NOT NULL,
age INT NOT NULL,
info VARCHAR( 255 ),
FULLTEXT INDEX futxt_idx_info(info)
) ENGINE=MyISAM;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在MySQL5.7及之后版本中可以不指定最后的ENGINE了，因为在此版本中InnoDB支持全文索引。</p></blockquote><p>举例 2 ：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CREATE TABLE articles (
id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
title VARCHAR ( 200 ),
body TEXT,
FULLTEXT index (title, body)
) ENGINE = INNODB ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建了一个给title和body字段添加全文索引的表。</p><p>举例 3 ：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CREATE TABLE \`papers\` (
\`id\` int( 10 ) unsigned NOT NULL AUTO_INCREMENT,
\`title\` varchar( 200 ) DEFAULT NULL,
\`content\` text,
PRIMARY KEY (\`id\`),
FULLTEXT KEY \`title\` (\`title\`,\`content\`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不同于like方式的的查询：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT * FROM papers WHERE content LIKE ‘%查询字符串%’;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>全文索引用match+against方式查询：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT * FROM papers WHERE MATCH(title,content) AGAINST (‘查询字符串’);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>注意点</p><ol><li><p>使用全文索引前，搞清楚版本支持情况；</p></li><li><p>全文索引比 like + % 快 N 倍，但是可能存在精度问题；</p></li><li><p>如果需要全文索引的是大量数据，建议先添加数据，再创建索引。</p></li></ol></blockquote><ol start="7"><li><strong>创建空间索引</strong></li></ol><p>空间索引创建中，要求空间类型的字段必须为<code>非空</code>。</p><p>举例：创建表test5，在空间类型为GEOMETRY的字段上创建空间索引，SQL语句如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CREATE TABLE test5(
geo GEOMETRY NOT NULL,
SPATIAL INDEX spa_idx_geo(geo)
) ENGINE=MyISAM;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-在已经存在的表上创建索引" tabindex="-1"><a class="header-anchor" href="#_2-在已经存在的表上创建索引" aria-hidden="true">#</a> 2. 在已经存在的表上创建索引</h4><p>在已经存在的表中创建索引可以使用ALTER TABLE语句或者CREATE INDEX语句。</p><ol><li><strong>使用ALTER TABLE语句创建索引</strong> ALTER TABLE语句创建索引的基本语法如下：</li></ol><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>ALTER TABLE table_name ADD [UNIQUE | FULLTEXT | SPATIAL] [INDEX | KEY]
[index_name] (col_name[length],...) [ASC | DESC]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><strong>使用CREATE INDEX创建索引</strong> CREATE INDEX语句可以在已经存在的表上添加索引，在MySQL中，CREATE INDEX被映射到一个ALTER TABLE语句上，基本语法结构为：</li></ol><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CREATE [UNIQUE | FULLTEXT | SPATIAL] INDEX index_name
ON table_name (col_name[length],...) [ASC | DESC]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-删除索引" tabindex="-1"><a class="header-anchor" href="#_1-3-删除索引" aria-hidden="true">#</a> 1. 3 删除索引</h3><ol><li>使用ALTER TABLE删除索引 ALTER TABLE删除索引的基本语法格式如下：</li></ol><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>ALTER TABLE table_name DROP INDEX index_name;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>使用DROP INDEX语句删除索引 DROP INDEX删除索引的基本语法格式如下：</li></ol><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DROP INDEX index_name ON table_name;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>提示 删除表中的列时，如果要删除的列为索引的组成部分，则该列也会从索引中删除。如果组成索引的所有列都被删除，则整个索引将被删除。</p></blockquote><h2 id="_2-mysql-8-0-索引新特性" tabindex="-1"><a class="header-anchor" href="#_2-mysql-8-0-索引新特性" aria-hidden="true">#</a> 2. MySQL 8. 0 索引新特性</h2><h3 id="_2-1-支持降序索引" tabindex="-1"><a class="header-anchor" href="#_2-1-支持降序索引" aria-hidden="true">#</a> 2. 1 支持降序索引</h3><p>举例：分别在MySQL 5. 7 版本和MySQL 8. 0 版本中创建数据表ts 1 ，结果如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CREATE TABLE ts1(a int,b int,index idx_a_b(a,b desc));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在MySQL 5. 7 版本中查看数据表ts 1 的结构，结果如下：</p><p><img src="`+t+'" alt="image-20221219175506431"></p><p>从结果可以看出，索引仍然是默认的升序。</p><p>在MySQL 8. 0 版本中查看数据表ts 1 的结构，结果如下：</p><p><img src="'+v+`" alt="image-20221219175526113"></p><p>从结果可以看出，索引已经是降序了。下面继续测试降序索引在执行计划中的表现。</p><p>分别在MySQL 5. 7 版本和MySQL 8. 0 版本的数据表ts 1 中插入 800 条随机数据，执行语句如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DELIMITER //
CREATE PROCEDURE ts_insert()
BEGIN
		DECLARE i INT DEFAULT 1 ;
		WHILE i &lt; 800
		DO
				insert into ts1 select rand()* 80000 ,rand()* 80000 ;
				SET i = i + 1 ;
		END WHILE;
		commit;
END //
DELIMITER ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#调用
CALL ts_insert();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在MySQL 5.7版本中查看数据表ts1的执行计划，结果如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>EXPLAIN SELECT * FROM ts1 ORDER BY a,b DESC LIMIT 5 ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>从结果可以看出，执行计划中扫描数为 799 ，而且使用了Using filesort。</p><blockquote><p>提示 Using filesort是MySQL中一种速度比较慢的外部排序，能避免是最好的。多数情况下，管理员可以通过优化索引来尽量避免出现Using filesort，从而提高数据库执行速度。</p></blockquote><p>在MySQL 8.0版本中查看数据表ts1的执行计划。从结果可以看出，执行计划中扫描数为 5 ，而且没有使用Using filesort。</p><blockquote><p>注意 降序索引只对查询中特定的排序顺序有效，如果使用不当，反而查询效率更低。例如，上述查询排序条件改为order by a desc, b desc，MySQL 5.7的执行计划要明显好于MySQL 8.0。</p></blockquote><p>将排序条件修改为order by a desc, b desc后，下面来对比不同版本中执行计划的效果。 在MySQL 5.7版本中查看数据表ts1的执行计划，结果如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>EXPLAIN SELECT * FROM ts1 ORDER BY a DESC,b DESC LIMIT 5 ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在MySQL 8.0版本中查看数据表ts1的执行计划。</p><p>从结果可以看出，修改后MySQL 5.7的执行计划要明显好于MySQL 8.0。</p><h3 id="_2-2-隐藏索引" tabindex="-1"><a class="header-anchor" href="#_2-2-隐藏索引" aria-hidden="true">#</a> 2. 2 隐藏索引</h3><p>在MySQL 5.7版本及之前，只能通过显式的方式删除索引。此时，如果发现删除索引后出现错误，又只能通过显式创建索引的方式将删除的索引创建回来。如果数据表中的数据量非常大，或者数据表本身比较大，这种操作就会消耗系统过多的资源，操作成本非常高。</p><p>从MySQL 8.x开始支持<code>隐藏索引（invisible indexes）</code>，只需要将待删除的索引设置为隐藏索引，使查询优化器不再使用这个索引（即使使用force index（强制使用索引），优化器也不会使用该索引），确认将索引设置为隐藏索引后系统不受任何响应，就可以彻底删除索引。<code>这种通过先将索引设置为隐藏索引，再删除索引的方式就是软删除</code>。</p><ol><li><code>创建表时直接创建</code> 在MySQL中创建隐藏索引通过SQL语句INVISIBLE来实现，其语法形式如下：</li></ol><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CREATE TABLE tablename(
    propname1 type1[CONSTRAINT1],
    propname2 type2[CONSTRAINT2],
    ......
    propnamen typen,
    INDEX [indexname](propname1 [(length)]) INVISIBLE
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述语句比普通索引多了一个关键字INVISIBLE，用来标记索引为不可见索引。</p><ol start="2"><li><code>在已经存在的表上创建</code></li></ol><p>可以为已经存在的表设置隐藏索引，其语法形式如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CREATE INDEX indexname
ON tablename(propname[(length)]) INVISIBLE;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><code>通过ALTER TABLE语句创建</code></li></ol><p>语法形式如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>ALTER TABLE tablename
ADD INDEX indexname (propname [(length)]) INVISIBLE;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li><code>切换索引可见状态</code> 已存在的索引可通过如下语句切换可见状态：</li></ol><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>ALTER TABLE tablename ALTER INDEX index_name INVISIBLE; #切换成隐藏索引
ALTER TABLE tablename ALTER INDEX index_name VISIBLE; #切换成非隐藏索引
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果将index_cname索引切换成可见状态，通过explain查看执行计划，发现优化器选择了index_cname索引。</p><blockquote><p>注意 当索引被隐藏时，它的内容仍然是和正常索引一样实时更新的。如果一个索引需要长期被隐藏，那么可以将其删除，因为索引的存在会影响插入、更新和删除的性能。</p></blockquote><p>通过设置隐藏索引的可见性可以查看索引对调优的帮助。</p><ol start="5"><li><code>使隐藏索引对查询优化器可见</code></li></ol><p>在MySQL 8.x版本中，为索引提供了一种新的测试方式，可以通过查询优化器的一个开关（use_invisible_indexes）来打开某个设置，使隐藏索引对查询优化器可见。如果use_invisible_indexes设置为off(默认)，优化器会忽略隐藏索引。如果设置为on，即使隐藏索引不可见，优化器在生成执行计划时仍会考虑使用隐藏索引。</p><p>（ 1 ）在MySQL命令行执行如下命令查看查询优化器的开关设置。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select @@optimizer_switch \\G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在输出的结果信息中找到如下属性配置。</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">use_invisible_indexes</span><span class="token punctuation">=</span><span class="token value attr-value">off</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此属性配置值为off，说明隐藏索引默认对查询优化器不可见。</p><p>（ 2 ）使隐藏索引对查询优化器可见，需要在MySQL命令行执行如下命令：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; set session optimizer_switch=&quot;use_invisible_indexes=on&quot;;
Query OK, 0 rows affected (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL语句执行成功，再次查看查询优化器的开关设置。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt;  select @@optimizer_switch \\G
*************************** 1. row ***************************
@@optimizer_switch:
index_merge=on,index_merge_union=on,index_merge_sort_union=on,index_merge_
intersection=on,engine_condition_pushdown=on,index_condition_pushdown=on,mrr=on,mrr_co
st_based=on,block_nested_loop=on,batched_key_access=off,materialization=on,semijoin=on
,loosescan=on,firstmatch=on,duplicateweedout=on,subquery_materialization_cost_based=on
,use_index_extensions=on,condition_fanout_filter=on,derived_merge=on,use_invisible_ind
exes=on,skip_scan=on,hash_join=on
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时，在输出结果中可以看到如下属性配置。</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">use_invisible_indexes</span><span class="token punctuation">=</span><span class="token value attr-value">on</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>use_invisible_indexes属性的值为on，说明此时隐藏索引对查询优化器可见。</p><p>（ 3 ）使用EXPLAIN查看以字段invisible_column作为查询条件时的索引使用情况。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>explain select * from classes where cname = &#39;高一 2 班&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询优化器会使用隐藏索引来查询数据。</p><p>（ 4 ）如果需要使隐藏索引对查询优化器不可见，则只需要执行如下命令即可。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; set session optimizer_switch=&quot;use_invisible_indexes=off&quot;;
Query OK, 0 rows affected (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>再次查看查询优化器的开关设置。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select @@optimizer_switch \\G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时，use_invisible_indexes属性的值已经被设置为“off”。</p><h2 id="_3-索引的设计原则" tabindex="-1"><a class="header-anchor" href="#_3-索引的设计原则" aria-hidden="true">#</a> 3. 索引的设计原则</h2><h3 id="_3-1-数据准备" tabindex="-1"><a class="header-anchor" href="#_3-1-数据准备" aria-hidden="true">#</a> 3. 1 数据准备</h3><p><strong>第 1 步：创建数据库、创建表</strong></p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CREATE DATABASE atguigudb1;

USE atguigudb1;

#1.创建学生表和课程表
CREATE TABLE \`student_info\` (
\`id\` INT( 11 ) NOT NULL AUTO_INCREMENT,
\`student_id\` INT NOT NULL ,
\`name\` VARCHAR( 20 ) DEFAULT NULL,
\`course_id\` INT NOT NULL ,
\`class_id\` INT( 11 ) DEFAULT NULL,
\`create_time\` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (\`id\`)
) ENGINE=INNODB AUTO_INCREMENT= 1 DEFAULT CHARSET=utf8;

CREATE TABLE \`course\` (
\`id\` INT( 11 ) NOT NULL AUTO_INCREMENT,
\`course_id\` INT NOT NULL ,
\`course_name\` VARCHAR( 40 ) DEFAULT NULL,
PRIMARY KEY (\`id\`)
) ENGINE=INNODB AUTO_INCREMENT= 1 DEFAULT CHARSET=utf8;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第 2 步：创建模拟数据必需的存储函数</strong></p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#函数 1 ：创建随机产生字符串函数

DELIMITER //
CREATE FUNCTION rand_string(n INT)
		RETURNS VARCHAR( 255 ) #该函数会返回一个字符串
BEGIN
		DECLARE chars_str VARCHAR( 100 ) DEFAULT
&#39;abcdefghijklmnopqrstuvwxyzABCDEFJHIJKLMNOPQRSTUVWXYZ&#39;;
		DECLARE return_str VARCHAR( 255 ) DEFAULT &#39;&#39;;
		DECLARE i INT DEFAULT 0 ;
		WHILE i &lt; n DO
				SET return_str =CONCAT(return_str,SUBSTRING(chars_str,FLOOR( 1 +RAND()* 52 ), 1 ));
				SET i = i + 1 ;
		END WHILE;
		RETURN return_str;
END //
DELIMITER ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#函数 2 ：创建随机数函数

DELIMITER //
CREATE FUNCTION rand_num (from_num INT ,to_num INT) RETURNS INT( 11 )
BEGIN
DECLARE i INT DEFAULT 0 ;
SET i = FLOOR(from_num +RAND()*(to_num - from_num+ 1 )) ;
RETURN i;
END //
DELIMITER ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建函数，假如报错：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>This function has none of DETERMINISTIC......
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>由于开启过慢查询日志bin-log, 我们就必须为我们的function指定一个参数。</p><p>主从复制，主机会将写操作记录在bin-log日志中。从机读取bin-log日志，执行语句来同步数据。如果使用函数来操作数据，会导致从机和主键操作时间不一致。所以，默认情况下，mysql不开启创建函数设置。</p><ul><li>查看mysql是否允许创建函数：</li></ul><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>show variables like &#39;log_bin_trust_function_creators&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>命令开启：允许创建函数设置：</li></ul><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>set global log_bin_trust_function_creators= 1 ;  # 不加global只是当前窗口有效。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>mysqld重启，上述参数又会消失。永久方法：</p><ul><li><p>windows下：my.ini[mysqld]加上：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">log_bin_trust_function_creators</span><span class="token punctuation">=</span> <span class="token value attr-value">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>linux下：/etc/my.cnf下my.cnf[mysqld]加上：</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">log_bin_trust_function_creators</span><span class="token punctuation">=</span> <span class="token value attr-value">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul></li></ul><p><strong>第 3 步：创建插入模拟数据的存储过程</strong></p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># 存储过程 1 ：创建插入课程表存储过程
DELIMITER //
CREATE PROCEDURE insert_course( max_num INT )
BEGIN
DECLARE i INT DEFAULT 0 ;
	SET autocommit = 0 ;  #设置手动提交事务
	REPEAT #循环
	SET i = i + 1 ;  #赋值
	INSERT INTO course (course_id, course_name ) VALUES
(rand_num( 10000 , 10100 ),rand_string( 6 ));
UNTIL i = max_num
	END REPEAT;
	COMMIT;  #提交事务
END //
DELIMITER ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># 存储过程 2 ：创建插入学生信息表存储过程
DELIMITER //
CREATE PROCEDURE insert_stu( max_num INT )
BEGIN
DECLARE i INT DEFAULT 0 ;
SET autocommit = 0 ;  #设置手动提交事务
REPEAT #循环
SET i = i + 1 ;  #赋值
INSERT INTO student_info (course_id, class_id ,student_id ,NAME ) VALUES
(rand_num( 10000 , 10100 ),rand_num( 10000 , 10200 ),rand_num( 1 , 200000 ),rand_string( 6 ));
UNTIL i = max_num
END REPEAT;
COMMIT;  #提交事务
END //
DELIMITER ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第 4 步：调用存储过程</strong></p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CALL insert_course( 100 );

CALL insert_stu( 1000000 );
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-哪些情况适合创建索引" tabindex="-1"><a class="header-anchor" href="#_3-2-哪些情况适合创建索引" aria-hidden="true">#</a> 3. 2 哪些情况适合创建索引</h3><h4 id="_1-字段的数值有唯一性的限制" tabindex="-1"><a class="header-anchor" href="#_1-字段的数值有唯一性的限制" aria-hidden="true">#</a> 1. 字段的数值有唯一性的限制</h4><blockquote><p>业务上具有唯一特性的字段，即使是组合字段，也必须建成唯一索引。（来源：Alibaba）</p><p>说明：不要以为唯一索引影响了 insert 速度，这个速度损耗可以忽略，但提高查找速度是明显的。</p></blockquote><h4 id="_2-频繁作为-where-查询条件的字段" tabindex="-1"><a class="header-anchor" href="#_2-频繁作为-where-查询条件的字段" aria-hidden="true">#</a> 2. 频繁作为 WHERE 查询条件的字段</h4><p>某个字段在SELECT语句的 WHERE 条件中经常被使用到，那么就需要给这个字段创建索引了。尤其是在数据量大的情况下，创建普通索引就可以大幅提升数据查询的效率。</p><p>比如student_info数据表（含 100 万条数据），假设我们想要查询 student_id=123110 的用户信息。</p><h4 id="_3-经常-group-by-和-order-by-的列" tabindex="-1"><a class="header-anchor" href="#_3-经常-group-by-和-order-by-的列" aria-hidden="true">#</a> 3. 经常 GROUP BY 和 ORDER BY 的列</h4><p>索引就是让数据按照某种顺序进行存储或检索，因此当我们使用 GROUP BY 对数据进行分组查询，或者使用 ORDER BY 对数据进行排序的时候，就需要<code>对分组或者排序的字段进行索引</code>。如果待排序的列有多个，那么可以在这些列上建立<code>组合索引</code>。</p><h4 id="_4-update、delete-的-where-条件列" tabindex="-1"><a class="header-anchor" href="#_4-update、delete-的-where-条件列" aria-hidden="true">#</a> 4. UPDATE、DELETE 的 WHERE 条件列</h4><p>对数据按照某个条件进行查询后再进行 UPDATE 或 DELETE 的操作，如果对 WHERE 字段创建了索引，就能大幅提升效率。原理是因为我们需要先根据 WHERE 条件列检索出来这条记录，然后再对它进行更新或删除。 <code>如果进行更新的时候，更新的字段是非索引字段，提升的效率会更明显，这是因为非索引字段更新不需要对索引进行维护</code>。</p><h4 id="_5-distinct-字段需要创建索引" tabindex="-1"><a class="header-anchor" href="#_5-distinct-字段需要创建索引" aria-hidden="true">#</a> 5 .DISTINCT 字段需要创建索引</h4><p>有时候我们需要对某个字段进行去重，使用 DISTINCT，那么对这个字段创建索引，也会提升查询效率。</p><p>比如，我们想要查询课程表中不同的 student_id 都有哪些，如果我们没有对 student_id 创建索引，执行SQL 语句：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT DISTINCT(student_id) FROM \`student_info\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行结果（ 600637 条记录，运行时间<code> 0.683</code>s）：</p><p>如果我们对 student_id 创建索引，再执行 SQL 语句：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT DISTINCT(student_id) FROM \`student_info\`;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行结果（ 600637 条记录，运行时间 <code>0.010</code>s）：</p><p>你能看到 SQL 查询效率有了提升，同时显示出来的 student_id 还是按照<code>递增的顺序</code>进行展示的。这是因为索引会对数据按照某种顺序进行排序，所以在去重的时候也会快很多。</p><h4 id="_6-多表-join-连接操作时-创建索引注意事项" tabindex="-1"><a class="header-anchor" href="#_6-多表-join-连接操作时-创建索引注意事项" aria-hidden="true">#</a> 6. 多表 JOIN 连接操作时，创建索引注意事项</h4><p>首先，<code>连接表的数量尽量不要超过 3 张</code>，因为每增加一张表就相当于增加了一次嵌套的循环，数量级增长会非常快，严重影响查询的效率。</p><p>其次，<code>对 WHERE 条件创建索引</code>，因为 WHERE 才是对数据条件的过滤。如果在数据量非常大的情况下，没有 WHERE 条件过滤是非常可怕的。</p><p>最后，<code>对用于连接的字段创建索引</code>，并且该字段在多张表中的<code>类型必须一致</code>。比如 course_id 在student_info 表和 course 表中都为 int(11) 类型，而不能一个为 int 另一个为 varchar 类型。</p><p>举个例子，如果我们只对 student_id 创建索引，执行 SQL 语句：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT course_id, name, student_info.student_id, course_name
FROM student_info JOIN course
ON student_info.course_id = course.course_id
WHERE name = &#39;462eed7ac6e791292a79&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果（ 1 条数据，运行时间 <code>0.189s</code>）：</p><p>这里我们对 name 创建索引，再执行上面的 SQL 语句，运行时间为 <code>0.002s</code>。</p><h4 id="_7-使用列的类型小的创建索引" tabindex="-1"><a class="header-anchor" href="#_7-使用列的类型小的创建索引" aria-hidden="true">#</a> 7. 使用列的类型小的创建索引</h4><h4 id="_8-使用字符串前缀创建索引" tabindex="-1"><a class="header-anchor" href="#_8-使用字符串前缀创建索引" aria-hidden="true">#</a> 8. 使用字符串前缀创建索引</h4><p>创建一张商户表，因为地址字段比较长，在地址字段上建立前缀索引</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>create table shop(address varchar( 120 ) not null);

alter table shop add index(address( 12 ));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>问题是，截取多少呢？截取得多了，达不到节省索引存储空间的目的；截取得少了，重复内容太多，字段的散列度(选择性)会降低。 <strong>怎么计算不同的长度的选择性呢？</strong></p><p>先看一下字段在全部数据中的选择度：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select count(distinct address) / count(*) from shop;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过不同长度去计算，与全表的选择性对比：</p><p>公式：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>count(distinct left(列名, 索引长度))/count(*)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select count(distinct left(address, 10 )) / count(*) as sub10, -- 截取前 10 个字符的选择度
count(distinct left(address, 15 )) / count(*) as sub11, -- 截取前 15 个字符的选择度
count(distinct left(address, 20 )) / count(*) as sub12, -- 截取前 20 个字符的选择度
count(distinct left(address, 25 )) / count(*) as sub13 -- 截取前 25 个字符的选择度
from shop;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>引申另一个问题：索引列前缀对排序的影响</strong></p><p><strong>拓展：Alibaba《Java开发手册》</strong></p><p>【<code>强制</code>】在 varchar 字段上建立索引时，必须指定索引长度，没必要对全字段建立索引，根据实际文本区分度决定索引长度。</p><p>说明：索引的长度与区分度是一对矛盾体，一般对字符串类型数据，长度为 20 的索引，区分度会<code>高达90% 以上</code>，可以使用 count(distinct left(列名, 索引长度))/count(*)的区分度来确定。</p><h4 id="_9-区分度高-散列性高-的列适合作为索引" tabindex="-1"><a class="header-anchor" href="#_9-区分度高-散列性高-的列适合作为索引" aria-hidden="true">#</a> 9. 区分度高(散列性高)的列适合作为索引</h4><h4 id="_10-使用最频繁的列放到联合索引的左侧" tabindex="-1"><a class="header-anchor" href="#_10-使用最频繁的列放到联合索引的左侧" aria-hidden="true">#</a> 10. 使用最频繁的列放到联合索引的左侧</h4><p>这样也可以较少的建立一些索引。同时，由于&quot;最左前缀原则&quot;，可以增加联合索引的使用率。</p><h4 id="_11-在多个字段都要创建索引的情况下-联合索引优于单值索引" tabindex="-1"><a class="header-anchor" href="#_11-在多个字段都要创建索引的情况下-联合索引优于单值索引" aria-hidden="true">#</a> 11. 在多个字段都要创建索引的情况下，联合索引优于单值索引</h4><h3 id="_3-3-限制索引的数目" tabindex="-1"><a class="header-anchor" href="#_3-3-限制索引的数目" aria-hidden="true">#</a> 3. 3 限制索引的数目</h3><h3 id="_3-4-哪些情况不适合创建索引" tabindex="-1"><a class="header-anchor" href="#_3-4-哪些情况不适合创建索引" aria-hidden="true">#</a> 3. 4 哪些情况不适合创建索引</h3><h4 id="_1-在where中使用不到的字段-不要设置索引" tabindex="-1"><a class="header-anchor" href="#_1-在where中使用不到的字段-不要设置索引" aria-hidden="true">#</a> 1. 在where中使用不到的字段，不要设置索引</h4><h4 id="_2-数据量小的表最好不要使用索引" tabindex="-1"><a class="header-anchor" href="#_2-数据量小的表最好不要使用索引" aria-hidden="true">#</a> 2. 数据量小的表最好不要使用索引</h4><p>举例：创建表 1 ：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CREATE TABLE t_without_index(
a INT PRIMARY KEY AUTO_INCREMENT,
b INT
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>提供存储过程 1 ：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#创建存储过程
DELIMITER //
CREATE PROCEDURE t_wout_insert()
BEGIN
		DECLARE i INT DEFAULT 1 ;
		WHILE i &lt;= 900
		DO
				INSERT INTO t_without_index(b) SELECT RAND()* 10000 ;
				SET i = i + 1 ;
		END WHILE;
		COMMIT;
END //
DELIMITER ;

#调用
CALL t_wout_insert();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建表 2 ：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CREATE TABLE t_with_index(
a INT PRIMARY KEY AUTO_INCREMENT,
b INT,
INDEX idx_b(b)
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建存储过程 2 ：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#创建存储过程
DELIMITER //
CREATE PROCEDURE t_with_insert()
BEGIN
		DECLARE i INT DEFAULT 1 ;
		WHILE i &lt;= 900
		DO
				INSERT INTO t_with_index(b) SELECT RAND()* 10000 ;
				SET i = i + 1 ;
		END WHILE;
		COMMIT;
END //
DELIMITER ;

#调用
CALL t_with_insert();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询对比：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select * from t_without_index where b = 9879 ;
+------+------+
| a | b |
+------+------+
| 1242 | 9879 |
+------+------+
1 row in set (0.00 sec)

mysql&gt; select * from t_with_index where b = 9879 ;
+-----+------+
| a | b |
+-----+------+
| 112 | 9879 |
+-----+------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你能看到运行结果相同，但是在数据量不大的情况下，索引就发挥不出作用了。</p><blockquote><p>结论：在数据表中的数据行数比较少的情况下，比如不到 1000 行，是不需要创建索引的。</p></blockquote><h4 id="_3-有大量重复数据的列上不要建立索引" tabindex="-1"><a class="header-anchor" href="#_3-有大量重复数据的列上不要建立索引" aria-hidden="true">#</a> 3. 有大量重复数据的列上不要建立索引</h4><p>举例 1 ：要在 100 万行数据中查找其中的 50 万行（比如性别为男的数据），一旦创建了索引，你需要先访问 50 万次索引，然后再访问 50 万次数据表，这样加起来的开销比不使用索引可能还要大。</p><p>举例 2 ：假设有一个学生表，学生总数为 100 万人，男性只有 10 个人，也就是占总人口的 10 万分之 1 。</p><p>学生表 student_gender 结构如下。其中数据表中的 student_gender 字段取值为 0 或 1 ， 0 代表女性， 1 代表男性。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CREATE TABLE student_gender(
    student_id INT( 11 ) NOT NULL,
    student_name VARCHAR( 50 ) NOT NULL,
    student_gender TINYINT( 1 ) NOT NULL,
    PRIMARY KEY(student_id)
)ENGINE = INNODB;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们要筛选出这个学生表中的男性，可以使用：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT * FROM student_gender WHERE student_gender = 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行结果（ 10 条数据，运行时间 <code>0.696s</code>）：</p><p><img src="`+u+`" alt="image-20221219182915927"></p><blockquote><p>结论：当数据重复度大，比如<code>高于 10%</code>的时候，也不需要对这个字段使用索引。</p></blockquote><h4 id="_4-避免对经常更新的表创建过多的索引" tabindex="-1"><a class="header-anchor" href="#_4-避免对经常更新的表创建过多的索引" aria-hidden="true">#</a> 4. 避免对经常更新的表创建过多的索引</h4><h4 id="_5-不建议用无序的值作为索引" tabindex="-1"><a class="header-anchor" href="#_5-不建议用无序的值作为索引" aria-hidden="true">#</a> 5. 不建议用无序的值作为索引</h4><p>例如身份证、UUID(在索引比较时需要转为ASCII，并且插入时可能造成页分裂)、MD5、HASH、无序长字符串等。</p><h4 id="_6-删除不再使用或者很少使用的索引" tabindex="-1"><a class="header-anchor" href="#_6-删除不再使用或者很少使用的索引" aria-hidden="true">#</a> 6. 删除不再使用或者很少使用的索引</h4><h4 id="_7-不要定义冗余或重复的索引" tabindex="-1"><a class="header-anchor" href="#_7-不要定义冗余或重复的索引" aria-hidden="true">#</a> 7. 不要定义冗余或重复的索引</h4><p><strong>① 冗余索引</strong></p><h5 id="举例-建表语句如下" tabindex="-1"><a class="header-anchor" href="#举例-建表语句如下" aria-hidden="true">#</a> 举例：建表语句如下</h5><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CREATE TABLE person_info(
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
name VARCHAR( 100 ) NOT NULL,
birthday DATE NOT NULL,
phone_number CHAR( 11 ) NOT NULL,
country varchar( 100 ) NOT NULL,
PRIMARY KEY (id),
KEY idx_name_birthday_phone_number (name( 10 ), birthday, phone_number),
KEY idx_name (name( 10 ))
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们知道，通过<code>idx_name_birthday_phone_number</code>索引就可以对<code>name</code>列进行快速搜索，再创建一个专门针对<code>name</code>列的索引就算是一个<code>冗余索引</code>，维护这个索引只会增加维护的成本，并不会对搜索有什么好处。</p><p><strong>② 重复索引</strong></p><p>另一种情况，我们可能会对某个列<code>重复建立索引</code>，比方说这样：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CREATE TABLE repeat_index_demo (
col1 INT PRIMARY KEY,
col2 INT,
UNIQUE uk_idx_c1 (col1),
INDEX idx_c1 (col1)
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们看到，col 1 既是主键、又给它定义为一个唯一索引，还给它定义了一个普通索引，可是主键本身就会生成聚簇索引，所以定义的唯一索引和普通索引是重复的，这种情况要避免。</p>`,237);function g(h,_){const n=c("ExternalLinkIcon");return d(),l("div",null,[o,b,e("p",null,[i("官网： "),e("a",p,[i("http://www.atguigu.com"),a(n)])]),E])}const y=s(m,[["render",g],["__file","第 08 章_索引的创建与设计原则.html.vue"]]);export{y as default};
