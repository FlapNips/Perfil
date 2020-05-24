
<template>
	<b-col id="layout-form" cols="6" class="mx-auto p-4 m-0">
    <form @submit.prevent="setSave(getBreedConfirm)">
      <b-row>
        <b-col cols="6">
          <label for="layout-breed">
            Escolha a raça:
          </label>
          <b-form-input id="layout-breed" 
            required
            :state="getBreedConfirm"
            list="list-breed"
            v-model="onBreed"
            placeholder="ex: bulldog" 
            class="layout-form-class mb-2"/>
          <b-form-datalist id="list-breed" class="h-20" :options="getBreedsAPI"></b-form-datalist>
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
    </form>
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
      save: false
      } 
    },
    computed: {
      ...mapGetters([
          'getFont',
          'getNameDog',
          'getColorText',
          'getBreed',
          'getImageDog',
          'getInformationDog',
          'getBreedConfirm',
          'getBreedAPI',
          'getBreedsAPI'
      ]),
      onBreed: {
        get() {
          return this.getBreed
        },
        set(value) {
          this.setBreed(value)
          if(this.getBreedConfirm) {
            this.setLoading(true)
            this.$img.get(`${this.getBreed}/images/random`)
              .then(async res => {
                this.setImageDog(res.data.message)
              })
              .catch(error => {
                console.log(error)
              }).then(()=>this.setLoading(false))
            
          } else {
            this.setImageDog('https://sunrivermetalworks.com/wp-content/uploads/2016/07/SMW566-metal-dog-welcome-sign.jpg')
          }
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
        'setNameDog',
        'setBreedConfirm',
        'setBreedsAPI',
        'setImageDog',
        'setInformationDog',
        'setSave',
        'setLoading'
      ]),
    },
    created() {
      this.$http.get("list")
      .then(res => {
        this.setBreedsAPI(res.data.message)
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