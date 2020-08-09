import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Button, Input, Link, Gap} from '../../components/atoms';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils';
const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai Berkonsultasi</Text>
      <Input label="Username" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={5} />
      <Link title="Forgot Password" size={12} />
      <Gap height={60} />
      <Button title="Sign In" onPress={() => navigation.replace('mainApp')} />
      <Gap height={50} />
      <Link
        title="Create New Account"
        size={16}
        align="center"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 40,
  },
  title: {
    fontFamily: fonts[600],
    fontSize: 20,
    color: colors.secondary,
    marginVertical: 40,
    maxWidth: 170,
  },
});
