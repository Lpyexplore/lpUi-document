<template>
    <div class="components-box">
        <show-docs>
            <catalogue slot="left" v-model="current"/>
        </show-docs>
    </div>
</template>

<script>
    import showDocs from '../../components/show-docs/show-docs'
    import catalogue from './catalogue'
    export default {
        name: "components",
        data() {
            return {
                current: ''
            }
        },
        components: {
            showDocs,
            catalogue
        },
        mounted() {
            let ret = location.hash.match(/^#\/components\/(\w+)/)
            if(ret === null) return;
            this.$emit('goToUse', 1)
            this.current = ret[1]    
        }
    }
</script>

<style scoped>
    .components-box{
        height: 100%;
        float: right;
    }
</style>