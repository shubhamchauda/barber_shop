import * as React from 'react';
import { View } from 'react-native';
import { Appbar, Button } from 'react-native-paper';




export default class Header extends React.Component {
   


 

  render() {
    return (
      <View>
      <Appbar.Header  style= {{backgroundColor:'#3a3f51'}}>
       <Appbar.Action icon="dots-vertical"/>
        <Appbar.Content
          title={this.props.title}/>
      </Appbar.Header>
    
      </View>
    
    );
  }
}