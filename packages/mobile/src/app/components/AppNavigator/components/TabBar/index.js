import React from 'react';
import { string } from 'prop-types';
import Row from '@components/Row';

import Tab from './components/Tab';
import styles from './styles';

function TabBar({ tabRoute, ...tabBarProps }) {
  const {
    state: { routes }
  } = tabBarProps;

  return (
    <Row style={[styles.container, styles[tabRoute]]}>
      {routes.map((route, index) => (
        <Tab key={route.name} route={route} index={index} tabBarProps={tabBarProps} />
      ))}
    </Row>
  );
}

TabBar.propTypes = {
  tabRoute: string
};

export default TabBar;
