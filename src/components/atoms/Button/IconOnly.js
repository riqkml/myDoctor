import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconBackDark, IconBackWhite} from '../../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';

const IconOnly = ({onPress, icon}) => {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <IconBackDark />;
    }
    if (icon === 'back-white') {
      return <IconBackWhite />;
    }
    return <IconBackDark />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;

const styles = StyleSheet.create({});
