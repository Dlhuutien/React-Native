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
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const DATA = [
  {
    id: 'id01',
    title: 'Ca nấu lẩu, nấu lẩu mini',
    image: require('./img/ca_nau_lau.png'),
    shop: 'Shop Devang'
  },
  {
    id: 'id02',
    title: '1kg khô gà bơ tỏi',
    image: require('./img/ga_bo_toi.png'),
    shop: 'Shop LTD Food'
  },
  {
    id: 'id03',
    title: 'Xe cần cẩu đa năng',
    image: require('./img/xa_can_cau.png'),
    shop: 'Shop thế giới đồ chơi'
  },
  {
    id: 'id04',
    title: 'Đồ chơi dạng mô hình',
    image: require('./img/do_choi_dang_mo_hinh.png'),
    shop: 'Shop thế giới đồ chơi'
  },
  {
    id: 'id05',
    title: 'Lãnh đạo giản đơn',
    image: require('./img/lanh_dao_gian_don.png'),
    shop: 'Shop Minh Long Book'
  },
  {
    id: 'id06id06',
    title: 'Hiểu lòng con trẻ',
    image: require('./img/hieu_long_con_tre.png'),
    shop: 'Shop Minh Long Book'
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Image source={title.image} />
    <View style={styles.textContainer}>
    <Text style={styles.title} numberOfLines={1}>{title.title}</Text>
    <Text style={{color: 'red'}}>{title.shop}</Text>
    </View>
    <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>CHAT</Text>
    </TouchableOpacity>
  </View>
);

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
     <View><Text style={{paddingHorizontal:20}}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!</Text></View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item} />}
        keyExtractor={(item) => item.id}
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
            headerTitle: 'Chat',
            headerTitleAlign: 'center',
            headerLeft: () => (
                 <Image source={require('./img/ant-design_arrow-left-outlined.png')} style={styles.iconHeader}/>
            ),
            headerRight: () => 
            <Image source={require('./img/bi_cart-check.png')} style={styles.iconHeader}/>,
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
      <Image source={require('./img/Group10.png')} style={styles.iconFooter}/>
      <Image source={require('./img/Group10.png')} style={styles.iconFooter}/>
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
    flexDirection: 'row',
    borderBottomWidth: 1,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
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
  iconHeader:{
    marginHorizontal: 38,
  },
  
  
});

export default App;
