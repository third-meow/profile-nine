<template>
	<div id="app">
		<main>
			<NavBar></NavBar>
			<PriceDisplay></PriceDisplay>
		</main>
	</div>
</template>

<script>
import PriceDisplay from '../components/PriceDisplay.vue';
import NavBar from '../components/NavBar.vue'

export default {
  name: 'app',
  components: {
    PriceDisplay,
		NavBar,
  },
};
</script>

<style>
@import '../assets/css/style.css';


body {
  margin: 0;
	background-image: linear-gradient(var(--main-bg-color), var(--main-text-color));
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--main-text-color);
}

main {
  text-align: center;
}

</style>
