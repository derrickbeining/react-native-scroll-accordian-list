import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import store from './redux';
import {Header, LibraryList} from './components';

const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <Header>Accordian Scroll List</Header>
        <LibraryList />
      </View>
    </Provider>
  )
}

export default App;
