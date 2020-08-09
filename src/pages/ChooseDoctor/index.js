import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyDoctor1, DummyDoctor2, DummyDoctor3} from '../../assets';
import {Header, DoctorList, Gap} from '../../components';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation}) => {
  const [profile, setProfile] = useState([
    {
      id: 1,
      profile: DummyDoctor1,
      name: 'Alexander Jenie',
      gender: 'Wanita',
    },
    {
      id: 2,
      profile: DummyDoctor2,
      name: 'Nairobi Kattegat',
      gender: 'Wanita',
    },
    {
      id: 3,
      profile: DummyDoctor3,
      name: 'Shaun Murphy',
      gender: 'Pria',
    },
  ]);
  return (
    <View style={styles.page}>
      <Header
        mode="dark"
        onPress={() => navigation.goBack()}
        title="pilih dokter anak"
      />
      <View style={styles.wrapper}>
        <View style={styles.container}>
          {profile.map((val, index) => {
            return (
              <View key={index}>
                <DoctorList
                  name={val.name}
                  msg={val.gender}
                  pic={val.profile}
                  type="next"
                  onpress={() => navigation.navigate('Chatting')}
                />
                <Gap height={16} />
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: colors.secondary},
  wrapper: {
    backgroundColor: 'white',
    flex: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
});
