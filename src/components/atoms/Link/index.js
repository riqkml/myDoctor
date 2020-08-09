import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from '../../../utils';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Link = ({title, size, align, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.title(size, align)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  title: (size, align) => ({
    fontSize: size,
    fontFamily: fonts.normal,
    color: '#7D8797',
    textDecorationLine: 'underline',
    textAlign: align,
  }),
});
