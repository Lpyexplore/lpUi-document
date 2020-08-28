<template>
    <div class="lp-tabs-box">
        <div class="title">lp-tabs 组件</div>

        <div class="child-title">基本用法</div>
        <div class="introduction">介绍了lp-tabs组件的基本用法</div>
        <cpn-case class="cpn-case" :lines="40">
            <div slot="cpn" class="groups">
                <div class="show-base">
                    <lp-tabs class="lp-tabs-class" 
                            :titles="['首页', '推荐', '我', '联系我', '合作与交流']"
                            v-model="which_title">
                        <div slot="content0">首页内容</div>
                        <div slot="content1">推荐内容</div>
                        <div slot="content2">我的内容</div>
                        <div slot="content3">联系我内容</div>
                        <div slot="content4">合作与交流内容</div>
                    </lp-tabs>
                </div>
            </div>
            <base-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

        <div class="child-title">其他样式</div>
        <div class="introduction">介绍了lp-tabs组件的其它样式用法</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <div class="show-more-type">
                    <lp-tabs type="card" 
                             class="lp-tabs-class" 
                             v-model="card_tab" 
                             :titles="['首页', '推荐', '我', '联系我', '合作与交流']">

                        <div slot="content0">首页内容</div>
                        <div slot="content1">推荐内容</div>
                        <div slot="content2">我的内容</div>
                        <div slot="content3">联系我内容</div>
                        <div slot="content4">合作与交流内容</div>
                        
                    </lp-tabs>
                </div>
                
            </div>
            <show-type-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

        <div class="child-title">禁用</div>
        <div class="introduction">介绍了lp-tabs组件disabled属性用法</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <div class="show-disabled">
                    <lp-tabs type="card" 
                             v-model="each" 
                             :disabled="[0, 2]">
                        <div slot="content0">首页内容</div>
                        <div slot="content1">推荐内容</div>
                        <div slot="content2">我的内容</div>
                        <div slot="content3">联系我内容</div>
                        <div slot="content4">合作与交流内容</div>
                    </lp-tabs>
                </div>
            </div>
            <disabled-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

        <div class="child-title">事件</div>
        <div class="introduction">介绍了lp-tabs组件click事件的用法</div>
        <cpn-case class="cpn-case" :lines="40">
            <div slot="cpn" class="groups">
                <div class="show-events">
                    <lp-tabs class="lp-tabs-class" 
                             v-model="event_tab" 
                             :titles="['首页', '推荐', '我', '联系我', '合作与交流']"
                             @click="tabClick">
                        <div slot="content0">首页内容</div>
                        <div slot="content1">推荐内容</div>
                        <div slot="content2">我的内容</div>
                        <div slot="content3">联系我内容</div>
                        <div slot="content4">合作与交流内容</div>
                    </lp-tabs>
                </div>
            </div>
            <events-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

    </div>
</template>

<script>
    import cpnCase from '../cpnCase';
    import baseMd from './md/base.md';
    import showTypeMd from './md/moreType.md';
    import disabledMd from './md/disabled.md';
    import eventsMd from './md/events.md';
    export default {
        name: "tabs",
        components: {
            cpnCase,
            baseMd,
            showTypeMd,
            disabledMd,
            eventsMd    
        },
        data () {
            return {
                which_title: 0,
                card_tab: 1,
                event_tab: 2,
                each: 0
            }
        },
        methods: {
            tabClick(i) {
                alert(`第${i + 1}个tab被点击`)
            }
        }
    }
</script>

<style scoped>
    .lp-tabs-box{
        height: 100%;
        padding-bottom: 50px;
    }
    .lp-tabs-class{
        width: 95%;
    }
    .show-base, .show-more-type, .show-disabled{
        margin: 10px 0 10px 15px;
    }
</style>