# webpack定义
- webpack是一种javaScript应用的静态模块打包工具
- webpack可以让我们进行模块化开发，并帮助我们处理模块间的依赖关系
- webpack在打包过程中，可以对资源进行处理，比如压缩图片，将scss转成css，将ES6的语法转成ES5的语法等等的操作.
- webpack的运行必须依赖node.js

# webpack的安装
- 在安装好node.js并且有npm之后，在终端下输入npm install webpack@3.6.0 -g      (@后面跟的是版本号，-g是全局安装的意思)

# webpack的使用
- webpack在打包时会自动分析每个文件之间的依赖，并自动进行打包
#### 打包方式一：
- 进入需要打包的文件目录，在终端输入 webpack ./src/aaa.js ./dist/ccc.js(意思就是将src文件夹下的aaa.js文件打包成bbb.js文件放到dist文件夹中)
注意：这种打包方式使用的是全局的webpack
- 可以简化只输入webpack，但在这之前要做一些配置.
- 第一步：先在项目目录下创建一个名为webpack.config.js的文件，在里面输入一些配置信息：

//entry为出口的意思，即哪里的哪个文件需要打包，路径为相对路径

//output为入口的意思，即打包好的文件放到哪个路径中去.其中有两个参数path和filename。path需要写绝对路径（可以使用Node包中的path自动获取绝对路径）,filename则是打包好后的文件名

###### 具体的配置信息为：

    const path =require('path')                 //动态获取绝对路径（但需要先安装node的包，看步骤二）
    module.exports = {
        entry:'./src/js/main.js',         
        output:{
            path:path.resolve(__dirname,'dist'),
            filename:'build.js',
        },
    }

 
- 要安装node的包，首先终端输入npm init 进行初始化一下这个项目 文件一直按回车,最后会在项目目录下生成一个package.json
- 然后在终端输入 npm install  即安装了需要的node的包
- 完成这几个步骤，就可以通过在终端直接输入webpack的指令，完成打包工作了.


#### 打包方式二：
- 在打包方式一中的基础上，通过npm run 指令来进行打包（该打包方式是优先使用局部webpack，如果没有则使用全局的webpack）
- 具体的打包方式是，现在package.json文件中的'script'属性中，添加一个值，自定义一个名字,并把该值的值写为webpack，即：

######
    "scripts":{
        "build": "webpack",
    },

- 此时在终端中输入 npm run pack 即可完成打包工作
- 局部webpack的安装指令： npm install webpack@3.6.0 --sava-dev (这种安装是开发时依赖，项目打包好后就不再继续使用了)，安装好后项目目录下就会出现一个名为 node_modules 的文件夹，里面包含了webpack


# webpack中loader的使用和安装
#### 定义
- webpack不仅需要处理js文件，还需要处理很多文件的转化，但webpack本身不具备这些能力，所以需要给webpack扩展一些loader

#### 安装
- loader的官网网址：https://www.webpackjs.com/loaders/css-loader/
- 在终端输入   npm install --save-dev 需要安装的loader名称 例如想要安装关于css的loader   则需要在终端输入  npm install --save-dev css-loader 和 npm install --save-dev style-loader
- 然后在配置文件webpack.config.js中加入个关键字，并输入一些配置信息：

###### 配置信息为：

    module.exports = {
        module: {
            rules: [
              {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]     //两个loader顺序不能调换，加载读取顺序是从右向左的
              }
            ]
        },
    }

- css的loader主要需要两个，即style-loader和css-loader，前者用于将模块的导出作为样式添加到 DOM 中；  后者用于解析 CSS 文件后，使用 import 加载，并且返回 CSS 代码
- css的loader安装好后，在需要打包的主js文件中的最后导入一下想要打包的css文件模块,即在最后添加一个   require('../css/main.css')    这样webpack在打包main.js时，会解析到main.js也依赖于main.css，就可以把css和js文件一并打包到同一个js文件中。

### 其他的loader（url-loader/file-loader）
- 在打包时如果有依赖img的地方，比如css中的background:url(img/main.jpg)，webpack也需要另外一个loader去支撑它,即使用 url-loader 或者 file-loader



