<template>
    <div class="lpUi-document-index-box">
        <span class="ui-name">
            Lpyexplore-ui
        </span>
        <span class="show-txt" 
              :class="[{'is-enter': isEnter}]"
              @click="startUse">
            {{ isClick? 'Go to Use !': 'Let\'s start using !' }}
        </span>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                isEnter: false,
                isClick: false
            }
        },
        methods: {
            startUse() {
                if(!this.isClick) {
                    this.$emit('startUse', true)
                    this.isClick = true
                } else {
                    location.hash = '#/employ/install'
                    this.$emit('goToUse', 0)
                }
            }
        },
        mounted() {
            this.$emit('startUse', false)
            setTimeout(() => {
                this.isEnter = true
            }, 2000)
        }
    }
</script>

<style scoped>
    @import '../../assets/css/index/animation.css';
    .lpUi-document-index-box{
        height: 100%;
        width: 1100px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background: url('../../assets/img/indexBackground.jpg') no-repeat center center;
        background-size: 60%;
        position: relative;
    }
    .show-txt{
        animation: 2s linear 0s normal enter;
        font-size: 20px;
        font-weight: bold;
        color: white;
        cursor: default;
    }
    .show-txt.is-enter:active{
        background: rgba(255, 255, 255, .1);
    }
    .show-txt.is-enter{
        border: 2px solid #fff;
        padding: 15px 30px;
        border-radius: 10px;
        animation: animated-border 1.5s infinite;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        cursor: pointer;
    }
    .ui-name{
        position: absolute;
        font-weight: 600;
        font-size: 45px;
        letter-spacing: 5px;
        left: 50%;
        top: 10%;
        transform: translate(-50%, 0);
    }
</style>