import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigationStack from './TabNavigationStack';

const NavigationStack = () => {
  const RootStack = createNativeStackNavigator();

  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Home"
        options={{headerShown: false}}
        component={TabNavigationStack}
      />
    </RootStack.Navigator>
  );
};

export default NavigationStack;
