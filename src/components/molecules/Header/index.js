import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconBackDark, IconBackWhite} from '../../../assets';
import {Gap, Button} from '../../atoms';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils';
import DarkProfile from './DarkProfile';

const Header = ({type, mode, onPress, title, profession}) => {
  if (type === 'dark-profile') {
    return (
      <DarkProfile title={title} profession={profession} onPress={onPress} />
    );
  }
  return (
    <View style={styles.container(mode)}>
      <Button
        type="icon-only"
        icon={mode === 'dark' ? 'back-white' : 'back-dark'}
        onPress={onPress}
      />
      <Text style={styles.title(mode)}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: mode => ({
    paddingHorizontal: 16,
    paddingVertical: 30,
    flexDirection: 'row',
    backgroundColor: mode === 'dark' ? colors.secondary : colors.white,
    alignItems: 'center',
  }),
  title: mode => ({
    flex: 1,
    textAlign: 'center',
    fontFamily: fonts[600],
    fontSize: 20,
    color: mode === 'dark' ? colors.white : colors.text.primary,
  }),
});
