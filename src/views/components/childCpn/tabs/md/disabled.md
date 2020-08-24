>lp-tabs组件提供了 `disabled` 属性 , 用于禁用某个 `tab` , 该属性的值为 `Array类型` , 数组中的元素表示需要被禁用的 `tab` 的索引值

```html
<template>
    <lp-tabs type="card" :titles="titles" v-model="each" :disabled="[0, 2]">
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
                each: 0,
                titles: ['首页', '推荐', '我', '联系我', '合作与交流']
            }       
        }
    }
</script>
```