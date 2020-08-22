>lp-rate组件提供了另一种评论样式 , 设置 `icon` 属性的值为 `face` 即可。同时 , 这种样式跟渐进式颜色一起使用更配哦~

```html
<template>

    <div class="show-types">
        <lp-rate v-model="type1" icon="face"/>
        <lp-rate v-model="type2" icon="face" :color="['#d51212', '#fd8500', '#0cd914']"/>
    </div>

</template>

<script>
    export default {
        data() {
            return {
               type1: 3,
               type2: 0
            }
        }
    }
</script>
```

