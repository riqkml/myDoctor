import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {
  DummyUser,
  IconCancelPhoto,
  IconMale,
  IconFemale,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Profile = ({name, desc, type, gender, avatars}) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={avatars} style={styles.avatar} />
        {type === 'edit' && <IconCancelPhoto style={styles.iconphoto} />}
        {gender === 'male' && <IconMale style={styles.iconphoto} />}
        {gender === 'female' && <IconFemale style={styles.iconphoto} />}
      </View>
      {name && (
        <View style={styles.textProfile}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textProfile: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  iconphoto: {
    position: 'absolute',
    bottom: 8,
    right: 8,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
  },
  wrapper: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontFamily: fonts[600],
    fontSize: 20,
    color: colors.text.default,
  },
  desc: {
    fontFamily: fonts.normal,
    fontSize: 16,
    color: colors.text.secondary,
  },
});
