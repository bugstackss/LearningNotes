import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as i,a as n}from"./app.9b10ba0a.js";const a="/assets/ab16efadca505bf25339a960c0d38cf6-20230308194917858.c2ef5b3e.png",s="/assets/e27d17f8eb7a5f30cac349eadfc39e48.9d68c7e4.png",c="/assets/b8a05f8c8acede4ff1b7870b69f8abbe.4aaf11f0.png",t="/assets/6dc5266bf8f00f37eebccb83d7e5fab4.dce17d7a.png",l="/assets/39618189e2cb005e2e269f5ba5bf6760.c567af36.png",o="/assets/637ddd340420543fd776503fc1c3bc36.069ab4d2.png",r="/assets/0fda68225f2f9d11e5e6b5c710bff44f.41aa7bdd.png",u="/assets/50e1856a45d3999f3a3fdfb25df0781f.d40723e0.png",p="/assets/418cbcb253e874166b28260ba4afd03d.82655f2b.png",m="/assets/5e7cfe6d6fb4c6ff0ebc219194018c56.fd60160d.png",v="/assets/daeee86717576f84178e40983c5b8615.09d17c27.png",E="/assets/2eb9c8b79553e0606f635827a53970cf.270df539.png",b="/assets/5cbb887b85a9c3d452992821eb688f7b.2927f888.png",_={},h=n(`<h1 id="第-16-章-多版本并发控制" tabindex="-1"><a class="header-anchor" href="#第-16-章-多版本并发控制" aria-hidden="true">#</a> 第 16 章_多版本并发控制</h1><h2 id="_1-什么是mvcc" tabindex="-1"><a class="header-anchor" href="#_1-什么是mvcc" aria-hidden="true">#</a> 1. 什么是MVCC</h2><p>MVCC （Multiversion Concurrency Control），多版本并发控制。顾名思义，MVCC 是通过数据行的多个版本管理来实现数据库的<code>并发控制</code>。这项技术使得在InnoDB的事务隔离级别下执行<code>一致性读</code>操作有了保证。换言之，就是为了查询一些正在被另一个事务更新的行，并且可以看到它们被更新之前的值，这样在做查询的时候就不用等待另一个事务释放锁。</p><p>MVCC没有正式的标准，在不同的DBMS中MVCC的实现方式可能是不同的，也不是普遍使用的(大家可以参考相关的DBMS文档)。这里讲解InnoDB 中MVCC的实现机制（MySQL其它的存储引擎并不支持它)。</p><h2 id="_2-快照读与当前读" tabindex="-1"><a class="header-anchor" href="#_2-快照读与当前读" aria-hidden="true">#</a> 2. 快照读与当前读</h2><p>MVCC在MySQL InnoDB中的实现主要是为了提高数据库并发性能，用更好的方式去处理<code>读-写冲突</code>，做到即使有读写冲突时，也能做到<code>不加锁，非阻塞并发读</code>，而这个读指的就是<code>快照读</code>, 而非<code>当前读</code>。当前读实际上是一种加锁的操作，是悲观锁的实现。而MVCC本质是采用乐观锁思想的一种方式。</p><h3 id="_2-1-快照读" tabindex="-1"><a class="header-anchor" href="#_2-1-快照读" aria-hidden="true">#</a> 2. 1 快照读</h3><p>快照读又叫一致性读，读取的是快照数据。 <strong>不加锁的简单的 SELECT 都属于快照读</strong> ，即不加锁的非阻塞读；比如这样：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT * FROM player WHERE ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>之所以出现快照读的情况，是基于提高并发性能的考虑，快照读的实现是基于MVCC，它在很多情况下，避免了加锁操作，降低了开销。</p><p>既然是基于多版本，那么快照读可能读到的并不一定是数据的最新版本，而有可能是之前的历史版本。</p><p>快照读的前提是隔离级别不是串行级别，串行级别下的快照读会退化成当前读。</p><h3 id="_2-2-当前读" tabindex="-1"><a class="header-anchor" href="#_2-2-当前读" aria-hidden="true">#</a> 2. 2 当前读</h3><p>当前读读取的是记录的最新版本（最新数据，而不是历史版本的数据），读取时还要保证其他并发事务不能修改当前记录，会对读取的记录进行加锁。加锁的 SELECT，或者对数据进行增删改都会进行当前读。比如：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT * FROM student LOCK IN SHARE MODE;  # 共享锁

SELECT * FROM student FOR UPDATE; # 排他锁

INSERT INTO student values ...  # 排他锁

DELETE FROM student WHERE ...  # 排他锁

UPDATE student SET ...  # 排他锁
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：InnoDB增删改默认加X锁，查默认不加锁</p></blockquote><h2 id="_3-复习" tabindex="-1"><a class="header-anchor" href="#_3-复习" aria-hidden="true">#</a> 3. 复习</h2><h3 id="_3-1-再谈隔离级别" tabindex="-1"><a class="header-anchor" href="#_3-1-再谈隔离级别" aria-hidden="true">#</a> 3. 1 再谈隔离级别</h3><p>我们知道事务有 4 个隔离级别，可能存在三种并发问题：</p><p><img src="`+a+'" alt="image-20230130164546130"></p><p>在MySQL中，默认的隔离级别是可重复读，可以解决脏读和不可重复读的问题，如果仅从定义的角度来看，它并不能解决幻读问题。如果我们想要解决幻读问题，就需要采用串行化的方式，也就是将隔离级别提升到最高，但这样一来就会大幅降低数据库的事务并发能力。</p><p>MVCC可以不采用锁机制，而是通过乐观锁的方式来解决不可重复读和幻读问题！它可以在大多数情况下替代行级锁，降低系统的开销。</p><p>另图：</p><p><img src="'+s+`" alt="image-20230130164606259"></p><blockquote><p>在面试的时候要按照第二幅图进行回答哦~</p><p>如果采用加锁的方式，那么就是间隙锁解决幻读问题。</p></blockquote><h3 id="_3-2-隐藏字段、undo-log版本链" tabindex="-1"><a class="header-anchor" href="#_3-2-隐藏字段、undo-log版本链" aria-hidden="true">#</a> 3. 2 隐藏字段、Undo Log版本链</h3><p>回顾一下undo日志的版本链，对于使用<code>InnoDB</code>存储引擎的表来说，它的聚簇索引记录中都包含两个必要的隐藏列(字段)。</p><ul><li>trx_id：每次一个事务对某条聚簇索引记录进行改动时，都会把该事务的事务id赋值给trx_id隐藏列。</li><li>roll_pointer：每次对某条聚簇索引记录进行改动时，都会把旧的版本写入到<code>undo日志</code>中，然后这个隐藏列就相当于一个指针，可以通过它来找到该记录修改前的信息。</li></ul><p><strong>举例：student 表数据如下</strong></p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select *from student;
+----+--------+--------+
| id | name   | class  |
+----+--------+--------+
|  1 | 张三   | 一班   |
+----+--------+--------+
1 row in set (0.01 sec)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假设插入该记录的<code>事务id</code>为<code>8</code>，那么此刻该条记录的示意图如下所示:</p><p><img src="`+c+'" alt="image-20230130164744113"></p><blockquote><p>insert undo只在事务回滚时起作用，当事务提交后，该类型的undo日志就没用了，它占用的UndoLog Segment也会被系统回收（也就是该undo日志占用的Undo页面链表要么被重用，要么被释放）。</p></blockquote><p>假设之后两个事务id分别为 10 、 20 的事务对这条记录进行UPDATE操作，操作流程如下：</p><table><thead><tr><th>发生时间 顺序</th><th>事务10</th><th>事务20</th></tr></thead><tbody><tr><td>1</td><td>BEGIN;</td><td></td></tr><tr><td>2</td><td></td><td>BEGIN;</td></tr><tr><td>3</td><td>UPDATE student SET name=&quot;李四&quot; WHERE id=1;</td><td></td></tr><tr><td>4</td><td>UPDATE student SET name=&quot;王五&quot; WHERE id=1;</td><td></td></tr><tr><td>5</td><td>COMMIT;</td><td></td></tr><tr><td>6</td><td></td><td>UPDATE student SET name=&quot;钱七&quot; WHERE id=1;</td></tr><tr><td>7</td><td></td><td>UPDATE student SET name=&quot;宋八&quot; WHERE id=1;</td></tr><tr><td>8</td><td></td><td>COMMIT;</td></tr></tbody></table><blockquote><p>能不能在两个事务中交叉更新同一条记录呢?不能!这不就是一个事务修改了另一个未提交事务修改过的数据，脏写。</p><p>InnoDB使用锁来保证不会有脏写情况的发生，也就是在第一个事务更新了某条记录后，就会给这条记录加锁，另一个事务再次更新时就需要等待第一个事务提交了，把锁释放之后才可以继续更新。</p></blockquote><p>每次对记录进行改动，都会记录一条undo日志，每条undo日志也都有一个<code>roll_pointer</code>属性（INSERT操作对应的undo日志没有该属性，因为该记录并没有更早的版本），可以将这些<code>undo日志</code>都连起来，串成一个链表：</p><p>update写的时候是默认加了X锁的,20会等待10</p><p><img src="'+t+'" alt="image-20230130165215416"></p><p>对该记录每次更新后，都会将旧值放到一条<code>undo日志</code>中，就算是该记录的一个旧版本，随着更新次数的增多，所有的版本都会被<code>roll_pointer</code>属性连接成一个链表，我们把这个链表称之为<code>版本链</code>，版本链的头节点就是当前记录最新的值。</p><p>每个版本中还包含生成该版本时对应的<code>事务id</code>。</p><h2 id="_4-mvcc实现原理之readview" tabindex="-1"><a class="header-anchor" href="#_4-mvcc实现原理之readview" aria-hidden="true">#</a> 4. MVCC实现原理之ReadView</h2><p>MVCC 的实现依赖于： <strong>隐藏字段、Undo Log、Read View</strong> 。</p><h3 id="_4-1-什么是readview" tabindex="-1"><a class="header-anchor" href="#_4-1-什么是readview" aria-hidden="true">#</a> 4.1 什么是ReadView</h3><p>在MVCC机制中，多个事务对同一个行记录进行更新会产生多个历史快照，这些历史快照保存在Undo Log里。如果一个事务想要查询这个行记录，需要读取哪个版本的行记录呢?这时就需要用到ReadView了，它帮我们解决了行的可见性问题。</p><p>ReadView就是事务在使用MVCC机制进行快照读操作时产生的读视图。当事务启动时，会生成数据库系统当前的一个快照，InnoDB为每个事务构造了一个数组，用来记录并维护系统当前活<code>跃事务的ID</code>(“活跃&quot;指的就是，启动了但还没提交)。</p><blockquote><p>ReadView和事务是一对一的关系~ 也就是当事务中使用MVVC，且是Select时会生成一个ReadView~</p></blockquote><h3 id="_4-2-设计思路" tabindex="-1"><a class="header-anchor" href="#_4-2-设计思路" aria-hidden="true">#</a> 4.2 设计思路</h3><p>使用<code>READ UNCOMMITTED</code>隔离级别的事务，由于可以读到未提交事务修改过的记录，所以直接读取记录的最新版本就好了。</p><p>使用<code>SERIALIZABLE</code>隔离级别的事务，InnoDB规定使用加锁的方式来访问记录。</p><p>使用<code>READ COMMITTED</code>和<code>REPEATABLE READ</code>隔离级别的事务，都必须保证读到已经提交了的事务修改过的记录。假如另一个事务已经修改了记录但是尚未提交，是不能直接读取最新版本的记录的，核心问题就是需要判断一下版本链中的哪个版本是当前事务可见的，这是ReadView要解决的主要问题。</p><p>这个ReadView中主要包含 4 个比较重要的内容，分别如下：</p><ol><li><p><code>creator_trx_id</code>，创建这个 Read View 的事务 ID。</p><blockquote><p>说明：只有在对表中的记录做改动时（执行INSERT、DELETE、UPDATE这些语句时）才会为事务分配事务id，否则在一个只读事务中的事务id值都默认为 0 。</p></blockquote></li><li><p><code>trx_ids</code>，表示在生成ReadView时当前系统中活跃的读写事务的<code>事务id列表</code>。</p></li><li><p><code>up_limit_id</code>，活跃的事务中最小的事务 ID。</p></li><li><p><code>low_limit_id</code>，表示生成ReadView时系统中应该分配给下一个事务的<code>id</code>值。<code>low_limit_id</code> 是系统最大的事务id值，这里要注意是系统中的事务id，需要区别于正在活跃的事务ID。</p></li></ol><blockquote><p>注意：low_limit_id并不是trx_ids中的最大值，事务id是递增分配的。比如，现在有id为 1 ，2 ， 3 这三个事务，之后id为 3 的事务提交了。那么一个新的读事务在生成ReadView时，trx_ids就包括 1 和 2 ，up_limit_id的值就是 1 ，low_limit_id的值就是 4 。</p></blockquote><p>举例:</p><p>trx_ids为tr2、tr3、tr:5和trx8的集合，系统的最大事务ID (low_limit_id)为trx8+1(如果之前没有其他的新增事务)，活跃的最小事务ID (up_limit_id)为trx2。</p><p><img src="'+l+'" alt="image-20230130165359240"></p><h3 id="_4-3-readview的规则" tabindex="-1"><a class="header-anchor" href="#_4-3-readview的规则" aria-hidden="true">#</a> 4.3 ReadView的规则</h3><p>有了这个ReadView，这样在访问某条记录时，只需要按照下边的步骤判断记录的某个版本是否可见。</p><ul><li>如果被访问版本的trx_id属性值与ReadView中的<code>creator_trx_id</code>值相同，意味着当前事务在访问它自己修改过的记录，所以该版本可以被当前事务访问。</li><li>如果被访问版本的trx_id属性值小于ReadView中的<code>up_limit_id</code>值，表明生成该版本的事务在当前事务生成ReadView前已经提交，所以该版本可以被当前事务访问。</li><li>如果被访问版本的trx_id属性值大于或等于ReadView中的<code>low_limit_id</code>值，表明生成该版本的事务在当前事务生成ReadView后才开启，所以该版本不可以被当前事务访问。</li><li>如果被访问版本的trx_id属性值在ReadView的up_limit_id和<code>low_limit_id</code>之间，那就需要判断一下trx_id属性值是不是在trx_ids列表中。</li><li>如果在，说明创建ReadView时生成该版本的事务还是活跃的，该版本不可以被访问。</li><li>如果不在，说明创建ReadView时生成该版本的事务已经被提交，该版本可以被访问。</li></ul><h3 id="_4-4-mvcc整体操作流程" tabindex="-1"><a class="header-anchor" href="#_4-4-mvcc整体操作流程" aria-hidden="true">#</a> 4. 4 MVCC整体操作流程</h3><p>了解了这些概念之后，我们来看下当查询一条记录的时候，系统如何通过MVCC找到它：</p><ol><li><p>首先获取事务自己的版本号，也就是事务 ID；</p></li><li><p>生成 ReadView；</p></li><li><p>查询得到的数据，然后与 ReadView 中的事务版本号进行比较；</p></li><li><p>如果不符合 ReadView 规则，就需要从 Undo Log 中获取历史快照；</p></li><li><p>最后返回符合规则的数据。</p></li></ol><p>如果某个版本的数据对当前事务不可见的话，那就顺着版本链找到下一个版本的数据，继续按照上边的步骤判断可见性，依此类推，直到版本链中的最后一个版本。如果最后一个版本也不可见的话，那么就意味着该条记录对该事务完全不可见，查询结果就不包含该记录。</p><blockquote><p>lnnoDB中，MVCC是通过Undo Log + Read View进行数据读取，Undo Log保存了历史快照，而Read View规则帮我们判断当前版本的数据是否可见。</p><p>Read View和事务是一对一对应的，而且Read View也是一个动态，不断变化的~</p></blockquote><p>在隔离级别为读已提交（Read Committed）时，一个事务中的每一次 SELECT 查询都会重新获取一次Read View。</p><p>如表所示：</p><table><thead><tr><th style="text-align:center;">事务</th><th>说明</th></tr></thead><tbody><tr><td style="text-align:center;">begin;</td><td></td></tr><tr><td style="text-align:center;">select * from student where id &gt;2;</td><td>获取一次Read View</td></tr><tr><td style="text-align:center;">.........</td><td></td></tr><tr><td style="text-align:center;">select * from student where id &gt;2;</td><td>获取一次Read View</td></tr><tr><td style="text-align:center;">commit;</td><td></td></tr></tbody></table><blockquote><p>注意，此时同样的查询语句都会重新获取一次 Read View，这时如果 Read View 不同，就可能产生不可重复读或者幻读的情况。</p></blockquote><p>当隔离级别为可重复读的时候，就避免了不可重复读，这是因为一个事务只在第一次 SELECT 的时候会获取一次 Read View，而后面所有的 SELECT 都会复用这个 Read View，如下表所示：</p><p><img src="'+o+`" alt="image-20230131160657468"></p><h2 id="_5-举例说明" tabindex="-1"><a class="header-anchor" href="#_5-举例说明" aria-hidden="true">#</a> 5. 举例说明</h2><p>假设现在student表中只有一条由事务id为8的事务插入的一条记录:</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select *from student;
+----+--------+--------+
| id | name   | class  |
+----+--------+--------+
|  1 | 张三   | 一班   |
+----+--------+--------+
1 row in set (0.01 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>MVCC只能在READ COMMITTED和REPEATABLE READ两个隔离级别下工作。接下来看一下<code>READ COMMITTED</code>和<code>REPEATABLE READ</code>所谓的生成ReadView的时机不同到底不同在哪里。</p><h3 id="_5-1-read-committed隔离级别下" tabindex="-1"><a class="header-anchor" href="#_5-1-read-committed隔离级别下" aria-hidden="true">#</a> 5. 1 READ COMMITTED隔离级别下</h3><p><strong>READ COMMITTED ：每次读取数据前都生成一个ReadView</strong> 。</p><p>现在有两个事务id分别为 <code>10</code> 、 <code>20</code> 的事务在执行：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># Transaction 10
BEGIN;
UPDATE student SET name=&quot;李四&quot; WHERE id= 1 ;
UPDATE student SET name=&quot;王五&quot; WHERE id= 1 ;

# Transaction 20
BEGIN;
# 更新了一些别的表的记录
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>说明:事务执行过程中，只有在第一次真正修改记录时（比如使用INSERT、DELETE、UPDATE语句)，才会被分配一个单独的事务id，这个事务id是递增的。所以我们才在事务2中更新些别的表的记录，目的是让它分配事务id。</p></blockquote><p>此刻，表student 中id为 1 的记录得到的版本链表如下所示：</p><p><img src="`+r+`" alt="image-20230131170029928"></p><p>假设现在有一个使用READ COMMITTED隔离级别的事务开始执行：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># 使用READ COMMITTED隔离级别的事务
BEGIN;

# SELECT1：Transaction 10、 20 未提交
SELECT * FROM student WHERE id = 1 ; # 得到的列name的值为&#39;张三&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个SELECT1的执行过程如下:</p><p>步骤1: 在执行SELECT语句时会先生成一个<code>ReadView</code> , ReadView的 <code>trx_ids</code>列表的内容就是<code>[10，20]</code>，<code>up_limit_id</code>为10, <code>low_limit_id</code>为21, <code>creator_trx_id</code>为0。</p><p>步骤2:从版本链中挑选可见的记录，从图中看出，最新版本的列<code>name</code>的内容是&#39;<code>王五</code>&#39;，该版本的<code>trx_id</code>值为<code>10</code>，在<code>trx_ids</code>列表内，所以不符合可见性要求，根据roll_pointer跳到下一个版本。</p><p>步骤3:下一个版本的列<code>name</code>的内容是&#39;<code>李四</code>&#39;，该版本的<code>trx_id</code>值也为<code>10</code>，也在<code>trx_ids</code>列表内，所以也不</p><p>符合要求，继续跳到下一个版本。</p><p>步骤4:下一个版本的列<code>name</code>的内容是&#39;<code>张三</code>&#39;，该版本的<code>trx_id</code>值为8，小于ReadView中的<code>up_limit_id</code>值<code>10</code>，所以这个版本是符合要求的，最后返回给用户的版本就是这条列<code>name</code>为‘<code>张三</code>&#39;的记录。</p><p>之后，我们把<code>事务id</code>为 <code>10</code> 的事务提交一下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># Transaction 10
BEGIN;

UPDATE student SET name=&quot;李四&quot; WHERE id= 1 ;
UPDATE student SET name=&quot;王五&quot; WHERE id= 1 ;

COMMIT;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后再到事务id为 20 的事务中更新一下表student中id为 1 的记录：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># Transaction 20
BEGIN;

# 更新了一些别的表的记录
...
UPDATE student SET name=&quot;钱七&quot; WHERE id= 1 ;
UPDATE student SET name=&quot;宋八&quot; WHERE id= 1 ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此刻，表student中id为 1 的记录的版本链就长这样：</p><p><img src="`+u+`" alt="image-20230131170300061"></p><p>然后再到刚才使用READ COMMITTED隔离级别的事务中继续查找这个id为 1 的记录，如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># 使用READ COMMITTED隔离级别的事务
BEGIN;

# SELECT1：Transaction 10、 20 均未提交
SELECT * FROM student WHERE id = 1 ; # 得到的列name的值为&#39;张三&#39;

# SELECT2：Transaction 10提交，Transaction 20未提交
SELECT * FROM student WHERE id = 1 ; # 得到的列name的值为&#39;王五&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个<code>SELECT2</code>的执行过程如下:</p><p>步骤1:在执行<code>SELECT</code>语句时会又会单独生成一个<code>ReadView</code>，该ReadView的trx_ids列表的内容就是[<code>20</code>],<code>up_limitid</code>为.20,<code>low_limit_id</code>为21, <code>creator_trx_id</code>为<code>0</code>。</p><p>步骤2:从版本链中挑选可见的记录，从图中看出，最新版本的列<code>name</code>的内容是‘<code>宋八</code>‘，该版本的<code>trx_id</code>值为20，在<code>trx_ids</code>列表内，所以不符合可见性要求，根据<code>roll_pointer</code>跳到下一个版本。</p><p>步骤3:下一个版本的列<code>name</code>的内容是‘<code>钱七</code>&#39;，该版本的<code>trx_id</code>值为<code>28</code>，也在<code>trx_ids</code>列表内，所以也不符合要求，继续跳到下一个版本。</p><p>步骤4:下一个版本的列<code>name</code>的内容是&#39;<code>王五</code>&#39;，该版本的<code>trx_id</code>值为10，小于<code>ReadView</code>中的<code>up_limit_id</code>值20，所以这个版本是符合要求的，最后返回给用户的版本就是这条列<code>name</code>为‘<code>王五</code>‘的记录。</p><p>以此类推，如果之后事务id为20的记录也提交了，再次在使用READ COMMITTED隔离级别的事务中查询表student中id值为1的记录时，得到的结果就是‘宋八&#39;了，具体流程我们就不分析了。</p><blockquote><p>强调: 使用READ COMMITTED隔离级别的事务在每次查询开始时都会生成一个独立的ReadView。</p></blockquote><h3 id="_5-2-repeatable-read隔离级别下" tabindex="-1"><a class="header-anchor" href="#_5-2-repeatable-read隔离级别下" aria-hidden="true">#</a> 5. 2 REPEATABLE READ隔离级别下</h3><p>使用<code>REPEATABLE READ</code>隔离级别的事务来说，只会在第一次执行查询语句时生成一个<code>ReadView</code>，之后的查询就不会重复生成了。</p><p>比如，系统里有两个事务id分别为 10 、 20 的事务在执行：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># 开始记录
mysql&gt; select *from student;
+----+--------+--------+
| id | name   | class  |
+----+--------+--------+
|  1 | 张三   | 一班   |
+----+--------+--------+
1 row in set (0.01 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># Transaction 10
BEGIN;
UPDATE student SET name=&quot;李四&quot; WHERE id= 1 ;
UPDATE student SET name=&quot;王五&quot; WHERE id= 1 ;

# Transaction 20
BEGIN;
# 更新了一些别的表的记录
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此刻，表student 中id为 1 的记录得到的版本链表如下所示：</p><p><img src="`+p+`" alt="image-20230131170424180"></p><p>假设现在有一个使用<code>REPEATABLE READ</code>隔离级别的事务开始执行：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># 使用REPEATABLE READ隔离级别的事务
BEGIN;

# SELECT1：Transaction 10、 20 未提交
SELECT * FROM student WHERE id = 1 ; # 得到的列name的值为&#39;张三&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个SELECT1的执行过程如下（<code>第一个ReadView和读已提交是一样的)</code>:</p><p>步骤1: 在执行SELECT语句时会先生成一个<code>ReadView</code> , ReadView的 <code>trx_ids</code>列表的内容就是<code>[10，20]</code>，<code>up_limit_id</code>为10, <code>low_limit_id</code>为21, <code>creator_trx_id</code>为0。</p><p>步骤2:从版本链中挑选可见的记录，从图中看出，最新版本的列<code>name</code>的内容是&#39;<code>王五</code>&#39;，该版本的<code>trx_id</code>值为<code>10</code>，在<code>trx_ids</code>列表内，所以不符合可见性要求，根据roll_pointer跳到下一个版本。</p><p>步骤3:下一个版本的列<code>name</code>的内容是&#39;<code>李四</code>&#39;，该版本的<code>trx_id</code>值也为<code>10</code>，也在<code>trx_ids</code>列表内，所以也不</p><p>符合要求，继续跳到下一个版本。</p><p>步骤4:下一个版本的列<code>name</code>的内容是&#39;<code>张三</code>&#39;，该版本的<code>trx_id</code>值为8，小于ReadView中的<code>up_limit_id</code>值<code>10</code>，所以这个版本是符合要求的，最后返回给用户的版本就是这条列<code>name</code>为‘<code>张三</code>&#39;的记录。</p><p>之后，我们把<code>事务id</code>为 <code>10</code> 的事务提交一下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># Transaction 10
BEGIN;

UPDATE student SET name=&quot;李四&quot; WHERE id= 1 ;
UPDATE student SET name=&quot;王五&quot; WHERE id= 1 ;

COMMIT;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后再到事务id为 20 的事务中更新一下表student中id为 1 的记录：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># Transaction 20
BEGIN;

# 更新了一些别的表的记录
...
UPDATE student SET name=&quot;钱七&quot; WHERE id= 1 ;
UPDATE student SET name=&quot;宋八&quot; WHERE id= 1 ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此刻，表student 中id为 1 的记录的版本链长这样：</p><p><img src="`+m+`" alt="image-20230131170550677"></p><p>然后再到刚才使用REPEATABLE READ隔离级别的事务中继续查找这个id为 1 的记录，如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code># 使用REPEATABLE READ隔离级别的事务
BEGIN;

# SELECT1：Transaction 10、 20 均未提交
SELECT * FROM student WHERE id = 1 ; # 得到的列name的值为&#39;张三&#39;

# SELECT2：Transaction 10提交，Transaction 20未提交
SELECT * FROM student WHERE id = 1 ; # 得到的列name的值仍为&#39;张三&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个<code>SELECT2</code>的执行过程如下:</p><p>步骤1:在执行<code>SELECT</code>语句时会继续使用之前的<code>ReadView</code>，该ReadView的trx_ids列表的内容就是[10，20]<code>，</code>up_limit_id<code>为10, </code>low_limit_id<code>为21, \`\`creator_trx_id</code>为0。</p><p>步骤2:然后从版本链中挑选可见的记录，从图中可以看出，最新版本的列name的内容是&#39;宋八&#39;，该版本的trx_id值为20，在trx_ids列表内，所以不符合可见性要求，根据roll_pointer跳到下一个版本。</p><p>步骤3:下一个版本的列name的内容是&#39;钱七&#39;，该版本的trx_id值为20，也在trx_ids列表内，所以也不符合要求，继续跳到下一个版本。</p><p>步骤4∶下一个版本的列name的内容是&#39;王五&#39;，该版本的trx_id值为10，而trx_ids列表中是包含值为10的事务id的，所以该版本也不符合要求，同理下一个列name的内容是&#39;李四’的版本也不符合要求。继续跳到下一个版本。</p><p>步骤5∶下一个版本的列name的内容是‘张三&#39;，该版本的trx_id值为80，小于ReadView中的up_limit_id值10，所以这个版本是符合要求的，最后返回给用户的版本就是这条列c为‘张三&#39;的记录。</p><p>两次SELECT查询得到的结果是重复的，记录的列c值都是‘张三&#39;，这就是可重复读的含义。如果我们之后再把事务id为20的记录提交了，然后再到刚才使用REPEATABLE READ隔离级别的事务中继续查找这个id为1的记录，得到的结果还是‘张三&#39;，具体执行过程大家可以自己分析一下。</p><h3 id="_5-3-如何解决幻读" tabindex="-1"><a class="header-anchor" href="#_5-3-如何解决幻读" aria-hidden="true">#</a> 5. 3 如何解决幻读</h3><p>接下来说明InnoDB 是如何解决幻读的。</p><p>假设现在表 student 中只有一条数据，数据内容中，主键 id=1，隐藏的 trx_id=10，它的 undo log 如下图所示。</p><p><img src="`+v+`" alt="image-20230131170636804"></p><p>假设现在有事务 A 和事务 B 并发执行，事务 A 的事务 id 为 20 ，事务 B 的事务 id 为 30 。</p><p>步骤 1 ：事务 A 开始第一次查询数据，查询的 SQL 语句如下。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select * from student where id &gt;= 1 ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在开始查询之前，MySQL 会为事务 A 产生一个 ReadView，此时 ReadView 的内容如下：<code>trx_ids=[20,30]，up_limit_id=20，low_limit_id=31，creator_trx_id=20</code>。</p><p>由于此时表 student 中只有一条数据，且符合 where id&gt;=1 条件，因此会查询出来。然后根据 ReadView机制，发现该行数据的trx_id=10，小于事务 A 的 ReadView 里 up_limit_id，这表示这条数据是事务 A 开启之前，其他事务就已经提交了的数据，因此事务 A 可以读取到。</p><p>结论：事务 A 的第一次查询，能读取到一条数据，id=1。</p><p>步骤 2 ：接着事务 B(trx_id=30)，往表 student 中新插入两条数据，并提交事务。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>insert into student(id,name) values( 2 ,&#39;李四&#39;);
insert into student(id,name) values( 3 ,&#39;王五&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>此时表student 中就有三条数据了，对应的 undo 如下图所示：</p><p><img src="`+E+'" alt="image-20230131170730357"></p><p>步骤 3 ：接着事务 A 开启第二次查询，根据可重复读隔离级别的规则，此时事务 A 并不会再重新生成ReadView。此时表 student 中的 3 条数据都满足 where id&gt;=1 的条件，因此会先查出来。然后根据ReadView 机制，判断每条数据是不是都可以被事务 A 看到。</p><p>1 ）首先 id=1 的这条数据，前面已经说过了，可以被事务 A 看到。</p><p>2 ）然后是 id=2 的数据，它的 trx_id=30，此时事务 A 发现，这个值处于 up_limit_id 和 low_limit_id 之间，因此还需要再判断 30 是否处于 trx_ids 数组内。由于事务 A 的 trx_ids=[20,30]，因此在数组内，这表示 id=2 的这条数据是与事务 A 在同一时刻启动的其他事务提交的，所以这条数据不能让事务 A 看到。</p><p>3 ）同理，id=3 的这条数据，trx_id 也为 30 ，因此也不能被事务 A 看见。</p><p><img src="'+b+'" alt="image-20230131170811967"></p><p>结论：最终事务 A 的第二次查询，只能查询出 id=1 的这条数据。这和事务 A 的第一次查询的结果是一样的，因此没有出现幻读现象，所以说在 MySQL 的可重复读隔离级别下，不存在幻读问题。</p><h2 id="_6-总结" tabindex="-1"><a class="header-anchor" href="#_6-总结" aria-hidden="true">#</a> 6. 总结</h2><p>这里介绍了<code>MVCC</code>在<code>READ COMMITTD</code>、<code>REPEATABLE READ</code>这两种隔离级别的事务在执行快照读操作时访问记录的版本链的过程。这样使不同事务的读-写、写-读操作并发执行，从而提升系统性能。</p><p>核心点在于 ReadView 的原理，<code>READ COMMITTD</code>、<code>REPEATABLE READ</code>这两个隔离级别的一个很大不同就是生成ReadView的时机不同：</p><ul><li><code>READ COMMITTD</code>在每一次进行普通SELECT操作前都会生成一个ReadView</li><li><code>REPEATABLE READ</code>只在第一次进行普通SELECT操作前生成一个ReadView，之后的查询操作都重复使用这个ReadView就好了。</li></ul><blockquote><p>说明: 我们之前说执行DELETE语句或者更新主键的UPDATE语句并不会立即把对应的记录完全从页面中删除,而是执行一个所谓的delete mark操作，相当于只是对记录打上了一个删除标志位，这主要就是为MVCc服务的。</p></blockquote><p>通过MVCC我们可以解决:</p><ol><li><p><code>读写之间阻塞的问题</code>。通过MVCC可以让读写互相不阻塞，即读不阻塞写，写不阻塞读，这样就可以提升事 务并发处理能力。</p></li><li><p><code>降低了死锁的概率</code>。这是因为MVCC采用了乐观锁的方式，读取数据时并不需要加锁，对于写操作，也只锁 定必要的行。</p></li><li><p><code>解决快照读的问题</code>。当我们查询数据库在某个时间点的快照时，只能看到这个时间点之前事务提交更新的结 果，而不能看到这个时间点之后事务提交的更新结果。</p></li></ol>',162),R=[h];function T(g,q){return d(),i("div",null,R)}const A=e(_,[["render",T],["__file","第16章_多版本并发控制.html.vue"]]);export{A as default};
