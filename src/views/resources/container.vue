<template>
    <a class="link-container-box" 
       :href="href"
       target="_blank">
        <div class="link-container-icon">
            <slot name="icon">我是图标</slot>
        </div>
        <div class="link-container-txt">
            <slot name="txt">我是文字</slot>
        </div>
        <div class="link-container-discription">
            <span>
                <slot name="discription">我是描述文字</slot>
            </span>
        </div>
    </a>
</template>

<script>
export default {
    name: "container",
    props: {
        bgColor: {
            type: String,
            default: 'white'
        },
        href: {
            type: String,
            default: '#'
        }
    }
}
</script>

<style scoped>
    .link-container-box{
        margin: 0;
        border-radius: 6px;
        display: inline-block;
        width: 300px;
        height: 320px;
        cursor: pointer;
        transition: all .3s;
        opacity: .8;
        text-decoration: none;
        outline: none;
        color: #333;
        border: 1px solid #e1e1e1;
    }
    .link-container-box:hover{
        transform: translate(0, -5px);
        opacity: 1;
        box-shadow: 0 0 5px 5px rgba(225, 225, 225, .3);
    }
    .link-container-icon, .link-container-txt, .link-container-discription, .link-container-discription span{
         display: flex;
        justify-content: center;
        align-items: center;
    }
    .link-container-icon{
        height: 150px;   
    }
    .link-container-txt{
        height: 50px;
        font-weight: 600;
    }
    .link-container-discription{
        height: 120px;
        word-break: break-all;
    }
    .link-container-discription span{
        height: 100%;
        width: 250px;   
        color: #848b94;
    }
</style>