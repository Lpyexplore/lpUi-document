<template>
    <div class="lp-input-box">
        <div class="title">lp-input 组件</div>

        <div class="child-title">基本用法</div>
        <div class="introduction">介绍了lp-input组件的基本用法</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <div class="show-base">
                    <lp-input v-model="text" placeholder="请输入内容"/>
                    <div class="showValue">文本框输入的值为:
                        <span v-html="text"/>
                    </div>
                </div>
            </div>
            <base-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

        <div class="child-title">密码框</div>
        <div class="introduction">介绍了lp-input组件的密码框用法</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <div class="show-password">
                    <lp-input type="password" v-model="password" placeholder="请输入密码"/>
                    <div class="showValue">密码框输入的值为:
                        <span v-html="password"/>
                    </div>
                </div>
            </div>
            <password-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

        <div class="child-title">清除功能</div>
        <div class="introduction">介绍了lp-input组件的清除功能的用法</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <div class="show-clearable">
                    <lp-input placeholder="请输入内容" clearable/>
                </div>
            </div>
        </cpn-case>

    </div>
</template>

<script>
    import cpnCase from "../cpnCase";
    import baseMd from "./md/base.md";
    import passwordMd from './md/password.md'
    export default {
        name: "Input",
        components: {
            cpnCase,
            baseMd,
            passwordMd
        },
        data() {
            return {
                text: '',
                password: ''
            }
        }
    }
</script>

<style scoped>
    .lp-input-box{
        height: 100%;
        padding-bottom: 50px;
    }
    .lp-input{
        width: 500px;
        margin: 10px 0 15px 0;
    }
    .showValue{
        margin-top: 30px;
    }
    .show-base, .show-password, .show-clearable{
        display: inline-block;
        width: 100%;
        margin-left: 10px;
    }
</style>