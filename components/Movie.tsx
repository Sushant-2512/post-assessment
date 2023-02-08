import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
const Movie = () => {
  return (
    <View style={styles.movie}>
      <Image
        source={{
          uri: 'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg',
        }}
        resizeMode="stretch"
        style={styles.backImage}
      />
      <View style={styles.movieData}>
        <View>
          <Text style={{...styles.mainText, alignSelf: 'center'}}>
            Game of Thrones
          </Text>
          <Text style={{...styles.mainText, alignSelf: 'center'}}>
            (Series)
          </Text>
        </View>
        <View style={styles.left}>
          <Text style={styles.mainText}>David Fincher</Text>
          <Text style={styles.mainText}>01 Oct 2010</Text>
          <Text style={styles.mainText}>$ 96962</Text>
        </View>
        <View style={styles.ratings}>
          <View style={styles.rating}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Image
                source={{
                  uri: 'https://www.freepnglogos.com/uploads/star-png/star-png-transparent-image-pngpix-5.png',
                }}
                style={{width: 20, height: 20}}
              />
              <Text style={styles.mainText}>7.8</Text>
            </View>
            <Text style={styles.mainText}>Internet Movie Database</Text>
            <Text style={styles.mainText}>(10)</Text>
          </View>
          <View style={styles.rating}>
            <Text style={styles.mainText}>7.8</Text>
            <Text style={styles.mainText}>Internet Movie Database</Text>
            <Text style={styles.mainText}>(10)</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backImage: {
    width: '70%',
    height: '45%',
    borderRadius: 5,
    marginTop: '8%',
    opacity: 1,
    alignSelf: 'center',
  },
  movie: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  movieData: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    flex: 1,
    margin: '10%',
  },
  mainText: {
    marginLeft: 10,
    marginBottom: 4,
    fontSize: 20,
    fontWeight: '500',
    textTransform: 'none',
    color: '#fff2cc',
  },
  left: {},
  ratings: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  rating: {
    display: 'flex',
    flexDirection: 'column',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Movie;
