import React from 'react';
import { Pressable, View, Image, ViewPropTypes } from 'react-native';
import { func, bool, number } from 'prop-types';
import { sourceModel } from '@propTypes/source';

import styles from './styles';
import { ICON_DEFAULT_SIZE } from './constants';

function Icon({ onPress, disabled, source, size = ICON_DEFAULT_SIZE, containerStyle, noMargin, style }) {
  const Component = onPress ? Pressable : View;
  return (
    <Component style={[!noMargin && styles.container, containerStyle]} disabled={disabled} onPress={onPress}>
      <Image style={[{ width: size, height: size }, style, disabled && styles.disabled]} source={source} />
    </Component>
  );
}

Icon.propTypes = {
  onPress: func,
  disabled: bool,
  source: sourceModel,
  size: number,
  containerStyle: ViewPropTypes.style,
  style: Image.propTypes.style,
  noMargin: bool
};

export default Icon;
