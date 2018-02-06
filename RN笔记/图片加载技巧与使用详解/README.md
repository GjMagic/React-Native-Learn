# **图片加载技巧与使用详解**

## Image下的属性
> 1、**resizeMode** ('cover', 'contain', 'stretch', 'repeat', 'center') 
> 决定当组件尺寸和图片尺寸不成比例的时候如何调整图片的大小。

> * cover: 在保持图片宽高比的前提下缩放图片，直到宽度和高度都大于等于容器视图的尺寸（如果容器有padding内衬的话，则相应减去）。译注：这样图片完全覆盖甚至超出容器，容器中不留任何空白。
> * contain: 在保持图片宽高比的前提下缩放图片，直到宽度和高度都小于等于容器视图的尺寸（如果容器有padding内衬的话，则相应减去）。译注：这样图片完全被包裹在容器中，容器中可能留有空白
> * stretch: 拉伸图片且不维持宽高比，直到宽高都刚好填满容器。
> * repeat: 重复平铺图片直到填满容器。图片会维持原始尺寸。仅iOS可用。
> * center: 居中不拉伸。

### 1、如何使用静态图片资源
```jsx
export default class Hello extends Component {
  render() {
    return (
      <View>
        <Image 
          style={{width: 500, height: 200}}
          source={require('./qiqiu.png')}
          resizeMode=('center')
        />
      </View>
    )
  }
}
```

### 2、如何使用网络图片资源
> 显示网络图片资源时必须指定宽和高
```jsx
export default class Hello extends Component {
  render() {
    return (
      <View>
        <Image 
          style={{width: 100, height: 100}}
          source={{uri:'https://facebook.github.io/react/img/logo_small.png'}}
        />
      </View>
    )
  }
}
```

### 3、如何使用原生图片资源
> 指存在ios和android原生代码中的资源
```jsx
export default class Hello extends Component {
  render() {
    return (
      <View>
        <Image 
          style={{width: 100, height: 100}}
          source={{uri: 'ic_bike'}}
        />
      </View>
    )
  }
}
```

### 4、如何使用本地文件系统中的图片资源
```jsx
export default class Hello extends Component {
  render() {
    let { result } = this.state;
    let imgUrl = Platform.OS === 'android' ? 'file:///' + result : result;

    return (
      <View>
        <Image 
          style={{width: 100, height: 100}}
          source={{uri: imgUrl}}
        />
      </View>
    )
  }
}
```