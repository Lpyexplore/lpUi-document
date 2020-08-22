>lp-rate组件的 `color` 属性提供了两种颜色类型的设置方式 , 分别为 **固定颜色** 和 **渐进式颜色** , 前者是所有图标为统一颜色 ; 后者是会随着选中图标的增多而改变颜色。

>`color` 属性支持 `String` 类型和 `Array` 类型 , 前者是用于设定固定颜色的 , 因此只需要传入一个颜色代码即可 ; 后者是用于设定渐进式颜色的 , 因此需要传入一个数组储存多个颜色代码

```html
<template>

    <div class="show-setColor">
       
        <lp-rate v-model="staticColor" color="#086cd5"/>
        <lp-rate v-model="moveColor" :color="['#e30f0f', '#ef9b07', '#097d09']"/>

    </div>
    
</template>

<script>
    export default {
        data() {
            return {
                staticColor: 2,
                moveColor: 0
            }
        }
    }
</script>
```