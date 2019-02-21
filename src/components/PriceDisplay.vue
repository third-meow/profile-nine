<template>
	<div class="AppPrice">
		<h2>{{ price }}</h2>
	</div>
</template>

<script>
export default {
	name: 'AppPrice',
  data: function () {
		return {
			price: 'loading..',
		}
  },
  mounted() {
    this.FetchPrice();
  },
  methods: {
    FetchPrice() {
			let symb = window.location.pathname.split('/')[2];
			console.log(symb);
			this.$http.get(`/api/stockprice/${symb}`)
        .then(response => response.json())
        .then((result) => {
          if (result['adjusted close'] === '') {
						this.price = `${symb} price is unknown`;
          } else {
            this.price = result['adjusted close'];
          }
        }).catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
color: var(--main-text-color);

</style>

