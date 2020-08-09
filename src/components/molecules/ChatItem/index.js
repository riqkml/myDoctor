import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import User from './IsMe';
import Other from './Other';

const ChatItem = ({me}) => {
  if (me) {
    return <User />;
  }

  return <Other />;
};

export default ChatItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
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
    color: colors.text.default,
  },
  chatContent: {
    backgroundColor: colors.cardlight,
    padding: 12,
    paddingRight: 18,
    maxWidth: '70%',
  },
});
