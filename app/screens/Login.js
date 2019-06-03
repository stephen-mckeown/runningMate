
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create(global.styles);


class LoginScreen extends Component { 

  render() {
    return (
      <View style={styles.container}>
      

      <ImageBackground source={require('../images/loginImage.png')} style={{ width: '100%', height: '100%' }}>
        <View style={{ flex: 1, paddingTop: 10, alignItems: 'center' }}>
          <KeyboardAvoidingView style={styles.loginContainer} behavior="padding" enabled>
           
              <View>
               
                <View style={{ padding: 6 }}>
                  <TextInput
                    ref={(c) => this._usernameInput = c}
                    style={{ height: 40, width: 280, backgroundColor: '#dcdad9', opacity: 0.9, paddingHorizontal: 10, color: 'black', borderRadius: 10 }}
                    keyboardType="default"
                    keyboardAppearance="default"
                    selectionColor="#ffffff"
                    placeholder="Username"
                  
                  />
                </View>
                <View style={{ padding: 6 }}>
                  <TextInput
                    ref={(c) => this._passwordInput = c}
                    style={{ height: 40, width: 280, backgroundColor: '#dcdad9', opacity: 0.9, paddingHorizontal: 10, color: 'black', borderRadius: 10 }}
                    keyboardType="default"
                    keyboardAppearance="default"
                    selectionColor="#ffffff"
                    placeholder="Password"
                    
                   
                  />
                </View>
                <View>
                  <TouchableOpacity
                    style={styles.loginScreenButton}
                    underlayColor='#fff'
                    onPress={() => this.props.navigation.navigate('Plan')}
                  >
                    <Text style={styles.submitText}>Sign in</Text>
                  </TouchableOpacity>
                </View>
              </View>
         
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
      </View>
    );
  }
}

export default LoginScreen;

