<template>
    <div class="show-docs-box">

        <div class="show-docs-left">
            <slot name="left">请在此处展示目录</slot>
        </div>

        <div class="show-docs-right">
            <slot name="right">
                <router-view name="docs"/>
            </slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: "show-docs"
    }
</script>

<style scoped>
    .show-docs-box{
        height: 100%;
        width: 100%;
    }
    .show-docs-left, .show-docs-right{
        height: 100%;
        overflow: auto;
        float: left;
    }
    .show-docs-left{
        width: 260px;
    }
    .show-docs-right{
        width: 840px;
    }
</style>