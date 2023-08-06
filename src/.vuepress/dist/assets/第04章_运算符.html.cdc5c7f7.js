import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as a,a as i,d as e,e as s}from"./app.9b10ba0a.js";const d="/assets/image-20211012100749193.6e57be50.png",m="/assets/image-20211012101110021.fd3c11b3.png",r="/assets/image-20211012104955094.4919e827.png",v="/assets/image-20211012105303219.22c5e282.png",c="/assets/image-20211012105030527.00823121.png",u="/assets/image-20211012105052456.b86c1074.png",t="/assets/image-20211012110241418.2fcef790.png",b="/assets/image-20211012110511223.451ba5ad.png",o="/assets/image-20211023115738415.a183a0cf.png",g="/assets/image-20211012111042395.b08b80b0.png",p="/assets/image-20211012110731059.c690c117.png",L="/assets/image-20210926151249943.113fde46.png",E={},y=i('<h2 id="_1-算术运算符" tabindex="-1"><a class="header-anchor" href="#_1-算术运算符" aria-hidden="true">#</a> 1. 算术运算符</h2><p>算术运算符主要用于数学运算，其可以连接运算符前后的两个数值或表达式，对数值或表达式进行加（+）、减（-）、乘（*）、除（/）和取模（%）运算。</p><p><img src="'+d+`" alt="image-20211012100749193"></p><p><strong>1．加法与减法运算符</strong></p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT 100, 100 + 0, 100 - 0, 100 + 50, 100 + 50 -30, 100 + 35.5, 100 - 35.5 FROM dual;
+-----+---------+---------+----------+--------------+------------+------------+
| 100 | 100 + 0 | 100 - 0 | 100 + 50 | 100 + 50 -30 | 100 + 35.5 | 100 - 35.5 |
+-----+---------+---------+----------+--------------+------------+------------+
| 100 |     100 |     100 |      150 |          120 |      135.5 |       64.5 |
+-----+---------+---------+----------+--------------+------------+------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由运算结果可以得出如下结论：</p><blockquote><ul><li>一个整数类型的值对整数进行加法和减法操作，结果还是一个整数；</li><li>一个整数类型的值对浮点数进行加法和减法操作，结果是一个浮点数；</li><li>加法和减法的优先级相同，进行先加后减操作与进行先减后加操作的结果是一样的；</li><li>在 Java 中，+的左右两边如果有字符串，那么表示字符串的拼接。但是在 MySQL 中+只表示数值相加。如果遇到非数值类型，先尝试转成数值，如果转失败，就按 0 计算。（补充：MySQL 中字符串拼接要使用字符串函数 CONCAT()实现）</li></ul></blockquote><p><strong>2．乘法与除法运算符</strong></p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT 100, 100 * 1, 100 * 1.0, 100 / 1.0, 100 / 2,100 + 2 * 5 / 2,100 /3, 100 DIV 0 FROM dual;
+-----+---------+-----------+-----------+---------+-----------------+---------+-----------+
| 100 | 100 * 1 | 100 * 1.0 | 100 / 1.0 | 100 / 2 | 100 + 2 * 5 / 2 | 100 /3  | 100 DIV 0 |
+-----+---------+-----------+-----------+---------+-----------------+---------+-----------+
| 100 |     100 |     100.0 |  100.0000 | 50.0000 |        105.0000 | 33.3333 |      NULL |
+-----+---------+-----------+-----------+---------+-----------------+---------+-----------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#计算出员工的年基本工资
SELECT employee_id,salary,salary * 12 annual_sal
FROM employees;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由运算结果可以得出如下结论：</p><blockquote><ul><li>一个数乘以整数 1 和除以整数 1 后仍得原数；</li><li>一个数乘以浮点数 1 和除以浮点数 1 后变成浮点数，数值与原数相等；</li><li>一个数除以整数后，不管是否能除尽，结果都为一个浮点数；</li><li>一个数除以另一个数，除不尽时，结果为一个浮点数，并保留到小数点后 4 位；</li><li>乘法和除法的优先级相同，进行先乘后除操作与先除后乘操作，得出的结果相同。</li><li>在数学运算中，0 不能用作除数，在 MySQL 中，一个数除以 0 为 NULL。</li></ul></blockquote><p><strong>3．求模（求余）运算符</strong> 将 t22 表中的字段 i 对 3 和 5 进行求模（求余）运算。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT 12 % 3, 12 MOD 5 FROM dual;
+--------+----------+
| 12 % 3 | 12 MOD 5 |
+--------+----------+
|      0 |        2 |
+--------+----------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#筛选出employee_id是偶数的员工
SELECT * FROM employees
WHERE employee_id MOD 2 = 0;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，100 对 3 求模后的结果为 3，对 5 求模后的结果为 0。</p><h2 id="_2-比较运算符" tabindex="-1"><a class="header-anchor" href="#_2-比较运算符" aria-hidden="true">#</a> 2. 比较运算符</h2><p>比较运算符用来对表达式左边的操作数和右边的操作数进行比较，比较的结果为真则返回 1，比较的结果为假则返回 0，其他情况则返回 NULL。</p><p>比较运算符经常被用来作为 SELECT 查询语句的条件来使用，返回符合条件的结果记录。</p><img src="`+m+'" alt="image-20211012101110021"><p><img src="'+r+`" alt="image-20211012104955094"></p><p><strong>1．等号运算符</strong></p><ul><li><p>等号运算符（=）判断等号两边的值、字符串或表达式是否相等，如果相等则返回 1，不相等则返回 0。</p></li><li><p>在使用等号运算符时，遵循如下规则：</p><ul><li>如果等号两边的值、字符串或表达式都为字符串，则 MySQL 会按照字符串进行比较，其比较的是每个字符串中字符的 ANSI 编码是否相等。</li><li>如果等号两边的值都是整数，则 MySQL 会按照整数来比较两个值的大小。</li><li>如果等号两边的值一个是整数，另一个是字符串，则 MySQL 会将字符串转化为数字进行比较。</li><li>如果等号两边的值、字符串或表达式中有一个为 NULL，则比较结果为 NULL。</li></ul></li><li><p>对比：SQL 中赋值符号使用 :=</p></li></ul><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT 1 = 1, 1 = &#39;1&#39;, 1 = 0, &#39;a&#39; = &#39;a&#39;, (5 + 3) = (2 + 6), &#39;&#39; = NULL , NULL = NULL;
+-------+---------+-------+-----------+-------------------+-----------+-------------+
| 1 = 1 | 1 = &#39;1&#39; | 1 = 0 | &#39;a&#39; = &#39;a&#39; | (5 + 3) = (2 + 6) | &#39;&#39; = NULL | NULL = NULL |
+-------+---------+-------+-----------+-------------------+-----------+-------------+
|    1  |     1   |   0   |      1    |             1     |    NULL   |        NULL  |
+-------+---------+-------+-----------+-------------------+-----------+-------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT 1 = 2, 0 = &#39;abc&#39;, 1 = &#39;abc&#39; FROM dual;
+-------+-----------+-----------+
| 1 = 2 | 0 = &#39;abc&#39; | 1 = &#39;abc&#39; |
+-------+-----------+-----------+
|     0 |         1 |         0 |
+-------+-----------+-----------+
1 row in set, 2 warnings (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#查询salary=10000，注意在Java中比较是==
SELECT employee_id,salary FROM employees WHERE salary = 10000;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2．安全等于运算符</strong> 安全等于运算符（&lt;=&gt;）与等于运算符（=）的作用是相似的，<code>唯一的区别</code>是‘&lt;=&gt;’可以用来对 NULL 进行判断。在两个操作数均为 NULL 时，其返回值为 1，而不为 NULL；当一个操作数为 NULL 时，其返回值为 0，而不为 NULL。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT 1 &lt;=&gt; &#39;1&#39;, 1 &lt;=&gt; 0, &#39;a&#39; &lt;=&gt; &#39;a&#39;, (5 + 3) &lt;=&gt; (2 + 6), &#39;&#39; &lt;=&gt; NULL,NULL &lt;=&gt; NULL FROM dual;
+-----------+---------+-------------+---------------------+-------------+---------------+
| 1 &lt;=&gt; &#39;1&#39; | 1 &lt;=&gt; 0 | &#39;a&#39; &lt;=&gt; &#39;a&#39; | (5 + 3) &lt;=&gt; (2 + 6) | &#39;&#39; &lt;=&gt; NULL | NULL &lt;=&gt; NULL |
+-----------+---------+-------------+---------------------+-------------+---------------+
|         1 |       0 |           1 |                   1 |           0 |             1 |
+-----------+---------+-------------+---------------------+-------------+---------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#查询commission_pct等于0.40
SELECT employee_id,commission_pct FROM employees WHERE commission_pct = 0.40;

SELECT employee_id,commission_pct FROM employees WHERE commission_pct &lt;=&gt; 0.40;

#如果把0.40改成 NULL 呢？
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，使用安全等于运算符时，两边的操作数的值都为 NULL 时，返回的结果为 1 而不是 NULL，其他返回结果与等于运算符相同。</p><p><strong>3．不等于运算符</strong> 不等于运算符（&lt;&gt;和!=）用于判断两边的数字、字符串或者表达式的值是否不相等，如果不相等则返回 1，相等则返回 0。不等于运算符不能判断 NULL 值。如果两边的值有任意一个为 NULL，或两边都为 NULL，则结果为 NULL。 SQL 语句示例如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT 1 &lt;&gt; 1, 1 != 2, &#39;a&#39; != &#39;b&#39;, (3+4) &lt;&gt; (2+6), &#39;a&#39; != NULL, NULL &lt;&gt; NULL;
+--------+--------+------------+----------------+-------------+--------------+
| 1 &lt;&gt; 1 | 1 != 2 | &#39;a&#39; != &#39;b&#39; | (3+4) &lt;&gt; (2+6) | &#39;a&#39; != NULL | NULL &lt;&gt; NULL |
+--------+--------+------------+----------------+-------------+--------------+
|      0 |   1    |       1    |            1   |     NULL    |         NULL |
+--------+--------+------------+----------------+-------------+--------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，还有非符号类型的运算符：</p><p><img src="`+v+'" alt="image-20211012105303219"></p><p><img src="'+c+'" alt="image-20211012105030527"></p><p><img src="'+u+`" alt="image-20211012105052456"></p><p><strong>4. 空运算符</strong> 空运算符（IS NULL 或者 ISNULL）判断一个值是否为 NULL，如果为 NULL 则返回 1，否则返回 0。 SQL 语句示例如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT NULL IS NULL, ISNULL(NULL), ISNULL(&#39;a&#39;), 1 IS NULL;
+--------------+--------------+-------------+-----------+
| NULL IS NULL | ISNULL(NULL) | ISNULL(&#39;a&#39;) | 1 IS NULL |
+--------------+--------------+-------------+-----------+
|            1 |            1 |           0 |         0 |
+--------------+--------------+-------------+-----------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#查询commission_pct等于NULL。比较如下的四种写法
SELECT employee_id,commission_pct FROM employees WHERE commission_pct IS NULL;
SELECT employee_id,commission_pct FROM employees WHERE commission_pct &lt;=&gt; NULL;
SELECT employee_id,commission_pct FROM employees WHERE ISNULL(commission_pct);
SELECT employee_id,commission_pct FROM employees WHERE commission_pct = NULL;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT last_name, manager_id
FROM   employees
WHERE  manager_id IS NULL;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>5. 非空运算符</strong> 非空运算符（IS NOT NULL）判断一个值是否不为 NULL，如果不为 NULL 则返回 1，否则返回 0。 SQL 语句示例如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT NULL IS NOT NULL, &#39;a&#39; IS NOT NULL,  1 IS NOT NULL;
+------------------+-----------------+---------------+
| NULL IS NOT NULL | &#39;a&#39; IS NOT NULL | 1 IS NOT NULL |
+------------------+-----------------+---------------+
|                0 |               1 |             1 |
+------------------+-----------------+---------------+
1 row in set (0.01 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#查询commission_pct不等于NULL
SELECT employee_id,commission_pct FROM employees WHERE commission_pct IS NOT NULL;
SELECT employee_id,commission_pct FROM employees WHERE NOT commission_pct &lt;=&gt; NULL;
SELECT employee_id,commission_pct FROM employees WHERE NOT ISNULL(commission_pct);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6. 最小值运算符</strong> 语法格式为：LEAST(值 1，值 2，...，值 n)。其中，“值 n”表示参数列表中有 n 个值。在有两个或多个参数的情况下，返回最小值。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT LEAST (1,0,2), LEAST(&#39;b&#39;,&#39;a&#39;,&#39;c&#39;), LEAST(1,NULL,2);
+---------------+--------------------+-----------------+
| LEAST (1,0,2) | LEAST(&#39;b&#39;,&#39;a&#39;,&#39;c&#39;) | LEAST(1,NULL,2) |
+---------------+--------------------+-----------------+
|       0       |        a           |      NULL       |
+---------------+--------------------+-----------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由结果可以看到，当参数是整数或者浮点数时，LEAST 将返回其中最小的值；当参数为字符串时，返回字母表中顺序最靠前的字符；当比较值列表中有 NULL 时，不能判断大小，返回值为 NULL。</p><p><strong>7. 最大值运算符</strong> 语法格式为：GREATEST(值 1，值 2，...，值 n)。其中，n 表示参数列表中有 n 个值。当有两个或多个参数时，返回值为最大值。假如任意一个自变量为 NULL，则 GREATEST()的返回值为 NULL。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT GREATEST(1,0,2), GREATEST(&#39;b&#39;,&#39;a&#39;,&#39;c&#39;), GREATEST(1,NULL,2);
+-----------------+-----------------------+--------------------+
| GREATEST(1,0,2) | GREATEST(&#39;b&#39;,&#39;a&#39;,&#39;c&#39;) | GREATEST(1,NULL,2) |
+-----------------+-----------------------+--------------------+
|               2 | c                     |               NULL |
+-----------------+-----------------------+--------------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由结果可以看到，当参数中是整数或者浮点数时，GREATEST 将返回其中最大的值；当参数为字符串时，返回字母表中顺序最靠后的字符；当比较值列表中有 NULL 时，不能判断大小，返回值为 NULL。</p><p><strong>8. BETWEEN AND 运算符</strong> BETWEEN 运算符使用的格式通常为 SELECT D FROM TABLE WHERE C BETWEEN A AND B，此时，当 C 大于或等于 A，并且 C 小于或等于 B 时，结果为 1，否则结果为 0。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT 1 BETWEEN 0 AND 1, 10 BETWEEN 11 AND 12, &#39;b&#39; BETWEEN &#39;a&#39; AND &#39;c&#39;;
+-------------------+----------------------+-------------------------+
| 1 BETWEEN 0 AND 1 | 10 BETWEEN 11 AND 12 | &#39;b&#39; BETWEEN &#39;a&#39; AND &#39;c&#39; |
+-------------------+----------------------+-------------------------+
|                 1 |                    0 |                       1 |
+-------------------+----------------------+-------------------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT last_name, salary
FROM   employees
WHERE  salary BETWEEN 2500 AND 3500;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>9. IN 运算符</strong> IN 运算符用于判断给定的值是否是 IN 列表中的一个值，如果是则返回 1，否则返回 0。如果给定的值为 NULL，或者 IN 列表中存在 NULL，则结果为 NULL。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT &#39;a&#39; IN (&#39;a&#39;,&#39;b&#39;,&#39;c&#39;), 1 IN (2,3), NULL IN (&#39;a&#39;,&#39;b&#39;), &#39;a&#39; IN (&#39;a&#39;, NULL);
+----------------------+------------+-------------------+--------------------+
| &#39;a&#39; IN (&#39;a&#39;,&#39;b&#39;,&#39;c&#39;) | 1 IN (2,3) | NULL IN (&#39;a&#39;,&#39;b&#39;) | &#39;a&#39; IN (&#39;a&#39;, NULL) |
+----------------------+------------+-------------------+--------------------+
|            1         |        0   |         NULL      |         1          |
+----------------------+------------+-------------------+--------------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT employee_id, last_name, salary, manager_id
FROM   employees
WHERE  manager_id IN (100, 101, 201);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>10. NOT IN 运算符</strong> NOT IN 运算符用于判断给定的值是否不是 IN 列表中的一个值，如果不是 IN 列表中的一个值，则返回 1，否则返回 0。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT &#39;a&#39; NOT IN (&#39;a&#39;,&#39;b&#39;,&#39;c&#39;), 1 NOT IN (2,3);
+--------------------------+----------------+
| &#39;a&#39; NOT IN (&#39;a&#39;,&#39;b&#39;,&#39;c&#39;) | 1 NOT IN (2,3) |
+--------------------------+----------------+
|                 0        |            1   |
+--------------------------+----------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>11. LIKE 运算符</strong> LIKE 运算符主要用来匹配字符串，通常用于模糊匹配，如果满足条件则返回 1，否则返回 0。如果给定的值或者匹配条件为 NULL，则返回结果为 NULL。</p><p>LIKE 运算符通常使用如下通配符：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>“%”：匹配0个或多个字符。
“_”：只能匹配一个字符。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL 语句示例如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT NULL LIKE &#39;abc&#39;, &#39;abc&#39; LIKE NULL;
+-----------------+-----------------+
| NULL LIKE &#39;abc&#39; | &#39;abc&#39; LIKE NULL |
+-----------------+-----------------+
|          NULL   |          NULL   |
+-----------------+-----------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT	first_name
FROM 	employees
WHERE	first_name LIKE &#39;S%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT last_name
FROM   employees
WHERE  last_name LIKE &#39;_o%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ESCAPE</strong></p>`,65),N=e("ul",null,[e("li",null,[s("回避特殊符号的："),e("strong",null,"使用转义符"),s("。例如：将[%]转为["),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow"),e("annotation",{encoding:"application/x-tex"},"%]、[]转为[")])])]),e("span",{class:"katex-html","aria-hidden":"true"})]),s("]，然后再加上[ESCAPE‘$’]即可。")])],-1),q=i(`<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT job_id
FROM   jobs
WHERE  job_id LIKE ‘IT\\_%‘;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>如果使用\\表示转义，要省略 ESCAPE。如果不是\\，则要加上 ESCAPE。</li></ul><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT job_id
FROM   jobs
WHERE  job_id LIKE ‘IT$_%‘ escape ‘$‘;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>12. REGEXP 运算符</strong></p><p>REGEXP 运算符用来匹配字符串，语法格式为：<code>expr REGEXP 匹配条件</code>。如果 expr 满足匹配条件，返回 1；如果不满足，则返回 0。若 expr 或匹配条件任意一个为 NULL，则结果为 NULL。</p><p>REGEXP 运算符在进行匹配时，常用的有下面几种通配符：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>（1）‘^’匹配以该字符后面的字符开头的字符串。
（2）‘$’匹配以该字符前面的字符结尾的字符串。
（3）‘.’匹配任何一个单字符。
（4）“[...]”匹配在方括号内的任何字符。例如，“[abc]”匹配“a”或“b”或“c”。为了命名字符的范围，使用一个‘-’。“[a-z]”匹配任何字母，而“[0-9]”匹配任何数字。
（5）‘*’匹配零个或多个在它前面的字符。例如，“x*”匹配任何数量的‘x’字符，“[0-9]*”匹配任何数量的数字，而“*”匹配任何数量的任何字符。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL 语句示例如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT &#39;shkstart&#39; REGEXP &#39;^s&#39;, &#39;shkstart&#39; REGEXP &#39;t$&#39;, &#39;shkstart&#39; REGEXP &#39;hk&#39;;
+------------------------+------------------------+-------------------------+
| &#39;shkstart&#39; REGEXP &#39;^s&#39; | &#39;shkstart&#39; REGEXP &#39;t$&#39; | &#39;shkstart&#39; REGEXP &#39;hk&#39;  |
+------------------------+------------------------+-------------------------+
|                      1 |                      1 |                       1 |
+------------------------+------------------------+-------------------------+
1 row in set (0.01 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT &#39;atguigu&#39; REGEXP &#39;gu.gu&#39;, &#39;atguigu&#39; REGEXP &#39;[ab]&#39;;
+--------------------------+-------------------------+
| &#39;atguigu&#39; REGEXP &#39;gu.gu&#39; | &#39;atguigu&#39; REGEXP &#39;[ab]&#39; |
+--------------------------+-------------------------+
|                        1 |                       1 |
+--------------------------+-------------------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-逻辑运算符" tabindex="-1"><a class="header-anchor" href="#_3-逻辑运算符" aria-hidden="true">#</a> 3. 逻辑运算符</h2><p>逻辑运算符主要用来判断表达式的真假，在 MySQL 中，逻辑运算符的返回结果为 1、0 或者 NULL。</p><p>MySQL 中支持 4 种逻辑运算符如下：</p><p><img src="`+t+`" alt="image-20211012110241418"></p><p><strong>1．逻辑非运算符</strong> 逻辑非（NOT 或!）运算符表示当给定的值为 0 时返回 1；当给定的值为非 0 值时返回 0；当给定的值为 NULL 时，返回 NULL。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT NOT 1, NOT 0, NOT(1+1), NOT !1, NOT NULL;
+-------+-------+----------+--------+----------+
| NOT 1 | NOT 0 | NOT(1+1) | NOT !1 | NOT NULL |
+-------+-------+----------+--------+----------+
|     0 |     1 |        0 |      1 |     NULL |
+-------+-------+----------+--------+----------+
1 row in set, 1 warning (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT last_name, job_id
FROM   employees
WHERE  job_id NOT IN (&#39;IT_PROG&#39;, &#39;ST_CLERK&#39;, &#39;SA_REP&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2．逻辑与运算符</strong> 逻辑与（AND 或&amp;&amp;）运算符是当给定的所有值均为非 0 值，并且都不为 NULL 时，返回 1；当给定的一个值或者多个值为 0 时则返回 0；否则返回 NULL。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT 1 AND -1, 0 AND 1, 0 AND NULL, 1 AND NULL;
+----------+---------+------------+------------+
| 1 AND -1 | 0 AND 1 | 0 AND NULL | 1 AND NULL |
+----------+---------+------------+------------+
|        1 |       0 |          0 |       NULL |
+----------+---------+------------+------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT employee_id, last_name, job_id, salary
FROM   employees
WHERE  salary &gt;=10000
AND    job_id LIKE &#39;%MAN%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3．逻辑或运算符</strong> 逻辑或（OR 或||）运算符是当给定的值都不为 NULL，并且任何一个值为非 0 值时，则返回 1，否则返回 0；当一个值为 NULL，并且另一个值为非 0 值时，返回 1，否则返回 NULL；当两个值都为 NULL 时，返回 NULL。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT 1 OR -1, 1 OR 0, 1 OR NULL, 0 || NULL, NULL || NULL;
+---------+--------+-----------+-----------+--------------+
| 1 OR -1 | 1 OR 0 | 1 OR NULL | 0 || NULL | NULL || NULL |
+---------+--------+-----------+-----------+--------------+
|       1 |      1 |         1 |    NULL   |       NULL   |
+---------+--------+-----------+-----------+--------------+
1 row in set, 2 warnings (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>#查询基本薪资不在9000-12000之间的员工编号和基本薪资
SELECT employee_id,salary FROM employees
WHERE NOT (salary &gt;= 9000 AND salary &lt;= 12000);

SELECT employee_id,salary FROM employees
WHERE salary &lt;9000 OR salary &gt; 12000;

SELECT employee_id,salary FROM employees
WHERE salary NOT BETWEEN 9000 AND 12000;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SELECT employee_id, last_name, job_id, salary
FROM   employees
WHERE  salary &gt;= 10000
OR     job_id LIKE &#39;%MAN%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：</p><p>OR 可以和 AND 一起使用，但是在使用时要注意两者的优先级，由于 AND 的优先级高于 OR，因此先对 AND 两边的操作数进行操作，再与 OR 中的操作数结合。</p></blockquote><p><strong>4．逻辑异或运算符</strong> 逻辑异或（XOR）运算符是当给定的值中任意一个值为 NULL 时，则返回 NULL；如果两个非 NULL 的值都是 0 或者都不等于 0 时，则返回 0；如果一个值为 0，另一个值不为 0 时，则返回 1。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT 1 XOR -1, 1 XOR 0, 0 XOR 0, 1 XOR NULL, 1 XOR 1 XOR 1, 0 XOR 0 XOR 0;
+----------+---------+---------+------------+---------------+---------------+
| 1 XOR -1 | 1 XOR 0 | 0 XOR 0 | 1 XOR NULL | 1 XOR 1 XOR 1 | 0 XOR 0 XOR 0 |
+----------+---------+---------+------------+---------------+---------------+
|        0 |       1 |       0 |       NULL |             1 |             0 |
+----------+---------+---------+------------+---------------+---------------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select last_name,department_id,salary
from employees
where department_id in (10,20) XOR salary &gt; 8000;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-位运算符" tabindex="-1"><a class="header-anchor" href="#_4-位运算符" aria-hidden="true">#</a> 4. 位运算符</h2><p>位运算符是在二进制数上进行计算的运算符。位运算符会先将操作数变成二进制数，然后进行位运算，最后将计算结果从二进制变回十进制数。</p><p>MySQL 支持的位运算符如下：</p><p><img src="`+b+`" alt="image-20211012110511223"></p><p><strong>1．按位与运算符</strong> 按位与（&amp;）运算符将给定值对应的二进制数逐位进行逻辑与运算。当给定值对应的二进制位的数值都为 1 时，则该位返回 1，否则返回 0。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT 1 &amp; 10, 20 &amp; 30;
+--------+---------+
| 1 &amp; 10 | 20 &amp; 30 |
+--------+---------+
|      0 |      20 |
+--------+---------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 的二进制数为 0001，10 的二进制数为 1010，所以 1 &amp; 10 的结果为 0000，对应的十进制数为 0。20 的二进制数为 10100，30 的二进制数为 11110，所以 20 &amp; 30 的结果为 10100，对应的十进制数为 20。</p><p><strong>2. 按位或运算符</strong> 按位或（|）运算符将给定的值对应的二进制数逐位进行逻辑或运算。当给定值对应的二进制位的数值有一个或两个为 1 时，则该位返回 1，否则返回 0。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT 1 | 10, 20 | 30;
+--------+---------+
| 1 | 10 | 20 | 30 |
+--------+---------+
|     11 |      30 |
+--------+---------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 的二进制数为 0001，10 的二进制数为 1010，所以 1 | 10 的结果为 1011，对应的十进制数为 11。20 的二进制数为 10100，30 的二进制数为 11110，所以 20 | 30 的结果为 11110，对应的十进制数为 30。</p><p><strong>3. 按位异或运算符</strong> 按位异或（^）运算符将给定的值对应的二进制数逐位进行逻辑异或运算。当给定值对应的二进制位的数值不同时，则该位返回 1，否则返回 0。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT 1 ^ 10, 20 ^ 30;
+--------+---------+
| 1 ^ 10 | 20 ^ 30 |
+--------+---------+
|     11 |      10 |
+--------+---------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 的二进制数为 0001，10 的二进制数为 1010，所以 1 ^ 10 的结果为 1011，对应的十进制数为 11。20 的二进制数为 10100，30 的二进制数为 11110，所以 20 ^ 30 的结果为 01010，对应的十进制数为 10。</p><p>再举例：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT 12 &amp; 5, 12 | 5,12 ^ 5 FROM DUAL;
+--------+--------+--------+
| 12 &amp; 5 | 12 | 5 | 12 ^ 5 |
+--------+--------+--------+
|      4 |     13 |      9 |
+--------+--------+--------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="`+o+`" alt="image-20211023115738415" style="zoom:80%;"><p><strong>4. 按位取反运算符</strong> 按位取反（~）运算符将给定的值的二进制数逐位进行取反操作，即将 1 变为 0，将 0 变为 1。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT 10 &amp; ~1;
+---------+
| 10 &amp; ~1 |
+---------+
|      10 |
+---------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于按位取反（~）运算符的优先级高于按位与（&amp;）运算符的优先级，所以 10 &amp; ~1，首先，对数字 1 进行按位取反操作，结果除了最低位为 0，其他位都为 1，然后与 10 进行按位与操作，结果为 10。</p><p><strong>5. 按位右移运算符</strong> 按位右移（&gt;&gt;）运算符将给定的值的二进制数的所有位右移指定的位数。右移指定的位数后，右边低位的数值被移出并丢弃，左边高位空出的位置用 0 补齐。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT 1 &gt;&gt; 2, 4 &gt;&gt; 2;
+--------+--------+
| 1 &gt;&gt; 2 | 4 &gt;&gt; 2 |
+--------+--------+
|      0 |      1 |
+--------+--------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 的二进制数为 0000 0001，右移 2 位为 0000 0000，对应的十进制数为 0。4 的二进制数为 0000 0100，右移 2 位为 0000 0001，对应的十进制数为 1。</p><p><strong>6. 按位左移运算符</strong> 按位左移（&lt;&lt;）运算符将给定的值的二进制数的所有位左移指定的位数。左移指定的位数后，左边高位的数值被移出并丢弃，右边低位空出的位置用 0 补齐。</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT 1 &lt;&lt; 2, 4 &lt;&lt; 2;
+--------+--------+
| 1 &lt;&lt; 2 | 4 &lt;&lt; 2 |
+--------+--------+
|      4 |     16 |
+--------+--------+
1 row in set (0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1 的二进制数为 0000 0001，左移两位为 0000 0100，对应的十进制数为 4。4 的二进制数为 0000 0100，左移两位为 0001 0000，对应的十进制数为 16。</p><h2 id="_5-运算符的优先级" tabindex="-1"><a class="header-anchor" href="#_5-运算符的优先级" aria-hidden="true">#</a> 5. 运算符的优先级</h2><p><img src="`+g+'" alt="image-20211012111042395"></p><p><img src="'+p+'" alt="image-20211012110731059"></p><p>数字编号越大，优先级越高，优先级高的运算符先进行计算。可以看到，赋值运算符的优先级最低，使用“()”括起来的表达式的优先级最高。</p><h2 id="拓展-使用正则表达式查询" tabindex="-1"><a class="header-anchor" href="#拓展-使用正则表达式查询" aria-hidden="true">#</a> 拓展：使用正则表达式查询</h2><p>正则表达式通常被用来检索或替换那些符合某个模式的文本内容，根据指定的匹配模式匹配文本中符合要求的特殊字符串。例如，从一个文本文件中提取电话号码，查找一篇文章中重复的单词或者替换用户输入的某些敏感词语等，这些地方都可以使用正则表达式。正则表达式强大而且灵活，可以应用于非常复杂的查询。</p><p>MySQL 中使用 REGEXP 关键字指定正则表达式的字符匹配模式。下表列出了 REGEXP 操作符中常用字符匹配列表。</p><p><img src="'+L+`" alt="image-20210926151249943"></p><p><strong>1. 查询以特定字符或字符串开头的记录</strong> 字符‘^’匹配以特定字符或者字符串开头的文本。</p><p>在 fruits 表中，查询 f_name 字段以字母‘b’开头的记录，SQL 语句如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT * FROM fruits WHERE f_name REGEXP &#39;^b&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2. 查询以特定字符或字符串结尾的记录</strong> 字符‘$’匹配以特定字符或者字符串结尾的文本。</p><p>在 fruits 表中，查询 f_name 字段以字母‘y’结尾的记录，SQL 语句如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT * FROM fruits WHERE f_name REGEXP &#39;y$&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>3. 用符号&quot;.&quot;来替代字符串中的任意一个字符</strong> 字符‘.’匹配任意一个字符。 在 fruits 表中，查询 f_name 字段值包含字母‘a’与‘g’且两个字母之间只有一个字母的记录，SQL 语句如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT * FROM fruits WHERE f_name REGEXP &#39;a.g&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>4. 使用&quot;*&quot;和&quot;+&quot;来匹配多个字符</strong> 星号‘*’匹配前面的字符任意多次，包括 0 次。加号‘+’匹配前面的字符至少一次。</p><p>在 fruits 表中，查询 f_name 字段值以字母‘b’开头且‘b’后面出现字母‘a’的记录，SQL 语句如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT * FROM fruits WHERE f_name REGEXP &#39;^ba*&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 fruits 表中，查询 f_name 字段值以字母‘b’开头且‘b’后面出现字母‘a’至少一次的记录，SQL 语句如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT * FROM fruits WHERE f_name REGEXP &#39;^ba+&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>5. 匹配指定字符串</strong> 正则表达式可以匹配指定字符串，只要这个字符串在查询文本中即可，如要匹配多个字符串，多个字符串之间使用分隔符‘|’隔开。</p><p>在 fruits 表中，查询 f_name 字段值包含字符串“on”的记录，SQL 语句如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT * FROM fruits WHERE f_name REGEXP &#39;on&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 fruits 表中，查询 f_name 字段值包含字符串“on”或者“ap”的记录，SQL 语句如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT * FROM fruits WHERE f_name REGEXP &#39;on|ap&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>之前介绍过，LIKE 运算符也可以匹配指定的字符串，但与 REGEXP 不同，LIKE 匹配的字符串如果在文本中间出现，则找不到它，相应的行也不会返回。REGEXP 在文本内进行匹配，如果被匹配的字符串在文本中出现，REGEXP 将会找到它，相应的行也会被返回。对比结果如下所示。</p><p>在 fruits 表中，使用 LIKE 运算符查询 f_name 字段值为“on”的记录，SQL 语句如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT * FROM fruits WHERE f_name like &#39;on&#39;;
Empty set(0.00 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6. 匹配指定字符中的任意一个</strong> 方括号“[]”指定一个字符集合，只匹配其中任何一个字符，即为所查找的文本。</p><p>在 fruits 表中，查找 f_name 字段中包含字母‘o’或者‘t’的记录，SQL 语句如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT * FROM fruits WHERE f_name REGEXP &#39;[ot]&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 fruits 表中，查询 s_id 字段中包含 4、5 或者 6 的记录，SQL 语句如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT * FROM fruits WHERE s_id REGEXP &#39;[456]&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>7. 匹配指定字符以外的字符</strong><code>“[^字符集合]”</code>匹配不在指定集合中的任何字符。</p><p>在 fruits 表中，查询 f_id 字段中包含字母 a~e 和数字 1~2 以外字符的记录，SQL 语句如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT * FROM fruits WHERE f_id REGEXP &#39;[^a-e1-2]&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>8. 使用{n,}或者{n,m}来指定字符串连续出现的次数</strong> “字符串{n,}”表示至少匹配 n 次前面的字符；“字符串{n,m}”表示匹配前面的字符串不少于 n 次，不多于 m 次。例如，a{2,}表示字母 a 连续出现至少 2 次，也可以大于 2 次；a{2,4}表示字母 a 连续出现最少 2 次，最多不能超过 4 次。</p><p>在 fruits 表中，查询 f_name 字段值出现字母‘x’至少 2 次的记录，SQL 语句如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT * FROM fruits WHERE f_name REGEXP &#39;x{2,}&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 fruits 表中，查询 f_name 字段值出现字符串“ba”最少 1 次、最多 3 次的记录，SQL 语句如下：</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; SELECT * FROM fruits WHERE f_name REGEXP &#39;ba{1,3}&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,95),_=[y,N,q];function R(S,T){return l(),a("div",null,_)}const O=n(E,[["render",R],["__file","第04章_运算符.html.vue"]]);export{O as default};
