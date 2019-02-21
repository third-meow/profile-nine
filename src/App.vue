<template>
	<div id="app">
		<main>
			<NavBar></NavBar>

			<div v-if="homePage">
				<SymbolField></SymbolField>
			</div>
			<div v-else-if="pricePage">
				<PriceDisplay></PriceDisplay>
			</div>
			<div v-else>
				<!--<PageNotFound></PageNotFound>-->
			</div>
		</main>
	</div>
</template>

<script>
import SymbolField from './components/SymbolField.vue';
import NavBar from './components/NavBar.vue'
import PriceDisplay from './components/PriceDisplay.vue'
//import PageNotFound from './components/PageNotFound.vue'

export default {
  name: 'app',
  components: {
    SymbolField,
		NavBar,
		PriceDisplay,
		//PageNotFound
  },
	data: function () {
		return {
			homePage: false,
			pricePage: false,
		};
	},
	mounted() {
		if (window.location.pathname === '/') {
			this.homePage = true;
		}

		if (/price.*/.test(window.location.pathname)) {
			this.pricePage = true;
		}
	},
};
</script>

<style>
@import 'assets/css/style.css';
@import 'assets/css/nes.min.css';


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
