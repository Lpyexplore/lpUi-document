<template>
    <div class="catalogue-box" @click="cpnClick">

        <div class="updateLog">
            <router-link to="/components/updateLog">更新日志</router-link>
        </div>

        <div class="category">组件列表</div>

        <div class="letter">A</div>

        <div class="component">
            <router-link to="/components/accordion"
                         class="accordion-menu"
                         :class="[{'active': value === 'accordion'}]">
                Accordion 手风琴
            </router-link>
        </div>

        <div class="component">
            <router-link to="/components/alert"
                         class="alert-menu"
                         :class="[{'active': value === 'alert'}]">
                Alert 消息提醒
            </router-link>
        </div>

        <div class="letter">B</div>

        <div class="component">
            <router-link to="/components/button"
                         class="button-menu"
                         :class="[{'active': value === 'button'}]">
                Button 按钮
            </router-link>
        </div>

        <div class="letter">D</div>

        <div class="component">
            <router-link to="/components/dialog"
                         class="dialog-menu"
                         :class="[{'active': value === 'dialog'}]">
                Dialog 对话框
            </router-link>
        </div>

        <div class="letter">F</div>

        <div class="component">
            <router-link to="/components/filp"
                         class="filp-menu"
                         :class="[{'active': value === 'filp'}]">
                Filp 卡片
            </router-link>
        </div>

        <div class="letter">I</div>

        <div class="component">
            <router-link to="/components/input"
                         class="input-menu"
                         :class="[{'active': value === 'input'}]">
                Input 输入框
            </router-link>
        </div>

        <div class="letter">L</div>

        <div class="component">
            <router-link to="/components/loading"
                         class="loading-menu"
                         :class="[{'active': value === 'loading'}]">    
                Loading 加载
            </router-link>
        </div>

        <div class="letter">R</div>

        <div class="component">
            <router-link to="/components/radio"
                         class="radio-menu"
                         :class="[{'active': value === 'radio'}]">
                Radio 单选框
            </router-link>
        </div>

        <div class="component">
            <router-link to="/components/rate"
                         class="rate-menu"
                         :class="[{'active': value === 'rate'}]">
                Rate 评价
            </router-link>
        </div>

        <div class="letter">S</div>

        <div class="component">
            <router-link to="/components/switch"
                         class="switch-menu"
                         :class="[{'active': value === 'switch'}]">
                Switch 开关
            </router-link>
        </div>

        <div class="letter">T</div>

        <div class="component">
            <router-link to="/components/tabs"
                         class="tabs-menu"
                         :class="[{'active': value === 'tabs'}]">
                Tabs 标签页
            </router-link>
        </div>

        <div class="letter">V</div>

        <div class="component">
            <router-link to="/components/verification"
                         class="verification-menu"
                         :class="[{'active': value === 'verification'}]">
                verification 验证
            </router-link>
        </div>

    </div>
</template>

<script>

    export default {
        name: "catalogue",
        props: {
            value: {
                type: String,
                default: ''
            }
        },
        methods: {
            cpnClick(e) {
                if(e.target.nodeName !== 'A') return;

                let ret = e.target.className.match(/(\w+)-menu/)
                if(ret === null) return;
                
                this.$emit('input', ret[1])
            }
        }
    }
</script>

<style scoped>
    a{
        text-decoration: none;
        outline: none;
    }
    .catalogue-box{
        display: inline-block;
        width: 100%;
        padding-top: 50px;
    }
    .category{
        font-size: 16px;
        font-weight: 600;
        color: #333;
        height: 60px;
        line-height: 60px;
    }
    .component{
        height: 40px;
    }
    .component a{
        display: inline-block;
        font-size: 14px;
        color: #444;
        font-weight: 400;
        height: 40px;
        width: 100%;
        line-height: 40px;
        cursor: pointer;
        transition: color 100ms linear;
    }
    .component a:hover{
        color: #0e970e;
    }
    .updateLog{
        height: 50px;
    }
    .catalogue-box a.active{
        color: #0e970e;
    }
    .updateLog a{
        display: inline-block;
        color: #0baa0b;
        font-size: 18px;
        height: 50px;
        width: 100%;
        line-height: 50px;
        font-weight: 400;
        cursor: pointer;
    }
    .letter{
        font-size: 13px;
        color: #c4bfbf;
        height: 30px;
        line-height: 30px;
    }
</style>