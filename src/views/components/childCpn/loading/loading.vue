<template>
    <div class="lp-loading-box">
        <div class="title">lp-loading 组件</div>

        <div class="child-title">基本用法</div>
        <div class="introduction">介绍了lp-loading组件的基本用法</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <div class="show-loading">
                    <lp-button type="primary" @click="showLoading">加载动画</lp-button>
                </div>
            </div>
            <base-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

        <div class="child-title">参数设置</div>
        <div class="introduction">介绍了lp-loading组件参数的用法</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <div class="show-attr">
                    <lp-button type="danger" @click="loadingStyle('bubble')">加载样式1</lp-button>
                    <lp-button type="warning" @click="loadingStyle('line')">加载样式2</lp-button>
                </div>
            </div>
            <attr-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>


    </div>
</template>

<script>
    import cpnCase from "../cpnCase";
    import baseMd from './md/base.md';
    import attrMd from './md/attr.md';
    export default {
        name: "loading",
        components: {
            cpnCase,
            baseMd,
            attrMd
        },
        methods: {
            showLoading() {
                // 调用lp-loading组件
                let ret = this.$loading()

                // 3s后关闭加载动画
                setTimeout(() => {
                    ret.close()
                }, 3000)
            },
            loadingStyle(type) {
                // 调用lp-loading组件
                let ret = this.$loading({
                    type,
                    content: '加载动画将在3s后关闭'
                })

                // 3s后关闭加载动画
                setTimeout(() => {
                    ret.close()
                }, 3000)
            }
        }
    }
</script>

<style scoped>
    .lp-loading-box{
        height: 100%;
        padding-bottom: 50px;
    }
    .show-loading, .show-attr{
        margin: 15px 0 0 20px;
    }
    .show-loading button, .show-attr button{
        margin-right: 30px;
    }
</style>