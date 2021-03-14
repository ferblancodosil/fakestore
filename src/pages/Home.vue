<template>
  <div class="home">
    <search class="search" @onSearch="search"></search>
    <GridProduct v-if="items.length" :items="items"></GridProduct>
    <Empty class="empty" v-else/>
  </div>
</template>

<script>
import Search from '@/components/navigation/Search'
import GridProduct from '@/components/products/Grid'
import Empty from '@/components/products/Empty'

export default {
  name: 'Home',
  components: {
    GridProduct,
    Search,
    Empty
  },
  data() {
    return {
      items: [
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
  .home {
    .empty {
      width: 50%;
      margin: 32px auto;
    }
    .search {
      margin: 8px 0px;
    }
  }
</style>
