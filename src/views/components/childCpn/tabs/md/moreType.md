>lp-tabs组件还提供了另一种样式 , 可以通过设置属性 `type` 的值为 `card` 来实现

```html
<template>
    <lp-tabs type="card" :titles="titles" v-model="card_tab">
        <div slot="content0">首页内容</div>
        <div slot="content1">推荐内容</div>
        <div slot="content2">我的内容</div>
        <div slot="content3">联系我内容</div>
        <div slot="content4">合作与交流内容</div>
    </lp-tabs>
</template>

<script>
    export default {
        data() {
            return {
                card_tab: 1,
                titles: ['首页', '推荐', '我', '联系我', '合作与交流']
            }       
        }
    }
</script>
```