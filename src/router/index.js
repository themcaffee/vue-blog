import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/pages/Home')
const ViewSinglePost = () => import('@/pages/ViewSinglePost')


Vue.use(Router)

const routes = [
  { path: '/', name: 'root', component: Home },
  { path: '/post/:postname', name: 'post', component: ViewSinglePost }
]

const router = new Router({
  mode: 'history',
  base: '/control/',
  routes
})

export default router