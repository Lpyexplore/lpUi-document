<template>
    <div class="lp-filp-box">
        <div class="title">lp-filp 组件</div>

        <div class="child-title">基本用法</div>
        <div class="introduction">介绍了lp-filp组件的基本用法</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <lp-filp/>
                <lp-filp frontBg="green" backBg="green"/>
            </div>
        </cpn-case>

    </div>
</template>

<script>
    import cpnCase from "../cpnCase";
    export default {
        name: "Filp",
        components: {
            cpnCase
        }
    }
</script>

<style scoped>
    .lp-filp-box{
        height: 100%;
        padding-bottom: 50px;
    }
</style>