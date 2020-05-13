<template>
	<div id="layout-login" class="justify-content-center">
		<MainLogin id="MainLogin" class="
		col-sm
		col-md-3
		col-lg-3
		align-self-center
		m-3
		p-2
		"></MainLogin>
	</div>
</template>

<script>
import MainLogin from './MainLogin.vue'

export default {
	components: {
		MainLogin
	}
}
</script>

<style scooped>
#MainLogin {
	z-index: 2;
}
#layout-login {
	display       : flex;
	flex-direction : row;
	width          : 100vw;
	height         : 100vh;
	margin         : 0;
	overflow-y     : auto;
	justify-content: center;
	background-color: var(--first-color);
	z-index: -1;
}

</style>