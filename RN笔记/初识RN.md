# 初识RN的组件

### 1、ES6方式(推荐)
>类似于React ES6类、继承来声明组件

```javascript
export default class Hello extends Component {
  render() {
    return (
      <Text>Hello<Text/>
    )
  }
}
```

### 2、ES5方式
>比较原始的es5方式声明组件

```javascript
var Hello = React.createClass({
  render() {
    return (
      <Text>Hello<Text/>
    )
  }
})

module.exports = Hello;
```

### 3、函数式
>无状态、不能使用this、无生命周期函数

```javascript
function Hello(props) {
  return (
    <Text>Hello{props.name}<Text/>
  )
}

module.exports = Hello
```