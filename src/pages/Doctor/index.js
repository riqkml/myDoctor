import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import HomeProfile from '../../components/molecules/HomeProfile';
import {DoctorCategory, RatedDoctor, NewsItem, Gap} from '../../components';
import {fonts, colors} from '../../utils';
import {JSONCategoryDoctor} from '../../assets';

const Doctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={30} />
          <HomeProfile />
          <Gap height={30} />
          <Text style={styles.welcome}>
            Mau Konsultasi dengan siapa hari ini ?
          </Text>
          <Gap height={12} />
          <View style={styles.wrapperscroll}>
            <View style={styles.category}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Gap width={16} />
                {JSONCategoryDoctor.data.map((val, index) => {
                  return (
                    <DoctorCategory
                      key={val.id}
                      category={val.category}
                      onpress={() => {
                        navigation.navigate('ChooseDoctor');
                      }}
                    />
                  );
                })}
                <Gap width={5} />
              </ScrollView>
            </View>
          </View>
          <Gap height={30} />
          <Text style={styles.sectionlabel}>Top Rated Doctor</Text>
          <Gap height={16} />
          <RatedDoctor />
          <RatedDoctor />
          <RatedDoctor />
          <Text style={styles.sectionlabel}>Good News</Text>
          <NewsItem />
          <NewsItem />
          <NewsItem />
          <Gap height={30} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.text.default,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  welcome: {
    fontSize: 20,
    fontFamily: fonts[600],
    maxWidth: 250,
    color: colors.text.default,
  },
  category: {
    flexDirection: 'row',
  },
  wrapperscroll: {
    marginHorizontal: -16,
  },
  sectionlabel: {
    fontSize: 20,
    color: colors.text.default,
    fontFamily: fonts[700],
  },
});
