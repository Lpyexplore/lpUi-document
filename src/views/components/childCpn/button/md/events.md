>lp-button组件自带事件 `click`, 并传出事件对象

```html
<template>
    <lp-button type="warning" @click="btnClick($event, 'warning')">warning</lp-button>
    <lp-button type="success" @click="btnClick($event, 'success')">success</lp-button>
</template>

<script>
    export default {
        methods: {
            btnClick(e, type) {
                console.log(e)
                alert(type + '按钮被点击')
            }
        }
    }
</script>
```