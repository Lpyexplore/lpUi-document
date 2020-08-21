>使用lp-radio组件时 , 需要使用 `v-model` 指令对其绑定一个值 , 通过 `v-model` 绑定同一个变量的 `lp-radio` 组件为同一组选项 , 与此同时 , 当我们选中同一组的其中一个 `radio` 时 , 变量的值就会同步变为该 `radio` 的 `val`值

```html
<template>
    <div>
        <div class="show-base">
            <lp-radio v-model="select" val="0">默认选项0</lp-radio>
            <lp-radio v-model="select" val="1">默认选项1</lp-radio>
            <lp-radio v-model="select" val="2">默认选项2</lp-radio>
            <span>当前选择的是：</span>
            <span v-text="select"/>
        </div>

        <div class="show-base">
            <lp-radio v-model="more" val="3">默认选项3</lp-radio>
            <lp-radio v-model="more" val="4">默认选项4</lp-radio>
            <lp-radio v-model="more" val="5">默认选项5</lp-radio>
            <span>当前选择的是：</span>
            <span v-text="more"/>
        </div>
    </div>
    
</template>

<script>
    export default {
        data() {
            return {
                select: '',
                more: ''
            }
        }
    }
</script>
```