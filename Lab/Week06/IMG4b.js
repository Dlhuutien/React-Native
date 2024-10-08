import * as React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const DATA = [
  {
    id: 'id01',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: require('./img/giacchuyen.png'),
  },
  {
    id: 'id02',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: require('./img/daynguon.png'),
  },
  {
    id: 'id03',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: require('./img/dauchuyendoipsps2.png'),
  },
  {
    id: 'id04',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: require('./img/dauchuyendoi.png'),
  },
  {
    id: 'id05',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: require('./img/carbusbtops2.png'),
  },
  {
    id: 'id06',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: require('./img/daucam.png'),
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Image source={title.image} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title.title}</Text>
      <Image source={require('./img/Group4.png')} />
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ paddingRight: 15, fontWeight: 'bold' }}>69.900 đ</Text>
        <Text style={{ color: 'grey' }}>-39%</Text>
      </View>
    </View>
  </View>
);

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
          headerTitle: () => (
            <View style={styles.inputContainer}>
            <Image
                source={require('./img/whh_magnifier.png')}style={styles.icon}
              />
            <TextInput style={styles.input}
            placeholder="Dây cáp usb"
            placeholderTextColor="#7D5B5B"/></View>
          
          ),
            headerTitleAlign: 'center',
            headerLeft: () => (
              <Image
                source={require('./img/ant-design_arrow-left-outlined.png')}
                style={styles.iconHeader}
              />
            ),
            headerRight: () => (
              <View style={{alignItems: 'center',flexDirection: 'row'}}>
                <Image source={require('./img/bi_cart-check.png')}/>
                <Image source={require('./img/Group2.png')} style={{marginHorizontal:18}}/>
              </View>
            ),
            headerStyle: {
              height: 45,
              backgroundColor: '#1BA9FF',
            },
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
};

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Image source={require('./img/Group10.png')} style={styles.iconFooter} />
      <Image source={require('./img/Group10.png')} style={styles.iconFooter} />
      <Image source={require('./img/Back.png')} style={styles.iconFooter} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

  item: {
    flex: 1,
    margin: 8,
    padding: 10,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
    overflow: 'hidden',
  },

  footer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#1BA9FF',
    alignItems: 'center',
  },
  iconFooter: {
    marginHorizontal: 44,
  },
  iconHeader: {
    marginHorizontal: 38,
  },

   inputContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    borderColor: 'white',
    borderWidth: 1,            
  },
  input: {
    height: 30, 
    width: '80%',
    paddingHorizontal: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default App;
