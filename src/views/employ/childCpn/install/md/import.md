```javascript
import Vue from 'vue';
import App from './App.vue';
import lpUi from 'lpyexplore-ui';
import 'lpyexplore-ui/dist/lpyexplore-ui.css';

Vue.use(lpUi);

new Vue({
  el: '#app',
  render: h => h(App)
});
```