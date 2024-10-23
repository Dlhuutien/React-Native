import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  Alert,
} from 'react-native';

export default Screen2 = (props) => {
  const { navigation, route } = props;
  const { name } = route.params;
  const { navigate, goBack } = navigation;
  const [searchText, setSearchText] = useState('');

  const [data, setData] = useState([]);
  const url = 'https://670b39d4ac6860a6c2cb73c4.mockapi.io/discription';

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const fnDel = (id) => {
    fetch(url.concat('/').concat(id), {
      method: 'DELETE',
    })
      .then(() => {
        setData((prevData) => prevData.filter((item) => item.id !== id));
      })
      .catch((error) => console.error('Error:', error));
  };
  /*
  const fnDel = (id) => {
    Alert.alert(
      'Xác nhận xóa',
      'Bạn có chắc chắn muốn xóa mục này không?',
      [
        {
          text: 'Hủy',
          style: 'cancel',
        },
        {
          text: 'Xóa',
          onPress: () => {
            fetch(url.concat('/').concat(id), {
              method: 'DELETE',
            })
              .then(() => {
                setData((prevData) =>
                  prevData.filter((item) => item.id !== id)
                );
              })
              .catch((error) => console.error('Error:', error));
          },
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  };
*/

const fnEdit = (id, title) => {
  navigate('Screen3', { id, title, name });
};

const Item = ({ title, id }) => (
  <View style={styles.item}>
    <Image source={require('./img/tick.png')} style={styles.iconInput} />
    <Text style={{ flex: 1 }}>{title}</Text>
    <View>
      <TouchableOpacity style={styles.buttonItem} onPress={() => fnDel(id)}>
        <Text style={styles.buttonText}>delete</Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity
        style={styles.buttonItem}
        onPress={() => fnEdit(id, title)}>
        <Image source={require('./img/edit.png')} />
      </TouchableOpacity>
    </View>
  </View>
);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('./img/Back.png')} />
        </TouchableOpacity>

        <View style={styles.headerText}>
          <Image source={require('./img/avatar.png')} />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.headerTitle}>Hi, {name}</Text>
            <Text style={styles.headerSubtitle}>Have a great day ahead</Text>
          </View>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Image source={require('./img/search.png')} style={styles.iconInput} />
        <TextInput style={styles.input} placeholder="Search" />
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => <Item title={item.title} id={item.id} />}
        keyExtractor={(item) => item.id.toString()}
        style={styles.flatList}
      />

      <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigate('Screen3', {
              name: name,
            });
          }}>
          <Image source={require('./img/plus.png')} />
        </TouchableOpacity>
      </View>

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
    backgroundColor: '#9095A0',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 25,
  },
  flatList: {
    height: 240,
  },
  buttonItem: {
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: '#00BDD6',
    paddingVertical: 10,
    alignItems: 'center',
    width: '15%',
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerSubtitle: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '700',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 30,
    color: '#171A1F',
    marginLeft: 10,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 'auto',
  },
  input: {
    height: 40,
    flex: 1,
    paddingHorizontal: 10,
  },
  iconInput: {
    marginHorizontal: 10,
  },
});
