<template>
    <div class="catalogue-box">

        <div class="updateLog">
            <router-link to="/components/updateLog">更新日志</router-link>
        </div>

        <div class="category">组件列表</div>

        <div class="letter">A</div>

        <div class="component">
            <router-link to="">Accordion 手风琴</router-link>
        </div>

        <div class="component">
            <router-link to="">Alert 消息提醒</router-link>
        </div>

        <div class="letter">B</div>

        <div class="component">
            <router-link to="/components/button">Button 按钮</router-link>
        </div>

        <div class="letter">D</div>

        <div class="component">
            <router-link to="">Dialog 对话框</router-link>
        </div>

        <div class="letter">F</div>

        <div class="component">
            <router-link to="">Filp 卡片</router-link>
        </div>

        <div class="letter">I</div>

        <div class="component">
            <router-link to="/components/input">Input 输入框</router-link>
        </div>

        <div class="letter">L</div>

        <div class="component">
            <router-link to="">Loading 加载</router-link>
        </div>

        <div class="letter">R</div>

        <div class="component">
            <router-link to="">Radio 单选框</router-link>
        </div>

        <div class="component">
            <router-link to="">Rate 评价</router-link>
        </div>

        <div class="letter">S</div>

        <div class="component">
            <router-link to="">Sliding 滑动条</router-link>
        </div>

        <div class="component">
            <router-link to="">Switch 开关</router-link>
        </div>

        <div class="letter">T</div>

        <div class="component">
            <router-link to="">Tabs 标签页</router-link>
        </div>

    </div>
</template>

<script>
    export default {
        name: "catalogue"
    }
</script>

<style scoped>
    a{
        text-decoration: none;
        outline: none;
    }
    .catalogue-box{
        display: inline-block;
        width: 100%;
        padding-top: 50px;
    }
    .category{
        font-size: 16px;
        font-weight: 600;
        color: #333;
        height: 60px;
        line-height: 60px;
    }
    .component{
        height: 40px;
    }
    .component a{
        display: inline-block;
        font-size: 14px;
        color: #444;
        font-weight: 400;
        height: 40px;
        width: 100%;
        line-height: 40px;
        cursor: pointer;
        transition: color 100ms linear;
    }
    .component a:hover{
        color: #0e970e;
    }
    .updateLog{
        height: 50px;
    }
    .updateLog a{
        display: inline-block;
        color: #0baa0b;
        font-size: 18px;
        height: 50px;
        width: 100%;
        line-height: 50px;
        font-weight: 400;
        cursor: pointer;
    }
    .letter{
        font-size: 13px;
        color: #c4bfbf;
        height: 30px;
        line-height: 30px;
    }
</style>