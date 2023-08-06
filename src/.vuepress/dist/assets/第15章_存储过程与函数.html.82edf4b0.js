import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as n,a as d}from"./app.9b10ba0a.js";const s={},a=d(`<p>MySQL 从 5.0 版本开始支持存储过程和函数。存储过程和函数能够将复杂的 SQL 逻辑封装在一起，应用程序无须关注存储过程和函数内部复杂的 SQL 逻辑，而只需要简单地调用存储过程和函数即可。</p><h2 id="_1-存储过程概述" tabindex="-1"><a class="header-anchor" href="#_1-存储过程概述" aria-hidden="true">#</a> 1. 存储过程概述</h2><h3 id="_1-1-理解" tabindex="-1"><a class="header-anchor" href="#_1-1-理解" aria-hidden="true">#</a> 1.1 理解</h3><p><strong>含义</strong>：存储过程的英文是 <code>Stored Procedure</code>。它的思想很简单，就是一组经过<code>预先编译</code>的 SQL 语句的封装。</p><p>执行过程：存储过程预先存储在 MySQL 服务器上，需要执行的时候，客户端只需要向服务器端发出调用存储过程的命令，服务器端就可以把预先存储好的这一系列 SQL 语句全部执行。</p><p><strong>好处</strong>：</p><p>1、简化操作，提高了 sql 语句的重用性，减少了开发程序员的压力</p><p>2、减少操作过程中的失误，提高效率</p><p>3、减少网络传输量（客户端不需要把所有的 SQL 语句通过网络发给服务器）</p><p>4、减少了 SQL 语句暴露在网上的风险，也提高了数据查询的安全性</p><p><strong>和视图、函数的对比</strong>：</p><p>它和视图有着同样的优点，清晰、安全，还可以减少网络传输量。不过它和视图不同，视图是<code>虚拟表</code>，通常不对底层数据表直接操作，而存储过程是程序化的 SQL，可以<code>直接操作底层数据表</code>，相比于面向集合的操作方式，能够实现一些更复杂的数据处理。</p><p>一旦存储过程被创建出来，使用它就像使用函数一样简单，我们直接通过调用存储过程名即可。相较于函数，存储过程是<code>没有返回值</code>的。</p><h3 id="_1-2-分类" tabindex="-1"><a class="header-anchor" href="#_1-2-分类" aria-hidden="true">#</a> 1.2 分类</h3><p>存储过程的参数类型可以是 IN、OUT 和 INOUT。根据这点分类如下：</p><p>1、没有参数（无参数无返回）</p><p>2、仅仅带 IN 类型（有参数无返回）</p><p>3、仅仅带 OUT 类型（无参数有返回）</p><p>4、既带 IN 又带 OUT（有参数有返回）</p><p>5、带 INOUT（有参数有返回）</p><p>注意：IN、OUT、INOUT 都可以在一个存储过程中带多个。</p><h2 id="_2-创建存储过程" tabindex="-1"><a class="header-anchor" href="#_2-创建存储过程" aria-hidden="true">#</a> 2. 创建存储过程</h2><h3 id="_2-1-语法分析" tabindex="-1"><a class="header-anchor" href="#_2-1-语法分析" aria-hidden="true">#</a> 2.1 语法分析</h3><p>语法：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CREATE PROCEDURE 存储过程名(IN|OUT|INOUT 参数名 参数类型,...)
[characteristics ...]
BEGIN
	存储过程体

END
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类似于 Java 中的方法：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>修饰符 返回类型 方法名(参数类型 参数名,...){

	方法体;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p><p>1、参数前面的符号的意思</p><ul><li><p><code>IN</code>：当前参数为输入参数，也就是表示入参；</p><p>存储过程只是读取这个参数的值。如果没有定义参数种类，<code>默认就是 IN</code>，表示输入参数。</p></li><li><p><code>OUT</code>：当前参数为输出参数，也就是表示出参；</p><p>执行完成之后，调用这个存储过程的客户端或者应用程序就可以读取这个参数返回的值了。</p></li><li><p><code>INOUT</code>：当前参数既可以为输入参数，也可以为输出参数。</p></li></ul><p>2、形参类型可以是 MySQL 数据库中的任意类型。</p><p>3、<code>characteristics</code> 表示创建存储过程时指定的对存储过程的约束条件，其取值信息如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>LANGUAGE SQL
| [NOT] DETERMINISTIC
| { CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA }
| SQL SECURITY { DEFINER | INVOKER }
| COMMENT &#39;string&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>LANGUAGE SQL</code>：说明存储过程执行体是由 SQL 语句组成的，当前系统支持的语言为 SQL。</li><li><code>[NOT] DETERMINISTIC</code>：指明存储过程执行的结果是否确定。DETERMINISTIC 表示结果是确定的。每次执行存储过程时，相同的输入会得到相同的输出。NOT DETERMINISTIC 表示结果是不确定的，相同的输入可能得到不同的输出。如果没有指定任意一个值，默认为 NOT DETERMINISTIC。</li><li><code>{ CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA }</code>：指明子程序使用 SQL 语句的限制。 <ul><li>CONTAINS SQL 表示当前存储过程的子程序包含 SQL 语句，但是并不包含读写数据的 SQL 语句；</li><li>NO SQL 表示当前存储过程的子程序中不包含任何 SQL 语句；</li><li>READS SQL DATA 表示当前存储过程的子程序中包含读数据的 SQL 语句；</li><li>MODIFIES SQL DATA 表示当前存储过程的子程序中包含写数据的 SQL 语句。</li><li>默认情况下，系统会指定为 CONTAINS SQL。</li></ul></li><li><code>SQL SECURITY { DEFINER | INVOKER }</code>：执行当前存储过程的权限，即指明哪些用户能够执行当前存储过程。 <ul><li><code>DEFINER</code>表示只有当前存储过程的创建者或者定义者才能执行当前存储过程；</li><li><code>INVOKER</code>表示拥有当前存储过程的访问权限的用户能够执行当前存储过程。</li><li>如果没有设置相关的值，则 MySQL 默认指定值为 DEFINER。</li></ul></li><li><code>COMMENT &#39;string&#39;</code>：注释信息，可以用来描述存储过程。</li></ul><p>4、存储过程体中可以有多条 SQL 语句，如果仅仅一条 SQL 语句，则可以省略 BEGIN 和 END</p><p>编写存储过程并不是一件简单的事情，可能存储过程中需要复杂的 SQL 语句。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>1. BEGIN…END：BEGIN…END 中间包含了多个语句，每个语句都以（;）号为结束符。
2. DECLARE：DECLARE 用来声明变量，使用的位置在于 BEGIN…END 语句中间，而且需要在其他语句使用之前进行变量的声明。
3. SET：赋值语句，用于对变量进行赋值。
4. SELECT… INTO：把从数据表中查询的结果存放到变量中，也就是为变量赋值。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、需要设置新的结束标记</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DELIMITER 新的结束标记
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>因为 MySQL 默认的语句结束符号为分号‘;’。为了避免与存储过程中 SQL 语句结束符相冲突，需要使用 DELIMITER 改变存储过程的结束符。</p><p>比如：“DELIMITER //”语句的作用是将 MySQL 的结束符设置为//，并以“END //”结束存储过程。存储过程定义完毕之后再使用“DELIMITER ;”恢复默认结束符。DELIMITER 也可以指定其他符号作为结束符。</p><p>当使用 DELIMITER 命令时，应该避免使用反斜杠（‘\\’）字符，因为反斜线是 MySQL 的转义字符。</p><p>示例：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DELIMITER $

CREATE PROCEDURE 存储过程名(IN|OUT|INOUT 参数名  参数类型,...)
[characteristics ...]
BEGIN
	sql语句1;
	sql语句2;

END $
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-代码举例" tabindex="-1"><a class="header-anchor" href="#_2-2-代码举例" aria-hidden="true">#</a> 2.2 代码举例</h3><p>举例 1：创建存储过程 select_all_data()，查看 emps 表的所有数据</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DELIMITER $

CREATE PROCEDURE select_all_data()
BEGIN
	SELECT * FROM emps;

END $

DELIMITER ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例 2：创建存储过程 avg_employee_salary()，返回所有员工的平均工资</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DELIMITER //

CREATE PROCEDURE avg_employee_salary ()
BEGIN
	SELECT AVG(salary) AS avg_salary FROM emps;
END //

DELIMITER ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例 3：创建存储过程 show_max_salary()，用来查看“emps”表的最高薪资值。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CREATE PROCEDURE show_max_salary()
	LANGUAGE SQL
	NOT DETERMINISTIC
	CONTAINS SQL
	SQL SECURITY DEFINER
	COMMENT &#39;查看最高薪资&#39;
	BEGIN
		SELECT MAX(salary) FROM emps;
	END //

DELIMITER ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例 4：创建存储过程 show_min_salary()，查看“emps”表的最低薪资值。并将最低薪资通过 OUT 参数“ms”输出</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DELIMITER //

CREATE PROCEDURE show_min_salary(OUT ms DOUBLE)
	BEGIN
		SELECT MIN(salary) INTO ms FROM emps;
	END //

DELIMITER ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例 5：创建存储过程 show_someone_salary()，查看“emps”表的某个员工的薪资，并用 IN 参数 empname 输入员工姓名。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DELIMITER //

CREATE PROCEDURE show_someone_salary(IN empname VARCHAR(20))
	BEGIN
		SELECT salary FROM emps WHERE ename = empname;
	END //

DELIMITER ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例 6：创建存储过程 show_someone_salary2()，查看“emps”表的某个员工的薪资，并用 IN 参数 empname 输入员工姓名，用 OUT 参数 empsalary 输出员工薪资。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DELIMITER //

CREATE PROCEDURE show_someone_salary2(IN empname VARCHAR(20),OUT empsalary DOUBLE)
	BEGIN
		SELECT salary INTO empsalary FROM emps WHERE ename = empname;
	END //

DELIMITER ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例 7：创建存储过程 show_mgr_name()，查询某个员工领导的姓名，并用 INOUT 参数“empname”输入员工姓名，输出领导的姓名。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DELIMITER //

CREATE PROCEDURE show_mgr_name(INOUT empname VARCHAR(20))
	BEGIN
		SELECT ename INTO empname FROM emps
		WHERE eid = (SELECT MID FROM emps WHERE ename=empname);
	END //

DELIMITER ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-调用存储过程" tabindex="-1"><a class="header-anchor" href="#_3-调用存储过程" aria-hidden="true">#</a> 3. 调用存储过程</h2><h3 id="_3-1-调用格式" tabindex="-1"><a class="header-anchor" href="#_3-1-调用格式" aria-hidden="true">#</a> 3.1 调用格式</h3><p>存储过程有多种调用方法。存储过程必须使用 CALL 语句调用，并且存储过程和数据库相关，如果要执行其他数据库中的存储过程，需要指定数据库名称，例如 CALL dbname.procname。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CALL 存储过程名(实参列表)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>格式：</strong></p><p>1、调用 in 模式的参数：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CALL sp1(&#39;值&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、调用 out 模式的参数：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SET @name;
CALL sp1(@name);
SELECT @name;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、调用 inout 模式的参数：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SET @name=值;
CALL sp1(@name);
SELECT @name;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-代码举例" tabindex="-1"><a class="header-anchor" href="#_3-2-代码举例" aria-hidden="true">#</a> 3.2 代码举例</h3><p><strong>举例 1：</strong></p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DELIMITER //

CREATE PROCEDURE CountProc(IN sid INT,OUT num INT)
BEGIN
	SELECT COUNT(*) INTO num FROM fruits
	WHERE s_id = sid;
END //

DELIMITER ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用存储过程：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; CALL CountProc (101, @num);
Query OK, 1 row affected (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看返回结果：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT @num;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该存储过程返回了指定 s_id=101 的水果商提供的水果种类，返回值存储在 num 变量中，使用 SELECT 查看，返回结果为 3。</p><p>**举例 2：**创建存储过程，实现累加运算，计算 1+2+…+n 等于多少。具体的代码如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DELIMITER //
CREATE PROCEDURE \`add_num\`(IN n INT)
BEGIN
       DECLARE i INT;
       DECLARE sum INT;

       SET i = 1;
       SET sum = 0;
       WHILE i &lt;= n DO
              SET sum = sum + i;
              SET i = i +1;
       END WHILE;
       SELECT sum;
END //
DELIMITER ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你用的是 Navicat 工具，那么在编写存储过程的时候，Navicat 会自动设置 DELIMITER 为其他符号，我们不需要再进行 DELIMITER 的操作。</p><p>直接使用 <code>CALL add_num(50);</code>即可。这里我传入的参数为 50，也就是统计 1+2+…+50 的积累之和。</p><h3 id="_3-3-如何调试" tabindex="-1"><a class="header-anchor" href="#_3-3-如何调试" aria-hidden="true">#</a> 3.3 如何调试</h3><p>在 MySQL 中，存储过程不像普通的编程语言（比如 VC++、Java 等）那样有专门的集成开发环境。因此，你可以通过 SELECT 语句，把程序执行的中间结果查询出来，来调试一个 SQL 语句的正确性。调试成功之后，把 SELECT 语句后移到下一个 SQL 语句之后，再调试下一个 SQL 语句。这样<code>逐步推进</code>，就可以完成对存储过程中所有操作的调试了。当然，你也可以把存储过程中的 SQL 语句复制出来，逐段单独调试。</p><h2 id="_4-存储函数的使用" tabindex="-1"><a class="header-anchor" href="#_4-存储函数的使用" aria-hidden="true">#</a> 4. 存储函数的使用</h2><p>前面学习了很多函数，使用这些函数可以对数据进行的各种处理操作，极大地提高用户对数据库的管理效率。MySQL 支持自定义函数，定义好之后，调用方式与调用 MySQL 预定义的系统函数一样。</p><h3 id="_4-1-语法分析" tabindex="-1"><a class="header-anchor" href="#_4-1-语法分析" aria-hidden="true">#</a> 4.1 语法分析</h3><p>学过的函数：LENGTH、SUBSTR、CONCAT 等</p><p>语法格式：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CREATE FUNCTION 函数名(参数名 参数类型,...)
RETURNS 返回值类型
[characteristics ...]
BEGIN
	函数体   #函数体中肯定有 RETURN 语句

END
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p><p>1、参数列表：指定参数为 IN、OUT 或 INOUT 只对 PROCEDURE 是合法的，FUNCTION 中总是默认为 IN 参数。</p><p>2、RETURNS type 语句表示函数返回数据的类型；</p><p>RETURNS 子句只能对 FUNCTION 做指定，对函数而言这是<code>强制</code>的。它用来指定函数的返回类型，而且函数体必须包含一个<code>RETURN value</code>语句。</p><p>3、characteristic 创建函数时指定的对函数的约束。取值与创建存储过程时相同，这里不再赘述。</p><p>4、函数体也可以用 BEGIN…END 来表示 SQL 代码的开始和结束。如果函数体只有一条语句，也可以省略 BEGIN…END。</p><h3 id="_4-2-调用存储函数" tabindex="-1"><a class="header-anchor" href="#_4-2-调用存储函数" aria-hidden="true">#</a> 4.2 调用存储函数</h3><p>在 MySQL 中，存储函数的使用方法与 MySQL 内部函数的使用方法是一样的。换言之，用户自己定义的存储函数与 MySQL 内部函数是一个性质的。区别在于，存储函数是<code>用户自己定义</code>的，而内部函数是 MySQL 的<code>开发者定义</code>的。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT 函数名(实参列表)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-3-代码举例" tabindex="-1"><a class="header-anchor" href="#_4-3-代码举例" aria-hidden="true">#</a> 4.3 代码举例</h3><p><strong>举例 1：</strong></p><p>创建存储函数，名称为 email_by_name()，参数定义为空，该函数查询 Abel 的 email，并返回，数据类型为字符串型。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DELIMITER //

CREATE FUNCTION email_by_name()
RETURNS VARCHAR(25)
DETERMINISTIC
CONTAINS SQL
BEGIN
	RETURN (SELECT email FROM employees WHERE last_name = &#39;Abel&#39;);
END //

DELIMITER ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT email_by_name();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>举例 2：</strong></p><p>创建存储函数，名称为 email_by_id()，参数传入 emp_id，该函数查询 emp_id 的 email，并返回，数据类型为字符串型。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DELIMITER //

CREATE FUNCTION email_by_id(emp_id INT)
RETURNS VARCHAR(25)
DETERMINISTIC
CONTAINS SQL
BEGIN
	RETURN (SELECT email FROM employees WHERE employee_id = emp_id);
END //

DELIMITER ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SET @emp_id = 102;
SELECT email_by_id(102);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>举例 3：</strong></p><p>创建存储函数 count_by_id()，参数传入 dept_id，该函数查询 dept_id 部门的员工人数，并返回，数据类型为整型。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DELIMITER //

CREATE FUNCTION count_by_id(dept_id INT)
RETURNS INT
	LANGUAGE SQL
	NOT DETERMINISTIC
	READS SQL DATA
	SQL SECURITY DEFINER
	COMMENT &#39;查询部门平均工资&#39;
BEGIN
	RETURN (SELECT COUNT(*) FROM employees WHERE department_id = dept_id);

END //

DELIMITER ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SET @dept_id = 50;
SELECT count_by_id(@dept_id);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：</strong></p><p>若在创建存储函数中报错“<code>you might want to use the less safe log_bin_trust_function_creators variable</code>”，有两种处理方法：</p><ul><li><p>方式 1：加上必要的函数特性“[NOT] DETERMINISTIC”和“{CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA}”</p></li><li><p>方式 2：</p></li></ul><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SET GLOBAL log_bin_trust_function_creators = 1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-4-对比存储函数和存储过程" tabindex="-1"><a class="header-anchor" href="#_4-4-对比存储函数和存储过程" aria-hidden="true">#</a> 4.4 对比存储函数和存储过程</h3><table><thead><tr><th></th><th>关键字</th><th>调用语法</th><th>返回值</th><th>应用场景</th></tr></thead><tbody><tr><td>存储过程</td><td>PROCEDURE</td><td>CALL 存储过程()</td><td>理解为有 0 个或多个</td><td>一般用于更新</td></tr><tr><td>存储函数</td><td>FUNCTION</td><td>SELECT 函数()</td><td>只能是一个</td><td>一般用于查询结果为一个值并返回时</td></tr></tbody></table><p>此外，<strong>存储函数可以放在查询语句中使用，存储过程不行</strong>。反之，存储过程的功能更加强大，包括能够执行对表的操作（比如创建表，删除表等）和事务操作，这些功能是存储函数不具备的。</p><h2 id="_5-存储过程和函数的查看、修改、删除" tabindex="-1"><a class="header-anchor" href="#_5-存储过程和函数的查看、修改、删除" aria-hidden="true">#</a> 5. 存储过程和函数的查看、修改、删除</h2><h3 id="_5-1-查看" tabindex="-1"><a class="header-anchor" href="#_5-1-查看" aria-hidden="true">#</a> 5.1 查看</h3><p>创建完之后，怎么知道我们创建的存储过程、存储函数是否成功了呢？</p><p>MySQL 存储了存储过程和函数的状态信息，用户可以使用 SHOW STATUS 语句或 SHOW CREATE 语句来查看，也可直接从系统的 information_schema 数据库中查询。这里介绍 3 种方法。</p><p><strong>1. 使用 SHOW CREATE 语句查看存储过程和函数的创建信息</strong></p><p>基本语法结构如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SHOW CREATE {PROCEDURE | FUNCTION} 存储过程名或函数名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>举例：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SHOW CREATE FUNCTION test_db.CountProc \\G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2. 使用 SHOW STATUS 语句查看存储过程和函数的状态信息</strong></p><p>基本语法结构如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SHOW {PROCEDURE | FUNCTION} STATUS [LIKE &#39;pattern&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个语句返回子程序的特征，如数据库、名字、类型、创建者及创建和修改日期。</p><p>[LIKE &#39;pattern&#39;]：匹配存储过程或函数的名称，可以省略。当省略不写时，会列出 MySQL 数据库中存在的所有存储过程或函数的信息。 举例：SHOW STATUS 语句示例，代码如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SHOW PROCEDURE STATUS LIKE &#39;SELECT%&#39; \\G
*************************** 1. row ***************************
                  Db: test_db
                Name: SelectAllData
                Type: PROCEDURE
             Definer: root@localhost
            Modified: 2021-10-16 15:55:07
             Created: 2021-10-16 15:55:07
       Security_type: DEFINER
             Comment:
character_set_client: utf8mb4
collation_connection: utf8mb4_general_ci
  Database Collation: utf8mb4_general_ci
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3. 从 information_schema.Routines 表中查看存储过程和函数的信息</strong></p><p>MySQL 中存储过程和函数的信息存储在 information_schema 数据库下的 Routines 表中。可以通过查询该表的记录来查询存储过程和函数的信息。其基本语法形式如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT * FROM information_schema.Routines
WHERE ROUTINE_NAME=&#39;存储过程或函数的名&#39; [AND ROUTINE_TYPE = {&#39;PROCEDURE|FUNCTION&#39;}];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：如果在 MySQL 数据库中存在存储过程和函数名称相同的情况，最好指定 ROUTINE_TYPE 查询条件来指明查询的是存储过程还是函数。</p><p>举例：从 Routines 表中查询名称为 CountProc 的存储函数的信息，代码如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT * FROM information_schema.Routines
WHERE ROUTINE_NAME=&#39;count_by_id&#39;　AND　ROUTINE_TYPE = &#39;FUNCTION&#39; \\G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-修改" tabindex="-1"><a class="header-anchor" href="#_5-2-修改" aria-hidden="true">#</a> 5.2 修改</h3><p>修改存储过程或函数，不影响存储过程或函数功能，只是修改相关特性。使用 ALTER 语句实现。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>ALTER {PROCEDURE | FUNCTION} 存储过程或函数的名 [characteristic ...]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，characteristic 指定存储过程或函数的特性，其取值信息与创建存储过程、函数时的取值信息略有不同。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>{ CONTAINS SQL | NO SQL | READS SQL DATA | MODIFIES SQL DATA }
| SQL SECURITY { DEFINER | INVOKER }
| COMMENT &#39;string&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>CONTAINS SQL</code>，表示子程序包含 SQL 语句，但不包含读或写数据的语句。</li><li><code>NO SQL</code>，表示子程序中不包含 SQL 语句。</li><li><code>READS SQL DATA</code>，表示子程序中包含读数据的语句。</li><li><code>MODIFIES SQL DATA</code>，表示子程序中包含写数据的语句。</li><li><code>SQL SECURITY { DEFINER | INVOKER }</code>，指明谁有权限来执行。 <ul><li><code>DEFINER</code>，表示只有定义者自己才能够执行。</li><li><code>INVOKER</code>，表示调用者可以执行。</li></ul></li><li><code>COMMENT &#39;string&#39;</code>，表示注释信息。</li></ul><blockquote><p>修改存储过程使用 ALTER PROCEDURE 语句，修改存储函数使用 ALTER FUNCTION 语句。但是，这两个语句的结构是一样的，语句中的所有参数也是一样的。</p></blockquote><p><strong>举例 1：</strong></p><p>修改存储过程 CountProc 的定义。将读写权限改为 MODIFIES SQL DATA，并指明调用者可以执行，代码如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>ALTER　PROCEDURE　CountProc
MODIFIES SQL DATA
SQL SECURITY INVOKER ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询修改后的信息：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT specific_name,sql_data_access,security_type
FROM information_schema.\`ROUTINES\`
WHERE routine_name = &#39;CountProc&#39; AND routine_type = &#39;PROCEDURE&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果显示，存储过程修改成功。从查询的结果可以看出，访问数据的权限（SQL<em>DATA</em> ACCESS）已经变成 MODIFIES SQL DATA，安全类型（SECURITY_TYPE）已经变成 INVOKER。</p><p><strong>举例 2：</strong></p><p>修改存储函数 CountProc 的定义。将读写权限改为 READS SQL DATA，并加上注释信息“FIND NAME”，代码如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>ALTER　FUNCTION　CountProc
READS SQL DATA
COMMENT &#39;FIND NAME&#39; ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>存储函数修改成功。从查询的结果可以看出，访问数据的权限（SQL_DATA_ACCESS）已经变成 READS SQL DATA，函数注释（ROUTINE_COMMENT）已经变成 FIND NAME。</p><h3 id="_5-3-删除" tabindex="-1"><a class="header-anchor" href="#_5-3-删除" aria-hidden="true">#</a> 5.3 删除</h3><p>删除存储过程和函数，可以使用 DROP 语句，其语法结构如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DROP {PROCEDURE | FUNCTION} [IF EXISTS] 存储过程或函数的名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>IF EXISTS：如果程序或函数不存储，它可以防止发生错误，产生一个用 SHOW WARNINGS 查看的警告。</p><p>举例：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DROP PROCEDURE CountProc;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DROP FUNCTION CountProc;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_6-关于存储过程使用的争议" tabindex="-1"><a class="header-anchor" href="#_6-关于存储过程使用的争议" aria-hidden="true">#</a> 6. 关于存储过程使用的争议</h2><p>尽管存储过程有诸多优点，但是对于存储过程的使用，<strong>一直都存在着很多争议</strong>，比如有些公司对于大型项目要求使用存储过程，而有些公司在手册中明确禁止使用存储过程，为什么这些公司对存储过程的使用需求差别这么大呢？</p><h3 id="_6-1-优点" tabindex="-1"><a class="header-anchor" href="#_6-1-优点" aria-hidden="true">#</a> 6.1 优点</h3><p>**1、存储过程可以一次编译多次使用。**存储过程只在创建时进行编译，之后的使用都不需要重新编译，这就提升了 SQL 的执行效率。</p><p>**2、可以减少开发工作量。**将代码<code>封装</code>成模块，实际上是编程的核心思想之一，这样可以把复杂的问题拆解成不同的模块，然后模块之间可以<code>重复使用</code>，在减少开发工作量的同时，还能保证代码的结构清晰。</p><p>**3、存储过程的安全性强。**我们在设定存储过程的时候可以<code>设置对用户的使用权限</code>，这样就和视图一样具有较强的安全性。</p><p>**4、可以减少网络传输量。**因为代码封装到存储过程中，每次使用只需要调用存储过程即可，这样就减少了网络传输量。</p><p>**5、良好的封装性。**在进行相对复杂的数据库操作时，原本需要使用一条一条的 SQL 语句，可能要连接多次数据库才能完成的操作，现在变成了一次存储过程，只需要<code>连接一次即可</code>。</p><h3 id="_6-2-缺点" tabindex="-1"><a class="header-anchor" href="#_6-2-缺点" aria-hidden="true">#</a> 6.2 缺点</h3><p>基于上面这些优点，不少大公司都要求大型项目使用存储过程，比如微软、IBM 等公司。但是国内的阿里并不推荐开发人员使用存储过程，这是为什么呢？</p><blockquote><h4 id="阿里开发规范" tabindex="-1"><a class="header-anchor" href="#阿里开发规范" aria-hidden="true">#</a> 阿里开发规范</h4><p>【强制】禁止使用存储过程，存储过程难以调试和扩展，更没有移植性。</p></blockquote><p>存储过程虽然有诸如上面的好处，但缺点也是很明显的。</p><p>**1、可移植性差。**存储过程不能跨数据库移植，比如在 MySQL、Oracle 和 SQL Server 里编写的存储过程，在换成其他数据库时都需要重新编写。</p><p>**2、调试困难。**只有少数 DBMS 支持存储过程的调试。对于复杂的存储过程来说，开发和维护都不容易。虽然也有一些第三方工具可以对存储过程进行调试，但要收费。</p><p>**3、存储过程的版本管理很困难。**比如数据表索引发生变化了，可能会导致存储过程失效。我们在开发软件的时候往往需要进行版本管理，但是存储过程本身没有版本控制，版本迭代更新的时候很麻烦。</p><p>**4、它不适合高并发的场景。**高并发的场景需要减少数据库的压力，有时数据库会采用分库分表的方式，而且对可扩展性要求很高，在这种情况下，存储过程会变得难以维护，<code>增加数据库的压力</code>，显然就不适用了。</p><p>小结：</p><p>存储过程既方便，又有局限性。尽管不同的公司对存储过程的态度不一，但是对于我们开发人员来说，不论怎样，掌握存储过程都是必备的技能之一。</p>`,185),l=[a];function r(c,v){return i(),n("div",null,l)}const t=e(s,[["render",r],["__file","第15章_存储过程与函数.html.vue"]]);export{t as default};
