```javascript
import Vue from 'vue';
import lpUI from 'lpyexplore-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(lpUi);

new Vue({
  el: '#app',
  render: h => h(App)
});
```