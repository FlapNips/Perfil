<template>
	<div id="layout-main" class="m-0 mb-auto p-0">
		<b-row align-v="center" align-h="center" class="m-0 p-0">
			<b-col cols="12" class="m-0 p-0">
				<ImageDog style="height: 20%"></ImageDog>
				<ImputForm style="height: 40%" ></ImputForm>
			</b-col>
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
</style>