import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/pages/Home')
const ViewSinglePost = () => import('@/pages/ViewSinglePost')
const Error404 = () => import('@/pages/Error404')


Vue.use(Router)

const routes = [
  { path: '/', name: 'root', component: Home },
  { path: '/posts/:postname', name: 'post', component: ViewSinglePost },
  { path: '*', component: Error404 }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router