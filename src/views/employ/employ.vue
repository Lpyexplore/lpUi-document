<template>
    <div class="employ-box">
        <show-docs></show-docs>
    </div>
</template>

<script>
    import showDocs from '../../components/show-docs/show-docs'
    export default {
        name: "employ",
        components: {
            showDocs
        }
    }
</script>

<style scoped>
    .employ-box{
        height: 100%;
        float: right;
    }
</style>