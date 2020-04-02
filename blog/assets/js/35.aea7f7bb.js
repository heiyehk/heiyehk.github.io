(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{263:function(_,v,t){"use strict";t.r(v);var d=t(29),r=Object(d.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"mysql-数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-数据类型"}},[_._v("#")]),_._v(" MySQL 数据类型")]),_._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[_._v("#")]),_._v(" 前言")]),_._v(" "),t("p",[_._v("MySQL中定义数据字段的类型对你数据库的优化是非常重要的。"),t("br"),_._v("\nMySQL支持多种类型，大致可以分为三类：数值、日期/时间和字符串(字符)类型。")]),_._v(" "),t("h2",{attrs:{id:"数值类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数值类型"}},[_._v("#")]),_._v(" 数值类型")]),_._v(" "),t("p",[_._v("MySQL支持所有标准SQL数值数据类型。"),t("br"),_._v("\n这些类型包括严格数值数据类型(INTEGER、SMALLINT、DECIMAL和NUMERIC)，以及近似数值数据类型(FLOAT、REAL和DOUBLE PRECISION)。"),t("br"),_._v("\n关键字INT是INTEGER的同义词，关键字DEC是DECIMAL的同义词。"),t("br"),_._v("\nBIT数据类型保存位字段值，并且支持MyISAM、MEMORY、InnoDB和BDB表。"),t("br"),_._v("\n作为SQL标准的扩展，MySQL也支持整数类型TINYINT、MEDIUMINT和BIGINT。下面的表显示了需要的每个整数类型的存储和范围。")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("大小")]),_._v(" "),t("th",[_._v("范围（有符号）")]),_._v(" "),t("th",[_._v("范围（无符号）")]),_._v(" "),t("th",[_._v("用途")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("TINYINT")]),_._v(" "),t("td",[_._v("1 字节")]),_._v(" "),t("td",[_._v("(-128，127)")]),_._v(" "),t("td",[_._v("(0，255)")]),_._v(" "),t("td",[_._v("小整数值")])]),_._v(" "),t("tr",[t("td",[_._v("SMALLINT")]),_._v(" "),t("td",[_._v("2 字节")]),_._v(" "),t("td",[_._v("(-32 768，32 767)")]),_._v(" "),t("td",[_._v("(0，65 535)")]),_._v(" "),t("td",[_._v("大整数值")])]),_._v(" "),t("tr",[t("td",[_._v("MEDIUMINT")]),_._v(" "),t("td",[_._v("3 字节")]),_._v(" "),t("td",[_._v("(-8 388 608，8 388 607)")]),_._v(" "),t("td",[_._v("(0，16 777 215)")]),_._v(" "),t("td",[_._v("大整数值")])]),_._v(" "),t("tr",[t("td",[_._v("INT或INTEGER")]),_._v(" "),t("td",[_._v("4 字节")]),_._v(" "),t("td",[_._v("(-2 147 483 648，2 147 483 647)")]),_._v(" "),t("td",[_._v("(0，4 294 967 295)")]),_._v(" "),t("td",[_._v("大整数值")])]),_._v(" "),t("tr",[t("td",[_._v("BIGINT")]),_._v(" "),t("td",[_._v("8 字节")]),_._v(" "),t("td",[_._v("(-9,223,372,036,854,775,808，9 223 372 036 854 775 807)")]),_._v(" "),t("td",[_._v("(0，18 446 744 073 709 551 615)")]),_._v(" "),t("td",[_._v("极大整数值")])]),_._v(" "),t("tr",[t("td",[_._v("FLOAT")]),_._v(" "),t("td",[_._v("4 字节")]),_._v(" "),t("td",[_._v("(-3.402 823 466 E+38，-1.175 494 351 E-38)，0，(1.175 494 351 E-38，3.402 823 466 351 E+38)")]),_._v(" "),t("td",[_._v("0，(1.175 494 351 E-38，3.402 823 466 E+38)")]),_._v(" "),t("td",[_._v("单精度 浮点数值")])]),_._v(" "),t("tr",[t("td",[_._v("DOUBLE")]),_._v(" "),t("td",[_._v("8 字节")]),_._v(" "),t("td",[_._v("(-1.797 693 134 862 315 7 E+308，-2.225 073 858 507 201 4 E-308)，0，(2.225 073 858 507 201 4 E-308，1.797 693 134 862 315 7 E+308)")]),_._v(" "),t("td",[_._v("0，(2.225 073 858 507 201 4 E-308，1.797 693 134 862 315 7 E+308)")]),_._v(" "),t("td",[_._v("双精度 浮点数值")])]),_._v(" "),t("tr",[t("td",[_._v("DECIMAL")]),_._v(" "),t("td",[_._v("对DECIMAL(M,D) ，如果M>D，为M+2否则为D+2")]),_._v(" "),t("td",[_._v("依赖于M和D的值")]),_._v(" "),t("td",[_._v("依赖于M和D的值")]),_._v(" "),t("td",[_._v("小数值")])])])]),_._v(" "),t("h2",{attrs:{id:"日期和时间类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#日期和时间类型"}},[_._v("#")]),_._v(" 日期和时间类型")]),_._v(" "),t("p",[_._v("表示时间值的日期和时间类型为DATETIME、DATE、TIMESTAMP、TIME和YEAR。"),t("br"),_._v('\n每个时间类型有一个有效值范围和一个"零"值，当指定不合法的MySQL不能表示的值时使用"零"值。'),t("br"),_._v("\nTIMESTAMP类型有专有的自动更新特性，将在后面描述。")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("大小(字节)")]),_._v(" "),t("th",[_._v("范围")]),_._v(" "),t("th",[_._v("格式")]),_._v(" "),t("th",[_._v("用途")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("DATE")]),_._v(" "),t("td",[_._v("3")]),_._v(" "),t("td",[_._v("1000-01-01/9999-12-31")]),_._v(" "),t("td",[_._v("YYYY-MM-DD")]),_._v(" "),t("td",[_._v("日期值")])]),_._v(" "),t("tr",[t("td",[_._v("TIME")]),_._v(" "),t("td",[_._v("3")]),_._v(" "),t("td",[_._v("'-838:59:59'/'838:59:59'")]),_._v(" "),t("td",[_._v("HH:MM:SS")]),_._v(" "),t("td",[_._v("时间值或持续时间")])]),_._v(" "),t("tr",[t("td",[_._v("YEAR")]),_._v(" "),t("td",[_._v("1")]),_._v(" "),t("td",[_._v("1901/2155")]),_._v(" "),t("td",[_._v("YYYY")]),_._v(" "),t("td",[_._v("年份值")])]),_._v(" "),t("tr",[t("td",[_._v("DATETIME")]),_._v(" "),t("td",[_._v("8")]),_._v(" "),t("td",[_._v("1000-01-01 00:00:00/9999-12-31 23:59:59")]),_._v(" "),t("td",[_._v("YYYY-MM-DD HH:MM:SS")]),_._v(" "),t("td",[_._v("混合日期和时间值")])]),_._v(" "),t("tr",[t("td",[_._v("TIMESTAMP")]),_._v(" "),t("td",[_._v("4")]),_._v(" "),t("td",[_._v("1970-01-01 00:00:00/2038，结束时间是第 2147483647 秒，北京时间 2038-1-19 11:14:07，格林尼治时间 2038年1月19日 凌晨 03:14:07")]),_._v(" "),t("td",[_._v("YYYYMMDD HHMMSS")]),_._v(" "),t("td",[_._v("混合日期和时间值，时间戳")])])])]),_._v(" "),t("h2",{attrs:{id:"字符串类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#字符串类型"}},[_._v("#")]),_._v(" 字符串类型")]),_._v(" "),t("p",[_._v("字符串类型指CHAR、VARCHAR、BINARY、VARBINARY、BLOB、TEXT、ENUM和SET。该节描述了这些类型如何工作以及如何在查询中使用这些类型。")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("类型")]),_._v(" "),t("th",[_._v("大小")]),_._v(" "),t("th",[_._v("用途")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("CHAR")]),_._v(" "),t("td",[_._v("0-255字节")]),_._v(" "),t("td",[_._v("定长字符串")])]),_._v(" "),t("tr",[t("td",[_._v("VARCHAR")]),_._v(" "),t("td",[_._v("0-65535 字节")]),_._v(" "),t("td",[_._v("变长字符串")])]),_._v(" "),t("tr",[t("td",[_._v("TINYBLOB")]),_._v(" "),t("td",[_._v("0-255字节")]),_._v(" "),t("td",[_._v("不超过 255 个字符的二进制字符串")])]),_._v(" "),t("tr",[t("td",[_._v("TINYTEXT")]),_._v(" "),t("td",[_._v("0-255字节")]),_._v(" "),t("td",[_._v("短文本字符串")])]),_._v(" "),t("tr",[t("td",[_._v("BLOB")]),_._v(" "),t("td",[_._v("0-65 535字节")]),_._v(" "),t("td",[_._v("二进制形式的长文本数据")])]),_._v(" "),t("tr",[t("td",[_._v("TEXT")]),_._v(" "),t("td",[_._v("0-65 535字节")]),_._v(" "),t("td",[_._v("长文本数据")])]),_._v(" "),t("tr",[t("td",[_._v("MEDIUMBLOB")]),_._v(" "),t("td",[_._v("0-16 777 215字节")]),_._v(" "),t("td",[_._v("二进制形式的中等长度文本数据")])]),_._v(" "),t("tr",[t("td",[_._v("MEDIUMTEXT")]),_._v(" "),t("td",[_._v("0-16 777 215字节")]),_._v(" "),t("td",[_._v("中等长度文本数据")])]),_._v(" "),t("tr",[t("td",[_._v("LONGBLOB")]),_._v(" "),t("td",[_._v("0-4 294 967 295字节")]),_._v(" "),t("td",[_._v("二进制形式的极大文本数据")])]),_._v(" "),t("tr",[t("td",[_._v("LONGTEXT")]),_._v(" "),t("td",[_._v("0-4 294 967 295字节")]),_._v(" "),t("td",[_._v("极大文本数据")])])])]),_._v(" "),t("h2",{attrs:{id:"结尾"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结尾"}},[_._v("#")]),_._v(" 结尾")]),_._v(" "),t("p",[_._v("CHAR 和 VARCHAR 类型类似，但它们保存和检索的方式不同。它们的最大长度和是否尾部空格被保留等方面也不同。在存储或检索过程中不进行大小写转换。"),t("br"),_._v("\nBINARY 和 VARBINARY 类似于 CHAR 和 VARCHAR，不同的是它们包含二进制字符串而不要非二进制字符串。也就是说，它们包含字节字符串而不是字符字符串。这说明它们没有字符集，并且排序和比较基于列值字节的数值值。"),t("br"),_._v("\nBLOB 是一个二进制大对象，可以容纳可变数量的数据。有 4 种 BLOB 类型：TINYBLOB、BLOB、MEDIUMBLOB 和 LONGBLOB。它们区别在于可容纳存储范围不同。"),t("br"),_._v("\n有 4 种 TEXT 类型：TINYTEXT、TEXT、MEDIUMTEXT 和 LONGTEXT。对应的这 4 种 BLOB 类型，可存储的最大长度不同，可根据实际情况选择。")]),_._v(" "),t("p",[_._v("非商用，侵删，转自: "),t("a",{attrs:{href:"https://www.runoob.com/mysql/mysql-data-types.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("https://www.runoob.com/mysql/mysql-data-types.html"),t("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=r.exports}}]);