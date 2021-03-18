import React from 'react'
import {ImageBackground,Text, View,FlatList,SafeAreaView, StyleSheet,Image} from 'react-native'
import {  Card, Searchbar,Appbar,Title,Paragraph, Avatar } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage'
import {color} from '../color'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {url} from '../constent'









export default class Home extends React.Component
{   constructor(props)
    {
        super(props);
        this.state = {
                        search:'',
                         data:[],
                         shop_list:[],
                         shop_list_org:[]
                        //  color: ['red','white','green','cyan','blue','violet','grey','orange','black'],
                        //  imgBg:[],
                         
                     }
    }    
    
    async componentDidMount()
      { 
      
       let list =  await fetch('https://avalancheinfotech.com/projects/barbershop_api/owner/store/list_all.php')
       let result = await list.json()
       this.setState({shop_list:result.data,shop_list_org:result.data})
      //  for(i=1;i<=this.state.shop_list.length;i++){
      //      this.state.imgBg.push(this.state.color[Math.floor(Math.random() * 10)]);
      //  }
      //  console.log(this.state.imgBg);
      
    
      } 
    async  componentWillUnmount()
      {
        let list =  await fetch('https://avalancheinfotech.com/projects/barbershop_api/owner/store/list_all.php')
       let result = await list.json()
       this.setState({shop_list:result.data,shop_list_org:result.data})

      }
      searchText = (text) => {
        
                  if(!text.trim()==''){
                  const newArray = this.state.shop_list_org.filter(function(item) {
                    console.log((item));
                     const itemData = item.zipcode ? item.zipcode.toUpperCase() : ''.toUpperCase();
                     const textData = text.toUpperCase().trim();
                    return itemData.indexOf(textData) > -1;
                 });
                   this.setState({ shop_list: newArray, searchText:text});
                }
                  else{
                      this.setState({ shop_list: this.state.shop_list_org});
                     }
     
                }
       
  
      renderItem = ({item,index}) => (
        
        
      <TouchableOpacity onPress={()=> this.props.navigation.navigate('store_detail',{item}) }>
        
       <View style = {{ flexDirection:'row',padding:10, borderRadius:5,marginHorizontal:10,marginBottom:10,backgroundColor: color.secondary,padding:5,alignItems:'center'}}>
        
          <View style = {{resizeMode: 'stretch',height:100,width:'30%' ,resizeMode:'stretch',backgroundColor:color.list_bg}}>
          <Image  style={{height:'90%',width:'90%',resizeMode:'contain', margin:10}} source={{uri:url+item.image}} />

        </View> 
        {/* <Avatar.Text style ={{backgroundColor:this.state.imgBg[index]}} size={100} label={item.name[0] } ><Avatar.Image size={100} source={{uri:url+item.image}} /></Avatar.Text> */}
          <View style={{width:'70%',marginLeft:10}}>
          <Paragraph style={{fontSize:9,marginBottom:-10}}>#{item.store_no} </Paragraph>
                <Title>{item.name}</Title>
                <Paragraph>Phone :- {item.phone} 
                </Paragraph>
               
                <Paragraph>Zipcode :- {item.zipcode}
                </Paragraph>
                <Paragraph>Web Site :- {item.web_url} </Paragraph>
            </View>
         
       </View>
       </TouchableOpacity>  
      )
    

    render()
    {
        return(
                 <View>
                    <Appbar.Header  style= {{backgroundColor:'#3a3f51'}}>
                    <Appbar.Action icon="dots-vertical" onPress={()=>this.props.navigation.toggleDrawer()}/>
                    <Appbar.Content
                    title='Home'/>
                    </Appbar.Header>

                    <Card style={{marginBottom:10}}>
                        <Card.Content>
                            <Searchbar placeholder="Enter  Zipcode"
                                        keyboardType = 'numeric'
                                        onChangeText={(text)=>{this.setState({search:text});this.searchText(text)}}
                                        ></Searchbar>
                                        
                         
                        </Card.Content>
                        
                      
                    </Card>
                                      
                    <FlatList
                           
                           data={this.state.shop_list}
                           renderItem={this.renderItem}
                           keyExtractor = {(item) => item.store_no}
                          />


               </View>
               );
    }    
}
const styles = StyleSheet.create(
  {
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  }
)