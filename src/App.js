import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import FlashMessage from 'react-native-flash-message';
const App = () => {
  console.log('My Doctor Apps');
  return (
    <NavigationContainer>
      <Router />
      <FlashMessage position="bottom" />
    </NavigationContainer>
  );
};

export default App;
