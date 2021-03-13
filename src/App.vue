<template>
  <div class="app">
    <vue-topprogress ref="topProgress" color="green"></vue-topprogress>
    <router-view></router-view>
    <notifications group="msgs" position="bottom right"/>
  </div>
</template>

<script>
import { vueTopprogress } from 'vue-top-progress'

export default {
  name: 'App',
  components: {
    vueTopprogress
  }
}
</script>
