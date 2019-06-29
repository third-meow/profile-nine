<template>
	<div id="app">
		<main>
			<NavBar></NavBar>
			<Stocklist v-bind:stocks="stocks"></Stocklist>
		</main>
	</div>
</template>

<script>
import Stocklist from '../components/Stocklist.vue';
import NavBar from '../components/NavBar.vue'

export default {
  name: 'app',
  components: {
    Stocklist,
		NavBar,
  },
	data: function () { 
		return {
			stocks: [{name:'nothing here', price:47}, {name: 'what am i doing with my life?', price:12}],
		};
	},
	mounted() {
		//api call to get list of stock
		this.fetchStocks();
	},
	methods: {
		fetchStocks() {
			let uri = window.location.href.split('?');
			if (uri.length < 2) {
				//to profile specifyed
			} else {
				let uriKeyValPairs= uri[1].split('&');
				uriKeyValPairs.forEach((keyValPair) => {
					let [key, val] = keyValPair.split('=');
					if (key == 'prfl') {
						this.profileName = val;
					}
				});

				this.$http.get(`/api/profile/${this.profileName}`)
					.then(response => reponse.json())
					.then((result) => {
						this.stocks = result.stocks;
					}).catch((err) => {
						console.log(err);
					});
			}
		}
	}
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

Stocklist {
	width: 60%;
	float: center;
}

</style>
