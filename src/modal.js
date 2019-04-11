import Modal from './Modal.vue'

function install (Vue, opts = {}) {
  var ModalConstructor = Vue.extend(Modal, opts)
  Vue.prototype.$modal = modal
  Vue.modal = modal

  function modal (opts, Component) {
    var obj = {
      propsData: opts,
      components: {
        ModalBody: Vue.component(Component) || Component
      }
    }
    var instance = new ModalConstructor(obj)
    instance.$mount()
    document.body.appendChild(instance.$el)
    return instance
  }
}

export default install
