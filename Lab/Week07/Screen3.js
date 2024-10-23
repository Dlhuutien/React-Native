import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';

export default Screen3 = (props) => {
  const { navigation, route } = props;
  const { navigate, goBack } = navigation;
  const { name, id, title } = route.params; // Nhận cả id và title nếu là edit
  const [addText, setAddText] = useState(''); // Không cần hiển thị title khi edit
  const [data, setData] = useState({ title: '' });

  const url = 'https://670b39d4ac6860a6c2cb73c4.mockapi.io/discription';

  const addOrEditData = async () => {
    if (!addText.trim()) {
      Alert.alert('Error', 'Không được để trống');
      return;
    }

    try {
      if (id) {
        // Nếu có id thì chỉnh sửa
        const response = await fetch(url.concat('/').concat(id), {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title: addText }),
        });

        if (response.ok) {
          Alert.alert('Thành công', 'Chỉnh sửa thành công');
          navigation.goBack();
        } else {
          Alert.alert('Lỗi', 'Không thể chỉnh sửa job');
        }
      } else {
        // Nếu không có id thì thêm mới
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title: addText }),
        });

        if (response.ok) {
          Alert.alert('Thành công', 'Thêm thành công');
          navigation.goBack();
        } else {
          Alert.alert('Lỗi', 'Không thể thêm job');
        }
      }
    } catch (error) {
      console.error('Lỗi khi thêm/chỉnh sửa job:', error);
      Alert.alert('Lỗi', 'Không thể thêm/chỉnh sửa job');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Image source={require('./img/avatar.png')} />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.headerTitle}>Hi, {name}</Text>
            <Text style={styles.headerSubtitle}>Have a great day ahead</Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('./img/Back.png')} />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.title}>
          {id ? 'EDIT YOUR JOB' : 'ADD YOUR JOB'}
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Image source={require('./img/input.png')} style={styles.iconInput} />
        <TextInput
          style={styles.input}
          placeholder={id ? 'Edit your job' : 'Input your job'}
          onChangeText={(text) => {
            setAddText(text);
            setData({ ...data, title: text });
          }}
          value={addText}
        />
      </View>

      <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('./img/Image95.png')} style={styles.icon} />
      </View>

      <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity style={styles.button} onPress={addOrEditData}>
          <Text style={styles.buttonText}>
            {id ? 'SAVE CHANGES' : 'FINISH'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: '40%',
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    lineHeight: 48,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#00BDD6',
    paddingVertical: 10,
    alignItems: 'center',
    width: '30%',
    borderRadius: 10,
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
    fontWeight: 700,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 30,
    color: '#171A1F',
    marginLeft: 10,
  },
  inputContainer: {
    flex: 1,
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
