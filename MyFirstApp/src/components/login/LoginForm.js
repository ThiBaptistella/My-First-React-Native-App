/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar,
  AsyncStorage
} from 'react-native';

export default class LoginForm extends Component {
  constructor(props){
    super(props);
    //set the initial state value none
    this.state = {
      email: '',
      password: '',
    }
  }
// run before render and check if the client is loged
  componentDidMount(){
    this._loadInitialState().done();
  }

  _loadInitialState = async () => {
    //get user name from storage and check if is loged
    var value = await AsyncStorage.getItem('user');
    if( value !== null){
      this.props.navigation.navigate('Profile');
    }
  }
  // buttom func , post values to the database and move to profile page
  login = () => fetch('http://localhost:3000/api/users', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({email:'email', password:'password'})
}).then((response) => {
        console.log('Response', response);
      }).then((data) => {
        console.log(data); // returns undefined :(
        resolve(data);
      }).catch((error) => {
        console.log('Error', error); // no error is returned
        reject(error);
      })
  // render component
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize='none'
          placeholderTextColor='rgba(255, 255, 255, 0.6)'
          onChangeText={(email) => this.setState({email})}
        />
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder='Password'
          placeholderTextColor='rgba(255, 255, 255, 0.6)'
        />
        <TouchableOpacity
          style={styles.buttomContainer}
          onPress={this.login}>
          <Text style={styles.buttomText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 30
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    paddingVertical: 15,
    marginBottom: 20,
    color: '#fff',
    paddingHorizontal: 10,
    borderRadius: 10
  },
  buttomContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    marginBottom: 40,
    paddingVertical: 15,
    borderRadius: 10
  },
  buttomText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18

  }
});
