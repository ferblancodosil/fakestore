<template>
  <router-link class="goHome" :to="{ name: 'Home' }">
    <img src="~@/assets/images/back.svg">
    <div class="text">Seguir comprando</div>
  </router-link>
</template>

<script>
export default {
  name: 'GoHome'
}
</script>
<style lang="scss" scoped>
  .goHome {
    height: 18px;
    width: 140px;
    font-weight: 300;
    font-size: 14px;
    line-height: 18px;
    color: #979593;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    .text {
      margin: 0px 8px;
    }

  }
</style>
