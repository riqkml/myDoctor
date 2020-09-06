import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Header, Profile, Input, Button, Gap} from '../../components';
import {colors} from '../../utils';
import {DummyUser} from '../../assets';

const UpdateProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Profile type="edit" avatars={DummyUser} />
          <Gap height={24} />
          <Input label="Nama Lengkap" />
          <Gap height={24} />
          <Input label="Pekerjaan" />
          <Gap height={24} />
          <Input label="Alamat Email" />
          <Gap height={24} />
          <Input label="Kata sandi" />
          <Gap height={40} />
          <Button
            title="Simpan"
            onPress={() => navigation.goBack('UserProfile')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  container: {
    padding: 40,
    paddingTop: 0,
  },
});
