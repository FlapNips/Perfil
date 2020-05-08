<template>
  <div id="app">
    <login></login>
  </div>
</template>

<script>
import login from '@/components/Login/login.vue'

export default {
  name: 'App',
  components: {
    login
  }
}
</script>

<style>
#app {
  margin-top: 0;
}
</style>
