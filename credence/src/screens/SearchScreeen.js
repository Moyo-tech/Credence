import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import AppLoader from './AppLoader';

import {colors, SIZES, fonts, icons} from '../global';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function SearchScreen({navigation}) {
  state = {
    qr: '',
  };
  onRead = e => {
    this.setState({qr: e.data});
    //console.log(e).data;
  };
  return (
      <View style={{flex: 1, marginBottom: 10, paddingTop: 20}}>
        <QRCodeScanner
          onRead={this.onRead}
          flashMode={RNCamera.Constants.FlashMode.torch}
          topContent={
            <View>
              <Text style={{top: -40, ...fonts.android.h3}}>SCAN QR CODE</Text>
            </View>
          }
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
              <Pressable
                style={styles.button}
                onPress={() => {
                  navigation.navigate('AppLoader');
                }}>
                <Text style={styles.buttonTitle}>{'Proceed'}</Text>
              </Pressable>
            </TouchableOpacity>
          }
        />
      </View>
  );
}

const styles = StyleSheet.create({
  imageView: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH * 0.4475,
    height: SCREEN_WIDTH * 0.4475,
    marginLeft: SCREEN_WIDTH * 0.035,
    marginBottom: SCREEN_WIDTH * 0.035,
  },

  image: {
    height: SCREEN_WIDTH * 0.4475,
    width: SCREEN_WIDTH * 0.4475,
    borderRadius: 10,
  },

  listHeader: {
    fontSize: 16,
    color: colors.grey2,
    paddingBottom: 10,
    marginLeft: 12,
  },

  textView: {
    height: SCREEN_WIDTH * 0.4475,
    width: SCREEN_WIDTH * 0.4475,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52,0.3)',
  },
  button: {
    backgroundColor: '#004AAD',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#004AAD',
    height: 40,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  buttonTitle: {
    color: 'white',
    fontSize: 13,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
