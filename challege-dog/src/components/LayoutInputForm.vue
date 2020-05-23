<template>
	<b-col id="layout-form" cols="6" class="mx-auto p-4 m-0">
      <b-row>
        <b-col cols="6">
          <label for="layout-breed">
            Escolha a raça:
          </label>
          <b-form-input id="layout-breed" 
            required
            list="list-breed"
            v-model="onBreed"
            step="100"
            min="5"
            max="5"
            placeholder="ex: bulldog" 
            class="layout-form-class mb-2">
          </b-form-input>
          <b-form-datalist id="list-breed" class="h-20" :options="breedsAPI"></b-form-datalist>
        </b-col>
        <b-col cols="6">
          <label for="layout-namedog">
            Defina o nome:
          </label>
          <b-form-input id="layout-namedog"
            required
            v-model="onNameDog"
            placeholder="ex: Lupi" 
            class="layout-form-class mb-2"/>
        </b-col>
      </b-row>
      <ChooseColor/>
      <ChooseFont/>
      <Submit/>
	</b-col>
</template>

<script>
import ChooseColor from './InputForm/ChooseColor'
import ChooseFont from './InputForm/ChooseFont'
import Submit from './Submit'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  components: {
    ChooseColor,
    ChooseFont,
    Submit
  },

	data() {
		return {
			breedsAPI: [],
      } 
    },
    computed: {
      ...mapGetters([
          'getFont',
          'getNameDog',
          'getColorText',
          'getBreed'
      ]),
      onBreed: {
        get() {
          return this.getBreed
        },
        set(value) {
          this.setBreed(value)
        }
      },
      onNameDog: {
        get() {
          return this.getNameDog
        },
        set(value) {
          this.setNameDog(value)
        }
      },
    },
    methods: {
    ...mapMutations([
        'setBreed',
        'setNameDog'
      ]),
    },
    created() {
      this.$http.get("list")
      .then(res => {
        this.breedsAPI = res.data.message;
      }).catch(error => {
        console.log(error)
      })
    }
}
</script>
<style scoped>
#layout-form {
  background-color: rgb(168, 168, 168);
}
datalist {
  height: 200px!important;
}
</style>