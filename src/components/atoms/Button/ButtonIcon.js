import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconSendDisable, IconSendActive} from '../../../assets';
import {colors} from '../../../utils';

const ButtonIcon = ({disable}) => {
  return (
    <View style={styles.container(disable)}>
      {disable && <IconSendDisable />}
      {!disable && <IconSendActive />}
    </View>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  container: disable => ({
    width: 45,
    height: 45,
    borderRadius: 10,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
    backgroundColor: disable
      ? colors.button.btn_grey.background
      : colors.button.btn_blue.background,
  }),
});
