<template>
	<div id="app">
		<main>
			<NavBar></NavBar>
			<h1>Opps no pages to be found at this here address</h1>
		</main>
	</div>
</template>

<script>
import NavBar from '../components/NavBar.vue'

export default {
  name: 'app',
  components: {
		NavBar,
  },
};
</script>

<style>
@import '../assets/css/style.css';
@import '../assets/css/nes.min.css';


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
