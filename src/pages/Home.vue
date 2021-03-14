<template>
  <div class="home" v-show="!loading">
    <search class="search" @onSearch="search"></search>
    <GridProduct v-if="items.length" :items="items">
      <template v-slot:action>
        <button class="button">
          <img src="~@/assets/images/addcart.svg">
          <span class="text">Añadir a cesta</span>
        </button>
      </template>
    </GridProduct>
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
      loading: true,
      items: [
      ]
    }
  },
  async mounted() {
    this.$emit('progressBarStart')
    this.items = await this.$services.store.getAllProducts()
    this.$emit('progressBarDone')
    this.loading = false
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

    .button {
      background: #0D4599;
      border-color: #0D4599;
      color: white;
      &:hover {
        background: #04214c;
      }
    }
  }
</style>
