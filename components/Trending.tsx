import React from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';

const Trending = () => {

  const [isPress,setIsPress]=useState(-1)
  return (
    <View style={styles.trending}>
      <Text style={styles.mainText}>Trending</Text>
      <ScrollView style={styles.scroll} horizontal={true}>
        <TouchableHighlight
        >
          <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg',
            }}
            resizeMode="stretch"
            style={styles.backImage}
          />
            <Text style={styles.text}>Game of thrones</Text>
            </View>
        </TouchableHighlight>
        <TouchableOpacity style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg',
            }}
            resizeMode="stretch"
            style={styles.backImage}
          />
            <Text style={styles.text}>Game of thrones</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainText: {
    marginLeft: 10,
    fontSize: 20,
    padding: '3%',
    fontWeight: '500',
    textTransform: 'none',
    color: '#fff2cc',
  },
  trending: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  backImage: {
    width: '60%',
    height: '85%',
    opacity: 1,
    borderRadius:10
  },
  imageContainer: {
    width: 400,
    height: 280,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    
  },
  scroll: {
    width: '100%',
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: '#c2d6d6',
  }
});
export default Trending;
