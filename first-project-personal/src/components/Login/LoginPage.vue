<template>
  <div id="layout-login">
	<div id="context-login">
		<MenuLogin/>
		<div id="context-center-login">
			<CardNews/>
			<TextRight/>
		</div>
	</div>
  </div>
</template>

<script>
import MenuLogin from './MenuLogin'
import CardNews from './CardNews'
import TextRight from './TextRight'

export default {
	components: {
		MenuLogin,
		CardNews,
		TextRight
	}
}
</script>

<style scooped>
#layout-login {
	display       : flex;
	flex-direction: column;
	width         : 100vw;
	min-width     : 1000px;
	height        : 100vh;
	background    : wheat;
}
#context-login {
	display       : flex;
	flex-direction: column;
	width         : 1000px;
	height        : 80%;
	margin        : 20px auto 0 auto;
}
#context-center-login{
	display       : flex;
	flex-direction: row;
	justify-content: space-between;
}
</style>