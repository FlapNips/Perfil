<template>
  <div ref="background" class="ripple-background">
    <div id="layout-login">
      <div id="context-login">
        <JoinBar> </JoinBar>
        <div id="context-row">
          <CardsJoin></CardsJoin>
          <TextRight></TextRight>
        </div>
      </div>
      <button id="botao" @click="teste">dorminhoca</button>
    </div>
  </div>
</template>
<script>
import JoinBar from './SignIn/JoinBar.vue'
import CardsJoin from './SignIn/CardsJoin.vue'
import TextRight from './SignIn/TextRight.vue'

export default {
    components: {
        JoinBar,
        CardsJoin,
        TextRight
    },
    data() {
        return {
          tamanho: 501
        }
    },
    methods: {
      teste() {
        return console.log('seila')
      }
    }
}
</script>
<style scooped>
#layout-login {
    display       : flex;
    flex-direction: column;
    width         : 100vw;
    height        : 100vh;
    position      : relative;
    margin        : 0;
    background    : #ffffff;
}
#botao {
  clear: both;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  z-index: 10;

}
#context-login {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
}
#context-row {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 10px;
    text-align: center;
    justify-content: center;
}

</style>