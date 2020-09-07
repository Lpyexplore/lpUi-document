<template>
    <div class="resources-box">
        <div class="first-line">
            <container href="https://github.com/Lpyexplore/lpyexplore-ui">
                <i slot="icon" class="fa fa-github github-icon"/>
                <span slot="txt">lpyexplore-ui</span>
                <span slot="discription">lpyexplore-ui的源代码已经收录在GitHub</span>
            </container>
            <container href="https://fontawesome.dashgame.com/#basic">
                <i slot="icon" class="fa fa-adn fontAwesome-icon"/>
                <span slot="txt">Font Awesome</span>
                <span slot="discription">lpyexplore-ui用到的所有icon图标都来自于Font Awesome，开发人员也可以直接使用</span>
            </container>
            <container href="https://highlightjs.org/">
                <i slot="icon" class="fa fa-sun-o highlightJs-icon"/>
                <span slot="txt">highlight.js</span>
                <span slot="discription">文档中代码高亮效果全部得益于 highlight.js</span>
            </container>
        </div>
        
    </div>
</template>

<script>
    import container from './container'
    export default {
        name: "resources",
        components: {
            container
        },
        mounted() {
            if(location.hash.match(/^#\/resources/)) {
                this.$emit('goToUse', 2)
            }
        }
    }
</script>

<style scoped>
    .resources-box{
        width: 1100px;
        height: 100%;
        margin: 0 auto;
    }
    .first-line{
        display: flex;
        justify-content: space-between;
        height: 382px;
        align-items: center;
    }
    .github-icon, .fontAwesome-icon, .highlightJs-icon{
        font-size: 90px;
    }
</style>