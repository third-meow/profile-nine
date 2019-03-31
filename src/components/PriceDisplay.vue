<template>
	<div class="PriceDisplay">
		<h2>{{ price }}</h2>
		<div id="price-chart">
			<PriceChart :chart-data="historicPrices"></PriceChart>
		</div>
	</div>
</template>
<script>
import PriceChart from '../components/PriceChart.vue'

export default {
	name: 'PriceDisplay',
  data: function () {
		return {
			symb: '',
			price: 'loading..',
			historicPrices: {}
		}
  },
	components: {
		PriceChart,
	},
  mounted() {
    this.FetchPrice();
  },
  methods: {
    FetchPrice() {
			let uri = window.location.href.split('?');
			if (uri.length < 2) {
				this.symb = 'No symb specifyed';
				this.price = 'No stock specifyed';
			} else {
				let uriKeyValPairs= uri[1].split('&');
				uriKeyValPairs.forEach((keyValPair) => {
					let [key, val] = keyValPair.split('=');
					if (key == 'symb') {
						this.symb = val;
					}
				});

				this.$http.get(`/api/stockprice/${this.symb}`)
					.then(response => response.json())
					.then((result) => {
						if (result['adjusted close'] === '') {
							this.price = `${this.symb} price is unknown`;
						} else {
							this.price = result['adjusted close'];
						}
					}).catch((err) => {
						console.log(err);
					});

				this.$http.get(`/api/historic_prices/${this.symb}`)
					.then(response => response.json())
					.then((result) => {
						result.sort()

						this.historicPrices = {
							labels: result.map(x => x[0]),
							datasets: [{
								data: result.map(x => x[1]),
							}],
						};

					}).catch((err) => {
						console.log(err);
					});
			}
    },
  },
};
</script>

<style>

#price-chart {
	display: inline-block;
	width: 70%;
	height: 30%;
}

</style>

