import React from 'react';
import { Pressable } from 'react-native';
import { string, shape, func, number } from 'prop-types';

import BottomTab from '../BottomTab';

import styles from './styles';

function Tab({ tabBarProps: { navigation, state }, route, index }) {
  const isFocused = state.index === index;

  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true
    });
    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  return (
    <Pressable onPress={onPress} justify="center" style={styles.container}>
      <BottomTab isFocused={isFocused} route={route} />
    </Pressable>
  );
}

Tab.propTypes = {
  tabBarProps: shape({
    navigation: shape({
      emit: func,
      navigation: func
    }),
    state: shape({
      index: number
    })
  }),
  route: shape({
    key: string,
    name: string
  }),
  index: number
};

export default Tab;
