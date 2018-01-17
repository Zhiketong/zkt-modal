<template>
  <div class="content">
    <p>{{message}}</p>
    <input type="text" class="form-control" v-model="value" v-if="prompt">
  </div>
</template>
<script>
  export default {
    name: 'ModalBody',
    props: {
      message: {
        type: String,
        default: '确定这么做吗？'
      },
      prompt: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        value: ''
      }
    }
  }
</script>
