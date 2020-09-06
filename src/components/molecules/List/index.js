import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {
  DummyDoctor2,
  DummyDoctor1,
  DummyDoctor3,
  IconContinue,
  IconProfile,
  IconLanguage,
  IconRate,
  IconHelp,
  IconStar,
} from '../../../assets';
import {fonts, colors} from '../../../utils';
import {TouchableOpacity} from 'react-native-gesture-handler';

const List = ({id, name, pic, msg, type, onpress, icon}) => {
  const ICON = () => {
    if (icon === 'profile') {
      return <IconProfile />;
    }
    if (icon === 'language') {
      return <IconLanguage />;
    }
    if (icon === 'rate') {
      return <IconRate />;
    }
    if (icon === 'help') {
      return <IconHelp />;
    }
    return <IconProfile />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onpress}>
      {icon ? <ICON /> : <Image source={pic} style={styles.avatar} />}
      <View style={styles.content(icon)}>
        <Text style={styles.textHead}>{name}</Text>
        <Text style={styles.textBody}>{msg}</Text>
      </View>
      {type === 'next' && <IconContinue />}
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 16,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: icon => ({
    flex: 1,
    marginLeft: icon ? 16 : 0,
  }),
  avatar: {
    width: 66,
    height: 66,
    marginRight: 16,
  },
  textHead: {
    fontSize: 18,
    fontFamily: fonts[600],
    color: colors.text.default,
  },
  textBody: {
    fontSize: 14,
    fontFamily: fonts.normal,
    color: colors.text.secondary,
  },
});
