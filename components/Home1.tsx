import React, {useEffect, useRef, useState} from 'react';
import {View, Animated, Text, Image, StyleSheet} from 'react-native';
import Lottie from 'lottie-react-native';
import {useSelector} from 'react-redux';

import Name from './Name';
const Home = () => {
  const progress = useRef(new Animated.Value(0)).current;
  const progressDegree = useRef(new Animated.Value(0)).current;
  const fadeIn = useRef(new Animated.Value(1)).current;
  const [index, setIndex] = useState(0);

  const url = [
    'https://m.media-amazon.com/images/I/71niXI3lxlL._SY741_.jpg',
    'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_SX300.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/12_Angry_Men_%281957_film_poster%29.jpg/392px-12_Angry_Men_%281957_film_poster%29.jpg',
  ];
  var Anim;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(progress, {
            toValue: 1,
            useNativeDriver: true,
            duration: 2000,
          }),
          Animated.timing(progressDegree, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.timing(fadeIn, {
            toValue: 0,
            useNativeDriver: true,
            duration: 3000,
          }),
        ]),
      ]),
    ).start();
  }, [progress, progressDegree]);

  useEffect(() => {
    setTimeout(() => {
      setIndex(index => (index + 1) % url.length);
    }, 3000);
  }, [index]);
  return (
    <>
      <View style={styles.home}>
        <Lottie
          style={styles.loading}
          source={require('../assets/Images/loading.json')}
          autoPlay
          loop
        />
        <Text style={styles.title}>Movie Rating App !</Text>
        <Name />
      </View>
      <View>
        <Animated.View
          style={{
            transform: [
              {
                translateX: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [300, 150],
                }),
              },
              {
                translateY: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 350],
                }),
              },
              {
                rotateX: progressDegree.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['90deg', '0deg'],
                }),
              },
              {
                rotateY: progressDegree.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['90deg', '0deg'],
                }),
              },
            ],
            opacity: fadeIn,
          }}>
          <Image
            style={styles.movieImage}
            source={{
              uri: url[index],
            }}
          />
        </Animated.View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  movieImage: {
    height: 100,
    width: 100,
    position: 'absolute',
  },
  home: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  loading: {
    height: 200,
    width: 200,
    position: 'absolute',
    marginTop: 50,
    color: '#fff2cc',
  },
  title: {
    fontSize: 40,
    marginTop: 40,
    fontFamily: 'bold',
  },
});
export default Home;
