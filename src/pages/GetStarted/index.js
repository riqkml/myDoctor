import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {ILLogo, ILGetStarted} from '../../assets';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Button, Gap} from '../../components/atoms';
import {fonts} from '../../utils';
const Splash = ({navigation}) => {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Solusi Konsultasi dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <Button
          title="Get Started"
          onPress={() => {
            navigation.navigate('Register');
          }}
        />
        <Gap height={16} />
        <Button
          type="secondary"
          title="Sign In"
          onPress={() => {
            navigation.replace('Login');
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    fontSize: 24,
    width: wp('70%'),
    color: 'white',
    marginTop: 91,
    fontFamily: fonts[600],
  },
});
