<template>
  <div id="layout-sign-in">
    <div class="circle"></div>
    <input class="input-sign-in" type="text" placeholder="Usuário"/>
    <input class="input-sign-in" type="password" placeholder="Senha"/>
  </div>
</template>

<script>
export default {

}
</script>
<style scooped>
#layout-sign-in {
    width: 100vw;
    height: 100vw;
    position: absolute;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    background-color: wheat;
    width: 400px;
    height: 200px;
    border-radius: 50px;
}
.input-sign-in {
    height: 40px;
    margin: 0 20px 0 20px;
    text-align: center;

}
.circle {
    
}



</style>