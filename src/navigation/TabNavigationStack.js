import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors, FontSize} from '../assets';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Fonts} from '../assets/fonts/Fonts';
import {IMAGES} from '../assets/Image';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import CityExpert from '../screens/CityExpert';
import HomeStack from './HomeStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const TabViews = ({title, images, focused}) => {
    return (
      <View
        style={[
          focused ? styles.selectedTabContainer : styles.unselectedTabContainer,
          {
            flexDirection: 'column',
          },
        ]}>
        <Image
          style={{
            height: wp(5),
            width: wp(5),
            alignSelf: 'center',
            tintColor: focused ? Colors.orange : Colors.lightgray,
          }}
          source={images}
        />
        <Text
          style={[
            styles.textStyle,
            {color: focused ? Colors.Black : Colors.lightgray},
          ]}>
          {title}
        </Text>
      </View>
    );
  };

  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false}}>
      <Tab.Screen
        name="Home"
        // component={HomeScreen}
        children={() => <HomeStack />}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('HomeScreen', {screen: 'HomeScreen'});
          },
        })}
        options={({route}) => {
          let tabBarVisible = true;
          const route1 = getFocusedRouteNameFromRoute(route);
          if (route1 !== undefined && route1 !== 'HomeScreen') {
            tabBarVisible = false;
          }
          return {
            headerShown: false,
            tabBarVisible: tabBarVisible,
            tabBarStyle:
              tabBarVisible == false ? {display: 'none'} : {height: hp(7)},
            tabBarIcon: ({focused}) => {
              if (tabBarVisible === false) {
                return null;
              }
              return (
                <TabViews title="Home" images={IMAGES.HOME} focused={focused} />
              );
            },
          };
        }}
      />
      <Tab.Screen
        name="expert"
        component={() => <HomeStack />}
        // component={CityExpert}
        listeners={({navigation}) => ({
          tabPress: e => {
            console.log('navigation', navigation);
            e.preventDefault();
            navigation.navigate('CityExpert', {screen: 'CityExpert'});
          },
        })}
        options={({route}) => {
          let tabBarVisible = true;
          const route1 = getFocusedRouteNameFromRoute(route);
          if (route1 !== undefined && route1 !== 'CityExpert') {
            tabBarVisible = false;
          }
          return {
            headerShown: false,
            tabBarVisible: tabBarVisible,
            tabBarStyle:
              tabBarVisible == false ? {display: 'none'} : {height: hp(8)},
            tabBarIcon: ({focused}) => {
              if (tabBarVisible === false) {
                return null;
              }
              return (
                <TabViews
                  title="City Expert"
                  images={IMAGES.CITY_EXPERT}
                  focused={focused}
                />
              );
            },
          };
        }}
      />
      <Tab.Screen
        name="Saved"
        component={() => <HomeStack />}
        // component={CityExpert}
        listeners={({navigation}) => ({
          tabPress: e => {
            console.log('navigation', navigation);
            e.preventDefault();
            navigation.navigate('SavedScreen', {screen: 'SavedScreen'});
          },
        })}
        options={({route}) => {
          let tabBarVisible = true;
          const route1 = getFocusedRouteNameFromRoute(route);
          if (route1 !== undefined && route1 !== 'SavedScreen') {
            tabBarVisible = false;
          }
          return {
            headerShown: false,
            tabBarVisible: tabBarVisible,
            tabBarStyle:
              tabBarVisible == false ? {display: 'none'} : {height: hp(8)},
            tabBarIcon: ({focused}) => {
              if (tabBarVisible === false) {
                return null;
              }
              return (
                <TabViews
                  title="Saved"
                  images={IMAGES.HEART}
                  focused={focused}
                />
              );
            },
          };
        }}
      />
      <Tab.Screen
        name="Investors"
        component={() => <HomeStack />}
        // component={CityExpert}
        listeners={({navigation}) => ({
          tabPress: e => {
            console.log('navigation', navigation);
            e.preventDefault();
            navigation.navigate('Investors', {screen: 'Investors'});
          },
        })}
        options={({route}) => {
          let tabBarVisible = true;
          const route1 = getFocusedRouteNameFromRoute(route);
          if (route1 !== undefined && route1 !== 'Investors') {
            tabBarVisible = false;
          }
          return {
            headerShown: false,
            tabBarVisible: tabBarVisible,
            tabBarStyle:
              tabBarVisible == false ? {display: 'none'} : {height: hp(8)},
            tabBarIcon: ({focused}) => {
              if (tabBarVisible === false) {
                return null;
              }
              return (
                <TabViews
                  title="Investors"
                  images={IMAGES.BAG}
                  focused={focused}
                />
              );
            },
          };
        }}
      />
      <Tab.Screen
        name="Profile"
        component={() => <HomeStack />}
        // component={CityExpert}
        listeners={({navigation}) => ({
          tabPress: e => {
            console.log('navigation', navigation);
            e.preventDefault();
            navigation.navigate('Profile', {screen: 'Profile'});
          },
        })}
        options={({route}) => {
          let tabBarVisible = true;
          const route1 = getFocusedRouteNameFromRoute(route);
          if (route1 !== undefined && route1 !== 'Profile') {
            tabBarVisible = false;
          }
          return {
            headerShown: false,
            tabBarVisible: tabBarVisible,
            tabBarStyle:
              tabBarVisible == false ? {display: 'none'} : {height: hp(8)},
            tabBarIcon: ({focused}) => {
              if (tabBarVisible === false) {
                return null;
              }
              return (
                <TabViews
                  title="Profile"
                  images={IMAGES.PROFILE}
                  focused={focused}
                />
              );
            },
          };
        }}
      />
    </Tab.Navigator>
  );
};

const TabNavigationStack = () => {
  const BottomTabStack = createNativeStackNavigator();

  return (
    <>
      <BottomTabStack.Navigator>
        <BottomTabStack.Screen
          name="TabScreen"
          options={{headerShown: false}}
          component={BottomTab}
        />
      </BottomTabStack.Navigator>
    </>
  );
};

export default TabNavigationStack;

const styles = StyleSheet.create({
  selectedTabContainer: {
    alignItems: 'center',
    marginTop: wp(3),
  },
  unselectedTabContainer: {
    marginTop: wp(3),
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  textStyle: {
    color: Colors.lightgray,
    fontFamily: Fonts.BOLD,
    fontSize: FontSize.normalText,
    alignContent: 'center',
    marginBottom: wp(2),
  },
});
