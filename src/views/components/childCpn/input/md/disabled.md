>将属性 `disabled` 设置为 `true` 即可实现输入框禁用的效果

```html
<template>
    <lp-input v-model="hasDisabled" disabled/>
</template>

<script>
    export default {
        data() {
            return {
                hasDisabled: '在禁用前输入的内容'
            }   
        }       
    }
</script>
```