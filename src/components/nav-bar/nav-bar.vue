<template>
    <div class="nav-bar-box">
        <div class="nav-bar-container">

            <div class="nav-bar-left" @click="directToIndex">
                <router-link to="/">
                    <span>LpUi</span>
                </router-link>
            </div>

            <div class="nav-bar-center" @click="itemClick">

                <div class="line">
                    <span>|</span>
                </div>

                <div class="item item2 resources">
                    <router-link to="/resources" class="item2">
                        <span class="item2"
                              :class="[{'active': value === 2}]">
                          资源
                        </span>
                    </router-link>
                </div>

                <div class="item item1 components">

                    <router-link to="/components" class="item1">

                        <span class="item1"
                              :class="[{'active': value === 1}]">
                            组件
                        </span>

                    </router-link>

                </div>

                <div class="item item0 employ">
                    <router-link to="/employ" class="item0">
                        <span class="item0 employ-txt"
                              :class="[{'active': value === 0}]">
                            使用
                        </span>
                    </router-link>
                </div>

            </div>

            <div class="nav-bar-right">
                <span>
                    中文文档
                </span>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'nav-bar',
        props: {
            value: {
                type: Number,
                default: -1
            }
        },
        methods: {
            itemClick(e) {
                let element = e.target
                let active = element.className.match(/item(\d)/)
                if(active) {
                    this.$emit('input', Number(active[1]))
                }
            },
            directToIndex() {
                this.$emit('input', -1)
            }
        }
    }
</script>

<style scoped>
    .nav-bar-box{
        height: 70px;
        user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        -moz-user-select: none;
        background: white;
    }
    .nav-bar-container{
        height: 100%;
        width: 1100px;
        margin: 0 auto;
        border-bottom: 1px solid #e5e5e5
    }
    .nav-bar-left, .nav-bar-center, .nav-bar-right{
        height: 100%;
        float: left;
    }
    .nav-bar-left{
        width: 15%;
        font-size: 35px;
    }
    .nav-bar-left span{
        display: inline-block;
        height: 100%;
        line-height: 70px;
        cursor: pointer;
        font-family: hand-write;
        color: #333;
    }
    .nav-bar-center{
        width: 77%;
        font-family: normal;
    }
    .nav-bar-center .item, .line{
        float: right;
        height: 70px;
        width: 100px;
        text-align: center;
        font-size: 17px;
        cursor: pointer;
        
    }
    .item a, .line{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .nav-bar-center .item:hover span{
        border-bottom: 3px solid #0baa0b;
        border-top: 3px solid white ;
    }
    .nav-bar-center .item span, .line span{
        display: inline-block;
        padding: 10px 5px;
    }
    .item span{
        color: #408b37;
    }
    .item a{
        width: 100%;
        height: 100%;
        text-decoration: none;
        outline: none;
    }
    .nav-bar-center .line{
        color: #e1e1e1;
    }
    .nav-bar-center .line span, .line{
        cursor: default;
    }
    .nav-bar-right{
        display: flex;
        align-items: center;
        width: 8%;
        font-size: 17px;
        font-family: normal;
    }
    .nav-bar-right span{
        display: inline-block;
        color: #606266;
        width: 100%;
        text-align: center;
    }
    .active{
        border-bottom: 3px solid #0baa0b;
        border-top: 3px solid white ;
    }
    .item a:not(.router-link-active) span:active{
        transform: scale(0.8, 0.8);
        transition: all .1s;
    }
</style>