// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/
import * as React from 'react';
import {Button, View, Text, SafeAreaView} from 'react-native';
import {Card, SearchBar} from 'react-native-elements';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const FirstPage = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}>
      <View style={{width: '100%', height: 30}}>
        <SearchBar placeholder="Type Here..." />
      </View>
      <ScrollView style={{marginTop: '10%'}}>
        <View style={{justifyContent: 'flex-start'}}>
          <TouchableOpacity>
            <Card
              wrapperStyle={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Card.Image
                containerStyle={{height: 80, width: 50}}
                source={{
                  uri:
                    'https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/article_images/2020/05/19/Shah%20Rukh%20Khan-2085361793-1572690045.jpg?itok=u7qzcCCa',
                }}></Card.Image>
              <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
                <Card.Title>Sharukh khan</Card.Title>
                <Text>
                  Location : <Text>Mumbai</Text>
                </Text>
                <Text>
                  Blood Group : <Text>A+</Text>
                </Text>
              </View>
              <View style={{height: 2}}>
                <Button
                  title="more details"
                  onPress={() => navigation.navigate('ThirdPage')}
                />
              </View>
            </Card>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FirstPage;
