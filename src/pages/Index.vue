<template>
	<div id="app">
		<main>
			<NavBar></NavBar>
			<SymbolField></SymbolField>
		</main>
	</div>
</template>

<script>
import SymbolField from '../components/SymbolField.vue';
import NavBar from '../components/NavBar.vue'

export default {
  name: 'app',
  components: {
    SymbolField,
		NavBar,
  },
};
</script>

<style>
@import '../assets/css/style.css';

/*body {
  margin: 0;
	background-image: linear-gradient(var(--main-bg-color), var(--main-text-color));
}*/

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
