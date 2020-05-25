<template>
	<div id="app" class="m-0 p-0">
		<div id="background-image" />
		<router-view />
	</div>
</template>
<script>

</script>
<style lang="scss">


	@import url("https://fonts.googleapis.com/css2?family=Balsamiq+Sans&family=Chelsea+Market&family=Inconsolata&family=Lobster&family=Teko:wght@300&display=swap");
	#background-image {
		position: absolute;
		top: 0;
		left: 0c;
		height: 100vh;
		width: 100vw;
		background-size: cover;
		opacity: 0.5;
		background-image: url("https://avante.biz/wp-content/uploads/Dogs-Wallpapers/Dogs-Wallpapers-052.jpg");
	}
	#app {
		position: relative;
	}
</style>