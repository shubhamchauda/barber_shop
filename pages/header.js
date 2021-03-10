import * as React from 'react';
import { Appbar } from 'react-native-paper';

export default class Header extends React.Component {
   

 

  render() {
    return (
      <Appbar.Header style= {{backgroundColor:'#3a3f51'}}>
       
        <Appbar.Content
          title={this.props.title}
        />
      </Appbar.Header>
    );
  }
}