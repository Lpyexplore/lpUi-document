>lp-alert组件被注册在全局的 `Vue` 中, 作为一个全局方法 `this.$alert`

>该方法接收一个对象作为参数, 对象中一共有三个可配置项, 即 `type` 、`lastTime` 、`content`, 分别表示**提醒框类型** 、**提醒框停留时间** 、**文字内容**

```html
<template>
    <lp-button @click="showAlert('info')">info提醒框</lp-button>
    <lp-button type="success" @click="showAlert('success')">success提醒框</lp-button>
    <lp-button type="danger" @click="showAlert('err')">err提醒框</lp-button>
    <lp-button type="warning" @click="showAlert('warning')">warning提醒框</lp-button>
</template>

<script>
    export default {
        methods: {
            showAlert(type) {
                this.$alert({
                    type,
                    lastTime: 2000,
                    content: `这是一条${type}消息提醒`
                })
            }
        }
    }
</script>
```