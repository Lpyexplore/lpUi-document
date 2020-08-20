>lp-loading组件被注册在全局 `Vue` 的原型上 , 只需调用 `this.$loading` 即可使用该组件

>同时 , `this.$loading` 返回一个对象 `obj` , `obj` 里有一个 `close` 方法 , 调用该方法即可关闭加载动画

```html
<template>
    <div class="show-loading">
        <lp-button type="primary" @click="showLoading">加载动画</lp-button>
    </div>
</template>

<script>
    export default {
        methods: {
            showLoading() {
                // 调用lp-loading组件
                let ret = this.$loading()

                // 3s后关闭加载动画
                setTimeout(() => {
                    ret.close()
                }, 3000)
            }
        }
    }
</script>
```