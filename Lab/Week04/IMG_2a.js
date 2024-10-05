import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';

const YourApp = () => {
  return (
    <View style={{ flex: 1, backgroundColor:'#FBCB00'}}>
      <View style={{ flex: 1, justifyContent: 'center'}}>
        <Text style={styles.headerText}>LOGIN</Text>
      </View>

      <View style={{ flex: 2, alignItems: 'center' }}>
        <View style={styles.inputContainer}>
          <Image source={require('./img/avatar_user.png')} style={styles.icon} />
          <TextInput style={styles.input} placeholder="Name" />
        </View>
        <View style={styles.inputContainer}>
        <Image source={require('./img/Group.png')} style={styles.icon} />
          <TextInput style={styles.input} placeholder="Password" />
          <Image source={require('./img/eye.png')} style={styles.icon} />
        </View>
      </View>


      <View style={{ flex: 3}}>
        <View style={styles.login}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <Text style={styles.ForGotPass}>Forgot your password?</Text>       
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  inputContainer: {
    backgroundColor: '#C4C4C44D',
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginTop: 10,
    borderColor: 'white',
    borderWidth: 1,            
  },
  input: {
    height: 40,
    flex: 1,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 15,
  },
  login:{
    justifyContent: 'center', 
    alignItems: 'center',
  },
  ForGotPass: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    width: '90%',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },

});


export default YourApp;
