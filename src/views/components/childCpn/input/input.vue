<template>
    <div class="lp-input-box">
        <div class="title">lp-input 组件</div>

        <div class="child-title">基本用法</div>
        <div class="introduction">介绍了lp-input组件的基本用法</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <div class="show-base">
                    <lp-input v-model="text" placeholder="请输入内容" focus/>
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
                    <lp-input v-model="clear" placeholder="输入内容，即可出现清除按钮" clearable/>
                </div>
            </div>
            <clear-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

        <div class="child-title">显示密码</div>
        <div class="introduction">介绍了lp-input组件的显示密码功能</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <div class="show-showPassword">
                    <lp-input type="password" 
                              v-model="show"
                              placeholder="输入密码，即可出现显示密码按钮"
                              showPassword/>
                </div>
            </div>
            <show-password-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

        <div class="child-title">不同尺寸</div>
        <div class="introduction">介绍了lp-input组件不同尺寸的设置方式</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <div class="show-size">
                    <lp-input v-model="bigInput" placeholder="我是大尺寸输入框" size="big"/>
                    <lp-input v-model="middleInput" placeholder="我是中尺寸输入框" size="middle"/>
                    <lp-input v-model="smallInput" placeholder="我是小尺寸输入框" size="small"/>
                </div>
            </div>
            <size-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

        <div class="child-title">禁用</div>
        <div class="introduction">介绍了lp-input组件disabled属性的用法</div>
        <cpn-case class="cpn-case">
            <div slot="cpn" class="groups">
                <div class="show-disabled">
                    <lp-input v-model="hasDisabled" disabled/>
                </div>
            </div>
            <disabled-md slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

    </div>
</template>

<script>
    import cpnCase from "../cpnCase";
    import baseMd from "./md/base.md";
    import passwordMd from './md/password.md'
    import clearMd from './md/clear.md';
    import showPasswordMd from './md/showPassword.md';
    import sizeMd from './md/size.md';
    import disabledMd from './md/disabled.md';
    export default {
        name: "Input",
        components: {
            cpnCase,
            baseMd,
            passwordMd,
            clearMd,
            showPasswordMd,
            sizeMd,
            disabledMd
        },
        data() {
            return {
                text: '',
                password: '',
                clear: '',
                show: '',
                bigInput: '',
                middleInput: '',
                smallInput: '',
                hasDisabled: '在禁用前输入的内容'
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
        margin: 20px 0 15px 0;
    }
    .showValue{
        margin-top: 30px;
    }
    .show-base, .show-password, .show-clearable, .show-showPassword, .show-disabled{
        display: inline-block;
        width: 100%;
        margin-left: 10px;
    }
    .show-size{
        margin-left: 20px;    
    }
</style>