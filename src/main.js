import Vue from 'vue'
import Notifications from 'vue-notification'
import services from '@/services'
import router from './router'
import App from './App'
import './theme/global.scss'

Vue.config.productionTip = false
Vue.prototype.$services = services

Vue.use(Notifications)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
