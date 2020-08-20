<template>
    <div class="lp-button-box">
        <div class="title">lp-button 组件</div>
        <div class="child-title">基本用法</div>
        <div class="introduction">介绍了lp-button组件的基本用法</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <div class="show-normal">
                    <lp-button>default</lp-button>
                    <lp-button type="primary">primary</lp-button>
                    <lp-button type="success">success</lp-button>
                    <lp-button type="danger">danger</lp-button>
                    <lp-button type="warning">warning</lp-button>
                </div>
                <div class="show-plain">
                    <lp-button plain>default</lp-button>
                    <lp-button type="primary" plain>primary</lp-button>
                    <lp-button type="success" plain>success</lp-button>
                    <lp-button type="danger" plain>danger</lp-button>
                    <lp-button type="warning" plain>warning</lp-button>
                </div>
                <div class="show-round">
                    <lp-button round>default</lp-button>
                    <lp-button type="primary" round>primary</lp-button>
                    <lp-button type="success" round>success</lp-button>
                    <lp-button type="danger" round>danger</lp-button>
                    <lp-button type="warning" round>warning</lp-button>
                </div>
                <div class="show-circle">
                    <lp-button circle>
                        <i class="fa fa-address-book"></i>
                    </lp-button>

                    <lp-button type="success" circle>
                        <i class="fa fa-check"></i>
                    </lp-button>

                    <lp-button type="primary" circle>
                        <i class="fa fa-envelope-open-o"></i>
                    </lp-button>

                    <lp-button type="danger" circle>
                        <i class="fa fa-skyatlas"></i>
                    </lp-button>

                    <lp-button type="warning" circle>
                        <i class="fa  fa-bell-slash-o"></i>
                    </lp-button>
                </div>
            </div>
            <base-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

        <div class="child-title">加载</div>
        <div class="introduction">介绍了lp-button组件loading属性的用法</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <div class="show-loading">
                    <lp-button loading>default</lp-button>
                    <lp-button type="primary" loading>primary</lp-button>
                    <lp-button type="success" loading>success</lp-button>
                    <lp-button type="danger" loading>danger</lp-button>
                    <lp-button type="warning" loading>warning</lp-button>
                </div>

                <div class="show-loading">
                    <lp-button circle loading>
                        <i class="fa fa-address-book"></i>
                    </lp-button>

                    <lp-button type="success" circle loading>
                        <i class="fa fa-check"></i>
                    </lp-button>

                    <lp-button type="primary" circle loading>
                        <i class="fa fa-envelope-open-o"></i>
                    </lp-button>

                    <lp-button type="danger" circle loading>
                        <i class="fa fa-skyatlas"></i>
                    </lp-button>

                    <lp-button type="warning" circle loading>
                        <i class="fa  fa-bell-slash-o"></i>
                    </lp-button>
                </div>
            </div>
            <loading-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

        <div class="child-title">禁用</div>
        <div class="introduction">介绍了lp-button组件disabled属性的用法</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <div class="show-disabled">
                    <div class="show-plain">
                        <lp-button plain disabled>default</lp-button>
                        <lp-button type="primary" plain disabled>primary</lp-button>
                        <lp-button type="success" plain disabled>success</lp-button>
                        <lp-button type="danger" plain disabled>danger</lp-button>
                        <lp-button type="warning" plain disabled>warning</lp-button>
                    </div>
                    <div class="show-round">
                        <lp-button round disabled>default</lp-button>
                        <lp-button type="primary" round disabled>primary</lp-button>
                        <lp-button type="success" round disabled>success</lp-button>
                        <lp-button type="danger" round disabled>danger</lp-button>
                        <lp-button type="warning" round disabled>warning</lp-button>
                    </div>
                </div>
            </div>
            <disabled-md slot="code" class="markdown-body" v-highlight></disabled-md>
        </cpn-case>

        <div class="child-title">事件</div>
        <div class="introduction">介绍了lp-button组件的常见事件</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <div class="show-click">
                    <lp-button type="warning" @click="btnClick($event, 'warning')">warning</lp-button>
                    <lp-button type="success" @click="btnClick($event, 'success')">success</lp-button>
                </div>
            </div>

            <events-md slot="code" class="markdown-body" v-highlight/>

        </cpn-case>

    </div>
</template>

<script>
    import cpnCase from "../cpnCase";
    import baseMd from './md/base.md';
    import loadingMd from './md/loading.md';
    import disabledMd from './md/disabled.md';
    import eventsMd from './md/events.md';

    export default {
        name: "Button",
        components: {
            cpnCase,
            baseMd,
            loadingMd,
            disabledMd,
            eventsMd
        },
        methods: {
            btnClick(e, type) {
                console.log(e)
                alert(type + '按钮被点击')
            }
        }
    }
</script>

<style scoped>
    .lp-button-box{
        height: 100%;
        padding-bottom: 50px;
    }
    .groups button{
        float: left;
        margin-left: 20px;
    }
    .show-normal, .show-plain, .show-round, .show-circle, .show-loading, .show-disabled, .show-click{
        display: inline-block;
        width: 100%;
        margin-bottom: 20px;
    }
    .show-disabled, .show-click{
        margin-bottom: 0;
    }
    .groups{
        margin: 20px 0 0 0;
    }
</style>