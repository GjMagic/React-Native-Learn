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
      <View style={[style.container, style.other]}>
        <View style={style.subBox}>
          <Text style={style.text}>adasd</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: { 
    width: 200, 
    height: 200, 
    backgroundColor: 'green',
    borderRadius: 10,
    marginHorizontal: 30,
    marginVertical: 30,
    padding: 30,
    borderWidth: 3,
    borderColor: 'red',
    borderStyle: 'solid',
    /* 以下只支持ios */
    shadowColor: 'red',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: .35,
    shadowRadius: 14,
    elevation: 300  /* 只支持android 5.0以上 */
  },
  other: {
    marginLeft: 20,
    backgroundColor: '#00ff66'
  },
  subBox: {
    height: 50,
    backgroundColor: 'red'
  },
  text: {
    color: '#fff',
    fontWeight: '500'
  }
})