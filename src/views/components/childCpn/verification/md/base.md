>只需要对 `lp-verification` 组件双向绑定一个值为 `Boolean` 类型的变量 , 用于判断其是否验证成功


```html
<template>
    <div class="show-base">
        <lp-verification v-model="isFull"/>
        <lp-button @click="submit" type="primary">提交验证</lp-button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
               isFull: false
            }
        },
        methods: {
            submit() {
                if(this.isFull) {
                    alert('验证成功')
                } else {
                    alert('验证失败')
                }
            }
        }
       
    }
</script>
```