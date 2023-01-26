import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

const AppLoader = ({navigation}) => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
      <LottieView
        source={require('../assets/images/98788-loading.json')}
        autoPlay = {true}
        loop = {false}
        style={{
            backgroundColor: "#eee"
        }}
        onAnimationFinish= {()=> {navigation.navigate('RestaurantHomeScreen')}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 1,
  },
});
export default AppLoader;
