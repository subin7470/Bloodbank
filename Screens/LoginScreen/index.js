import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Button, ThemeProvider, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
const LoginScreen = () => {
  return (
    <View
      style={{flex: 1, backgroundColor: '#DC1E1E', justifyContent: 'center'}}>
      <View
        style={{
          justifyContent: 'center',
          height: '30%',
          margin: '10%',
          backgroundColor: 'rgba(0, 0,0,.3)',
          borderRadius: 10,
        }}>
        <Input
          placeholder="Email-ID"
          leftIcon={{type: 'font-awesome', name: 'user'}}
        />
        <Input
          placeholder="Password"
          leftIcon={{type: 'font-awesome', name: 'lock'}}
        />
      </View>
      <View style={{margin: '10%', marginTop: '2%'}}>
        <Button
          title="Login-IN"
          raised={true}
          titleStyle={{color: 'grey'}}
          buttonStyle={{backgroundColor: 'white'}}
        />
      </View>
      <View style={{margin: '10%', marginTop: '-5%'}}>
        <Button
          title="Create Account"
          raised={true}
          titleStyle={{color: 'grey'}}
          buttonStyle={{backgroundColor: 'white'}}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
