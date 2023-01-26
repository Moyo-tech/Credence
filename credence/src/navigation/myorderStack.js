import React, {useLayoutEffect} from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import MyCart from '../screens/MyOrdersScreen';
import PaymentScreen from '../screens/PaymentScreen';

const ClientOrder = createStackNavigator();
export function ClientOrderStack() {
  return (
    <ClientOrder.Navigator>
      <ClientOrder.Screen
        name="MyCart"
        component={MyCart}
        options={() => ({
          headerShown: false,
        })}
      />
      <ClientOrder.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </ClientOrder.Navigator>
  );
}
