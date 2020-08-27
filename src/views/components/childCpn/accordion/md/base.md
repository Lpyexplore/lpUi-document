>lp-accordion组件需要设置 `number` 属性确认分类个数 , 假设设置为 `4` , 随即就会生成两种插槽 `title` 和 `content` , 分别用于设置标题和内容 , 其中 , 这两种插槽各有4个 , 即 `title0 ~ title3` 和 `content0 ~ content3` 。除此之外我们还需要通过 `v-model` 绑定一个变量用于监听改变面板的开合

```html
<template>
    <lp-accordion v-model="index" :number="4">

        <span slot="title0">首页</span>
        <div slot="content0">新款爆品上新大促</div>

        <span slot="title1">分类</span>
        <div slot="content1">更多好物尽在这里</div>

        <span slot="title2">购物车</span>
        <div slot="content2">选好物品请在此处结账</div>

        <span slot="title3">我的</span>
        <div slot="content3">包含了所有个人账号信息</div>

    </lp-accordion>
</template>

<script>
    export default {
        data() {
            return {
                index: 0
            }
        }
    }
</script>
```