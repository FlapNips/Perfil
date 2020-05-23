<template>
	<b-row class="m-1">
		<button @click="setResetAll(); image = getImageDog" class="btn btn-secondary mr-auto">Reiniciar</button>
		<button @click="saveDog()" type="submit" class="btn btn-secondary mx-auto">Salvar</button>
		<button @click="setImageDog = updateImage()" class="btn btn-secondary ml-auto">Atualizar</button>
	</b-row>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters([
			'getImageDog',
			'getBreed',
			'getImageDog'
		]),

	},
	asyncComputed: {
		async updateImage() {
			return await this.$img.get(`${this.getBreed}/images/random`)
			.then( res => {
				res.data.message
			});
		}
	},
	methods: {
		...mapMutations([
			'setImageDog',
			'setResetAll'
		]),

		ResetAll() {
			this.setResetAll
		},
		saveDog() {
		}
	}
}
</script>

<style>

</style>