>将lp-button组件的 `loading` 属性设置为 `true` 即可实现加载动画
>
>自动隐藏有 `circle` 属性组件的加载文字

```html
<!--    第一行组件代码    -->
<div class="show-loading">
    <lp-button loading>default</lp-button>
    <lp-button type="primary" loading>primary</lp-button>
    <lp-button type="success" loading>success</lp-button>
    <lp-button type="danger" loading>danger</lp-button>
    <lp-button type="warning" loading>warning</lp-button>
</div>

<!--    第二行组件代码    -->
<div class="show-loading">
    <lp-button circle loading>
        <i class="fa fa-address-book"></i>
    </lp-button>

    <lp-button type="success" circle loading>
        <i class="fa fa-check"></i>
    </lp-button>

    <lp-button type="primary" circle loading>
        <i class="fa fa-envelope-open-o"></i>
    </lp-button>

    <lp-button type="danger" circle loading>
        <i class="fa fa-skyatlas"></i>
    </lp-button>

    <lp-button type="warning" circle loading>
        <i class="fa  fa-bell-slash-o"></i>
    </lp-button>
</div>
```