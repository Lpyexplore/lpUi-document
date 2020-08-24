>将lp-switch组件的 `loading` 属性设置为 `true`, 即可在开关打开的过程中自定义一些异步操作

>当开关处于打开与关闭之间的加载状态时, `change` 事件会传出两个参数,**第一个参数**值为字符串 `loading`; **第二个参数**是对象 `obj`, 调用 `obj.success()`即可使开关呈现打开状态, 调用 `obj.err()`即可使按钮呈现关闭状态

```html
<template>
    <div>
        <div class="show-loading">
            <lp-switch loading @change="successLoading"/>
            <div v-text="loading_status1" class="show-txt"/>
            <div v-text="`开关将在${timer1}秒后成功打开`"
                class="show-txt"
                v-show="timer1 !== 4"/>
        </div>

        <div class="show-loading">
            <lp-switch loading @change="errLoading"/>
            <div v-text="loading_status2" class="show-txt"/>
            <div v-text="`开关将在${timer2}秒后打开失败`"
                class="show-txt" 
                v-show="timer2 !== 4"/>
        </div>
    </div>
    
    
    
</template>

<script>
    export default {
        data() {
            return {
                loading_status1: '当前开关状态为：关闭',
                loading_status2: '当前开关状态为：关闭',
                timer1: 4,
                timer2: 4
            }       
        },
        methods: {
            successLoading(value, obj) {
                if(value === 'open') {
                    this.loading_status1 = "当前开关状态为：打开"
                } 
                else if(value === 'loading') {
                    this.loading_status1 = "当前开关状态为：加载中"
                    let t1 = setInterval(() => {
                        if(this.timer1 !== 0) {
                            this.timer1 --
                        } 
                        else {
                            obj.success()
                            this.loading_status1 = "当前开关状态为：打开"
                            this.timer1 = 4
                            clearInterval(t1)
                        }
                    }, 1000)
                } 
                else {
                    this.loading_status1 = "当前开关状态为：关闭"
                }
            },
            errLoading(value, obj) {
                if(value === 'open') {
                    this.loading_status2 = "当前开关状态为：打开"
                } 
                else if(value === 'loading') {
                    this.loading_status2 = "当前开关状态为：加载中"
                    let t2 = setInterval(() => {
                        if(this.timer2 !== 0) {
                            this.timer2 --
                        } 
                        else {
                            obj.err()
                            this.loading_status2 = "当前开关状态为：关闭"
                            this.timer2 = 4
                            clearInterval(t2)
                        }
                    }, 1000)
                } 
                else {
                    this.loading_status2 = "当前开关状态为：关闭"
                }
            }
        }
    }
</script>
```