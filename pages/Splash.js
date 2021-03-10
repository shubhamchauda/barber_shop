import React from "react";
import {View,StyleSheet,Text} from 'react-native'
import {color}  from './color'












export default class Splash extends React.Component
{

    componentDidMount()
    {
        setTimeout(()=>{this.props.navigation.replace('Login')},2500)
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
