import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const YourApp = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, justifyContent: 'center', flexDirection: 'row' }}>
        <Image source={require('./img/usb.png')} style={styles.images} />
        <Text style={styles.title}>
          USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa
          bluetooth
        </Text>
      </View>

      <View style={{ flex: 2, alignItems: 'center', marginTop:20}}>
        <Text style={styles.title}>Cực kỳ hài lòng</Text>
        <View style={styles.startContainer}>
          <Image
            source={require('./img/star.png')}
            style={styles.imagesStart}
          />
          <Image
            source={require('./img/star.png')}
            style={styles.imagesStart}
          />
          <Image
            source={require('./img/star.png')}
            style={styles.imagesStart}
          />
          <Image
            source={require('./img/star.png')}
            style={styles.imagesStart}
          />
          <Image
            source={require('./img/star.png')}
            style={styles.imagesStart}
          />
        </View>
      </View>

      <View style={styles.hinhAnh}>
        <Image source={require('./img/camera.png')} />
        <TouchableOpacity>
          <Text style={styles.title}>Thêm hình ảnh</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoLink}>
        <Text style={styles.infoLike}>
          Hãy chia sẻ những điều mà bạn thích về sản phẩm
        </Text>
        <Text>https://meet.google.com/nsj-ojwi-xpp</Text>
      </View>

      <View style={{ flex: 3 }}>
        <View style={styles.login}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Gửi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  images: {
    marginHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  imagesStart: {
    height: 35,
    width: 35,
    marginHorizontal: 6,
  },

  startContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 20,
  },

  hinhAnh: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    marginTop: 30,
    marginLeft: 40,
    padding: 20,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'blue',
  },

  infoLink: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 20,
    width: '90%',
    marginVertical: 30,
    height: 100,
  },

  infoLike: {
    fontSize: 18,
    textAlign: 'center',
  },

  login: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    width: '90%',
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default YourApp;
