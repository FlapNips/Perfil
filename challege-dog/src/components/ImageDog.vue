@@ -0,0 +1,53 @@
<template>
	<b-col cols="6" class="mx-auto m-2 text-center">
		<div id="layout-namedog" 
			:style="`color: ${getColorText};font-family: ${getFont};`"
			>
				{{getNameDog}}
			</div>
		<b-overlay id="layout-image" :show="getLoading" class="d-inline-block" rounded="circle">
			<b-img 
			id="image-dog"
			:src="getImageDog" 
			rounded="circle" 
			class="mx-auto m-0 p-0"
			/>
		</b-overlay>
	</b-col>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
	computed: {
		...mapGetters([
			'getBreed',
			'getNameDog',
			'getFont',
			'getLoading',
			'getColorText',
			'getImageDog'
		]),
	},
}
</script>

<style scoped>
#layout-image {
  max-height: 50vh!important;
	font-size: 2em;
}
#layout-image > img {
  height: 40vh!important;
}
#layout-namedog {
	z-index: 3;
	position: absolute;
	font-size: 2em;
	left: 50%;
	transform: translateX(-50%);

}
#image-dog {
	max-width: inherit!important;
	max-height: inherit!important;
}
</style>