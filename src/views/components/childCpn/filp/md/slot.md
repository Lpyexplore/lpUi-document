>lp-filp组件的作用类似于名片, 用于展示某些简短 、重要的信息, 因此内部提供了两个具名插槽 `front` 和 `back`, 分别表示卡片正面与背面的内容

>如上图, 建议将需要点击的信息放在背面， 因为鼠标移到该组件上时会自动翻面

```html
<template>
    <div class="show-slot">
        <lp-filp class="example">

            <div slot="front">
                <div class="example-title">
                    Lpyexplore
                </div>
                <div class="txt">年龄：23</div>
                <div class="txt">性别：男</div>
                <div class="txt">学历：本科</div>
                <div class="txt">爱好：羽毛球</div>
            </div>

            <div slot="back">
                <div class="example-title">
                    个人编码社交网站
                </div>
                <div class="txt">
                    CSDN：
                    <a href="https://lpyexplore.blog.csdn.net/" target="_blank">访问链接</a>
                </div>

                <div class="txt">
                    GitHub：
                    <a href="https://github.com/Lpyexplore/" target="_blank">访问链接</a>
                </div>

                <div class="txt">
                    微信公众号：
                    <a href="https://weixin.sogou.com/weixin?type=1&s_from=input&query=Lpyexplore&ie=utf8&_sug_=n&_sug_type_=" target="_blank">访问链接</a>
                </div>
            </div>

        </lp-filp>
    </div>
</template>

<style>
    .example{
        width: 250px;
        height: 250px;
    }
    .example-title{
        height: 40px;
        line-height: 40px;
        font-weight: 600;
        text-indent: 20px;
        margin-bottom: 10px;
    }
    .example .txt{
        margin: 0 0 20px 20px;
    }
</style>
```