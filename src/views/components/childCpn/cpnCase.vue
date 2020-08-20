<template>
    <div class="cpn-case-box">

        <div class="cpn-show">
            <slot name="cpn">请展示组件</slot>
        </div>

        <div class="cpn-code" :style="{'max-height': isShow? '1200px': '0'}">
            <slot name="code">请放入代码</slot>
        </div>

        <div class="code-show-btn"
             @click="btnClick">

            <i class="fa fa-chevron-down icon"
               :style="{'transform': isShow? 'rotate(180deg)': 'rotate(0deg)'}"/>
            <span class="txt">展示代码</span>
        </div>

    </div>
</template>

<script>
    export default {
        name: "cpnCase",
        data() {
            return {
                isShow: false,

            }
        },
        methods: {
            btnClick() {
                this.isShow = !this.isShow
            }
        },
    }
</script>

<style scoped>
    @import "../../../assets/css/cpnCase/cpnCase.css";
    .cpn-case-box{
        width: 100%;
        box-sizing: border-box;
        border-radius: 5px;
        border: 1px solid #e1e1e1;
        display: inline-block;
    }
    .cpn-case-box:hover{
        box-shadow: 0 0 5px 5px rgba(225, 225, 225, .3);
    }
    .cpn-show{
        display: inline-block;
        width: 100%;
        margin-bottom: 10px;
    }
    .cpn-code{
        display: block;
        width: 100%;
        transition: max-height .3s linear;
        overflow: hidden;
    }
    .code-show-btn{
        height: 44px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border-top: 1px solid #e1e1e1;
        position: relative;
    }
    .code-show-btn .txt{
        margin-left: 10px;
    }
    .code-show-btn .txt, .code-show-btn .icon{
        color: #d6d2d2;
        transition: all 100ms linear;
    }
    .code-show-btn:hover{
        background: rgba(200, 199, 199, .1);
    }
    .code-show-btn:hover > .icon, .code-show-btn:hover > .txt{
        color: #0baa0b;
    }

</style>