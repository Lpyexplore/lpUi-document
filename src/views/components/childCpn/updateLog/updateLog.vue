<template>
    <div class="updateLog-box">
        <div class="title">更新日志</div>
        <update-frame />
        <update-frame />
        <update-frame />
    </div>
</template>

<script>
    import updateFrame from './updateFrame'
    export default {
        name: "updateLog",
        components: {
            updateFrame
        }
    }
</script>

<style scoped>
    .updateLog-box{
        height: 100%;
    }
    .title{
        margin: 50px 0;
        font-size: 24px;
        color: #333;
    }
</style>