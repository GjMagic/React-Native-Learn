# RN中按钮使用详解

> * TouchableWithoutFeedback：响应用户的点击事件，如果你想在处理点击事件的同时**不显示任何视觉反馈**，使用它是个不错的选择。
> * TouchableHighlight：在TouchableWithoutFeedback的基础上添加了当按下时 **背景会变暗** 的效果。
> * TouchableOpacity：相比TouchableHighlight在按下去会使背景变暗的效果，TouchableOpacity会在用户手指按下时**降低按钮的透明度**，而不会改变背景的颜色。
> * TouchableNativeFeedback：在Android上还可以使用TouchableNativeFeedback，它会在用户手指按下时形成类似**水波纹**的视觉效果。注意，**此组件只支持Android**。

## 一、TouchableWithoutFeedback使用详解
> TouchableWithoutFeedback一个Touchable系列组件中最基本的一个组价，只响应用户的点击事件不会做任何UI上的改变，在使用的过程中需要特别留意。

### TouchableWithoutFeedback常用的属性

#### 1、onPress function
> 当触摸操作结束时调用，但如果被取消了则不调用（譬如响应者被一个滚动操作取代）。

```jsx
<TouchableWithoutFeedback
  onPress={()=> {
      this.setState({count: this.state.count+1})
  }}
>
  <View style={styles.button}>
    <Text style={styles.buttonText}>
        我是TouchableWithoutFeedback,单击我
    </Text>     
  </View> 
</TouchableWithoutFeedback> 
<Text style={styles.text}>您单击了:{this.state.count}次</Text>
```

#### 2、onLongPress function
> 当用户长时间按压组件(长按效果)的时候调用该方法。

```jsx
<TouchableWithoutFeedback
  onPress={()=> {
    this.setState({count: this.state.count + 1})
  }}
  onLongPress={()=> {
    this.setState({countLong: this.state.countLong + 1})
    Alert.alert(
      '提示',
      '确定要删除吗?',
      [
        {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: '确实', onPress: () => console.log('OK Pressed')},
      ]
    )
  }}
>
  <View style={styles.button}>
    <Text style={styles.buttonText}>
      我是TouchableWithoutFeedback,单击我
    </Text>     
  </View> 
</TouchableWithoutFeedback> 
<Text style={styles.text}>您单击了:{this.state.count}次</Text> <Text style={styles.text}>您长按了:{this.state.countLong}次</Text>
```

#### 3、disabled bool
> 如果设为true，则禁止此组件的一切交互。

#### 4、onPressIn function与onPressOut function
> 这两个方法分别是当用户开始点击按钮时与点击结束后被回调。

## 二、TouchableHighlight使用详解
> 手指按下的时候，该视图的不透明度会降低，同时会看到相应的颜色(视图变暗或者变亮)

### TouchableHighlight所扩展出来的属性

#### 1、activeOpacity number
> 通过activeOpacity来设置TouchableHighlight 被按下时的不透明度,它的默认不透明度为0.85

#### 2、underlayColor color
> 我们可以通过underlayColor 属性来设置TouchableHighlight 被按下去的颜色，默认状态下为black黑色

#### 3、onHideUnderlay function
> * 当衬底(也就是上文讲到的最外层的View)被隐藏的时候调用。
> * 心得，通常情况下，当手指结束点击时衬底会被隐藏。

#### 4、onShowUnderlay function
> * 当衬底(也就是上文讲到的最外层的View)显示的时候调用。
> * 心得，通常情况下，当手指刚开始点击时衬底会显示。

#### 5、style View#style
> 因为TouchableHighlight 的最外层个添加了一个View，所以我们可以设置这个View的样式来做出一个形形色色的按钮。

```jsx
<TouchableHighlight
  style={}
  activeOpacity={0.7}
  underlayColor='green'
  onHideUnderlay={()=>{
    this.setState({text:'衬底被隐藏'})
  }}
  onShowUnderlay={()=>{
    this.setState({text:'衬底显示'})
  }}
  onPress={()=>{

  }}
>
  <View style={styles.button}>
    <Text style={styles.buttonText}>
      TouchableHighlight
    </Text>     
  </View> 
</TouchableHighlight> 
<Text style={styles.text}>{this.state.text}</Text>
```

## 三、TouchableOpacity使用详解
> 这些扩展相比TouchableHighlight 少了一个额外的颜色变化。它是通过在按下去改变视图的不透明度来表示按钮被点击的。

### TouchableOpacity所扩展出来的属性

#### 1、activeOpacity number
> * 同 TouchableHighlight 的activeOpacity。
> * 另外我们也可以通过TouchableOpacity的setOpacityTo(value, duration)方法来**动态修改**TouchableOpacity被按下去的不透明度。

## 四、TouchableNativeFeedback使用详解
>为了支持Android5.0新增的触控反馈，React Native加入了TouchableNativeFeedback 组件，TouchableNativeFeedback 在TouchableWithoutFeedback 所支持的属性的基础上增加了按下去的**水波纹**效果。我们可以通过background 属性来自定义原生触摸操作反馈的背景。

### TouchableNativeFeedback所扩展出来的属性

#### 1、background backgroundPropType
> 决定在触摸反馈的时候显示什么类型的背景。它接受一个有着type属性和一些基于type属性的额外数据的对象。推荐使用以下的静态方法之一来创建这个对象：

> 1、TouchableNativeFeedback.SelectableBackground() - 会创建一个对象，表示安卓主题默认的对于被选中对象的背景。
> 2、TouchableNativeFeedback.SelectableBackgroundBorderless() - 会创建一个对象，表示安卓主题默认的对于被选中的无边框对象的背景。只在Android API level 21+适用。
> 3、TouchableNativeFeedback.Ripple(color, borderless) - 会创建一个对象，当按钮被按下时产生一个涟漪状的背景，你可以通过color参数来指定颜色，如果参数borderless是true，那么涟漪还会渲染到视图的范围之外。这个背景类型只在Android API level 21+适用也就是Android5.0或以上设备。

```jsx
<TouchableNativeFeedback
  onPress={()=>{
    this.setState({count: this.state.count + 1})
  }}
  background={TouchableNativeFeedback.SelectableBackground()}>
  <View style={}>
    <Text style={}>TouchableNativeFeedback</Text>     
  </View> 
</TouchableNativeFeedback> 
<Text style={styles.text}>{this.state.text}</Text>
```