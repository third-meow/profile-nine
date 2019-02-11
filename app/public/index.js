
/* eslint-disable no-new */
/* eslint-disable no-undef */
/* eslint-disable no-console */
new Vue({
  el: '#app',
  data: {
    BTCprice: 'BTC price not yet loaded',
  },
  mounted() {
    this.FetchBTCPrice();
  },
  methods: {
    FetchBTCPrice() {
      this.$http.get('/api/stockprice/BTC')
        .then(response => response.json())
        .then((result) => {
          if (result.price === '') {
            this.BTCprice = 'BTC price is unknown';
          } else {
            this.BTCprice = result.price;
          }
        }).catch((err) => {
          console.log(err);
        });
      // return 'BTC price is unavailable';
    },
  },

});
