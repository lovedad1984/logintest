import Vue from 'vue'
import App from './App.vue'

import vuetify from './plugins/vuetify';

import router from "./routes/index";
import store from "./store/index";

Vue.config.productionTip = false
Vue.use(vuetify);

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
