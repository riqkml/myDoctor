import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Header, Button, Link, Gap} from '../../components';
import {ILNullPhoto, ILLogo, IconAddPhoto} from '../../assets';
import {colors, fonts} from '../../utils';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {color} from 'react-native-reanimated';

const UploadPhoto = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Upload Photo"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.container}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image source={ILNullPhoto} style={styles.photo} />
            <IconAddPhoto style={styles.addphoto} />
          </View>
          <Gap height={26} />
          <Text style={styles.headtext}>Shayna Melinda</Text>
          <Text style={styles.bodytext}>Product Designer</Text>
        </View>
        <View style={styles.footer}>
          <Button type="btn_grey" cond="disabled" title="Upload and Continue" />
          <Gap height={52} />
          <Link
            title="Skip for this"
            align="center"
            onPress={() => navigation.replace('mainApp')}
          />
          <Gap height={64} />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  headtext: {
    fontFamily: fonts.normal,
    fontSize: 24,
    color: colors.text.default,
  },
  bodytext: {
    fontFamily: fonts.normal,
    fontSize: 18,
    color: colors.text.secondary,
  },
  content: {alignItems: 'center'},
  addphoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  avatarWrapper: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderRadius: 130 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.border,
  },
  photo: {
    width: 110,
    height: 110,
  },
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  profile: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
