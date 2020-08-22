>lp-rate组件也支持对应的文字显示 , 只要设置 `textType` 属性的值即可 , 该值接收两种类型的值 , 分别是 `String` 、`Array` , 前者是用于直接引用组件内部自带的文字格式 , 可选项有 `number` 和 `grade` ; 后者是供开发者自行设定的文字格式

```html
<template>

    <div class="show-txt">
        <lp-rate v-model="test1" textType="number"/>
        <lp-rate v-model="test2" textType="grade"/>
        <lp-rate v-model="test3" :textType="['不及格', '及格', '良-', '良好', '优秀']"/>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                test1: -1,
                test2: 0,
                test3: 4
            }
        }
    }
</script>
```