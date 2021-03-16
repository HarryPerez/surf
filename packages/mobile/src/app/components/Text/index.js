import React, { useCallback } from 'react';
import { Text as TextRN, Animated } from 'react-native';
import { func, bool, shape } from 'prop-types';
import { getCustomStyles } from '@utils/style';

import styles from './styles';
import { VARIANTS } from './constants';

function Text(props) {
  const customStyles = useCallback(() => getCustomStyles(VARIANTS, props, styles), [props]);
  const { textProps, style, children, animated, onPress, disabled, onLayout } = props;
  const TextComp = animated ? Animated.Text : TextRN;
  const handlePress = () => {
    if (!disabled && onPress) {
      onPress();
    }
  };
  return (
    <TextComp
      {...textProps}
      {...(onPress && { onPress: handlePress })}
      style={[styles.base, customStyles(), style]}
      allowFontScaling={false}
      onLayout={onLayout}>
      {children}
    </TextComp>
  );
}

Text.defaultProps = {
  textProps: {}
};

Text.propTypes = {
  textProps: shape({ ...TextRN.propTypes }),
  onPress: func,
  animated: bool,
  disabled: bool,
  onLayout: func
};

export default Text;
