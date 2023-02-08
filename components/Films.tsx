import React, { useState } from 'react';
import {View, Text, TouchableHighlight, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

const Films = (props) => {
  const data = useSelector(store => {
    // console.log(store.showReducer.state);
    return store.showReducer.data;
  });
  const [isPress,setIsPress]=useState(-1)

  // console.log(data);
  

  const render=(e,id)=>
  {
      return (   <TouchableHighlight key={id} style={ styles.press}
        onLongPress= { () =>  setIsPress(id)}
        onHideUnderlay={ () =>  setIsPress(-1)}
         onPress= {()=> {} }
       >
           <View style={isPress==id ? {...styles.movie,position:'absolute',width:150,height:200,zIndex:4}: styles.movie}>
         <Image
           source={{
             uri: e.Poster,
           }}
           resizeMode="stretch"
           style= {styles.backImage}
         />
          <Text style={isPress==id ? styles.textExpand : styles.text  }>{e.Title}</Text>
         </View>
        
       </TouchableHighlight>)
  }
  return (
    <View style={styles.main}>
      <Text style={styles.mainText}>{props.title}</Text>
      <View style={styles.movies}>
        {data.map((ele, index) => {
          return (
             render(ele,index)
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
    paddingVertical:10,
    flex:1,
  },
  mainText: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 20,
    fontWeight: '500',
    textTransform: 'none',
    color: '#fff2cc',
    flexBasis: '10%',
  },
  movieContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '90%',
    flex:1
  },
  movies: {
    flexBasis: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'flex-start',
    flex:1,
    flexWrap:'wrap',
  },
  movie: {
    display: 'flex',
    width:130,
    height:180,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 30,
    paddingHorizontal: 10,
    
  },
  backImage: {
    width: '90%',
    height: '90%',
    borderRadius: 5,
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: '#c2d6d6',
  },
  textExpand:
  {
      
        fontSize:20,
        fontWeight: '500',
        color: '#c2d6d6',
        
  },
  press:
  {
      display:'flex',
      zIndex:0,
      flexBasis:'33.333%',
      flex:1,
      
  },
});
export default Films;
