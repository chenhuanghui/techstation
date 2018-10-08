// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import jQuery from 'jquery'
window.jQuery = jQuery
window.$ = jQuery

import LibGlobal from './lib-global'

Vue.config.productionTip = false
Vue.use(LibGlobal)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
