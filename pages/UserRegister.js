import React from 'react'
import{StyleSheet,Text,View,Image,TouchableOpacity} from 'react-native'
import {Picker} from '@react-native-picker/picker'
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput,Card ,Button,Menu} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import Header from './header'
import RNDateTimePicker from '@react-native-community/datetimepicker';







export default class Login extends React.Component
{   
    constructor(props)
    {
        super(props)
        this.state = {
            f_name:'',
            l_name:'',
            dob:new Date(),
            gender:'Gender',
            address:'',
            city:'',
            state:'',
            phone:'',
            country:'',
            zipcode:'',
            email:'',
            password:'',


        }
    }

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
                                     value={this.state.email}
                                    onChangeText={(text) => {this.setState({firstname:text})}}/>
                        <TextInput style={{height:50,marginTop:20,backgroundColor:'white'}}
                                    label="Last Name"
                                     value={this.state.email}
                                    onChangeText={(text) => {this.setState({lastname:text})}}/>
                                    
                
                        <TextInput style={{height:50,marginTop:20,backgroundColor:'white'}}
                                    label="Address"
                                     value={this.state.email}
                                    onChangeText={(text) => {this.setState({Address:text})}}/>
                       <View>
                          <View style={{ borderBottomColor:'#D3D3D3',borderBottomWidth:1,width:150,marginTop:20}}>
                                <Picker  
                                    selectedValue={this.state.state}
                                    onValueChange={(itemValue) =>{this.setState({state:itemValue})}}>
                                    
                                    <Picker.Item label="city 1" value="city 1"  />
                                    <Picker.Item label="city 2" value="city 2"/>
                                    <Picker.Item label = 'city 3' value= 'city 3'/>
                               </Picker>
                          </View>              
                          <View 
                            style={{ position:'absolute', borderBottomColor:'#D3D3D3',borderBottomWidth:1,width:150,marginLeft:210,marginTop:20}}>
                              <Picker  
                                    selectedValue={this.state.state}
                                    onValueChange={(itemValue) =>{this.setState({state:itemValue})}}>
                                    
                                    <Picker.Item label="state 1" value="state 1"  />
                                    <Picker.Item label="state 2" value="state 2"/>
                                    <Picker.Item label = 'state 3' value= 'state 3'/>
                               </Picker>
                          </View>
                        </View> 

                        <View>
                             <View style={{ borderBottomColor:'#D3D3D3',borderBottomWidth:1,width:150,marginTop:20}}>
                                <Picker  
                                    selectedValue={this.state.state}
                                    onValueChange={(itemValue) =>{this.setState({state:itemValue})}}>
                                    <Picker.Item label="country 1" value="country 1"  />
                                    <Picker.Item label="country 2" value="country 2"/>
                                    <Picker.Item label = 'country 3' value= 'country 3'/>
                               </Picker>
                            </View>
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
                                                    {this.state.dob.getDate()+"-"+this.state.dob.getMonth()+'-'+this.state.dob.getFullYear()}
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
                        
                            <Button  style = {{ marginTop:15,height:40,width:103}}   color = '#3a3f51' mode="contained">Register</Button>
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