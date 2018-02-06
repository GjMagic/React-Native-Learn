# RN布局
>采用FlexBox布局

## 像素无关
>在RN中尺寸是没有单位的，它代表了设备独立像素。
>在android或ios上会被解析成相对应的单位。保证在不同手机屏幕上显示不会改变

```jsx
<View style={{ width: 100, height: 100 }}>
  <Text style={{fontSize: 16}}>尺寸</Text>
</View>
```

## Layout Props
>以下属性是React Native所支持的Flex属性。

### 一、父视图属性(容器属性)：
> * flexDirection enum('row', 'column','row-reverse','column-reverse')
> * flexWrap enum('wrap', 'nowrap')
> * justifyContent enum('flex-start', 'flex-end', 'center', 'space-between', 'space-around')
> * alignItems enum('flex-start', 'flex-end', 'center', 'stretch')

#### 1、flexDirection
> flexDirection属性定义了父视图中的子元素沿横轴或侧轴方向的排列方式。

> * row: 从左向右依次排列
> * row-reverse: 从右向左依次排列
> * column(default): 默认的排列方式，从上向下排列
> * column-reverse: 从下向上排列

![flexDirection](./images/flexDirection.jpg)

#### 2、flexWrap
> flexWrap enum('wrap', 'nowrap')
> flexWrap属性定义了子元素在父视图内是否允许多行排列，默认为nowrap。

> * nowrap flex的元素只排列在一行上，可能导致溢出。
> * wrap flex的元素在一行排列不下时，就进行多行排列。

```jsx
<View style={ {flexWrap:'wrap', flexDirection:'row'}>
  ...
</View>
```
![flexWrap](./images/flexWrap.jpg)

#### 3、justifyContent
> justifyContent属性定义了浏览器如何分配顺着父容器**主轴**的弹性（flex）元素之间及其周围的空间，默认为flex-start。

> * flex-start(default) 从行首开始排列。每行第一个弹性元素与行首对齐，同时所有后续的弹性元素与前一个对齐。
> * flex-end 从行尾开始排列。每行最后一个弹性元素与行尾对齐，其他元素将与后一个对齐。
> * center 伸缩元素向每行中点排列。每行第一个元素到行首的距离将与每行最后一个元素到行尾的距离相同。
> * space-between 在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素与行首对齐，每行最后一个元素与行尾对齐。
> * space-around 在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素到行首的距离和每行最后一个元素到行尾的距离将会是相邻元素之间距离的一半。

![justifyContent](./images/justifyContent.jpg)

#### 4、alignItems
> alignItems属性以与justify-content相同的方式在**侧轴**方向上将当前行上的弹性元素对齐，默认为stretch。

> * flex-start 元素向侧轴起点对齐。
> * flex-end 元素向侧轴终点对齐。
> * center 元素在侧轴居中。如果元素在侧轴上的高度高于其容器，那么在两个方向上溢出距离相同。
> * stretch 弹性元素被在侧轴方向被拉伸到与容器相同的高度或宽度。

![alignItems](./images/alignItems.jpg)

### 二、子视图属性：
> * alignSelf enum('auto', 'flex-start', 'flex-end', 'center', 'stretch')
> * flex number

#### 1、alignSelf
> alignSelf属性以属性定义了flex容器内被选中项目的对齐方式。注意：alignSelf 属性可重写灵活容器的 alignItems 属性。

> * auto(default) 元素继承了它的父容器的 align-items 属性。如果没有父容器则为 “stretch”。
> * stretch	元素被拉伸以适应容器。
> * center	元素位于容器的中心。
> * flex-start	元素位于容器的开头。
> * flex-end	元素位于容器的结尾。

![alignSelf](./images/alignSelf.jpg)

#### 2、flex
> flex 属性定义了一个可伸缩元素的能力，默认为0。

```jsx
<View style={ {flexDirection:'row', height:40, backgroundColor:"darkgray"} }>
  <View style={ {flex:1,backgroundColor:"darkcyan",margin:5}}>
    <Text style={ {fontSize:16}}>flex:1</Text>
  </View>
  <View style={ {flex:2,backgroundColor:"darkcyan",margin:5}}>
    <Text style={ {fontSize:16}}>flex:2</Text>
  </View>
  <View style={ {flex:3,backgroundColor:"darkcyan",margin:5}}>
    <Text style={ {fontSize:16}}>flex:3</Text>
  </View>          
</View>
```

![flex](./images/flex.jpg)

### 三、其他布局 in React Native
> 以下属性是React Native所支持的除Flex以外的其它布局属性。

#### 1、视图边框
> * borderBottomWidth number 底部边框宽度
> * borderLeftWidth number 左边框宽度
> * borderRightWidth number 右边框宽度
> * borderTopWidth number 顶部边框宽度
> * borderWidth number 边框宽度
> * border <Bottom	Left	Right	Top> Color 各方向边框的颜色
> * borderColor 边框颜色

#### 2、尺寸
> * width number
> * height number

#### 3、外边距
> * margin number 外边距
> * marginBottom number 下外边距
> * marginHorizontal number 左右外边距
> * marginLeft number 左外边距
> * marginRight number 右外边距
> * marginTop number 上外边距
> * marginVertical number 上下外边距

#### 4、内边距
> * padding number 内边距
> * paddingBottom number 下内边距
> * paddingHorizontal number 左右内边距
> * paddingLeft number 左内边距
> * paddingRight number 右内边距
> * paddingTop number 上内边距
> * paddingVertical number 上下内边距

#### 5、边缘
> * left number 属性规定元素的左边缘。该属性定义了定位元素左外边距边界与其包含块左边界之间的偏移。
> * right number 属性规定元素的右边缘。该属性定义了定位元素右外边距边界与其包含块右边界之间的偏移
> * top number 属性规定元素的顶部边缘。该属性定义了一个定位元素的上外边距边界与其包含块上边界之间的偏移。
> * bottom number 属性规定元素的底部边缘。该属性定义了一个定位元素的下外边距边界与其包含块下边界之间的偏移。

#### 6、定位(position)
> * absolute：生成绝对定位的元素，元素的位置通过 “left”, “top”, “right” 以及 “bottom” 属性进行规定。
> * relative：生成相对定位的元素，相对于其正常位置进行定位。因此，”left:20” 会向元素的 LEFT 位置添加 20 像素。