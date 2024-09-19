import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';

const YourApp = () => {
  return (
    <View style={{ flex: 1, backgroundColor:'#31AA5230'}}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.headerText}>LOGIN</Text>
      </View>

      <View style={{ flex: 2, alignItems: 'center' }}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Email" />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="Password" />
          <Image source={require('./img/eye.png')} style={styles.icon} />
        </View>
      </View>


      <View style={{ flex: 3}}>
        <View style={styles.login}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <Text style={styles.descriptionText}>When you agree to terms and conditions</Text>
          <Text style={styles.ForGotPass}>For got your password?</Text>
          <Text style={styles.descriptionText}>Or login with</Text>        
        </View>
      </View>

      <View style={{ flex: 2}}>
        <View style={styles.img}>
        <View style={{backgroundColor:'blue'}}><Image source={require('./img/facebook.png')} style={styles.image} /></View>
        <View style={{backgroundColor:'#0680F1'}}><Image source={require('./img/zalo.png')} style={styles.image} /></View>
        <View style={{borderColor:'#0680F1',  borderWidth: 1}}><Image source={require('./img/google.png')} style={styles.image} /></View> 
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputContainer: {
    backgroundColor: '#C4C4C44D',
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginTop: 10,
  },
  input: {
    height: 40,
    flex: 1,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 15,
  },
  descriptionText: {
    textAlign: 'center',
    width: '80%',
    marginTop: 10,
  },
  login:{
    justifyContent: 'center', 
    alignItems: 'center',
  },
  ForGotPass: {
    color:'blue',
    textAlign: 'center',
    width: '80%',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#E53935',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
  img: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50, 
    height: 50,
    marginLeft: 15,
    marginRight: 15,
  },

});


export default YourApp;
