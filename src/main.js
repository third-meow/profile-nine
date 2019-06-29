/* eslint-disable no-new */
/* eslint-disable no-undef */
import Vue from 'vue/dist/vue';
import VueResource from 'vue-resource';

import Index from './pages/Index.vue';
import Profile from './pages/Profile.vue';
import Price from './pages/Price.vue';
import PageNotFound from './pages/PageNotFound.vue';

Vue.use(VueResource);
Vue.config.devtools = true;


const routes = {
  data: {
    '/': Index,
    '/profile': Profile,
    '/price': Price,
  },

  bestFit(path) {
    if (this.data[path] !== undefined) {
      return this.data[path];
    }
    if (this.data[`/${path.split('/')[1]}`] !== undefined) {
      return this.data[`/${path.split('/')[1]}`];
    }
    return PageNotFound;
  },
};


new Vue({
  el: '#app',
  computed: {
    ViewComponent() {
      return routes.bestFit(window.location.pathname);
    },
  },
  render(h) {
    return h(this.ViewComponent);
  },
});
