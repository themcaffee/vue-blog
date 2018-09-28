// CSS for bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vue from 'vue'
import store from './store/index'
import router from './router/index'
import BootstrapVue from 'bootstrap-vue'

import App from './App.vue'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

import { Navbar, Pagination } from 'bootstrap-vue/es/components'
Vue.use(Navbar)
Vue.use(Pagination)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
