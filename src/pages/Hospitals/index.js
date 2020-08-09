import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {
  ILHospitalBG,
  DummyHospital,
  DummyHospital2,
  DummyHospital3,
} from '../../assets';
import {fonts, colors} from '../../utils';
import {ListHospital} from '../../components/molecules';

const Hospitals = () => {
  return (
    <View style={{flex: 1, backgroundColor: colors.text.default}}>
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 Tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <ListHospital
          type="Rumah Sakit"
          title="Rumah Sakit Citra Bunga Merdeka "
          address="Jln. Surya Sejahtera 20 "
          pic={DummyHospital}
        />
        <ListHospital
          type="Rumah Sakit"
          title="Rumah Sakit Royal Lemperogue"
          address="Jln. Surya Sejahtera 20 "
          pic={DummyHospital2}
        />
        <ListHospital
          type="Rumah Sakit"
          title="Rumah Sakit Anak Happy Family & Kids"
          address="Jln. Surya Sejahtera 20 "
          pic={DummyHospital3}
        />
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  background: {
    height: 260,
    paddingTop: 30,
  },
  content: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 20,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginTop: -20,
    paddingVertical: 30,
    paddingHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    fontFamily: fonts[700],
    fontSize: 20,
    color: colors.white,
  },
  desc: {
    textAlign: 'center',
    fontFamily: fonts.normal,
    fontSize: 14,
    color: colors.white,
  },
});
