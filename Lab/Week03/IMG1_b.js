import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

const YourApp = () => {
  return (
    <View style={{ flex: 1, backgroundColor:'#C7F4F6'}}>
      <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('./img/lock.png')}/>
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.headerText}>FORGET{'\n'}PASSWORD</Text>
      </View>

      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.descriptionText}>Provide your account’s email for which you want to reset your password</Text>
      </View>

      <View style={{ flex: 1, alignItems: 'center' }}>
         <View style={styles.inputContainer}>
          <Image source={require('./img/input_mail.png')} />
          <TextInput style={styles.input} placeholder="Email" />
      </View>
      </View>

      <View style={{ flex: 1, alignItems: 'center'}}>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
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
  descriptionText: {
    textAlign: 'center',
    fontWeight: 'bold',
    width: '80%',
  },
  button: {
    backgroundColor: 'yellow',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'black',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'#C4C4C4',
    width: '80%',
  },
  input: {
    height: 40,
    flex: 1,
  },

});


export default YourApp;
