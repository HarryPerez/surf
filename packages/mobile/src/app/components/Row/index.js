import React from 'react';
import { View, Pressable, ViewPropTypes } from 'react-native';
import { func, bool, string } from 'prop-types';

import styles from './styles';

export const Row = ({ style, children, justify, align = 'center', reverse, ...props }) => {
  const Container = props?.onPress ? Pressable : View;
  return (
    <Container
      style={[
        styles.container,
        style,
        { alignItems: align },
        justify && { justifyContent: justify },
        reverse && styles.reverse
      ]}
      {...props}>
      {children}
    </Container>
  );
};

Row.propTypes = {
  style: ViewPropTypes.style,
  onPress: func,
  justify: string,
  align: string,
  reverse: bool
};

export default Row;
