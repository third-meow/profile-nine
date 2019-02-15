<template>
	<div class="AppPrice">
		<h2>{{ price }}</h2>
	</div>
</template>

<script>
export default {
	name: 'AppPrice',
  data: {
    price: 'MSFT price not yet loaded',
  },
  mounted() {
    this.FetchMSFTPrice();
  },
  methods: {
    FetchMSFTPrice() {
      this.$http.get('/api/stockprice/MFST')
        .then(response => response.json())
        .then((result) => {
          if (result['adjusted close'] === '') {
            this.price = 'MFST price is unknown';
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
h1, h2 {
	font-weight: normal;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
}

a {
	color: #35495E;
}
</style>

