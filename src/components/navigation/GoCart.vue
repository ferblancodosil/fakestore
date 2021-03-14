<template>
  <router-link class="goCart" :to="{ name: 'ShoppingCart' }">
    <img src="~@/assets/images/cart.svg">
    <span class="text">Mi Cesta ({{shoppingCartElements}})</span>
  </router-link>
</template>

<script>
import Store from '@/store'

export default {
  name: 'GoCart',
  computed: {
    shoppingCartElements() {
      return Store.state.shoppingCartItems.length
    }
  }
}
</script>
<style lang="scss" scoped>
  .goCart {
    align-items: center;
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    .text {
      font-weight: 500;
      font-size: 12px;
      line-height: 24px;
      letter-spacing: 0.005em;
      text-transform: uppercase;
      font-feature-settings: 'liga' off;
      color: #FFFFFF;
      margin: 0px 8px;
    }
  }
</style>
