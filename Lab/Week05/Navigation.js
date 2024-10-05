import * as React from 'react';
import { useState } from 'react';
import { Button, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ route, navigation }) {
  const { selectedColor } = route.params || {};
  const getImageSource = () => {
    switch (selectedColor) {
      case 'silver':
        return require('./img/vs_silver.png');
      case 'red':
        return require('./img/vs_red.png');
      case 'black':
        return require('./img/vs_black.png');
      default:
        return require('./img/vs_blue.png');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ flex: 5, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={getImageSource()} style={styles.image} />
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>
        <View style={{ flexDirection: 'row'}}>
        <Image source={require('./img/star.png')}/>
        <Image source={require('./img/star.png')}/>
        <Image source={require('./img/star.png')}/>
        <Image source={require('./img/star.png')}/>
        <Image source={require('./img/star.png')}/>
        </View>
         <View>(Xem 828 đánh giá)</View>
        </Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row'}}>
      <View styles={{fontWeight: 'bold'}}>1.790.000 đ</View>
      <View style={styles.price}>1.790.000 đ</View>
      </View>

      <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row'}}>
      <View style={{color:'red'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</View>
      <Image source={require('./img/Vector.png')}/>
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button 
        title="4 MÀU-CHỌN MÀU"
        onPress={() => navigation.navigate('Details')}
      />
      </View>

      <View style={{ flex: 1, alignItems: 'center'}}>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>CHỌN MUA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function DetailsScreen({ navigation }) {
  const selectColor = (color) => {
    navigation.navigate('Home', { selectedColor: color });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <View style={{ flex: 10, justifyContent: 'center', alignItems: 'center'}}>
      <View>Chọn màu bên dưới</View>
      <TouchableOpacity onPress={() => selectColor('silver')}>
        <Image source={require('./img/Rectangle4.png')} style={styles.color} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => selectColor('red')}>
        <Image source={require('./img/Rectangle5.png')} style={styles.color}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => selectColor('black')}>
        <Image source={require('./img/Rectangle6.png')} style={styles.color}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => selectColor('blue')}>
        <Image source={require('./img/Rectangle7.png')} style={styles.color}/>
      </TouchableOpacity>
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button 
        title="Xong"
        onPress={() => navigation.navigate('Home')} 
      />
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
  <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}  />
  <Stack.Screen
    name="Details"
    component={DetailsScreen}
  />
</Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '40%', 
    resizeMode: 'contain',
  },
  price:{
    marginLeft:60,
  },

  button: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 100,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
  color: {
    width: 60,
    height: 60,
  }

});

export default App;
