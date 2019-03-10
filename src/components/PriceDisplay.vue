<template>
	<div class="PriceDisplay">
		<h2>{{ price }}</h2>
		<div class="price-chart">
			<canvas id="priceOverTime"></canvas>
		</div>
	</div>
</template>
<script>
import Chart from 'chart.js'

export default {
	name: 'PriceDisplay',
  data: function () {
		return {
			symb: '',
			price: 'loading..',
			historicPrices: []
		}
  },
  mounted() {
    this.FetchPrice();
		this.DisplayGraph();
  },
  methods: {
		DisplayGraph() {
			new Chart(document.getElementById("priceOverTime"), {
				type: 'line',
				data: {
					labels: this.historicPrices.map(x => x[0]),
					datasets: [{
						data: this.historicPrices.map(x => x[1]),
					}]
				}
			});
		},
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
						this.historicPrices = result.sort();
						this.DisplayGraph();
					}).catch((err) => {
						console.log(err);
					});
			}
    },
  },
};
</script>

<style>

.price-chart {
	display: inline-block;
	width: 80%;
}

</style>

