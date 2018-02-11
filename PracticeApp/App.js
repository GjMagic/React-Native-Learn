/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={[style.container]}>
        <View style={style.subBox}>
          <Text style={style.text}>subBox1</Text>
        </View>
        <View style={style.subBox}>
          <Text style={style.text}>subBox2</Text>
        </View>
        <View style={style.subBox}>
          <Text style={style.text}>subBox3</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: { 
    display: 'flex',
    backgroundColor: 'skyblue',
    height: 500,
    flexDirection: 'column', // 子元素排列方式
    //justifyContent: 'flex-end'
    justifyContent: 'center', // 主轴对齐方式
    flexWrap: 'wrap', // 是否换行显示，默认nowrap
    alignItems: 'center', // 控制是否撑满父级，和侧轴对齐方式
    flex: 1 // 定义元素所占区域的比重
  },
  subBox: {
    backgroundColor: 'red',
    height: 50,
    alignSelf: 'center', // 控制单个子元素侧轴对齐方式
    flex: 1
  },
  text: {
    
  }
})