<template>
    <div id="layout-cardsjoin">
        <button @click="removeImage()"> &lt; </button>
<div class="card-deck">
  <div class="card" v-if="imagem == 0">
    <img src="@/assets/imagem.png" class="card-img-top" 
    alt="@/assets/imagem.png">
    <div class="card-body">
      <h5 class="card-title">Card title 1</h5>
      <p class="card-text">Texto 1</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card" v-else-if="imagem == 1">
    <img src="@/assets/imagem.png" class="card-img-top" 
    alt="@/assets/imagem.png">
    <div class="card-body">
      <h5 class="card-title">Card title 2</h5>
      <p class="card-text">Texto 2</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card" v-else>
    <img src="@/assets/imagem.png" class="card-img-top" alt="@/assets/imagem.png">
    <div class="card-body">
      <h5 class="card-title">Card title 3</h5>
      <p class="card-text">Texto 3</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
<button @click="addImage()"> &gt; </button>
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
        addImage() {
            this.imagem == 2 ? this.imagem = 0 : this.imagem++
        },
        removeImage() {
            this.imagem == 0 ? this.imagem = 2 : this.imagem--
        }
    }
}
</script>
<style scooped>
#layout-cardsjoin {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    height: 60px;
    width: max-content;
    height: max-content;
    min-width: 400px;
    background: gray;
    justify-content: center;
}
</style>