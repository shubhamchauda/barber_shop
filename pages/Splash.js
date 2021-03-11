import React from "react";
import {View,StyleSheet,Text} from 'react-native'
import {color}  from './color'
import AsyncStorage from '@react-native-community/async-storage'












export default class Splash extends React.Component
{

    

  async componentDidMount()
    {
        await AsyncStorage.getItem('status').then((value) =>{
            console.log(value);
            this.setState({status:value})
            if (value == '')
                    {
                        setTimeout(()=>{this.props.navigation.replace('UserRegister')},2500)
                     }
            else if(value == '1')
                    {
                        setTimeout(()=>{this.props.navigation.replace('Drawer')},2500)
                    }
            else
                    {
                         setTimeout(()=>{this.props.navigation.replace('Login')},2500) 
                    }
           });
        
       
    }

 
 
    render()
    {
    
        return(
            <View style={styles.view}>
                <Text style={{color:'white'}}>WELCOME</Text>
            </View>

        );
    }
}



const styles = StyleSheet.create(
    {
        view:{
            flex:1,
            backgroundColor:color.main,
            justifyContent:'center',
            alignItems: 'center',

        }

    }
);
