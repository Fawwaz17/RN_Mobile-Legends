import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  hm()
	{
		Alert.alert("More Page Soon")

	}
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>

      <TouchableOpacity onPress ={() =>{this.hm()}}>
        <Image
           style={styles.Img}
           source={require('/ML3/Assets/1.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress ={() =>{this.hm()}}>
        <Image
           style={styles.Img}
           source={require('/ML3/Assets/1.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress ={() =>{this.hm()}}>
        <Image
           style={styles.Img}
           source={require('/ML3/Assets/1.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress ={() =>{this.hm()}}>
        <Image
           style={styles.Img}
           source={require('/ML3/Assets/1.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress ={() =>{this.hm()}}>
        <Image
           style={styles.Img}
           source={require('/ML3/Assets/1.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress ={() =>{this.hm()}}>
        <Image
           style={styles.Img}
           source={require('/ML3/Assets/1.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress ={() =>{this.hm()}}>
        <Image
           style={styles.Img}
           source={require('/ML3/Assets/1.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress ={() =>{this.hm()}}>
        <Image
           style={styles.Img}
           source={require('/ML3/Assets/1.png')}
        />
      </TouchableOpacity>

      </View>
      </ScrollView>
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

export default class App extends Component<Props> {
	static navigationOptions = { header: null };
  render() {
    return (
			<BotNav/>
		);
	}
}

const BotNav = createBottomTabNavigator({
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
  Img : {
      alignItems : 'center',
      marginTop : 10,
      marginBottom : 10,
      width : 300,
      height : 74,
    },
});
