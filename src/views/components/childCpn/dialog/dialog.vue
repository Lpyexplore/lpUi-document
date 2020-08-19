<template>
    <div class="lp-dialog-box">
        <div class="title">lp-dialog 组件</div>

        <div class="child-title">基本用法</div>
        <div class="introduction">介绍了lp-dialog组件的基本用法</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <div class="show-base">
                    <lp-button style="width: 100px"
                               type="primary" @click="btnClick">
                        弹出对话框
                    </lp-button>
                </div>
            </div>
        </cpn-case>

    </div>
</template>

<script>
    import cpnCase from "../cpnCase";
    export default {
        name: "dialog",
        components: {
            cpnCase
        },
        methods: {
            btnClick() {
                this.$confirm()
            }
        }
    }
</script>

<style scoped>
    .lp-dialog-box{
        height: 100%;
        padding-bottom: 50px;
    }
    .show-base{
        margin: 15px 0 0 20px;
    }
</style>