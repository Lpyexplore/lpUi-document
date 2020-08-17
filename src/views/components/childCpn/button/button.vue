<template>
    <div class="lp-button-box">
        <div class="title">lp-button 组件</div>
        <div class="child-title">基本用法</div>
        <div class="introduction">介绍了lp-button组件的基本用法</div>
        <cpn-case>
            <div slot="cpn">
                <lp-button></lp-button>
            </div>
        </cpn-case>
        <base-md class="markdown-body" v-highlight/>
    </div>
</template>

<script>
    import cpnCase from "../cpnCase";
    import baseMd from './md/base.md'
    export default {
        name: "Button",
        components: {
            cpnCase,
            baseMd
        }
    }
</script>

<style scoped>
    .button-box{
        height: 100%;
    }
    .title{
        margin: 50px 0;
        font-size: 24px;
        color: #333;
        font-weight: 600;
    }
    .child-title{
        font-size: 20px;
        margin-bottom: 20px;
    }
    .introduction{
        font-size: 14px;
        margin-bottom: 20px;
        color: #646363;
    }
</style>