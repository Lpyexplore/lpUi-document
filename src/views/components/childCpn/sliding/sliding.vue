<template>
    <div class="lp-sliding-box">
        <div class="title">lp-sliding 组件</div>

        <div class="child-title">基本用法</div>
        <div class="introduction">因为一个页面不便于有多个lp-sliding组件，因此这里将直接演示该组件的所有用法</div>
        <cpn-case class="cpn-case" :lines="120">
            <div slot="cpn" class="groups">
                <div class="show-base">
                    <lp-sliding v-model="isFull"
                                @loading="loading"
                                :animation="animation"
                                ref="lp_sliding">
                        <div slot="bg_content">恭喜你，成功</div>
                        <div slot="front_content">向右滑动即可</div>
                    </lp-sliding>
                    <div class="show-txt">当前有无动画效果：{{ animation? '有': '无' }}</div>
                    <div class="show-txt" v-show="animation">动画效果为：{{ toggle? '成功': '失败' }}</div>
                    <lp-button type="success" @click="toggleAnimation" class="toggle button">{{ animation? '关闭': '开启' }}动画</lp-button>
                    <lp-button type="warning" @click="changeToggle" class="toggle button" :disabled="animation? false: true">切换动画效果</lp-button>
                    <lp-button type="danger" @click="reset" class="button">重置</lp-button>
                    <lp-button type="primary" class="submit button" @click="submit">提交验证</lp-button>
                </div>
            </div>
            <baseMd slot="code" class="markdown-body" v-highlight/>
        </cpn-case>

    </div>
</template>

<script>
    import cpnCase from "../cpnCase";
    import baseMd from './md/base.md';
    export default {
        name: "sliding",
        components: {
            cpnCase,
            baseMd
        },
        data() {
            return {
                isFull: false,
                animation: false,
                toggle: false
            }
        },
        computed: {
            sliding() {
                return this.$refs.lp_sliding
            }
        },
        methods: {
            loading(obj) {
                if(this.toggle) {
                    setTimeout(() => {
                        obj.success()
                    }, 2000)
                } 
                else {
                    setTimeout(() => {
                        obj.err()
                    }, 2000)
                }
            },
            submit() {
                if(this.isFull) {
                    alert('验证成功')
                } else {
                    alert('验证失败')
                }
            },
            // -------------- 从这一行开始以下的代码无需查看 ----------------
            changeToggle() {
                this.toggle = !this.toggle
            },
            toggleAnimation() {
                this.animation = !this.animation
                this.sliding.iconChange = !this.animation
            },
            reset() {
                this.sliding.LoadingErr()
                this.sliding.iconChange = !this.sliding.animation
            }
        }
    }
</script>

<style scoped>
    .lp-sliding-box{
        height: 100%;
        padding-bottom: 50px;
    }
    .show-base, .show-loading{
        margin: 15px 0 0 20px;
    }
    .submit, .show-txt{
        margin-top: 30px;
    }
    .toggle{
        width: 100px;
    }
    .button{
        margin-right: 30px;
    }
</style>