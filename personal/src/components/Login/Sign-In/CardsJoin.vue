<template>
<div id="layout-cardsjoin">
  <div id="button-return" class="button-changeimg " @click="returnImage()"> &lt; </div>
  <div class="card-deck">
    <div class="card" v-if="imagem == 0">
      <img src="@/assets/imagem.png" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">Card title 1</h5>
        <p class="card-text">Texto 1</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div class="card" v-else-if="imagem == 1">
      <img src="@/assets/imagem.png" class="card-img-top" alt="@/assets/imagem.png">
      <div class="card-body">
        <h5 class="card-title">Card title 2</h5>
        <p class="card-text">Texto 2</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div class="card" v-else>
      <img src="@/assets/welcome-2.png" class="card-img-top" alt="@/assets/imagem.png">
      <div class="card-body">
        <h5 class="card-title">Card title 3</h5>
        <p class="card-text">Texto 3</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>

  <div id="button-next" class="button-changeimg" @click="nextImage()"> &gt; </div>
</div>
</template>
<script>
export default {
    data() {
        return {
            imagem: 0
        }
    },
    methods: {
        nextImage() {
            this.imagem == 2 ? this.imagem = 0 : this.imagem++
        },
        returnImage() {
            this.imagem == 0 ? this.imagem = 2 : this.imagem--
        }
    }
}
</script>
<style scooped>
#layout-cardsjoin {
    display: flex;
    position: relative;
    flex-direction: row;
    width: 700px;
    background: gray;
    justify-content: center;
}
#button-next {
  right: 0;
}
#button-return {
  left: 0;
}
.card-body {
  position: relative;
}
.button-changeimg {
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  cursor: pointer;
  justify-content: center;
  text-align: center;
  font-size: 2em;
  line-height: 60px;
  border-radius: 30px;
  font-family: 'Times New Roman', Times, serif;
  height: 60px;
  width: 60px;
  z-index: 1;
  margin-top: auto;
  margin-bottom: auto;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}
</style>