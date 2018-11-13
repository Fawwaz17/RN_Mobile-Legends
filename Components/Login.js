import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, TextInput,TouchableOpacity, Image} from 'react-native';
import { createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; 

export default class Login extends Component<Props> {
	static navigationOptions = { header: null };
  render() {
    return (
      <View style={styles.container}>
      <Image
         style={styles.Img}
         source={require('/ML3/Assets/Logo.png')}
        />
      <TextInput
          style={{height: 40, width : 250,marginTop:140, backgroundColor:'white'}}
          placeholder ="    Username"
          onChangeText={(username) => this.setState({username})}
        />
      <TextInput
          style={{height: 40, width : 250,marginTop:20, marginBottom:20, backgroundColor:'white'}}
          placeholder ="    Password"
          onChangeText={(password) => this.setState({password})}
        />
       <Button style={styles.Button}
          title="				Login				"
          onPress={() => {
           this.props.navigation.navigate('Home')}}
       />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#488b8f',
  },
  Img : {
      alignItems : 'center',
      width : 240,
      height : 120,
      marginTop : 120,
    },
  Button : {
  	backgroundColor : '#fff',
  	color : '#fff',
  	borderRadius : 10,
  }
});
