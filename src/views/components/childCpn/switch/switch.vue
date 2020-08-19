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
                    <div v-text="status" class="show-txt"/>
                </div>
            </div>
            <events-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

        <div class="child-title">loading动画</div>
        <div class="introduction">介绍了lp-switch组件loading属性的用法</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <div class="show-loading">
                    <lp-switch loading @change="successLoading"/>
                    <div v-text="loading_status1" class="show-txt"/>
                    <div v-text="`开关将在${timer1}秒后成功打开`"
                         class="show-txt"
                         v-show="timer1 !== 4"/>
                </div>
                <div class="show-loading">
                    <lp-switch loading @change="errLoading"/>
                    <div v-text="loading_status2" class="show-txt"/>
                    <div v-text="`开关将在${timer2}秒后打开失败`"
                         class="show-txt" v-show="timer2 !== 4"/>
                </div>
            </div>
            <loading-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

    </div>
</template>

<script>
    import cpnCase from "../cpnCase";
    import baseMd from './md/base.md';
    import colorMd from './md/color.md';
    import disabledMd from './md/disabled.md';
    import eventsMd from './md/events.md';
    import loadingMd from './md/loading.md';

    export default {
        name: "switches",
        components: {
            cpnCase,
            baseMd,
            colorMd,
            disabledMd,
            eventsMd,
            loadingMd

        },
        data() {
            return {
                status: '当前开关状态为：关闭',
                loading_status1: '当前开关状态为：关闭',
                loading_status2: '当前开关状态为：关闭',
                timer1: 4,
                timer2: 4
            }
        },
        methods: {
            switchChange(value) {
                if(value === 'open') {
                    this.status = "当前开关状态为：打开"
                } else {
                    this.status = "当前开关状态为：关闭"
                }
            },
            successLoading(value, obj) {
                if(value === 'open') {
                    this.loading_status1 = "当前开关状态为：打开"
                }
                else if(value === 'loading') {
                    this.loading_status1 = "当前开关状态为：加载中"
                    let t1 = setInterval(() => {
                        if(this.timer1 !== 0) {
                            this.timer1 --
                        }
                        else {
                            obj.success()
                            this.loading_status1 = "当前开关状态为：打开"
                            this.timer1 = 4
                            clearInterval(t1)
                        }
                    }, 1000)
                }
                else {
                    this.loading_status1 = "当前开关状态为：关闭"
                }
            },
            errLoading(value, obj) {
                if(value === 'open') {
                    this.loading_status2 = "当前开关状态为：打开"
                }
                else if(value === 'loading') {
                    this.loading_status2 = "当前开关状态为：加载中"
                    let t2 = setInterval(() => {
                        if(this.timer2 !== 0) {
                            this.timer2 --
                        }
                        else {
                            obj.err()
                            this.loading_status2 = "当前开关状态为：关闭"
                            this.timer2 = 4
                            clearInterval(t2)
                        }
                    }, 1000)
                }
                else {
                    this.loading_status2 = "当前开关状态为：关闭"
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
    .show-loading{
        display: inline-block;
        margin: 15px 40px 0 10px;
    }
    .switch_box{
        margin-right: 20px;
    }
    .show-txt{
        margin-top: 10px;
    }
</style>