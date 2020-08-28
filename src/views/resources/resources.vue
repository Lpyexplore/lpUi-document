<template>
    <div class="resources-box">
        resources-box
    </div>
</template>

<script>
    export default {
        name: "resources",
        mounted() {
            if(location.pathname.match(/^\/resources/)) {
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
</style>