import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyDoctor1, IconStar} from '../../../assets';
import {fonts, colors} from '../../../utils';

const RatedDoctor = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor1} style={styles.avatar} />
      <View style={styles.doctorInfo}>
        <Text style={styles.doctor}>Alexa Rachel</Text>
        <Text style={styles.profession}>Pediarician</Text>
      </View>
      <View style={styles.rate}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
      </View>
    </View>
  );
};

export default RatedDoctor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    marginRight: 12,
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
  rate: {
    flexDirection: 'row',
  },
  doctor: {
    fontSize: 16,
    fontFamily: fonts[600],
    color: colors.text.default,
  },
  profession: {
    fontSize: 12,
    fontFamily: fonts.normal,
    color: colors.text.secondary,
    fontSize: 12,
  },
  doctorInfo: {
    flex: 1,
  },
});
