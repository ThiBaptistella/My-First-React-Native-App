import React from 'react';
import { StyleSheet, View } from 'react-native';
// import { StackNavigator } from 'react-navigation';
import Login from './src/components/login/Login';
import Profile from './src/components/profile/Profile';
//
// const Application = StackNavigator ({
//   Home: { screen: Login },
//   Profile: { screen: Profile }
// }, {
//   navigationOptions: {
//     header: false,
//   }
// });


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
