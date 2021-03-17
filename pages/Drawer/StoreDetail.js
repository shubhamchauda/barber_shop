import React from 'react'
import {ImageBackground,Text, View,FlatList,SafeAreaView, StyleSheet,Image} from 'react-native'
import {  Card, Searchbar,Appbar,Title,Paragraph, Avatar, Subheading } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage'
import {color} from '../color'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {url} from '../constent'
import Icon  from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-simple-toast';





export default class Store_Detail extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
                        
                         detail:this.props.route.params.item,
                         data:[]
                     }
    
            
            }
            
   
   async componentDidMount()
   {
            await AsyncStorage.getItem('data').then((value)=>{this.setState({data:JSON.parse(value)})})
            console.log(this.state.data.id);
   }
   async updateFev()
   {
     
  let  details = 
             {
                 user_id:this.state.data.id,
                 store_id:this.state.detail.id,
                 stylist_id:'0'

              }
              console.log(details);

    var formBody = [];
            for (var property in details) {
                 var encodedKey = encodeURIComponent(property);
                 var encodedValue = encodeURIComponent(details[property]);
                 formBody.push(encodedKey + "=" + encodedValue);
                }
    console.log(formBody);
   let response = await fetch('https://avalancheinfotech.com/projects/barbershop_api/user/favorite/add.php',{
        method: 'POST',
        headers: 
        {
           'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body:formBody
        })
    
     let res = await response.json()
     Toast.show(res.message.toString())  
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
                            {/* <ImageBackground   style={{height:200,borderRadius:75,width:'50%',resizeMode:'contain'}} source={require('../../assets/favicon.png')}> */}
                            <Image style={{height:200,width:'100%',resizeMode:'contain'}} source={{uri:url+this.state.detail.image}} />
                            {/* </ImageBackground> */}
                         </View>
                        
                       <View backgroundColor='white' style={{height:550,justifyContent:'center',alignItems:'center',margin:20,borderRadius:20,borderWidth:1,borderColor:'lightgray'}}>
                     
                             <Text style={{fontSize:35,color:color.main,fontWeight:'bold',justifyContent:'center'}}>{this.state.detail.name}</Text>
                             <Subheading style={{fontSize:15}}>Store No. - {this.state.detail.store_no}</Subheading>
                                    <View style={{flexDirection:'column',marginTop:15,padding:20}}>
                                                
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
                         <View flexDirection='row'  style={{marginBottom:100,marginLeft:20,marginRight:20 ,borderTopLeftRadius:30,borderBottomEndRadius:30}}>
                             <View style={{padding:10,width:'50%',backgroundColor:'white',justifyContent:'center',alignItems:'center',borderTopLeftRadius:30,borderWidth:1}}>
                                 <TouchableOpacity style={{flexDirection:'row'}} onPress={()=>{this.updateFev()}}>
                                 <Icon size={20} style={{marginRight:10}} name='heart'></Icon>
                                <Text style={{fontSize:20,color:color.main}}>Add to Favourite
                                </Text>
                                </TouchableOpacity>
                             </View>
                             <View style={{padding:10,width:'50%',backgroundColor:color.main,justifyContent:'center',alignItems:'center',borderBottomEndRadius:30}}>
                                <TouchableOpacity onPress = {()=>{this.props.navigation.navigate('getappoinment')}}> 

                                <Text  style={{fontSize:20,color:'white'}}>
                                    Get Appoinment
                                </Text>
                                </TouchableOpacity>
                             </View>

                         </View>
                         
                    </View>
                    </ScrollView>
                
            </View>
        );
    }
}