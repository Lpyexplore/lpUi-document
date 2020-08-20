>通过设置lp-filp组件的 `frontBg`属性和 `backBg`属性即可改变卡片的正反两面背景颜色, lpUi暂时只提供了以下几种颜色分别是: `green` 、`lavender` 、`pink` 、`blue`

>lp-filp组件也提供了 `center`属性, 用于将卡片的内容进行居中, 可选值有 `false(默认)/true`

```html
<div class="show-base">
    <lp-filp center>
        <div slot="front">default</div>
        <div slot="back">default</div>
    </lp-filp>

    <lp-filp frontBg="green" backBg="pink" center>
        <div slot="front">green</div>
        <div slot="back">pink</div>
    </lp-filp>

    <lp-filp frontBg="lavender" backBg="blue" center>
        <div slot="front">lavender</div>
        <div slot="back">blue</div>
    </lp-filp>

    <lp-filp frontBg="pink" backBg="green" center>
        <div slot="front">pink</div>
        <div slot="back">green</div>
    </lp-filp>

    <lp-filp frontBg="blue" backBg="lavender" center>
        <div slot="front">blue</div>
        <div slot="back">lavender</div>
    </lp-filp>
</div>
```