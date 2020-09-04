<template>
    <div class="frame-box">

        <div class="title">
            <div class="title-box">
                <div class="version">
                    <span>
                        Version：
                        <span class="inner">{{ version }}</span>
                    </span>
                </div>

                <div class="updateTime">
                    <span>
                        Update-Time：
                        <span class="inner">
                            {{ updateTime }}
                        </span>
                    </span>
                </div>
            </div>
        </div>

        <div class="update-content markdown-body">
            <slot>
                <div class="update-none">
                    <span>未填写任何更新信息</span>
                </div>
            </slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: "updateFrame",
        props: {
            version: {
                type: String,
                default: '默认版本'
            },
            updateTime: {
                type: String,
                default: '2020-08-16'
            }
        }
    }
</script>

<style scoped>
    .frame-box{
        display: inline-block;
        width: 100%;
        margin-bottom: 50px;
        border: 1px solid #d2caca;
        border-radius: 7px;
    }
    .frame-box:hover{
        box-shadow: 0 0 5px 5px rgba(225, 225, 225, .3);
    }
    .title{
        height: 60px;
        display: flex;
        justify-content: center;
    }
    .title-box{
        width: 750px;
        height: 100%;
        box-sizing: border-box;
        border-bottom: 1px solid #d2caca;
    }
    .version, .updateTime{
        float: left;
        width: 50%;
        font-size: 18px;
        height: 100%;
    }
    .version span.inner, .updateTime span.inner{
        color: #0baa0b;
    }
    .version span, .updateTime span{
        line-height: 60px;
    }
    .updateTime{
        display: flex;
        justify-content: flex-end;
    }
    .update-content{
        min-height: 50px;
        padding: 20px 0;
    }
    .update-none{
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>