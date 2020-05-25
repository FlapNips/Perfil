<template>
	<div id="layout-main" class="m-0 mb-auto p-0">
		<b-row align-v="center" align-h="center" class="m-0 p-0">
			<!-- FORM -->
			<b-col cols="12" class="m-0 p-0">
				<ImageDog style="height: 20%"></ImageDog>
				<ImputForm style="height: 40%"></ImputForm>
			</b-col>
			<!-- SCREEN LOADING DB -->
			<div id="load-data" v-show="useDB" :class="useDB ? 'fade-in': 'fade-out'">
				<div class="mx-auto my-auto text-center">
					<div class>Deseja carregar os dados ?</div>
					<b-row>
						<b-button
							@click="loadDB(); useDB = false"
							class="alert-center col-4 m-2 my-auto mx-auto btn-success"
						>Sim</b-button>
						<b-button
							@click="setResetAll(); useDB = false"
							class="alert-center col-4 m-2 my-auto mx-auto btn-danger"
						>Não</b-button>
					</b-row>
				</div>
			</div>
		</b-row>
		<!-- SCREEN SAVE CONFIRMED -->
		<b-row id="save-confirmed" v-show="getSave" class="fade-in m-0 p-0 text-center">
			<b-col class="my-auto h-25">
				<b-img id="image-sucess"
				src="https://www.pinclipart.com/picdir/big/0-9831_icon-icone-simbols-simbolo-certo-clipart-clip-art.png"
				class="h-100"
				/>
				<div>Salvo com sucesso !</div>
				<b-button @click="setBack(true)" class="btn-warning">Voltar</b-button>
			</b-col>
		</b-row>
	</div>
</template>

<script>
import ImputForm from "@/components/LayoutInputForm.vue";
import ImageDog from "@/components/ImageDog.vue";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
	components: {
		ImputForm,
		ImageDog
	},
	data() {
		return {
			success: false,
			useDB: false
		};
	},
	computed: {
		...mapGetters([
			"getSave",
			"getBreed",
			"getInformationDog"
			])
	},
	methods: {
		...mapMutations([
			"setSave",
			"setInformationDog",
			"loadData",
			"setResetAll",
			"setBack"
		]),
		loadDB() {
			const json = localStorage.getItem("informationDog");
			const array = JSON.parse(json);
			if (Array.isArray(array)) {
				this.setInformationDog(array);
				this.loadData(array);
				console.log("O arquivo foi carregado :")
				console.log(array)
				console.log("Sendo salvo no dia :")
				console.log(array[0].date)
				console.log("e no horário : ")
				console.log(array[0].time)
			}
		}
	},
	created() {
		const json = localStorage.getItem("informationDog");
		const array = JSON.parse(json);
		if (Array.isArray(array)) {
			this.useDB = true;
		} else {
			this.setInformationDog([]);
		}
	}
};
</script>
<style scoped>
	#layout-main {
		background-position: center;
		background-repeat: no-repeat;

		background-size: cover;
		height: 100vh !important;
		width: 100vw !important;
	}
	#load-data {
		position: absolute;
		display: flex;
		top: 0;
		left: 0;
		z-index: 10;
		justify-content: center;
		text-align: center;
		background-color: rgba(228, 126, 53, 0.9);
		height: 100% !important;
		width: 100% !important;
	}
	#save-confirmed {
		position: absolute;
		background: green;
		top: 0;
		left: 0;
		z-index: 15;
		height: 100%;
		width: 100%;
	}
	.alert-center {
		position: relative;
		height: 2em;
	}
	.fade-in {
		animation: fade-in 1s cubic-bezier(0.39, 0.575, 0.565, 1) both;
	}
	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
</style>