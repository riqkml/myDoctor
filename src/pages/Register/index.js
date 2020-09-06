import React, {useState} from 'react';
import {StyleSheet, Text, View, Alert, ScrollView} from 'react-native';
import {Header, Input, Button, Gap, Loading} from '../../components';
import {colors} from '../../utils/colors';
import {useForm} from '../../utils/useForm';
import {Fire} from '../../config';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    nama: '',
    pekerjaan: '',
    email: '',
    pass: '',
  });
  const [loading, setLoading] = useState(false);
  const onContinue = () => {
    setLoading(true);
    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.pass)
      .then(success => {
        setLoading(false);
        console.log('Registrasi Berhasil', success);
      })
      .catch(error => {
        setLoading(false);
        const errorMessage = error.message;
        console.log('Registrasi Gagal', errorMessage);
      });
  };
  return (
    <>
      <View style={styles.page}>
        <Header
          title="Daftar Akun"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Gap height={24} />
            <Input
              label="Fullname"
              value={form.nama}
              onChangeText={val => setForm('nama', val)}
            />
            <Gap height={24} />
            <Input
              label="Pekerjaan"
              value={form.pekerjaan}
              onChangeText={val => setForm('pekerjaan', val)}
            />
            <Gap height={24} />
            <Input
              label="Email"
              value={form.email}
              onChangeText={val => setForm('email', val)}
            />
            <Gap height={24} />
            <Input
              label="Password"
              value={form.pass}
              onChangeText={val => setForm('pass', val)}
              secureTextEntry={true}
            />
            <Gap height={40} />
            <Button title="Lanjutkan" onPress={onContinue} />
          </ScrollView>
        </View>
      </View>
      {loading && <Loading />}
    </>
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
