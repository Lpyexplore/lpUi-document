<template>
    <div class="employ-menu-box" @click="menuClick">
        <div class="category">使用流程</div>

        <div class="each-step">
            <router-link to="/employ/install"
                         class="install-menu"
                         :class="[{'active': value === 'install'}]">
                安装使用
            </router-link>
        </div>

        <div class="each-step">
            <router-link to="/employ/update"
                         class="update-menu"
                         :class="[{'active': value === 'update'}]">
                更新
            </router-link>
        </div>

    </div>
</template>

<script>
    export default {
        name: "catalogue",
        props: {
            value: {
                type: String,
                default: ''
            }
        },
        methods: {
            menuClick(e) {
                if(e.target.nodeName !== 'A') return;

                let ret = e.target.className.match(/(\w+)-menu/)
                if(ret === null) return;
                
                this.$emit('input', ret[1])
            }
        }
    }
</script>

<style scoped>
    .employ-menu-box{
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
    .each-step{
        height: 40px;
    }
    .each-step a{
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
    a{
        text-decoration: none;
        outline: none;
    }
    .each-step a:hover{
        color: #0e970e;
    }
    .employ-menu-box a.active{
        color: #0e970e;
    }
</style>