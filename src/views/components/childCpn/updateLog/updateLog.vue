<template>
    <div class="updateLog-box">
        <div class="title">更新日志</div>
        <update-frame version="1.1.6" update-time="2020.08.27" id="1.1.6">
            <v_1_1_6/>
        </update-frame>

        <update-frame version="1.1.4" update-time="2020.08.25" id="1.1.4">
            <v_1_1_4/>
        </update-frame>

        <update-frame version="1.1.0" update-time="2020.08.22" id="1.1.0">
            <v_1_1_0/>
        </update-frame>

        <update-frame version="1.0.5" update-time="2020.08.20" id="1.0.5">
            <v_1_0_5/>
        </update-frame>

        <update-frame version="1.0.3" update-time="2020.08.19" id="1.0.3">
            <v_1_0_3/>
        </update-frame>

        <update-frame version="1.0.0" update-time="2020.08.17" id="1.0.0">
            <v_1_0_0/>
        </update-frame>

    </div>
</template>

<script>
    import updateFrame from './updateFrame';
    import v_1_1_6 from './md/1.1.6.md';
    import v_1_1_4 from './md/1.1.4.md';
    import v_1_1_0 from './md/1.1.0.md';
    import v_1_0_5 from './md/1.0.5.md';
    import v_1_0_3 from './md/1.0.3.md';
    import v_1_0_0 from './md/1.0.0.md';

    export default {
        name: "updateLog",
        components: {
            updateFrame,
            v_1_1_6,
            v_1_1_4,
            v_1_1_0,
            v_1_0_5,
            v_1_0_3,
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