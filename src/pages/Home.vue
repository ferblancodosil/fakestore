<template>
  <div class="home" v-show="!loading">
    <Search class="search" @onSearch="search"></Search>
    <GridProduct v-if="items.length" :items="visibleItems" @clickedButton="addCart"></GridProduct>
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
      filter: '',
      items: []
    }
  },
  async mounted() {
    this.$emit('progressBarStart')
    this.items = await this.$services.store.getAllProducts()
    this.$emit('progressBarDone')
    this.loading = false
  },
  computed: {
    visibleItems() {
      return this.items.filter(e => e.title.match(this.filter))
    }
  },
  methods: {
    search({ value }) {
      this.filter = value
    },
    addCart(id) {
      // eslint-disable-next-line
      console.info(`Añadimos al carro`, id)
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
