# 直客通对话框组件

> 直客通对话框组件,用于复杂弹窗界面交互

## Usage

```javascript
var vm = this.$modal({
    title: '标题', // 弹窗标题
    size: 'sm', // 弹窗大小 默认为md
    message: '操作后无法撤销', // 提示信息
    prompt: true, // 是否有输入框 默认为false
    autoClose: false, // 是否自动关闭 默认为true
    okText: '好', // 确认按钮文案
    cancelText: '取消', // 取消按钮文案
    callback (value, type) { // 操作后的回调函数 value是输入框值， type是操作按钮类型 close,postive,negative
      console.log(value, type)
    }
  },
  {
    template: '<div>这是自定义组件</div>' // 自定义组件定义
  }
)
// 绑定确认按钮触发的事件
vm.$on('postive', (value) => {
  console.log('点击了确定', value)
  value && vm.$destroy()
})
// 绑定取消按钮触发的事件
vm.$on('negative', (value) => {
  console.log('点击了取消', value)
  vm.$destroy()
})
// 绑定关闭按钮触发的事件
vm.$on('close', (value) => {
  console.log('点击了关闭', value)
  vm.$destroy()
})
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
