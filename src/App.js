import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';

const App = () => {
  console.log('My Doctor Apps');
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
