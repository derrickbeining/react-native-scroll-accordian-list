import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import store from './redux';

const App = () => {
  return (
    <Provider store={store}>
      <View />
    </Provider>
  )
}

export default App;
