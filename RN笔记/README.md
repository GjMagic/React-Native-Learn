# 初识RN的组件

## 一、组件声明方式
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

## 二、RN组件生命周期

```javascript
class LifeCycle extends Component {
  // 初始化组件
  constructor(props) {
    super(props)

  }

  // 组件将要挂载
  componentWillMount() {
    console.log(---'componentWillMount'---)
  }

  // 组件挂载完成
  componentDidMount() {
    console.log(---'componentDidMount'---)
  }

  // 组件将要接收属性
  componentWillReceiveProps(nextProps) {
    console.log(---'componentWillReceiveProps'---)
  }

  // 是否更新组件
  shouldComponentUpdate(nextProps, nextState) {
    console.log(---'shouldComponentUpdate'---)
    return true;
  }

  // 组件将要更新
  componentWillUpdate(nextProps, nextState) {
    console.log(---'componentWillUpdate'---)
  }

  // 组件更新完毕
  componentDidUpdate(prevProps, prevState) {
    console.log(---'componentDidUpdate'---)
  }

  // 组件将要卸载
  componentWillUnmount() {
    console.log(---'componentWillUnmount'---)
  }

  render() {
    return (
      <View>
        <Text>LifeCycle</Text>
      </View>
    )
  }
}
```