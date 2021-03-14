<template>
  <div class="Home">
    <search class="search" @onSearch="search"></search>
    <GridProduct :items="items"></GridProduct>
  </div>
</template>

<script>
import Search from '@/components/navigation/Search'
import GridProduct from '@/components/products/Grid'

export default {
  name: 'Home',
  components: {
    GridProduct,
    Search
  },
  data() {
    return {
      items: [
        {
          image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
          title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
          description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
          category: 'men clothing',
          price: '109.95 €'
        }
      ]
    }
  },
  methods: {
    search({ value }) {
      // eslint-disable-next-line
      alert(`Vamos a buscar el valor ${value}`)
    }
  }
}
</script>

<style lang="scss" scoped>
  .search {
    margin: 8px 0px;
  }
</style>
