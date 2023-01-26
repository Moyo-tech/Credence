import React from 'react'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {colors} from '../global/styles'
import {Icon} from 'react-native-elements'
import MyOrdersScreen from '../screens/MyOrdersScreen';
import MyAccountScreen from '../screens/MyAccountScreen';
import { ClientStack } from './clientStack';
import BusinessConsoleScreen from '../screens/BusinessConsoleScreen';
import { BusinessStack } from './businesStack';
import BusinessOrderScreen from '../screens/BusinessOrderScreen';

const ClientTabs = createBottomTabNavigator();


export default function BusinessTabs(){

    return(
        <ClientTabs.Navigator
                    tabBarOptions = {{
                        activeTintColor :colors.buttons
                    }}
                >
            <ClientTabs.Screen 
                name ="HomeScreen"
                component ={BusinessConsoleScreen}
                options ={
                    {
                        headerShown: false,
                        tabBarLabel : "Home",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='home'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        )
                    }
                }

            />


            <ClientTabs.Screen 
                name ="BusinessConsoleScreen"
                component ={BusinessStack}
                options ={
                    {
                        headerShown: false,
                        tabBarLabel : "Create",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='create'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        )
                    }
                }

            />



        <ClientTabs.Screen 
                name ="BusinessOrderScreen"
                component ={BusinessOrderScreen}
                options ={
                    {
                        headerShown: false,
                        tabBarLabel : "Orders",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='update'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        )
                    }
                }

            />



        <ClientTabs.Screen 
                name ="MyAccount"
                component ={MyAccountScreen}
                options ={
                    {
                        headerShown: false,
                        tabBarLabel : "My Account",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='person'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        )
                    }
                }
                

            />
   


        </ClientTabs.Navigator>
    )
}