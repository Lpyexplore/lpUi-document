<template>
    <div class="components-box">
        <show-docs>
            <catalogue slot="left"/>
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
        },
        mounted() {
            if(location.hash.match(/^#\/components/)) {
                this.$emit('goToUse', 1)
            }
        }
    }
</script>

<style scoped>
    .components-box{
        height: 100%;
        float: right;
    }
</style>