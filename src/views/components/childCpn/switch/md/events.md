>点击lp-switch组件会触发 `change` 事件, 并传出回调参数 `value`

>当开关为开启状态时, `value` 为 `true`

>当开关为关闭状态时, `value` 为 `false`

```html
<template>
    <lp-switch @change="switchChange"/>
    <div v-html="status"/>
</template>

<script>
    export default {
        data() {
            return {
                status: '当前开关状态为：关闭'
            }       
        },       
        methods: {
            switchChange(value) {
                if(value) {
                    this.status = "当前开关状态为：打开"
                } else {
                    this.status = "当前开关状态为：关闭"
                }
            }
        }
    }
</script>
```