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
> justifyContent属性定义了浏览器如何分配顺着父容器主轴的弹性（flex）元素之间及其周围的空间，默认为flex-start。

> * flex-start(default) 从行首开始排列。每行第一个弹性元素与行首对齐，同时所有后续的弹性元素与前一个对齐。
> * flex-end 从行尾开始排列。每行最后一个弹性元素与行尾对齐，其他元素将与后一个对齐。
> * center 伸缩元素向每行中点排列。每行第一个元素到行首的距离将与每行最后一个元素到行尾的距离相同。
> * space-between 在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素与行首对齐，每行最后一个元素与行尾对齐。
> * space-around 在每行上均匀分配弹性元素。相邻元素间距离相同。每行第一个元素到行首的距离和每行最后一个元素到行尾的距离将会是相邻元素之间距离的一半。
> test

![flexWrap](./images/justifyContent.jpg)