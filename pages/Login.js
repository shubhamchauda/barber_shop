import React from 'react'
import{StyleSheet,Text,TouchableOpacity,View,Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput,Card ,Button} from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage'



import Header from './header'








export default class Login extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            email:'',
            password:''

        }
    }




    api =async ()=>{try {
        let response = await  fetch('https://www.avalancheinfotech.com/projects/barbershop_api/user/login.php', {
                                 method: 'POST',
                                 headers: 
                                 {
                                         Accept: 'application/json',
                                         'Content-Type': 'application/json'
                                 },
                                 body: JSON.stringify({
                                    email: this.state.email,
                                    password: this.state.password

                                    })
                                 });
      let json =  await response.json()
        console.log(json.status);
        console.log(this.state.email)
        console.log(this.state.password)
        console.log(json);
        if (json.status)
        {
             AsyncStorage.setItem('status',json.status.toString())
             AsyncStorage.setItem('data',json.message.toString())
             
             this.props.navigation.replace('drawer')
              
 
       }

            
            } catch( error)
            {
                console.error(error);
            } }


    render()
    {
        return(
            
            
            <View>
                <ScrollView>
                <Header title="Login"/>
                
                <Card style={{margin:15 ,height:350}}>
                   
                    
                
                    <Card.Content style = {{padding:30}}>                
                        <TextInput style={{height:50,marginTop:60,backgroundColor:'white'}}
                                    label="Email"
                                     value={this.state.email}
                                    onChangeText={(text) => {this.setState({email:text})}}/>
                        <TextInput style={{marginTop:15,height:50,backgroundColor:'white'}}
                                    label = "Password"
                                    secureTextEntry={true}
                                    value={this.state.password}
                                    onChangeText = {(text)=>{this.setState({password:text})}}/>
                        </Card.Content>
                        <Card.Content>
                        
                        <Button onPress={this.api}  style = {{ marginTop:5,height:40,width:90}}   color = '#3a3f51' mode="contained">Login</Button>
                        <Button style = {{alignItems:'baseline',position:'absolute',marginTop:5,marginLeft:253}}  onPress ={()=>{this.props.navigation.navigate('BarberLogin')}}>Barber !!!</Button>
                        <Button style = {{marginLeft:253,marginTop:35,position:'absolute'}} onPress ={()=>{this.props.navigation.navigate('UserRegister',{'screen1':'User Register'})}}>register ?</Button>
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