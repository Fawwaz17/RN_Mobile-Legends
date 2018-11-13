/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Login from './Components/Login.js';
import HomeScreen from './Components/HomeScreen.js';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; 

const AppNavigator = createStackNavigator ({
    Login: {
    screen: Login,
  },
  Home: {
    screen: HomeScreen,
  },
}, {
    initialRouteName: 'Login',
});

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
