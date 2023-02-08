import React from 'react';
import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList
} from 'react-native';
import Films from './Films';
import Trending from './Trending';

const Show = () => {

  
  return (
    <View style={styles.main}>
       
      <ScrollView style={styles.show}>
        <Trending/>
          <Films title="Movies" />
          <Films title="Series" />
      </ScrollView>
  

      <View style={styles.bar}>
        <TouchableOpacity style={styles.barItem}>
          <Text style={styles.barText}>Trending</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.barItem}>
          <Text style={styles.barText}>Movies</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.barItem}>
          <Text style={styles.barText}>Series</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    // backgroundColor:'red'
  },
  bar: {
    flexBasis: '5%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  barItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  barText: {
    fontSize: 20,
    fontWeight: '500',
    textTransform: 'none',
    color: '#fff2cc',
  },
  mainText: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: '200',
    textTransform: 'none',
    color: '#fff2cc',
  },
  show: {
    flexBasis: '95%',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    // backgroundColor:'red'
  },
});

export default Show;
