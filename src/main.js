import Vue from 'vue'
import App from './App.vue'
import VueModalBootstrap from './modal'

Vue.use(VueModalBootstrap)

new Vue({
  el: '#app',
  render: h => h(App)
})
