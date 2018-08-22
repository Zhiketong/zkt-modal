<template>
  <div id="app">
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted () {
    var vm = this.$modal({
        title: '标题', // 弹窗标题
        size: 'sm', // 弹窗大小 默认为md
        message: '操作后无法撤销', // 提示信息
        prompt: true, // 是否有输入框 默认为false
        autoClose: false, // 是否自动关闭 默认为true
        okText: '好', // 确认按钮文案
        cancelText: '取消', // 取消按钮文案
        callback (value, type, vm) { // 操作后的回调函数 value是输入框值， type是操作按钮类型 close,postive,negative
          console.log(value, type)
        },
        events: {
          click () {
            console.log('click')
          }
        },
        data: {
          text: '这是自定义组件'
        }
      },
      {
        template: '<div @click="$emit(\'click\')">{{text}}</div>', // 自定义组件定义
        props: {
          text: {
            type: String,
            default: ''
          }
        }
      }
    )
    // 绑定确认按钮触发的事件
    // vm.$on('postive', (value) => {
    //   console.log('点击了确定', value)
    //   value && vm.$destroy()
    // })
    // // 绑定取消按钮触发的事件
    // vm.$on('negative', (value) => {
    //   console.log('点击了取消', value)
    //   vm.$destroy()
    // })
    // // 绑定关闭按钮触发的事件
    // vm.$on('close', (value) => {
    //   console.log('点击了关闭', value)
    //   vm.$destroy()
    // })
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
