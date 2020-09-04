<template>
    <div class="updateLog-box">
        <div class="title">更新日志</div>
        <update-frame version="1.2.5" update-time="2020.09.04" id="1.2.5">
            <v_1_2_5/>
        </update-frame>
        
        <update-frame version="1.2.4" update-time="2020.09.02" id="1.2.4">
            <v_1_2_4/>
        </update-frame>

        <update-frame version="1.2.2" update-time="2020.09.01" id="1.2.2">
            <v_1_2_2/>
        </update-frame>
        
        <update-frame version="1.2.0" update-time="2020.08.31" id="1.2.0">
            <v_1_2_0/>
        </update-frame>
        
        <update-frame version="1.1.9" update-time="2020.08.31" id="1.1.9">
            <v_1_1_9/>
        </update-frame>
        
        <update-frame version="1.1.8" update-time="2020.08.28" id="1.1.8">
            <v_1_1_8/>
        </update-frame>

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
    import v_1_2_5 from './md/1.2.5.md';
    import v_1_2_4 from './md/1.2.4.md';
    import v_1_2_2 from './md/1.2.2.md';
    import v_1_2_0 from './md/1.2.0.md';
    import v_1_1_9 from './md/1.1.9.md';
    import v_1_1_8 from './md/1.1.8.md';
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
            v_1_2_5,
            v_1_2_4,
            v_1_2_2,
            v_1_2_0,
            v_1_1_9,
            v_1_1_8,
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