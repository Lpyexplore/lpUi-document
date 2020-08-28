>当lp-input组件的类型为 `text` 时 , 提供了清空输入框功能 , 只需将属性 `clearable` 设置为 `true` 就可以实现当输入框中有文字时展示清除按钮 , 点击即可清空输入框 ; 当输入中没有文字时会自动隐藏清除按钮

```html
<template>
    <lp-input v-model="clear" placeholder="输入内容，即可出现清除按钮" clearable/>
</template>

<script>
    export default {
        data() {
            return {
                clear: ''
            }   
        }       
    }
</script>
```