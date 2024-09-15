import React from 'react';
import { Text, View, Button} from 'react-native';

const YourApp = () => {

  return (
    <View style = {{flex: 1, backgroundColor:'#00CCF9'}}>
      <View style = {{flex: 4, backgroundColor:'red'}}></View>
      <View style = {{flex: 2, justifyContent:'center', alignItems:'center'}}>
        <Text>GROW YOUR BUSINESS</Text>
      </View>
      <View style = {{flex: 2, justifyContent:'center', alignItems:'center'}}>
        <Text> We will help you to grow your business using online server</Text>
      </View>    
      <View style = {{flex: 2, justifyContent:'space-around' ,alignItems:'center'}}>
        <Button title='LOGIN'></Button>
        <Button title='SIGN UP'></Button>
      </View>
    </View>
  );

};

export default YourApp;