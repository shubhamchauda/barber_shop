import React from 'react'
import {ImageBackground,Text, View,FlatList,SafeAreaView, StyleSheet,Image} from 'react-native'
import {  Card, Searchbar,Appbar,Title,Paragraph, Avatar, Subheading } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage'
import {color} from '../color'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {url} from '../constent'
import Icon  from 'react-native-vector-icons/Ionicons';





export default class Store_Detail extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
                        
                         detail:this.props.route.params.item
                     }
    
            
            }
            
   
   


      
    
      
    render()
    {   const st = this.state.detail
        return(    
            <View>
               <Appbar.Header  style= {{backgroundColor:'#3a3f51'}}>
                    <Appbar.Action icon="dots-vertical" onPress={()=>this.props.navigation.toggleDrawer()}/>
                    <Appbar.Content
                    title='Store Detail'/>
                    </Appbar.Header>
                    
                     <View style={{flexDirection:'column',justifyContent:'center',}}>

                         <View style={{alignItems:'center'}}>
                            <ImageBackground  style={{height:200,borderRadius:5,width:'50%',resizeMode:'containt'}} source={require('../../assets/favicon.png')}>
                            <Image style={{height:200,borderRadius:5,width:'100%',resizeMode:'contain'}} backgroundColor='white' source={{uri:url+this.state.detail.image}} />
                            </ImageBackground>
                         </View>
                         <View backgroundColor='white' style={{justifyContent:'center',alignItems:'center'}}>
                             <Title>{this.state.detail.name}</Title>
                             <Subheading>{this.state.detail.store_no}</Subheading>
                                    <View style={{flexDirection:'row'}}>
                                                <View style={{flexDirection:'row'}}>
                                                   
                                                   <Icon name='ios-arroe-round-forwored' size={32}></Icon>
                                                
                                                        <Text> Owner </Text>

                                                    
                                                </View>
                                                <View style={{flexDirection:'row'}}>
                                                <Text>Name</Text>
                                                
                                        
                                                </View>
                                    </View>
                         </View>
                    </View>
                
            </View>
        );
    }
}