<template>
  <div class="grid_product">
    <Detail v-for="(item, key) in items" :key="key"
            :image="item.image"
            :title="item.title"
            :description="item.description"
            :category="item.category"
            :price="item.price"
            :id="item.id"
            :enable="enable"
            @clickedButton="clickedButton">
      <template v-slot:image>
        <slot name="image"></slot>
      </template>
      <template v-slot:text>
        <slot name="text"></slot>
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
    enable: {
      type: Boolean,
      default: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    clickedButton(id) {
      this.$emit('clickedButton', id)
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
