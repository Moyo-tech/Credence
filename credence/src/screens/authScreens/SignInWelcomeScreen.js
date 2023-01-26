import React, {useState, useRef, useEffect, useContext} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import {colors, parameters, title} from '../../global/styles';
import {SignInContext} from '../../contexts/authContext';
import auth from '@react-native-firebase/auth';

import Swiper from 'react-native-swiper';

import {Icon, Button, SocialIcon} from 'react-native-elements';

export default function SignInWelcomeScreen({navigation}) {
  const {dispatchSignedIn} = useContext(SignInContext);

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        dispatchSignedIn({
          type: 'UPDATE_SIGN_IN',
          payload: {userToken: 'signed-in'},
        });
      } else {
        dispatchSignedIn({type: 'UPDATE_SIGN_IN', payload: {userToken: null}});
      }
    });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1, justifyContent: 'space-between'}}>
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingTop: 20,
        }}>
        <Text style={{fontSize: 26, color: colors.buttons, fontWeight: 'bold'}}>
          CREDENCE
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: colors.buttons,
            fontWeight: 'bold',
            paddingVertical: 10,
          }}>
          DISCOVER BUSINESSES IN YOUR AREA
        </Text>
      </View>

      <View style={{}}>
        <Swiper autoplay={true} style={{height: 250}}>
          <View style={styles.slide1}>
            <Image
              source={{
                uri: 'https://img.freepik.com/free-vector/premium-collection-badge-design_53876-63011.jpg?w=740&t=st=1671275930~exp=1671276530~hmac=f7512b294fb238cf6f54cdeaf3d3555971c395d34352b88b6b452bb48b2875ab',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>

          <View style={styles.slide2}>
            <Image
              source={{
                uri: 'https://cdn.pixabay.com/photo/2014/11/09/20/06/woman-524141__340.jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>

          <View style={styles.slide3}>
            <Image
              source={{
                uri: 'https://cdn.pixabay.com/photo/2016/11/19/12/32/diamond-1839031__340.jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>

          <View style={styles.slide3}>
            <Image
              source={{
                uri: 'https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241__340.jpg',
              }}
              style={{height: '100%', width: '100%'}}
            />
          </View>
        </Swiper>
      </View>

      <View style={{marginBottom: 20}}>
        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <Button
            title="SIGN IN"
            buttonStyle={parameters.styledButton}
            titleStyle={parameters.buttonTitle}
            onPress={() => {
              navigation.navigate('SignInScreen');
            }}
          />
        </View>

        <View style={{marginHorizontal: 20, marginTop: 30}}>
          <Button
            title="Create an account"
            buttonStyle={styles.createButton}
            titleStyle={styles.createButtonTitle}
            onPress={() => {
              navigation.navigate('SignUpScreen');
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  slide1: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },

  createButton: {
    backgroundColor: 'white',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#ff8c52',
    height: 50,
    paddingHorizontal: 20,
    borderColor: colors.buttons,
  },

  createButtonTitle: {
    color: colors.grey1,
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -3,
  },
});
