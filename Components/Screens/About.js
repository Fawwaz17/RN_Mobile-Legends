import React, {Component} from 'react';
import {Platform, StyleSheet, View, Image, ScrollView, TouchableOpacity, Alert, Text} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,
  List, ListItem, Thumbnail, Left, Body, Right, Footer, FooterTab, Button, Icon
} from 'native-base';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

export default class About extends React.Component {
  static navigationOptions = { header: null };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Font}>Raihan Athaya Fawwaz</Text>
        <Text style={styles.Font}>XI RPL 3</Text>
        <Text style={styles.Font}>32</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#488b8f',
  },
  Font: {
    fontFamily : 'Helvetica',
    color : 'white',
    fontSize : 14,
  }
});
