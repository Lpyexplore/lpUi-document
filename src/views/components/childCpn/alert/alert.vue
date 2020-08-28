<template>
    <div class="lp-alert-box">
        <div class="title">lp-alert 组件</div>

        <div class="child-title">基本用法</div>
        <div class="introduction">介绍了lp-alert组件的基本用法</div>
        <cpn-case class="cpn-case" :lines="35">
            <div slot="cpn" class="groups">
                <div class="show-alert">
                    <lp-button @click="showAlert('info')">info提醒框</lp-button>
                    <lp-button type="success" @click="showAlert('success')">success提醒框</lp-button>
                    <lp-button type="danger" @click="showAlert('err')">err提醒框</lp-button>
                    <lp-button type="warning" @click="showAlert('warning')">warning提醒框</lp-button>
                </div>
            </div>
            <base-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>


    </div>
</template>

<script>
    import cpnCase from "../cpnCase";
    import baseMd from './md/base.md';
    export default {
        name: "Alert",
        components: {
            cpnCase,
            baseMd
        },
        methods: {
            showAlert(type) {
                this.$alert({
                    type,
                    lastTime: 2000,
                    content: `这是一条${type}消息提醒`
                })
            }
        }
    }
</script>

<style scoped>
    .lp-alert-box{
        height: 100%;
        padding-bottom: 50px;
    }
    .groups button{
        margin-left: 20px;
        width: 120px;
    }
    .show-alert{
        margin-top: 15px;
    }
</style>