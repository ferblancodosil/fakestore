<template>
  <div class="app">
    <vue-topprogress ref="topProgress" color="green"></vue-topprogress>
    <NavBar class="navbar"/>
    <router-view @progressBarStart="progressBarStart" @progressBarDone="progressBarDone"></router-view>
    <notifications group="msgs" position="bottom right"/>
  </div>
</template>

<script>
import { vueTopprogress } from 'vue-top-progress'
import NavBar from '@/components/navigation/NavBar'
import Store, { APP_ACTIONS } from '@/store'

export default {
  name: 'App',
  components: {
    vueTopprogress,
    NavBar
  },
  async mounted() {
    Store.dispatch({
      type: APP_ACTIONS.REFRESH_SHOPPING_CART
    })
  },
  methods: {
    progressBarStart() {
      this.$refs.topProgress.start()
    },
    progressBarDone() {
      this.$refs.topProgress.done()
    }
  }
}
</script>
<style lang="scss" scoped>
  .navbar {
    margin: 8px 0px;
  }
</style>
