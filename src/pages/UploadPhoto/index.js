import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Header, Button, Link, Gap} from '../../components';
import {ILNullPhoto, ILLogo, IconAddPhoto, IconCancelPhoto} from '../../assets';
import {colors, fonts} from '../../utils';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {color} from 'react-native-reanimated';
import ImagePicker from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
const UploadPhoto = ({navigation}) => {
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILNullPhoto);
  const getImage = () => {
    if (!hasPhoto) {
      ImagePicker.launchImageLibrary({}, response => {
        console.log(response.uri);
        if (response.didCancel || response.error) {
          showMessage({
            message: 'Gagal',
            description: 'Oops, gagal menambahkan foto',
            type: 'danger',
            icon: 'danger',
          });
        } else {
          const source = {uri: response.uri};
          setPhoto(source);
          setHasPhoto(true);
        }
      });
    } else {
      setPhoto(ILNullPhoto);
      setHasPhoto(false);
    }
  };
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
          <TouchableOpacity style={styles.avatarWrapper} onPress={getImage}>
            <Image source={photo} style={styles.photo} />
            {hasPhoto ? (
              <IconCancelPhoto style={styles.addphoto} />
            ) : (
              <IconAddPhoto style={styles.addphoto} />
            )}
          </TouchableOpacity>
          <Gap height={26} />
          <Text style={styles.headtext}>Shayna Melinda</Text>
          <Text style={styles.bodytext}>Product Designer</Text>
        </View>
        <View style={styles.footer}>
          <Button
            type={!hasPhoto ? 'btn_grey' : 'btn'}
            cond={hasPhoto}
            title="Upload and Continue"
          />
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
    borderRadius: 110 / 2,
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
