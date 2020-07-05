import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';

const Splash = () => {
  return (
    <View>
      <ILLogo styles={{width: 100}} />
      <Text>My Doctor</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
