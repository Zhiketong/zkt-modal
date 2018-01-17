import Modal from './Modal.vue'

var ModalConstructor

function modal (opts) {
  var instance = new ModalConstructor(opts)
  instance.$mount()
  document.body.appendChild(instance.$el)
  return instance
}

function install (Vue, opts) {
  ModalConstructor = Vue.extend(Modal)
  Vue.prototype.$modal = modal
  Vue.modal = modal
}

export default install
