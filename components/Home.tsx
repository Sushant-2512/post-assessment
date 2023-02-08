import {StyleSheet, View, Text} from 'react-native';
import Lottie from 'lottie-react-native';
import {Animated, Dimensions} from 'react-native';
import {useEffect, useRef} from 'react';
import {useDispatch} from 'react-redux';
import {startAction} from '../redux/actions/showActions';

const Home = () => {
  const angle = useRef(new Animated.Value(0)).current;
  const fadeIn = useRef(new Animated.Value(0)).current;
  const h = Dimensions.get('window').height;
  const w = Dimensions.get('window').width;
  //   const move = useRef(new Animated.ValueXY({x: w, y: h / 2})).current;
  //new Animated.ValueXY({x: w / 2, y: h / 2})
  const move = useRef(new Animated.Value(0)).current;
  const moveL = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      Animated.sequence([
        Animated.parallel([
          Animated.timing(move, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.timing(angle, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
          }),
        ]),
        Animated.timing(moveL, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ]).start(() => {
        // console.log('alay');
        
        dispatch(startAction(true));
      });
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.filmContainer,
          transform: [
            {
              rotateZ: angle.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '45deg'],
              }),
            },
            {
              translateX: move.interpolate({
                inputRange: [0, 1],
                outputRange: [w / 2 - 200, w / 2 - 300],
              }),
            },
          ],
          opacity: fadeIn.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
          }),
        }}>
        <Lottie
          style={styles.logo}
          source={require('../assets/Images/Film.json')}
          autoPlay
          loop={false}
        />
      </Animated.View>

      <Animated.View
        style={{
          ...styles.filmContainer,
          transform: [
            {
              translateX: move.interpolate({
                inputRange: [0, 1],
                outputRange: [w, w / 2 - 200],
              }),
            },
          ],
        }}>
        <Text style={{fontSize: 50, color: 'red', marginTop: '50%'}}>
          Ratinger
        </Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  logo: {
    width: '100%',
    position: 'absolute',
  },
  filmContainer: {
    width: '50%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
});
export default Home;
