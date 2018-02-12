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
  View,
  Image
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {

    let { source, content, time } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.avatarWrap}>
          <Image 
            source={source}
            style={styles.avatar}
          />
        </View>
        <View style={styles.content}>
          <Text 
            style={styles.summary}
            numberOfLines={3}
            ellipsizeMode='tail' // 已省略号显示
          >
            {content}
          </Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 8,
    elevation: 3,
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginBottom: 20
  },
  avatarWrap: {
    marginRight: 16
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45/2
  },
  content: {
    flex: 1
  },
  summary: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '600',
    color: '#384347'
  },
  time: {
    marginTop: 10,
    color: '#999'
  }
});
