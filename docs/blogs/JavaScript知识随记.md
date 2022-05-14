# JavaScript随记

JavaScript是一门用来与网页交互的脚本语言，核心包含一下三个部分：

- **ECMAScript**：由ECMA-262定义并提供核心功能（基础语法。ES5，ES6，ES7...）
- **DOM（文档对象模型）**：提供与网页内容（HTML或XML）交互的方法和接口
- **BOM（浏览器对象模型**）：提供与浏览器交互的方法和接口

JavaScript的这三个部分得到了五大Web浏览器（IE，FireFox，Chrome，Safari和Opera）不同程度的支持。所有浏览器基本上对ES5（ECMAScript 5）提供了完善的支持，而对于ES6和ES7的支持度也在不断提升（截止2019年）。这些浏览器对DOM的支持各不相同，但是对于Level 3的支持日益趋于规范。HTML5中收录的BOM会因浏览器而异，不过对于我们开发者而言已经有很大一部分有公共特性了。

## DOM

文档对象模型（DOM，Document Object Model）是一个`应用程序接口`（划重点——其本质就是用应用程序接口），用于在HTML中使用拓展的XML。

DOM通过创建表示文档的`树`，让开发者可以随心所欲地控制网页的内容和结构。使用DOM API可以轻松地删除，添加，替换，修改节点。

> 重点强调下： DOM并非只能通过JavaScript来访问，在其他语言都已经被实现了。就比如python中的 beautiful soup库。不过对于浏览器而言，DOM就是使用ECMAScript实现的，所以才成为JavaScript语言的一大组成部分。

早期DOM的设置规范标准（DOM level 1）主要包含两个模块： `DOM Core` 和 `DOM HTML`。前者提供了一种映射XML文档，从而方便访问和操作文档任意部分的方式；后者拓展了前者，并增加了特定于HTML的对象和方法。

DOM Level 2新增一下模块，以支持新的接口：

- DOM视图： 描述追踪文档不同视图（如应用CSS样式前后的文档）的接口
- DOM事件： 描述事件以及时间处理的接口
- DOM样式： 描述处理元素CSS样式的接口
- DOM便利和范围： 描述遍历和操作DOM树的接口

DOM Level 3进一步拓展了DOM，增加了以统一的方式`加载和保存文档的方法`（包含在一个叫DOM Load and Save的新模块中），还有验证文档的方法（DOM Validation）。

目前DOM不会按照Level来维护DOM了，而是作为DOM Living Standard来维护，其快照称为DOM4

## BOM

BOM表示浏览器对象模型（我自己想的应该是Brower Object Model的缩写吧），在一般的浏览器中都提供了浏览器对象模型API，主要用于支持访问和操作浏览器的窗口。

使用BOM，开发者可以操控浏览器显示页面之外的部分。BOM问题最多的地方就在于它是唯一一个没有相关标准的JavaScript实现，当然这也正是BOM真正独一无二的地方。很幸运，**HTML5的出现改变了这个局面**，这个版本的HTML以正式规范的形式涵盖了尽可能多的BOM特性。

总体来说，BOM主要针对的就是浏览器窗口和子窗口（frame），不过人们通常会把`任何特定于浏览器的拓展都归结在BOM的范畴内`。比如，下面的这样一些拓展：

- 弹出新浏览器窗口的能力；
- 移动，缩放和关闭浏览器窗口的能力；
- navigator对象，提供关于浏览器的详细信息；
- location对象，提供浏览器加载页面的详尽信息；
- screen对象，提供关于用户屏幕分辨率的详尽信息
- perfomance对象，提供浏览器内存占用，导航行为和时间统计的详尽信息；
- 对cookie的支持；
- 其他自定义的对象，如XMLHttpRequest和IE的ActiveXObject；

因为在长时间内都没有对应的标准来规范，所以一个浏览器实现都是自己的BOM。当然也有一些所谓的事实标准，比如对于window对象和navigator对象，每个浏览器都会给它们定义自己的属性和方法。现在因为有HTML5，BOM的实现细节应该回日趋一致。