
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

const styles = StyleSheet.create(global.styles);


class LoginScreen extends Component { 

  render() {
    return (
      <View style={styles.container}>
        <Text>Running App</Text>
        <Text>Login</Text>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Plan')}
        />
      </View>
    );
  }
}

export default LoginScreen;


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });