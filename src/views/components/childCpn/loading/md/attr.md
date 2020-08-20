>lp-loading组件内部提供了两种加载动画样式 , 即 `bubble(默认)` 和 `line` , 我们只需给 `this.$loading` 方法传入一个对象参数 `obj` ， 然后设置 `obj.type` 的值即可

>我们还可以在加载动画的下方自行添加文本信息 , 只需设置 `obj.content` 的值即可

```html
<template>
    <div class="show-attr">
        <lp-button type="danger" @click="loadingStyle('bubble')">加载样式1</lp-button>
        <lp-button type="warning" @click="loadingStyle('line')">加载样式2</lp-button>
    </div>
</template>

<script>
    export default {
        methods: {
            loadingStyle(type) {
                // 调用lp-loading组件
                let ret = this.$loading({
                    type,
                    content: '加载动画将在3s后关闭'
                })

                // 3s后关闭加载动画
                setTimeout(() => {
                    ret.close()
                }, 3000)
            }
        }
    }
</script>
```
