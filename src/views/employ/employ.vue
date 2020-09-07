<template>
    <div class="employ-box">
        <show-docs>
            <catalogue slot="left" v-model="current"/>
        </show-docs>
    </div>
</template>

<script>
    import showDocs from '../../components/show-docs/show-docs'
    import catalogue from './catalogue';
    export default {
        name: "employ",
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
            let ret = location.hash.match(/^#\/employ\/(\w+)/)
            if(ret === null) return;

            this.$emit('goToUse', 0)
            this.current = ret[1]
            
        }
    }
</script>

<style scoped>
    .employ-box{
        height: 100%;
        float: right;
    }
</style>