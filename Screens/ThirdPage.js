// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/

import * as React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';
import {Card, SearchBar} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
const ThirdPage = ({route, navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Card>
          <Card.Image
            source={{
              uri:
                'https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/article_images/2020/05/19/Shah%20Rukh%20Khan-2085361793-1572690045.jpg?itok=u7qzcCCa',
            }}></Card.Image>
          <Card.Divider />
          <View style={{alignItems: 'flex-start', margin: '5%'}}>
            <Card.Title style={{fontSize: 20}}>Sharukh khan</Card.Title>
            <Card.Title style={{fontSize: 14}}>Blood Group : A+</Card.Title>

            <Card.Title style={{fontSize: 14}}>
              Contact number : 8301086355{' '}
            </Card.Title>

            <Card.Title style={{fontSize: 14}}>Gender : male</Card.Title>
            <Card.Title style={{fontSize: 14}}>Age : 60 </Card.Title>
            <Card.Title style={{fontSize: 14}}>Location : mumbai </Card.Title>
          </View>
          <TouchableOpacity
            style={{
              height: 35,
              width: 120,
              backgroundColor: '#DC1E1E',
              justifyContent: 'center',
              borderRadius: 10,
              marginLeft: '5%',
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                marginLeft: '5%',
                fontSize: 16,
              }}>
              Give a Request
            </Text>
          </TouchableOpacity>
        </Card>
      </View>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Button
            onPress={() => navigation.navigate('FirstPage')}
            title="Go Back"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ThirdPage;
