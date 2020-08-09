import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Other = () => {
  return (
    <View style={styles.container}>
      <View style={styles.chatContent}>
        <Text style={styles.text}>
          Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
        </Text>
      </View>
      <Text style={styles.time}>4.20 AM</Text>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  time: {
    color: colors.text.secondary,
    fontSize: 12,
    fontFamily: fonts.normal,
    marginTop: 8,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.normal,
    color: colors.white,
  },
  chatContent: {
    backgroundColor: colors.cardBlue,
    padding: 12,
    paddingRight: 18,
    maxWidth: '70%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
