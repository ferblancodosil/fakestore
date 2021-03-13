<template>
  <div class="goCart">
    <img src="~@/assets/images/cart.svg">
    <span class="text">Mi Cesta ({{numberElements}})</span>
  </div>
</template>

<script>
export default {
  name: 'GoCart',
  data() {
    return {
      numberElements: 2
    }
  }
}
</script>
<style lang="scss" scoped>
  .goCart {
    align-items: center;
    display: flex;
    justify-content: space-between;
    .text {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 24px;
      letter-spacing: 0.005em;
      text-transform: uppercase;
      font-feature-settings: 'liga' off;
      color: #FFFFFF;
      margin: 0px 8px;
    }
  }
</style>
