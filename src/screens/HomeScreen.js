import {View, Text, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Colors} from '../assets';
import {useDispatch, useSelector} from 'react-redux';
import propertyActions from './redux/actions/propertyActions';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const properties = useSelector(state => state.properties.properties);

  useEffect(() => {
    dispatch(propertyActions('Gandhinagar', ['pgHostel'], 1));
  }, []);

  return (
    <SafeAreaProvider
      style={{
        flex: 1,
        backgroundColor: Colors.backgroundColor,
      }}>
      <View style={{flex: 1}}>
        <FlatList
          data={properties}
          renderItem={({item}) => (
            <View>
              <Text style={{color: Colors.Black}}>
                {item.propertyList.name}
              </Text>
              {/* Add more property details as needed */}
            </View>
          )}
          keyExtractor={item => item.propertyId.toString()}
        />
      </View>
    </SafeAreaProvider>
  );
};

export default HomeScreen;
