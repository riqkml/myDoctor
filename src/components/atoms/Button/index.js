import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../../utils/colors';
import IconOnly from './IconOnly';
import {fonts} from '../../../utils';
import ButtonIcon from './ButtonIcon';

const Button = ({type, title, onPress, icon, cond, disable}) => {
  if (type === 'btn-icon') {
    return <ButtonIcon disable={disable} />;
  }
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  if (cond === 'disabled') {
    return (
      <TouchableOpacity
        style={styles.container(type)}
        onPress={onPress}
        disabled>
        <Text style={styles.text(type)}>{title}</Text>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity style={styles.container(type)} onPress={onPress}>
        <Text style={styles.text(type)}>{title}</Text>
      </TouchableOpacity>
    );
  }
};

export default Button;

const styles = StyleSheet.create({
  container: type => ({
    backgroundColor:
      type === 'btn_grey'
        ? colors.button.btn_grey.background
        : type === 'secondary'
        ? colors.button.secondary.background
        : colors.button.default.background,
    borderRadius: 10,
    paddingVertical: 10,
  }),
  text: type => ({
    fontSize: 18,
    fontFamily: fonts[600],
    textAlign: 'center',
    color:
      type === 'btn_grey'
        ? colors.button.btn_grey.text
        : type === 'secondary'
        ? colors.button.secondary.text
        : colors.button.default.text,
  }),
});
