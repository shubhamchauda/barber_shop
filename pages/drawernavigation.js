
import React from 'react'

import{createDrawerNavigator} from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Drawer/Home'
import Header from './Drawer/header'
import AsyncStorage from '@react-native-community/async-storage'
import Login from './Login'
import Store_Detail from './Drawer/StoreDetail'
import getappoinment from './Drawer/getappoinment'


const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()





export default class drawer extends React.Component
{
    HomeNavigator({navigation})
{
    return(
        <Stack.Navigator initialRouteName = 'Home'>
            <Stack.Screen name='Home' component = {Home} options = {{headerShown:false}} ></Stack.Screen>    
            <Stack.Screen name ='store_detail' component={Store_Detail }options ={{headerShown:false}}></Stack.Screen> 
            <Stack.Screen name ='getappoinment' component={ getappoinment }options ={{headerShown:false}}></Stack.Screen> 
                  
        </Stack.Navigator>
        );
}



Login({navigation})
{   
  

    return(
        <Stack.Navigator initialRouteName = 'Home'>
            <Stack.Screen name='Login' component = {Login} options = {{headerShown:false}} ></Stack.Screen>   
        </Stack.Navigator>
        );

}


    render()
    {
        return( 
            <Drawer.Navigator initialRouteName = 'HomeNavigator'>
                <Drawer.Screen name = 'HomeNavigator' component = {this.HomeNavigator} options = {{drawerLabel:'Home'}}></Drawer.Screen>
                <Drawer.Screen name = 'LoginNavigator' component = {this.Login} options = {{drawerLabel:'Logout'}} ></Drawer.Screen>
                

            </Drawer.Navigator>
    
        );
       
    
    
    }
        

}