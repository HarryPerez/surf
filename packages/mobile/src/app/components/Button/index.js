import React, { Fragment } from 'react';
import { View, ActivityIndicator, ViewPropTypes, Text as RNText } from 'react-native';
import { func, string, bool, number } from 'prop-types';
import Icon from '@components/Icon';
import Row from '@components/Row';
import Text from '@components/Text';
import { sourceModel } from '@propTypes/source';

import { DEFAULT_BUTTON_ICON_SIZE } from './constants';
import styles from './styles';

const Button = ({
  onPress,
  style,
  icon,
  title,
  disabled,
  textStyle,
  loading,
  innerStyle,
  lowercase,
  iconSize = DEFAULT_BUTTON_ICON_SIZE
}) => {
  const InnerContainer = innerStyle ? View : Fragment;
  return (
    <Row
      onPress={onPress}
      style={[styles.container, style, disabled && styles.disabled]}
      justify="center"
      disabled={disabled}>
      <InnerContainer {...(innerStyle && { style: innerStyle })}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <>
            {!!icon && <Icon source={icon} size={iconSize} />}
            {!!title && (
              <Text uppercase={!lowercase} style={[styles.title, textStyle]}>
                {title}
              </Text>
            )}
          </>
        )}
      </InnerContainer>
    </Row>
  );
};

Button.propTypes = {
  onPress: func.isRequired,
  style: ViewPropTypes.style,
  icon: sourceModel,
  iconSize: number,
  title: string,
  disabled: bool,
  textStyle: RNText.propTypes.style,
  loading: bool,
  innerStyle: ViewPropTypes.style,
  lowercase: bool
};

export default Button;
