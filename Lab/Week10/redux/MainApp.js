import { StatusBar } from 'react-native';
import React, { useRef } from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export default function MainApp() {
  const nextId = useRef(3);
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state);

  const handleAddItem = () => {
    dispatch({
      type: 'ADD',
      payload: { id: nextId.current.toString(), title: 'Hello' },
    });
    nextId.current += 1;
  };

  const handleDeleteItem = (id) => {
    dispatch({ type: 'DEL', payload: { id } });
  };

  const RenderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={require('./assets/tick.png')} style={styles.iconInput} />
      <Text style={{ flex: 1 }}>{item.title}</Text>
      <TouchableOpacity
        style={styles.buttonItem}
        onPress={() => handleDeleteItem(item.id)}>
        <Text style={styles.buttonText}>delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('./assets/Back.png')} />
        </TouchableOpacity>

        <View style={styles.headerText}>
          <Image source={require('./assets/avatar.png')} />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.headerTitle}>Hi, HuwTien</Text>
            <Text style={styles.headerSubtitle}>Have a great day ahead</Text>
          </View>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Image source={require('./assets/search.png')} style={styles.iconInput} />
        <TextInput style={styles.input} placeholder="Search" />
      </View>

      <FlatList
        data={tasks}
        renderItem={RenderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.flatList}
      />

      <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity style={styles.button} onPress={handleAddItem}>
          <Image source={require('./assets/plus.png')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


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
