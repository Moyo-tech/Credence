import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { color } from 'react-native-reanimated';

import {colors, SIZES, fonts, icons} from '../global';

const TransactionHistory = ({transactionName, Date, Price}) => {
  return (
    <ScrollView>
  
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: SIZES.base,
      }}
      >
      <Image
        source={icons.transaction}
        style={{
          width: 30,
          height: 30,
          tintColor: colors.primary,
        }}
      />
      <View style={{flex: 1, marginLeft: SIZES.radius}}>
        <Text style={{...fonts.android.h3}}>{transactionName}</Text>
        <Text style={{color: colors.gray, ...fonts.android.body4}}>
          {Date}
        </Text>
      </View>

<View
style={{
  flexDirection: 'row', height: '100%', alignItems: 'center'
}}
>
  <Text
  style={{
    color: colors.green, ...fonts.h3
  }}
  > $ {Price} </Text>
    <Image
      source={icons.right_arrow}
      style={{width: 20,
      height: 20,
      tintColor: color.gray
      
      }}
    />

</View>



    </TouchableOpacity>
    </ScrollView>
  );
};
export default TransactionHistory;
