<template>
  <div class="home">
    <Search class="search" @onSearch="search"></Search>
    <GridProduct v-if="visibleItems.length" :items="visibleItems" @clickedButton="addCart" :enable="!loading"></GridProduct>
    <Empty class="empty" v-else-if="!loading"/>
  </div>
</template>

<script>
import Vue from 'vue'
import Search from '@/components/navigation/Search'
import GridProduct from '@/components/products/Grid'
import Empty from '@/components/products/Empty'
import Store, { APP_ACTIONS } from '@/store'
import _ from 'lodash'

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
    async addCart(id) {
      Vue.set(this, 'loading', true)
      this.$emit('progressBarStart')
      const item = _.cloneDeep(this.items.find(e => e.id === id))
      item.quantity = 1
      await Store.dispatch({
        type: APP_ACTIONS.UPDATE_SHOPPING_CART,
        item
      })
      this.$emit('progressBarDone')
      Vue.set(this, 'loading', false)
      this.$router.push({ name: 'ShoppingCart' })
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
