<template>
  <div id="layout-card-news">
  <button id="button-return-img" @click="returnImage" class="btn-image"> 	&lt; </button>
    <img :src="require(`@/assets/CardsNews${image}.png`)"/>
    <h2>{{titleCurrent}}</h2>
    <p>{{loremCurrent}}</p>
    <h3>{{authorCurrent}}</h3>
    <button id="button-next-img" @click="nextImage" class="btn-image">	&gt; </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: 0,
    }
  },
  computed: {
    titleCurrent() {
      return `Título da imagem:${this.image}`
    },
    loremCurrent(){
      return `Conteudo da imagem:${this.image}`
    },
    authorCurrent() {
      return `Autor:${this.image}`
    }
  },
  methods: {
    nextImage() {
      this.image == 2 ? this.image = 0 : this.image++
    },
    returnImage() {
      this.image == 0 ? this.image = 2 : this.image--
    }
  }
}
</script>

<style scooped>
#layout-card-news {
  position: relative;
  background: cornflowerblue;
  width: 60%;
  text-align: center;
}
#button-return-img {
  left: 0;
}
#button-next-img {
  right: 0;
}
.btn-image {
  position: absolute;
  top: 0;
  border: 2px black solid;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  background-color: transparent;
  bottom: 0;
  height: 60px;
  width: 60px;
  margin-top: auto;
  margin-bottom: auto;

}
</style>