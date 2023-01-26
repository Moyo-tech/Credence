import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';

import QRCode from 'react-native-qrcode-svg';

export default function GenerateQRCode({navigation}) {
  const [inputText, setInputText] = useState('');
  const [qrvalue, setQrvalue] = useState('');

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://play-lh.googleusercontent.com/ufwUy4SGVTqCs8fcp6Ajxfpae0bNImN1Rq2cXUjWI7jlmNMCsXgQE5C3yUEzBu5Gadkz',
        }}
        style={{
          width: '60%',
          height: '60%',
          resizeMode: 'contain',
        }}
      />
      <Text>QR Code Linking to JewlleryandBling.credence.com</Text>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonTitle}>Share</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.link}>Copy Link</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
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
    marginTop: 20,
  },
  buttonTitle: {
    color: 'white',
    fontSize: 13,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },

  link: {
    padding: 10,
    textDecorationLine: 'underline',
    color: '#004aad',
  },
});
