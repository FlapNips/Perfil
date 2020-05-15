<template>
<div id="layout-main-login"  class="row">

		<Register class="
		mx-auto
		col-12
		col-sm-6
		col-md-6
		col-lg-12
		"/>
		<Effect class="
		col-12
		text-center
		mx-auto
		align-middle
		"/>

</div>
</template>

<script>
import Effect from './EffectRegister.vue'
import Register from './Register.vue'

export default {
	components: {
		Effect,
		Register,
	},
}
</script>
<style scoped>
#layout-main-login {
	position        : relative;
	background-color: var(--first-color);
	display         : block;
	border-radius   : 20px;
	background-color: var(--first-color);
	margin          : 0;
	padding         : 20px;
	height          : max-content;
	z-index         : 1;
}

</style>