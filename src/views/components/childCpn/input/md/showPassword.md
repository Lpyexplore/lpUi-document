>当lp-input组件的类型为 `password` 时 , 提供了显示密码功能 , 只需将属性 `showPassword` 设置为 `true` 就可以实现当输入框中有密码时展示显示密码按钮 , 点击即可查看密码 ; 当输入中没有密码时会自动隐藏显示密码按钮

```html
<template>
    <lp-input type="password" 
              v-model="show"
              placeholder="输入密码，即可出现显示密码按钮"
              showPassword/>
</template>

<script>
    export default {
        data() {
            return {
                show: ''
            }   
        }       
    }
</script>
```