##### url-loader

###### 安装: npm install --save-dev url-loader

###### 配置：

    {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
        {
            loader: 'url-loader',
            options: {
                limit: 8192               //limit是限制文件的大小,单位是b.  当文件小于限制大小时，会自动把文件解析成base64格式进行输出;
            }
        }
        ]
    }




##### file-loader
###### 使用过程注意事项：
1、当文件大于limit限制大小时，不再使用url-loader，将使用file-loader

2、file-loader不需要额外进行配置，跟url-loader共用一个配置

3、file-loader会自动将该文件复制一份，并以hash值重新命名，放到打包文件的目录下,新打包好的js文件中，会引用该复制文件，但文件的使用路径可能有误。因为webpack使用file-loader时默认将直接生成的路径返回给使用者，而文件却打包在dist文件夹里，此时可以在webpack.config.js文件中的打包输出ouput关键词中增加一个属性  publicPath:'dist/' ,即可避免因为file_loader导致的文件加载不出来的问题。



###### 如何自行设置新生成的文件名和生成的位置

可以自行在原来的url-loader配置信息中的options中增加一个关键字name进行一些配置:

参数含义：

img:文件要打包到的文件夹名称

name:获取原来的图片的名字，用于新生成的图片名

hash:8  :为了防止名字冲突，依然使用哈希值放在name参数后面，但只生成8位

ext:  使用图片原来的扩展名


    {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
        {
            loader: 'url-loader',
            options: {
                limit: 8192,               //limit是限制文件的大小,单位是b.  当文件小于限制大小时，会自动把文件解析成base64格式进行输出;
                name:'img/[name].[hash:8].[ext]'
            }
        }
        ]
    }                                                                           

### babel
###### 作用:webpack在打包的时候，有些ES6语法无法转化为ES5，这时就需要用到babel

###### 安装: 在终端输入  npm install babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env   

###### 配置: 在webapck.config.js -- modules -- rules 下添加以下内容

######

    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },                                                                          

### vue-loader / vue-template-compiler
###### 作用：webpack在打包时，需要编译一些.vue文件，则需要用到vue-loader和vue-template-compiler.

###### 安装： 在终端输入：  npm install vue-loader vue-template-compiler --save-dev

###### 配置： 在webpack.config.js -- modules --rules 下添加以下内容

#####
    {
        test:/\.vue$/,
        use:['vue-loader']
    }

###### 注意事项： 打包时可能还会遇到报错信息  'vue-loader was used without the corresponding plugin.'    简单的意思就是说  使用高版本的vue-loader需要加入一个插件.或者可以使用低版本的vue-loader(13.0.0及以下)则不需要插件.

#Plugin(插件)
###### 定义：如果需要对webpack一些功能进行一些扩展，可以自行下载一些Plugin,并进行配置.

### BannerPlugin
###### 定义： 横幅插件，用于自动设置版权等信息的插件

###### 安装： BannerPlugin属于webpack自带插件，无需安装

###### 配置： 在webpack.config.js文件中 加入 plugins关键字,并在里面输入一些配置信息，具体代码如下：

#####
    const webpack = require('webpack')
    module.exports = {
        ...
        plugins:[
            new webpack.BannerPlugin('最终版权归***所有')     //前面需要先导入一下webpack
        ]
    }

### HtmlWebpackPlugin
###### 定义：开发时，index.html文件是在根目录下的，发布项目时，index.html需要转移到dist文件夹中，所以在打包时可以使用HtmlWebpackPlugin插件，自动生成一份index.html文件放入到dist文件夹中，并且可以自动通过script标签插入到body中去

###### 安装： 在终端输入 npm install html-webpack-plugin --save-dev

###### 配置： 在webpack.config.js文件中的plugins关键字下，输入以下配置信息：

