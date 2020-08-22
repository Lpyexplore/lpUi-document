<template>
    <div class="lp-rate-box">
        <div class="title">lp-rate 组件</div>

        <div class="child-title">基本用法</div>
        <div class="introduction">介绍了lp-rate组件的基本用法</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <div class="show-base">
                    <lp-rate v-model="rate"/>
                </div>
            </div>
            <base-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

        <div class="child-title">文本类型</div>
        <div class="introduction">介绍了lp-rate组件支持文本显示的用法</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <div class="show-txt">
                    <lp-rate v-model="test1" textType="number"/>
                    <lp-rate v-model="test2" textType="grade"/>
                    <lp-rate v-model="test3" :textType="['不及格', '及格', '良-', '良好', '优秀']"/>
                </div>
            </div>
            <show-text-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

        <div class="child-title">图标数</div>
        <div class="introduction">介绍了lp-rate组件 iconNumber 属性的使用</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <div class="show-number">
                    <lp-rate v-model="number1" :iconNumber="2"/>
                    <lp-rate v-model="number2" :iconNumber="7"/>
                </div>
            </div>
            <icon-number-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

        <div class="child-title">图标颜色</div>
        <div class="introduction">介绍了lp-rate组件图标固定颜色和渐进式颜色的使用</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <div class="show-setColor1">
                    <div>固定颜色</div>
                    <lp-rate v-model="staticColor" color="#086cd5"/>

                </div>
                <div class="show-setColor2">
                    <div>渐进式颜色</div>
                    <lp-rate v-model="moveColor" :color="['#e30f0f', '#ef9b07', '#097d09']"/>
                </div>
            </div>
            <show-color-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

        <div class="child-title">其它样式</div>
        <div class="introduction">介绍了lp-rate组件其它样式的用法</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <div class="show-types">
                    <lp-rate v-model="type1" icon="face"/>
                </div>
                <div class="show-types">
                    <lp-rate v-model="type2" icon="face" :color="['#d51212', '#fd8500', '#0cd914']"/>
                </div>
            </div>
            <show-type-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

        <div class="child-title">只读</div>
        <div class="introduction">介绍了将lp-rate组件设置为只读状态的方法</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <div class="show-disabled">
                    <lp-rate v-model="onlyRead" textType="number" disabled/>
                </div>
            </div>
            <disabled-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

        <div class="child-title">事件</div>
        <div class="introduction">介绍了将lp-rate组件内置的change事件的用法</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <lp-rate v-model="handleValue" @change="rateChange" icon="face" textType="grade"/>
            </div>
            <events-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

    </div>
</template>

<script>
    import cpnCase from "../cpnCase";
    import baseMd from './md/base.md';
    import showTextMd from './md/showTxt.md';
    import iconNumberMd from './md/iconNumber.md';
    import showColorMd from './md/showColor.md';
    import showTypeMd from './md/showType.md';
    import disabledMd from './md/disabled.md';
    import eventsMd from './md/events.md';
    export default {
        name: "Rate",
        components: {
            cpnCase,
            baseMd,
            showTextMd,
            iconNumberMd,
            showColorMd,
            showTypeMd,
            disabledMd,
            eventsMd

        },
        data() {
            return {
                rate: 3,
                test1: -1,
                test2: 0,
                test3: 4,
                number1: 0,
                number2: 7,
                staticColor: 2,
                moveColor: 0,
                type1: 3,
                type2: 0,
                onlyRead: 2,
                handleValue: -1
            }
        },
        methods: {
            rateChange(newValue) {
                alert(`评论成功，您点击的是第${newValue + 1}个图标`)
            }
        }

    }
</script>

<style scoped>
    .lp-rate-box{
        height: 100%;
        padding-bottom: 50px;
    }
    .show-base{
        margin-top: 10px;
    }
    .show-setColor1{
        width: 95%;
        padding-bottom: 20px;
    }
    .show-setColor2{
        width: 95%;
        border-top: 1px solid #eee;
        padding-top: 20px;
    }
</style>