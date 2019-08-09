<template>
  <div class="home">
    <Weather msg='xxx' />
  </div>
</template>

<script>
// @ is an alias to /src
import Weather from '@/components/Weather.vue'

export default {
  name: 'home',
  components: {
    Weather
  }
}
</script>

<style scoped>
.home{
  height: 100%;
  background: pink;
}
</style>

