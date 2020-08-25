import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Index = () => import('../views/index/index')
const Employ = () => import('../views/employ/employ')
const Resources = () => import('../views/resources/resources')
const Components = () => import('../views/components/components')

// 以下为Employ的子路由
const Install = () => import('../views/employ/childCpn/install/install.vue')
const UpdateUi = () => import('../views/employ/childCpn/update/update.vue')

// 以下为Components的子路由
const UpdateLog = () => import('../views/components/childCpn/updateLog/updateLog')
const Button = () => import('../views/components/childCpn/button/button')
const Input = () => import('../views/components/childCpn/input/input')
const Switch = () => import('../views/components/childCpn/switch/switch')
const Filp = () => import('../views/components/childCpn/filp/filp')
const Alert = () => import('../views/components/childCpn/alert/alert')
const Rate = () => import('../views/components/childCpn/rate/rate')
const Dialog = () => import('../views/components/childCpn/dialog/dialog')
const Accordion = () => import('../views/components/childCpn/accordion/accordion')
const Loading = () => import('../views/components/childCpn/loading/loading')
const Radio = () => import('../views/components/childCpn/radio/radio')
const Sliding = () => import('../views/components/childCpn/sliding/sliding')
const Tabs = () => import('../views/components/childCpn/tabs/tabs')

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/employ',
    name: 'employ',
    component: Employ,
    children: [
      {
        path: 'install',
        components: {
          docs: Install
        }
      },
      {
        path: 'update',
        components: {
          docs: UpdateUi
        }
      }
    ]
  },
  {
    path: '/resources',
    name: 'resources',
    component: Resources
  },
  {
    path: '/components',
    name: 'components',
    component: Components,
    children: [
      {
        path: 'updateLog',
        components: {
          docs: UpdateLog
        }
      },
      {
        path: 'button',
        components: {
          docs: Button
        }
      },
      {
        path: 'input',
        components: {
          docs: Input
        }
      },
      {
        path: 'switch',
        components: {
          docs: Switch
        }
      },
      {
        path: 'filp',
        components: {
          docs: Filp
        }
      },
      {
        path: 'alert',
        components: {
          docs: Alert
        }
      },
      {
        path: 'rate',
        components: {
          docs: Rate
        }
      },
      {
        path: 'dialog',
        components: {
          docs: Dialog
        }
      },
      {
        path: 'accordion',
        components: {
          docs: Accordion
        }
      },
      {
        path: 'loading',
        components: {
          docs: Loading
        }
      },
      {
        path: 'radio',
        components: {
          docs: Radio
        }
      },
      {
        path: 'sliding',
        components: {
          docs: Sliding
        }
      },
      {
        path: 'tabs',
        components: {
          docs: Tabs
        }
      }
    ]
  },

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
