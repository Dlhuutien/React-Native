import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

const YourApp = () => {
  return (
    <View style={{ flex: 1, backgroundColor:'#C7F4F6'}}>
      <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.header}>CODE</Text>
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.headerText}>VERIFICATION</Text>
      </View>

      <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.descriptionText}>Enter ontime password sent on
++849092605798</Text>
      </View>

      <View style={{ flex: 2}}>
        <View style={styles.container}>
        <Image source={require('./img/Rectangle.png')} style={styles.image} />
        <Image source={require('./img/Rectangle.png')} style={styles.image} />
        <Image source={require('./img/Rectangle.png')} style={styles.image} />
        <Image source={require('./img/Rectangle.png')} style={styles.image} />
        <Image source={require('./img/Rectangle.png')} style={styles.image} />
        <Image source={require('./img/Rectangle.png')} style={styles.image} />
        </View>
      </View>

      <View style={{ flex: 2, alignItems: 'center'}}>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>VERIFY CODE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
    fontSize: 65,
    textAlign: 'center',
    fontWeight: 'bold',
  },
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
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 43, 
    height: 50, 
  },

});


export default YourApp;
