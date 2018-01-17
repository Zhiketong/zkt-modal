# 直客通对话框组件

> 直客通对话框组件,用于复杂弹窗界面交互

## Usage

```javascript
var vm = this.$modal({
  propsData: {
    title: '标题',
    data: {
      prompt: true
    }
  },
  components: {
    // ModalBody: {render: () => ''}
  }
})
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
