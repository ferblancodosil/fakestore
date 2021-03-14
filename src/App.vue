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
  data() {
    return {
      initialLoad: true
    }
  },
  async mounted() {
    this.progressBarStart()
    await Store.dispatch({
      type: APP_ACTIONS.REFRESH_SHOPPING_CART
    })
    this.initialLoad = false
  },
  methods: {
    progressBarStart() {
      this.$refs.topProgress.start()
    },
    progressBarDone() {
      if (!this.initialLoad) {
        this.$refs.topProgress.done()
      }
    }
  },
  watch: {
    initialLoad() {
      this.progressBarDone()
    }
  }
}
</script>
<style lang="scss" scoped>
  .navbar {
    margin: 8px 0px;
  }
</style>
