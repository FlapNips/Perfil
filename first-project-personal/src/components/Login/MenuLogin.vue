<template>
<div id="layout-menu-login">
	<div class="menu-content-align">LIBERTY</div>
		<div id="layout-login-menu" class="menu-content-align">
			<div>
			LOGIN:
			<input/>
			SENHA:
			<input/>
		</div>
	</div>
</div>
</template>

<script>
export default {

}
</script>
<style scooped>
#layout-menu-login{
	display: flex;
	justify-content: space-around;
	position: relative;
	width: 100%;
	height: 50px;
	background: cadetblue;
	margin-left: auto;
	margin-right: auto;
}
#layout-login-menu {
	right: auto;
}
.menu-content-align {
	justify-content: center;
	line-height: 50px;
}
</style>