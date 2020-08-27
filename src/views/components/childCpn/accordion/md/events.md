>lp-accordion组件提供了 `change` 事件 , 当用户对面板进行点击时触发 , 回调参数有 `被点击面板索引` 、`面板是否打开`

```html
<template>
    <div class="show-events">
        <lp-accordion v-model="event" @change="cpnChange"/>
        <div class="show-history">面板操作记录：
            <span v-text="history"/>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                event: -1,
                history: null
            }
        },
        methods: {
            cpnChange(i, v) {
                this.history = `面板${i}被${v? '打开': '关闭'}`
            }
        }
    }
</script>
```