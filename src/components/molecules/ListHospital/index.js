import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyHospital} from '../../../assets';
import {fonts, colors} from '../../../utils';
import {color, add} from 'react-native-reanimated';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ListHospital = ({type, title, address, pic}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={pic} style={styles.img} />
      <View style={styles.address}>
        <Text style={styles.name}>{title}</Text>
        <Text style={styles.desc}>{address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListHospital;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 16,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  name: {
    fontFamily: fonts[600],
    fontSize: 18,
    color: colors.text.default,
  },
  address: {
    maxWidth: 250,
  },
  desc: {
    fontFamily: fonts.normal,
    fontSize: 14,
    color: colors.text.secondary,
  },
  img: {
    width: 100,
    height: 80,
    borderRadius: 10,
    marginRight: 16,
  },
});