#####

    const HtmlWebpackPlugin = require('html-webpack-plugin')
    module.exports = {
        ...
        plugins:[
            ...,
            new HtmlWebpackPlugin({
                template:'index.html'            //template是让生成html文件时，可以去寻找webpack.config.js文件目录下的index.html,根据它的模板来生成新的index.html文件放入到dist文件中去
            }),                                    //前面需要先导入一下html-webpack-plugin
        ]
    }

###### 注意： 在打包时可能会报错，可能是因为html-webpack-plugin版本太高导致的，可以切换成3.2.0版本

### uglifyJsPlugin
###### 定义：在项目发布前，我们必须对js文件进行压缩，uglifyJsPlugin就可以自动对打包生成的文件进行压缩丑化。

###### 安装： 在终端输入 npm install uglifyjs-webpack-plugin@1.1.1 --save-dev  （1.1.1版本是和vueCLI2版本保持一致的）


###### 配置： 在webpack.config.js文件中的plugins关键字下，输入以下配置信息：

#####
    const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
    module.exports = {
        ...
        plugins:[
            ...,
            new UglifyJsPlugin(),
        ]
    }


# webpack对Vue的配置

##### 配置安装Vue:   终端输入  npm install vue --save      安装好后, vue就已经被安装到node_modules中去了

##### Vue的使用： 直接在js文件中先导入一下Vue , 即 import Vue from 'vue'

- 在使用Vue时，可能会报错 'You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.
'       因为Vue分两种，一种是runtime-only，该版本无法编译template模板,另一种是runtime-compiler,该版本可以编译template模板。
- 默认的Vue版本是第一种，即无法编译template模板，我们需要进行一些配置信息，使Vue运行第二种版本.   配置方式：在webpack.config.js文件中写入以下配置信息：

######

    module.exports = {
        resolve:{
            alias:{
                'vue$':'vue/dist/vue.esm.js'          //在导入Vue实例时，会去node_modules下的vue下的dist文件夹中去找到vue.esm.js，并将默认运行版本改为该版本
            }
        },
    }

# webpack提供的搭建本地服务器

##### 定义： webpack提供了一个可选的本地开发服务器，用于开发时调试，这个本地服务器是基于node.js搭建，内部使用express框架，可以实现我们想要的让浏览器自动刷新显示我们开发时修改后的页面效果.

##### 安装： 在终端输入 npm install webpack-dev-server@2.9.1 --save-dev   (2.9.1版本是与VUECLI2和webpack3.6.0匹配的版本)

##### 配置： 在webpack.config.js文件中 加入 devServer关键字,并在里面输入一些配置信息，具体代码如下：

#####

     module.exports = {
        ...,
        devServer:{
            contentBase:'./dist',               //为哪一个文件夹提供本地服务，默认是根文件夹
            //port:8080,                        //端口号，默认为8080
            inline:true,                        //是否页面实时刷新
            //historyApiFallback:               //在SPA页面中，依赖HTML5的history模式
        },
     }

##### 使用： 本应该在终端直接输入webpack-dev-server,但在终端直接输入，默认是使用全局的，全局并没有安装该插件，所以可以在 package.json文件中的scripts下添加脚本 'server':'webpack-dev-server --open'            (后面加一个--open是搭建本地服务器后自动立即打开网页)

# 配置文件的分离
##### 定义：将生产时和发布时不同的各种配置文件抽离，方便编辑、删除，需要用到webpack-merge

```javascript
import hljs from 'highlight.js/lib/highlight';
import 'highlight.js';
import '../../node_modules/highlight.js/styles/github.css';

let highlight = {};

highlight.install = function (Vue) {

    Vue.directive('highlight', {

        // 被绑定元素插入父节点时调用
        inserted: function(el) {
            let blocks = el.querySelectorAll('pre code');
            for (let i = 0; i < blocks.length; i++) {
                hljs.highlightBlock(blocks[i]);
            }
        },

        // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
        componentUpdated: function(el) {
            let blocks = el.querySelectorAll('pre code');
            for (let i = 0; i < blocks.length; i++) {
                hljs.highlightBlock(blocks[i]);
            }
        }
    })
};

export default highlight;
```