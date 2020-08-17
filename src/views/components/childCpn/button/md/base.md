>分别使用了属性 `type` 、`plain` 、`round` 、`circle`改变了按钮组件的样式

```html
<!--    第一行组件代码    -->
<div class="show-normal">
    <lp-button>default</lp-button>
    <lp-button type="primary">primary</lp-button>
    <lp-button type="success">success</lp-button>
    <lp-button type="danger">danger</lp-button>
    <lp-button type="warning">warning</lp-button>
</div>

<!--    第二行组件代码    -->
<div class="show-plain">
    <lp-button plain>default</lp-button>
    <lp-button type="primary" plain>primary</lp-button>
    <lp-button type="success" plain>success</lp-button>
    <lp-button type="danger" plain>danger</lp-button>
    <lp-button type="warning" plain>warning</lp-button>
</div>

<!--    第三行组件代码    -->
<div class="show-round">
    <lp-button round>default</lp-button>
    <lp-button type="primary" round>primary</lp-button>
    <lp-button type="success" round>success</lp-button>
    <lp-button type="danger" round>danger</lp-button>
    <lp-button type="warning" round>warning</lp-button>
</div>

<!--    第四行组件代码    -->
<div class="show-circle">
    <lp-button circle>
        <i class="fa fa-address-book"></i>
    </lp-button>

    <lp-button type="success" circle>
        <i class="fa fa-check"></i>
    </lp-button>

    <lp-button type="primary" circle>
        <i class="fa fa-envelope-open-o"></i>
    </lp-button>

    <lp-button type="danger" circle>
        <i class="fa fa-skyatlas"></i>
    </lp-button>

    <lp-button type="warning" circle>
        <i class="fa  fa-bell-slash-o"></i>
    </lp-button>
</div>
```