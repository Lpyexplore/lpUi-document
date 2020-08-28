>lp-input组件可通过设置属性 `size` 即可使用三种不同高度的输入框 , 可选值有 `big` 、`middle(默认)` 、`small`

>若想要设置输入框的宽度 , 可以直接给 `lp-input` 组件设置宽度样式即可

```html
<template>
    <div class="show-size">
        <lp-input v-model="bigInput" placeholder="我是大尺寸输入框" size="big"/>
        <lp-input v-model="middleInput" placeholder="我是中尺寸输入框" size="middle"/>
        <lp-input v-model="smallInput" placeholder="我是小尺寸输入框" size="small"/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                bigInput: '',
                middleInput: '',
                smallInput: ''
            }   
        }       
    }
</script>
```