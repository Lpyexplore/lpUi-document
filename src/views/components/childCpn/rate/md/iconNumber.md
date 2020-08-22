>lp-rate组件还可以通过设置 `iconNumber` 属性的值来决定评论图标的个数。`iconNumber` 为 `Number` 类型值 , 默认值为 5

```html
<template>

    <div class="show-number">
        <lp-rate v-model="number1" :iconNumber="2"/>
        <lp-rate v-model="number2" :iconNumber="7"/>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                number1: 0,
                number2: 7
            }
        }
    }
</script>
```