>我们只要使用 `v-model` 对 `lp-rate` 组件绑定一个 `Number`变量 , 即可实现值的双向绑定

```html
<template>

    <lp-rate v-model="rate"/>

</template>

<script>
    export default {
        data() {
            return {
                rate: 3
            }
        }
    }
</script>
```