>lp-input提供了三个内部事件 , 即 `focus` 、`blur` 、`change` , 它们和原生的事件作用一样 , 其中 , `change` 事件会传回输入框内改变后的值作为回调参数

```html
<template>
    <div class="show-events">

        <lp-input v-model="events" 
                    @focus="inputFocus" 
                    @blur="inputBlur"
                    placeholder="focus事件和blur事件"/>
        <div v-text="show_txt1"/>

        <lp-input v-model="change" 
                    @change="inputChange"
                    placeholder="change事件"/>
        <div v-text="show_txt2"/>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                events: '',
                change: '',
                show_txt1: '当前暂未触发focus事件或blur事件',
                show_txt2: '当前暂未触发change事件'
            }   
        },
        methods: {
            inputFocus() {
                this.show_txt1 = '获得焦点，触发focus事件'
            },
            inputBlur() {
                this.show_txt1 = '失去焦点，触发blur事件'
            },
            inputChange(value) {
                this.show_txt2 = `输入框内容改变，触发change事件，输入框内容为：${value}`
            }
        }       
    }
</script>
```