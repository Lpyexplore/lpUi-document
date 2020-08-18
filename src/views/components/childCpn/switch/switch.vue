<template>
    <div class="lp-switch-box">
        <div class="title">lp-switch 组件</div>
        <div class="child-title">基本用法</div>
        <div class="introduction">介绍了lp-switch组件的基本用法</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <div class="show-base">
                    <lp-switch/>
                    <lp-switch open/>
                </div>
            </div>
            <base-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

        <div class="child-title">开关颜色</div>
        <div class="introduction">介绍了lp-switch组件的颜色自定义用法</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <div class="show-color">
                    <lp-switch/>
                    <lp-switch close_color="green" open_color="blue"/>
                </div>
            </div>
            <color-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

        <div class="child-title">禁用</div>
        <div class="introduction">介绍了lp-switch组件disabled属性的用法</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <div class="show-disabled">
                    <lp-switch disabled/>
                    <lp-switch open disabled/>
                </div>
            </div>
            <disabled-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

        <div class="child-title">事件</div>
        <div class="introduction">介绍了lp-switch组件change事件的用法</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <div class="show-events">
                    <lp-switch @change="switchChange"/>
                    <div v-html="status"/>
                </div>
            </div>
            <events-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

    </div>
</template>

<script>
    import cpnCase from "../cpnCase";
    import baseMd from './md/base.md';
    import colorMd from './md/color.md';
    import disabledMd from './md/disabled.md';
    import eventsMd from './md/events.md';

    export default {
        name: "switches",
        components: {
            cpnCase,
            baseMd,
            colorMd,
            disabledMd,
            eventsMd,

        },
        data() {
            return {
                status: '当前开关状态为：关闭'
            }
        },
        methods: {
            switchChange(value) {
                if(value) {
                    this.status = "当前开关状态为：打开"
                } else {
                    this.status = "当前开关状态为：关闭"
                }
            }
        }
    }
</script>

<style scoped>
    .lp-switch-box{
        height: 100%;
        padding-bottom: 50px;
    }
    .show-base, .show-color, .show-disabled, .show-events{
        display: inline-block;
        width: 100%;
        margin-top: 15px;
        margin-left: 10px;
    }
    .switch_box{
        margin-right: 20px;
    }
</style>