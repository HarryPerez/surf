import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { statusBarStyles } from '@config/navigation';

import { navigationRef, getActiveRoute } from './helper';
import Navigator from './navigator';

const AppNavigator = () => {
  const [routeName, setRouteName] = useState('');

  useEffect(() => {
    setRouteName(getActiveRoute()?.name);
  }, []);
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar animated {...statusBarStyles(routeName)} />
      <Navigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
