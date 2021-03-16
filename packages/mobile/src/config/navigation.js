import React from 'react';
import statusBarConfig from '@constants/statusBar';
import Routes from '@constants/routes';
import TabBar from '@components/AppNavigator/components/TabBar';

const STATUS_BAR_STYLES = {
  [Routes.Home]: statusBarConfig.darkStatusBar
};

export const appStackNavConfig = {
  screenOptions: {
    cardOverlayEnabled: true
  }
};

export const appScreenNavOptions = {
  [Routes.InitialLoading]: {
    headerShown: false
  },
  [Routes.Home]: {
    headerLeft: null
  }
};

export const mainStackNavConfig = {
  gestureEnabled: true
};

export const mainTabNavConfig = {
  tabBar: props => <TabBar tabRoute={Routes.Home} {...props} />,
  initialRouteName: Routes.Menu
};

export const statusBarStyles = route => STATUS_BAR_STYLES[route] || statusBarConfig.whiteStatusBar;
