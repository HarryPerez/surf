import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';

import './src/config';
import store from './src/redux/store';
import App from './src/app';
import '@i18n';

function index() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default index;
