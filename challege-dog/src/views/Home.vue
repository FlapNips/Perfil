<template>
	<div id="layout-main" class="m-0 mb-auto p-0">
		<b-row align-v="center" align-h="center" class="m-0 p-0">
			<b-col cols="12" class="m-0 p-0">
				<ImageDog style="height: 20%"></ImageDog>
				<ImputForm style="height: 40%" ></ImputForm>
			</b-col>
<<<<<<< HEAD
				<div id="load-data" v-if="useDB">
					<div class="mx-auto my-auto text-center">
						<div class="">Deseja carregar os dados ?</div>
						<b-row>
							<b-button @click="loadDB(); useDB = false" class="alert-center col-4 m-2 my-auto mx-auto btn-success">
								Sim
							</b-button>
							<b-button @click="setResetAll(); useDB = false" class="alert-center col-4 m-2 my-auto mx-auto btn-danger">
								Não
							</b-button>
						</b-row>
					</div>
				</div>
=======
>>>>>>> parent of 6095cdb... Antes de colocar MDB
		</b-row>
	</div>
</template>

<script>
import ImputForm from "@/components/LayoutInputForm.vue";
import ImageDog from "@/components/ImageDog.vue"

export default {
	components: {
		ImputForm,
		ImageDog
	},
};
</script>
<style scoped>
#layout-main {
  background-position: center;
  background-repeat: no-repeat;
	
  background-size: cover;
	height: 100vh!important;
	width: 100vw!important;
}
<<<<<<< HEAD
#load-data {
	position: absolute;
	display: flex;
	top: 0;
	left: 0;
	z-index: 10;
	justify-content: center;
	text-align: center;
	background-color: rgba(228, 126, 53, 0.9);
	height: 100%!important;
	width: 100%!important;
}
#success {
	position: absolute;
	top: 0;
	left: 0;
	z-index: 10;
	height: 100%;
	width: 100%;

}
.alert-center {
	position: relative;
	height: 2em;
}
=======
>>>>>>> parent of 6095cdb... Antes de colocar MDB
</style>