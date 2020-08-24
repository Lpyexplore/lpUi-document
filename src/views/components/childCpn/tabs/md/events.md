>当点击了某个 `tab` 时 , lp-tabs组件会触发 `click` 事件 , 并传出参数表示索引为几的 `tab` 被点击

```html
<template>
    <lp-tabs :titles="titles" v-model="event_tab" @click="tabClick">
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
                event_tab: 2,
                titles: ['首页', '推荐', '我', '联系我', '合作与交流']
            }       
        },
        methods: {
            tabClick(i) {
                alert(`第${n + 1}个tab被点击`)
            }
        }
    }
</script>
```