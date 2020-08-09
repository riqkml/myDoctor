import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  CatDocUmum,
  CatDocPsikiater,
  CatDocAnak,
  CatDocObat,
} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {TouchableOpacity} from 'react-native-gesture-handler';

const DoctorCategory = ({id, category, onpress}) => {
  const Icon = () => {
    if (category === 'dokter umum') {
      return <CatDocUmum style={styles.illustration} />;
    }
    if (category === 'psikiater') {
      return <CatDocPsikiater style={styles.illustration} />;
    }
    if (category === 'dokter anak') {
      return <CatDocAnak style={styles.illustration} />;
    }
    if (category === 'dokter obat') {
      return <CatDocObat style={styles.illustration} />;
    }
    return <CatDocUmum style={styles.illustration} />;
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onpress}>
      <Icon />
      <Text style={styles.label}>Saya butuh</Text>
      <Text style={styles.category}>{category}</Text>
    </TouchableOpacity>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardlight,
    padding: 12,
    width: 120,
    height: 160,
    marginRight: 10,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  illustration: {
    marginBottom: 50,
  },
  label: {
    color: colors.text.default,
    fontFamily: fonts[300],
    fontSize: 12,
  },
  category: {
    color: colors.text.default,
    fontFamily: fonts[600],
    fontSize: 12,
  },
});
