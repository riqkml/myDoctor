import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils';

const Input = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.field} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  field: {
    borderWidth: 1,
    borderColor: colors.input.border,
    borderRadius: 10,
    padding: 12,
  },
  label: {
    marginBottom: 6,
    fontFamily: fonts.normal,
    fontSize: 16,
    color: colors.text.secondary,
  },
});
