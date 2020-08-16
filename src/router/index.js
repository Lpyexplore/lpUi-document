import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Index = () => import('../views/index/index')
const Use = () => import('../views/use/use')
const Resources = () => import('../views/resources/resources')
const Components = () => import('../views/components/components')
const hahha = () => import('../components/111')

const routes = [
  //   ---------------- 主页面路由 ------------------
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/use',
    name: 'use',
    component: Use
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
          docs: hahha
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
