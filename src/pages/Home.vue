<template>
  <div class="Home">
    <search class="search" @onSearch="search"></search>
    <h3>Hello World!</h3>
  </div>
</template>

<script>
import Search from '@/components/navigation/Search'

export default {
  name: 'Home',
  components: {
    Search
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
