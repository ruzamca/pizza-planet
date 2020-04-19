import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import './registerServiceWorker'
import { routes } from './routes'
import { store } from './store/store'
import Accounting from 'accounting-js'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  next()
})

Vue.filter('currency', val => Accounting.formatMoney(val,
  {
    symbol: "€",
    thousand: ".",
    decimal: ",",
  }))

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
