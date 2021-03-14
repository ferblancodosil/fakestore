<template>
  <div class="shopping_cart" v-show="!loading">
    <GoHome class="back"/>
    <GridProduct v-if="items.length" :items="items" @clickedButton="removeCart">
      <template v-slot:image>
        <img src="~@/assets/images/removecart.svg">
      </template>
      <template v-slot:text>
        <span class="text">Eliminar</span>
      </template>
    </GridProduct>
    <Empty class="empty" v-else/>
  </div>
</template>

<script>
import GridProduct from '@/components/products/Grid'
import Empty from '@/components/products/Empty'
import GoHome from '@/components/navigation/GoHome'

export default {
  name: 'ShoppingCart',
  components: {
    GridProduct,
    Empty,
    GoHome
  },
  data() {
    return {
      loading: true,
      items: [
      ]
    }
  },
  async mounted() {
    this.$emit('progressBarStart')
    this.items = await this.$services.store.getShoppingCart()
    this.$emit('progressBarDone')
    this.loading = false
  },
  methods: {
    removeCart(item) {
      // eslint-disable-next-line
      console.info('removeCart', item)
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
