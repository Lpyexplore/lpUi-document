>lp-radio组件也支持了原生 `radio` 自带的 `id` 、`name` 属性 , 只需同名设置即可


```html
<template>
    <div class="show-baseAttr">
        <lp-radio v-model="only" val="默认样式" id="first" name="default"/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                only: ''
            }
        }
    }
</script>
```