<template>
    <div class="lp-filp-box">
        <div class="title">lp-filp 组件</div>

        <div class="child-title">基本用法</div>
        <div class="introduction">介绍了lp-filp组件的基本用法</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <div class="show-base">
                    <lp-filp center>
                        <div slot="front">default</div>
                        <div slot="back">default</div>
                    </lp-filp>
                    <lp-filp frontBg="green" backBg="pink" center>
                        <div slot="front">green</div>
                        <div slot="back">pink</div>
                    </lp-filp>
                    <lp-filp frontBg="lavender" backBg="blue" center>
                        <div slot="front">lavender</div>
                        <div slot="back">blue</div>
                    </lp-filp>
                    <lp-filp frontBg="pink" backBg="green" center>
                        <div slot="front">pink</div>
                        <div slot="back">green</div>
                    </lp-filp>
                    <lp-filp frontBg="blue" backBg="lavender" center>
                        <div slot="front">blue</div>
                        <div slot="back">lavender</div>
                    </lp-filp>
                </div>
            </div>
            <base-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

        <div class="child-title">插槽</div>
        <div class="introduction">介绍了lp-filp组件的插槽用法</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <div class="show-slot">
                    <lp-filp class="example">
                        <div slot="front">
                            <div class="example-title">
                                Lpyexplore
                            </div>
                            <div class="txt">年龄：23</div>
                            <div class="txt">性别：男</div>
                            <div class="txt">学历：本科</div>
                            <div class="txt">爱好：羽毛球</div>
                        </div>
                        <div slot="back">
                            <div class="example-title">
                                个人编码社交网站
                            </div>
                            <div class="txt">
                                CSDN：
                                <a href="https://lpyexplore.blog.csdn.net/" target="_blank">访问链接</a>
                            </div>

                            <div class="txt">
                                GitHub：
                                <a href="https://github.com/Lpyexplore/" target="_blank">访问链接</a>
                            </div>

                            <div class="txt">
                                微信公众号：
                                <a href="https://weixin.sogou.com/weixin?type=1&s_from=input&query=Lpyexplore&ie=utf8&_sug_=n&_sug_type_=" target="_blank">访问链接</a>
                            </div>


                        </div>
                    </lp-filp>
                </div>
            </div>
            <slot-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

    </div>
</template>

<script>
    import cpnCase from "../cpnCase";
    import baseMd from './md/base.md';
    import slotMd from './md/slot.md';
    export default {
        name: "Filp",
        components: {
            cpnCase,
            baseMd,
            slotMd
        }
    }
</script>

<style scoped>
    .lp-filp-box{
        height: 100%;
        padding-bottom: 50px;
    }
    .show-base, .show-slot{
        margin: 15px 0 0 20px;
    }
    .show-base .card{
        margin: 0 25px 20px 0;
    }
    .example{
        width: 250px;
        height: 250px;
    }
    .example-title{
        height: 40px;
        line-height: 40px;
        font-weight: 600;
        text-indent: 20px;
        margin-bottom: 10px;
    }
    .example .txt{
        margin: 0 0 20px 20px;
    }
</style>