import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Series = () => {
  return (
    <View style={styles.series}>
      <Text style={styles.mainText}>Series</Text>
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  series: {
    width: '100%',
  },
  mainText: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: '500',
    textTransform: 'none',
    color: '#fff2cc',
  },
});
export default Series;
