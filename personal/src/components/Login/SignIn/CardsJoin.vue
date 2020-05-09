<template>
<div id="layout-cardsjoin">
  <div id="button-return" class="button-changeimg " @click="returnImage()"> &lt;</div>
  <div>
    <transation>
      <img name="card" :src="imageCurrent">
      <div>
        <h5>Card title 1</h5>
        <p>Texto 1</p>
        <p>Last updated 3 mins ago</p>
      </div>
    </transition>
    <div id="button-next" class="button-changeimg" @click="nextImage()"> &gt; </div>
  </div>
</div>
<script>

export default {
    data() {
        return {
            image: 0,
            images: [],
            titleImg: '',
            textImg: '',
        }
    },
    computed:{
        imageCurrent(){
          if(this.image == 0) {
            return require('@/assets/login-image1.png')
          } else if(this.image == 1) {
            return require('@/assets/login-image2.png')
          } else {
            return require('@/assets/login-image3.png')
          }
        }
    },
    methods: {
        nextImage() {
            this.image == 2 ? this.image = 0 : this.image++
            console.log(this.image)
        },
        returnImage() {
            this.image == 0 ? this.image = 2 : this.image--
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
.card-enter {
  opacity: 0;  
}
.card-enter-active {
  transition: opacity 2s;
}
.card-enter-to {
  opacity: 1;
}
.card-leave {
  opacity: 1;  
}
.card-leave-active {
  transition: opacity 2s;
}
.card-leave-to {
  opacity: 0;
}
</style>