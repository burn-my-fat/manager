import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
