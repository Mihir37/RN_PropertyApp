import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import {Colors, FontSize} from './src/assets';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {IMAGES} from './src/assets/Image';
import {Fonts} from './src/assets/fonts/Fonts';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import CityExpert from './src/screens/CityExpert';
import NavigationStack from './src/navigation/NavigationStack';
import {Provider} from 'react-redux';
import store from './src/helpers/Store';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
