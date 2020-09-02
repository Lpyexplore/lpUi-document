<template>
    <div class="employ-box">
        <show-docs>
            <catalogue slot="left"/>
        </show-docs>
    </div>
</template>

<script>
    import showDocs from '../../components/show-docs/show-docs'
    import catalogue from './catalogue';
    export default {
        name: "employ",
        components: {
            showDocs,
            catalogue
        },
        mounted() {
            if(location.hash.match(/^#\/employ/)) {
                this.$emit('goToUse', 0)
            }
        }
    }
</script>

<style scoped>
    .employ-box{
        height: 100%;
        float: right;
    }
</style>