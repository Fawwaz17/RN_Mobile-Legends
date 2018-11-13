import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = { navBarHidden : true};
  render() {
    return (
      <View style={styles.container}>
        <Text>Ini Home</Text>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  static navigationOptions = { header: null };
  render() {
    return (
      <View style={styles.container}>
        <Text>Ini Profile</Text>
      </View>
    );
  }
}

export default createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen : ProfileScreen, header : null}
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#488b8f',
  },
  welcome: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    color : '#fff'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
