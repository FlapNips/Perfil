<template>
  <div id="layout-textright-login">
    <div class="div-textright-login" v-for="(text, index) in texts" :key="index">Texto {{text}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      texts: [
      'Array 1',
      'Array 2',
      '...3',
      4]
    }
  }
}
</script>

<style scooped>
.div-textright-login {
  border: solid black 2px;
}
#layout-textright-login {
  text-align      : center;
  display         : flex;
  justify-content : space-evenly;
  flex-direction  : column;
  width           : 38%;
  background-color: tomato;
}
</style>