
import React from 'react'

import{createDrawerNavigator} from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import about from './drawer/about'
import view from './drawer/view'
import info from './drawer/info'

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()





export default class drawer extends React.Component
{
    viewNavigator({navigation})
{
    return(
        <Stack.Navigator initialRouteName = 'view'>
            <Stack.Screen name='view' component = {view} options = {{headerShown:false}} ></Stack.Screen>
            <Stack.Screen name = 'info' component = {info} options = {{headerShown:false}}></Stack.Screen>
        </Stack.Navigator>
        );
}

    render()
    {
        return( 
            <Drawer.Navigator initialRouteName = 'viewNavigator'>
                <Drawer.Screen name = 'viewNavigator' component = {this.viewNavigator} options = {{drawerLabel:'View Page'}}></Drawer.Screen>
                <Drawer.Screen name = 'about' component = {about} options = {{drawerLabel:'About'}} ></Drawer.Screen>
            </Drawer.Navigator>
    
        );
       
    
    
    }
        

}