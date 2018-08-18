import Modal from './Modal.vue'

var ModalConstructor

function modal (opts, Component) {
  var obj = {
    propsData: opts,
    components: {
      ModalBody: Component
    }
  }
  var instance = new ModalConstructor(obj)
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
