import React, {useLayoutEffect} from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import CreateMenu from '../screens/CreateMenu';
import ShareResScreen from '../screens/ShareResScreen';
import GenerateQRCode from '../screens/GenerateQRCode';

const BusinessCreate = createStackNavigator();

export function BusinessStack({navigation}) {
  return (
    <BusinessCreate.Navigator>
      <BusinessCreate.Screen
        name="CreateMenu"
        component={CreateMenu}
        options={() => ({
          headerShown: false,
        })}
      />
          <BusinessCreate.Screen
        name="ShareResScreen"
        component={ShareResScreen}
        options={() => ({
          headerShown: false,
        })}
      />
        <BusinessCreate.Screen
        name="GenerateQRCode"
        component={GenerateQRCode}
        options={() => ({
          headerShown: false,
        })}
      />
    </BusinessCreate.Navigator>
  );
}
