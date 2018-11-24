import React, {Component} from 'react';
import {Platform, StyleSheet, View, TextInput,TouchableOpacity, Image} from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';
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
			 <Button
			 success
			 style={styles.Button}
			 onPress={() => {this.props.navigation.navigate('Home')}}>
            <Text style={styles.Font}>Login</Text>
        </Button>
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
  	backgroundColor : '#1d5464',
		alignItems : 'center',
		marginTop : 10,
		marginLeft : 150,
  },
	Font : {
		fontFamily : 'calibri',
		fontSize : 14,
  }
});
