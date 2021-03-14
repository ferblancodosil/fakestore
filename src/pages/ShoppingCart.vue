<template>
  <div class="shopping_cart">
    <GoHome class="back"/>
    <GridProduct v-if="items.length" :items="items" @clickedButton="removeCart" :enable="!loading">
      <template v-slot:image>
        <img src="~@/assets/images/removecart.svg">
      </template>
      <template v-slot:text>
        <span class="text">Eliminar</span>
      </template>
    </GridProduct>
    <Empty class="empty" v-else>
      <template v-slot:description>
        <div class="description">Vuelve a nuestra lista de productos para añadir lo que desees.</div>
      </template>
    </Empty>
  </div>
</template>

<script>
import Vue from 'vue'
import GridProduct from '@/components/products/Grid'
import Empty from '@/components/products/Empty'
import GoHome from '@/components/navigation/GoHome'
import Store, { APP_ACTIONS } from '@/store'
import _ from 'lodash'

export default {
  name: 'ShoppingCart',
  components: {
    GridProduct,
    Empty,
    GoHome
  },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    items() {
      return Store.state.shoppingCartItems
    }
  },
  methods: {
    async removeCart(id) {
      Vue.set(this, 'loading', true)
      this.$emit('progressBarStart')
      const item = _.cloneDeep(this.items.find(e => e.id === id))
      item.quantity = 0
      await Store.dispatch({
        type: APP_ACTIONS.UPDATE_SHOPPING_CART,
        item
      })
      this.$emit('progressBarDone')
      Vue.set(this, 'loading', false)
    }
  }
}
</script>

<style lang="scss" scoped>
  .shopping_cart {
    .empty {
      width: 50%;
      margin: 32px auto;
    }
    .back {
      margin: 20px 0px;
    }
    &>>>.button {
      background: red !important;
      border-color: red !important;
      color: white;
      &:hover {
        background: #EA413E !important;
      }
    }
  }
</style>
