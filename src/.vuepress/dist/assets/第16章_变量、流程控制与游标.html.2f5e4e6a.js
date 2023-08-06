import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as n,a as l}from"./app.9b10ba0a.js";const s="/assets/image-20211108114846634.d681a862.png",d="/assets/image-20211111182656990.0ebb7535.png",a={},v=l('<h2 id="_1-变量" tabindex="-1"><a class="header-anchor" href="#_1-变量" aria-hidden="true">#</a> 1. 变量</h2><p>在 MySQL 数据库的存储过程和函数中，可以使用变量来存储查询或计算的中间结果数据，或者输出最终的结果数据。</p><p>在 MySQL 数据库中，变量分为<code>系统变量</code>以及<code>用户自定义变量</code>。</p><h3 id="_1-1-系统变量" tabindex="-1"><a class="header-anchor" href="#_1-1-系统变量" aria-hidden="true">#</a> 1.1 系统变量</h3><h4 id="_1-1-1-系统变量分类" tabindex="-1"><a class="header-anchor" href="#_1-1-1-系统变量分类" aria-hidden="true">#</a> 1.1.1 系统变量分类</h4><p>变量由系统定义，不是用户定义，属于<code>服务器</code>层面。启动 MySQL 服务，生成 MySQL 服务实例期间，MySQL 将为 MySQL 服务器内存中的系统变量赋值，这些系统变量定义了当前 MySQL 服务实例的属性、特征。这些系统变量的值要么是<code>编译MySQL时参数</code>的默认值，要么是<code>配置文件</code>（例如 my.ini 等）中的参数值。大家可以通过网址 <code>https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html</code> 查看 MySQL 文档的系统变量。</p><p>系统变量分为全局系统变量（需要添加<code>global</code> 关键字）以及会话系统变量（需要添加 <code>session</code> 关键字），有时也把全局系统变量简称为全局变量，有时也把会话系统变量称为 local 变量。**如果不写，默认会话级别。**静态变量（在 MySQL 服务实例运行期间它们的值不能使用 set 动态修改）属于特殊的全局系统变量。</p><p>每一个 MySQL 客户机成功连接 MySQL 服务器后，都会产生与之对应的会话。会话期间，MySQL 服务实例会在 MySQL 服务器内存中生成与该会话对应的会话系统变量，这些会话系统变量的初始值是全局系统变量值的复制。如下图：</p><p><img src="'+s+`" alt="image-20211108114846634"></p><ul><li>全局系统变量针对于所有会话（连接）有效，但<code>不能跨重启</code></li><li>会话系统变量仅针对于当前会话（连接）有效。会话期间，当前会话对某个会话系统变量值的修改，不会影响其他会话同一个会话系统变量的值。</li><li>会话 1 对某个全局系统变量值的修改会导致会话 2 中同一个全局系统变量值的修改。</li></ul><p>在 MySQL 中有些系统变量只能是全局的，例如 max_connections 用于限制服务器的最大连接数；有些系统变量作用域既可以是全局又可以是会话，例如 character_set_client 用于设置客户端的字符集；有些系统变量的作用域只能是当前会话，例如 pseudo_thread_id 用于标记当前会话的 MySQL 连接 ID。</p><h4 id="_1-1-2-查看系统变量" tabindex="-1"><a class="header-anchor" href="#_1-1-2-查看系统变量" aria-hidden="true">#</a> 1.1.2 查看系统变量</h4><ul><li><strong>查看所有或部分系统变量</strong></li></ul><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#查看所有全局变量
SHOW GLOBAL VARIABLES;

#查看所有会话变量
SHOW SESSION VARIABLES;
或
SHOW VARIABLES;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#查看满足条件的部分系统变量。
SHOW GLOBAL VARIABLES LIKE &#39;%标识符%&#39;;

#查看满足条件的部分会话变量
SHOW SESSION VARIABLES LIKE &#39;%标识符%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SHOW GLOBAL VARIABLES LIKE &#39;admin_%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>查看指定系统变量</strong></li></ul><p>作为 MySQL 编码规范，MySQL 中的系统变量以<code>两个“@”</code>开头，其中“@@global”仅用于标记全局系统变量，“@@session”仅用于标记会话系统变量。“@@”首先标记会话系统变量，如果会话系统变量不存在，则标记全局系统变量。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#查看指定的系统变量的值
SELECT @@global.变量名;

#查看指定的会话变量的值
SELECT @@session.变量名;
#或者
SELECT @@变量名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>修改系统变量的值</strong></li></ul><p>有些时候，数据库管理员需要修改系统变量的默认值，以便修改当前会话或者 MySQL 服务实例的属性、特征。具体方法：</p><p>方式 1：修改 MySQL<code>配置文件</code>，继而修改 MySQL 系统变量的值（该方法需要重启 MySQL 服务）</p><p>方式 2：在 MySQL 服务运行期间，使用“set”命令重新设置系统变量的值</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#为某个系统变量赋值
#方式1：
SET @@global.变量名=变量值;
#方式2：
SET GLOBAL 变量名=变量值;


#为某个会话变量赋值
#方式1：
SET @@session.变量名=变量值;
#方式2：
SET SESSION 变量名=变量值;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT @@global.autocommit;
SET GLOBAL autocommit=0;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT @@session.tx_isolation;
SET @@session.tx_isolation=&#39;read-uncommitted&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SET GLOBAL max_connections = 1000;
SELECT @@global.max_connections;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-用户变量" tabindex="-1"><a class="header-anchor" href="#_1-2-用户变量" aria-hidden="true">#</a> 1.2 用户变量</h3><h4 id="_1-2-1-用户变量分类" tabindex="-1"><a class="header-anchor" href="#_1-2-1-用户变量分类" aria-hidden="true">#</a> 1.2.1 用户变量分类</h4><p>用户变量是用户自己定义的，作为 MySQL 编码规范，MySQL 中的用户变量以<code>一个“@”</code>开头。根据作用范围不同，又分为<code>会话用户变量</code>和<code>局部变量</code>。</p><ul><li><p>会话用户变量：作用域和会话变量一样，只对<code>当前连接</code>会话有效。</p></li><li><p>局部变量：只在 BEGIN 和 END 语句块中有效。局部变量只能在<code>存储过程和函数</code>中使用。</p></li></ul><h4 id="_1-2-2-会话用户变量" tabindex="-1"><a class="header-anchor" href="#_1-2-2-会话用户变量" aria-hidden="true">#</a> 1.2.2 会话用户变量</h4><ul><li>变量的定义</li></ul><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#方式1：“=”或“:=”
SET @用户变量 = 值;
SET @用户变量 := 值;

#方式2：“:=” 或 INTO关键字
SELECT @用户变量 := 表达式 [FROM 等子句];
SELECT 表达式 INTO @用户变量  [FROM 等子句];

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看用户变量的值 （查看、比较、运算等）</li></ul><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT @用户变量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>举例</li></ul><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SET @a = 1;

SELECT @a;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT @num := COUNT(*) FROM employees;

SELECT @num;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT AVG(salary) INTO @avgsalary FROM employees;

SELECT @avgsalary;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT @big;  #查看某个未声明的变量时，将得到NULL值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_1-2-3-局部变量" tabindex="-1"><a class="header-anchor" href="#_1-2-3-局部变量" aria-hidden="true">#</a> 1.2.3 局部变量</h4><p>定义：可以使用<code>DECLARE</code>语句定义一个局部变量</p><p>作用域：仅仅在定义它的 BEGIN ... END 中有效</p><p>位置：只能放在 BEGIN ... END 中，而且只能放在第一句</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>BEGIN
	#声明局部变量
	DECLARE 变量名1 变量数据类型 [DEFAULT 变量默认值];
	DECLARE 变量名2,变量名3,... 变量数据类型 [DEFAULT 变量默认值];

	#为局部变量赋值
	SET 变量名1 = 值;
	SELECT 值 INTO 变量名2 [FROM 子句];

	#查看局部变量的值
	SELECT 变量1,变量2,变量3;
END

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>1.定义变量</strong></p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DECLARE 变量名 类型 [default 值];  # 如果没有DEFAULT子句，初始值为NULL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>举例：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DECLARE　myparam　INT　DEFAULT 100;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2.变量赋值</strong></p><p>方式 1：一般用于赋简单的值</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SET 变量名=值;
SET 变量名:=值;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>方式 2：一般用于赋表中的字段值</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT 字段名或表达式 INTO 变量名 FROM 表;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>3.使用变量</strong>（查看、比较、运算等）</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT 局部变量名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>举例 1：声明局部变量，并分别赋值为 employees 表中 employee_id 为 102 的 last_name 和 salary</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DELIMITER //

CREATE PROCEDURE set_value()
BEGIN
	DECLARE emp_name VARCHAR(25);
	DECLARE sal DOUBLE(10,2);

	SELECT last_name,salary INTO emp_name,sal
	FROM employees
	WHERE employee_id = 102;

	SELECT emp_name,sal;
END //

DELIMITER ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例 2：声明两个变量，求和并打印 （分别使用会话用户变量、局部变量的方式实现）</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#方式1：使用用户变量
SET @m=1;
SET @n=1;
SET @sum=@m+@n;

SELECT @sum;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#方式2：使用局部变量
DELIMITER //

CREATE PROCEDURE add_value()
BEGIN
	#局部变量
	DECLARE m INT DEFAULT 1;
	DECLARE n INT DEFAULT 3;
	DECLARE SUM INT;

	SET SUM = m+n;
	SELECT SUM;
END //

DELIMITER ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举例 3：创建存储过程“different_salary”查询某员工和他领导的薪资差距，并用 IN 参数 emp_id 接收员工 id，用 OUT 参数 dif_salary 输出薪资差距结果。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#声明
DELIMITER //

CREATE PROCEDURE different_salary(IN emp_id INT,OUT dif_salary DOUBLE)
BEGIN
	#声明局部变量
	DECLARE emp_sal,mgr_sal DOUBLE DEFAULT 0.0;
	DECLARE mgr_id INT;

	SELECT salary INTO emp_sal FROM employees WHERE employee_id = emp_id;
	SELECT manager_id INTO mgr_id FROM employees WHERE employee_id = emp_id;
	SELECT salary INTO mgr_sal FROM employees WHERE employee_id = mgr_id;
	SET dif_salary = mgr_sal - emp_sal;

END //

DELIMITER ;

#调用
SET @emp_id = 102;
CALL different_salary(@emp_id,@diff_sal);


#查看
SELECT @diff_sal;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-4-对比会话用户变量与局部变量" tabindex="-1"><a class="header-anchor" href="#_1-2-4-对比会话用户变量与局部变量" aria-hidden="true">#</a> 1.2.4 对比会话用户变量与局部变量</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>			  作用域					定义位置				  语法
会话用户变量	  当前会话				   会话的任何地方				加@符号，不用指定类型
局部变量	   定义它的BEGIN END中 		BEGIN END的第一句话		  一般不用加@,需要指定类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-定义条件与处理程序" tabindex="-1"><a class="header-anchor" href="#_2-定义条件与处理程序" aria-hidden="true">#</a> 2. 定义条件与处理程序</h2><p><code>定义条件</code>是事先定义程序执行过程中可能遇到的问题，<code>处理程序</code>定义了在遇到问题时应当采取的处理方式，并且保证存储过程或函数在遇到警告或错误时能继续执行。这样可以增强存储程序处理问题的能力，避免程序异常停止运行。</p><p>说明：定义条件和处理程序在存储过程、存储函数中都是支持的。</p><h3 id="_2-1-案例分析" tabindex="-1"><a class="header-anchor" href="#_2-1-案例分析" aria-hidden="true">#</a> 2.1 案例分析</h3><p>**案例分析：**创建一个名称为“UpdateDataNoCondition”的存储过程。代码如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DELIMITER //

CREATE PROCEDURE UpdateDataNoCondition()
	BEGIN
		SET @x = 1;
		UPDATE employees SET email = NULL WHERE last_name = &#39;Abel&#39;;
		SET @x = 2;
		UPDATE employees SET email = &#39;aabbel&#39; WHERE last_name = &#39;Abel&#39;;
		SET @x = 3;
	END //

DELIMITER ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用存储过程：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; CALL UpdateDataNoCondition();
ERROR 1048 (23000): Column &#39;email&#39; cannot be null

mysql&gt; SELECT @x;
+------+
| @x   |
+------+
|   1  |
+------+
1 row in set (0.00 sec)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，此时@x 变量的值为 1。结合创建存储过程的 SQL 语句代码可以得出：在存储过程中未定义条件和处理程序，且当存储过程中执行的 SQL 语句报错时，MySQL 数据库会抛出错误，并退出当前 SQL 逻辑，不再向下继续执行。</p><h3 id="_2-2-定义条件" tabindex="-1"><a class="header-anchor" href="#_2-2-定义条件" aria-hidden="true">#</a> 2.2 定义条件</h3><p>定义条件就是给 MySQL 中的错误码命名，这有助于存储的程序代码更清晰。它将一个<code>错误名字</code>和<code>指定的错误条件</code>关联起来。这个名字可以随后被用在定义处理程序的<code>DECLARE HANDLER</code>语句中。</p><p>定义条件使用 DECLARE 语句，语法格式如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DECLARE 错误名称 CONDITION FOR 错误码（或错误条件）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>错误码的说明：</p><ul><li><code>MySQL_error_code</code>和<code>sqlstate_value</code>都可以表示 MySQL 的错误。 <ul><li>MySQL_error_code 是数值类型错误代码。</li><li>sqlstate_value 是长度为 5 的字符串类型错误代码。</li></ul></li><li>例如，在 ERROR 1418 (HY000)中，1418 是 MySQL_error_code，&#39;HY000&#39;是 sqlstate_value。</li><li>例如，在 ERROR 1142（42000）中，1142 是 MySQL_error_code，&#39;42000&#39;是 sqlstate_value。</li></ul><p>**举例 1：**定义“Field_Not_Be_NULL”错误名与 MySQL 中违反非空约束的错误类型是“ERROR 1048 (23000)”对应。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#使用MySQL_error_code
DECLARE Field_Not_Be_NULL CONDITION FOR 1048;

#使用sqlstate_value
DECLARE Field_Not_Be_NULL CONDITION FOR SQLSTATE &#39;23000&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**举例 2：**定义&quot;ERROR 1148(42000)&quot;错误，名称为 command_not_allowed。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#使用MySQL_error_code
DECLARE command_not_allowed CONDITION FOR 1148;

#使用sqlstate_value
DECLARE command_not_allowed CONDITION FOR SQLSTATE &#39;42000&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-定义处理程序" tabindex="-1"><a class="header-anchor" href="#_2-3-定义处理程序" aria-hidden="true">#</a> 2.3 定义处理程序</h3><p>可以为 SQL 执行过程中发生的某种类型的错误定义特殊的处理程序。定义处理程序时，使用 DECLARE 语句的语法如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DECLARE 处理方式 HANDLER FOR 错误类型 处理语句
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>处理方式</strong>：处理方式有 3 个取值：CONTINUE、EXIT、UNDO。 <ul><li><code>CONTINUE</code>：表示遇到错误不处理，继续执行。</li><li><code>EXIT</code>：表示遇到错误马上退出。</li><li><code>UNDO</code>：表示遇到错误后撤回之前的操作。MySQL 中暂时不支持这样的操作。</li></ul></li><li><strong>错误类型</strong>（即条件）可以有如下取值： <ul><li><code>SQLSTATE &#39;字符串错误码&#39;</code>：表示长度为 5 的 sqlstate_value 类型的错误代码；</li><li><code>MySQL_error_code</code>：匹配数值类型错误代码；</li><li><code>错误名称</code>：表示 DECLARE ... CONDITION 定义的错误条件名称。</li><li><code>SQLWARNING</code>：匹配所有以 01 开头的 SQLSTATE 错误代码；</li><li><code>NOT FOUND</code>：匹配所有以 02 开头的 SQLSTATE 错误代码；</li><li><code>SQLEXCEPTION</code>：匹配所有没有被 SQLWARNING 或 NOT FOUND 捕获的 SQLSTATE 错误代码；</li></ul></li><li><strong>处理语句</strong>：如果出现上述条件之一，则采用对应的处理方式，并执行指定的处理语句。语句可以是像“<code>SET 变量 = 值</code>”这样的简单语句，也可以是使用<code>BEGIN ... END</code>编写的复合语句。</li></ul><p>定义处理程序的几种方式，代码如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#方法1：捕获sqlstate_value
DECLARE CONTINUE HANDLER FOR SQLSTATE &#39;42S02&#39; SET @info = &#39;NO_SUCH_TABLE&#39;;

#方法2：捕获mysql_error_value
DECLARE CONTINUE HANDLER FOR 1146 SET @info = &#39;NO_SUCH_TABLE&#39;;

#方法3：先定义条件，再调用
DECLARE no_such_table CONDITION FOR 1146;
DECLARE CONTINUE HANDLER FOR NO_SUCH_TABLE SET @info = &#39;NO_SUCH_TABLE&#39;;

#方法4：使用SQLWARNING
DECLARE EXIT HANDLER FOR SQLWARNING SET @info = &#39;ERROR&#39;;

#方法5：使用NOT FOUND
DECLARE EXIT HANDLER FOR NOT FOUND SET @info = &#39;NO_SUCH_TABLE&#39;;

#方法6：使用SQLEXCEPTION
DECLARE EXIT HANDLER FOR SQLEXCEPTION SET @info = &#39;ERROR&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-案例解决" tabindex="-1"><a class="header-anchor" href="#_2-4-案例解决" aria-hidden="true">#</a> 2.4 案例解决</h3><p>在存储过程中，定义处理程序，捕获 sqlstate_value 值，当遇到 MySQL_error_code 值为 1048 时，执行 CONTINUE 操作，并且将@proc_value 的值设置为-1。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DELIMITER //

CREATE PROCEDURE UpdateDataNoCondition()
	BEGIN
		#定义处理程序
		DECLARE CONTINUE HANDLER FOR 1048 SET @proc_value = -1;

		SET @x = 1;
		UPDATE employees SET email = NULL WHERE last_name = &#39;Abel&#39;;
		SET @x = 2;
		UPDATE employees SET email = &#39;aabbel&#39; WHERE last_name = &#39;Abel&#39;;
		SET @x = 3;
	END //

DELIMITER ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用过程：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; CALL UpdateDataWithCondition();
Query OK, 0 rows affected (0.01 sec)

mysql&gt; SELECT @x,@proc_value;
+------+-------------+
| @x   | @proc_value |
+------+-------------+
|    3 |       	 -1  |
+------+-------------+
1 row in set (0.00 sec)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>举例：</strong></p><p>创建一个名称为“InsertDataWithCondition”的存储过程，代码如下。</p><p>在存储过程中，定义处理程序，捕获 sqlstate_value 值，当遇到 sqlstate_value 值为 23000 时，执行 EXIT 操作，并且将@proc_value 的值设置为-1。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#准备工作
CREATE TABLE departments
AS
SELECT * FROM atguigudb.\`departments\`;

ALTER TABLE departments
ADD CONSTRAINT uk_dept_name UNIQUE(department_id);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DELIMITER //

CREATE PROCEDURE InsertDataWithCondition()
	BEGIN
		DECLARE duplicate_entry CONDITION FOR SQLSTATE &#39;23000&#39; ;
		DECLARE EXIT HANDLER FOR duplicate_entry SET @proc_value = -1;

		SET @x = 1;
		INSERT INTO departments(department_name) VALUES(&#39;测试&#39;);
		SET @x = 2;
		INSERT INTO departments(department_name) VALUES(&#39;测试&#39;);
		SET @x = 3;
	END //

DELIMITER ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用存储过程：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; CALL InsertDataWithCondition();
Query OK, 0 rows affected (0.01 sec)

mysql&gt; SELECT @x,@proc_value;
+------+-------------+
| @x   | @proc_value |
+------+-------------+
|    2 |       	 -1  |
+------+-------------+
1 row in set (0.00 sec)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-流程控制" tabindex="-1"><a class="header-anchor" href="#_3-流程控制" aria-hidden="true">#</a> 3. 流程控制</h2><p>解决复杂问题不可能通过一个 SQL 语句完成，我们需要执行多个 SQL 操作。流程控制语句的作用就是控制存储过程中 SQL 语句的执行顺序，是我们完成复杂操作必不可少的一部分。只要是执行的程序，流程就分为三大类：</p><ul><li><code>顺序结构</code>：程序从上往下依次执行</li><li><code>分支结构</code>：程序按条件进行选择执行，从两条或多条路径中选择一条执行</li><li><code>循环结构</code>：程序满足一定条件下，重复执行一组语句</li></ul><p>针对于 MySQL 的流程控制语句主要有 3 类。注意：只能用于存储程序。</p><ul><li><code>条件判断语句</code>：IF 语句和 CASE 语句</li><li><code>循环语句</code>：LOOP、WHILE 和 REPEAT 语句</li><li><code>跳转语句</code>：ITERATE 和 LEAVE 语句</li></ul><h3 id="_3-1-分支结构之-if" tabindex="-1"><a class="header-anchor" href="#_3-1-分支结构之-if" aria-hidden="true">#</a> 3.1 分支结构之 IF</h3><ul><li>IF 语句的语法结构是：</li></ul><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>IF 表达式1 THEN 操作1
[ELSEIF 表达式2 THEN 操作2]……
[ELSE 操作N]
END IF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据表达式的结果为 TRUE 或 FALSE 执行相应的语句。这里“[]”中的内容是可选的。</p><ul><li><p>特点：① 不同的表达式对应不同的操作 ② 使用在 begin end 中</p></li><li><p><strong>举例 1：</strong></p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>IF val IS NULL
	THEN SELECT &#39;val is null&#39;;
ELSE SELECT &#39;val is not null&#39;;

END IF;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>**举例 2：**声明存储过程“update_salary_by_eid1”，定义 IN 参数 emp_id，输入员工编号。判断该员工薪资如果低于 8000 元并且入职时间超过 5 年，就涨薪 500 元；否则就不变。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DELIMITER //

CREATE PROCEDURE update_salary_by_eid1(IN emp_id INT)
BEGIN
	DECLARE emp_salary DOUBLE;
	DECLARE hire_year DOUBLE;

	SELECT salary INTO emp_salary FROM employees WHERE employee_id = emp_id;

	SELECT DATEDIFF(CURDATE(),hire_date)/365 INTO hire_year
	FROM employees WHERE employee_id = emp_id;

	IF emp_salary &lt; 8000 AND hire_year &gt; 5
	THEN UPDATE employees SET salary = salary + 500 WHERE employee_id = emp_id;
	END IF;
END //


DELIMITER ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>**举例 3：**声明存储过程“update_salary_by_eid2”，定义 IN 参数 emp_id，输入员工编号。判断该员工薪资如果低于 9000 元并且入职时间超过 5 年，就涨薪 500 元；否则就涨薪 100 元。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DELIMITER //

CREATE PROCEDURE update_salary_by_eid2(IN emp_id INT)
BEGIN
	DECLARE emp_salary DOUBLE;
	DECLARE hire_year DOUBLE;

	SELECT salary INTO emp_salary FROM employees WHERE employee_id = emp_id;

	SELECT DATEDIFF(CURDATE(),hire_date)/365 INTO hire_year
	FROM employees WHERE employee_id = emp_id;

	IF emp_salary &lt; 8000 AND hire_year &gt; 5
		THEN UPDATE employees SET salary = salary + 500 WHERE employee_id = emp_id;
	ELSE
		UPDATE employees SET salary = salary + 100 WHERE employee_id = emp_id;
	END IF;
END //


DELIMITER ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>**举例 4：**声明存储过程“update_salary_by_eid3”，定义 IN 参数 emp_id，输入员工编号。判断该员工薪资如果低于 9000 元，就更新薪资为 9000 元；薪资如果大于等于 9000 元且低于 10000 的，但是奖金比例为 NULL 的，就更新奖金比例为 0.01；其他的涨薪 100 元。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DELIMITER //

CREATE PROCEDURE update_salary_by_eid3(IN emp_id INT)
BEGIN
	DECLARE emp_salary DOUBLE;
	DECLARE bonus DECIMAL(3,2);

	SELECT salary INTO emp_salary FROM employees WHERE employee_id = emp_id;
	SELECT commission_pct INTO bonus FROM employees WHERE employee_id = emp_id;

	IF emp_salary &lt; 9000
		THEN UPDATE employees SET salary = 9000 WHERE employee_id = emp_id;
	ELSEIF emp_salary &lt; 10000 AND bonus IS NULL
		THEN UPDATE employees SET commission_pct = 0.01 WHERE employee_id = emp_id;
	ELSE
		UPDATE employees SET salary = salary + 100 WHERE employee_id = emp_id;
	END IF;
END //

DELIMITER ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="_3-2-分支结构之-case" tabindex="-1"><a class="header-anchor" href="#_3-2-分支结构之-case" aria-hidden="true">#</a> 3.2 分支结构之 CASE</h3><p>CASE 语句的语法结构 1：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#情况一：类似于switch
CASE 表达式
WHEN 值1 THEN 结果1或语句1(如果是语句，需要加分号)
WHEN 值2 THEN 结果2或语句2(如果是语句，需要加分号)
...
ELSE 结果n或语句n(如果是语句，需要加分号)
END [case]（如果是放在begin end中需要加上case，如果放在select后面不需要）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CASE 语句的语法结构 2：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#情况二：类似于多重if
CASE
WHEN 条件1 THEN 结果1或语句1(如果是语句，需要加分号)
WHEN 条件2 THEN 结果2或语句2(如果是语句，需要加分号)
...
ELSE 结果n或语句n(如果是语句，需要加分号)
END [case]（如果是放在begin end中需要加上case，如果放在select后面不需要）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>举例 1：</strong></li></ul><p>使用 CASE 流程控制语句的第 1 种格式，判断 val 值等于 1、等于 2，或者两者都不等。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CASE val
　　　WHEN 1 THEN SELECT &#39;val is 1&#39;;
　　　WHEN 2 THEN SELECT &#39;val is 2&#39;;
　　　ELSE SELECT &#39;val is not 1 or 2&#39;;
END CASE;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>举例 2：</strong></li></ul><p>使用 CASE 流程控制语句的第 2 种格式，判断 val 是否为空、小于 0、大于 0 或者等于 0。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CASE
	WHEN val IS NULL THEN SELECT &#39;val is null&#39;;
	WHEN val &lt; 0 THEN SELECT &#39;val is less than 0&#39;;
	WHEN val &gt; 0 THEN SELECT &#39;val is greater than 0&#39;;
	ELSE SELECT &#39;val is 0&#39;;
END CASE;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>**举例 3：**声明存储过程“update_salary_by_eid4”，定义 IN 参数 emp_id，输入员工编号。判断该员工薪资如果低于 9000 元，就更新薪资为 9000 元；薪资大于等于 9000 元且低于 10000 的，但是奖金比例为 NULL 的，就更新奖金比例为 0.01；其他的涨薪 100 元。</li></ul><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DELIMITER //

CREATE PROCEDURE update_salary_by_eid4(IN emp_id INT)
BEGIN
	DECLARE emp_sal DOUBLE;
	DECLARE bonus DECIMAL(3,2);

	SELECT salary INTO emp_sal FROM employees WHERE employee_id = emp_id;
	SELECT commission_pct INTO bonus FROM employees WHERE employee_id = emp_id;

	CASE
	WHEN emp_sal&lt;9000
		THEN UPDATE employees SET salary=9000 WHERE employee_id = emp_id;
	WHEN emp_sal&lt;10000 AND bonus IS NULL
		THEN UPDATE employees SET commission_pct=0.01 WHERE employee_id = emp_id;
	ELSE
		UPDATE employees SET salary=salary+100 WHERE employee_id = emp_id;
	END CASE;
END //

DELIMITER ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>举例 4：声明存储过程 update_salary_by_eid5，定义 IN 参数 emp_id，输入员工编号。判断该员工的入职年限，如果是 0 年，薪资涨 50；如果是 1 年，薪资涨 100；如果是 2 年，薪资涨 200；如果是 3 年，薪资涨 300；如果是 4 年，薪资涨 400；其他的涨薪 500。</li></ul><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DELIMITER //

CREATE PROCEDURE update_salary_by_eid5(IN emp_id INT)
BEGIN
	DECLARE emp_sal DOUBLE;
	DECLARE hire_year DOUBLE;

	SELECT salary INTO emp_sal FROM employees WHERE employee_id = emp_id;

	SELECT ROUND(DATEDIFF(CURDATE(),hire_date)/365) INTO hire_year FROM employees WHERE employee_id = emp_id;

	CASE hire_year
		WHEN 0 THEN UPDATE employees SET salary=salary+50 WHERE employee_id = emp_id;
		WHEN 1 THEN UPDATE employees SET salary=salary+100 WHERE employee_id = emp_id;
		WHEN 2 THEN UPDATE employees SET salary=salary+200 WHERE employee_id = emp_id;
		WHEN 3 THEN UPDATE employees SET salary=salary+300 WHERE employee_id = emp_id;
		WHEN 4 THEN UPDATE employees SET salary=salary+400 WHERE employee_id = emp_id;
		ELSE UPDATE employees SET salary=salary+500 WHERE employee_id = emp_id;
	END CASE;
END //

DELIMITER ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-循环结构之-loop" tabindex="-1"><a class="header-anchor" href="#_3-3-循环结构之-loop" aria-hidden="true">#</a> 3.3 循环结构之 LOOP</h3><p>LOOP 循环语句用来重复执行某些语句。LOOP 内的语句一直重复执行直到循环被退出（使用 LEAVE 子句），跳出循环过程。</p><p>LOOP 语句的基本格式如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>[loop_label:] LOOP
	循环执行的语句
END LOOP [loop_label]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，loop_label 表示 LOOP 语句的标注名称，该参数可以省略。</p><p><strong>举例 1：</strong></p><p>使用 LOOP 语句进行循环操作，id 值小于 10 时将重复执行循环过程。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DECLARE id INT DEFAULT 0;
add_loop:LOOP
	SET id = id +1;
	IF id &gt;= 10 THEN LEAVE add_loop;
	END IF;

END LOOP add_loop;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**举例 2：**当市场环境变好时，公司为了奖励大家，决定给大家涨工资。声明存储过程“update_salary_loop()”，声明 OUT 参数 num，输出循环次数。存储过程中实现循环给大家涨薪，薪资涨为原来的 1.1 倍。直到全公司的平均薪资达到 12000 结束。并统计循环次数。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DELIMITER //

CREATE PROCEDURE update_salary_loop(OUT num INT)
BEGIN
	DECLARE avg_salary DOUBLE;
	DECLARE loop_count INT DEFAULT 0;

	SELECT AVG(salary) INTO avg_salary FROM employees;

	label_loop:LOOP
		IF avg_salary &gt;= 12000 THEN LEAVE label_loop;
		END IF;

		UPDATE employees SET salary = salary * 1.1;
		SET loop_count = loop_count + 1;
		SELECT AVG(salary) INTO avg_salary FROM employees;
	END LOOP label_loop;

	SET num = loop_count;

END //

DELIMITER ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-循环结构之-while" tabindex="-1"><a class="header-anchor" href="#_3-4-循环结构之-while" aria-hidden="true">#</a> 3.4 循环结构之 WHILE</h3><p>WHILE 语句创建一个带条件判断的循环过程。WHILE 在执行语句执行时，先对指定的表达式进行判断，如果为真，就执行循环内的语句，否则退出循环。WHILE 语句的基本格式如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>[while_label:] WHILE 循环条件  DO
	循环体
END WHILE [while_label];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>while_label 为 WHILE 语句的标注名称；如果循环条件结果为真，WHILE 语句内的语句或语句群被执行，直至循环条件为假，退出循环。</p><p><strong>举例 1：</strong></p><p>WHILE 语句示例，i 值小于 10 时，将重复执行循环过程，代码如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DELIMITER //

CREATE PROCEDURE test_while()
BEGIN
	DECLARE i INT DEFAULT 0;

	WHILE i &lt; 10 DO
		SET i = i + 1;
	END WHILE;

	SELECT i;
END //

DELIMITER ;
#调用
CALL test_while();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**举例 2：**市场环境不好时，公司为了渡过难关，决定暂时降低大家的薪资。声明存储过程“update_salary_while()”，声明 OUT 参数 num，输出循环次数。存储过程中实现循环给大家降薪，薪资降为原来的 90%。直到全公司的平均薪资达到 5000 结束。并统计循环次数。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DELIMITER //

CREATE PROCEDURE update_salary_while(OUT num INT)
BEGIN
	DECLARE avg_sal DOUBLE ;
	DECLARE while_count INT DEFAULT 0;

	SELECT AVG(salary) INTO avg_sal FROM employees;

	WHILE avg_sal &gt; 5000 DO
		UPDATE employees SET salary = salary * 0.9;

		SET while_count = while_count + 1;

		SELECT AVG(salary) INTO avg_sal FROM employees;
	END WHILE;

	SET num = while_count;

END //

DELIMITER ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-循环结构之-repeat" tabindex="-1"><a class="header-anchor" href="#_3-5-循环结构之-repeat" aria-hidden="true">#</a> 3.5 循环结构之 REPEAT</h3><p>REPEAT 语句创建一个带条件判断的循环过程。与 WHILE 循环不同的是，REPEAT 循环首先会执行一次循环，然后在 UNTIL 中进行表达式的判断，如果满足条件就退出，即 END REPEAT；如果条件不满足，则会就继续执行循环，直到满足退出条件为止。</p><p>REPEAT 语句的基本格式如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>[repeat_label:] REPEAT
　　　　循环体的语句
UNTIL 结束循环的条件表达式
END REPEAT [repeat_label]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>repeat_label 为 REPEAT 语句的标注名称，该参数可以省略；REPEAT 语句内的语句或语句群被重复，直至 expr_condition 为真。</p><p><strong>举例 1：</strong></p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DELIMITER //

CREATE PROCEDURE test_repeat()
BEGIN
	DECLARE i INT DEFAULT 0;

	REPEAT
		SET i = i + 1;
	UNTIL i &gt;= 10
	END REPEAT;

	SELECT i;
END //

DELIMITER ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**举例 2：**当市场环境变好时，公司为了奖励大家，决定给大家涨工资。声明存储过程“update_salary_repeat()”，声明 OUT 参数 num，输出循环次数。存储过程中实现循环给大家涨薪，薪资涨为原来的 1.15 倍。直到全公司的平均薪资达到 13000 结束。并统计循环次数。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DELIMITER //

CREATE PROCEDURE update_salary_repeat(OUT num INT)
BEGIN
	DECLARE avg_sal DOUBLE ;
	DECLARE repeat_count INT DEFAULT 0;

	SELECT AVG(salary) INTO avg_sal FROM employees;

	REPEAT
		UPDATE employees SET salary = salary * 1.15;

		SET repeat_count = repeat_count + 1;

		SELECT AVG(salary) INTO avg_sal FROM employees;
	UNTIL avg_sal &gt;= 13000
	END REPEAT;

	SET num = repeat_count;

END //

DELIMITER ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>对比三种循环结构：</strong></p><p>1、这三种循环都可以省略名称，但如果循环中添加了循环控制语句（LEAVE 或 ITERATE）则必须添加名称。 2、 LOOP：一般用于实现简单的&quot;死&quot;循环 WHILE：先判断后执行 REPEAT：先执行后判断，无条件至少执行一次</p><h3 id="_3-6-跳转语句之-leave-语句" tabindex="-1"><a class="header-anchor" href="#_3-6-跳转语句之-leave-语句" aria-hidden="true">#</a> 3.6 跳转语句之 LEAVE 语句</h3><p>LEAVE 语句：可以用在循环语句内，或者以 BEGIN 和 END 包裹起来的程序体内，表示跳出循环或者跳出程序体的操作。如果你有面向过程的编程语言的使用经验，你可以把 LEAVE 理解为 break。</p><p>基本格式如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>LEAVE 标记名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，label 参数表示循环的标志。LEAVE 和 BEGIN ... END 或循环一起被使用。</p><p>**举例 1：**创建存储过程 “leave_begin()”，声明 INT 类型的 IN 参数 num。给 BEGIN...END 加标记名，并在 BEGIN...END 中使用 IF 语句判断 num 参数的值。</p><ul><li>如果 num&lt;=0，则使用 LEAVE 语句退出 BEGIN...END；</li><li>如果 num=1，则查询“employees”表的平均薪资；</li><li>如果 num=2，则查询“employees”表的最低薪资；</li><li>如果 num&gt;2，则查询“employees”表的最高薪资。</li></ul><p>IF 语句结束后查询“employees”表的总人数。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DELIMITER //

CREATE PROCEDURE leave_begin(IN num INT)

	begin_label: BEGIN
		IF num&lt;=0
			THEN LEAVE begin_label;
		ELSEIF num=1
			THEN SELECT AVG(salary) FROM employees;
		ELSEIF num=2
			THEN SELECT MIN(salary) FROM employees;
		ELSE
			SELECT MAX(salary) FROM employees;
		END IF;

		SELECT COUNT(*) FROM employees;
	END //


DELIMITER ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>举例 2：</strong></p><p>当市场环境不好时，公司为了渡过难关，决定暂时降低大家的薪资。声明存储过程“leave_while()”，声明 OUT 参数 num，输出循环次数，存储过程中使用 WHILE 循环给大家降低薪资为原来薪资的 90%，直到全公司的平均薪资小于等于 10000，并统计循环次数。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DELIMITER //
CREATE PROCEDURE leave_while(OUT num INT)

BEGIN
	#
	DECLARE avg_sal DOUBLE;#记录平均工资
	DECLARE while_count INT DEFAULT 0; #记录循环次数

	SELECT AVG(salary) INTO avg_sal FROM employees; #① 初始化条件

	while_label:WHILE TRUE DO  #② 循环条件

		#③ 循环体
		IF avg_sal &lt;= 10000 THEN
			LEAVE while_label;
		END IF;

		UPDATE employees SET salary  = salary * 0.9;
		SET while_count = while_count + 1;

		#④ 迭代条件
		SELECT AVG(salary) INTO avg_sal FROM employees;

	END WHILE;

	#赋值
	SET num = while_count;

END //

DELIMITER ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-7-跳转语句之-iterate-语句" tabindex="-1"><a class="header-anchor" href="#_3-7-跳转语句之-iterate-语句" aria-hidden="true">#</a> 3.7 跳转语句之 ITERATE 语句</h3><p>ITERATE 语句：只能用在循环语句（LOOP、REPEAT 和 WHILE 语句）内，表示重新开始循环，将执行顺序转到语句段开头处。如果你有面向过程的编程语言的使用经验，你可以把 ITERATE 理解为 continue，意思为“再次循环”。</p><p>语句基本格式如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>ITERATE label
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>label 参数表示循环的标志。ITERATE 语句必须跟在循环标志前面。</p><p><strong>举例：</strong> 定义局部变量 num，初始值为 0。循环结构中执行 num + 1 操作。</p><ul><li>如果 num &lt; 10，则继续执行循环；</li><li>如果 num &gt; 15，则退出循环结构；</li></ul><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DELIMITER //

CREATE PROCEDURE test_iterate()

BEGIN
	DECLARE num INT DEFAULT 0;

	my_loop:LOOP
		SET num = num + 1;

		IF num &lt; 10
			THEN ITERATE my_loop;
		ELSEIF num &gt; 15
			THEN LEAVE my_loop;
		END IF;

		SELECT &#39;尚硅谷：让天下没有难学的技术&#39;;

	END LOOP my_loop;

END //

DELIMITER ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-游标" tabindex="-1"><a class="header-anchor" href="#_4-游标" aria-hidden="true">#</a> 4. 游标</h2><h3 id="_4-1-什么是游标-或光标" tabindex="-1"><a class="header-anchor" href="#_4-1-什么是游标-或光标" aria-hidden="true">#</a> 4.1 什么是游标（或光标）</h3><p>虽然我们也可以通过筛选条件 WHERE 和 HAVING，或者是限定返回记录的关键字 LIMIT 返回一条记录，但是，却无法在结果集中像指针一样，向前定位一条记录、向后定位一条记录，或者是<code>随意定位到某一条记录</code>，并对记录的数据进行处理。</p><p>这个时候，就可以用到游标。游标，提供了一种灵活的操作方式，让我们能够对结果集中的每一条记录进行定位，并对指向的记录中的数据进行操作的数据结构。<strong>游标让 SQL 这种面向集合的语言有了面向过程开发的能力。</strong></p><p>在 SQL 中，游标是一种临时的数据库对象，可以指向存储在数据库表中的数据行指针。这里游标<code>充当了指针的作用</code>，我们可以通过操作游标来对数据行进行操作。</p><p>MySQL 中游标可以在存储过程和函数中使用。</p><p>比如，我们查询了 employees 数据表中工资高于 15000 的员工都有哪些：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT employee_id,last_name,salary FROM employees
WHERE salary &gt; 15000;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+`" alt="image-20211111182656990"></p><p>这里我们就可以通过游标来操作数据行，如图所示此时游标所在的行是“108”的记录，我们也可以在结果集上滚动游标，指向结果集中的任意一行。</p><h3 id="_4-2-使用游标步骤" tabindex="-1"><a class="header-anchor" href="#_4-2-使用游标步骤" aria-hidden="true">#</a> 4.2 使用游标步骤</h3><p>游标必须在声明处理程序之前被声明，并且变量和条件还必须在声明游标或处理程序之前被声明。</p><p>如果我们想要使用游标，一般需要经历四个步骤。不同的 DBMS 中，使用游标的语法可能略有不同。</p><p><strong>第一步，声明游标</strong></p><p>在 MySQL 中，使用 DECLARE 关键字来声明游标，其语法的基本形式如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DECLARE cursor_name CURSOR FOR select_statement;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个语法适用于 MySQL，SQL Server，DB2 和 MariaDB。如果是用 Oracle 或者 PostgreSQL，需要写成：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DECLARE cursor_name CURSOR IS select_statement;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>要使用 SELECT 语句来获取数据结果集，而此时还没有开始遍历数据，这里 select_statement 代表的是 SELECT 语句，返回一个用于创建游标的结果集。</p><p>比如：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DECLARE cur_emp CURSOR FOR
SELECT employee_id,salary FROM employees;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DECLARE cursor_fruit CURSOR FOR
SELECT f_name, f_price FROM fruits ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第二步，打开游标</strong></p><p>打开游标的语法如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>OPEN cursor_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当我们定义好游标之后，如果想要使用游标，必须先打开游标。打开游标的时候 SELECT 语句的查询结果集就会送到游标工作区，为后面游标的<code>逐条读取</code>结果集中的记录做准备。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>OPEN　cur_emp ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>第三步，使用游标（从游标中取得数据）</strong></p><p>语法如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>FETCH cursor_name INTO var_name [, var_name] ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这句的作用是使用 cursor_name 这个游标来读取当前行，并且将数据保存到 var_name 这个变量中，游标指针指到下一行。如果游标读取的数据行有多个列名，则在 INTO 关键字后面赋值给多个变量名即可。</p><p>注意：var_name 必须在声明游标之前就定义好。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>FETCH　cur_emp INTO emp_id, emp_sal ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注意：<strong>游标的查询结果集中的字段数，必须跟 INTO 后面的变量数一致</strong>，否则，在存储过程执行的时候，MySQL 会提示错误。</p><p><strong>第四步，关闭游标</strong></p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CLOSE cursor_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>有 OPEN 就会有 CLOSE，也就是打开和关闭游标。当我们使用完游标后需要关闭掉该游标。因为游标会<code>占用系统资源</code>，如果不及时关闭，<strong>游标会一直保持到存储过程结束</strong>，影响系统运行的效率。而关闭游标的操作，会释放游标占用的系统资源。</p><p>关闭游标之后，我们就不能再检索查询结果中的数据行，如果需要检索只能再次打开游标。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>CLOSE　cur_emp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-3-举例" tabindex="-1"><a class="header-anchor" href="#_4-3-举例" aria-hidden="true">#</a> 4.3 举例</h3><p>创建存储过程“get_count_by_limit_total_salary()”，声明 IN 参数 limit_total_salary，DOUBLE 类型；声明 OUT 参数 total_count，INT 类型。函数的功能可以实现累加薪资最高的几个员工的薪资值，直到薪资总和达到 limit_total_salary 参数的值，返回累加的人数给 total_count。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>DELIMITER //

CREATE PROCEDURE get_count_by_limit_total_salary(IN limit_total_salary DOUBLE,OUT total_count INT)

BEGIN
	DECLARE sum_salary DOUBLE DEFAULT 0;  #记录累加的总工资
	DECLARE cursor_salary DOUBLE DEFAULT 0; #记录某一个工资值
	DECLARE emp_count INT DEFAULT 0; #记录循环个数
	#定义游标
	DECLARE emp_cursor CURSOR FOR SELECT salary FROM employees ORDER BY salary DESC;
	#打开游标
	OPEN emp_cursor;

	REPEAT
		#使用游标（从游标中获取数据）
		FETCH emp_cursor INTO cursor_salary;

		SET sum_salary = sum_salary + cursor_salary;
		SET emp_count = emp_count + 1;

		UNTIL sum_salary &gt;= limit_total_salary
	END REPEAT;

	SET total_count = emp_count;
	#关闭游标
	CLOSE emp_cursor;

END //

DELIMITER ;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-小结" tabindex="-1"><a class="header-anchor" href="#_4-5-小结" aria-hidden="true">#</a> 4.5 小结</h3><p>游标是 MySQL 的一个重要的功能，为<code>逐条读取</code>结果集中的数据，提供了完美的解决方案。跟在应用层面实现相同的功能相比，游标可以在存储程序中使用，效率高，程序也更加简洁。</p><p>但同时也会带来一些性能问题，比如在使用游标的过程中，会对数据行进行<code>加锁</code>，这样在业务并发量大的时候，不仅会影响业务之间的效率，还会<code>消耗系统资源</code>，造成内存不足，这是因为游标是在内存中进行的处理。</p><p>建议：养成用完之后就关闭的习惯，这样才能提高系统的整体效率。</p><h2 id="补充-mysql-8-0-的新特性—全局变量的持久化" tabindex="-1"><a class="header-anchor" href="#补充-mysql-8-0-的新特性—全局变量的持久化" aria-hidden="true">#</a> 补充：MySQL 8.0 的新特性—全局变量的持久化</h2><p>在 MySQL 数据库中，全局变量可以通过 SET GLOBAL 语句来设置。例如，设置服务器语句超时的限制，可以通过设置系统变量 max_execution_time 来实现：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SET GLOBAL MAX_EXECUTION_TIME=2000;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 SET GLOBAL 语句设置的变量值只会<code>临时生效</code>。<code>数据库重启</code>后，服务器又会从 MySQL 配置文件中读取变量的默认值。 MySQL 8.0 版本新增了<code>SET PERSIST</code>命令。例如，设置服务器的最大连接数为 1000：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SET PERSIST global max_connections = 1000;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>MySQL 会将该命令的配置保存到数据目录下的<code>mysqld-auto.cnf</code>文件中，下次启动时会读取该文件，用其中的配置来覆盖默认的配置文件。</p><p>举例：</p><p>查看全局变量 max_connections 的值，结果如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; show variables like &#39;%max_connections%&#39;;
+------------------------+-------+
| Variable_name          | Value |
+------------------------+-------+
| max_connections        | 151   |
| mysqlx_max_connections | 100   |
+------------------------+-------+
2 rows in set, 1 warning (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>设置全局变量 max_connections 的值：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; set persist max_connections=1000;
Query OK, 0 rows affected (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>重启MySQL服务器</code>，再次查询 max_connections 的值：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; show variables like &#39;%max_connections%&#39;;
+------------------------+-------+
| Variable_name          | Value |
+------------------------+-------+
| max_connections        | 1000  |
| mysqlx_max_connections | 100   |
+------------------------+-------+
2 rows in set, 1 warning (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,239),r=[v];function m(c,u){return i(),n("div",null,r)}const b=e(a,[["render",m],["__file","第16章_变量、流程控制与游标.html.vue"]]);export{b as default};
