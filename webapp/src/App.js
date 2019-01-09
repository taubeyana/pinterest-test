import React, { Component } from 'react';
import './App.css';
import './services/fontAwesome'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux';
import AppRouter from './router/AppRouter';

export const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <AppRouter/>
      </Provider>
    );
  }
}
export default App;