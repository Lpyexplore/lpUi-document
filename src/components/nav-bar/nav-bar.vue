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
                    <router-link to="/resources">
                        <span class="item2"
                              :class="[{'active': current === 2}]">
                          资源
                        </span>
                    </router-link>
                </div>

                <div class="item item1 components">

                    <router-link to="/components">

                        <span class="item1"
                              :class="[{'active': current === 1}]">
                            组件
                        </span>

                    </router-link>

                </div>

                <div class="item item0 employ">
                    <router-link to="/employ">
                        <span class="item0 employ-txt"
                              :class="[{'active': current === 0}]">
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
        data() {
            return {
                current: -1
            }
        },
        methods: {
            itemClick(e) {
                let element = e.target
                let active = element.className.match(/item(\d)/)
                if(active) {
                    this.current = Number(active[1])
                }
            },
            directToIndex() {
                this.current = -1
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
</style>