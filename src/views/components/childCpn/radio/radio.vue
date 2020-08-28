<template>
    <div class="lp-radio-box">
        <div class="title">lp-radio 组件</div>

        <div class="child-title">基本用法</div>
        <div class="introduction">介绍了lp-radio组件的基本用法</div>
        <cpn-case class="cpn-case" :lines="45">
            <div slot="cpn" class="groups">
                <div class="show-base">
                    <lp-radio v-model="select" val="0">默认选项0</lp-radio>
                    <lp-radio v-model="select" val="1">默认选项1</lp-radio>
                    <lp-radio v-model="select" val="2">默认选项2</lp-radio>
                    <span class="show">当前选择的是：</span>
                    <span v-text="select" class="value"/>
                </div>
                <div class="show-base">
                    <lp-radio v-model="more" val="3">默认选项3</lp-radio>
                    <lp-radio v-model="more" val="4">默认选项4</lp-radio>
                    <lp-radio v-model="more" val="5">默认选项5</lp-radio>
                    <span class="show">当前选择的是：</span>
                    <span v-text="more" class="value"/>
                </div>
            </div>
            <baseMd slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

        <div class="child-title">基本属性</div>
        <div class="introduction">介绍了lp-radio组件包含的基本属性</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <div class="show-baseAttr">
                    <lp-radio v-model="only" val="默认样式" id="first" name="default"/>
                    <div class="split">真实属性如下图，也可以用开发者工具自行查看</div>
                </div>
                <div class="split">
                    <img src="../../../../assets/img/showRadioMoreAttr.jpeg" title="实例图" class="img" >
                </div>
            </div>
            <more-attr-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

        <div class="child-title">更多样式</div>
        <div class="introduction">介绍了lp-radio组件其它样式的用法</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <div class="show-otherStyle">
                    <lp-radio v-model="other" type="border" val="one"/>
                    <lp-radio v-model="other" type="border" val="two"/>
                    <lp-radio v-model="other" type="border" val="three"/>
                    <lp-radio v-model="other" type="border" val="four"/>
                </div>
            </div>
            <more-style-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

        <div class="child-title">禁用</div>
        <div class="introduction">介绍了lp-radio组件disabled属性的用法</div>
        <cpn-case class="cpn-case" :lines="40">
            <div slot="cpn" class="groups">
                <div class="show-disabled-first">
                    <lp-radio v-model="first" val="0" disabled/>
                    <lp-radio v-model="first" val="1" disabled/>
                    <lp-radio v-model="first" val="2" disabled/>
                </div>
                <div class="show-disabled-second">
                    <lp-radio v-model="second" val="3" type="border" disabled/>
                    <lp-radio v-model="second" val="4" type="border" disabled/>
                    <lp-radio v-model="second" val="5" type="border" disabled/>
                </div>
            </div>
            <disabled-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

    </div>
</template>

<script>
    import cpnCase from "../cpnCase";
    import baseMd from './md/base.md';
    import moreAttrMd from './md/moreAttr.md';
    import moreStyleMd from './md/moreStyle.md';
    import disabledMd from './md/disabled.md';
    export default {
        name: "radio",
        components: {
            cpnCase,
            baseMd,
            moreAttrMd,
            moreStyleMd,
            disabledMd
        },
        data() {
            return {
                select: '',
                more: '',
                other: '',
                only: '',
                first: '0',
                second: '5'
            }
        }
    }
</script>

<style scoped>
    .lp-radio-box{
        height: 100%;
        padding-bottom: 50px;
    }
    .show-base, .show-otherStyle, .show-baseAttr, .show-disabled-first{
        margin: 20px 0 15px 15px;
    }
    .radio-group{
        margin-right: 30px;
    }
    .show{
        margin-left: 30px;
        color: #0baa0b;
    }
    .value{
        margin-left: 15px;
    }
    .img{
        width: 95%;
        height: 200px;
        cursor: pointer;
    }
    .split{
        margin-top: 30px;
    }
    .show-disabled-second{
        margin: 50px 0 20px 15px;
    }
</style>