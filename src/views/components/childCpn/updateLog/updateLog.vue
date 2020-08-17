<template>
    <div class="updateLog-box">
        <div class="title">更新日志</div>
        <update-frame version="1.0.0" update-time="2020.08.17">
            <v_1_0_0/>
        </update-frame>
    </div>
</template>

<script>
    import updateFrame from './updateFrame'
    import v_1_0_0 from './md/1.0.0.md'
    export default {
        name: "updateLog",
        components: {
            updateFrame,
            v_1_0_0
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