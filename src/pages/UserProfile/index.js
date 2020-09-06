import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, Profile, Gap} from '../../components';
import List from '../../components/molecules/List';
import {colors} from '../../utils';
import {DummyUser} from '../../assets';

const UserProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <Profile
          name="Shayna Melinda"
          desc="Product Designer"
          avatars={DummyUser}
        />
        <Gap height={16} />
        <List
          name="Edit Profile"
          msg="last update yesterday"
          type="next"
          icon="profile"
          onpress={() => navigation.navigate('UpdateProfile')}
        />
        <Gap height={16} />
        <List
          name="Language"
          msg="Avalaible 12 Languages"
          type="next"
          icon="language"
        />

        <Gap height={16} />
        <List
          name="Give Us Rate"
          msg="On Google Play Store"
          type="next"
          icon="rate"
        />

        <Gap height={16} />
        <List
          name="Help Center"
          msg="Read our guidelines"
          type="next"
          icon="help"
        />
        <Gap height={16} />
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: 16,
  },
});
