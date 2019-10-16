// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import '@/style/main.scss'
import '@/style/vue-transition.scss'
import '@/style/animation.scss'
import bus from '@/plugin/bus'
import App from './App'
import router from './router'

Vue.use(bus)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
