import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider, connect } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reduce from './app/reducers';

import { RootNavigator, SignUpNavigator} from './app/navigators';

let loggerMiddleware = createLogger({ predcate: (getState, action) => __DEV__});

function configureStore(initialState) {
  let enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      // loggerMiddleware,
    ),
  );
  return createStore(reduce, initialState, enhancer);
}

let store = configureStore({});


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator/>
      </Provider>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
