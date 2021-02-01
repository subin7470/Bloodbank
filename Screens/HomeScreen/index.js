import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform,
} from 'react-native';
import {
  Button,
  ThemeProvider,
  Input,
  SearchBar,
  Card,
} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#DC1E1E',
        justifyContent: 'center',
      }}>
      <View style={{margin: '10%'}}>
        <SearchBar
          placeholder="Type Here..."
          lightTheme={true}
          round={true}
          containerStyle={{backgroundColor: 'white', borderRadius: 25}}
          inputContainerStyle={{height: 30}}
        />
      </View>
    </View>
  );
};
export default HomeScreen;
