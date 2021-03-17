import React from 'react'
import{StyleSheet,Text,View,Image,TouchableOpacity} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput,Card ,Button,Menu} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import Header from './header'
import RNDateTimePicker from '@react-native-community/datetimepicker';
import Toast from 'react-native-simple-toast';







export default class Login extends React.Component
{   
    constructor(props)
    {
        super(props)
        this.state = {
            state_list:[],
            f_name:'',
            l_name:'',
            dob:new Date(),
            gender:'Male',
            address:'',
            city:'',
            state:'--select--',
            phone:'',
            country:'',
            zipcode:'',
            email:'',
            password:'',


        }
    }

  


   async componentDidMount()
   {
    fetch("https://avalancheinfotech.com/projects/barbershop_api/admin/state/list.php")
      .then(res=>res.json())
      .then(async (res) => {
        this.setState({state_list:res.data})
      })
      .catch((errorMessage) => {
      })
   }


    api =async ()=>{
      try {
      var details = {
         f_name:this.state.f_name,
         l_name:this.state.l_name,
         phone:this.state.phone,
         email:this.state.email,
         password:this.state.password,
         dob:this.state.dob.getDate()+"-"+(this.state.dob.getMonth()+1)+'-'+this.state.dob.getFullYear(),
         gender:this.state.gender,
         address:this.state.address,
         city:this.state.city,
         state:this.state.state,
         country:this.state.country,
         zipcode:this.state.zipcode,
        // f_name:'Shubham',
        // l_name:'Chauda',
        // phone:'9630069774',
        // email:'avl.shubhamchauda@gmail.com',
        // password:'123456',
        // dob:'0000',
        // gender:'Male',
        // address:'D-18C, Brajaayani NAgar, Limbodi',
        // city:'Indore',
        // state:'MP',
        // country:'India',
        // zipcode:'452020',

      };
      var formBody = [];
          for (var property in details) {
           var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
          }
          formBody = formBody.join("&");
             
      let response = await  fetch('https://avalancheinfotech.com/projects/barbershop_api/user/register.php',{
                               method: 'POST',
                               headers: 
                               {
                                  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                               },
                               body:formBody
                               });
    let json =  await response.json()
      console.log(json.status);
      console.log(this.state.email)
      console.log(this.state.password)
      console.log(json);
      if (json.status == '1')
      {
         
           this.props.navigation.replace('Login')
            

     }   
      Toast.show(json.message.toString())         
      

          
          } catch( error)
          {
              console.error(error);
          } }

    state = {
   
        mode: 'date',
        show: false,
      }
    
      setDate = (event, dob) => {
        dob = dob || this.state.dob;
    
        this.setState({
          show: Platform.OS === 'ios' ? true : false,
          dob,
        });
        
      }
    
      show = mode => {
        this.setState({
          show: true,
          mode,
        });
      }
    
      datepicker = () => {
        this.show('date');
      }
    
      selectedProjectChange=(value)=>{
        this.setState({state:value.state,country:value.country})
      }
    
