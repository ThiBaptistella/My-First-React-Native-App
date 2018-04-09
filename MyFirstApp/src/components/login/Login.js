/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';

import LoginForm from './LoginForm';


export default class Login extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../images/reactLogo.png')}
          />
          <Text style={styles.textLgoin}>Thiago's App made in react native</Text>
        </View>
        <View style={styles.inputForm}>
          <LoginForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101929'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: 30
  },
  textLgoin: {
    justifyContent: 'center',
    fontSize: 20,
    color: '#fff'
  },
  inputForm: {

  }
});
