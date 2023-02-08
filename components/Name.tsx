import React, {useEffect, useRef, useState} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';

const Name = () => {
  const fadeIn = useRef(new Animated.Value(0)).current;
  const [name, setName] = useState('');
  const [nameIndex, setNameIndex] = useState(0);
  const ch = 'MRA';
  useEffect(() => {
    setTimeout(() => {
      //  console.log(nameIndex);
      if (nameIndex == ch.length) {
        setNameIndex(0);
        setName('');
      } else {
        setNameIndex(nameIndex => nameIndex + 1);
        setName(name => name + ch[nameIndex]);
      }
    }, 3000);
  }, [name]);

  useEffect(() => {
    Animated.loop(
      Animated.timing(fadeIn, {
        toValue: 1,
        useNativeDriver: true,
        duration: 3000,
      }),
    ).start();
  }, [fadeIn]);
  return (
    <>
      <Animated.View
        style={{
          ...styles.logo,
          opacity: fadeIn.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0.2],
          }),
        }}
      />
      <Text style={styles.name}>{name}</Text>
      <View />
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    position: 'absolute',
    alignSelf: 'center',
    width: '40%',
    height: 70,
    backgroundColor: 'red',
    borderRadius: 70 / 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  name: {
    zIndex: 2,
    fontSize: 30,
    alignSelf: 'center',
    position: 'absolute',
  },
});
export default Name;
