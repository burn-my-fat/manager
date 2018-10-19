import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBnFJzF5r39-xLSDOtjs4Kb52TjKXzoKl8',
      authDomain: 'manager-c3bc9.firebaseapp.com',
      databaseURL: 'https://manager-c3bc9.firebaseio.com',
      projectId: 'manager-c3bc9',
      storageBucket: 'manager-c3bc9.appspot.com',
      messagingSenderId: '733340301178'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
