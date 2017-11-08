<template>
  <div id="app">
    <button class="btn btn-success" @click="modal">modal</button>
    {{modals}}
    <modal v-for="(modal, key) in modals" v-bind="modal" @close="close(modal)" :key="key"></modal>
  </div>
</template>

<script>
import Modal from './Modal.vue'

export default {
  name: 'app',
  components: {
    Modal
  },
  data () {
    return {
      modals: []
    }
  },
  methods: {
    modal () {
      this.modals.push({
        title: 'title',
        message: 'message',
        prompt: true,
        onClose (data) {
          console.log(data)
        }
      })
    },
    close (modal) {
      this.modals.splice(this.modals.indexOf(modal), 1)
    }
  },
  mounted () {
    this.$root.$el.appendChild(document.createElement('modal'))
  }
}
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
