import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    breed : '',
    nameDog: '',
    colorText: 'black',
    font: 'Chelsea Market',
    imageDog: ''
  },
  mutations: {
    setBreed(state, payload) {
      state.breed = payload
    },
    setNameDog(state, payload) {
    state.nameDog = payload
    },
    setColorText(state, payload) {
    state.colorText = payload
    },
    setFont(state, payload) {
    state.font = payload
    },
    setImageDog(state, payload) {
    state.imageDog = payload
    },
    setResetAll(state){
      state.breed = '';
      state.nameDog = '';
      state.colorText = 'black';
      state.font = 'Chelsea Market';
      state.imageDog = 'https://sunrivermetalworks.com/wp-content/uploads/2016/07/SMW566-metal-dog-welcome-sign.jpg';
    }
  },
  getters: {
    getBreed(state) {
      return state.breed
    },
    getNameDog(state) {
      return state.nameDog
    },
    getColorText(state) {
      return state.colorText
    },
    getFont(state) {
      return state.font
    },
    getImageDog(state) {
      return state.imageDog
    }
  },
})
