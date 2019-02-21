/* eslint-disable no-new */
/* eslint-disable no-undef */
import Vue from 'vue/dist/vue';
import VueResource from 'vue-resource';
import App from './App.vue';

Vue.use(VueResource);
Vue.config.devtools = true;

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
