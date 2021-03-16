import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';

import store from '~redux/store';

import CoreSettingsWrapper from './components/CoreSettingsWrapper';
import Routes from './components/Routes';

const App = () => (
  <Provider store={store}>
    <CoreSettingsWrapper>
      <Routes />
    </CoreSettingsWrapper>
  </Provider>
);

export default hot(App);
