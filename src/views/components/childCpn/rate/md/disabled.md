>lp-rate组件提供了 `disabled` 属性用于使组件变为**只读状态** , 即当 `disabled` 为 `true` 时 , 组件为只读状态

```html
<template>

    <lp-rate v-model="onlyRead" textType="number" disabled/>

</template>

<script>
    export default {
        data() {
            return {
               onlyRead: 2
            }
        }
    }
</script>
```
