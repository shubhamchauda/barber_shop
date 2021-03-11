import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'


import Splash from './pages/Splash'
import Login from './pages/Login'
import BarberLogin from './pages/BarberLogin'
import UserRegister from './pages/UserRegister'
import drawer from './pages/drawernavigation'


const Stack = createStackNavigator()

export default class App extends React.Component {
  
  render(){
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Splash'>
      <Stack.Screen name = 'Login' component = {Login} ></Stack.Screen>
      <Stack.Screen name = 'Splash' component = {Splash} ></Stack.Screen>
      <Stack.Screen name = 'BarberLogin' component = {BarberLogin} ></Stack.Screen>
      <Stack.Screen name = 'UserRegister' component = {UserRegister}></Stack.Screen>
      <Stack.Screen name = 'Drawer' component = {drawer}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
