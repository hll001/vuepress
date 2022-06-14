# BFC

> 块格式化上下文(Block Formatting Context, BFC)。
>
> 我们不要刻意的去记什么是BFC， 而更应该关注元素如何`触发创建形成BFC`，以及`BFC能给我带来什么`

## 触发创建形成BFC

>记住常用的前两条。

- (**推荐**)设置元素的`overflow`值不为`visible`,`clip`的块元素；`overflow: auto`。
- (**推荐**)设置元素的`display`值为`flow-root`；`display: flow-root`。
- HTML中根元素(html)默认就是BFC。
- 设置`元素浮动`；`float: 不为null`。
- 设置元素进行`绝对定位`；`position: absolute/fixed`。
- 设置元素为`行内块元素；`display: inline-block`。
- 设置元素`contain`值为`layout`，`content`，`paint`；`contain: layout/content/paint`。
- 弹性元素或者网格元素(`display: flex/inline-flex/grid/inline-flex`)对应的直接`子元素`。
- 匿名表格单位格元素；`display: table/table-row/table-row-group/table-header-group/table-footer-group/inline-table`。
- 表格单元格元素；`display: table-cell`。
- 表格标题元素；`display: table-caption`。
- 多列容器。
- `column-span`值为`all`的元素始终会创建一个新的`BFC`。

## BFC能给我带来什么

> BFC影响布局。通常，我们会为`定位`和`清除浮动`创建新的BFC，而不是更改布局。

- 包含内部浮动(解决内部浮动而形成高度塌陷问题)

    父元素创建形成BFC之后，那么就会包裹内部浮动的子元素(避免`高度塌陷`)。具体代码如下：

    ```html
        <section>
            <div class="box">
                <div class="float">I am a floated box!</div>
                <p>I am content inside the container.</p>
            </div>
            </section>
            <section>
            <div class="box" style="overflow:auto">
                <div class="float">I am a floated box!</div>
                <p>I am content inside the <code>overflow:auto</code> container.</p>
            </div>
            </section>
            <section>
            <div class="box" style="display:flow-root">
                <div class="float">I am a floated box!</div>
                <p>I am content inside the <code>display:flow-root</code> container.</p>
            </div>
        </section>
    ```

    ```css
        section {
            height: 150px;
        }
        .box {
            background-color: rgb(224, 206, 247);
            border: 5px solid rebeccapurple;
        }
        .box[style] {
            background-color: aliceblue;
            border: 5px solid steelblue;
        }
        .float {
            float: left;
            width: 200px;
            height: 100px;
            background-color: rgba(255, 255, 255, .5);
            border:1px solid black;
            padding: 10px;
        }
    ```

- 排除外部浮动(解决相邻元素间浮动而形成的重叠等问题，各个元素能相互独立)

    假设现在有一对兄弟 div，其中一个加了浮动，那么两个 div 会重叠一部分。如果让另一个 div 创建 BFC，那么这两者就会界限分明。具体代码如下：

    ```html
    <section>
        <div class="float">Try to resize this outer float</div>
        <div class="box"><p>Normal</p></div>
    </section>
    <section>
        <div class="float">Try to resize this outer float</div>
        <div class="box" style="display:flow-root"><p><code>display:flow-root</code><p></div>
    </section>
    ```

    ```css
    section {
        height:150px;
    }
    .box {
        background-color: rgb(224, 206, 247);
        border: 5px solid rebeccapurple;
    }
    .box[style] {
        background-color: aliceblue;
        border: 5px solid steelblue;
    }
    .float {
        float: left;
        overflow: hidden; /* required by resize:both */
        resize: both;
        margin-right:25px;
        width: 200px;
        height: 100px;
        background-color: rgba(255, 255, 255, .75);
        border: 1px solid black;
        padding: 10px;
    }
    ```

- 阻止外边距重叠
  
    创建新的 BFC 避免两个相邻的 div 之间 外边距重叠 。具体代码如下：

    ```html
    <div class="blue"></div>
    <div class="red-outer">
        <div class="red-inner">red inner</div>
    </div>
    ```

    ```css
    .blue, .red-inner {
        height: 50px;
        margin: 10px 0;
    }

    .blue {
        background: blue;
    }

    .red-outer {
        overflow: hidden;
        background: red;
    }
    ```
