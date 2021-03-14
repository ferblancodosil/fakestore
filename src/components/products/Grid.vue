<template>
  <div class="grid_product">
    <Detail v-for="(item, key) in items" :key="key"
            :image="item.image"
            :title="item.title"
            :description="item.description"
            :category="item.category"
            :price="item.price">
      <template v-slot:button>
        <slot name="action"></slot>
      </template>
    </Detail>
  </div>
</template>

<script>
import Detail from './Detail'

export default {
  name: 'GridProduct',
  components: {
    Detail
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
  .grid_product {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  @media screen and (max-width: 860px) {
    .grid_product {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>
