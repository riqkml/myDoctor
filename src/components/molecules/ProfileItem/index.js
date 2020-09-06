import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const ProfileItem = ({head, text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{head}</Text>
      <Text style={styles.content}>{text}</Text>
    </View>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
  header: {
    fontSize: 14,
    color: colors.text.secondary,
    fontFamily: fonts.normal,
  },
  content: {
    fontSize: 16,
    color: colors.text.default,
    fontFamily: fonts.normal,
  },
});
