>lp-rate组件内部提供了 `change` 方法 , 当外部点击了评论图标时触发 , 并传回点击的图标索引值参数

```html
<template>

    <lp-rate v-model="handleValue" @change="rateChange" icon="face" textType="grade"/>

</template>

<script>
    export default {
        data() {
            return {
               handleValue: -1
            }
        },
        methods: {
            handleValue(newValue) {
                alert(`评论成功，您点击的是第${newValue + 1}个图标`)
            }
        }
    }
</script>
```