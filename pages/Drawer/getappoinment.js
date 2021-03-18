import React from 'react'
import{StyleSheet,Text,TouchableOpacity,View,Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput,Card ,Button} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage'
// import Toast from 'react-native-toast-message';
import Toast from 'react-native-simple-toast';



import Header from './header';









export default class Login extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            user_id:"",
            store_id:"",
            stylist_id:"",
            service_id:"",
            booking_date:"",
            start_time="",
            end_time:"",
            pay_method:"",
            card_holder_name:"",
            card_number:"",
            card_expire="",     
            cvv:"",
            pay_status:""       

        }
    }
   async componentDidMount()
    {     
            await AsyncStorage.setItem('status','0')
            await AsyncStorage.removeItem('data','')
    }
 


    api =async ()=>{try {
        var details = {
            
        };
        var formBody = [];
            for (var property in details) {
             var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");
        let response = await  fetch('https://avalancheinfotech.com/projects/barbershop_api/user/appointment/add.php', {
                                 method: 'POST',
                                 headers: 
                                 {
                                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                                 },
                                 body:formBody
                                 });
      let json =  await response.json()
    
        console.log(json);
        if (json.status == '1')
        {
             AsyncStorage.setItem('status',json.status.toString())
             AsyncStorage.setItem('data',JSON.stringify(json.data))
         
              
 
       }   
        Toast.show(json.message.toString())         
        

            
            } catch( error)
            {
                console.error(error);
            } }


    render()
    {
        return(
            
            
            <View>
                

                <ScrollView>
                <Appbar.Header  style= {{backgroundColor:'#3a3f51'}}>
                    <Appbar.Action icon="dots-vertical" onPress={()=>this.props.navigation.toggleDrawer()}/>
                    <Appbar.Content
                    title='Home'/>
                    </Appbar.Header>
                            <View style={{margin:15,backgroundColor:'red'}}>





                            </View>

                </ScrollView>
               </View>
           

        );

    }
    
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      height:"100%",
      width:"100%",
      backgroundColor: '#eaeef3',
      justifyContent:'center'
      
      
    },
  });