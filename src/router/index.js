import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Splash,
  GetStarted,
  Register,
  Login,
  UploadPhoto,
  Doctor,
  Hospitals,
  ChooseDoctor,
  Chatting,
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Messages from '../pages/Messages';
import {BottomNavigator} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const mainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Doctor" component={Doctor} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="Hospitals" component={Hospitals} />
    </Tab.Navigator>
  );
};
const Router = () => {
  return (
    <Stack.Navigator initialRouteName="mainApp">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChooseDoctor"
        component={ChooseDoctor}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chatting"
        component={Chatting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="mainApp"
        component={mainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default Router;
