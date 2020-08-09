import React from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import {Header, Input, Button, Gap} from '../../components';
import {colors} from '../../utils/colors';

const Register = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Daftar Akun"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.content}>
        <Gap height={24} />
        <Input label="Fullname" />
        <Gap height={24} />
        <Input label="Pekerjaan" />
        <Gap height={24} />
        <Input label="Gmail" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={40} />
        <Button
          title="Continue"
          onPress={() => navigation.navigate('UploadPhoto')}
        />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {padding: 40, paddingTop: 0},
});
