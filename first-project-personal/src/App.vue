<template>
  <div id="app">
  <transition :name="transitionName">
    <router-view/>
  </transition>
    <div id="layout-footer">FOOOOOTER</div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scooped>
#app {
  color: #2c3e50;
  margin: 0;
}
#layout-footer {
  position: absolute;
  width: 1000px;
  text-align: center;
  bottom: 0;
  right: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
}
transition {

}
</style>
