<template>
<div id="layout-main-login"  class="row">
		<Effect class="
		col-12
		text-center
		mx-auto
		align-middle
		"/>

		<Login class="
		mx-auto
		col-12
		col-sm-6
		col-md-6
		col-lg-12
		"/>

		<Register class="mx-auto"/>

</div>
</template>

<script>
import Effect from './Effect.vue'
import Login from './Login.vue'
import Register from './Register.vue'

export default {
	components: {
		Effect,
		Login,
		Register
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