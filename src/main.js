import Vue from 'vue'
import App from './App.vue'
import VueModalBootstrap from './modal'

Vue.component('custom-content', {
  template: '<div @click="$emit(\'click\')">{{text}}</div>', // 自定义组件定义
  props: {
    text: {
      type: String,
      default: ''
    }
  }
})

Vue.use(VueModalBootstrap)

new Vue({
  el: '#app',
  render: h => h(App)
})
