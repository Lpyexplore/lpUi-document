>将lp-input组件的 `type` 属性设置为 `password` 即可使用密码框

```html
<template>
    <lp-input type="password" v-model="input" placeholder="请输入密码"/>
    <div>密码框输入的值为:
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