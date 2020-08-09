import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyNews1} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {TouchableOpacity} from 'react-native-gesture-handler';

const NewsItem = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.titlewrapper}>
        <Text style={styles.header}>
          Is it safe to stay at home during coronavirus?
        </Text>
        <Text style={styles.subheader}>Today</Text>
      </View>
      <Image source={DummyNews1} style={styles.newsimg} />
    </TouchableOpacity>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 16,
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
  },
  subheader: {
    fontFamily: fonts.normal,
    fontSize: 12,
    color: colors.text.secondary,
  },
  titlewrapper: {
    flex: 1,
  },
  header: {
    fontSize: 16,
    color: colors.text.default,
    fontFamily: fonts[600],
    lineHeight: 22,
  },
  newsimg: {
    width: 80,
    height: 60,
    borderRadius: 80 / 7,
  },
});
