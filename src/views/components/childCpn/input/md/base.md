>只需对lp-input组件使用 `v-model` 绑定, 即可实现数据的双向绑定

```html
<template>
    <lp-input v-model="input" placeholder="请输入内容"/>
    <div>
        文本框输入的值为:
        <span v-html="input"/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                input: ''
            }   
        }       
    }
</script>
```