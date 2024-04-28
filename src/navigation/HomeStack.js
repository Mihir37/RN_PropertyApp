import {View, Text} from 'react-native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CityExpert from '../screens/CityExpert';
import SavedScreen from '../screens/SavedScreen';
import Investors from '../screens/Investors';
import Profile from '../screens/Profile';

const HStack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <View style={{flex: 1}}>
      <HStack.Navigator initialRouteName="HomeScreen">
        <HStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <HStack.Screen
          name="CityExpert"
          component={CityExpert}
          options={{headerShown: false}}
        />
        <HStack.Screen
          name="SavedScreen"
          component={SavedScreen}
          options={{headerShown: false}}
        />
        <HStack.Screen
          name="Investors"
          component={Investors}
          options={{headerShown: false}}
        />
        <HStack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
      </HStack.Navigator>
    </View>
  );
};

export default HomeStack;
