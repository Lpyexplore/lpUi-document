import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Index = () => import('../views/index/index')
const Employ = () => import('../views/employ/employ')
const Resources = () => import('../views/resources/resources')
const Components = () => import('../views/components/components')
// 以下为Components的子路由
const UpdateLog = () => import('../views/components/childCpn/updateLog/updateLog')
const Button = () => import('../views/components/childCpn/button/button')

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/employ',
    name: 'employ',
    component: Employ
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
      }
    ]
  },

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
