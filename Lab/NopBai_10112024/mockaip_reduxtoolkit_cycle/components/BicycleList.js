import React, { useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCycles, setCategory, addCycle } from './cycleSlice';

export default CycleList = ({ navigation }) => {
  const dispatch = useDispatch();
  const { cycles, selectedCategory, loading } = useSelector(
    (state) => state.cycles
  );

  //load mockAPI
  useEffect(() => {
    dispatch(fetchCycles(selectedCategory));
  }, [selectedCategory, dispatch]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('BicycleDetail', { bicycle: item })}>
      <View style={styles.itemContainer}>
        <Image source={{ uri: `${item.image}.jpg` }} style={styles.image} />
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}><Text style={{color:'orange'}}>$</Text>{item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="small" color="#0000ff" />
        <Text>Loading Cycles</Text>
      </View>
    );
  }

  const handleAddItem = () => {
    const newCycle = {
      name: 'New Bike',
      price: '300',
      image: 'https://imgur.com/3KzBUGe',
      category: 'RoadBike',
    };
    dispatch(addCycle(newCycle));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>The world’s Best Bike</Text>
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedCategory === '' && styles.selectedButton,
          ]}
          onPress={() => dispatch(setCategory(''))}>
          <Text style={styles.filterText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedCategory === 'RoadBike' && styles.selectedButton,
          ]}
          onPress={() => dispatch(setCategory('RoadBike'))}>
          <Text style={styles.filterText}>RoadBike</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedCategory === 'Moutain' && styles.selectedButton,
          ]}
          onPress={() => dispatch(setCategory('Moutain'))}>
          <Text style={styles.filterText}>Mountain</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={cycles}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />

      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity style={styles.button} onPress={handleAddItem}>
          <Text style={styles.textButton}>Add Cycle</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontWeight: 'bold',
    color: 'red',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  filterButton: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: '#fff',
  },
  selectedButton: {
    backgroundColor: '#E941411A',
  },
  filterText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#F7BA8326',
    borderRadius: 10,
    marginBottom: 10,
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 15,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    marginTop: 5,
    color: '#555',
    marginLeft:25
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#E94141',
    paddingVertical: 10,
    paddingHorizontal: 25,
    alignItems: 'center',
    borderRadius: 15,
  },
  textButton: {
    color: 'white',
  },
});

