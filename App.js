import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native'

import StackNavigator from './src/navigation/stackNavigator'

import {Store} from './src/redux/store'
import {Provider} from 'react-redux'

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator /> 
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({
  
});

export default () => {
  return <Provider store={Store} >
    <App/>
  </Provider>
}
