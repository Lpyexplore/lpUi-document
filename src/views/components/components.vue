<template>
    <div class="components-box">
        <show-docs>
            <catalogue slot="left"></catalogue>
        </show-docs>
    </div>
</template>

<script>
    import showDocs from '../../components/show-docs/show-docs'
    import catalogue from './catalogue'
    export default {
        name: "components",
        components: {
            showDocs,
            catalogue
        }
    }
</script>

<style scoped>
    .components-box{
        height: 100%;
        float: right;
    }
</style>