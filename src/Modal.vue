<template>
<div class="component-modal modal fade in">
  <div class="modal-backdrop fade in" @click.self="close"></div>
  <div class="modal-dialog" :class="'modal-'+size">
    <button class="close" @click="close">
      <span aria-hidden="true">×</span>
    </button>
    <div class="modal-content">
      <header class="modal-header" v-if="title" ref="header">{{title}}</header>
      <content class="modal-body">
        <modal-body v-bind="data" ref="body"></modal-body>
      </content>
      <footer class="modal-footer" ref="footer">
        <button class="btn btn-primary" @click="$emit('postive')">确定</button>
        <button class="btn btn-default" @click="$emit('negative')">取消</button>
      </footer>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Modal',
  components: {
    ModalBody: {render: () => ''}
  },
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    },
    size: {
      type: String,
      default: 'md'
    },
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    close (data) {
      this.$destroy()
    }
  },
  mounted () {
    document.body.classList.add('modal-open')
  },
  destroyed () {
    document.body.classList.remove('modal-open')
    this.$el.remove()
  }
}
</script>

<style>
.component-modal {
  display: block;
}
.modal .modal-backdrop {
  z-index: 0;
}
.modal .close {
  position: relative;
  z-index: 1;
  margin-right: 8px;
  margin-top: 6px;
}
.modal .modal-full {
  width: 100%;
  height: 100%;
  margin: 0;
  border-radius: 0;
}
.modal .modal-full .modal-content {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0;
}
.modal .modal-body {
  display: block;
}
</style>
