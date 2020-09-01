<template>
    <div class="lp-verification-box">
        <div class="title">lp-verification 组件</div>

        <div class="child-title">基本用法</div>
        <div class="introduction">介绍了 lp-verification 组件的基本用法</div>
        <cpn-case class="cpn-case" @mouseenter.native="mouseenter('sliding')" :lines="40">
            <div slot="cpn" class="groups">
                <div class="show-base">
                    <lp-verification v-model="isFull" ref="sliding"/>
                    <lp-button @click="submit(isFull)" type="primary" class="button">提交验证</lp-button>
                </div>
            </div>
            <baseMd slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

        <div class="child-title">动画 & 事件</div>
        <div class="introduction">介绍了 lp-verification 组件加载动画以及loading事件的用法</div>
        <cpn-case class="cpn-case" :lines="65">
            <div slot="cpn" class="groups">
                <div class="show-animation-err" @mouseenter="mouseenter('animation_err')">
                    <div class="show-txt">失败动画</div>
                    <lp-verification v-model="err" animation @loading="loadingErr" ref="animation_err"/>
                    <lp-button @click="submit(err)" type="danger" class="button">提交验证</lp-button>
                </div>      
                <div class="show-animation-success" @mouseenter="mouseenter('animation_success')">
                    <div class="show-txt">成功动画</div>
                    <lp-verification v-model="success" animation @loading="loadingSuccess" ref="animation_success"/>
                    <lp-button @click="submit(success)" type="success" class="button">提交验证</lp-button>
                </div> 
            </div>
            <animation-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

        <div class="child-title">其它样式</div>
        <div class="introduction">介绍了 lp-verification 组件的另一种样式用法</div>
        <cpn-case class="cpn-case" @mouseenter.native="mouseenter('click')" :lines="40">
            <div slot="cpn" class="groups">
                <div class="show-click">
                    <lp-verification v-model="isClick" ref="click" type="click"/>
                    <lp-button @click="submit(isClick)" type="warning" class="button">提交验证</lp-button>
                </div>  
            </div>
            <type-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

        <div class="child-title">注意事项</div>
        <div class="introduction">同一个页面中出现多个lp-verification组件时需要注意的事项</div>
        <look-out-md class="markdown-body last" v-highlight/>
    </div>
</template>

<script>
    import cpnCase from "../cpnCase";
    import baseMd from './md/base.md';
    import animationMd from './md/animation.md';
    import typeMd from './md/type.md';
    import lookOutMd from './md/lookOut.md';
    export default {
        name: "sliding",
        components: {
            cpnCase,
            baseMd,
            animationMd,
            typeMd,
            lookOutMd
        },
        data() {
            return {
                isFull: false,
                err: false,
                success: false,
                isClick: false
            }
        },
        methods: {
            loadingErr(obj) {       
                setTimeout(() => {
                    obj.err()
                }, 2000)        
            },
            loadingSuccess(obj) {
                setTimeout(() => {
                    obj.success()
                }, 2000)
            },
            submit(value) {
                if(value) {
                    alert('验证成功')
                } else {
                    alert('验证失败')
                }
            },
            mouseenter(v) {
                this.$refs[v].init()
            }
        }
    }
</script>

<style scoped>
    .lp-verification-box{
        height: 100%;
        padding-bottom: 50px;
    }
    .show-base, .show-animation-err, .show-animation-success, .show-click{
        margin: 15px 0 0 20px;
    }
    .show-animation-err{
        border-bottom: 1px solid #e1e1e1;
        padding-bottom: 20px;
        width: 90%;
    }
    .show-txt{
        margin-bottom: 25px;
    }
    .button{
        margin-top: 30px;
    }
    .last{
        margin-bottom: 50px;
    }
</style>