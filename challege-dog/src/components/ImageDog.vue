<template>
	<b-col id="layout-image" cols="6" class="mx-auto m-2 text-center">
		<div id="layout-namedog" 
			:style="`color: ${getColorText};font-family: ${getFont};`"
			>
				{{getNameDog}}
			</div>
		<b-img 
		:src="image" 
		rounded="circle" 
		fluid 
		class="mx-auto m-0 p-0"
		/>
	</b-col>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
	data() {
		return {
			image: 'https://sunrivermetalworks.com/wp-content/uploads/2016/07/SMW566-metal-dog-welcome-sign.jpg	'
		}
	},
	computed: {
		...mapGetters([
			'getBreed',
			'getNameDog',
			'getFont',
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
	position: absolute;
	left: 50%;
	transform: translateX(-50%);

}
</style>