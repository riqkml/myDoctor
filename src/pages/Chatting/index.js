import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, ChatItem, InputChat} from '../../components';
import {colors, fonts} from '../../utils';

const Chatting = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Alexander Jenie"
        mode="dark"
        profession="Dokter Umum"
        type="dark-profile"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.content}>
        <View style={styles.chatbox}>
          <Text style={styles.date}>Senin,21 Maret 2020</Text>
          <ChatItem me />
          <ChatItem />
        </View>
        <InputChat />
      </View>
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  date: {
    fontFamily: fonts.normal,
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 20,
    color: colors.text.secondary,
  },
  chatbox: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 30,
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});
