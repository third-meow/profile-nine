
/* eslint-disable no-new */
/* eslint-disable no-undef */
/* eslint-disable no-console */
new Vue({
  el: '#app',
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

});
