import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {exp} from 'react-native-reanimated';

import {colors, SIZES, fonts, icons} from '../global';

const PriceAlert = ({customeContainerStyle}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.padding * 0.5,
        marginHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding,
        paddingHorizontal: SIZES.radius,
        backgroundColor: colors.white,
        borderRadius: SIZES.radius,
        ...customeContainerStyle,
        ...styles.shadow,
      }}>
      <Image
        source={icons.notification_color}
        style={{
          width: 30,
          height: 30,
        }}
      />

      <View style={{flex: 1, marginLeft: SIZES.radius}}>
        <Text style={{...fonts.android.h3}}>Did You Know</Text>
        <Text style={{...fonts.android.body}}>
          You can also create an account with Credence as a business owner
        </Text>
      </View>

      <Image
        source={icons.right_arrow}
        style={{
          width: 25,
          height: 25,
          tintColor: colors.gray,
        }}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});

export default PriceAlert;
