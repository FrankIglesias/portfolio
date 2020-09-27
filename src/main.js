import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueFullPage from 'vue-fullpage.js'
import '@babel/polyfill'

Vue.use(VueFullPage);

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
