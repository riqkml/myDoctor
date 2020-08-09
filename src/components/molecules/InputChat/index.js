import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {colors} from '../../../utils';
import {Button} from '../../atoms';

const InputChat = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputchat}
        placeholder="Tulis pesan untuk alexander Jenie"
      />
      <Button title="Send" type="btn-icon" />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 26,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputchat: {
    marginRight: 10,
    backgroundColor: colors.button.btn_grey.background,
    padding: 14,
    flex: 1,
    maxHeight: 45,
    borderRadius: 10,
  },
});
