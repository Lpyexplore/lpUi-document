<template>
    <div class="lp-accordion-box">
        <div class="title">lp-accordion 组件</div>

        <div class="child-title">基本用法</div>
        <div class="introduction">介绍了lp-accordion组件的基本用法</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <div class="show-base">
                    <lp-accordion v-model="index" :number="4">
                        <span slot="title0">首页</span>
                        <div slot="content0">新款爆品上新大促</div>

                        <span slot="title1">分类</span>
                        <div slot="content1">更多好物尽在这里</div>

                        <span slot="title2">购物车</span>
                        <div slot="content2">选好物品请在此处结账</div>

                        <span slot="title3">我的</span>
                        <div slot="content3">包含了所有个人账号信息</div>

                    </lp-accordion>
                </div>
            </div>
            <base-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

        <div class="child-title">折叠面板</div>
        <div class="introduction">介绍了lp-accordion组件变为折叠面板的用法</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <div class="show-folding">
                    <lp-accordion v-model="only" :number="5" :accordion="false">
                        <span slot="title0">首页</span>
                        <div slot="content0">新款爆品上新大促</div>

                        <span slot="title1">分类</span>
                        <div slot="content1">更多好物尽在这里</div>

                        <span slot="title2">讨论</span>
                        <div slot="content2">用户们都在这里讨论咨询</div>

                        <span slot="title3">购物车</span>
                        <div slot="content3">选好物品请在此处结账</div>

                        <span slot="title4">我的</span>
                        <div slot="content4">包含了所有个人账号信息</div>
                    </lp-accordion>
                </div>
            </div>
            <folding-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

        <div class="child-title">事件</div>
        <div class="introduction">介绍了lp-accordion组件的change事件用法</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <div class="show-events">
                    <lp-accordion v-model="event" @change="cpnChange"/>
                    <div class="show-history">面板操作记录：{{ history }}</div>
                </div>
            </div>
            <events-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>
        
    </div>
</template>

<script>
    import cpnCase from "../cpnCase";
    import baseMd from './md/base.md';
    import foldingMd from './md/folding.md';
    import eventsMd from './md/events.md';
    export default {
        name: "accordion",
        components: {
            cpnCase,
            baseMd,
            foldingMd,
            eventsMd
        },
        data () {
            return {
                index: 0,
                only: [1, 2],
                event: -1,
                history: null
            }
        },
        methods: {
            cpnChange(i, v) {
                this.history = `面板${i}被${v? '打开': '关闭'}`
            }
        }
    }
</script>

<style scoped>
    .lp-accordion-box{
        height: 100%;
        padding-bottom: 50px;
    }
    .groups{
        display: flex;
        justify-content: center;
    }
    .show-base, .show-folding, .show-events{
        width: 90%;
        margin: 10px 0;
    }
    .show-history{
        margin-top: 20px;
        color: red;
    }
</style>