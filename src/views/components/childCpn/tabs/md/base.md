>lp-tabs组件提供 `titles` 属性 , 传入一个 `Array` 类型的值用于设定分类标题。同时 , 需要用 `v-model` 为其绑定一个 `Number` 类型的值 , 表示当前点击的 `tab` 索引

>同时组件内部根据我们传入的 `titles` 属性值自动生成相同数量的内容插槽 , 插槽名为 `content + 索引值` , 分别表示相同索引 `tab` 的内容

```html
<template>
    <lp-tabs :titles="titles" v-model="which_title">
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
                which_title: 0,
                titles: ['首页', '推荐', '我', '联系我', '合作与交流']
            }       
        }
    }
</script>
```