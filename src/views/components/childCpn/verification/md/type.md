>lp-verification组件还提供了另一种样式的验证组件 , 只需将属性 `type` 设置成 `click` 即可 。属性 `type` 的默认值为 `sliding`
```html
<template>
    <div class="show-click">
        <lp-verification v-model="isClick" type="click"/>
        <lp-button @click="submit(isClick)" type="warning">提交验证</lp-button>
    </div> 
</template>

<script>
    export default {
        data() {
            return {
               isClick: false
            }
        },
        methods: {
            submit(value) {
                if(value) {
                    alert('验证成功')
                } else {
                    alert('验证失败')
                }
            }
        }       
    }
</script>
```