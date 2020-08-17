import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import hljs from './loader/highlight'
import lpUi from '../node_modules/lpyexplore-ui/dist/lpyexplore-ui.umd.min'
import '../node_modules/lpyexplore-ui/dist/lpyexplore-ui.css'

Vue.use(lpUi)

Vue.use(hljs)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
