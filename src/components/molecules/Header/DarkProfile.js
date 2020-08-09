import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button, Gap} from '../../atoms';
import {colors, fonts} from '../../../utils';
import {DummyDoctor1} from '../../../assets';

const DarkProfile = ({title, onPress, profession}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-white" onPress={onPress} />
      <View style={styles.wrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title2}>{profession}</Text>
      </View>
      <Image source={DummyDoctor1} style={styles.avatar} />
    </View>
  );
};

export default DarkProfile;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    flexDirection: 'row',
    backgroundColor: colors.secondary,
    alignItems: 'center',
  },
  avatar: {
    width: 56,
    height: 56,
  },
  wrapper: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    fontFamily: fonts[600],
    fontSize: 20,
    color: colors.white,
  },
  title2: {
    textAlign: 'center',
    fontFamily: fonts[600],
    fontSize: 14,
    color: colors.text.secondary,
  },
});
