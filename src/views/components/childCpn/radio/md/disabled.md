>将lp-radio组件的 `disabled` 属性设置为 `true` 即可实现**禁用**效果 , `disabled` 默认为 `false`


```html
<template>
    <div>
        <div class="show-disabled-first">
            <lp-radio v-model="first" val="0" disabled/>
            <lp-radio v-model="first" val="1" disabled/>
            <lp-radio v-model="first" val="2" disabled/>
        </div>

        <div class="show-disabled-second">
            <lp-radio v-model="second" val="3" type="border" disabled/>
            <lp-radio v-model="second" val="4" type="border" disabled/>
            <lp-radio v-model="second" val="5" type="border" disabled/>
        </div>
    </div>
    
</template>

<script>
    export default {
        data() {
            return {
                first: '0',
                second: '5'
            }
        }
    }
</script>
```
