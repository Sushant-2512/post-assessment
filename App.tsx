import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import Up from './components/Up';
import Home from './components/Home';

const App = () => {
  return (
    <Provider store={store}>
      <Up />
    </Provider>
  );
};

export default App;
