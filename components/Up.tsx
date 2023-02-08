import React, {useEffect} from 'react';
import {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import {Provider, useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import store from '../redux/store';
import Home from './Home';
import Show from './Show';
import {addAction} from '../redux/actions/showActions';

const Up = () => {
  const dispatch = useDispatch();
  const ids = [
    '1285016',
    '1630029',
    '15501640',
    '4169250',
    '12844910',
    '10698680',
  ];

  const [color, setColor] = useState('#fff2cc');
  const isShow = useSelector(store => {
    // console.log(store.showReducer.state.start);

    return store.showReducer.start;
  });

  //console.log(isShow);

  useEffect(() => {
    ids.forEach((id, index) => {
      fetch(`https://omdbapi.com/?i=tt${id}&apikey=a2242577&`).then(res => {
        res.json().then(res1 => {
          dispatch(addAction(res1));
        });
      });
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setColor(curr => {
        if (curr == '#fff2cc') {
          return 'white';
        } else {
          return '#fff2cc';
        }
      });
    }, 2000);
  }, [color]);
  return (
    <SafeAreaView style={{...styles.screen}}>
      {!isShow && <Home />}
      {isShow && <Show />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    backgroundColor: '#000000',
    borderWidth: 7,
    display: 'flex',
    zIndex: -1,
  },
});
export default Up;
