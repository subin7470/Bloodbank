// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/
import * as React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';
import {Card, SearchBar} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SecondPage = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Card>
          <Card.Image
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Tovino_Thomas_At_The_%E2%80%98Maari_2%E2%80%99_Press_Meet.jpg/220px-Tovino_Thomas_At_The_%E2%80%98Maari_2%E2%80%99_Press_Meet.jpg',
            }}>
            <TouchableOpacity>
              <Text style={{color: 'red', textAlign: 'right', margin: '2%'}}>
                Edit
              </Text>
            </TouchableOpacity>
          </Card.Image>
          <Card.Divider />
          <View style={{alignItems: 'flex-start', margin: '5%'}}>
            <Card.Title style={{fontSize: 20}}>Tovino</Card.Title>
            <Card.Title style={{fontSize: 14}}>Blood Group : B+</Card.Title>

            <Card.Title style={{fontSize: 14}}>
              Contact number : 8365086355{' '}
            </Card.Title>

            <Card.Title style={{fontSize: 14}}>Gender : male</Card.Title>
            <Card.Title style={{fontSize: 14}}>Age : 40 </Card.Title>
            <Card.Title style={{fontSize: 14}}>
              Location : Ernakulam{' '}
            </Card.Title>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  height: 35,
                  width: 120,
                  backgroundColor: '#DC1E1E',
                  justifyContent: 'center',
                  borderRadius: 10,
                  marginRight: '10%',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    marginLeft: '5%',
                    fontSize: 16,
                  }}>
                  Life Saved : 50
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  height: 35,
                  width: 120,
                  backgroundColor: '#DC1E1E',
                  justifyContent: 'center',
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    marginLeft: '5%',
                    fontSize: 16,
                  }}>
                  Request : 50
                </Text>
              </TouchableOpacity>
            </View>
          </View>
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
            title="Go Back"
            onPress={() => navigation.navigate('FirstPage')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SecondPage;
