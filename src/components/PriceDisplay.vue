<template>
	<div class="AppPrice">
		<h2>{{ price }}</h2>
	</div>
</template>

<script>
export default {
	name: 'PriceDisplay',
  data: function () {
		return {
			symb: '',
			price: 'loading..',
		}
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
			}
    },
  },
};
</script>

<style>
color: var(--main-text-color);

</style>

