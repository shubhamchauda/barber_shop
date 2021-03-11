
import React from 'react'

import{createDrawerNavigator} from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Drawer/Home'
import Header from './Drawer/header'
import AsyncStorage from '@react-native-community/async-storage'
import Login from './Login'


const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()





export default class drawer extends React.Component
{
    HomeNavigator({navigation})
{
    return(
        <Stack.Navigator initialRouteName = 'Home'>
            <Stack.Screen name='Home' component = {Home} options = {{headerShown:false}} ></Stack.Screen>
            <Stack.Screen name = 'Header' component ={Header} ></Stack.Screen>
                  
        </Stack.Navigator>
        );
}


    render()
    {
        return( 
            <Drawer.Navigator initialRouteName = 'HomeNavigator'>
                <Drawer.Screen name = 'HomeNavigator' component = {this.HomeNavigator} options = {{drawerLabel:'Home'}}></Drawer.Screen>
                      
            </Drawer.Navigator>
    
        );
       
    
    
    }
        

}