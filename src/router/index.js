import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home.vue'
import ShoppingCart from '@/pages/ShoppingCart.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'ShoppingCart',
      component: ShoppingCart
    }
  ]
})

export default router