    render()
    {
        const { show, dob, mode } = this.state;
        return(
            
            
            <View>
                
                <Header title = 'User Register'/>
                <ScrollView>

                <Card style={{margin:15 }}>
                    
                
                    <Card.Content style = {{padding:30,}}>
                        <TextInput style={{height:50,marginTop:60,backgroundColor:'white'}}
                                    label="First Name"
                                     value={this.state.f_name}
                                    onChangeText={(text) => {this.setState({f_name:text})}}/>
                        <TextInput style={{height:50,marginTop:20,backgroundColor:'white'}}
                                    label="Last Name"
                                     value={this.state.l_name}
                                    onChangeText={(text) => {this.setState({l_name:text})}}/>
                                    
                
                        <TextInput style={{height:50,marginTop:20,backgroundColor:'white'}}
                                    label="Address"
                                     value={this.state.address}
                                    onChangeText={(text) => {this.setState({address:text})}}/>
                       <View>
                          <View style={{width:150}}>
                          <TextInput style={{height:50,marginTop:20,backgroundColor:'white'}}
                                    label="City"
                                     value={this.state.city}
                                    onChangeText={(text) => {this.setState({city:text})}}/>
                          </View>              
                          <View 
                            style={{ position:'absolute', borderBottomColor:'#D3D3D3',borderBottomWidth:1,width:150,marginLeft:210,marginTop:20}}>
                              <Picker  
                                    selectedValue={this.state.state}
                                    onValueChange={(itemValue, itemIndex) => this.selectedProjectChange(itemValue)}>
                                    <Picker.Item label={this.state.state} value=""  />
                                    { this.state.state_list.map((item, index)=>(
                                      <Picker.Item label={item.state} value={item} key={index} />)
                                    )}
                               </Picker>
                          </View>
                        </View> 

                        <View>
                             
                          <TextInput style={{height:50,marginTop:20,width:150,backgroundColor:'white'}}
                                    label="Country"
                                    editable={false}
                                     value={this.state.country}
                                    onChangeText={(text) => {this.setState({country:text})}}/>
                            <View style={{position:'absolute', borderBottomColor:'#D3D3D3',width:150,marginLeft:210,marginTop:20,}}>
                            <TextInput 
                                    style={{height:50,backgroundColor:'white'}}
                                    keyboardType = 'numeric'
                                    label='Zip Code'
                                    onChangeText = {(text)=> this.setState({zipcode:text})}
                                    value = {this.state.zipcode}
                             /> 
                            </View>
                        </View>
                        <TextInput style={{height:50,marginTop:20,backgroundColor:'white'}}
                                    label="Phone:- +91 999999999"
                                    keyboardType='numeric'
                                     value={this.state.phone}
                                    onChangeText={(text) => {this.setState({phone:text})}}/>

                        <View style={{marginTop:5}}>          
                          <View style={{marginTop:5,height:51,width:200}}>
                            <Text style={{position:'absolute',fontSize:20,marginTop:22}}>DOB:</Text>
                                <TouchableOpacity 
                                        onPress={this.datepicker}
                                        style={{width:140,}}>
                                            <Text 
                                                style={{marginLeft:50,marginTop:15,
                                                    fontSize:20,borderBottomColor:'#D3D3D3',borderBottomWidth:1,padding:5,width:100}}>
                                                    {this.state.dob.getDate()+"-"+(this.state.dob.getMonth()+1)+'-'+this.state.dob.getFullYear()}
                                            </Text>
                                </TouchableOpacity>
                                                {console.log(this.state.dob.getDate()+"-"+this.state.dob.getMonth()+'-'+this.state.dob.getFullYear())}
                                                {show && <RNDateTimePicker value={this.state.dob}
                                                 mode='date'                                         
                                                 display='default'
                                                 onChange={this.setDate} />}
                                        
                          </View>
                        
                           <View 
                            style={{position:'absolute', borderBottomColor:'#D3D3D3',borderBottomWidth:1,width:150,marginLeft:210,marginTop:5}}>
                              <Picker  
                                    selectedValue={this.state.gender}
                                    onValueChange={(itemValue) =>{this.setState({gender:itemValue})}}>
                                    
                                    <Picker.Item label="Male" value="Male"  />
                                    <Picker.Item label="Female" value="Female"/>
                                    <Picker.Item label = 'Other' value= 'Other'/>
                               </Picker>
                            </View>
                        </View>            
                        
                                        
                        <TextInput style={{height:50,marginTop:20,backgroundColor:'white'}}
                                    label="Email"
                                     value={this.state.email}
                                    onChangeText={(text) => {this.setState({email:text})}}/>
                        <TextInput style={{marginTop:15,height:50,backgroundColor:'white'}}
                                    label = "Password"
                                    secureTextEntry={true}
                                    value={this.state.password}
                                    onChangeText = {(text)=>{this.setState({password:text})}}/>
                        </Card.Content>
                        <Card.Content style={{marginBottom:60}}>
                        
                            <Button onPress={this.api} style = {{ marginTop:15,height:40,width:103}}   color = '#3a3f51' mode="contained">Register</Button>
                            <Button style = {{alignItems:'baseline',position:'absolute',marginTop:5,marginLeft:253}}  onPress ={()=>{this.props.navigation.navigate('BarberLogin')}}>Barber !!!</Button>
                            <Button style = {{marginLeft:253,marginTop:35,position:'absolute'}} onPress ={()=>{this.props.navigation.navigate('Login')}}>Login</Button>
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