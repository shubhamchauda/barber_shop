
import React from 'react'

import{createDrawerNavigator} from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Drawer/Home'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()





export default class drawer extends React.Component
{
    HomeNavigator({navigation})
{
    return(
        <Stack.Navigator initialRouteName = 'Home'>
            <Stack.Screen name='Home' component = {Home} options = {{headerShown:false}} ></Stack.Screen>
        </Stack.Navigator>
        );
}

    render()
    {
        return( 
            <Drawer.Navigator initialRouteName = 'viewNavigator'>
                <Drawer.Screen name = 'HomeNavigator' component = {this.HomeNavigator} options = {{drawerLabel:'View Page'}}></Drawer.Screen>
                
            </Drawer.Navigator>
    
        );
       
    
    
    }
        

}