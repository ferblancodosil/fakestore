<template>
  <div class="navbar">
    <div class="menu">
      <div class="logo">
        <img src="~@/assets/images/logo.svg">
        <div class="title">fakestore</div>
      </div>
      <div>
        <go-cart></go-cart>
      </div>
    </div>
  </div>
</template>

<script>
import GoCart from './GoCart'

export default {
  name: 'NavBar',
  components: {
    GoCart
  }
}
</script>

<style lang="scss" scoped>
  @import "@/theme/_variables.scss";
  .navbar {
    width: 100%;
    height: 72px;
    background: $navbar_background;
    color: $navbar_color;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    .menu {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 16px 24px;
      .logo {
        align-items: center;
        display: flex;
        justify-content: space-between;
        img {
          width: 37.33px;
          height: 37.33px;
        }
        .title {
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          letter-spacing: 0.005em;
          text-transform: uppercase;
          font-feature-settings: 'liga' off;
          color: #FFFFFF;
          margin: 0px 8px;
          height: 100%;
        }
      }
    }
  }
</style>
