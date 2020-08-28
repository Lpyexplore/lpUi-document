>只需对lp-input组件使用 `v-model` 绑定, 即可实现数据的双向绑定

>同时将属性 `focus` 设置成 `true` , 即可实现进入页面自动聚焦到此输入框的效果

```html
<template>
    <lp-input v-model="input" placeholder="请输入内容" focus/>
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