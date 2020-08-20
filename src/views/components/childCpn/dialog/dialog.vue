<template>
    <div class="lp-dialog-box">
        <div class="title">lp-dialog 组件</div>

        <div class="child-title">基本用法</div>
        <div class="introduction">介绍了lp-dialog组件的基本用法</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <div class="show-base">
                    <lp-button style="width: 100px"
                               type="primary" @click="btnClick">
                        弹出对话框
                    </lp-button>
                </div>
            </div>
            <base-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

        <div class="child-title">对话框参数</div>
        <div class="introduction">介绍了调用lp-dialog组件的方法所提供的参数选择</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
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
            </div>
            <special-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

    </div>
</template>

<script>
    import cpnCase from "../cpnCase";
    import baseMd from './md/base.md';
    import specialMd from './md/special.md';
    export default {
        name: "Dialog",
        components: {
            cpnCase,
            baseMd,
            specialMd
        },
        methods: {
            btnClick() {
                this.$confirm()
                .then(() => {
                    alert('确认')
                })
                .catch(() => {
                    alert('取消')
                })
            },
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

<style scoped>
    .lp-dialog-box{
        height: 100%;
        padding-bottom: 50px;
    }
    .show-base, .show-userDefined{
        margin: 15px 0 0 20px;
    }
    .show-userDefined button{
        margin-right: 30px;
    }
</style>