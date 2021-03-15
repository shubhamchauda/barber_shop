import React from 'react'
import {ImageBackground,Text, View,FlatList,SafeAreaView, StyleSheet,Image} from 'react-native'
import {  Card, Searchbar,Appbar,Title,Paragraph, Avatar, Subheading } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage'
import {color} from '../color'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
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
                    <ScrollView>
                     <View style={{flexDirection:'column',justifyContent:'center'}}>

                         <View style={{alignItems:'center',borderRadius:10}}>
                            <ImageBackground   style={{height:200,borderRadius:75,width:'50%',resizeMode:'contain'}} source={require('../../assets/favicon.png')}>
                            <Image style={{height:200,borderRadius:75,width:'100%',resizeMode:'contain'}} source={{uri:url+this.state.detail.image}} />
                            </ImageBackground>
                         </View>
                        
                       <View backgroundColor='white' style={{height:550,justifyContent:'center',alignItems:'center',margin:20,borderRadius:20,borderWidth:1,borderColor:'lightgray'}}>
                     
                             <Text style={{fontSize:35,color:color.main,fontWeight:'bold',justifyContent:'center'}}>{this.state.detail.name}</Text>
                             <Subheading style={{fontSize:15}}>Store No.{this.state.detail.store_no}</Subheading>
                                    <View style={{flexDirection:'column',marginTop:15}}>
                                                
                                                <View style={{flexDirection:'row',margin:5           }}>
                                                    <View style={{flexDirection:'row',width:'50%',justifyContent:'flex-start',alignItems:'center'}}>
                                                   
                                                        <Icon name='person' size={15} style={{marginRight:'5%'}}></Icon>
                                                
                                                        <Text style={{fontSize:20}} >Owner </Text>                                                    
                                                    </View>
                                                    <View style={{flexDirection:'row',width:'50%',justifyContent:'flex-start',alignItems:'center'}}>
                                                                                                                
                                                        <Text style={{fontSize:20}}>{st.f_name} {st.l_name}</Text>
                                                                                        
                                                    </View>
                                                </View>
                                                
                                                <View style={{flexDirection:'row',marginTop:'1%',margin:5}}>
                                                    <View style={{flexDirection:'row',width:'50%',justifyContent:'flex-start',alignItems:'center'}}>
                                                    <Icon name='people' size={15} style={{marginRight:'5%'}}></Icon>
                                                                                                
                                                        <Text style={{fontSize:20}} >Coorporation</Text>                                                    
                                                    </View>
                                                    <View style={{flexDirection:'row',width:'50%',justifyContent:'flex-start',alignItems:'center'}}>
                                                                                                                
                                                        <Text style={{fontSize:20}}>{st.coorporation_name}</Text>
                                                                                        
                                                    </View>
                                                </View>

                                                <View style={{flexDirection:'row',marginTop:'2%',margin:5}}>
                                                    <View style={{flexDirection:'row',width:'50%',justifyContent:'flex-start',alignItems:'center'}}>
                                                   
                                                    <Icon name='call' size={15} style={{marginRight:'5%'}}></Icon>

                                                
                                                        <Text style={{fontSize:20}} >Phone</Text>                                                    
                                                    </View>
                                                    <View style={{flexDirection:'row',width:'50%',justifyContent:'flex-start',alignItems:'center'}}>
                                                                                                                
                                                        <Text style={{fontSize:20}}>{st.phone}</Text>
                                                                                        
                                                    </View>
                                                </View>
                                                <View style={{flexDirection:'row',marginTop:'2%',margin:5}}>
                                                    <View style={{flexDirection:'row',width:'50%',justifyContent:'flex-start',alignItems:'center'}}>
                                                   
                                                        <Icon name='mail' size={15} style={{marginRight:'5%'}}></Icon>
                                                
                                                        <Text style={{fontSize:20,}} >Email</Text>                                                    
                                                    </View>
                                                    <View style={{flexDirection:'row',width:'50%',justifyContent:'flex-start',alignItems:'center'}}>
                                                                                                                
                                                        <Text style={{fontSize:20}}>{st.email}</Text>
                                                                                        
                                                    </View>
                                                </View><View style={{flexDirection:'row',marginTop:'2%',margin:5}}>
                                                    <View style={{flexDirection:'row',width:'50%',justifyContent:'flex-start',alignItems:'center'}}>
                                                   
                                                        <Icon name='location' size={15} style={{marginRight:'5%'}}></Icon>
                                                
                                                        <Text style={{fontSize:20}} >Address</Text>                                                    
                                                    </View>
                                                    <View style={{flexDirection:'row',width:'50%',justifyContent:'flex-start',alignItems:'center'}}>
                                                                                                                
                                                        <Text style={{fontSize:20}}>{st.address}</Text>
                                                                                        
                                                    </View>
                                                </View><View style={{flexDirection:'row',marginTop:'2%',margin:5}}>
                                                    <View style={{flexDirection:'row',width:'50%',justifyContent:'flex-start',alignItems:'center'}}>
                                                   
                                                        <Icon name='zip-disk' size={15} style={{marginRight:'5%'}}></Icon>
                                                
                                                        <Text style={{fontSize:20}} >Zip code</Text>                                                    
                                                    </View>
                                                    <View style={{flexDirection:'row',width:'50%',justifyContent:'flex-start',alignItems:'center'}}>
                                                                                                                
                                                        <Text style={{fontSize:20}}>{st.zipcode}</Text>
                                                                                        
                                                    </View>
                                                </View>
                                                <View style={{flexDirection:'row',marginTop:'2%',margin:5}}>
                                                    <View style={{flexDirection:'row',width:'50%',justifyContent:'flex-start',alignItems:'center'}}>
                                                   
                                                        <Icon name='link' size={15} style={{marginRight:'5%'}}></Icon>
                                                
                                                        <Text style={{fontSize:20}} >Web Link</Text>                                                    
                                                    </View>
                                                    <View style={{flexDirection:'row',width:'50%'}}>
                                                                                                                
                                                        <Text style={{fontSize:20}}>{st.web_url}</Text>
                                                                                        
                                                    </View>
                                                </View>
                                                



                                     </View>

                                  
                         </View>
                         
                    </View>
                    </ScrollView>
                
            </View>
        );
    }
}