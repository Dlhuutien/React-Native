import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

export default function Screen1(props) {
    const { navigation, route } = props
    const { navigate, goBack } = navigation
    const [name, setName] = useState('');


  return (
    <View style={{ flex: 1}}>
      <View style={{ flex: 6, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('./img/Image95.png')} style={styles.icon} />
      </View>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.headerText}>MANAGE YOUR {'\n'}TASK</Text>
      </View>
      <View style={styles.inputContainer}>
        <Image source={require('./img/Frame.png')} style={styles.iconInput} />
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          onChangeText={(name) => setName(name)}
        />
      </View>

      <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity style={styles.button}
          onPress={() => {navigate('Screen2', { name: name,})}} >
          <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: '60%',
    resizeMode: 'contain',
  },
  headerText: {
    color: '#8353E2',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal:'auto',
  },
  input: {
    height: 40,
    flex: 1,
    paddingHorizontal: 10,
  },
  iconInput: {
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: '#00BDD6',
    paddingVertical: 10,
    alignItems: 'center',
    width: '50%',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
  },
});

