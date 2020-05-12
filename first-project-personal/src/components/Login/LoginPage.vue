<template>
  <div id="layout-login">
	<div id="context-login">
		<MenuLogin/>
		<div id="context-center-login">
			<CardNews/>
			<TextRight/>
		</div>
	<Footer/>
	</div>
  </div>
</template>

<script>
import MenuLogin from './MenuLogin'
import CardNews from './CardNews'
import TextRight from './TextRight'
import Footer from '@/components/Footer.vue'

export default {
	components: {
		MenuLogin,
		CardNews,
		TextRight,
		Footer
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
	overflow-y: auto;
}
#context-login {
	display       : flex;
	flex-direction: column;
	width         : 1000px;
	height        : 80%;
	margin        : 20px auto 0 auto;
}
#context-center-login{
	display        : flex;
	flex-direction : row;
	margin-top     : 10px;
	justify-content: space-between;
	word-wrap: break-word;
}
</style>