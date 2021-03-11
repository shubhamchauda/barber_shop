import React from 'react'
import {Text, View,FlatList,SafeAreaView, StyleSheet} from 'react-native'
import {  Card, Searchbar,Appbar } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage'







const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const renderItem = ({ item }) => (
  <Item title={item.email} />
);





export default class Home extends React.Component
{   constructor(props)
    {
        super(props);
        this.state = {
                        search:'',
                         data:[],
                         shop_list:[]
                     }
    }


  
    
    
    async componentDidMount()
      { 
       let list =  await fetch('https://avalancheinfotech.com/projects/barbershop_api/owner/store/list_all.php')
       let result = await list.json()
       this.setState({shop_list:result.data})
       console.log(this.state.shop_list);
       await AsyncStorage.getItem('list',result.data)
       
       await AsyncStorage.getItem('data').then((value)=>{
          this.setState({data:[JSON.parse(value)]})
      })
    
      } 
       
  
    
    

    render()
    {
        return(
                 <View>
                    <Appbar.Header  style= {{backgroundColor:'#3a3f51'}}>
                    <Appbar.Action icon="dots-vertical" onPress={()=>this.props.navigation.toggleDrawer()}/>
                    <Appbar.Content
                    title='Home'/>
                    </Appbar.Header>

                    <Card>
                        <Card.Content>
                            <Searchbar placeholder="Enter  Zipcode"
                            keyboardType = 'numeric'
                                        onChangeText={(text)=>{this.setState({search:text})}}
                                        value={this.state.search}></Searchbar>

                        </Card.Content>
                        
                      
                    </Card>
                    <SafeAreaView>
                         <FlatList
                           data={this.state.shop_list}
                           renderItem={renderItem}
                            
                        />
                    </SafeAreaView>


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