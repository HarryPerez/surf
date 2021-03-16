/* eslint-disable react/no-children-prop */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { appStackNavConfig, appScreenNavOptions } from '@config/navigation';
import Routes from '@constants/routes';
import InitialLoading from '@screens/InitialLoading';

import { generateNavigator } from './utils';
import { TAB_BAR_SCREENS } from './constants';

const AppStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <AppStack.Navigator {...appStackNavConfig}>
      <AppStack.Screen
        name={Routes.InitialLoading}
        children={InitialLoading}
        options={appScreenNavOptions[Routes.InitialLoading]}
      />
      <AppStack.Screen
        name={Routes.Home}
        children={generateNavigator(BottomTab, TAB_BAR_SCREENS)}
        options={appScreenNavOptions[Routes.Home]}
      />
    </AppStack.Navigator>
  );
}
