// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui'
import Vuex from 'vuex'
import store from './store'

Vue.use(Mint)
Vue.use(Vuex)

Vue.config.productionTip = false


import '../node_modules/mint-ui/lib/style.min.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
