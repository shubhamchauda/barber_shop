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
            email:'',
           

        }
    }
   async componentDidMount()
    {     
            await AsyncStorage.setItem('status','0')
            await AsyncStorage.removeItem('data','')
    }
 


    api =async ()=>{try {
        var details = {
            email: this.state.email,
        };
        var formBody = [];
            for (var property in details) {
             var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");
        let response = await  fetch('https://avalancheinfotech.com/projects/barbershop_api/user/forgetpassword.php', {
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
            

                <Header title="Forgot password"/>
                
                <Card style={{margin:15 }}>
                   
                    
                
                    <Card.Content style = {{padding:30}}>
                                     
                        <TextInput style={{height:50,marginTop:60,backgroundColor:'white'}}
                                    label="Email"
                                     value={this.state.email}
                                    onChangeText={(text) => {this.setState({email:text})}}/>
                        
                        
                        </Card.Content>

                        <Card.Content>
                        <Button onPress={this.api}  style = {{ marginTop:5,height:40,width:90}}   color = '#3a3f51' mode="contained">Send</Button>
                        </Card.Content> 
                     </Card>
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