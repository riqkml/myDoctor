import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {DummyUser} from '../../../assets';
import {colors, fonts} from '../../../utils';

const HomeProfile = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={DummyUser} style={styles.avatar} />
      <View style={styles.content}>
        <Text style={styles.name}>Shayna Melinda</Text>
        <Text style={styles.profession}>Product Designer</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  avatar: {width: 92, height: 92, borderRadius: 92 / 2, marginRight: 12},
  name: {
    fontSize: 20,
    fontFamily: fonts[600],
    color: colors.text.default,
  },
  profession: {
    fontFamily: fonts.normal,
    fontSize: 14,
    color: colors.text.secondary,
  },
  content: {
    justifyContent: 'center',
  },
});
