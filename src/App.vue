<template>
  <div id="app">
  </div>
</template>

<script>
import CustomComponent from './CustomComponent.vue'
export default {
  name: 'app',
  mounted () {
    var vm = this.$modal({
        title: '标题',
        size: 'sm',
        data: {
          prompt: true
        }
      },
      CustomComponent
    )
    vm.$on('postive', () => {
      console.log('点击了确定')
      var body = vm.$refs.body
      var value = body.value
      console.log(value)
      value&&vm.$destroy()
    })
    vm.$on('negative', () => {
      console.log('点击了取消')
      vm.$destroy()
    })
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
