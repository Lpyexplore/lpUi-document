>按道理来说 , 同一个页面中不应该出现多个 `lp-verification` 组件 , 准确来说是不应该出现多个属性 `type` 为 `sliding` 的 `lp-verification` 组件 ，因为该组件内部的拖动事件是注册在了 `window` 上 , 因此只能有一个 `lp-verification` 组件生效

>那么迫不得已出现该情况时 , 可以给每个 `lp-verification` 组件绑定一个**原生的** `mouseenter` 事件 , 在该事件内部通过 `$refs` API 获取每个 `lp-verification` 组件 , 并调用组件内部的 `init()` 方法 。 这样就可以实现当我们鼠标移动到每个 `lp-verification` 组件上时 , 为其重新注册一遍拖拽事件

```html
<template>
    <div class="show-look-out">
        <lp-verification v-model="cpn1" ref="cpn1" @mouseenter="mouseenter('cpn1')"/>
        <lp-verification v-model="cpn2" ref="cpn2" @mouseenter="mouseenter('cpn2')"/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
               cpn1: false,
               cpn2: false
            }
        },
        methods: {
            mouseenter(v) {
                this.$refs[v].init()
            }
        }
       
    }
</script>
```