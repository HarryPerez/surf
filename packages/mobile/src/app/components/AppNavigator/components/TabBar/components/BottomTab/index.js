import React from 'react';
import { bool, shape, string } from 'prop-types';
import i18next from 'i18next';
import { View } from 'react-native';

import Text from '@components/Text';
import Icon from '@components/Icon';

import { ROUTES_ICONS, ICON_SIZE } from './constants';
import styles from './styles';

function BottomTab({ route, isFocused }) {
  return (
    <View>
      <Icon
        style={[styles.icon, isFocused && styles.iconFocus]}
        source={ROUTES_ICONS[route.name]}
        size={ICON_SIZE}
        noMargin={!isFocused}
      />
      <Text style={isFocused && styles.focus} bold={isFocused} brandPrimary>
        {i18next.t(`App:${route.name}`)}
      </Text>
    </View>
  );
}

BottomTab.propTypes = {
  route: shape({
    name: string
  }),
  isFocused: bool
};

export default BottomTab;
