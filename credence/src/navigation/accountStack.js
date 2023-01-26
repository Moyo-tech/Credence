import React, {useLayoutEffect} from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import EditAccountScreen from '../screens/EditAccountScreen';
import MyAccountScreen from '../screens/MyAccountScreen';

const ClientAccount = createStackNavigator();
export function ClientAccountStack() {
  return (
    <ClientAccount.Navigator>
      <ClientAccount.Screen
        name="MyAccountScreen"
        component={MyAccountScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <ClientAccount.Screen
        name="EditAccountScreen"
        component={EditAccountScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </ClientAccount.Navigator>
  );
}
