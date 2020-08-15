import Vue from 'vue'
import VueRouter from 'vue-router'
import test from '../md/webpack笔记.md'

Vue.use(VueRouter)

const routes = [
  {
    path: '/test',
    name: 'test',
    component: test
  }
]

const router = new VueRouter({
  routes
})

export default router
