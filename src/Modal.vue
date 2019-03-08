<template>
<div class="component-modal modal fade in ">
  <div class="modal-backdrop fade in"></div>
  <div class="modal-dialog" :class="'modal-'+size">
    <button class="close" @click="close" v-if="closeable">
      <span aria-hidden="true">×</span>
    </button>
    <div class="modal-content">
      <header class="modal-header" v-if="title" ref="header">{{title}}</header>
      <content class="modal-body" v-if="message||prompt">
        <div class="message-content">
          <p v-if="message">{{message}}</p>
          <input type="text" class="form-control" v-model="inputValue" v-if="prompt">
        </div>
      </content>
      <modal-body  v-if="$options.components.ModalBody" v-bind="data" v-on="events" ref="body"></modal-body>
      <footer class="modal-footer" v-if="okText||cancelText" ref="footer">
        <button class="btn btn-primary" v-if="okText" @click="postive">{{okText}}</button>
        <button class="btn btn-default" v-if="cancelText" @click="negative">{{cancelText}}</button>
      </footer>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    },
    events: {
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
    },
    okText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    message: {
      type: String,
      default: ''
    },
    prompt: {
      type: Boolean,
      default: false
    },
    inputValue: {
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    callback: {
      type: Function,
      default () {
        return function () {}
      }
    },
    closeable: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    close () {
      this.callback(this.inputValue, 'close', this.$refs.body)
      this.$destroy()
    },
    postive () {
      this.callback(this.inputValue, 'postive', this.$refs.body)
      this.$emit('postive', this.inputValue)
      this.autoClose && this.$destroy()
    },
    negative () {
      this.callback(this.inputValue, 'negative', this.$refs.body)
      this.$emit('negative', this.inputValue)
      this.autoClose && this.$destroy()
    }
  },
  mounted () {
    document.body.classList.add('modal-open')
  },
  beforeDestroy () {
    this.$el.parentNode.removeChild(this.$el)
  },
  destroyed () {
    document.body.classList.remove('modal-open')
  }
}
</script>

<style>
.component-modal.modal {
  display: block;
  opacity: 0;
  animation: a-opacity 0.6s ease-in-out 0s ;
  animation-fill-mode: forwards;
}
@keyframes a-opacity {
  0%{opacity: 0;}
  100%{opacity: 1}
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
.modal .modal-content{
  transform: scale(0);
  animation: a-modal-content 0.3s ease-in-out 0.3s ;
  animation-fill-mode: forwards;
}
@keyframes a-modal-content {
  0%{transform: scale(0);}
  100%{transform: scale(1);}
}
.modal .modal-body {
  display: block;
}
</style>
