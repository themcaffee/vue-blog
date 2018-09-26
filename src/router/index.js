import Vue from 'vue'
import Router from 'vue-router'

const HelloWorld = () => import('@/pages/HelloWorld')


Vue.use(Router)

const routes = [
  { path: '/', name: 'root', component: HelloWorld }
]

const router = new Router({
  mode: 'history',
  base: '/control/',
  routes
})

export default router