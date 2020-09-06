import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, Profile, Button, Gap} from '../../components';
import ProfileItem from '../../components/molecules/ProfileItem';
import {colors} from '../../utils';
import {DummyDoctor1} from '../../assets';

const DoctorProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Profil" />
      <View>
        <Profile
          name="Alexa Rachel"
          desc="Pediatrician"
          type="female"
          avatars={DummyDoctor1}
        />
        <ProfileItem head="Alumnus" text="Universitas Indonesia" />
        <ProfileItem head="Tempat Praktik" text="Rumah Sakit Umum, Bandung" />
        <ProfileItem head="No. STR" text="0000116622081996" />
        <View style={styles.action}>
          <Button
            title="Mulai Konsultasi"
            onPress={() => navigation.navigate('Chatting')}
          />
        </View>
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  action: {
    padding: 40,
  },
});
