>`this.$confirm()` 方法可传入一个对象参数 , 该对象中有三个属性可以定义对话框的内容 , 即 `title` 、`content` 、`center` , 分别表示 **对话框标题内容** 、**对话框主体内容**  、**主体内容是否居中**

>其中 , `center`属性支持传入 `html` 用以支持更丰富的交互内容

```html
<template>
    <div class="show-userDefined">

        <lp-button style="width: 100px" 
                   type="warning"
                   @click="specialDialog">
            自定义对话框
        </lp-button>

        <lp-button style="width: 100px"
                   type="success"
                   @click="funnyDialog">
            生动的对话框
        </lp-button>

    </div>
</template>

<script>
    export default {
        methods: {
            specialDialog() {
                this.$confirm({
                    title: '恭喜',
                    content: '您获得了百万大奖, 是否领取？',
                    center: true
                })
                .then(() => {
                    alert('领取成功')
                })
                .catch(() => {
                    alert('领取失败')
                })
            },
            funnyDialog() {
                this.$confirm({
                    title: '通知',
                    content: `<span>
                                <i class="fa fa-hand-o-right"
                                   style="color: red;"/>
                                <span style="color: #333">您已获取我司offer，是否即刻入职？</span>
                                <i class="fa fa-send" style="color: #0baa0b"/>
                              </span>`,
                    center: true
                })
                .then(() => {
                    alert('入职成功')
                })
                .catch(() => {
                    alert('很遗憾 , 入职失败')
                })
            }
        }
    }
</script>
```