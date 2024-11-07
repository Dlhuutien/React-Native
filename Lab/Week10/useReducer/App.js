import React, { useState, useEffect, useReducer, useRef } from 'react';
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
} from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
        },
      ];
    }
    case 'changed': {
      return state.map((t) => {
        if (t.id === action.state.id) {
          return action.state;
        } else {
          return t;
        }
      });
    }
    case 'DEL': {
      return state.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};

export default function App() {
   const nextId = useRef(3);
  const DATA = [
    {
      title: 'Celia Lakin',
      id: '1',
    },
    {
      title: 'Hedio Varni',
      id: '2',
    },
  ];
  const [state, dispatch] = useReducer(reducer, DATA);

  const handleAddItem = () => {
    dispatch({ type: 'ADD', id: nextId.current, title: 'Hello' });
    nextId.current += 1;
  };

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task,
    });
  }

  const RenderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={require('./assets/tick.png')} style={styles.iconInput} />
      <Text style={{ flex: 1 }}>{item.title}</Text>
      <View>
        <TouchableOpacity
          style={styles.buttonItem}
          onPress={() => dispatch({ type: 'DEL', id: item.id })}>
          <Text style={styles.buttonText}>delete</Text>
        </TouchableOpacity>
      </View>
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
        <Image
          source={require('./assets/search.png')}
          style={styles.iconInput}
        />
        <TextInput style={styles.input} placeholder="Search" />
      </View>

      <FlatList
        data={state}
        renderItem={RenderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.flatList}
      />

      <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleAddItem}>
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
