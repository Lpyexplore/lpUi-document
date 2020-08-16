<template>
    <div class="lp-button-box">
        <div class="title">
            lp-button 组件
        </div>
        <base-md class="markdown-body" v-highlight/>

    </div>
</template>

<script>
    import baseMd from './md/base.md'
    export default {
        name: "lp-button",
        components: {
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
</style>