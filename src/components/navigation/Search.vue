<template>
  <form class="search" @submit.prevent="search">
    <img src="~@/assets/images/search.svg">
    <input v-model="input" type="text" class="input" placeholder="Buscar Producto">
  </form>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      input: ''
    }
  },
  methods: {
    search() {
      this.$emit('onSearch', { value: this.input })
    }
  }
}
</script>
<style lang="scss" scoped>
  .search {
    width: 100%;
    position: relative;
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    img {
      position: absolute;
      left: 11px;
      top: 11px;
    }
    .input {
      width: calc(100% - 34px);
      background: #F1F3F5;
      padding: 11px 0px 11px 34px;
      border: 0;
      border-radius: 10px;
    }
  }

</style>
