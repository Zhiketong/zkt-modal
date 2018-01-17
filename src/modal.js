import Vue from 'vue'
import Modal from './Modal.vue'

const ModalConstructor = Vue.extend(Modal)

function modal (opts) {
  var instance = new ModalConstructor(opts)
  instance.$mount()
  document.body.appendChild(instance.$el)
  return instance
}

function install (opts) {
  Vue.prototype.$modal = modal
  Vue.modal = modal
}

export default {
  install
}
