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
  ScrollView,
  FlatList,
} from 'react-native';

import Card from "./Card/Card";
import Header from "./Header/Header";

import CardData from "./Card/mockData";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.scrollView}>
          <FlatList 
            data={CardData}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
              let { source, content, time } = item;
              return (
                <Card
                  {...{source, content, time}}
                />
              )
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  scrollView: {

  }
});
