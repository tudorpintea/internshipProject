import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Text } from 'react-native';
import FirstScreen from '../Containers/FirstScreen';
import PlusScreen from '../Containers/PlusScreen';
import ProfileScreen from '../Containers/ProfileScreen';
import OrderDetailsScreen from '../Containers/OrderDetailsScreen';
import OrderHistoryScreen from '../Containers/OrderHistoryScreen';
import Icon from 'react-native-ionicons';
import * as Animatable from 'react-native-animatable';
import { Colors } from '../Themes';


const tabNav = createBottomTabNavigator(
    {
        FirstScreen: {
            screen: FirstScreen,
            navigationOptions: {
                tabBarLabel: ({ focused, tintColor }) => 
                 focused ? <Text style={{ color: tintColor }}>Home</Text> : null,
                 tabBarIcon: ({ focused, tintColor }) => (
                     <CustomIcon focused={focused} icon={"ios-home"} color={tintColor} />
                 )
            }
        },
        PlusScreen: {
            screen: PlusScreen,
            navigationOptions: {
                tabBarLabel: ({ focused, tintColor }) => 
                   focused ? <Text style={{ color: tintColor }}>Add</Text> : null,
                tabBarIcon: ({focused, tintColor}) => (
                    <CustomIcon focused={focused} icon={"add-circle"} color={tintColor} />
                )   
            }
        },
        OrderHistoryScreen: {
            screen: OrderHistoryScreen,
            navigationOptions: {
                tabBarLabel: ({ focused, tintColor }) => 
                   focused ? <Text style={{color: tintColor}}>Orders</Text> : null,
                tabBarIcon: ({ focused, tintColor }) => (
                    <CustomIcon focused={focused} icon={"list"} color={tintColor} />
                )  
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: Colors.magenta
        }
    }
);
export default createAppContainer(tabNav);