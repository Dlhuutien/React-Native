import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from 'react-native';

const DATA = [
  {
    id: 'id01',
    title: 'Ca nấu lẩu, nấu lẩu mini',
    image: require('./img/xa_can_cau.png'),
  },
  {
    id: 'id02',
    title: '1kg khô gà bơ tỏi',
    image: require('./img/xa_can_cau.png'),
  },
  {
    id: 'id03',
    title: 'Xe cần cẩu đa năng',
    image: require('./img/xa_can_cau.png'),
  },
  {
    id: 'id04',
    title: 'Đồ chơi dạng mô hình',
    image: require('./img/xa_can_cau.png'),
  },
  {
    id: 'id05',
    title: 'Lãnh đạo giản đơn',
    image: require('./img/xa_can_cau.png'),
  },
  {
    id: 'id06id06',
    title: 'Hiểu lòng con trẻ',
    image: require('./img/xa_can_cau.png'),
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Image source={title.image} />
    <Text style={styles.title}>{title.title}</Text>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flexDirection: 'row',
    borderWidth:1,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center', 
  },
  title: {
    fontSize: 16,
  },
});

export default App;
