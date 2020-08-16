<template>
    <div class="show-docs-box" :style="{'width': `${width}px`}">

        <div class="show-docs-left">
            <slot name="left">请在此处展示目录</slot>
        </div>

        <div class="show-docs-right" :style="{'width': `${width - 260}px`}">
            <div class="show-docs-right-inner">
                <div class="router-view-inner">
                    <slot name="right">
                        <router-view name="docs"/>
                    </slot>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "show-docs",
        data() {
            return {
                width: null
            }
        },
        mounted() {
            let width = document.body.clientWidth
            this.width = width - (width - 1100) / 2
        }
    }
</script>

<style scoped>
    .show-docs-box{
        height: 100%;
    }
    .show-docs-left, .show-docs-right{
        height: 100%;
        overflow: auto;
        float: left;
    }
    .show-docs-left{
        width: 260px;

    }
    .show-docs-right-inner{
        width: 840px;
        height: 100%;
    }
    .router-view-inner{
        width: 810px;
        height: 100%;
        float: right;
    }
</style>