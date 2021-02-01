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
const SignUpScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#DC1E1E',
        justifyContent: 'center',
      }}>
      <ScrollView
        style={{
          // justifyContent: 'center',

          margin: '10%',
          backgroundColor: 'rgba(0, 0,0,.3)',
          borderRadius: 10,
          padding: '5%',
        }}>
        <Input
          placeholder="Name"
          leftIcon={{type: 'font-awesome', name: 'user'}}
        />
        <Input
          placeholder="Phone Number"
          leftIcon={{type: 'font-awesome', name: 'phone'}}
        />
        <Input
          placeholder="Gender"
          leftIcon={{type: 'font-awesome', name: 'lock'}}
        />
        <Input
          placeholder="Location"
          leftIcon={{type: 'font-awesome', name: 'location-arrow'}}
        />
        <Input
          placeholder="Blood group"
          leftIcon={{type: 'font-awesome', name: 'group'}}
        />
        <Input
          placeholder="Password"
          leftIcon={{type: 'font-awesome', name: 'lock'}}
        />
        <Input
          placeholder="Comfirm Password"
          leftIcon={{type: 'font-awesome', name: 'lock'}}
        />
      </ScrollView>
      <View style={{}}>
        <View style={{margin: '10%', marginTop: '-5%'}}>
          <Button
            title="Sign-Up"
            raised={true}
            titleStyle={{color: 'grey'}}
            buttonStyle={{backgroundColor: 'white'}}
          />
        </View>
        <View style={{margin: '10%', marginTop: '-5%'}}>
          <Button
            title="Login-In"
            raised={true}
            titleStyle={{color: 'grey'}}
            buttonStyle={{backgroundColor: 'white'}}
          />
        </View>
      </View>
    </View>
  );
};
export default SignUpScreen;
