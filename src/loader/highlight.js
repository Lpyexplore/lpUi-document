import hljs from '../../node_modules/highlight.js/lib/highlight';
import '../../node_modules/highlight.js/lib/index';
import '../../node_modules/highlight.js/styles/github-gist.css';

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