import React from 'react'

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {colors} from '../global/styles'
import {Icon} from 'react-native-elements'
import HomeScreen from '../screens/HomeScreen';
import { ClientStack } from './clientStack';
import {ClientAccountStack } from './accountStack';
import { ClientOrderStack } from './myorderStack';

const ClientTabs = createBottomTabNavigator();


export default function RootClientTabs(){

    return(
        <ClientTabs.Navigator
                    tabBarOptions = {{
                        activeTintColor :colors.buttons
                    }}
                >
            <ClientTabs.Screen 
                name ="HomeScreen"
                component ={HomeScreen}
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
                name ="SearchScreen"
                component ={ClientStack}
                options ={
                    {
                        headerShown: false,
                        tabBarLabel : "Scan",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='qr-code-scanner'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        )
                    }
                }

            />



        <ClientTabs.Screen 
                name ="MyOrdersScreen"
                component ={ClientOrderStack}
                options ={
                    {
                        headerShown: false,
                        tabBarLabel : "My Orders",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='view-list'
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
                component ={ClientAccountStack}
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