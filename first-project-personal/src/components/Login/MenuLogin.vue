<template>
<div id="layout-menu-login">
	<div class="menu-content-align">
		LIBERTY
	</div>
		<div id="layout-login-menu" class="menu-content-align">
			<router-link to="/login" id="button-menu-login" tag="button">ENTRAR</router-link>
			<router-link to="/register" id="button-menu-register" tag="button">REGISTRAR</router-link>
		</div>
</div>
</template>

<script>
export default {

}
</script>
<style scooped>
#layout-menu-login{
	display        : flex;
	justify-content: space-around;
	position       : relative;
	width          : 100%;
	height         : 50px;
	background     : cadetblue;
	margin-left    : auto;
	margin-right   : auto;
}
.menu-content-align {
	justify-content: center;
	line-height    : 50px;
	margin-right   : 20px;
	margin-left    : 20px;
}
#button-menu-login {
	position : absolute;
	right    : 150px;
	height   : 20px;
	margin   : 10px;
	transform: translateY(25%);
}
#button-menu-register {
	position       : absolute;
	right          : 50px;
	justify-content: center;
	transform      : translateY(25%);
	height         : 20px;
	margin         : 10px;
}
</style>