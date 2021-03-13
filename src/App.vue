<template>
  <div class="app">
    <vue-topprogress ref="topProgress" color="green"></vue-topprogress>
    <NavBar class="navbar"/>
    <router-view></router-view>
    <notifications group="msgs" position="bottom right"/>
  </div>
</template>

<script>
import { vueTopprogress } from 'vue-top-progress'
import NavBar from '@/components/navigation/NavBar'

export default {
  name: 'App',
  components: {
    vueTopprogress,
    NavBar
  }
}
</script>
<style lang="scss" scoped>
  .navbar {
    margin: 8px 0px;
  }
</style>
