>lp-dialog组件被注册在全局的 `Vue` 上 , 通过 `this.$confirm()` 来调用

>同时 , 调用此方法会返回 `promise` 对象 , 因此可以将点击 `确认` 后的处理代码写在 `then()` 函数中 ; 点击 `取消` 或 右上角的 `x` 后的处理代码写在 `catch()` 函数中

```html
<template>
    <div class="show-base">
        <lp-button style="width: 100px"
                   type="primary" 
                   @click="btnClick">
            弹出对话框
        </lp-button>
    </div>
</template>

<script>
    export default {
        methods: {
            btnClick() {
                this.$confirm()
                .then(() => {
                    alert('确认')
                })
                .catch(() => {
                    alert('取消')
                })
            }
        }
    }
</script>
```