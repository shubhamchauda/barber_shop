import React from 'react'
import{Text,TouchableOpacity,View,StyleSheet,ScrollView, SafeAreaView} from 'react-native'
import { TextInput,Card ,Button} from 'react-native-paper';



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

    barberLogin()
    {
        this.props.navigation.navigate('BarberLogin')
    }
    render()
    {
        return(
           
            <View>
                 <ScrollView>
            <Header title='Barber Login'/>
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
                    
                    <Button  style = {{ marginTop:5,height:40,width:90}}   color = '#3a3f51' mode="contained">Login</Button>
                    <Button style = {{alignItems:'baseline',position:'absolute',marginTop:5,marginLeft:253}}  onPress ={()=>{this.props.navigation.navigate('Login')}}>Login</Button>
                    <Button style = {{marginLeft:253,marginTop:35,position:'absolute'}} onPress ={()=>{this.props.navigation.navigate('UserRegister')}}>register ?</Button>
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