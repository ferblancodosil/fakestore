<template>
  <div class="shopping_cart">
    <GoHome/>
    <GridProduct v-if="items.length" :items="items"></GridProduct>
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
      items: [
      ]
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
  }
</style>
