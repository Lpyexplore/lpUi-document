>lp-verification组件也可以对滑块做**延迟验证**的效果 , 只要将属性 `animation` 设置成 `true` 即可 , 同时需要监听组件内部传过来的 `loading` 事件 , 该事件传回一个 `obj` 对象 , 调用 `obj.success()` 即可实现验证成功的动画 ; 调用 `obj.err()` 即可实现验证失败的动画

```html
<template>
    <div class="show-animation">
        <div class="show-animation-err">
            <div class="show-txt">失败动画</div>
            <lp-verification v-model="err" animation @loading="loadingErr"/>
            <lp-button @click="submit(err)" type="danger">提交验证</lp-button>
        </div>      
        <div class="show-animation-success">
            <div class="show-txt">成功动画</div>
            <lp-verification v-model="success" animation @loading="loadingSuccess"/>
            <lp-button @click="submit(success)" type="success">提交验证</lp-button>
        </div> 
    </div>
</template>

<script>
    export default {
        data() {
            return {
               err: false,
               success: false
            }
        },
        methods: {
            loadingErr(obj) {       
                setTimeout(() => {
                    obj.err()
                }, 2000)        
            },
            loadingSuccess(obj) {
                setTimeout(() => {
                    obj.success()
                }, 2000)
            },
            submit(value) {
                if(value) {
                    alert('验证成功')
                } else {
                    alert('验证失败')
                }
            }
        }
       
    }
</script>
```
