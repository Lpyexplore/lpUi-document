>只需要对 `lp-sliding` 组件双向绑定一个值为 `Boolean` 类型的变量 , 用于判断其是否验证成功

>lp-sliding组件也可以对滑块做**延迟验证**的效果 , 只要将属性 `animation` 设置成 `true` 即可 , 同时需要监听组件内部传过来的 `loading` 事件 , 该事件传回一个 `obj` 对象 , 调用 `obj.success()` 即可实现验证成功的动画 ; 调用 `obj.err()` 即可实现验证失败的动画

>lp-sliding组件也提供了两个插槽 , 它们为 `bg_content` 、`front_content` , 分别表示 **验证成功后显示的文字** 、**验证滑动提示文字** , 它们都已设定默认值 , 不必要时可以不设置

```html
<template>
    <div class="show-base">

        <lp-sliding v-model="isFull"
                    @loading="loading"
                    :animation="animation"
                    ref="lp_sliding">

            <div slot="bg_content">恭喜你，成功</div>
            <div slot="front_content">向右滑动即可</div>

        </lp-sliding>

        <div>当前有无动画效果：{ { animation? '有': '无' } }</div>
        <div v-show="animation">动画效果为：{ { toggle? '成功': '失败' } }</div>

        <lp-button type="success" @click="toggleAnimation">
            { { animation? '关闭': '开启' } }动画
        </lp-button>

        <lp-button type="warning" @click="changeToggle" :disabled="animation? false: true">
            切换动画效果
        </lp-button>

        <lp-button type="danger" @click="reset">重置</lp-button>

        <lp-button type="primary" @click="submit">提交验证</lp-button>

    </div>
</template>

<script>
    export default {
        data() {
            return {
               isFull: false,       // 判断滑块是否滑到最右侧
               animation: false,    // 判断是否开启动画效果
               toggle: false        // 判断当前动画类型
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
        },
        computed: {
            sliding() {
                return this.$refs.lp_sliding
            }
        },
    }
</script>
```