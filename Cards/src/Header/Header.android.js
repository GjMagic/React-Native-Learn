import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

type Props = {};
export default class Header extends Component<Props> {
  render() {

    return (
      <View style={styles.container}>
        <StatusBar 
          barStyle='light-content' // StatusBar的字体颜色
          backgroundColor='transparent' // StatusBar的颜色透明
          translucent // 隐藏StatusBar的位置
        />
        <View style={styles.header}>
          <Text style={styles.text}>More23123</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 64,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111'
  },
});
