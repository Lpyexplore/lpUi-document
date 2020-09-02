> `this.$alert` 方法中也提供了另一个参数 `location` , 其表示的是提醒框从哪里弹出 , 该参数默认为 `top` , 开发者也可以设置成 `bottom` , 使提醒框从页面底部弹出


```html
<template>
    <lp-button type="primary" @click="showBottomAlert">底部提醒框</lp-button>
</template>

<script>
    export default {
        methods: {
            showBottomAlert() {
                this.$alert({
                    type: 'info',
                    lastTime: 3500,
                    content: '我是底部提醒框',
                    location: 'bottom'
                })
            }
        }
    }
</script>
```