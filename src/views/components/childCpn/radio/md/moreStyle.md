>lp-radio组件内部提供了加边框的样式 , 只需将 `type` 属性的值设为 `border` 即可

```html
<template>
    <div class="show-otherStyle">
        <lp-radio v-model="other" type="border" val="one"/>
        <lp-radio v-model="other" type="border" val="two"/>
        <lp-radio v-model="other" type="border" val="three"/>
        <lp-radio v-model="other" type="border" val="four"/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                other: ''
            }
        }
    }
</script>
```