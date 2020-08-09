import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  IconDoctorActive,
  IconDoctor,
  IconMessage,
  IconHospital,
  IconMessageActive,
  IconHospitalActive,
} from '../../../assets';
import {fonts, colors} from '../../../utils';
import {Gap} from '..';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Doctor') {
      return active ? <IconDoctorActive /> : <IconDoctor />;
    }
    if (title === 'Messages') {
      return active ? <IconMessageActive /> : <IconMessage />;
    }
    if (title === 'Hospitals') {
      return active ? <IconHospitalActive /> : <IconHospital />;
    }
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Gap height={2} />
      <Text style={styles.title(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: active => ({
    fontSize: 10,
    fontFamily: fonts[600],
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    lineHeight: 14,
  }),
});
