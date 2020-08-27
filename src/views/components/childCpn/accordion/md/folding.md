>lp-accordion组件还支持同时打开多个面板 , 只需将 `accordion` 属性设置为 `false` , 同时 `v-model` 需要绑定数组变量 , 数组中存储着面板打开的索引值

```html
<template>
    <lp-accordion v-model="folding" :number="5" :accordion="false">
        <span slot="title0">首页</span>
        <div slot="content0">新款爆品上新大促</div>

        <span slot="title1">分类</span>
        <div slot="content1">更多好物尽在这里</div>

        <span slot="title2">讨论</span>
        <div slot="content2">用户们都在这里讨论咨询</div>

        <span slot="title3">购物车</span>
        <div slot="content3">选好物品请在此处结账</div>

        <span slot="title4">我的</span>
        <div slot="content4">包含了所有个人账号信息</div>
    </lp-accordion>
</template>

<script>
    export default {
        data() {
            return {
                folding: [1, 2]
            }
        }
    }
</script>
```