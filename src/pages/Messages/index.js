import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {List} from '../../components/molecules';
import {DummyDoctor1, DummyDoctor2, DummyDoctor3} from '../../assets';
import {colors, fonts} from '../../utils';
import {Gap} from '../../components/atoms';

const Messages = ({navigation}) => {
  const [profile, setProfile] = useState([
    {
      id: 1,
      profile: DummyDoctor1,
      name: 'Alexander Jenie',
      msg: 'Baik ibu, terima kasih banyak atas wakt...',
    },
    {
      id: 2,
      profile: DummyDoctor2,
      name: 'Nairobi Kattegat',
      msg: 'Oh tentu saja tidak, karena jeruk itu...',
    },
    {
      id: 3,
      profile: DummyDoctor3,
      name: 'Shaun Murphy',
      msg: 'Oke menurut pak dokter gimana dengan...',
    },
  ]);
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.header}>Messages</Text>
        <Gap height={16} />
        {profile.map((val, index) => {
          return (
            <View key={index}>
              <List
                name={val.name}
                msg={val.msg}
                pic={val.profile}
                onpress={() => navigation.navigate('Chatting')}
              />
              <Gap height={16} />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.text.default,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 30,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  header: {
    fontSize: 24,
    fontFamily: fonts[700],
    color: colors.text.default,
  },
});
